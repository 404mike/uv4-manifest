#!/usr/bin/env python3
"""Build all five Mango stories.

Engine-verified authoring model (viewer 0.3.3):
- cameraTrack preset MUST be "custom" with pathType "linear" — the only mode where
  the player reproduces authored keyframe viewBoxes faithfully (named presets
  regenerate keyframe geometry from internal formulas; A/B verified 2026-08-02).
- keyframe timeMs is redistributed uniformly by the engine — pacing is controlled
  by keyframe count/placement, not timeMs.
- Chapter entry tweens to the FIRST keyframe: continuity chapters inherit the
  previous chapter's final frame as kf0 (invisible join, transitionMs 600 absorbs
  clamping drift); cut=True chapters open directly on their own first frame with
  transitionMs 1 (an intentional hard cut).
- Audio boundaries sit in word-level silence gaps; track settles 200ms early.
"""
import json

ART = {
    "stoke-by-nayland": dict(
        w=8690, h=6397,
        manifest="https://api.artic.edu/api/v1/artworks/4758/manifest.json",
        canvas="https://www.artic.edu/iiif/2/400ce9e8-2f67-44e2-dd68-e6c98880d27f",
        audio="https://www.artic.edu/assets/86aaf438-63d2-52ea-f883-e81dac4ee695",
        title="Stoke-by-Nayland — John Constable",
        summary="A summer morning after rain: curator Gloria Groom on Constable's freely brushed vision of the Suffolk countryside, painted a year before his death.",
    ),
    "st-john-patmos": dict(
        w=6092, h=4508,
        manifest="https://api.artic.edu/api/v1/artworks/5848/manifest.json",
        canvas="https://www.artic.edu/iiif/2/aa870b0d-5a1b-660a-6dc6-56c12109cf6e",
        audio="https://www.artic.edu/assets/2364b23c-f4e0-ce4e-9d65-d31a6b0f5dff",
        title="Landscape with Saint John on Patmos — Nicolas Poussin",
        summary="Saint John writes the Book of Revelation amid the ruins of a pagan world, in Poussin's serene, geometrically ordered classical landscape of 1640.",
    ),
    "fountain-villa-torlonia": dict(
        w=4414, h=5659,
        manifest="https://api.artic.edu/api/v1/artworks/69780/manifest.json",
        canvas="https://www.artic.edu/iiif/2/3f9aa9db-61e1-7060-fdb0-bfd7e41ddd08",
        audio="https://www.artic.edu/assets/311c5eb9-7ee8-ad6d-f55e-62045cd798ea",
        title="The Fountain, Villa Torlonia — John Singer Sargent",
        summary="A symphony of whites: Sargent paints his friends Jane and Wilfrid de Glehn painting en plein air at Frascati in 1907 — a scene of light, texture, and quiet determination.",
    ),
    "the-bedroom": dict(
        w=12614, h=9875,
        manifest="https://api.artic.edu/api/v1/artworks/28560/manifest.json",
        canvas="https://www.artic.edu/iiif/2/6644829f-f292-c5c4-a73c-0356a6fdbf0d",
        audio="https://www.artic.edu/assets/02e976d2-8c4a-3cc2-9d2b-3cee40fe8291",
        title="The Bedroom — Vincent van Gogh",
        summary="Van Gogh's bedroom in the Yellow House at Arles: a simple room painted alive — inviting, discomforting, and unlike anything else in the art of its time.",
    ),
    "paris-street-rainy-day": dict(
        w=9987, h=7755,
        manifest="https://api.artic.edu/api/v1/artworks/20684/manifest.json",
        canvas="https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27",
        audio="https://www.artic.edu/assets/8313475f-a89a-035d-8a5b-93ac1bfcc69d",
        title="Paris Street; Rainy Day — Gustave Caillebotte",
        summary="A film still before film existed: Caillebotte freezes a rainy Paris intersection in 1877 — near life-size, radically cropped, and startlingly modern.",
    ),
}

# Chapter spec: (label, summary, t0, t1, dest_frames [(x,y,w), ...], opts)
# Frames are (x, y, w) in full-res pixels; h is derived from the image aspect.
# kf0 is inherited from the previous chapter's end unless opts.get("cut").
STORIES = {
"stoke-by-nayland": [
    ("A summer morning, 1836",
     "John Constable painted this wonderfully fresh view of a village in his native eastern England in 1836, just a year before his death.",
     0, 13.7, [(900, 650, 6900)], {}),
    ("Brushstrokes and texture",
     "\"What you're aware of when you stand in front of this painting is the brushstrokes — the incredible textures.\" The camera dives into the scumbled impasto of Constable's sky.",
     13.7, 21.04, [(2500, 900, 2600), (2950, 1300, 1300)], {}),
    ("Figure and ground",
     "The texture of the trees flows over to describe the people — a sense of integration of figure to ground.",
     21.04, 30.77, [(1950, 4300, 2600), (2150, 4550, 1800)], {}),
    ("The dewiness of the morning",
     "A sense of being there: the dewiness of this morning, the wetness, the heaviness of the moisture on the trees.",
     30.77, 40.36, [(3700, 1300, 2200), (3500, 4000, 1800)], {}),
    ("Sketch or finished picture?",
     "Scholars still debate whether this freely brushed canvas — painted as much with a palette knife as with brushes — was a preparatory sketch for a six-foot landscape, or finished in itself.",
     40.36, 52.18, [(4900, 4990, 2400), (1500, 4990, 2400)], {}),
    ("Everything is there",
     "\"I tend to think it really is finished, because everything is there — and it's also beautifully harmonized. It's an incredibly moving painting.\"",
     52.18, 63.38, [(1500, 1200, 6000), (300, 200, 8100)], {}),
    ("Ennobling a nondescript place",
     "Such a nondescript place — yet Constable ennobles it, through the size of the painting and his incredible interest in how the atmosphere impacts this landscape.",
     63.38, 81.58, [(400, 1700, 4300), (900, 2450, 1700)], {}),
    ("How did he translate that into paint?",
     "An early morning after the rain — that's exactly the feeling you get. And you think: how did he translate that into paint?",
     81.58, 94, [(500, 900, 7300), (0, 0, 8690)], dict(delayMs=500)),
],
"st-john-patmos": [
    ("Saint John writes Revelation",
     "In the foreground of this serene landscape, Saint John the Evangelist sits writing the Book of Revelation — the visionary last book of the New Testament.",
     0, 10.05, [(2950, 3300, 1350)], {}),
    ("The eagle of Saint John",
     "An eagle — Saint John's traditional symbol — stands just behind him.",
     10.05, 14.76, [(4120, 3430, 750)], {}),
    ("A fallen pagan world",
     "The saint represents the advent of the new Christian faith, which will replace the fallen pagan beliefs alluded to by the classical ruins around him.",
     14.76, 24.29, [(850, 2500, 2600), (1100, 2900, 1500)], {}),
    ("Poussin in Rome",
     "The painting was made by the great seventeenth-century French artist Nicolas Poussin in Rome, where he spent much of his working life.",
     24.29, 33.41, [(500, 400, 5100), (0, 0, 6092)], {}),
    ("Clarity and geometry",
     "A perfect example of Poussin's idealized classical landscapes, constructed with a sense of clarity and geometry.",
     33.41, 42.37, [(0, 800, 4200), (1890, 800, 4200)], {}),
    ("The zigzag path",
     "Notice how the path behind Saint John zigzags its way back into the middle distance, the trees diminishing in size to help create a sense of depth.",
     42.37, 53.5, [(3600, 1850, 2300), (4050, 1600, 1450)], {}),
    ("Echoing verticals",
     "The upright classical pedestal near the saint is echoed by the tall tree behind it — and again by the ancient temple columns and obelisk in the distance.",
     53.5, 66.04, [(850, 1650, 2100), (2150, 1300, 1250)], {}),
    ("Painted for connoisseurs",
     "Poussin's work was highly appreciated by cultivated, classically educated collectors among the Roman and French aristocracy. Curator Martha Wolff.",
     66.04, 75.89, [(700, 500, 4700), (0, 0, 6092)], {}),
    ("Stoic calm",
     "Poussin and his admirers were drawn to Stoic philosophy — the rationality of the landscape and its calmness were probably very appealing.",
     75.89, 88.5, [(250, 200, 5600)], dict(delayMs=500)),
],
"fountain-villa-torlonia": [
    ("Light and texture",
     "\"For me, this painting is all about light and texture.\" Julie Simek, conservator of paintings.",
     0, 10.75, [(500, 600, 3400)], {}),
    ("Light on every surface",
     "Light plays off all the different objects, materials, and surfaces — and the texture of those objects, as well as the paint texture Sargent adds, holds our interest.",
     10.75, 23.24, [(450, 100, 2700), (1100, 1900, 2700)], {}),
    ("A portrait and a landscape",
     "Both a portrait and a landscape: Jane Emmet de Glehn and her husband Wilfrid, professional painters travelling alongside Sargent in the Roman countryside in 1907.",
     23.24, 42.9, [(600, 850, 2500), (750, 950, 2250)], {}),
    ("A symphony of whites",
     "Painted en plein air, this is a symphony of whites: Jane's all-white painting smock, her white hat, and a bluish-white veil. Annelise Madsen, curator of American art.",
     42.9, 62.28, [(1800, 900, 1000), (1850, 1400, 900)], {}),
    ("The spray of the fountain",
     "Wilfrid is in a white shirt and light pants — and behind them, the magnificent spray of the fountain.",
     62.28, 69.13, [(550, 1600, 1300), (500, 150, 1300)], {}),
    ("Ridges of paint",
     "Ambient light hits the impasto — the paint texture built up during painting. In Jane's clothing, distinct brushstrokes defined by ridges of paint enhance the sense of light playing off the folds.",
     69.13, 91.13, [(1800, 2350, 950), (1950, 2900, 600)], {}),
    ("Dodging the rain",
     "Despite its sense of freshness and swiftness, the scene took some doing — Sargent, Wilfrid, and Jane dodged rain day after day as they worked.",
     91.13, 108.73, [(700, 900, 3000), (150, 150, 4100)], {}),
    ("The mastery of the scene",
     "They had to keep going back out to the site until Sargent could get it done. It looks dashed off in one quick round — but it took determination. That is the mastery of the scene.",
     108.73, 128, [(0, 0, 4414)], dict(delayMs=500)),
],
"the-bedroom": [
    ("Why we are drawn to it",
     "Gloria Groom, curator of European painting and sculpture: one of the reasons people are so drawn to this painting is the subject matter itself.",
     0, 13.9, [(1100, 850, 10400)], {}),
    ("His paintings, his furniture",
     "Van Gogh is painting his own bedroom — with his paintings in it, and the furniture that he purchased.",
     13.9, 22.41, [(6300, 0, 4800), (7700, 50, 2600)], {}),
    ("The Yellow House at Arles",
     "This was Van Gogh's bedroom in his house in Arles, where he lived in the late 1880s — and where he dreamt of establishing an artists' collective, a Studio of the South.",
     22.41, 35.21, [(2000, 0, 4600), (2500, 350, 2600)], {}),
    ("A place to call home",
     "Initially Van Gogh was filled with great optimism about the endeavor — and the idea of finally finding a place to call home.",
     35.21, 44.02, [(6100, 2100, 5400), (6600, 2500, 4600)], {}),
    ("\"An empty bedroom\"",
     "The room is simple, almost austere. To Theo he wrote: \"He'll probably find the interior the ugliest — an empty bedroom with a wooden bed and two chairs. Yet I've painted it twice on a large scale.\"",
     44.02, 61.82, [(300, 3700, 3000), (3400, 2700, 3000), (6400, 2700, 4400)], {}),
    ("One of his very best",
     "Van Gogh considered this painting one of his very best. He makes it look so interesting and inviting — and at the same time rather discomforting.",
     61.82, 74.89, [(2000, 1500, 9000), (0, 0, 12614)], {}),
    ("Splayed-out floorboards",
     "The way the paint is laid on — its brokenness, the extreme radicalness of these splayed-out floorboards — brings a definite unease, an unsettledness.",
     74.89, 89.23, [(1600, 4900, 6200), (3600, 6600, 2400)], {}),
    ("Shattered dreams",
     "That unease likely relates to Van Gogh's state of mind. He painted this version after a mental breakdown, from the asylum — knowing he would never have that kind of home of his own.",
     89.23, 109.26, [(6700, 2400, 3800), (7300, 2950, 2400)], {}),
    ("Painted alive",
     "Ordinary furnishings — but the way the room is painted makes it alive, with an excitement we just don't expect in the art of that period. It is very unusual.",
     109.26, 127.5, [(1200, 900, 10300), (0, 0, 12614)], dict(delayMs=500)),
],
"paris-street-rainy-day": [
    ("A painting to walk into",
     "Because of the near life-size scale of the figures, it's a painting one wants to just walk into. This is Paris Street; Rainy Day — Gustave Caillebotte's largest painting.",
     0, 14.13, [(700, 550, 8600)], {}),
    ("A frozen film sequence",
     "Gloria Groom, curator of European painting and sculpture: think of this almost as a film sequence that has somehow been stopped — the figures frozen mid-frame.",
     14.13, 29.13, [(0, 900, 7200), (2600, 900, 7200)], {}),
    ("Many, many figures",
     "There are many, many figures in this painting — the camera roams the pedestrians on the left and centre of the scene.",
     29.13, 33.8, [(1200, 3550, 1700), (3000, 3600, 1700)], {}),
    ("The elegant couple",
     "…and our eye is first focused on this amazingly elegant couple.",
     33.8, 39.4, [(5300, 2700, 2600), (5750, 3100, 1900)], dict(cut=True)),
    ("The imminent collision",
     "Then you see the man on the right, cut off by the picture frame — certain to collide with the couple. Someone will have to move their umbrella; his elbow looks like it's going straight into her.",
     39.4, 60.47, [(7700, 3200, 2200), (8450, 3950, 1500)], {}),
    ("What only painting could do",
     "Caillebotte is playing with the idea of photography — yet photography could not have captured this. The camera wanders the frozen background: a figure mid-stride, a waiting carriage.",
     60.47, 85.93, [(5900, 2950, 1300), (3350, 3250, 1200), (600, 3100, 1400)], {}),
    ("Everything new in 1877",
     "Here Caillebotte shows off everything new in Paris in 1877 — the camera returns to the couple, the carriers of all that novelty.",
     85.93, 92.5, [(5900, 2900, 2400)], {}),
    ("The latest fashion",
     "The clothes are the latest fashion — a deep push into the fur-trimmed coats.",
     92.5, 94.75, [(6950, 3800, 1400)], {}),
    ("The retractable umbrella",
     "The retractable umbrella was just invented — the camera pans straight up to it.",
     94.75, 97.75, [(6000, 2150, 1800)], {}),
    ("A brand-new cityscape",
     "Even the cityscape is new: a decades-long renovation had transformed the winding medieval streets of Paris into grand boulevards like these.",
     97.75, 108.95, [(900, 500, 4200), (700, 300, 4600)], {}),
    ("The Paris we still see",
     "A celebration of the new Paris — and a Paris that speaks to us today. There's a familiarity, a nostalgia: this is the Paris we still see.",
     108.95, 130, [(0, 0, 9987)], dict(delayMs=500)),
],
}


def fnum(t):
    return int(t) if float(t).is_integer() else round(t, 2)


def clamp_frame(x, y, w, h, W, H):
    w = min(w, W); h = min(h, H)
    x = max(0, min(x, W - w)); y = max(0, min(y, H - h))
    return int(round(x)), int(round(y)), int(round(w)), int(round(h))


def build(slug):
    a = ART[slug]
    W, H = a["w"], a["h"]
    aspect = W / H
    sid = f"https://404mike.github.io/uv4-manifest/{slug}.json"
    items = []
    prev_end = (0, 0, W, H)
    for i, (label, summary, t0, t1, dests, opts) in enumerate(STORIES[slug], 1):
        dur_ms = int(round((t1 - t0) * 1000)) - 200
        frames = []
        for d in dests:
            x, y, w = d[0], d[1], d[2]
            h = d[3] if len(d) > 3 else w / aspect
            frames.append(clamp_frame(x, y, w, h, W, H))
        if opts.get("cut"):
            kfs = frames
        else:
            kfs = [prev_end] + [f for f in frames if f != prev_end]
        if len(kfs) == 1:
            kfs = kfs + [kfs[0]]  # static hold still needs 2 kfs to be a valid track
        prev_end = kfs[-1]
        # Chapter viewBox = UNION of all keyframes (clamped to the image).
        # - Viewer playback enters at the FIRST keyframe (chapterTransitionOrchestrator
        #   uses keyframes[0].viewBox; chapter.viewBox is only a no-track fallback),
        #   so this does not affect playback continuity.
        # - The story-builder pans to chapter.viewBox on selection and only renders
        #   motion markers whose centres are inside the current view — the union
        #   frame guarantees every motion point is visible and editable.
        ux0 = min(k[0] for k in kfs); uy0 = min(k[1] for k in kfs)
        ux1 = max(k[0] + k[2] for k in kfs); uy1 = max(k[1] + k[3] for k in kfs)
        ub = clamp_frame(ux0, uy0, ux1 - ux0, uy1 - uy0, W, H)
        vb = dict(x=ub[0], y=ub[1], w=ub[2], h=ub[3])
        n = len(kfs)
        keyframes = [
            dict(id=chr(97 + j), timeMs=int(round(dur_ms * j / (n - 1))),
                 focus=dict(x=round(k[0] + k[2] / 2, 2), y=round(k[1] + k[3] / 2, 2)),
                 viewBox=dict(x=k[0], y=k[1], w=k[2], h=k[3]))
            for j, k in enumerate(kfs)
        ]
        # Canonical playback: modern entryTransition + legacy transitionMs kept in
        # sync (deprecated in the TS types, but required by the published JSON
        # schema and preferred by the runtime when present).
        if opts.get("cut"):
            entry = dict(type="cut", durationMs=1)
        else:
            entry = dict(type="tween", durationMs=600, easing="ease-out")
        playback = dict(transitionMs=entry["durationMs"], entryTransition=entry)
        if "delayMs" in opts:
            playback["delayMs"] = opts["delayMs"]
        state = dict(chapterId=f"chapter_{i}", canvasIndex=0, canvasId=a["canvas"],
                     viewBox=vb, playback=playback,
                     cameraTrack=dict(durationMs=dur_ms, preset="custom",
                                      pathType="linear", easing="ease-out",
                                      keyframes=keyframes))
        items.append({
            "id": f"{sid}/annotation/chapter_{i}",
            "type": "Annotation",
            "motivation": "supplementing",
            "label": {"en": [label]},
            "summary": {"en": [summary]},
            "body": [
                {"id": f"{a['audio']}#t={fnum(t0)},{fnum(t1)}",
                 "type": "Sound", "format": "audio/mp3", "language": "en"},
                {"type": "mango:ViewerState",
                 "format": "application/vnd.mango.story-state+json",
                 "mango:storyVersion": "1.0",
                 "mangoState": state},
            ],
            "target": {
                "source": a["canvas"],
                "type": "SpecificResource",
                "partOf": {"id": a["manifest"], "type": "Manifest"},
                "selector": {"type": "FragmentSelector",
                             "conformsTo": "http://www.w3.org/TR/media-frags/",
                             "value": f"xywh={vb['x']},{vb['y']},{vb['w']},{vb['h']}"},
            },
        })
    # Canonical StoryAnnotationPage layout (storySerializer.ts): no page-level
    # summary field; label is the story title.
    doc = {
        "@context": [
            "http://iiif.io/api/presentation/3/context.json",
            {"mango": "https://mango-iiif.github.io/ns/story#",
             "mangoState": {"@id": "mango:state", "@type": "@json"}},
        ],
        "id": sid,
        "type": "AnnotationPage",
        "mango:storyVersion": "1.0",
        "label": {"en": [a["title"]]},
        "items": items,
    }
    with open(f"stories/{slug}.json", "w") as f:
        json.dump(doc, f, indent=2, ensure_ascii=False)
    print(f"stories/{slug}.json: {len(items)} chapters")


for slug in ART:
    build(slug)
