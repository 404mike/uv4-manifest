#!/usr/bin/env python3
"""Validate a Mango story JSON against the skill checklist."""
import json, sys, re

def fail(msgs, m): msgs.append("FAIL: " + m)
def warn(msgs, m): msgs.append("warn: " + m)

def check(path, img_w, img_h, audio_dur):
    doc = json.load(open(path))
    msgs = []
    assert doc.get("mango:storyVersion") == "1.0", "page storyVersion"
    assert doc.get("type") == "AnnotationPage"
    ctx = doc.get("@context")
    assert isinstance(ctx, list) and ctx[0] == "http://iiif.io/api/presentation/3/context.json"
    assert ctx[1].get("mango") == "https://mango-iiif.github.io/ns/story#"
    ids = set()
    chapters = []
    for item in doc["items"]:
        i = item["id"]
        if i in ids: fail(msgs, f"duplicate id {i}")
        ids.add(i)
        if item.get("motivation") == "supplementing":
            chapters.append(item)
    prev_end = None
    for ch in chapters:
        cid = ch["id"].rsplit("/",1)[-1]
        state = None; sound = None
        for b in ch["body"]:
            if b.get("type") == "mango:ViewerState":
                state = b
            if b.get("type") == "Sound":
                sound = b
        if state is None: fail(msgs, f"{cid}: no ViewerState"); continue
        if state.get("mango:storyVersion") != "1.0": fail(msgs, f"{cid}: body storyVersion")
        if state.get("format") != "application/vnd.mango.story-state+json": fail(msgs, f"{cid}: format")
        ms = state["mangoState"]
        vb = ms["viewBox"]
        for k in ("x","y","w","h"):
            if not isinstance(vb[k], (int,float)): fail(msgs, f"{cid}: viewBox {k} non-numeric")
        if vb["x"] < 0 or vb["y"] < 0 or vb["x"]+vb["w"] > img_w or vb["y"]+vb["h"] > img_h:
            fail(msgs, f"{cid}: viewBox out of bounds {vb}")
        pb = ms.get("playback")
        if not pb or not isinstance(pb.get("transitionMs"), (int,float)) or pb["transitionMs"] < 1:
            fail(msgs, f"{cid}: playback.transitionMs invalid")
        # target selector mirrors viewBox
        sel = ch["target"]["selector"]["value"]
        m = re.match(r"xywh=(\d+),(\d+),(\d+),(\d+)", sel)
        if not m: fail(msgs, f"{cid}: bad selector {sel}")
        else:
            sx,sy,sw,sh = map(int, m.groups())
            if abs(sx-vb["x"])>1 or abs(sy-vb["y"])>1 or abs(sw-vb["w"])>1 or abs(sh-vb["h"])>1:
                fail(msgs, f"{cid}: selector {sel} != viewBox {vb}")
        if "partOf" not in ch["target"] or not ch["target"]["partOf"].get("id"):
            fail(msgs, f"{cid}: missing target.partOf.id")
        # audio slice
        if sound:
            m = re.search(r"#t=([\d.]+),([\d.]+)", sound["id"])
            if not m: fail(msgs, f"{cid}: bad sound fragment")
            else:
                s,e = float(m.group(1)), float(m.group(2))
                if e <= s: fail(msgs, f"{cid}: audio end<=start")
                if e > audio_dur + 0.5: fail(msgs, f"{cid}: audio end {e} > duration {audio_dur}")
                if prev_end is not None and s < prev_end - 0.01:
                    fail(msgs, f"{cid}: audio start {s} overlaps prev end {prev_end}")
                prev_end = e
        # camera track
        ct = ms.get("cameraTrack")
        if ct:
            if ct.get("preset") not in ("static","zoom-in","zoom-out","pan","drift-zoom","ken-burns","hero-reveal","arc-sweep","custom",None):
                fail(msgs, f"{cid}: bad preset {ct.get('preset')}")
            if ct.get("easing") not in ("linear","ease-in","ease-out","ease-in-out",None):
                fail(msgs, f"{cid}: bad easing")
            if ct.get("pathType") not in ("linear","spline",None):
                fail(msgs, f"{cid}: bad pathType")
            kfs = ct.get("keyframes", [])
            kids = set(); last_t = -1
            for kf in kfs:
                if "viewBox" not in kf: fail(msgs, f"{cid}: keyframe missing viewBox"); continue
                k = kf["viewBox"]
                for c in ("x","y","w","h"):
                    if not isinstance(k.get(c), (int,float)): fail(msgs, f"{cid}: kf {kf.get('id')} viewBox {c} bad")
                if k["x"]<0 or k["y"]<0 or k["x"]+k["w"]>img_w or k["y"]+k["h"]>img_h:
                    fail(msgs, f"{cid}: kf {kf.get('id')} out of bounds {k}")
                if kf.get("id") in kids: fail(msgs, f"{cid}: dup kf id")
                kids.add(kf.get("id"))
                if kf["timeMs"] <= last_t and last_t != -1: fail(msgs, f"{cid}: kf times not ascending")
                last_t = kf["timeMs"]
            if kfs and kfs[-1]["timeMs"] > ct["durationMs"]:
                fail(msgs, f"{cid}: last kf time > durationMs")
        # drawings
        for d in ms.get("drawingAnnotations", []):
            r = d.get("rect") or d.get("point")
            if r:
                w = r.get("w",0); h = r.get("h",0)
                if r["x"]<0 or r["y"]<0 or r["x"]+w>img_w or r["y"]+h>img_h:
                    fail(msgs, f"{cid}: drawing {d['id']} out of bounds")
    # overlays reference real chapters
    chap_ids = {c2["body"][ [b.get("type") for b in c2["body"]].index("mango:ViewerState") ]["mangoState"]["chapterId"] for c2 in chapters}
    for item in doc["items"]:
        if item.get("mango:role") == "overlay":
            if item.get("mango:chapterId") not in chap_ids:
                fail(msgs, f"overlay {item['id']}: chapterId {item.get('mango:chapterId')} not found")
    errors = [m for m in msgs if m.startswith("FAIL")]
    print(f"{path}: {len(chapters)} chapters, {len(errors)} errors")
    for m in msgs: print(" ", m)
    return not errors

if __name__ == "__main__":
    ok = check(sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), float(sys.argv[4]))
    sys.exit(0 if ok else 1)
