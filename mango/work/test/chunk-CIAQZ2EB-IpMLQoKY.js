//#region node_modules/@mango-iiif/av/dist/chunk-4NOWGMI5.js
var e = {
	chapters: "Chapters",
	transcript: "Transcript",
	annotations: "Annotations",
	metadata: "Metadata",
	files: "Files",
	rights: "Rights",
	previous: "Previous",
	next: "Next",
	previousSection: "Previous section",
	nextSection: "Next section",
	autoAdvance: "Auto-advance",
	mediaPlayer: "Media player",
	mediaSource: "Media source",
	mediaInformation: "Media information",
	download: "Download",
	downloadMediaFile: "Download media file",
	searchTranscript: "Search transcript",
	transcriptSearchMatches: "Transcript search matches",
	searchMatchAt: "Search match at {time}",
	resumePrompt: "Resume from {time}?",
	resume: "Resume",
	startOver: "Start over",
	loadingManifest: "Loading IIIF manifest…",
	loadingTranscript: "Loading transcript…",
	unableToLoadPlayer: "Unable to load the player.",
	unableToLoadMedia: "Unable to load media.",
	noMediaLoaded: "No media loaded",
	noPlayableMedia: "No playable audio or video source",
	noManifest: "No manifest is loaded.",
	noTranscript: "No transcript is available.",
	noAnnotations: "No annotations are available.",
	noMetadata: "No metadata is available.",
	noChapters: "No structured navigation is available.",
	noSupplementalFiles: "No supplemental files are available.",
	autoSource: "Auto",
	sourceNumber: "Source {number}",
	transcriptNumber: "Transcript {number}",
	sectionNumber: "Section {number}",
	chapterNumber: "Chapter {number}",
	untitledManifest: "Untitled manifest",
	unableToLoadManifest: "Unable to load IIIF manifest ({status} {statusText}).",
	expectedManifest: "Expected a IIIF Manifest, received {type}.",
	manifestWithoutCanvases: "The IIIF Manifest does not contain any Canvases."
}, t = {
	controls: {
		navigation: !1,
		autoAdvance: !1,
		seek: !0,
		volume: !0,
		captions: !0,
		playbackRate: !0,
		pictureInPicture: !0,
		fullscreen: !0,
		sourceSelector: !0,
		download: !1,
		skipSeconds: 10
	},
	panels: {
		chapters: !0,
		transcript: !0,
		annotations: !0,
		metadata: !0,
		supplementalFiles: !0
	},
	transcript: {
		autoScroll: !0,
		search: !0,
		download: !0,
		showNotes: !1,
		showMetadata: !1,
		showSearchMarkers: !0
	},
	audioArt: {
		title: "",
		transcript: !1,
		visualizer: !1
	},
	resume: {
		enabled: !1,
		maxItems: 200,
		ttlDays: 30,
		prompt: !0
	},
	strings: e,
	preferredLanguages: ["en", "none"],
	autoAdvance: !1,
	repeat: !1,
	activePanel: "chapters",
	crossorigin: "",
	preload: "metadata",
	playbackRates: [
		.5,
		.75,
		1,
		1.25,
		1.5,
		2
	]
}, n = (e) => typeof e == "object" && e && !Array.isArray(e) ? e : void 0, r = (e) => e == null ? [] : Array.isArray(e) ? e : [e], i = (e) => {
	if (typeof e == "string") return e;
	let t = n(e), r = t?.id ?? t?.["@id"];
	return typeof r == "string" ? r : void 0;
}, a = (e) => {
	let t = n(e), r = t?.type ?? t?.["@type"];
	return typeof r == "string" ? r : void 0;
}, o = (e) => {
	if (typeof e == "string") return [{ value: e }];
	if (Array.isArray(e)) return e.flatMap((e) => o(e));
	let t = n(e);
	if (!t) return [];
	if (typeof t["@value"] == "string") {
		let e = { value: t["@value"] };
		return typeof t["@language"] == "string" && (e.language = t["@language"]), [e];
	}
	return Object.entries(t).flatMap(([e, t]) => r(t).flatMap((t) => typeof t == "string" ? [{
		language: e,
		value: t
	}] : o(t).map((t) => ({
		...t,
		language: t.language ?? e
	}))));
}, s = (e, t = ["en", "none"], n = "") => {
	let r = o(e);
	for (let e of t) {
		let t = r.find((t) => t.language === e);
		if (t) return t.value;
	}
	return r[0]?.value ?? n;
}, c = (e) => {
	if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
	if (!e) return;
	if (/^\d+(?:\.\d+)?$/.test(e)) return Number(e);
	let t = e.replace(",", ".").split(":").map(Number);
	if (!t.some((e) => !Number.isFinite(e))) {
		if (t.length === 3) return (t[0] ?? 0) * 3600 + (t[1] ?? 0) * 60 + (t[2] ?? 0);
		if (t.length === 2) return (t[0] ?? 0) * 60 + (t[1] ?? 0);
	}
}, l = (e) => {
	let t;
	typeof e == "string" && (t = e.split("#")[1]);
	let r = n(e);
	if (!t && r) {
		let e = n(r.selector), i = e?.value;
		if (typeof i == "string" && (t = i.replace(/^#/, "")), e?.type === "PointSelector" && typeof e.t == "number") return { start: e.t };
	}
	let i = t?.match(/(?:^|&)t=([^&]+)/)?.[1];
	if (!i) return;
	let [a, o] = i.split(","), s = c(a), l = c(o);
	if (s !== void 0) return l === void 0 ? { start: s } : {
		start: s,
		end: l
	};
}, u = (e) => e.split("#")[0] ?? e, d = (e, t) => /(?:\.m3u8)(?:$|[?#])/i.test(e) || t === "application/vnd.apple.mpegurl" || t === "application/x-mpegURL", f = (e, t, n = "") => {
	let r = e?.toLowerCase().trim(), i = t?.toLowerCase().split(";", 1)[0]?.trim(), a = r?.split(/[:/#]/).pop();
	if (a === "audio" || a === "sound" || i?.startsWith("audio/")) return "audio";
	if (a === "video" || a === "movingimage" || i?.startsWith("video/") || i === "application/vnd.apple.mpegurl" || i === "application/x-mpegurl") return "video";
	if (r || i) return;
	let o = n.toLowerCase().split(/[?#]/, 1)[0] ?? "";
	if (/\.(?:mp3|m4a|wav|aac)$/.test(o)) return "audio";
	if (/\.(?:mp4|webm|m3u8)$/.test(o)) return "video";
}, p = (e) => {
	if (!Number.isFinite(e)) return "0:00";
	let t = Math.max(0, Math.floor(e)), n = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), i = t % 60;
	return n > 0 ? `${n}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}` : `${r}:${String(i).padStart(2, "0")}`;
}, m = (t = {}) => ({
	...e,
	...t
}), h = (e, t = {}) => e.replace(/\{(\w+)\}/g, (e, n) => Object.prototype.hasOwnProperty.call(t, n) ? String(t[n]) : e), g = (e, t) => {
	let r = { ...e };
	for (let [e, i] of Object.entries(t)) i !== void 0 && n(i) && n(r[e]) ? r[e] = g(n(r[e]), n(i)) : i !== void 0 && (r[e] = i);
	return r;
}, _ = (e) => e.replace(/[&<>'"]/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#039;",
	"\"": "&quot;"
})[e] ?? e), v = (e) => r(e).flatMap((e) => typeof e == "string" ? [e] : []), y = (e) => typeof e == "number" && Number.isFinite(e) ? e : void 0, b = (e) => typeof e.format == "string" ? e.format : void 0, x = (e, t, i) => r(e).flatMap((e) => {
	let r = n(e);
	if (!r) return [];
	let a = o(r.value);
	return a.length === 0 ? [] : [{
		label: s(r.label, t, i.metadata),
		values: a
	}];
}), S = (e, t, a) => r(e).flatMap((e) => {
	let r = n(e), o = i(e);
	if (!r || !o) return [];
	let c = {
		id: o,
		label: s(r.label, t, o.split("/").pop() ?? a.download)
	}, l = b(r);
	l && (c.format = l);
	let u = typeof r.filename == "string" ? r.filename : void 0;
	return u && (c.filename = u), [c];
}), C = (e, t, a) => r(e).flatMap((e, r) => {
	let o = n(e), c = i(e);
	if (!o || !c) return [];
	let l = b(o)?.toLowerCase().split(";", 1)[0]?.trim(), u = c.toLowerCase().split(/[?#]/, 1)[0] ?? "";
	if (!l?.startsWith("text/") && !/\.(?:txt|vtt|srt)$/.test(u)) return [];
	let d = {
		id: `${c}#transcript`,
		src: c,
		label: s(o.label, t, h(a.transcriptNumber, { number: r + 1 })),
		machineGenerated: !1
	};
	l && (d.format = l);
	let f = typeof o.language == "string" ? o.language : void 0;
	return f && (d.language = f), [d];
}), w = (e, t) => r(e).flatMap((e) => {
	let r = n(e), o = i(e);
	if (!r || !o) return [];
	let c = typeof r.profile == "string" ? r.profile : void 0, l = `${a(r) ?? ""} ${c ?? ""}`.toLowerCase(), u = "unknown";
	l.includes("probe") ? u = "probe" : l.includes("token") ? u = "token" : l.includes("logout") ? u = "logout" : (l.includes("access") || l.includes("login") || l.includes("clickthrough") || l.includes("kiosk")) && (u = "access");
	let d = {
		id: o,
		serviceType: u,
		services: w(r.service, t)
	};
	c && (d.profile = c);
	let f = s(r.label, t);
	return f && (d.label = f), [d];
}), T = (e) => {
	let t = n(e);
	if (!t) return;
	let a = n(r(n(r(n(r(t.items)[0])?.items)[0])?.body)[0]), o = n(n(r(t.images)[0])?.resource);
	return i(a) ?? i(o);
}, E = (e) => r(e).flatMap((e) => {
	let t = n(e);
	return t ? (a(t)?.toLowerCase())?.includes("choice") || Array.isArray(t.items) || Array.isArray(t.item) ? r(t.items ?? t.item ?? t.default).flatMap((e) => {
		let t = n(e);
		return t ? [t] : [];
	}) : [t] : [];
}), D = (e, t, n, r, o, c, p) => {
	let m = i(e);
	if (!m) return;
	let g = b(e), _ = f(a(e), g, m);
	if (!_) return;
	let v = {
		id: m,
		src: u(m),
		kind: _,
		isHls: d(m, g)
	};
	g && (v.format = g);
	let x = s(e.label, r, o === 0 ? c.autoSource : h(c.sourceNumber, { number: o + 1 }));
	x && (v.label = x);
	let S = y(e.width) ?? y(t.width), C = y(e.height) ?? y(t.height), w = y(e.duration) ?? y(t.duration);
	S !== void 0 && (v.width = S), C !== void 0 && (v.height = C), w !== void 0 && (v.duration = w);
	let T = typeof e.quality == "string" ? e.quality : void 0;
	T && (v.quality = T);
	let E = l(m);
	E && (v.segment = E);
	let D = l(n);
	D && (v.canvasTarget = D);
	let O = e.timeMode ?? p;
	return (O === "trim" || O === "scale" || O === "loop") && (v.timeMode = O), v;
}, O = (e) => E(e).filter((e) => (a(e)?.toLowerCase())?.includes("textualbody") || typeof e.value == "string"), k = (e) => v(e.motivation), A = (e, t, r, a, c) => {
	let u = n(e);
	if (!u) return;
	let d = O(u.body ?? u.resource), f = d.flatMap((e) => typeof e.value == "string" ? [e.value] : o(e.chars).map((e) => e.value)).join("\n");
	if (!f) return;
	let p = k(u), m = d.flatMap((e) => v(e.purpose)), h = d.filter((e) => v(e.purpose).includes("tagging")).flatMap((e) => typeof e.value == "string" ? [e.value] : []), g = {
		id: i(u) ?? `${t}/annotation/${c}`,
		canvasId: t,
		motivation: p,
		purpose: m,
		text: f,
		tags: h
	}, _ = s(u.label, a);
	_ && (g.label = _);
	let y = l(u.target ?? u.on);
	return y && (g.time = y), r && (g.sourcePageId = r), g;
}, j = (e, t, n, r, a, o) => {
	let c = i(e);
	if (!c) return {};
	let l = b(e), u = s(e.label, r, h(o.transcriptNumber, { number: a + 1 })), d = typeof e.language == "string" ? e.language : void 0, f = `${u} ${c} ${v(e.purpose).join(" ")}`.toLowerCase(), p = l === "text/vtt" || /\.vtt(?:$|[?#])/.test(c), m = "subtitles";
	f.includes("caption") && (m = "captions"), f.includes("description") && (m = "descriptions");
	let g = {};
	if (p) {
		let e = {
			id: c,
			src: c,
			kind: m,
			label: u
		};
		d && (e.language = d), l && (e.format = l), f.includes("forced") && (e.forced = !0), g.track = e;
	}
	let _ = {
		id: `${n}/transcript/${a}`,
		src: c,
		label: u,
		machineGenerated: /\(machine[ -]generated\)/i.test(u)
	};
	return l && (_.format = l), d && (_.language = d), g.transcript = _, g;
}, M = (e) => r(e.items ?? e.resources), N = (e, t, r, a) => {
	let o = [], c = [], u = [], d = 0;
	for (let f of e) {
		let e = i(f);
		for (let p of M(f)) {
			let m = n(p);
			if (!m) continue;
			let h = k(m), g = A(m, t, e, r, d);
			g && u.push(g);
			for (let e of E(m.body ?? m.resource)) if (i(e) && (h.includes("supplementing") || h.includes("transcribing") || h.length === 0)) {
				let n = j(e, m, t, r, d, a);
				n.track && o.push(n.track), n.transcript && c.push(n.transcript);
			}
			let _ = O(m.body ?? m.resource);
			if (_.length > 0 && (h.includes("supplementing") || h.includes("transcribing"))) {
				let n = _.flatMap((e, n) => {
					let a = typeof e.value == "string" ? e.value : s(e.chars, r);
					if (!a) return [];
					let o = {
						id: `${i(m) ?? `${t}/annotation/${d}`}/cue/${n}`,
						text: a,
						type: "cue"
					}, c = l(m.target ?? m.on);
					return c && (o.start = c.start, c.end !== void 0 && (o.end = c.end)), [o];
				});
				if (n.length > 0) {
					let i = `${e ?? t}/inline-transcript`, o = c.find((e) => e.id === i);
					o?.cues ? o.cues.push(...n) : c.push({
						id: i,
						label: s(f.label, r, a.transcript),
						machineGenerated: !1,
						cues: n
					});
				}
			}
			d += 1;
		}
	}
	return {
		tracks: o,
		transcripts: c,
		annotations: u
	};
}, P = (e, t) => t === 2 ? r(e.images).flatMap((e) => {
	let t = n(e);
	return t ? [t] : [];
}) : r(e.items).flatMap((e) => {
	let t = n(e);
	return t ? M(t).flatMap((e) => n(e) ? [n(e)] : []) : [];
}), F = (e, t) => r(t === 2 ? e.otherContent : e.annotations).flatMap((e) => {
	let t = n(e);
	return t && (Array.isArray(t.items) || Array.isArray(t.resources)) ? [t] : [];
}), I = (e, t) => r(t === 2 ? e.otherContent : e.annotations).flatMap((e) => {
	let t = n(e);
	if (t && (Array.isArray(t.items) || Array.isArray(t.resources))) return [];
	let r = i(e);
	return r ? [r] : [];
}), L = (e) => T(n(e.placeholderCanvas)), R = (e, t, n, a, o) => {
	let c = i(e) ?? `urn:mango:canvas:${t}`, l = P(e, n).flatMap((t, n) => E(t.body ?? t.resource).flatMap((r, i) => {
		let s = D(r, e, t.target ?? t.on, a, n + i, o, t.timeMode);
		return s ? [s] : [];
	})), u = N(F(e, n), c, a, o), d = {
		id: c,
		index: t,
		label: s(e.label, a, h(o.sectionNumber, { number: t + 1 })),
		behavior: v(e.behavior ?? e.viewingHint),
		sources: l,
		tracks: u.tracks,
		transcripts: [...u.transcripts, ...C(e.rendering, a, o)],
		annotations: u.annotations,
		rendering: S(e.rendering, a, o),
		metadata: x(e.metadata, a, o),
		authServices: w(e.service, a)
	}, f = s(e.summary ?? e.description, a);
	f && (d.summary = f);
	let p = y(e.duration), m = y(e.width), g = y(e.height);
	p !== void 0 && (d.duration = p), m !== void 0 && (d.width = m), g !== void 0 && (d.height = g);
	let _ = L(e);
	_ && (d.poster = _);
	let b = i(e.accompanyingCanvas);
	b && (d.accompanyingCanvas = b);
	let T = i(r(e.homepage ?? e.related)[0]);
	return T && (d.homepage = T), d;
}, z = (e) => {
	let t = i(e) ?? i(n(e)?.source);
	if (!t) return {};
	let r = { canvasId: u(t) }, a = l(t);
	return a && (r.time = a), r;
}, B = (e, t, o, c) => {
	let l = r(e.structures).flatMap((e) => n(e) ? [n(e)] : []), u = new Map(l.map((e) => [i(e), e])), d = /* @__PURE__ */ new Set(), f = (e, l = 0) => {
		if (l > 50 || d.has(e)) return;
		d.add(e);
		let p = v(e.behavior ?? e.viewingHint);
		if (p.includes("no-nav") || p.includes("thumbnail-nav")) return;
		let m = i(e) ?? `urn:mango:range:${d.size}`, g = r(t === 3 ? e.items : e.members ?? e.ranges ?? e.canvases), _ = [], y = {};
		for (let e of g) {
			let t = n(e), r = i(e), o = a(t)?.toLowerCase(), s = r ? u.get(r) : void 0;
			if (s || o?.includes("range") || t && (t.items || t.ranges || t.members)) {
				let e = f(s ?? t, l + 1);
				e && _.push(e);
			} else !y.canvasId && r && (y = z(e));
		}
		let b = {
			id: m,
			label: s(e.label, o, h(c.chapterNumber, { number: d.size })),
			behavior: p,
			children: _
		};
		y.canvasId && (b.canvasId = y.canvasId), y.time && (b.time = y.time);
		let x = s(e.summary ?? e.description, o);
		x && (b.summary = x);
		let S = i(r(e.homepage ?? e.related)[0]);
		return S && (b.homepage = S), b;
	};
	return l.flatMap((e) => {
		let t = f(e);
		return t ? [t] : [];
	});
}, V = (e, t) => {
	let a = t === 2 ? n(r(e.sequences)[0])?.startCanvas ?? e.startCanvas : e.start, o = i(a) ?? i(n(a)?.source);
	if (!o) return;
	let s = { canvasId: u(o) }, c = l(a) ?? l(o);
	return c && (s.time = c.start), s;
}, H = (e, t) => r(t === 3 ? e.items : n(r(e.sequences)[0])?.canvases).flatMap((e) => n(e) ? [n(e)] : []), U = (e) => JSON.stringify(e["@context"] ?? "").includes("/presentation/2/") || Array.isArray(e.sequences) || a(e)?.startsWith("sc:") ? 2 : 3, W = async (e, t = {}) => {
	let o = m(t.strings), c = t.fetch ?? globalThis.fetch, l;
	if (typeof e == "string") if (e.trim().startsWith("{")) l = JSON.parse(e);
	else {
		if (!c) throw Error("No fetch implementation is available to load the IIIF manifest.");
		let n = await c(e, t.requestInit);
		if (!n.ok) throw Error(h(o.unableToLoadManifest, {
			status: n.status,
			statusText: n.statusText
		}));
		l = await n.json();
	}
	else l = e;
	let u = a(l)?.toLowerCase();
	if (u && !u.includes("manifest")) throw Error(h(o.expectedManifest, { type: a(l) ?? "" }));
	let d = U(l), f = t.preferredLanguages ?? ["en", "none"], p = H(l, d).map((e, t) => R(e, t, d, f, o));
	if (p.length === 0) throw Error(o.manifestWithoutCanvases);
	if (t.loadExternalAnnotations !== !1 && c) {
		let e = H(l, d);
		await Promise.all(e.map(async (e, r) => {
			let i = p[r];
			if (!i) return;
			let a = I(e, d), s = N((await Promise.all(a.map(async (e) => {
				try {
					let r = await c(e, t.requestInit);
					return r.ok ? n(await r.json()) : void 0;
				} catch {
					return;
				}
			}))).filter((e) => !!e), i.id, f, o);
			i.tracks.push(...s.tracks), i.transcripts.push(...s.transcripts), i.annotations.push(...s.annotations);
		}));
	}
	let g = {
		id: i(l) ?? "urn:mango:manifest",
		type: "Manifest",
		version: d,
		label: s(l.label, f, o.untitledManifest),
		behavior: v(l.behavior ?? l.viewingHint),
		canvases: p,
		chapters: B(l, d, f, o),
		metadata: x(l.metadata, f, o),
		rendering: S(l.rendering, f, o)
	}, _ = s(l.summary ?? l.description, f);
	_ && (g.summary = _);
	let y = V(l, d);
	y && (g.start = y), typeof l.rights == "string" && (g.rights = l.rights);
	let b = x([l.requiredStatement ?? l.attribution], f, o)[0];
	b && (g.requiredStatement = b);
	let C = i(r(l.homepage ?? l.related)[0]);
	C && (g.homepage = C);
	let w = i(r(l.logo ?? l.provider)[0]);
	return w && (g.logo = w), g;
}, G = "@mango-iiif/av:position:", K = class extends EventTarget {
	#e;
	#t = {
		status: "idle",
		canvasIndex: 0,
		sourceIndex: 0,
		currentTime: 0,
		duration: 0,
		volume: 1,
		muted: !1,
		playbackRate: 1,
		autoAdvance: !1,
		repeat: !1
	};
	#n;
	#r = 0;
	#i = 1;
	#a;
	#o = /* @__PURE__ */ new Map();
	#s;
	constructor(e = {}) {
		super(), this.#s = Object.hasOwn(e, "crossorigin"), this.#e = g(t, e), this.#t.autoAdvance = this.#e.autoAdvance, this.#t.repeat = this.#e.repeat;
	}
	get config() {
		return this.#e;
	}
	get state() {
		return this.#t;
	}
	get manifest() {
		return this.#t.manifest;
	}
	get canvas() {
		return this.#t.manifest?.canvases[this.#t.canvasIndex];
	}
	get source() {
		return this.canvas?.sources[this.#t.sourceIndex];
	}
	get media() {
		return this.#n;
	}
	get crossoriginExplicit() {
		return this.#s;
	}
	on(e, t) {
		let n = t;
		return this.addEventListener(e, n), () => this.removeEventListener(e, n);
	}
	configure(e) {
		Object.hasOwn(e, "crossorigin") && (this.#s = !0), this.#e = g(this.#e, e), e.autoAdvance !== void 0 && (this.#t.autoAdvance = e.autoAdvance), e.repeat !== void 0 && (this.#t.repeat = e.repeat), this.#d("av-configchange", { config: this.#e }), this.#f();
	}
	async load(e) {
		this.#t.status = "loading", delete this.#t.error, this.#d("av-loadstart", { source: e }), this.#f();
		try {
			let t = {
				preferredLanguages: this.#e.preferredLanguages,
				strings: this.#e.strings
			};
			this.#e.fetch && (t.fetch = this.#e.fetch), this.#e.requestInit && (t.requestInit = this.#e.requestInit);
			let n = await W(e, t);
			this.#t.manifest = n;
			let r = this.#e.startCanvasId ?? n.start?.canvasId, i = r ? Math.max(0, n.canvases.findIndex((e) => e.id === u(r))) : 0;
			this.#t.canvasIndex = i, this.#t.sourceIndex = 0, this.#i = 1, this.#t.currentTime = 0, this.#t.duration = this.canvas?.duration ?? 0, this.#t.autoAdvance = this.#e.autoAdvance || n.behavior.includes("auto-advance"), this.#t.repeat = this.#e.repeat || n.behavior.includes("repeat"), this.#t.status = "ready";
			let a = this.#e.startTime ?? n.start?.time ?? this.source?.canvasTarget?.start;
			a !== void 0 && (this.#a = a), this.#d("av-ready", { manifest: n });
			let o = this.canvas;
			return o && this.#d("av-canvaschange", {
				canvas: o,
				canvasIndex: i
			}), this.#f(), n;
		} catch (e) {
			let t = e instanceof Error ? e : Error(String(e));
			throw this.#t.status = "error", this.#t.error = t, this.#d("av-error", { error: t }), this.#f(), t;
		}
	}
	attachMedia(e) {
		if (this.#n === e) return;
		this.detachMedia(), this.#n = e;
		let t = {
			loadedmetadata: () => {
				let t = this.source?.segment, n = this.source?.canvasTarget;
				if (this.source?.timeMode === "scale" && n?.end !== void 0 && Number.isFinite(e.duration)) {
					let r = t?.end === void 0 ? e.duration : t.end - t.start, i = n.end - n.start;
					r > 0 && i > 0 && (this.#i = r / i, e.playbackRate = this.#i);
				}
				let r = this.#a ?? n?.start;
				r !== void 0 && (e.currentTime = this.#h(r), this.#a = void 0), this.#t.duration = this.canvas?.duration ?? n?.end ?? (Number.isFinite(e.duration) ? this.#m(e.duration) : 0), this.#f();
			},
			play: () => {
				this.#t.status = "playing", this.#d("av-play", {
					canvasId: this.canvas?.id ?? "",
					time: this.#m(e.currentTime)
				}), this.#f();
			},
			pause: () => {
				e.ended || (this.#t.status = "paused"), this.#l(), this.#d("av-pause", {
					canvasId: this.canvas?.id ?? "",
					time: this.#m(e.currentTime)
				}), this.#f();
			},
			timeupdate: () => {
				let t = this.#m(e.currentTime), n = this.canvas?.duration ?? this.source?.canvasTarget?.end ?? (Number.isFinite(e.duration) ? this.#m(e.duration) : 0);
				this.#t.currentTime = t, this.#t.duration = n, this.#d("av-timeupdate", {
					canvasId: this.canvas?.id ?? "",
					time: t,
					duration: n
				});
				let r = this.source?.canvasTarget?.end ?? (this.source?.segment?.end === void 0 ? void 0 : this.#m(this.source.segment.end));
				r !== void 0 && t >= r && (this.source?.timeMode === "loop" ? e.currentTime = this.source.segment?.start ?? 0 : (e.pause(), this.#c())), this.#r = t, this.#f();
			},
			seeking: () => {
				let t = this.#m(e.currentTime);
				this.#t.currentTime = t, this.#d("av-seek", {
					canvasId: this.canvas?.id ?? "",
					from: this.#r,
					to: t
				}), this.#f();
			},
			volumechange: () => {
				this.#t.volume = e.volume, this.#t.muted = e.muted, this.#f();
			},
			ratechange: () => {
				this.#t.playbackRate = e.playbackRate, this.#f();
			},
			ended: () => {
				this.#t.status = "ended", this.#d("av-ended", { canvasId: this.canvas?.id ?? "" }), this.#u(), this.#f(), this.#c();
			},
			error: () => {
				let t = Error(e.error?.message ?? "The media resource could not be played.");
				this.#t.status = "error", this.#t.error = t, this.#d("av-error", { error: t }), this.#f();
			}
		};
		for (let [n, r] of Object.entries(t)) e.addEventListener(n, r), this.#o.set(n, r);
	}
	detachMedia() {
		if (this.#n) {
			for (let [e, t] of this.#o) this.#n.removeEventListener(e, t);
			this.#o.clear(), this.#n = void 0;
		}
	}
	async play() {
		await this.#n?.play();
	}
	pause() {
		this.#n?.pause();
	}
	stop() {
		this.pause(), this.seekTo(this.source?.canvasTarget?.start ?? 0);
	}
	seekTo(e) {
		let t = this.source, n = t?.canvasTarget?.start ?? 0, r = t?.canvasTarget?.end ?? this.#t.duration, i = r > 0 ? Math.min(Math.max(e, n), r) : Math.max(e, n);
		this.#n && this.#n.readyState > 0 ? this.#n.currentTime = this.#h(i) : this.#a = i, this.#t.currentTime = i, this.#f();
	}
	seekBy(e) {
		this.seekTo(this.#t.currentTime + e);
	}
	selectCanvas(e, t = {}) {
		let n = this.#t.manifest?.canvases ?? [], r = typeof e == "number" ? e : n.findIndex((t) => t.id === u(e));
		if (r < 0 || r >= n.length) return;
		let i = t.autoplay ?? this.#t.status === "playing", a = n[r], o = t.time ?? a?.sources[0]?.canvasTarget?.start ?? 0;
		return r === this.#t.canvasIndex ? (this.seekTo(o), i && queueMicrotask(() => void this.play()), a) : (this.#t.canvasIndex = r, this.#t.sourceIndex = 0, this.#i = 1, this.#t.currentTime = o, this.#t.duration = a?.duration ?? 0, this.#a = this.#t.currentTime, a && this.#d("av-canvaschange", {
			canvas: a,
			canvasIndex: r
		}), this.#f(), i && queueMicrotask(() => void this.play()), a);
	}
	next(e = {}) {
		let t = this.#t.manifest?.canvases.length ?? 0;
		if (this.#t.canvasIndex + 1 < t) return this.selectCanvas(this.#t.canvasIndex + 1, e);
		if (this.#t.repeat && t > 0) return this.selectCanvas(0, e);
	}
	previous(e = {}) {
		if (this.#t.canvasIndex > 0) return this.selectCanvas(this.#t.canvasIndex - 1, e);
	}
	selectSource(e) {
		let t = (this.canvas?.sources ?? [])[e];
		if (!t) return;
		let n = this.#t.status === "playing", r = this.#t.currentTime;
		return this.#t.sourceIndex = e, this.#i = 1, this.#a = r, this.#d("av-sourcechange", {
			source: t,
			sourceIndex: e
		}), this.#f(), n && queueMicrotask(() => void this.play()), t;
	}
	async createAnnotation(e) {
		let t = this.canvas;
		if (!t) throw Error("A Canvas must be active before creating an annotation.");
		let n = this.#e.annotationAdapter?.create ? await this.#e.annotationAdapter.create(t, e) : this.#p(t, e);
		return t.annotations.push(n), this.#d("av-annotationschange", {
			canvasId: t.id,
			annotations: [...t.annotations]
		}), this.#f(), n;
	}
	async updateAnnotation(e, t) {
		let n = this.canvas;
		if (!n) throw Error("A Canvas must be active before updating an annotation.");
		let r = n.annotations.findIndex((t) => t.id === e), i = n.annotations[r];
		if (!i) throw Error(`Annotation ${e} was not found on the active Canvas.`);
		let a = {
			...i,
			...t,
			motivation: t.motivation ?? i.motivation,
			purpose: t.purpose ?? i.purpose,
			tags: t.tags ?? i.tags
		}, o = this.#e.annotationAdapter?.update ? await this.#e.annotationAdapter.update(n, a) : a;
		return n.annotations[r] = o, this.#d("av-annotationschange", {
			canvasId: n.id,
			annotations: [...n.annotations]
		}), this.#f(), o;
	}
	async removeAnnotation(e) {
		let t = this.canvas;
		if (!t) throw Error("A Canvas must be active before removing an annotation.");
		let n = t.annotations.findIndex((t) => t.id === e), r = t.annotations[n];
		if (!r) throw Error(`Annotation ${e} was not found on the active Canvas.`);
		this.#e.annotationAdapter?.remove && await this.#e.annotationAdapter.remove(t, r), t.annotations.splice(n, 1), this.#d("av-annotationschange", {
			canvasId: t.id,
			annotations: [...t.annotations]
		}), this.#f();
	}
	setAutoAdvance(e) {
		this.#t.autoAdvance = e, this.#f();
	}
	setRepeat(e) {
		this.#t.repeat = e, this.#f();
	}
	getSavedPosition() {
		if (!this.#e.resume.enabled || !this.canvas || typeof localStorage > "u") return;
		let e = localStorage.getItem(`${G}${this.#t.manifest?.id}:${this.canvas.id}`);
		if (e) try {
			let t = JSON.parse(e), n = (this.#e.resume.ttlDays ?? 30) * 864e5;
			if (Date.now() - t.savedAt > n) {
				this.#u();
				return;
			}
			return t.time;
		} catch {
			return;
		}
	}
	destroy() {
		this.#l(), this.detachMedia();
	}
	async resolvedSourceUrl() {
		let e = this.source;
		if (!e) return;
		if (!this.#e.resolveRequest) return e.src;
		let t = {};
		return this.manifest && (t.manifest = this.manifest), this.canvas && (t.canvas = this.canvas), await this.#e.resolveRequest(e.src, t);
	}
	async #c() {
		this.#t.autoAdvance && (this.next({ autoplay: !0 }) || (this.#t.status = "ended"));
	}
	#l() {
		if (!this.#e.resume.enabled || !this.canvas || typeof localStorage > "u") return;
		let e = this.#t.currentTime;
		if (e <= 0 || this.#t.duration > 0 && e >= this.#t.duration - 2) return;
		let t = `${G}${this.#t.manifest?.id}:${this.canvas.id}`;
		localStorage.setItem(t, JSON.stringify({
			time: e,
			savedAt: Date.now()
		}));
		let n = Object.keys(localStorage).filter((e) => e.startsWith(G)), r = this.#e.resume.maxItems ?? 200;
		if (n.length > r) {
			let e = n.map((e) => ({
				item: e,
				value: JSON.parse(localStorage.getItem(e) ?? "{}")
			})).sort((e, t) => (e.value.savedAt ?? 0) - (t.value.savedAt ?? 0))[0];
			e && localStorage.removeItem(e.item);
		}
	}
	#u() {
		!this.canvas || typeof localStorage > "u" || localStorage.removeItem(`${G}${this.#t.manifest?.id}:${this.canvas.id}`);
	}
	#d(e, t) {
		this.dispatchEvent(new CustomEvent(e, {
			detail: t,
			bubbles: !1,
			composed: !1
		}));
	}
	#f() {
		this.#d("av-statechange", { ...this.#t });
	}
	#p(e, t) {
		let n = {
			id: `${e.id}/annotation/${crypto.randomUUID?.() ?? Date.now()}`,
			canvasId: e.id,
			motivation: t.motivation ?? ["commenting"],
			purpose: t.purpose ?? ["commenting"],
			text: t.text,
			tags: t.tags ?? []
		};
		return t.label && (n.label = t.label), t.time && (n.time = t.time), n;
	}
	#m(e) {
		let t = this.source?.segment?.start ?? 0, n = this.source?.canvasTarget?.start ?? 0, r = this.source?.timeMode === "scale" ? this.#i : 1;
		return n + (e - t) / r;
	}
	#h(e) {
		let t = this.source?.segment?.start ?? 0, n = this.source?.canvasTarget?.start ?? 0, r = this.source?.timeMode === "scale" ? this.#i : 1;
		return t + (e - n) * r;
	}
}, q = globalThis.HTMLElement ?? class {}, J = [
	"av-loadstart",
	"av-ready",
	"av-error",
	"av-canvaschange",
	"av-sourcechange",
	"av-play",
	"av-pause",
	"av-timeupdate",
	"av-seek",
	"av-ended",
	"av-annotationschange",
	"av-configchange",
	"av-statechange",
	"av-visualizerfallback"
], Y = class extends q {
	#e = new K();
	#t = !1;
	#n = /* @__PURE__ */ new Map();
	get controller() {
		return this.#e;
	}
	set controller(e) {
		e !== this.#e && (this.#i(), this.#e = e, this.#t && this.#r(), this.controllerChanged());
	}
	connectedCallback() {
		this.#t = !0, this.#r(), this.controllerChanged();
	}
	disconnectedCallback() {
		this.#t = !1, this.#i();
	}
	get controllerEvents() {
		return J;
	}
	#r() {
		if (!(this.#n.size > 0)) for (let e of this.controllerEvents) {
			let t = ((t) => {
				this.handleControllerEvent(e, t);
			});
			this.#e.addEventListener(e, t), this.#n.set(e, t);
		}
	}
	#i() {
		for (let [e, t] of this.#n) this.#e.removeEventListener(e, t);
		this.#n.clear();
	}
}, X = "\n  :host {\n    --mango-av-accent: #5b3fd6;\n    --mango-av-accent-contrast: #fff;\n    --mango-av-background: #fff;\n    --mango-av-surface: #f5f5f8;\n    --mango-av-text: #18181b;\n    --mango-av-muted: #62626a;\n    --mango-av-border: #d7d7de;\n    --mango-av-radius: .65rem;\n    --mango-av-font: ui-sans-serif, system-ui, sans-serif;\n    color: var(--mango-av-text);\n    display: block;\n    font-family: var(--mango-av-font);\n  }\n  *, *::before, *::after { box-sizing: border-box; }\n  button, input, select { font: inherit; }\n  button, select { cursor: pointer; }\n  .empty { color: var(--mango-av-muted); font-style: italic; }\n  .time { color: var(--mango-av-muted); font-size: .78rem; }\n", Z = (e) => e.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").trim(), ee = (e, t, n) => {
	let r = e.findIndex((e) => e.includes("-->"));
	if (r < 0) return;
	let i = e[r];
	if (!i) return;
	let [a = "", o = ""] = i.split("-->").map((e) => e.trim().split(/\s+/)[0] ?? ""), s = c(n ? a.replace(",", ".") : a), l = c(n ? o.replace(",", ".") : o);
	if (s === void 0 || l === void 0) return;
	let u = Z(e.slice(r + 1).join("\n"));
	if (u) return {
		id: `cue-${t}`,
		start: s,
		end: l,
		text: u,
		type: "cue"
	};
}, Q = (e, t, n = {}) => {
	let r = e.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
	if (t === "vtt" && !r.trimStart().startsWith("WEBVTT")) throw Error("Invalid WebVTT transcript: missing WEBVTT header.");
	let i = r.split("\n"), a = [], o = [], s = () => {
		if (o.length === 0) return;
		let e = o[0]?.trim() ?? "";
		if (/^NOTE(?:\s|$)/i.test(e)) {
			if (n.showNotes) {
				let e = Z(o.join("\n").replace(/^NOTE\s*/i, ""));
				e && a.push({
					id: `note-${a.length}`,
					text: e,
					type: "note"
				});
			}
		} else if (o.some((e) => e.includes("-->"))) {
			let e = ee(o, a.length, t === "srt");
			e && a.push(e);
		} else {
			let t = e.toUpperCase();
			n.showMetadata && e && e !== "WEBVTT" && t !== "STYLE" && t !== "REGION" && a.push({
				id: `metadata-${a.length}`,
				text: Z(o.join("\n")),
				type: "metadata"
			});
		}
		o = [];
	};
	for (let e of i) e.trim() === "" ? s() : o.push(e);
	return s(), a;
}, te = (e) => {
	if (!Array.isArray(e)) return [];
	let t = [];
	for (let n of e) {
		if (!n || typeof n != "object") continue;
		let e = n, r = Array.isArray(e.spans) ? e.spans : [e];
		for (let n of r) {
			if (!n || typeof n != "object") continue;
			let r = n, i = r.text ?? r.value ?? r.chars;
			if (typeof i != "string") continue;
			let a = {
				id: typeof r.id == "string" ? r.id : `cue-${t.length}`,
				text: Z(i),
				type: "cue"
			}, o = c(r.begin ?? r.start), s = c(r.end ?? r.stop);
			o !== void 0 && (a.start = o), s !== void 0 && (a.end = s), typeof e.speaker == "string" ? a.speaker = e.speaker : typeof r.speaker == "string" && (a.speaker = r.speaker), t.push(a);
		}
	}
	return t;
}, $ = (e, t, n = {}) => {
	let r = t.toLowerCase().split(";")[0] ?? "";
	return r.includes("json") || typeof e != "string" && typeof e == "object" ? te(typeof e == "string" ? JSON.parse(e) : e) : typeof e == "string" ? r.includes("vtt") || r === "vtt" ? Q(e, "vtt", n) : r.includes("srt") || r.includes("subrip") || r === "srt" ? Q(e, "srt", n) : e.replace(/\r\n?/g, "\n").split(/\n{2,}|\n/).map((e) => Z(e)).filter(Boolean).map((e, t) => ({
		id: `text-${t}`,
		text: e,
		type: "text"
	})) : [];
}, ne = (e, t) => e.format ? e.format : t || (e.src?.split(/[?#]/)[0]?.split(".").pop()?.toLowerCase() ?? "text/plain"), re = async (e, t = {}) => {
	if (e.cues) return e.cues;
	if (!e.src) return [];
	if (e.format?.includes("wordprocessingml") || /\.docx(?:$|[?#])/i.test(e.src)) throw Error("DOCX transcripts are not supported.");
	let n = t.fetch ?? globalThis.fetch;
	if (!n) throw Error("No fetch implementation is available to load the transcript.");
	let r = await n(e.src, t.requestInit);
	if (!r.ok) throw Error(`Unable to load transcript (${r.status} ${r.statusText}).`);
	let i = ne(e, r.headers.get("content-type"));
	return i.includes("json") ? $(await r.json(), i, t) : $(await r.text(), i, t);
};
//#endregion
export { _ as a, m as c, K as i, Y as n, h as o, X as r, p as s, re as t };
