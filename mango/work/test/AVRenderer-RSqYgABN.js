import { $ as e, B as t, C as n, Ct as r, Dt as i, J as a, Q as o, R as s, ct as c, lt as l, n as u, nt as d, u as f, wt as p } from "./client-CruOUf1V.js";
import { a as m, c as h, n as g, o as _, r as v, t as y } from "./chunk-CIAQZ2EB-IpMLQoKY.js";
//#region node_modules/@mango-iiif/av/dist/chunk-ELGGWWDS.js
var b, x = /* @__PURE__ */ new Map(), S = (e) => {
	let t = e.toLowerCase(), n = t === "zh-cn" || t === "zh-tw" ? t : t.split("-")[0] ?? t;
	if (x.has(n)) return x.get(n);
	let r = (() => {
		switch (n) {
			case "de": return import("./de-lewc3JJj.js");
			case "es": return import("./es-DUaictJz.js");
			case "fr": return import("./fr-D-1sAUWe.js");
			case "pt": return import("./pt-DaSRldLN.js");
			case "zh-cn": return import("./zh-CN-C_H0krFZ.js");
			case "zh-tw": return import("./zh-TW-D1fVxPqo.js");
			default: return;
		}
	})();
	return r && x.set(n, r), r;
}, C = async (e) => {
	e && await S(e), b ??= import("./dist-DGSYm-y8.js"), await b;
}, w = (e, t, n, r) => !r || n.length === 0 ? t ? `<span class="audio-art-title">${m(t)}</span>` : "" : `<div class="audio-art-transcript" aria-live="polite" aria-label="${m(e)}">
    ${n.map((e) => `<div class="audio-art-cue" data-audio-cue data-start="${e.start ?? ""}" data-end="${e.end ?? e.start ?? ""}">${e.speaker ? `<span class="audio-art-speaker">${m(e.speaker)}</span>` : ""}<span>${m(e.text)}</span></div>`).join("")}
  </div>`, T = (e) => e === !0 ? "pulse" : e || void 0, E = (e, t, n, r, i) => `<div class="audio-art-text">${w(e, t, n, r)}</div>${i === "waveform" || i === "spectrum" ? "<canvas class=\"audio-art-visualizer-canvas\" aria-hidden=\"true\"></canvas>" : ""}`, D = (e, t, n = !1) => {
	let r = [...e.querySelectorAll("[data-audio-cue]")];
	if (r.length === 0) return;
	let i = e.querySelector(".audio-art-transcript");
	n && i && (i.classList.add("seeking"), requestAnimationFrame(() => i.classList.remove("seeking")));
	let a = r.findIndex((e) => {
		let n = Number(e.dataset.start), r = Number(e.dataset.end);
		return Number.isFinite(n) && t >= n && (!Number.isFinite(r) || t < r);
	});
	if (a < 0) for (let e = r.length - 1; e >= 0; --e) {
		let n = r[e];
		if (n && Number.isFinite(Number(n.dataset.start)) && t >= Number(n.dataset.start)) {
			a = e;
			break;
		}
	}
	a < 0 && (a = 0), r.forEach((e, t) => {
		let n = t - a;
		e.classList.toggle("active", n === 0), e.classList.toggle("adjacent", Math.abs(n) === 1), e.toggleAttribute("aria-hidden", n !== 0), e.style.opacity = n === 0 ? "1" : Math.abs(n) === 1 ? ".2" : "0", e.style.transform = `translateY(calc(-50% + ${n * 4.25}rem))`, e.style.visibility = Math.abs(n) <= 1 ? "visible" : "hidden";
	});
}, O = class {
	#e = 0;
	#t;
	#n;
	#r;
	#i = 0;
	#a = 0;
	#o;
	#s;
	connect(e, t, n) {
		this.disconnect();
		let r = ++this.#e;
		if (!(typeof AudioContext > "u")) try {
			if (r !== this.#e || !e.isConnected || !t.isConnected) return;
			let i = new AudioContext();
			this.#t = i;
			let a = i.createMediaElementSource(e);
			this.#n = a;
			let o = i.createAnalyser();
			this.#r = o, o.fftSize = 512, o.smoothingTimeConstant = .95, a.connect(i.destination), a.connect(o), this.#o = e;
			let s = new Uint8Array(o.fftSize), c = new Uint8Array(o.frequencyBinCount), l = t.querySelector(".audio-art-visualizer-canvas"), u = l?.getContext("2d"), d = typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)").matches, f = () => {
				if (!l || !u) return;
				let e = Math.min(2, devicePixelRatio || 1), n = Math.max(1, Math.round(t.clientWidth * e)), r = Math.max(1, Math.round(t.clientHeight * e));
				(l.width !== n || l.height !== r) && (l.width = n, l.height = r), u.setTransform(e, 0, 0, e, 0, 0);
			}, p = (e) => {
				if (!l || !u) return;
				f();
				let n = t.clientWidth, r = t.clientHeight;
				if (u.clearRect(0, 0, n, r), e === 0) return;
				let i = getComputedStyle(t).getPropertyValue("--mango-av-accent").trim() || "#5b3fd6";
				u.globalAlpha = Math.min(.7, .18 + e / 100), u.strokeStyle = i, u.lineWidth = 1.5, u.beginPath();
				let a = d ? 0 : Math.min(r * .16, 5 + this.#a * r * .12);
				for (let e = 0; e < s.length; e += 1) {
					let t = e / (s.length - 1) * n, i = (s[e] - 128) / 128, o = r * .72 + i * a;
					e === 0 ? u.moveTo(t, o) : u.lineTo(t, o);
				}
				u.stroke(), u.globalAlpha = 1;
			}, m = (e) => {
				if (!l || !u) return;
				f();
				let n = t.clientWidth, r = t.clientHeight;
				if (u.clearRect(0, 0, n, r), e === 0) return;
				o.getByteFrequencyData(c);
				let i = getComputedStyle(t).getPropertyValue("--mango-av-accent").trim() || "#5b3fd6", a = Math.max(1, (n - 69) / 24);
				u.fillStyle = i, u.globalAlpha = d ? .2 : Math.min(.55, .15 + e / 120);
				for (let e = 0; e < 24; e += 1) {
					let t = Math.floor((e / 24) ** 1.7 * c.length * .7), n = d ? .08 : (c[t] ?? 0) / 255, i = Math.max(1, n * r * .32);
					u.fillRect(e * (a + 3), r - i, a, i);
				}
				u.globalAlpha = 1;
			}, h = () => {
				if (r !== this.#e) return;
				o.getByteTimeDomainData(s);
				let i = 0;
				for (let e of s) {
					let t = (e - 128) / 128;
					i += t * t;
				}
				let a = Math.sqrt(i / s.length), c = e.paused || a < .012 ? 0 : Math.min(1, (a - .012) * 5);
				this.#a += (c - this.#a) * (c > this.#a ? .1 : .04), c === 0 && this.#a < .01 && (this.#a = 0);
				let l = d ? this.#a * 18 : this.#a === 0 ? 0 : Math.min(52, 12 + this.#a * 40);
				t.style.setProperty("--mango-av-wave-rise", `${(8 - (d ? 0 : this.#a * 6)).toFixed(2)}%`), t.style.setProperty("--mango-av-wave-strength", `${l.toFixed(1)}%`), t.style.setProperty("--mango-av-wave-mid-strength", `${(l * .45).toFixed(1)}%`), t.style.setProperty("--mango-av-wave-edge-strength", `${(l * .18).toFixed(1)}%`), n === "waveform" ? p(l) : n === "spectrum" && m(l), this.#i = requestAnimationFrame(h);
			};
			h();
			let g = () => void i.resume();
			this.#s = g, e.addEventListener("play", g, { once: !0 }), e.paused || g();
		} catch {
			this.disconnect();
		}
	}
	disconnect() {
		this.#e += 1, typeof cancelAnimationFrame < "u" && cancelAnimationFrame(this.#i), this.#i = 0, this.#a = 0, this.#o && this.#s && this.#o.removeEventListener("play", this.#s);
		try {
			this.#n?.disconnect();
		} catch {}
		try {
			this.#r?.disconnect();
		} catch {}
		this.#t && this.#t.state !== "closed" && this.#t.close(), this.#r = void 0, this.#n = void 0, this.#t = void 0, this.#o = void 0, this.#s = void 0;
	}
}, k = (e) => {
	try {
		let t = new URL(e, document.baseURI);
		return (t.protocol === "http:" || t.protocol === "https:") && t.origin !== location.origin;
	} catch {
		return !1;
	}
}, A = (e, t, n, r, i) => {
	let a = k(e), o = !!r && a && !n && !i, s = o ? "anonymous" : t || void 0, c = !!r && !i && !(a && !s);
	return {
		...s ? { crossOrigin: s } : {},
		implicitCors: o,
		visualize: c
	};
}, j = (e, t, n) => {
	n ? e.crossOrigin = n : e.removeAttribute("crossorigin"), e.src = t;
}, M, N = () => (M ??= import("./hls-video-element-Cxd8PDbe.js"), M), P = `${v}
  :host { --mango-av-player-aspect-ratio: 16 / 9; }
  .player { background: #08080a; border-radius: var(--mango-av-radius); color: white; overflow: clip; position: relative; }
  media-controller { display: block; width: 100%; }
  media-controller:not([audio]) { aspect-ratio: var(--mango-av-player-aspect-ratio); }
  video, hls-video { display: block; height: 100%; object-fit: contain; width: 100%; }
  audio { width: 100%; }
  media-control-bar { width: 100%; }
  .audio-art { --mango-av-wave-edge-strength: 0%; --mango-av-wave-mid-strength: 0%; --mango-av-wave-rise: 8%; --mango-av-wave-strength: 0%; align-items: center; aspect-ratio: 16 / 7; background: linear-gradient(#09080d, #111019); display: flex; justify-content: center; overflow: hidden; padding: 2rem; position: relative; text-align: center; }
  .audio-art.visualizer--pulse { background: radial-gradient(ellipse 140% 72% at 50% calc(100% + var(--mango-av-wave-rise)), color-mix(in srgb, var(--mango-av-accent) var(--mango-av-wave-strength), transparent) 0%, color-mix(in srgb, var(--mango-av-accent) var(--mango-av-wave-mid-strength), transparent) 40%, color-mix(in srgb, var(--mango-av-accent) var(--mango-av-wave-edge-strength), transparent) 62%, transparent 78%), linear-gradient(#09080d, #111019); }
  .audio-art-text { display: contents; }
  .audio-art-visualizer-canvas { height: 100%; inset: 0; pointer-events: none; position: absolute; width: 100%; }
  .audio-art-title { font-size: clamp(1.1rem, 3vw, 2rem); font-weight: 700; position: relative; z-index: 1; }
  .audio-art-transcript { height: 100%; inset: 0; overflow: hidden; position: absolute; z-index: 1; }
  .audio-art-cue { align-items: center; display: flex; flex-direction: column; font-size: clamp(.7rem, 1.3vw, .875rem); font-weight: 550; gap: .15rem; left: 12%; line-height: 1.35; position: absolute; right: 12%; top: 50%; transition: opacity 360ms ease, transform 480ms cubic-bezier(.22, 1, .36, 1); }
  .audio-art-transcript.seeking .audio-art-cue { transition: none; }
  .audio-art-cue.active { font-size: clamp(.78rem, 1.5vw, 1rem); font-weight: 650; }
  .audio-art-cue > span:last-child { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
  .audio-art-speaker { font-size: .7em; letter-spacing: .04em; text-transform: uppercase; }
  .toolbar { align-items: center; background: #151518; display: flex; flex-wrap: wrap; gap: .5rem; justify-content: space-between; padding: .55rem .7rem; }
  .toolbar button, .toolbar select { background: #29292e; border: 1px solid #44444a; border-radius: .35rem; color: white; padding: .4rem .55rem; }
  .group { align-items: center; display: flex; gap: .45rem; }
  .error { background: #fff0f0; color: #8a1717; padding: 1rem; }
  .sr-only { clip: rect(0,0,0,0); clip-path: inset(50%); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px; }
`, F = class extends g {
	static observedAttributes = ["manifest-url", "config"];
	#e;
	#t;
	#n = {};
	#r;
	#i = 0;
	#a;
	#o = [];
	#s = 0;
	#c = new O();
	constructor() {
		super(), this.#e = this.attachShadow({ mode: "open" });
	}
	get manifest() {
		return this.#t;
	}
	set manifest(e) {
		this.#t = e, this.isConnected && e !== void 0 && this.load(e);
	}
	get config() {
		return this.#n;
	}
	set config(e) {
		this.#n = e, this.controller.configure(e), this.#u();
	}
	connectedCallback() {
		this.#l(), C(this.controller.config.preferredLanguages[0]), super.connectedCallback();
		let e = this.#t ?? this.getAttribute("manifest-url") ?? void 0;
		e !== void 0 && !this.controller.manifest && this.load(e);
	}
	disconnectedCallback() {
		this.#c.disconnect(), super.disconnectedCallback();
	}
	attributeChangedCallback(e, t, n) {
		!this.isConnected || t === n || (e === "manifest-url" && n ? (this.#t = n, this.load(n)) : e === "config" && (this.#l(), this.#u()));
	}
	async load(e) {
		return this.#t = e, await this.controller.load(e);
	}
	play() {
		return this.controller.play();
	}
	pause() {
		this.controller.pause();
	}
	seekTo(e) {
		this.controller.seekTo(e);
	}
	selectCanvas(e, t) {
		return this.controller.selectCanvas(e, t);
	}
	controllerChanged() {
		this.#_(), this.#o = [], this.#u(), this.#v(), this.#m();
	}
	handleControllerEvent(e, t) {
		e === "av-configchange" ? (this.#_(), C(this.controller.config.preferredLanguages[0]).then(() => {
			this.#u(), this.#v(), this.#m();
		})) : e === "av-ready" || e === "av-canvaschange" ? (this.#_(), this.#o = [], this.controller.source?.isHls && N(), this.#u(), this.#v(), this.#m()) : e === "av-sourcechange" ? (this.#_(), this.controller.source?.isHls && N(), this.#u(), this.#m()) : e === "av-error" ? (this.#r = void 0, this.#u()) : e === "av-seek" ? D(this.#e, t.detail.to, !0) : (e === "av-timeupdate" || e === "av-statechange") && D(this.#e, this.controller.state.currentTime), this.dispatchEvent(new CustomEvent(e, {
			detail: t.detail,
			bubbles: !0,
			composed: !0
		}));
	}
	#l() {
		let e = this.getAttribute("config");
		if (e) try {
			this.#n = JSON.parse(e), this.controller.configure(this.#n);
		} catch (e) {
			let t = e instanceof Error ? e : Error(String(e));
			this.dispatchEvent(new CustomEvent("av-error", {
				detail: { error: t },
				bubbles: !0,
				composed: !0
			}));
		}
	}
	#u() {
		this.#c.disconnect();
		let e = this.controller.state, t = this.controller.canvas, n = this.controller.source, r = h(this.controller.config.strings);
		this.#e.innerHTML = `<style>${P}</style>
      <div class="player">
        ${e.status === "loading" ? `<p role="status">${m(r.loadingManifest)}</p>` : ""}
        ${e.status === "error" ? `<div class="error" role="alert">${m(e.error?.message ?? r.unableToLoadMedia)}</div>` : ""}
        ${t && n ? this.#d(t, n) : e.status !== "loading" && e.status !== "error" ? `<div class="audio-art"><span>${m(r.noMediaLoaded)}</span></div>` : ""}
      </div>`;
		let i = this.#e.querySelector("video, audio, hls-video");
		i && this.#r && this.#h(i, this.#r), D(this.#e, this.controller.state.currentTime), this.#p();
	}
	#d(e, t) {
		let n = this.controller.config.controls, r = this.controller.manifest, i = t.kind, a = h(this.controller.config.strings), o = this.controller.config.preferredLanguages.find((e) => e !== "none"), s = n.sourceSelector && e.sources.length > 1, c = n.navigation || n.autoAdvance || s, l = T(this.controller.config.audioArt.visualizer);
		return `<media-controller ${i === "audio" ? "audio" : ""} ${o ? `lang="${m(o)}"` : ""}>
      ${i === "audio" ? `<div class="audio-art ${l ? `visualizer visualizer--${l}` : ""}">${E(e.label, this.controller.config.audioArt.title ?? "", this.#o, !!this.controller.config.audioArt.transcript, l)}</div>` : ""}
      ${this.#f(e, t)}
      <slot name="overlay"></slot>
      <slot name="controls">
        <media-control-bar>
          <media-play-button></media-play-button>
          ${n.seek ? `<media-seek-backward-button seekoffset="${n.skipSeconds ?? 10}"></media-seek-backward-button><media-seek-forward-button seekoffset="${n.skipSeconds ?? 10}"></media-seek-forward-button>` : ""}
          <media-time-display showduration></media-time-display>
          ${n.seek ? "<media-time-range></media-time-range>" : ""}
          ${n.volume ? "<media-mute-button></media-mute-button><media-volume-range></media-volume-range>" : ""}
          ${n.captions && e.tracks.length > 0 ? "<media-captions-menu-button></media-captions-menu-button>" : ""}
          ${n.playbackRate ? "<media-playback-rate-menu-button></media-playback-rate-menu-button>" : ""}
          ${n.pictureInPicture && i === "video" ? "<media-pip-button></media-pip-button>" : ""}
          ${n.fullscreen && i === "video" ? "<media-fullscreen-button></media-fullscreen-button>" : ""}
        </media-control-bar>
        ${n.captions && e.tracks.length > 0 ? "<media-captions-menu hidden></media-captions-menu>" : ""}
        ${n.playbackRate ? `<media-playback-rate-menu rates="${this.controller.config.playbackRates.join(" ")}" hidden></media-playback-rate-menu>` : ""}
      </slot>
    </media-controller>
    ${c ? `<div class="toolbar">
      ${n.navigation ? `<div class="group">
        <button type="button" data-action="previous" ${e.index === 0 ? "disabled" : ""} aria-label="${m(a.previousSection)}">\u2190 ${m(a.previous)}</button>
        <button type="button" data-action="next" ${e.index === (r?.canvases.length ?? 1) - 1 && !this.controller.state.repeat ? "disabled" : ""} aria-label="${m(a.nextSection)}">${m(a.next)} \u2192</button>
      </div>` : ""}
      ${s || n.autoAdvance ? `<div class="group">
        ${s ? `<label><span class="sr-only">${m(a.mediaSource)}</span><select data-action="source">${e.sources.map((e, t) => `<option value="${t}" ${t === this.controller.state.sourceIndex ? "selected" : ""}>${m(e.label ?? e.format ?? _(a.sourceNumber, { number: t + 1 }))}</option>`).join("")}</select></label>` : ""}
        ${n.autoAdvance ? `<label><input type="checkbox" data-action="auto-advance" ${this.controller.state.autoAdvance ? "checked" : ""}> ${m(a.autoAdvance)}</label>` : ""}
      </div>` : ""}
    </div>` : ""}`;
	}
	#f(e, t) {
		let n = t.isHls ? "hls-video" : t.kind;
		return `<${n} ${[
			"slot=\"media\"",
			`preload="${this.controller.config.preload}"`,
			this.controller.config.crossorigin ? `crossorigin="${this.controller.config.crossorigin}"` : "",
			t.kind === "video" && e.poster ? `poster="${m(e.poster)}"` : "",
			`aria-label="${m(e.label)}"`,
			`data-canvasindex="${e.index}"`
		].filter(Boolean).join(" ")}>${e.tracks.map((e) => `<track src="${m(e.src)}" kind="${e.kind}" label="${m(e.label)}" ${e.language ? `srclang="${m(e.language)}"` : ""} ${e.default ? "default" : ""}>`).join("")}</${n}>`;
	}
	#p() {
		this.#e.querySelector("[data-action=previous]")?.addEventListener("click", () => this.controller.previous({ autoplay: this.controller.state.status === "playing" })), this.#e.querySelector("[data-action=next]")?.addEventListener("click", () => this.controller.next({ autoplay: this.controller.state.status === "playing" })), this.#e.querySelector("[data-action=source]")?.addEventListener("change", (e) => this.controller.selectSource(Number(e.target.value))), this.#e.querySelector("[data-action=auto-advance]")?.addEventListener("change", (e) => this.controller.setAutoAdvance(e.target.checked));
	}
	async #m() {
		let e = ++this.#i;
		try {
			let t = await this.controller.resolvedSourceUrl();
			if (e !== this.#i || !t) return;
			this.#r = t;
			let n = this.#e.querySelector("video, audio, hls-video");
			n && this.#h(n, t);
		} catch (e) {
			let t = e instanceof Error ? e : Error(String(e));
			this.dispatchEvent(new CustomEvent("av-error", {
				detail: { error: t },
				bubbles: !0,
				composed: !0
			}));
		}
	}
	#h(e, t) {
		let n = T(this.controller.config.audioArt.visualizer), r = A(t, this.controller.config.crossorigin, this.controller.crossoriginExplicit, e instanceof HTMLAudioElement ? n : void 0, this.#a === t);
		if (e instanceof HTMLAudioElement && r.implicitCors && e.addEventListener("error", (n) => {
			this.#a !== t && (n.stopImmediatePropagation(), this.#g(e, t));
		}, { once: !0 }), e instanceof HTMLAudioElement && n && r.visualize) {
			let r = () => {
				let r = this.#e.querySelector(".audio-art.visualizer");
				r && e.isConnected && (e.currentSrc === t || e.src === t) && this.#c.connect(e, r, n);
			};
			e.addEventListener("loadedmetadata", r, { once: !0 }), e.readyState >= HTMLMediaElement.HAVE_METADATA && queueMicrotask(r);
		}
		this.controller.attachMedia(e), j(e, t, r.crossOrigin);
	}
	#g(e, t) {
		this.#a = t, this.#c.disconnect();
		let n = this.controller.state.currentTime, r = this.controller.state.status === "playing" || !e.paused, i = e.cloneNode(!0);
		i.removeAttribute("src"), i.removeAttribute("crossorigin"), i.volume = e.volume, i.muted = e.muted, i.playbackRate = e.playbackRate;
		let a = this.#e.activeElement === e;
		e.replaceWith(i), this.controller.attachMedia(i), this.controller.seekTo(n), a && i.focus(), this.#e.querySelector(".audio-art")?.classList.remove("visualizer"), j(i, t), r && i.addEventListener("loadedmetadata", () => void i.play().catch(() => void 0), { once: !0 }), this.controller.dispatchEvent(new CustomEvent("av-visualizerfallback", { detail: {
			canvasId: this.controller.canvas?.id ?? "",
			sourceUrl: t,
			reason: "cors"
		} }));
	}
	#_() {
		this.#i += 1, this.#r = void 0, this.#a = void 0, this.#c.disconnect();
	}
	async #v() {
		let e = this.controller.canvas?.transcripts[0];
		if (!e || !this.controller.config.audioArt.transcript) return;
		let t = ++this.#s, n = {};
		this.controller.config.fetch && (n.fetch = this.controller.config.fetch), this.controller.config.requestInit && (n.requestInit = this.controller.config.requestInit), this.controller.config.transcript.showNotes !== void 0 && (n.showNotes = this.controller.config.transcript.showNotes), this.controller.config.transcript.showMetadata !== void 0 && (n.showMetadata = this.controller.config.transcript.showMetadata);
		try {
			let r = await y(e, n);
			if (t !== this.#s) return;
			this.#o = r;
			let i = this.#e.querySelector(".audio-art"), a = this.controller.canvas;
			if (i && a && this.controller.source?.kind === "audio") {
				let e = i.querySelector(".audio-art-text");
				e && (e.innerHTML = w(a.label, this.controller.config.audioArt.title ?? "", r, !0)), D(i, this.controller.state.currentTime);
			}
		} catch (e) {
			if (t !== this.#s) return;
			let n = e instanceof Error ? e : Error(String(e));
			this.dispatchEvent(new CustomEvent("av-error", {
				detail: { error: n },
				bubbles: !0,
				composed: !0
			}));
		}
	}
};
//#endregion
//#region node_modules/@mango-iiif/av/dist/player.js
typeof window < "u" && "customElements" in window && ((e = "mango-av-player") => (typeof customElements > "u" || customElements.get(e) || customElements.define(e, F), F))();
//#endregion
//#region src/lib/renderers/AVRenderer.svelte
var I = {
	supportsZoom: !1,
	supportsFilters: !1,
	supportsPan: !1,
	supportsViewBox: !1,
	supportsRotation: !1,
	isInteractive: !0
}, L = t("<div><mango-av-player></mango-av-player></div>", 2);
function R(t, m) {
	p(m, !0);
	let h = u(m, "source", 3, void 0), g = l(null), _ = null, v = !1, y = "mango-av-viewer-styles", b = (e) => {
		let t = e.shadowRoot;
		if (!t || t.getElementById(y)) return;
		let n = document.createElement("style");
		n.id = y, n.textContent = "\n      .audio-art.visualizer--pulse {\n        background: radial-gradient(\n          ellipse 140% 72% at 50% calc(100% + var(--mango-av-wave-rise)),\n          color-mix(in srgb, var(--mango-av-accent) calc(var(--mango-av-wave-strength) * 0.4), transparent) 0%,\n          color-mix(in srgb, var(--mango-av-accent) calc(var(--mango-av-wave-mid-strength) * 0.4), transparent) 40%,\n          color-mix(in srgb, var(--mango-av-accent) calc(var(--mango-av-wave-edge-strength) * 0.4), transparent) 62%,\n          transparent 78%\n        ), linear-gradient(#09080d, #111019) !important;\n      }\n      media-controller:not([audio]) {\n        aspect-ratio: var(\n          --mango-viewer-av-player-aspect-ratio,\n          var(--mango-av-player-aspect-ratio)\n        );\n        width: min(\n          100%,\n          var(--mango-viewer-av-player-max-width, 100%)\n        );\n        margin-inline: auto;\n        height: 100%;\n      }\n      .player,\n      media-controller[audio] {\n        height: 100%;\n        min-height: 0;\n      }\n      .audio-art {\n        aspect-ratio: var(--mango-viewer-audio-art-aspect-ratio, 16 / 7);\n        min-height: var(--mango-viewer-audio-art-min-height, 0);\n        box-sizing: border-box;\n      }\n      media-controller[audio] .audio-art {\n        aspect-ratio: auto;\n        height: calc(100% - 44px);\n      }\n      @media (max-width: 480px) {\n        media-controller {\n          width: 100%;\n          max-width: 100%;\n          min-width: 0;\n        }\n        media-control-bar {\n          width: 100%;\n          max-width: 100%;\n          min-width: 0;\n          overflow: hidden;\n        }\n        media-time-range {\n          flex: 1 1 48px;\n          min-width: 48px;\n        }\n        media-seek-backward-button,\n        media-seek-forward-button,\n        media-volume-range,\n        media-playback-rate-menu-button {\n          display: none;\n        }\n      }\n    ", t.append(n);
	};
	e(() => {
		let e = a(g);
		if (!e) return;
		e.controller = m.controller, m.controller.manifest && m.controller.configure({}), b(e);
		let t = new MutationObserver(() => b(e));
		return e.shadowRoot && t.observe(e.shadowRoot, {
			childList: !0,
			subtree: !0
		}), () => t.disconnect();
	}), e(() => {
		let e = m.controller, t = [
			e.on("av-play", ({ detail: e }) => {
				v = !1, m.onmediaplay?.({ time: e.time });
			}),
			e.on("av-pause", ({ detail: e }) => {
				m.onmediapause?.({ time: e.time });
			}),
			e.on("av-timeupdate", ({ detail: t }) => {
				m.onmediatimeupdate?.({
					time: t.time,
					duration: t.duration
				}), !(!_ || v || t.time < _.end) && (v = !0, e.pause(), m.onmediasegmentend?.());
			}),
			e.on("av-seek", ({ detail: e }) => {
				v = !1, m.onmediaseek?.({
					from: e.from,
					to: e.to
				});
			}),
			e.on("av-canvaschange", () => {
				_ = null, v = !1;
			})
		];
		return () => {
			for (let e of t) e();
		};
	});
	var x = {
		start: () => {
			let e = _?.start ?? m.controller.source?.segment?.start ?? 0;
			m.controller.seekTo(e), m.controller.play();
		},
		play: () => {
			m.controller.play();
		},
		pause: () => m.controller.pause(),
		stop: () => m.controller.stop(),
		seekBy: (e) => m.controller.seekBy(e),
		seekTo: (e) => m.controller.seekTo(e),
		setMediaSegment: (e, t) => {
			!Number.isFinite(e) || !Number.isFinite(t) || t <= e || (_ = {
				start: e,
				end: t
			}, v = !1, m.controller.seekTo(e));
		}
	}, S = L();
	let C;
	var w = d(S);
	return n(w, 1, "svelte-kxiicu"), f(w, (e) => c(g, e), () => a(g)), i(S), o(() => C = n(S, 1, "av-renderer svelte-kxiicu", null, C, { "av-renderer--video": h()?.type === "video" })), s(t, S), r(x);
}
//#endregion
export { I as capabilities, R as default };
