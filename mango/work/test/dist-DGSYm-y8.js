import { n as e } from "./rolldown-runtime-B0aSnxlc.js";
import { i as t, n, r } from "./i18n-BAnagCyi.js";
//#region node_modules/media-chrome/dist/constants.js
var i = /* @__PURE__ */ e({
	AttributeToStateChangeEventMap: () => f,
	AvailabilityStates: () => h,
	MediaStateChangeEvents: () => u,
	MediaStateReceiverAttributes: () => o,
	MediaUIAttributes: () => l,
	MediaUIEvents: () => a,
	MediaUIProps: () => s,
	PointerTypes: () => te,
	ReadyStates: () => ee,
	StateChangeEventToAttributeMap: () => d,
	StreamTypes: () => g,
	TextTrackKinds: () => p,
	TextTrackModes: () => m,
	VolumeLevels: () => ne,
	WebkitPresentationModes: () => re
}), a = {
	MEDIA_PLAY_REQUEST: "mediaplayrequest",
	MEDIA_PAUSE_REQUEST: "mediapauserequest",
	MEDIA_MUTE_REQUEST: "mediamuterequest",
	MEDIA_UNMUTE_REQUEST: "mediaunmuterequest",
	MEDIA_LOOP_REQUEST: "medialooprequest",
	MEDIA_VOLUME_REQUEST: "mediavolumerequest",
	MEDIA_SEEK_REQUEST: "mediaseekrequest",
	MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest",
	MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest",
	MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest",
	MEDIA_PREVIEW_REQUEST: "mediapreviewrequest",
	MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest",
	MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest",
	MEDIA_ENTER_CAST_REQUEST: "mediaentercastrequest",
	MEDIA_EXIT_CAST_REQUEST: "mediaexitcastrequest",
	MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest",
	MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest",
	MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest",
	MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest",
	MEDIA_TOGGLE_SUBTITLES_REQUEST: "mediatogglesubtitlesrequest",
	MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest",
	MEDIA_RENDITION_REQUEST: "mediarenditionrequest",
	MEDIA_AUDIO_TRACK_REQUEST: "mediaaudiotrackrequest",
	MEDIA_SEEK_TO_LIVE_REQUEST: "mediaseektoliverequest",
	REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver",
	UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver"
}, o = {
	MEDIA_CHROME_ATTRIBUTES: "mediachromeattributes",
	MEDIA_CONTROLLER: "mediacontroller"
}, s = {
	MEDIA_AIRPLAY_UNAVAILABLE: "mediaAirplayUnavailable",
	MEDIA_AUDIO_TRACK_ENABLED: "mediaAudioTrackEnabled",
	MEDIA_AUDIO_TRACK_LIST: "mediaAudioTrackList",
	MEDIA_AUDIO_TRACK_UNAVAILABLE: "mediaAudioTrackUnavailable",
	MEDIA_BUFFERED: "mediaBuffered",
	MEDIA_CAST_UNAVAILABLE: "mediaCastUnavailable",
	MEDIA_CHAPTERS_CUES: "mediaChaptersCues",
	MEDIA_CURRENT_TIME: "mediaCurrentTime",
	MEDIA_DURATION: "mediaDuration",
	MEDIA_ENDED: "mediaEnded",
	MEDIA_ERROR: "mediaError",
	MEDIA_ERROR_CODE: "mediaErrorCode",
	MEDIA_ERROR_MESSAGE: "mediaErrorMessage",
	MEDIA_FULLSCREEN_UNAVAILABLE: "mediaFullscreenUnavailable",
	MEDIA_HAS_PLAYED: "mediaHasPlayed",
	MEDIA_HEIGHT: "mediaHeight",
	MEDIA_IS_AIRPLAYING: "mediaIsAirplaying",
	MEDIA_IS_CASTING: "mediaIsCasting",
	MEDIA_IS_FULLSCREEN: "mediaIsFullscreen",
	MEDIA_IS_PIP: "mediaIsPip",
	MEDIA_LOADING: "mediaLoading",
	MEDIA_MUTED: "mediaMuted",
	MEDIA_LOOP: "mediaLoop",
	MEDIA_PAUSED: "mediaPaused",
	MEDIA_PIP_UNAVAILABLE: "mediaPipUnavailable",
	MEDIA_PLAYBACK_RATE: "mediaPlaybackRate",
	MEDIA_PREVIEW_CHAPTER: "mediaPreviewChapter",
	MEDIA_PREVIEW_COORDS: "mediaPreviewCoords",
	MEDIA_PREVIEW_IMAGE: "mediaPreviewImage",
	MEDIA_PREVIEW_TIME: "mediaPreviewTime",
	MEDIA_RENDITION_LIST: "mediaRenditionList",
	MEDIA_RENDITION_SELECTED: "mediaRenditionSelected",
	MEDIA_RENDITION_UNAVAILABLE: "mediaRenditionUnavailable",
	MEDIA_SEEKABLE: "mediaSeekable",
	MEDIA_STREAM_TYPE: "mediaStreamType",
	MEDIA_SUBTITLES_LIST: "mediaSubtitlesList",
	MEDIA_SUBTITLES_SHOWING: "mediaSubtitlesShowing",
	MEDIA_TARGET_LIVE_WINDOW: "mediaTargetLiveWindow",
	MEDIA_TIME_IS_LIVE: "mediaTimeIsLive",
	MEDIA_VOLUME: "mediaVolume",
	MEDIA_VOLUME_LEVEL: "mediaVolumeLevel",
	MEDIA_VOLUME_UNAVAILABLE: "mediaVolumeUnavailable",
	MEDIA_LANG: "mediaLang",
	MEDIA_WIDTH: "mediaWidth"
}, c = Object.entries(s), l = c.reduce((e, [t, n]) => (e[t] = n.toLowerCase(), e), {}), u = c.reduce((e, [t, n]) => (e[t] = n.toLowerCase(), e), {
	USER_INACTIVE_CHANGE: "userinactivechange",
	BREAKPOINTS_CHANGE: "breakpointchange",
	BREAKPOINTS_COMPUTED: "breakpointscomputed"
}), d = Object.entries(u).reduce((e, [t, n]) => {
	let r = l[t];
	return r && (e[n] = r), e;
}, { userinactivechange: "userinactive" }), f = Object.entries(l).reduce((e, [t, n]) => {
	let r = u[t];
	return r && (e[n] = r), e;
}, { userinactive: "userinactivechange" }), p = {
	SUBTITLES: "subtitles",
	CAPTIONS: "captions",
	DESCRIPTIONS: "descriptions",
	CHAPTERS: "chapters",
	METADATA: "metadata"
}, m = {
	DISABLED: "disabled",
	HIDDEN: "hidden",
	SHOWING: "showing"
}, ee = {
	HAVE_NOTHING: 0,
	HAVE_METADATA: 1,
	HAVE_CURRENT_DATA: 2,
	HAVE_FUTURE_DATA: 3,
	HAVE_ENOUGH_DATA: 4
}, te = {
	MOUSE: "mouse",
	PEN: "pen",
	TOUCH: "touch"
}, h = {
	UNAVAILABLE: "unavailable",
	UNSUPPORTED: "unsupported"
}, g = {
	LIVE: "live",
	ON_DEMAND: "on-demand",
	UNKNOWN: "unknown"
}, ne = {
	HIGH: "high",
	MEDIUM: "medium",
	LOW: "low",
	OFF: "off"
}, re = {
	INLINE: "inline",
	FULLSCREEN: "fullscreen",
	PICTURE_IN_PICTURE: "picture-in-picture"
};
//#endregion
//#region node_modules/media-chrome/dist/utils/utils.js
function ie(e) {
	return e?.map(ae).join(" ");
}
function ae(e) {
	if (e) {
		let { id: t, width: n, height: r } = e;
		return [
			t,
			n,
			r
		].filter((e) => e != null).join(":");
	}
}
function oe(e) {
	return e?.map(se).join(" ");
}
function se(e) {
	if (e) {
		let { id: t, kind: n, language: r, label: i } = e;
		return [
			t,
			n,
			r,
			i
		].filter((e) => e != null).join(":");
	}
}
function ce(e) {
	return typeof e == "number" && !Number.isNaN(e) && Number.isFinite(e);
}
var le = (e) => new Promise((t) => setTimeout(t, e)), ue = /* @__PURE__ */ e({
	emptyTimeRanges: () => me,
	formatAsTimePhrase: () => pe,
	formatTime: () => _,
	serializeTimeRanges: () => he
}), de = [
	{
		singular: "hour",
		plural: "hours"
	},
	{
		singular: "minute",
		plural: "minutes"
	},
	{
		singular: "second",
		plural: "seconds"
	}
], fe = (e, n) => `${e} ${t(e === 1 ? de[n].singular : de[n].plural)}`, pe = (e) => {
	if (!ce(e)) return "";
	let n = Math.abs(e), r = n !== e, i = new Date(0, 0, 0, 0, 0, n, 0), a = [
		i.getHours(),
		i.getMinutes(),
		i.getSeconds()
	].map((e, t) => e && fe(e, t)).filter((e) => e).join(", ");
	return r ? t("{time} remaining", { time: a }) : a;
};
function _(e, t) {
	let n = !1;
	e < 0 && (n = !0, e = 0 - e), e = e < 0 ? 0 : e;
	let r = Math.floor(e % 60), i = Math.floor(e / 60 % 60), a = Math.floor(e / 3600), o = Math.floor(t / 60 % 60), s = Math.floor(t / 3600);
	return (isNaN(e) || e === Infinity) && (a = i = r = "0"), a = a > 0 || s > 0 ? a + ":" : "", i = ((a || o >= 10) && i < 10 ? "0" + i : i) + ":", r = r < 10 ? "0" + r : r, (n ? "-" : "") + a + i + r;
}
var me = Object.freeze({
	length: 0,
	start(e) {
		let t = e >>> 0;
		if (t >= this.length) throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);
		return 0;
	},
	end(e) {
		let t = e >>> 0;
		if (t >= this.length) throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);
		return 0;
	}
});
function he(e = me) {
	return Array.from(e).map((t, n) => [Number(e.start(n).toFixed(3)), Number(e.end(n).toFixed(3))].join(":")).join(" ");
}
//#endregion
//#region node_modules/media-chrome/dist/utils/server-safe-globals.js
var ge = class {
	addEventListener() {}
	removeEventListener() {}
	dispatchEvent() {
		return !0;
	}
}, _e = class extends ge {}, ve = class extends _e {
	constructor() {
		super(...arguments), this.role = null;
	}
}, ye = class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, be = {
	createElement: function() {
		return new xe.HTMLElement();
	},
	createElementNS: function() {
		return new xe.HTMLElement();
	},
	addEventListener() {},
	removeEventListener() {},
	dispatchEvent(e) {
		return !1;
	}
}, xe = {
	ResizeObserver: ye,
	document: be,
	Node: _e,
	Element: ve,
	HTMLElement: class extends ve {
		constructor() {
			super(...arguments), this.innerHTML = "";
		}
		get content() {
			return new xe.DocumentFragment();
		}
	},
	DocumentFragment: class extends ge {},
	customElements: {
		get: function() {},
		define: function() {},
		whenDefined: function() {}
	},
	localStorage: {
		getItem(e) {
			return null;
		},
		setItem(e, t) {},
		removeItem(e) {}
	},
	CustomEvent: function() {},
	getComputedStyle: function() {},
	navigator: {
		languages: [],
		get userAgent() {
			return "";
		}
	},
	matchMedia(e) {
		return {
			matches: !1,
			media: e
		};
	},
	DOMParser: class {
		parseFromString(e, t) {
			return { body: { textContent: e } };
		}
	}
}, Se = "global" in globalThis && (globalThis == null ? void 0 : globalThis.global) === globalThis || typeof window > "u" || window.customElements === void 0, Ce = Object.keys(xe).every((e) => e in globalThis), v = Se && !Ce ? xe : globalThis, y = Se && !Ce ? be : globalThis.document, we = /* @__PURE__ */ new WeakMap(), Te = (e) => {
	let t = we.get(e);
	return t || we.set(e, t = /* @__PURE__ */ new Set()), t;
}, Ee = new v.ResizeObserver((e) => {
	for (let t of e) for (let e of Te(t.target)) e(t);
});
function De(e, t) {
	Te(e).add(t), Ee.observe(e);
}
function Oe(e, t) {
	let n = Te(e);
	n.delete(t), n.size || Ee.unobserve(e);
}
//#endregion
//#region node_modules/media-chrome/dist/utils/element-utils.js
function b(e) {
	let t = {};
	for (let n of e) t[n.name] = n.value;
	return t;
}
function ke(e) {
	return Ae(e) ?? Fe(e, "media-controller");
}
function Ae(e) {
	let { MEDIA_CONTROLLER: t } = o, n = e.getAttribute(t);
	if (n) return Le(e)?.getElementById(n);
}
var je = (e, t, n = ".value") => {
	let r = e.querySelector(n);
	r && (r.textContent = t);
}, Me = (e, t) => {
	let n = `slot[name="${t}"]`, r = e.shadowRoot.querySelector(n);
	return r ? r.children : [];
}, Ne = (e, t) => Me(e, t)[0], Pe = (e, t) => !e || !t ? !1 : e?.contains(t) ? !0 : Pe(e, t.getRootNode().host), Fe = (e, t) => e ? e.closest(t) || Fe(e.getRootNode().host, t) : null;
function Ie(e = document) {
	let t = e?.activeElement;
	return t ? Ie(t.shadowRoot) ?? t : null;
}
function Le(e) {
	let t = (e?.getRootNode)?.call(e);
	return t instanceof ShadowRoot || t instanceof Document ? t : null;
}
function Re(e, { depth: t = 3, checkOpacity: n = !0, checkVisibilityCSS: r = !0 } = {}) {
	if (e.checkVisibility) return e.checkVisibility({
		checkOpacity: n,
		checkVisibilityCSS: r
	});
	let i = e;
	for (; i && t > 0;) {
		let e = getComputedStyle(i);
		if (n && e.opacity === "0" || r && e.visibility === "hidden" || e.display === "none") return !1;
		i = i.parentElement, t--;
	}
	return !0;
}
function ze(e, t, n, r) {
	let i = r.x - n.x, a = r.y - n.y, o = i * i + a * a;
	if (o === 0) return 0;
	let s = ((e - n.x) * i + (t - n.y) * a) / o;
	return Math.max(0, Math.min(1, s));
}
function x(e, t) {
	return Be(e, (e) => e === t) || Ve(e, t);
}
function Be(e, t) {
	let n;
	for (n of e.querySelectorAll("style:not([media])") ?? []) {
		let e;
		try {
			e = n.sheet?.cssRules;
		} catch {
			continue;
		}
		for (let n of e ?? []) if (t(n.selectorText)) return n;
	}
}
function Ve(e, t) {
	let n = e.querySelectorAll("style:not([media])") ?? [], r = n?.[n.length - 1];
	if (!r?.sheet) return console.warn("Media Chrome: No style sheet found on style tag of", e), { style: {
		setProperty: () => {},
		removeProperty: () => "",
		getPropertyValue: () => ""
	} };
	let i = r?.sheet.insertRule(`${t}{}`, r.sheet.cssRules.length);
	return r.sheet.cssRules?.[i];
}
function S(e, t, n = NaN) {
	let r = e.getAttribute(t);
	return r == null ? n : +r;
}
function C(e, t, n) {
	let r = +n;
	if (n == null || Number.isNaN(r)) {
		e.hasAttribute(t) && e.removeAttribute(t);
		return;
	}
	S(e, t, void 0) !== r && e.setAttribute(t, `${r}`);
}
function w(e, t) {
	return e.hasAttribute(t);
}
function T(e, t, n) {
	if (n == null) {
		e.hasAttribute(t) && e.removeAttribute(t);
		return;
	}
	w(e, t) != n && e.toggleAttribute(t, n);
}
function E(e, t, n = null) {
	return e.getAttribute(t) ?? n;
}
function D(e, t, n) {
	if (n == null) {
		e.hasAttribute(t) && e.removeAttribute(t);
		return;
	}
	let r = `${n}`;
	E(e, t, void 0) !== r && e.setAttribute(t, r);
}
//#endregion
//#region node_modules/media-chrome/dist/media-gesture-receiver.js
var He = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, O = (e, t, n) => (He(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ue = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, We = (e, t, n, r) => (He(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), k;
function Ge(e) {
	return "\n    <style>\n      :host {\n        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));\n        box-sizing: border-box;\n      }\n    </style>\n  ";
}
var Ke = class extends v.HTMLElement {
	constructor() {
		if (super(), Ue(this, k, void 0), !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes);
			this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
		}
	}
	static get observedAttributes() {
		return [o.MEDIA_CONTROLLER, l.MEDIA_PAUSED];
	}
	attributeChangedCallback(e, t, n) {
		var r, i, a, s;
		e === o.MEDIA_CONTROLLER && (t && ((i = (r = O(this, k))?.unassociateElement) == null || i.call(r, this), We(this, k, null)), n && this.isConnected && (We(this, k, this.getRootNode()?.getElementById(n)), (s = (a = O(this, k))?.associateElement) == null || s.call(a, this)));
	}
	connectedCallback() {
		var e, t;
		this.tabIndex = -1, this.setAttribute("aria-hidden", "true"), We(this, k, qe(this)), this.getAttribute(o.MEDIA_CONTROLLER) && ((t = (e = O(this, k))?.associateElement) == null || t.call(e, this)), O(this, k) && (O(this, k).addEventListener("pointerdown", this), O(this, k).addEventListener("click", this), O(this, k).hasAttribute("tabindex") || (O(this, k).tabIndex = 0));
	}
	disconnectedCallback() {
		var e, t, n, r;
		this.getAttribute(o.MEDIA_CONTROLLER) && ((t = (e = O(this, k))?.unassociateElement) == null || t.call(e, this)), (n = O(this, k)) == null || n.removeEventListener("pointerdown", this), (r = O(this, k)) == null || r.removeEventListener("click", this), We(this, k, null);
	}
	handleEvent(e) {
		let t = e.composedPath()?.[0];
		if (["video", "media-controller"].includes(t?.localName)) {
			if (e.type === "pointerdown") this._pointerType = e.pointerType;
			else if (e.type === "click") {
				let { clientX: t, clientY: n } = e, { left: r, top: i, width: a, height: o } = this.getBoundingClientRect(), s = t - r, c = n - i;
				if (s < 0 || c < 0 || s > a || c > o || a === 0 && o === 0) return;
				let l = this._pointerType || "mouse";
				if (this._pointerType = void 0, l === te.TOUCH) {
					this.handleTap(e);
					return;
				}
				if (l === te.MOUSE || l === te.PEN) {
					this.handleMouseClick(e);
					return;
				}
			}
		}
	}
	get mediaPaused() {
		return w(this, l.MEDIA_PAUSED);
	}
	set mediaPaused(e) {
		T(this, l.MEDIA_PAUSED, e);
	}
	handleTap(e) {}
	handleMouseClick(e) {
		let t = this.mediaPaused ? a.MEDIA_PLAY_REQUEST : a.MEDIA_PAUSE_REQUEST;
		this.dispatchEvent(new v.CustomEvent(t, {
			composed: !0,
			bubbles: !0
		}));
	}
};
k = /* @__PURE__ */ new WeakMap(), Ke.shadowRootOptions = { mode: "open" }, Ke.getTemplateHTML = Ge;
function qe(e) {
	let t = e.getAttribute(o.MEDIA_CONTROLLER);
	return t ? e.getRootNode()?.getElementById(t) : Fe(e, "media-controller");
}
v.customElements.get("media-gesture-receiver") || v.customElements.define("media-gesture-receiver", Ke);
var Je = Ke, Ye = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, A = (e, t, n) => (Ye(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, M = (e, t, n, r) => (Ye(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), N = (e, t, n) => (Ye(e, t, "access private method"), n), Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, P = {
	AUDIO: "audio",
	AUTOHIDE: "autohide",
	BREAKPOINTS: "breakpoints",
	GESTURES_DISABLED: "gesturesdisabled",
	KEYBOARD_CONTROL: "keyboardcontrol",
	NO_AUTOHIDE: "noautohide",
	USER_INACTIVE: "userinactive",
	AUTOHIDE_OVER_CONTROLS: "autohideovercontrols"
};
function gt(e) {
	return `
    <style>
      
      :host([${l.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${P.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${P.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${P.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${P.AUDIO}])[${P.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${P.AUDIO}])[${P.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${P.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${P.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${P.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${P.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${P.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${P.USER_INACTIVE}]:not([${l.MEDIA_PAUSED}]):not([${l.MEDIA_IS_AIRPLAYING}]):not([${l.MEDIA_IS_CASTING}]):not([${P.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${P.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${P.USER_INACTIVE}]:not([${P.NO_AUTOHIDE}]):not([${l.MEDIA_PAUSED}]):not([${l.MEDIA_IS_CASTING}]):not([${P.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${P.USER_INACTIVE}][${P.AUTOHIDE_OVER_CONTROLS}]:not([${P.NO_AUTOHIDE}]):not([${l.MEDIA_PAUSED}]):not([${l.MEDIA_IS_CASTING}]):not([${P.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${P.AUDIO}])[${l.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Je.shadowRootOptions.mode}">
          ${Je.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `;
}
var _t = Object.values(l), vt = "sm:384 md:576 lg:768 xl:960";
function yt(e) {
	bt(e.target, e.contentRect.width);
}
function bt(e, t) {
	if (!e.isConnected) return;
	let n = xt(e.getAttribute(P.BREAKPOINTS) ?? vt), r = St(n, t), i = !1;
	if (Object.keys(n).forEach((t) => {
		if (r.includes(t)) {
			e.hasAttribute(`breakpoint${t}`) || (e.setAttribute(`breakpoint${t}`, ""), i = !0);
			return;
		}
		e.hasAttribute(`breakpoint${t}`) && (e.removeAttribute(`breakpoint${t}`), i = !0);
	}), i) {
		let t = new CustomEvent(u.BREAKPOINTS_CHANGE, { detail: r });
		e.dispatchEvent(t);
	}
	e.breakpointsComputed || (e.breakpointsComputed = !0, e.dispatchEvent(new CustomEvent(u.BREAKPOINTS_COMPUTED, {
		bubbles: !0,
		composed: !0
	})));
}
function xt(e) {
	let t = e.split(/\s+/);
	return Object.fromEntries(t.map((e) => e.split(":")));
}
function St(e, t) {
	return Object.keys(e).filter((n) => t >= parseInt(e[n]));
}
var Ct = class extends v.HTMLElement {
	constructor() {
		if (super(), j(this, it), j(this, ot), j(this, ct), j(this, ut), j(this, ft), j(this, Xe, void 0), j(this, Ze, 0), j(this, Qe, null), j(this, $e, null), j(this, et, void 0), this.breakpointsComputed = !1, j(this, tt, (e) => {
			let t = this.media;
			for (let n of e) {
				if (n.type !== "childList") continue;
				let e = n.removedNodes;
				for (let r of e) {
					if (r.slot != "media" || n.target != this) continue;
					let e = n.previousSibling && n.previousSibling.previousElementSibling;
					if (!e || !t) this.mediaUnsetCallback(r);
					else {
						let t = e.slot !== "media";
						for (; (e = e.previousSibling) !== null;) e.slot == "media" && (t = !1);
						t && this.mediaUnsetCallback(r);
					}
				}
				if (t) for (let e of n.addedNodes) e === t && this.handleMediaUpdated(t);
			}
		}), j(this, nt, !1), j(this, rt, (e) => {
			A(this, nt) || (setTimeout(() => {
				yt(e), M(this, nt, !1);
			}, 0), M(this, nt, !0));
		}), j(this, mt, void 0), j(this, ht, () => {
			if (!A(this, mt).assignedElements({ flatten: !0 }).length) {
				A(this, Qe) && this.mediaUnsetCallback(A(this, Qe));
				return;
			}
			this.handleMediaUpdated(this.media);
		}), !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes), t = this.constructor.getTemplateHTML(e);
			this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(t) : this.shadowRoot.innerHTML = t;
		}
		M(this, Xe, new MutationObserver(A(this, tt)));
	}
	static get observedAttributes() {
		return [P.AUTOHIDE, P.GESTURES_DISABLED].concat(_t).filter((e) => ![
			l.MEDIA_RENDITION_LIST,
			l.MEDIA_AUDIO_TRACK_LIST,
			l.MEDIA_CHAPTERS_CUES,
			l.MEDIA_WIDTH,
			l.MEDIA_HEIGHT,
			l.MEDIA_ERROR,
			l.MEDIA_ERROR_MESSAGE
		].includes(e));
	}
	attributeChangedCallback(e, t, n) {
		e.toLowerCase() == P.AUTOHIDE && (this.autohide = n);
	}
	get media() {
		let e = this.querySelector(":scope > [slot=media]");
		return e?.nodeName == "SLOT" && (e = e.assignedElements({ flatten: !0 })[0]), e;
	}
	async handleMediaUpdated(e) {
		e && (M(this, Qe, e), e.localName.includes("-") && await v.customElements.whenDefined(e.localName), this.mediaSetCallback(e));
	}
	connectedCallback() {
		var e;
		A(this, Xe).observe(this, {
			childList: !0,
			subtree: !0
		}), De(this, A(this, rt));
		let n = this.getAttribute(P.AUDIO) == null ? t("video player") : t("audio player");
		this.setAttribute("role", "region"), this.setAttribute("aria-label", n), this.handleMediaUpdated(this.media), this.setAttribute(P.USER_INACTIVE, ""), bt(this, this.getBoundingClientRect().width);
		let r = this.querySelector(":scope > slot[slot=media]");
		r && (M(this, mt, r), A(this, mt).addEventListener("slotchange", A(this, ht))), this.addEventListener("pointerdown", this), this.addEventListener("pointermove", this), this.addEventListener("pointerup", this), this.addEventListener("mouseleave", this), this.addEventListener("keyup", this), (e = v.window) == null || e.addEventListener("mouseup", this);
	}
	disconnectedCallback() {
		var e;
		Oe(this, A(this, rt)), clearTimeout(A(this, $e)), A(this, Xe).disconnect(), this.media && this.mediaUnsetCallback(this.media), (e = v.window) == null || e.removeEventListener("mouseup", this), this.removeEventListener("pointerdown", this), this.removeEventListener("pointermove", this), this.removeEventListener("pointerup", this), this.removeEventListener("mouseleave", this), this.removeEventListener("keyup", this), A(this, mt) && (A(this, mt).removeEventListener("slotchange", A(this, ht)), M(this, mt, null)), M(this, nt, !1);
	}
	mediaSetCallback(e) {}
	mediaUnsetCallback(e) {
		M(this, Qe, null);
	}
	handleEvent(e) {
		switch (e.type) {
			case "pointerdown":
				M(this, Ze, e.timeStamp);
				break;
			case "pointermove":
				N(this, it, at).call(this, e);
				break;
			case "pointerup":
				N(this, ot, st).call(this, e);
				break;
			case "mouseleave":
				N(this, ct, lt).call(this);
				break;
			case "mouseup":
				this.removeAttribute(P.KEYBOARD_CONTROL);
				break;
			case "keyup": N(this, ft, pt).call(this), this.setAttribute(P.KEYBOARD_CONTROL, "");
		}
	}
	set autohide(e) {
		let t = Number(e);
		M(this, et, isNaN(t) ? 0 : t);
	}
	get autohide() {
		return (A(this, et) === void 0 ? 2 : A(this, et)).toString();
	}
	get breakpoints() {
		return E(this, P.BREAKPOINTS);
	}
	set breakpoints(e) {
		D(this, P.BREAKPOINTS, e);
	}
	get audio() {
		return w(this, P.AUDIO);
	}
	set audio(e) {
		T(this, P.AUDIO, e);
	}
	get gesturesDisabled() {
		return w(this, P.GESTURES_DISABLED);
	}
	set gesturesDisabled(e) {
		T(this, P.GESTURES_DISABLED, e);
	}
	get keyboardControl() {
		return w(this, P.KEYBOARD_CONTROL);
	}
	set keyboardControl(e) {
		T(this, P.KEYBOARD_CONTROL, e);
	}
	get noAutohide() {
		return w(this, P.NO_AUTOHIDE);
	}
	set noAutohide(e) {
		T(this, P.NO_AUTOHIDE, e);
	}
	get autohideOverControls() {
		return w(this, P.AUTOHIDE_OVER_CONTROLS);
	}
	set autohideOverControls(e) {
		T(this, P.AUTOHIDE_OVER_CONTROLS, e);
	}
	get userInteractive() {
		return w(this, P.USER_INACTIVE);
	}
	set userInteractive(e) {
		T(this, P.USER_INACTIVE, e);
	}
};
Xe = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakSet(), at = function(e) {
	if (e.pointerType !== "mouse" && e.timeStamp - A(this, Ze) < 250) return;
	N(this, ut, dt).call(this), clearTimeout(A(this, $e));
	let t = this.hasAttribute(P.AUTOHIDE_OVER_CONTROLS);
	([this, this.media].includes(e.target) || t) && N(this, ft, pt).call(this);
}, ot = /* @__PURE__ */ new WeakSet(), st = function(e) {
	if (e.pointerType === "touch") {
		let t = !this.hasAttribute(P.USER_INACTIVE);
		[this, this.media].includes(e.target) && t ? N(this, ct, lt).call(this) : N(this, ft, pt).call(this);
	} else e.composedPath().some((e) => ["media-play-button", "media-fullscreen-button"].includes(e?.localName)) && N(this, ft, pt).call(this);
}, ct = /* @__PURE__ */ new WeakSet(), lt = function() {
	if (A(this, et) < 0 || this.hasAttribute(P.USER_INACTIVE)) return;
	this.setAttribute(P.USER_INACTIVE, "");
	let e = new v.CustomEvent(u.USER_INACTIVE_CHANGE, {
		composed: !0,
		bubbles: !0,
		detail: !0
	});
	this.dispatchEvent(e);
}, ut = /* @__PURE__ */ new WeakSet(), dt = function() {
	if (!this.hasAttribute(P.USER_INACTIVE)) return;
	this.removeAttribute(P.USER_INACTIVE);
	let e = new v.CustomEvent(u.USER_INACTIVE_CHANGE, {
		composed: !0,
		bubbles: !0,
		detail: !1
	});
	this.dispatchEvent(e);
}, ft = /* @__PURE__ */ new WeakSet(), pt = function() {
	N(this, ut, dt).call(this), clearTimeout(A(this, $e));
	let e = parseInt(this.autohide);
	e < 0 || M(this, $e, setTimeout(() => {
		N(this, ct, lt).call(this);
	}, e * 1e3));
}, mt = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), Ct.shadowRootOptions = { mode: "open" }, Ct.getTemplateHTML = gt, v.customElements.get("media-container") || v.customElements.define("media-container", Ct);
var wt = Ct, Tt = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, F = (e, t, n) => (Tt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Et = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Dt = (e, t, n, r) => (Tt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ot, kt, At, jt, Mt, Nt, Pt = class {
	constructor(e, t, { defaultValue: n } = { defaultValue: void 0 }) {
		Et(this, Mt), Et(this, Ot, void 0), Et(this, kt, void 0), Et(this, At, void 0), Et(this, jt, /* @__PURE__ */ new Set()), Dt(this, Ot, e), Dt(this, kt, t), Dt(this, At, new Set(n));
	}
	[Symbol.iterator]() {
		return F(this, Mt, Nt).values();
	}
	get length() {
		return F(this, Mt, Nt).size;
	}
	get value() {
		return [...F(this, Mt, Nt)].join(" ") ?? "";
	}
	set value(e) {
		e !== this.value && (Dt(this, jt, /* @__PURE__ */ new Set()), this.add(...e?.split(" ") ?? []));
	}
	toString() {
		return this.value;
	}
	item(e) {
		return [...F(this, Mt, Nt)][e];
	}
	values() {
		return F(this, Mt, Nt).values();
	}
	forEach(e, t) {
		F(this, Mt, Nt).forEach(e, t);
	}
	add(...e) {
		var t;
		e.forEach((e) => F(this, jt).add(e)), !(this.value === "" && !F(this, Ot)?.hasAttribute(`${F(this, kt)}`)) && ((t = F(this, Ot)) == null || t.setAttribute(`${F(this, kt)}`, `${this.value}`));
	}
	remove(...e) {
		var t;
		e.forEach((e) => F(this, jt).delete(e)), (t = F(this, Ot)) == null || t.setAttribute(`${F(this, kt)}`, `${this.value}`);
	}
	contains(e) {
		return F(this, Mt, Nt).has(e);
	}
	toggle(e, t) {
		return t === void 0 ? this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0) : t ? (this.add(e), !0) : (this.remove(e), !1);
	}
	replace(e, t) {
		return this.remove(e), this.add(t), e === t;
	}
};
Ot = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakSet(), Nt = function() {
	return F(this, jt).size ? F(this, jt) : F(this, At);
};
//#endregion
//#region node_modules/media-chrome/dist/utils/captions.js
var Ft = (e = "") => e.split(/\s+/), It = (e = "") => {
	let [t, n, r] = e.split(":"), i = r ? decodeURIComponent(r) : void 0;
	return {
		kind: t === "cc" ? p.CAPTIONS : p.SUBTITLES,
		language: n,
		label: i
	};
}, Lt = (e = "", t = {}) => Ft(e).map((e) => {
	let n = It(e);
	return {
		...t,
		...n
	};
}), Rt = (e) => e ? Array.isArray(e) ? e.map((e) => typeof e == "string" ? It(e) : e) : typeof e == "string" ? Lt(e) : [e] : [], zt = ({ kind: e, label: t, language: n } = { kind: "subtitles" }) => t ? `${e === "captions" ? "cc" : "sb"}:${n}:${encodeURIComponent(t)}` : n, Bt = (e = []) => Array.prototype.map.call(e, zt).join(" "), Vt = (e, t) => (n) => n[e] === t, Ht = (e) => {
	let t = Object.entries(e).map(([e, t]) => Vt(e, t));
	return (e) => t.every((t) => t(e));
}, Ut = (e, t = [], n = []) => {
	let r = Rt(n).map(Ht);
	Array.from(t).filter((e) => r.some((t) => t(e))).forEach((t) => {
		t.mode = e;
	});
}, Wt = (e, t = () => !0) => {
	if (!e?.textTracks) return [];
	let n = typeof t == "function" ? t : Ht(t);
	return Array.from(e.textTracks).filter(n);
}, Gt = (e) => !!e.mediaSubtitlesShowing?.length || e.hasAttribute(l.MEDIA_SUBTITLES_SHOWING), Kt = (e) => {
	let { media: t, fullscreenElement: n } = e;
	try {
		let e = n && "requestFullscreen" in n ? "requestFullscreen" : n && "webkitRequestFullScreen" in n ? "webkitRequestFullScreen" : void 0;
		if (e) {
			let t = n[e]?.call(n);
			if (t instanceof Promise) return t.catch(() => {});
		} else t?.webkitEnterFullscreen ? t.webkitEnterFullscreen() : t?.requestFullscreen && t.requestFullscreen();
	} catch (e) {
		console.error(e);
	}
}, qt = "exitFullscreen" in y ? "exitFullscreen" : "webkitExitFullscreen" in y ? "webkitExitFullscreen" : "webkitCancelFullScreen" in y ? "webkitCancelFullScreen" : void 0, Jt = (e) => {
	let { documentElement: t } = e;
	if (qt) {
		let e = (t?.[qt])?.call(t);
		if (e instanceof Promise) return e.catch(() => {});
	}
}, Yt = "fullscreenElement" in y ? "fullscreenElement" : "webkitFullscreenElement" in y ? "webkitFullscreenElement" : void 0, Xt = (e) => {
	let { documentElement: t, media: n } = e, r = t?.[Yt];
	return !r && "webkitDisplayingFullscreen" in n && "webkitPresentationMode" in n && n.webkitDisplayingFullscreen && n.webkitPresentationMode === re.FULLSCREEN ? n : r;
}, Zt = (e) => {
	let { media: t, documentElement: n, fullscreenElement: r = t } = e;
	if (!t || !n) return !1;
	let i = Xt(e);
	if (!i) return !1;
	if (i === r || i === t) return !0;
	if (i.localName.includes("-")) {
		let e = i.shadowRoot;
		if (!(Yt in e)) return Pe(i, r);
		for (; e?.[Yt];) {
			if (e[Yt] === r) return !0;
			e = e[Yt]?.shadowRoot;
		}
	}
	return !1;
}, Qt = "fullscreenEnabled" in y ? "fullscreenEnabled" : "webkitFullscreenEnabled" in y ? "webkitFullscreenEnabled" : void 0, $t = (e) => {
	let { documentElement: t, media: n } = e;
	return !!t?.[Qt] || n && "webkitSupportsFullscreen" in n;
}, en, tn = () => {
	var e;
	return en || (en = ((e = y)?.createElement)?.call(e, "video"), en);
}, nn = async (e = tn()) => {
	if (!e) return !1;
	let t = e.volume;
	e.volume = t / 2 + .1;
	let n = new AbortController(), r = await Promise.race([rn(e, n.signal), an(e, t)]);
	return n.abort(), r;
}, rn = (e, t) => new Promise((n) => {
	e.addEventListener("volumechange", () => n(!0), { signal: t });
}), an = async (e, t) => {
	for (let n = 0; n < 10; n++) {
		if (e.volume === t) return !1;
		await le(10);
	}
	return e.volume !== t;
}, on = /.*Version\/.*Safari\/.*/.test(v.navigator.userAgent), sn = (e = tn()) => v.matchMedia("(display-mode: standalone)").matches && on ? !1 : typeof e?.requestPictureInPicture == "function", cn = (e = tn()) => $t({
	documentElement: y,
	media: e
}), ln = cn(), un = sn(), dn = !!v.WebKitPlaybackTargetAvailabilityEvent, fn = !!v.chrome, pn = (e) => Wt(e.media, (e) => [p.SUBTITLES, p.CAPTIONS].includes(e.kind)).sort((e, t) => e.kind >= t.kind ? 1 : -1), mn = (e) => Wt(e.media, (e) => e.mode === m.SHOWING && [p.SUBTITLES, p.CAPTIONS].includes(e.kind)), hn = (e, t) => {
	let n = pn(e), r = mn(e), i = !!r.length;
	if (n.length) {
		if (t === !1 || i && t !== !0) Ut(m.DISABLED, n, r);
		else if (t === !0 || !i && t !== !1) {
			let t = n[0], { options: i } = e;
			if (!i?.noSubtitlesLangPref) {
				let e = v.localStorage.getItem("media-chrome-pref-subtitles-lang"), r = e ? [e, ...v.navigator.languages] : v.navigator.languages, i = n.filter((e) => r.some((t) => e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e, t) => r.findIndex((t) => e.language.toLowerCase().startsWith(t.split("-")[0])) - r.findIndex((e) => t.language.toLowerCase().startsWith(e.split("-")[0])));
				i[0] && (t = i[0]);
			}
			let { language: a, label: o, kind: s } = t;
			Ut(m.DISABLED, n, r), Ut(m.SHOWING, n, [{
				language: a,
				label: o,
				kind: s
			}]);
		}
	}
}, gn = (e, t) => e === t ? !0 : e == null || t == null || typeof e != typeof t ? !1 : typeof e == "number" && Number.isNaN(e) && Number.isNaN(t) ? !0 : typeof e == "object" ? Array.isArray(e) ? _n(e, t) : Object.entries(e).every(([e, n]) => e in t && gn(n, t[e])) : !1, _n = (e, t) => {
	let n = Array.isArray(e), r = Array.isArray(t);
	return n === r ? n || r ? e.length === t.length && e.every((e, n) => gn(e, t[n])) : !0 : !1;
}, vn = Object.values(g), yn, bn = nn().then((e) => (yn = e, yn)), xn = async (...e) => {
	await Promise.all(e.filter((e) => e).map(async (e) => {
		if (!("localName" in e && e instanceof v.HTMLElement)) return;
		let t = e.localName;
		if (!t.includes("-")) return;
		let n = v.customElements.get(t);
		n && e instanceof n || (await v.customElements.whenDefined(t), v.customElements.upgrade(e));
	}));
}, Sn = new v.DOMParser(), Cn = (e) => e && (Sn.parseFromString(e, "text/html").body.textContent || e), wn = {
	mediaError: {
		get(e, t) {
			let { media: n } = e;
			if (t?.type !== "playing") return n?.error;
		},
		mediaEvents: [
			"emptied",
			"error",
			"playing"
		]
	},
	mediaErrorCode: {
		get(e, t) {
			let { media: n } = e;
			if (t?.type !== "playing") return n?.error?.code;
		},
		mediaEvents: [
			"emptied",
			"error",
			"playing"
		]
	},
	mediaErrorMessage: {
		get(e, t) {
			let { media: n } = e;
			if (t?.type !== "playing") return n?.error?.message ?? "";
		},
		mediaEvents: [
			"emptied",
			"error",
			"playing"
		]
	},
	mediaWidth: {
		get(e) {
			let { media: t } = e;
			return t?.videoWidth ?? 0;
		},
		mediaEvents: ["resize"]
	},
	mediaHeight: {
		get(e) {
			let { media: t } = e;
			return t?.videoHeight ?? 0;
		},
		mediaEvents: ["resize"]
	},
	mediaPaused: {
		get(e) {
			let { media: t } = e;
			return t?.paused ?? !0;
		},
		set(e, t) {
			var n;
			let { media: r } = t;
			r && (e ? r.pause() : (n = r.play()) == null || n.catch(() => {}));
		},
		mediaEvents: [
			"play",
			"playing",
			"pause",
			"emptied"
		]
	},
	mediaHasPlayed: {
		get(e, t) {
			let { media: n } = e;
			return n ? t ? t.type === "playing" : !n.paused : !1;
		},
		mediaEvents: ["playing", "emptied"]
	},
	mediaEnded: {
		get(e) {
			let { media: t } = e;
			return t?.ended ?? !1;
		},
		mediaEvents: [
			"seeked",
			"ended",
			"emptied"
		]
	},
	mediaPlaybackRate: {
		get(e) {
			let { media: t } = e;
			return t?.playbackRate ?? 1;
		},
		set(e, t) {
			let { media: n } = t;
			n && Number.isFinite(+e) && (n.playbackRate = +e);
		},
		mediaEvents: ["ratechange", "loadstart"]
	},
	mediaMuted: {
		get(e) {
			let { media: t } = e;
			return t?.muted ?? !1;
		},
		set(e, t) {
			let { media: n, options: { noMutedPref: r } = {} } = t;
			if (n) {
				n.muted = e;
				try {
					let t = v.localStorage.getItem("media-chrome-pref-muted") !== null, i = n.hasAttribute("muted");
					if (r) {
						t && v.localStorage.removeItem("media-chrome-pref-muted");
						return;
					}
					if (i && !t) return;
					v.localStorage.setItem("media-chrome-pref-muted", e ? "true" : "false");
				} catch (e) {
					console.debug("Error setting muted pref", e);
				}
			}
		},
		mediaEvents: ["volumechange"],
		stateOwnersUpdateHandlers: [(e, t) => {
			let { options: { noMutedPref: n } } = t, { media: r } = t;
			if (!(!r || r.muted || n)) try {
				let n = v.localStorage.getItem("media-chrome-pref-muted") === "true";
				wn.mediaMuted.set(n, t), e(n);
			} catch (e) {
				console.debug("Error getting muted pref", e);
			}
		}]
	},
	mediaLoop: {
		get(e) {
			let { media: t } = e;
			return t?.loop;
		},
		set(e, t) {
			let { media: n } = t;
			n && (n.loop = e);
		},
		mediaEvents: ["medialooprequest"]
	},
	mediaVolume: {
		get(e) {
			let { media: t } = e;
			return t?.volume ?? 1;
		},
		set(e, t) {
			let { media: n, options: { noVolumePref: r } = {} } = t;
			if (n) {
				try {
					e == null ? v.localStorage.removeItem("media-chrome-pref-volume") : !n.hasAttribute("muted") && !r && v.localStorage.setItem("media-chrome-pref-volume", e.toString());
				} catch (e) {
					console.debug("Error setting volume pref", e);
				}
				Number.isFinite(+e) && (n.volume = +e);
			}
		},
		mediaEvents: ["volumechange"],
		stateOwnersUpdateHandlers: [(e, t) => {
			let { options: { noVolumePref: n } } = t;
			if (!n) try {
				let { media: n } = t;
				if (!n) return;
				let r = v.localStorage.getItem("media-chrome-pref-volume");
				if (r == null) return;
				wn.mediaVolume.set(+r, t), e(+r);
			} catch (e) {
				console.debug("Error getting volume pref", e);
			}
		}]
	},
	mediaVolumeLevel: {
		get(e) {
			let { media: t } = e;
			return t?.volume === void 0 ? "high" : t.muted || t.volume === 0 ? "off" : t.volume < .5 ? "low" : t.volume < .75 ? "medium" : "high";
		},
		mediaEvents: ["volumechange"]
	},
	mediaCurrentTime: {
		get(e) {
			let { media: t } = e;
			return t?.currentTime ?? 0;
		},
		set(e, t) {
			let { media: n } = t;
			!n || !ce(e) || (n.currentTime = e);
		},
		mediaEvents: ["timeupdate", "loadedmetadata"]
	},
	mediaDuration: {
		get(e) {
			let { media: t, options: { defaultDuration: n } = {} } = e;
			return n && (!t || !t.duration || Number.isNaN(t.duration) || !Number.isFinite(t.duration)) ? n : Number.isFinite(t?.duration) ? t.duration : NaN;
		},
		mediaEvents: [
			"durationchange",
			"loadedmetadata",
			"emptied"
		]
	},
	mediaLoading: {
		get(e) {
			let { media: t } = e;
			return t?.readyState < 3;
		},
		mediaEvents: [
			"waiting",
			"playing",
			"emptied"
		]
	},
	mediaSeekable: {
		get(e) {
			let { media: t } = e;
			if (!t?.seekable?.length) return;
			let n = t.seekable.start(0), r = t.seekable.end(t.seekable.length - 1);
			if (!(!n && !r)) return [Number(n.toFixed(3)), Number(r.toFixed(3))];
		},
		mediaEvents: [
			"loadedmetadata",
			"emptied",
			"progress",
			"seekablechange"
		]
	},
	mediaBuffered: {
		get(e) {
			let { media: t } = e, n = t?.buffered ?? [];
			return Array.from(n).map((e, t) => [Number(n.start(t).toFixed(3)), Number(n.end(t).toFixed(3))]);
		},
		mediaEvents: ["progress", "emptied"]
	},
	mediaStreamType: {
		get(e) {
			let { media: t, options: { defaultStreamType: n } = {} } = e, r = [g.LIVE, g.ON_DEMAND].includes(n) ? n : void 0;
			if (!t) return r;
			let { streamType: i } = t;
			if (vn.includes(i)) return i === g.UNKNOWN ? r : i;
			let a = t.duration;
			return a === Infinity ? g.LIVE : Number.isFinite(a) ? g.ON_DEMAND : r;
		},
		mediaEvents: [
			"emptied",
			"durationchange",
			"loadedmetadata",
			"streamtypechange"
		]
	},
	mediaTargetLiveWindow: {
		get(e) {
			let { media: t } = e;
			if (!t) return NaN;
			let { targetLiveWindow: n } = t, r = wn.mediaStreamType.get(e);
			return (n == null || Number.isNaN(n)) && r === g.LIVE ? 0 : n;
		},
		mediaEvents: [
			"emptied",
			"durationchange",
			"loadedmetadata",
			"streamtypechange",
			"targetlivewindowchange"
		]
	},
	mediaTimeIsLive: {
		get(e) {
			let { media: t, options: { liveEdgeOffset: n = 10 } = {} } = e;
			if (!t) return !1;
			if (typeof t.liveEdgeStart == "number") return !Number.isNaN(t.liveEdgeStart) && t.currentTime >= t.liveEdgeStart;
			if (wn.mediaStreamType.get(e) !== g.LIVE) return !1;
			let r = t.seekable;
			if (!r) return !0;
			if (!r.length) return !1;
			let i = r.end(r.length - 1) - n;
			return t.currentTime >= i;
		},
		mediaEvents: [
			"playing",
			"timeupdate",
			"progress",
			"waiting",
			"emptied"
		]
	},
	mediaSubtitlesList: {
		get(e) {
			return pn(e).map(({ kind: e, label: t, language: n }) => ({
				kind: e,
				label: t,
				language: n
			}));
		},
		mediaEvents: ["loadstart"],
		textTracksEvents: ["addtrack", "removetrack"]
	},
	mediaSubtitlesShowing: {
		get(e) {
			return mn(e).map(({ kind: e, label: t, language: n }) => ({
				kind: e,
				label: t,
				language: n
			}));
		},
		mediaEvents: ["loadstart"],
		textTracksEvents: [
			"addtrack",
			"removetrack",
			"change"
		],
		stateOwnersUpdateHandlers: [(e, t) => {
			var n, r;
			let { media: i, options: a } = t;
			if (!i) return;
			let o = (e) => {
				a.defaultSubtitles && (e && ![p.CAPTIONS, p.SUBTITLES].includes(e?.track?.kind) || hn(t, !0));
			};
			return i.addEventListener("loadstart", o), (n = i.textTracks) == null || n.addEventListener("addtrack", o), (r = i.textTracks) == null || r.addEventListener("removetrack", o), () => {
				var e, t;
				i.removeEventListener("loadstart", o), (e = i.textTracks) == null || e.removeEventListener("addtrack", o), (t = i.textTracks) == null || t.removeEventListener("removetrack", o);
			};
		}]
	},
	mediaChaptersCues: {
		get(e) {
			let { media: t } = e;
			if (!t) return [];
			let [n] = Wt(t, { kind: p.CHAPTERS });
			return Array.from(n?.cues ?? []).map(({ text: e, startTime: t, endTime: n }) => ({
				text: Cn(e),
				startTime: t,
				endTime: n
			}));
		},
		mediaEvents: ["loadstart", "loadedmetadata"],
		textTracksEvents: [
			"addtrack",
			"removetrack",
			"change"
		],
		stateOwnersUpdateHandlers: [(e, t) => {
			let { media: n } = t;
			if (!n) return;
			let r = n.querySelector("track[kind=\"chapters\"][default][src]"), i = n.shadowRoot?.querySelector(":is(video,audio) > track[kind=\"chapters\"][default][src]");
			return r?.addEventListener("load", e), i?.addEventListener("load", e), () => {
				r?.removeEventListener("load", e), i?.removeEventListener("load", e);
			};
		}]
	},
	mediaIsPip: {
		get(e) {
			let { media: t, documentElement: n } = e;
			if (!t || !n || !n.pictureInPictureElement) return !1;
			if (n.pictureInPictureElement === t) return !0;
			if (n.pictureInPictureElement instanceof HTMLMediaElement) return t.localName?.includes("-") ? Pe(t, n.pictureInPictureElement) : !1;
			if (n.pictureInPictureElement.localName.includes("-")) {
				let e = n.pictureInPictureElement.shadowRoot;
				for (; e?.pictureInPictureElement;) {
					if (e.pictureInPictureElement === t) return !0;
					e = e.pictureInPictureElement?.shadowRoot;
				}
			}
			return !1;
		},
		set(e, t) {
			let { media: n } = t;
			if (n) if (e) {
				if (!y.pictureInPictureEnabled) {
					console.warn("MediaChrome: Picture-in-picture is not enabled");
					return;
				}
				if (!n.requestPictureInPicture) {
					console.warn("MediaChrome: The current media does not support picture-in-picture");
					return;
				}
				let e = () => {
					console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.");
				};
				n.requestPictureInPicture().catch((t) => {
					if (t.code === 11) {
						if (!n.src) {
							console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");
							return;
						}
						if (n.readyState === 0 && n.preload === "none") {
							let t = () => {
								n.removeEventListener("loadedmetadata", r), n.preload = "none";
							}, r = () => {
								n.requestPictureInPicture().catch(e), t();
							};
							n.addEventListener("loadedmetadata", r), n.preload = "metadata", setTimeout(() => {
								n.readyState === 0 && e(), t();
							}, 1e3);
						} else throw t;
					} else throw t;
				});
			} else y.pictureInPictureElement && y.exitPictureInPicture();
		},
		mediaEvents: ["enterpictureinpicture", "leavepictureinpicture"]
	},
	mediaRenditionList: {
		get(e) {
			let { media: t } = e;
			return [...t?.videoRenditions ?? []].map((e) => ({ ...e }));
		},
		mediaEvents: ["emptied", "loadstart"],
		videoRenditionsEvents: ["addrendition", "removerendition"]
	},
	mediaRenditionSelected: {
		get(e) {
			let { media: t } = e;
			return t?.videoRenditions?.[t.videoRenditions?.selectedIndex]?.id;
		},
		set(e, t) {
			let { media: n } = t;
			if (!n?.videoRenditions) {
				console.warn("MediaController: Rendition selection not supported by this media.");
				return;
			}
			let r = e, i = Array.prototype.findIndex.call(n.videoRenditions, (e) => e.id == r);
			n.videoRenditions.selectedIndex != i && (n.videoRenditions.selectedIndex = i);
		},
		mediaEvents: ["emptied"],
		videoRenditionsEvents: [
			"addrendition",
			"removerendition",
			"change"
		]
	},
	mediaAudioTrackList: {
		get(e) {
			let { media: t } = e;
			return [...t?.audioTracks ?? []];
		},
		mediaEvents: ["emptied", "loadstart"],
		audioTracksEvents: ["addtrack", "removetrack"]
	},
	mediaAudioTrackEnabled: {
		get(e) {
			let { media: t } = e;
			return [...t?.audioTracks ?? []].find((e) => e.enabled)?.id;
		},
		set(e, t) {
			let { media: n } = t;
			if (!n?.audioTracks) {
				console.warn("MediaChrome: Audio track selection not supported by this media.");
				return;
			}
			let r = e;
			for (let e of n.audioTracks) e.enabled = r == e.id;
		},
		mediaEvents: ["emptied"],
		audioTracksEvents: [
			"addtrack",
			"removetrack",
			"change"
		]
	},
	mediaIsFullscreen: {
		get(e) {
			return Zt(e);
		},
		set(e, t, n) {
			var r;
			e ? (Kt(t), n.detail && !t.media?.inert && ((r = t.media) == null || r.focus())) : Jt(t);
		},
		rootEvents: ["fullscreenchange", "webkitfullscreenchange"],
		mediaEvents: [
			"webkitbeginfullscreen",
			"webkitendfullscreen",
			"webkitpresentationmodechanged"
		]
	},
	mediaIsCasting: {
		get(e) {
			let { media: t } = e;
			return !t?.remote || t.remote?.state === "disconnected" ? !1 : t.remote.state === "connected";
		},
		set(e, t) {
			let { media: n } = t;
			if (n && !(e && n.remote?.state !== "disconnected") && !(!e && n.remote?.state !== "connected")) {
				if (typeof n.remote.prompt != "function") {
					console.warn("MediaChrome: Casting is not supported in this environment");
					return;
				}
				n.remote.prompt().catch(() => {});
			}
		},
		remoteEvents: [
			"connect",
			"connecting",
			"disconnect"
		]
	},
	mediaIsAirplaying: {
		get() {
			return !1;
		},
		set(e, t) {
			let { media: n } = t;
			if (n) {
				if (!(n.webkitShowPlaybackTargetPicker && v.WebKitPlaybackTargetAvailabilityEvent)) {
					console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");
					return;
				}
				n.webkitShowPlaybackTargetPicker();
			}
		},
		mediaEvents: ["webkitcurrentplaybacktargetiswirelesschanged"]
	},
	mediaFullscreenUnavailable: { get(e) {
		let { media: t } = e;
		if (!ln || !cn(t)) return h.UNSUPPORTED;
	} },
	mediaPipUnavailable: { get(e) {
		let { media: t } = e;
		if (!un || !sn(t)) return h.UNSUPPORTED;
		if (t?.disablePictureInPicture) return h.UNAVAILABLE;
	} },
	mediaVolumeUnavailable: {
		get(e) {
			let { media: t } = e;
			if (yn === !1 || t?.volume == null) return h.UNSUPPORTED;
		},
		stateOwnersUpdateHandlers: [(e) => {
			yn ?? bn.then((t) => e(t ? void 0 : h.UNSUPPORTED));
		}]
	},
	mediaCastUnavailable: {
		get(e, { availability: t = "not-available" } = {}) {
			let { media: n } = e;
			if (!fn || !n?.remote?.state) return h.UNSUPPORTED;
			if (t != null && t !== "available") return h.UNAVAILABLE;
		},
		stateOwnersUpdateHandlers: [(e, t) => {
			var n;
			let { media: r } = t;
			if (r) return r.disableRemotePlayback || r.hasAttribute("disableremoteplayback") || (n = r?.remote) == null || n.watchAvailability((t) => {
				e({ availability: t ? "available" : "not-available" });
			}).catch((t) => {
				t.name === "NotSupportedError" ? e({ availability: null }) : e({ availability: "not-available" });
			}), () => {
				var e;
				(e = r?.remote) == null || e.cancelWatchAvailability().catch(() => {});
			};
		}]
	},
	mediaAirplayUnavailable: {
		get(e, t) {
			if (!dn) return h.UNSUPPORTED;
			if (t?.availability === "not-available") return h.UNAVAILABLE;
		},
		mediaEvents: ["webkitplaybacktargetavailabilitychanged"],
		stateOwnersUpdateHandlers: [(e, t) => {
			var n;
			let { media: r } = t;
			if (r) return r.disableRemotePlayback || r.hasAttribute("disableremoteplayback") || (n = r?.remote) == null || n.watchAvailability((t) => {
				e({ availability: t ? "available" : "not-available" });
			}).catch((t) => {
				t.name === "NotSupportedError" ? e({ availability: null }) : e({ availability: "not-available" });
			}), () => {
				var e;
				(e = r?.remote) == null || e.cancelWatchAvailability().catch(() => {});
			};
		}]
	},
	mediaRenditionUnavailable: {
		get(e) {
			let { media: t } = e;
			if (!t?.videoRenditions) return h.UNSUPPORTED;
			if (!t.videoRenditions?.length) return h.UNAVAILABLE;
		},
		mediaEvents: ["emptied", "loadstart"],
		videoRenditionsEvents: ["addrendition", "removerendition"]
	},
	mediaAudioTrackUnavailable: {
		get(e) {
			let { media: t } = e;
			if (!t?.audioTracks) return h.UNSUPPORTED;
			if ((t.audioTracks?.length ?? 0) <= 1) return h.UNAVAILABLE;
		},
		mediaEvents: ["emptied", "loadstart"],
		audioTracksEvents: ["addtrack", "removetrack"]
	},
	mediaLang: { get(e) {
		let { options: { mediaLang: t } = {} } = e;
		return t ?? "en";
	} }
}, Tn = {
	[a.MEDIA_PREVIEW_REQUEST](e, t, { detail: n }) {
		let { media: r } = t, i = n ?? void 0, a, o;
		if (r && i != null) {
			let [e] = Wt(r, {
				kind: p.METADATA,
				label: "thumbnails"
			}), t = Array.prototype.find.call(e?.cues ?? [], (e, t, n) => t === 0 ? e.endTime > i : t === n.length - 1 ? e.startTime <= i : e.startTime <= i && e.endTime > i);
			if (t) {
				let e = /'^(?:[a-z]+:)?\/\//i.test(t.text) ? void 0 : r?.querySelector("track[label=\"thumbnails\"]")?.src, n = new URL(t.text, e);
				o = new URLSearchParams(n.hash).get("#xywh").split(",").map((e) => +e), a = n.href;
			}
		}
		let s = e.mediaDuration.get(t), c = e.mediaChaptersCues.get(t).find((e, t, n) => t === n.length - 1 && s === e.endTime ? e.startTime <= i && e.endTime >= i : e.startTime <= i && e.endTime > i)?.text;
		return n != null && c == null && (c = ""), {
			mediaPreviewTime: i,
			mediaPreviewImage: a,
			mediaPreviewCoords: o,
			mediaPreviewChapter: c
		};
	},
	[a.MEDIA_PAUSE_REQUEST](e, t) {
		e.mediaPaused.set(!0, t);
	},
	[a.MEDIA_PLAY_REQUEST](e, t) {
		let n = e.mediaStreamType.get(t) === g.LIVE, r = !t.options?.noAutoSeekToLive, i = e.mediaTargetLiveWindow.get(t) > 0;
		if (n && r && !i) {
			let n = e.mediaSeekable.get(t)?.[1];
			if (n) {
				let r = n - (t.options?.seekToLiveOffset ?? 0);
				e.mediaCurrentTime.set(r, t);
			}
		}
		e.mediaPaused.set(!1, t);
	},
	[a.MEDIA_PLAYBACK_RATE_REQUEST](e, t, { detail: n }) {
		let r = n;
		e.mediaPlaybackRate.set(r, t);
	},
	[a.MEDIA_MUTE_REQUEST](e, t) {
		e.mediaMuted.set(!0, t);
	},
	[a.MEDIA_UNMUTE_REQUEST](e, t) {
		e.mediaVolume.get(t) || e.mediaVolume.set(.25, t), e.mediaMuted.set(!1, t);
	},
	[a.MEDIA_LOOP_REQUEST](e, t, { detail: n }) {
		let r = !!n;
		return e.mediaLoop.set(r, t), { mediaLoop: r };
	},
	[a.MEDIA_VOLUME_REQUEST](e, t, { detail: n }) {
		let r = n;
		r && e.mediaMuted.get(t) && e.mediaMuted.set(!1, t), e.mediaVolume.set(r, t);
	},
	[a.MEDIA_SEEK_REQUEST](e, t, { detail: n }) {
		let r = n;
		e.mediaCurrentTime.set(r, t);
	},
	[a.MEDIA_SEEK_TO_LIVE_REQUEST](e, t) {
		let n = e.mediaSeekable.get(t)?.[1];
		if (Number.isNaN(Number(n))) return;
		let r = n - (t.options?.seekToLiveOffset ?? 0);
		e.mediaCurrentTime.set(r, t);
	},
	[a.MEDIA_SHOW_SUBTITLES_REQUEST](e, t, { detail: n }) {
		let { options: r } = t, i = pn(t), a = Rt(n), o = a[0]?.language;
		o && !r.noSubtitlesLangPref && v.localStorage.setItem("media-chrome-pref-subtitles-lang", o), Ut(m.SHOWING, i, a);
	},
	[a.MEDIA_DISABLE_SUBTITLES_REQUEST](e, t, { detail: n }) {
		let r = pn(t), i = n ?? [];
		Ut(m.DISABLED, r, i);
	},
	[a.MEDIA_TOGGLE_SUBTITLES_REQUEST](e, t, { detail: n }) {
		hn(t, n);
	},
	[a.MEDIA_RENDITION_REQUEST](e, t, { detail: n }) {
		let r = n;
		e.mediaRenditionSelected.set(r, t);
	},
	[a.MEDIA_AUDIO_TRACK_REQUEST](e, t, { detail: n }) {
		let r = n;
		e.mediaAudioTrackEnabled.set(r, t);
	},
	[a.MEDIA_ENTER_PIP_REQUEST](e, t) {
		e.mediaIsFullscreen.get(t) && e.mediaIsFullscreen.set(!1, t), e.mediaIsPip.set(!0, t);
	},
	[a.MEDIA_EXIT_PIP_REQUEST](e, t) {
		e.mediaIsPip.set(!1, t);
	},
	[a.MEDIA_ENTER_FULLSCREEN_REQUEST](e, t, n) {
		e.mediaIsPip.get(t) && e.mediaIsPip.set(!1, t), e.mediaIsFullscreen.set(!0, t, n);
	},
	[a.MEDIA_EXIT_FULLSCREEN_REQUEST](e, t) {
		e.mediaIsFullscreen.set(!1, t);
	},
	[a.MEDIA_ENTER_CAST_REQUEST](e, t) {
		e.mediaIsFullscreen.get(t) && e.mediaIsFullscreen.set(!1, t), e.mediaIsCasting.set(!0, t);
	},
	[a.MEDIA_EXIT_CAST_REQUEST](e, t) {
		e.mediaIsCasting.set(!1, t);
	},
	[a.MEDIA_AIRPLAY_REQUEST](e, t) {
		e.mediaIsAirplaying.set(!0, t);
	}
}, En = ({ media: e, fullscreenElement: t, documentElement: n, stateMediator: r = wn, requestMap: i = Tn, options: a = {}, monitorStateOwnersOnlyWithSubscriptions: o = !0 }) => {
	let s = [], c = { options: { ...a } }, l = Object.freeze({
		mediaPreviewTime: void 0,
		mediaPreviewImage: void 0,
		mediaPreviewCoords: void 0,
		mediaPreviewChapter: void 0
	}), u = (e) => {
		e != null && (gn(e, l) || (l = Object.freeze({
			...l,
			...e
		}), s.forEach((e) => e(l))));
	}, d = () => {
		let e = Object.entries(r).reduce((e, [t, { get: n }]) => (e[t] = n(c), e), {});
		u(e);
	}, f = {}, p, m = async (e, t) => {
		let n = !!p;
		if (p = {
			...c,
			...p ?? {},
			...e
		}, n) return;
		await xn(...Object.values(e));
		let i = s.length > 0 && t === 0 && o, a = c.media !== p.media, l = c.media?.textTracks !== p.media?.textTracks, m = c.media?.videoRenditions !== p.media?.videoRenditions, ee = c.media?.audioTracks !== p.media?.audioTracks, te = c.media?.remote !== p.media?.remote, h = c.documentElement !== p.documentElement, g = !!c.media && (a || i), ne = !!c.media?.textTracks && (l || i), re = !!c.media?.videoRenditions && (m || i), ie = !!c.media?.audioTracks && (ee || i), ae = !!c.media?.remote && (te || i), oe = !!c.documentElement && (h || i), se = g || ne || re || ie || ae || oe, ce = s.length === 0 && t === 1 && o, le = !!p.media && (a || ce), ue = !!p.media?.textTracks && (l || ce), de = !!p.media?.videoRenditions && (m || ce), fe = !!p.media?.audioTracks && (ee || ce), pe = !!p.media?.remote && (te || ce), _ = !!p.documentElement && (h || ce), me = le || ue || de || fe || pe || _;
		if (!(se || me)) {
			Object.entries(p).forEach(([e, t]) => {
				c[e] = t;
			}), d(), p = void 0;
			return;
		}
		Object.entries(r).forEach(([e, { get: t, mediaEvents: n = [], textTracksEvents: r = [], videoRenditionsEvents: i = [], audioTracksEvents: a = [], remoteEvents: o = [], rootEvents: s = [], stateOwnersUpdateHandlers: l = [] }]) => {
			f[e] || (f[e] = {});
			let d = (n) => {
				let r = t(c, n);
				u({ [e]: r });
			}, m;
			m = f[e].mediaEvents, n.forEach((t) => {
				m && g && (c.media.removeEventListener(t, m), f[e].mediaEvents = void 0), le && (p.media.addEventListener(t, d), f[e].mediaEvents = d);
			}), m = f[e].textTracksEvents, r.forEach((t) => {
				var n, r;
				m && ne && ((n = c.media.textTracks) == null || n.removeEventListener(t, m), f[e].textTracksEvents = void 0), ue && ((r = p.media.textTracks) == null || r.addEventListener(t, d), f[e].textTracksEvents = d);
			}), m = f[e].videoRenditionsEvents, i.forEach((t) => {
				var n, r;
				m && re && ((n = c.media.videoRenditions) == null || n.removeEventListener(t, m), f[e].videoRenditionsEvents = void 0), de && ((r = p.media.videoRenditions) == null || r.addEventListener(t, d), f[e].videoRenditionsEvents = d);
			}), m = f[e].audioTracksEvents, a.forEach((t) => {
				var n, r;
				m && ie && ((n = c.media.audioTracks) == null || n.removeEventListener(t, m), f[e].audioTracksEvents = void 0), fe && ((r = p.media.audioTracks) == null || r.addEventListener(t, d), f[e].audioTracksEvents = d);
			}), m = f[e].remoteEvents, o.forEach((t) => {
				var n, r;
				m && ae && ((n = c.media.remote) == null || n.removeEventListener(t, m), f[e].remoteEvents = void 0), pe && ((r = p.media.remote) == null || r.addEventListener(t, d), f[e].remoteEvents = d);
			}), m = f[e].rootEvents, s.forEach((t) => {
				m && oe && (c.documentElement.removeEventListener(t, m), f[e].rootEvents = void 0), _ && (p.documentElement.addEventListener(t, d), f[e].rootEvents = d);
			});
			let ee = f[e].stateOwnersUpdateHandlers;
			if (ee && se && (Array.isArray(ee) ? ee : [ee]).forEach((e) => {
				typeof e == "function" && e();
			}), me) {
				let t = l.map((e) => e(d, p)).filter((e) => typeof e == "function");
				f[e].stateOwnersUpdateHandlers = t.length === 1 ? t[0] : t;
			} else se && (f[e].stateOwnersUpdateHandlers = void 0);
		}), Object.entries(p).forEach(([e, t]) => {
			c[e] = t;
		}), d(), p = void 0;
	};
	return m({
		media: e,
		fullscreenElement: t,
		documentElement: n,
		options: a
	}), {
		dispatch(e) {
			let { type: t, detail: n } = e;
			if (i[t] && l.mediaErrorCode == null) {
				u(i[t](r, c, e));
				return;
			}
			t === "mediaelementchangerequest" ? m({ media: n }) : t === "fullscreenelementchangerequest" ? m({ fullscreenElement: n }) : t === "documentelementchangerequest" ? m({ documentElement: n }) : t === "optionschangerequest" && (Object.entries(n ?? {}).forEach(([e, t]) => {
				c.options[e] = t;
			}), d());
		},
		getState() {
			return l;
		},
		subscribe(e) {
			return m({}, s.length + 1), s.push(e), e(l), () => {
				let t = s.indexOf(e);
				t >= 0 && (m({}, s.length - 1), s.splice(t, 1));
			};
		}
	};
}, Dn = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, I = (e, t, n) => (Dn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, R = (e, t, n, r) => (Dn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), On = (e, t, n) => (Dn(e, t, "access private method"), n), kn, An, z, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un = [
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown",
	"Enter",
	" ",
	"f",
	"m",
	"k",
	"c",
	"l",
	"j",
	">",
	"<",
	"p"
], Wn = 10, Gn = .025, Kn = .25, qn = .25, Jn = 2, B = {
	DEFAULT_SUBTITLES: "defaultsubtitles",
	DEFAULT_STREAM_TYPE: "defaultstreamtype",
	DEFAULT_DURATION: "defaultduration",
	FULLSCREEN_ELEMENT: "fullscreenelement",
	HOTKEYS: "hotkeys",
	KEYBOARD_BACKWARD_SEEK_OFFSET: "keyboardbackwardseekoffset",
	KEYBOARD_FORWARD_SEEK_OFFSET: "keyboardforwardseekoffset",
	KEYBOARD_DOWN_VOLUME_STEP: "keyboarddownvolumestep",
	KEYBOARD_UP_VOLUME_STEP: "keyboardupvolumestep",
	KEYS_USED: "keysused",
	LANG: "lang",
	LOOP: "loop",
	LIVE_EDGE_OFFSET: "liveedgeoffset",
	NO_AUTO_SEEK_TO_LIVE: "noautoseektolive",
	NO_DEFAULT_STORE: "nodefaultstore",
	NO_HOTKEYS: "nohotkeys",
	NO_MUTED_PREF: "nomutedpref",
	NO_SUBTITLES_LANG_PREF: "nosubtitleslangpref",
	NO_VOLUME_PREF: "novolumepref",
	SEEK_TO_LIVE_OFFSET: "seektoliveoffset"
}, Yn = class extends Ct {
	constructor() {
		super(), L(this, In), L(this, zn), L(this, Vn), this.mediaStateReceivers = [], this.associatedElementSubscriptions = /* @__PURE__ */ new Map(), L(this, kn, new Pt(this, B.HOTKEYS)), L(this, An, void 0), L(this, z, void 0), L(this, jn, null), L(this, Mn, void 0), L(this, Nn, void 0), L(this, Pn, (e) => {
			var t;
			(t = I(this, z)) == null || t.dispatch(e);
		}), L(this, Fn, void 0), L(this, Rn, (e) => {
			let { key: t, shiftKey: n } = e;
			if (!(n && (t === "/" || t === "?") || Un.includes(t))) {
				this.removeEventListener("keyup", I(this, Rn));
				return;
			}
			this.keyboardShortcutHandler(e);
		}), this.associateElement(this);
		let e = {};
		R(this, Mn, (t) => {
			Object.entries(t).forEach(([t, n]) => {
				if (t in e && e[t] === n) return;
				this.propagateMediaState(t, n);
				let r = t.toLowerCase(), i = new v.CustomEvent(f[r], {
					composed: !0,
					detail: n
				});
				this.dispatchEvent(i);
			}), e = t;
		});
	}
	static get observedAttributes() {
		return super.observedAttributes.concat(B.NO_HOTKEYS, B.HOTKEYS, B.DEFAULT_STREAM_TYPE, B.DEFAULT_SUBTITLES, B.DEFAULT_DURATION, B.NO_MUTED_PREF, B.NO_VOLUME_PREF, B.LANG, B.LOOP, B.LIVE_EDGE_OFFSET, B.SEEK_TO_LIVE_OFFSET, B.NO_AUTO_SEEK_TO_LIVE);
	}
	get mediaStore() {
		return I(this, z);
	}
	set mediaStore(e) {
		var t;
		if (I(this, z) && ((t = I(this, Nn)) == null || t.call(this), R(this, Nn, void 0)), R(this, z, e), !I(this, z) && !this.hasAttribute(B.NO_DEFAULT_STORE)) {
			On(this, In, Ln).call(this);
			return;
		}
		R(this, Nn, I(this, z)?.subscribe(I(this, Mn)));
	}
	get fullscreenElement() {
		return I(this, An) ?? this;
	}
	set fullscreenElement(e) {
		var t;
		this.hasAttribute(B.FULLSCREEN_ELEMENT) && this.removeAttribute(B.FULLSCREEN_ELEMENT), R(this, An, e), (t = I(this, z)) == null || t.dispatch({
			type: "fullscreenelementchangerequest",
			detail: this.fullscreenElement
		});
	}
	get defaultSubtitles() {
		return w(this, B.DEFAULT_SUBTITLES);
	}
	set defaultSubtitles(e) {
		T(this, B.DEFAULT_SUBTITLES, e);
	}
	get defaultStreamType() {
		return E(this, B.DEFAULT_STREAM_TYPE);
	}
	set defaultStreamType(e) {
		D(this, B.DEFAULT_STREAM_TYPE, e);
	}
	get defaultDuration() {
		return S(this, B.DEFAULT_DURATION);
	}
	set defaultDuration(e) {
		C(this, B.DEFAULT_DURATION, e);
	}
	get noHotkeys() {
		return w(this, B.NO_HOTKEYS);
	}
	set noHotkeys(e) {
		T(this, B.NO_HOTKEYS, e);
	}
	get keysUsed() {
		return E(this, B.KEYS_USED);
	}
	set keysUsed(e) {
		D(this, B.KEYS_USED, e);
	}
	get liveEdgeOffset() {
		return S(this, B.LIVE_EDGE_OFFSET);
	}
	set liveEdgeOffset(e) {
		C(this, B.LIVE_EDGE_OFFSET, e);
	}
	get noAutoSeekToLive() {
		return w(this, B.NO_AUTO_SEEK_TO_LIVE);
	}
	set noAutoSeekToLive(e) {
		T(this, B.NO_AUTO_SEEK_TO_LIVE, e);
	}
	get noVolumePref() {
		return w(this, B.NO_VOLUME_PREF);
	}
	set noVolumePref(e) {
		T(this, B.NO_VOLUME_PREF, e);
	}
	get noMutedPref() {
		return w(this, B.NO_MUTED_PREF);
	}
	set noMutedPref(e) {
		T(this, B.NO_MUTED_PREF, e);
	}
	get noSubtitlesLangPref() {
		return w(this, B.NO_SUBTITLES_LANG_PREF);
	}
	set noSubtitlesLangPref(e) {
		T(this, B.NO_SUBTITLES_LANG_PREF, e);
	}
	get noDefaultStore() {
		return w(this, B.NO_DEFAULT_STORE);
	}
	set noDefaultStore(e) {
		T(this, B.NO_DEFAULT_STORE, e);
	}
	get resolvedLang() {
		return n();
	}
	attributeChangedCallback(e, t, n) {
		var i, o, s, c, l, u, d, f, p, m;
		if (super.attributeChangedCallback(e, t, n), e === B.NO_HOTKEYS) n !== t && n === "" ? (this.hasAttribute(B.HOTKEYS) && console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."), this.disableHotkeys()) : n !== t && n === null && this.enableHotkeys();
		else if (e === B.HOTKEYS) I(this, kn).value = n;
		else if (e === B.DEFAULT_SUBTITLES && n !== t) (i = I(this, z)) == null || i.dispatch({
			type: "optionschangerequest",
			detail: { defaultSubtitles: this.hasAttribute(B.DEFAULT_SUBTITLES) }
		});
		else if (e === B.DEFAULT_STREAM_TYPE) (o = I(this, z)) == null || o.dispatch({
			type: "optionschangerequest",
			detail: { defaultStreamType: this.getAttribute(B.DEFAULT_STREAM_TYPE) ?? void 0 }
		});
		else if (e === B.LIVE_EDGE_OFFSET && n !== t) (s = I(this, z)) == null || s.dispatch({
			type: "optionschangerequest",
			detail: {
				liveEdgeOffset: this.hasAttribute(B.LIVE_EDGE_OFFSET) ? +this.getAttribute(B.LIVE_EDGE_OFFSET) : void 0,
				seekToLiveOffset: this.hasAttribute(B.SEEK_TO_LIVE_OFFSET) ? +this.getAttribute(B.SEEK_TO_LIVE_OFFSET) : this.hasAttribute(B.LIVE_EDGE_OFFSET) ? +this.getAttribute(B.LIVE_EDGE_OFFSET) : void 0
			}
		});
		else if (e === B.SEEK_TO_LIVE_OFFSET && n !== t) (c = I(this, z)) == null || c.dispatch({
			type: "optionschangerequest",
			detail: { seekToLiveOffset: this.hasAttribute(B.SEEK_TO_LIVE_OFFSET) ? +this.getAttribute(B.SEEK_TO_LIVE_OFFSET) : this.hasAttribute(B.LIVE_EDGE_OFFSET) ? +this.getAttribute(B.LIVE_EDGE_OFFSET) : void 0 }
		});
		else if (e === B.NO_AUTO_SEEK_TO_LIVE) (l = I(this, z)) == null || l.dispatch({
			type: "optionschangerequest",
			detail: { noAutoSeekToLive: this.hasAttribute(B.NO_AUTO_SEEK_TO_LIVE) }
		});
		else if (e === B.FULLSCREEN_ELEMENT) {
			let e = n ? this.getRootNode()?.getElementById(n) : void 0;
			R(this, An, e), (u = I(this, z)) == null || u.dispatch({
				type: "fullscreenelementchangerequest",
				detail: this.fullscreenElement
			});
		} else e === B.LANG && n !== t ? (r(n), (d = I(this, z)) == null || d.dispatch({
			type: "optionschangerequest",
			detail: { mediaLang: n }
		})) : e === B.LOOP && n !== t ? (f = I(this, z)) == null || f.dispatch({
			type: a.MEDIA_LOOP_REQUEST,
			detail: n != null
		}) : e === B.NO_VOLUME_PREF && n !== t ? (p = I(this, z)) == null || p.dispatch({
			type: "optionschangerequest",
			detail: { noVolumePref: this.hasAttribute(B.NO_VOLUME_PREF) }
		}) : e === B.NO_MUTED_PREF && n !== t && ((m = I(this, z)) == null || m.dispatch({
			type: "optionschangerequest",
			detail: { noMutedPref: this.hasAttribute(B.NO_MUTED_PREF) }
		}));
	}
	connectedCallback() {
		var e, t;
		this.associateElement(this), !I(this, z) && !this.hasAttribute(B.NO_DEFAULT_STORE) && On(this, In, Ln).call(this), (e = I(this, z)) == null || e.dispatch({
			type: "documentelementchangerequest",
			detail: y
		}), (t = I(this, z)) == null || t.dispatch({
			type: "fullscreenelementchangerequest",
			detail: this.fullscreenElement
		}), super.connectedCallback(), I(this, z) && !I(this, Nn) && R(this, Nn, I(this, z)?.subscribe(I(this, Mn))), I(this, Fn) !== void 0 && I(this, z) && this.media && setTimeout(() => {
			var e;
			this.media?.textTracks?.length && ((e = I(this, z)) == null || e.dispatch({
				type: a.MEDIA_TOGGLE_SUBTITLES_REQUEST,
				detail: I(this, Fn)
			}));
		}, 0), this.hasAttribute(B.NO_HOTKEYS) ? this.disableHotkeys() : this.enableHotkeys();
	}
	disconnectedCallback() {
		var e, t, n, r, i;
		if ((e = super.disconnectedCallback) == null || e.call(this), this.disableHotkeys(), I(this, z)) {
			let e = I(this, z).getState();
			R(this, Fn, !!e.mediaSubtitlesShowing?.length), (t = I(this, z)) == null || t.dispatch({
				type: "fullscreenelementchangerequest",
				detail: void 0
			}), (n = I(this, z)) == null || n.dispatch({
				type: "documentelementchangerequest",
				detail: void 0
			}), (r = I(this, z)) == null || r.dispatch({
				type: a.MEDIA_TOGGLE_SUBTITLES_REQUEST,
				detail: !1
			});
		}
		I(this, Nn) && ((i = I(this, Nn)) == null || i.call(this), R(this, Nn, void 0)), this.unassociateElement(this), I(this, jn) && (I(this, jn).remove(), R(this, jn, null));
	}
	mediaSetCallback(e) {
		var t;
		super.mediaSetCallback(e), (t = I(this, z)) == null || t.dispatch({
			type: "mediaelementchangerequest",
			detail: e
		}), e.hasAttribute("tabindex") || (e.tabIndex = -1);
	}
	mediaUnsetCallback(e) {
		var t;
		super.mediaUnsetCallback(e), (t = I(this, z)) == null || t.dispatch({
			type: "mediaelementchangerequest",
			detail: void 0
		});
	}
	propagateMediaState(e, t) {
		or(this.mediaStateReceivers, e, t);
	}
	associateElement(e) {
		if (!e) return;
		let { associatedElementSubscriptions: t } = this;
		if (t.has(e)) return;
		let n = sr(e, this.registerMediaStateReceiver.bind(this), this.unregisterMediaStateReceiver.bind(this));
		Object.values(a).forEach((t) => {
			e.addEventListener(t, I(this, Pn));
		}), t.set(e, n);
	}
	unassociateElement(e) {
		if (!e) return;
		let { associatedElementSubscriptions: t } = this;
		t.has(e) && (t.get(e)(), t.delete(e), Object.values(a).forEach((t) => {
			e.removeEventListener(t, I(this, Pn));
		}));
	}
	registerMediaStateReceiver(e) {
		if (!e) return;
		let t = this.mediaStateReceivers;
		t.indexOf(e) > -1 || (t.push(e), I(this, z) && Object.entries(I(this, z).getState()).forEach(([t, n]) => {
			or([e], t, n);
		}));
	}
	unregisterMediaStateReceiver(e) {
		let t = this.mediaStateReceivers, n = t.indexOf(e);
		n < 0 || t.splice(n, 1);
	}
	enableHotkeys() {
		this.addEventListener("keydown", On(this, zn, Bn));
	}
	disableHotkeys() {
		this.removeEventListener("keydown", On(this, zn, Bn)), this.removeEventListener("keyup", I(this, Rn));
	}
	get hotkeys() {
		return I(this, kn);
	}
	set hotkeys(e) {
		D(this, B.HOTKEYS, e);
	}
	keyboardShortcutHandler(e) {
		let t = e.target;
		if ((t.getAttribute(B.KEYS_USED)?.split(" ") ?? t?.keysUsed ?? []).map((e) => e === "Space" ? " " : e).filter(Boolean).includes(e.key)) return;
		let n, r, i;
		if (!I(this, kn).contains(`no${e.key.toLowerCase()}`) && !(e.key === " " && I(this, kn).contains("nospace")) && !(e.shiftKey && (e.key === "/" || e.key === "?") && I(this, kn).contains("noshift+/"))) switch (e.key) {
			case " ":
			case "k":
				n = I(this, z).getState().mediaPaused ? a.MEDIA_PLAY_REQUEST : a.MEDIA_PAUSE_REQUEST, this.dispatchEvent(new v.CustomEvent(n, {
					composed: !0,
					bubbles: !0
				}));
				break;
			case "m":
				n = this.mediaStore.getState().mediaVolumeLevel === "off" ? a.MEDIA_UNMUTE_REQUEST : a.MEDIA_MUTE_REQUEST, this.dispatchEvent(new v.CustomEvent(n, {
					composed: !0,
					bubbles: !0
				}));
				break;
			case "f":
				n = this.mediaStore.getState().mediaIsFullscreen ? a.MEDIA_EXIT_FULLSCREEN_REQUEST : a.MEDIA_ENTER_FULLSCREEN_REQUEST, this.dispatchEvent(new v.CustomEvent(n, {
					composed: !0,
					bubbles: !0
				}));
				break;
			case "c":
				this.dispatchEvent(new v.CustomEvent(a.MEDIA_TOGGLE_SUBTITLES_REQUEST, {
					composed: !0,
					bubbles: !0
				}));
				break;
			case "ArrowLeft":
			case "j": {
				let e = this.hasAttribute(B.KEYBOARD_BACKWARD_SEEK_OFFSET) ? +this.getAttribute(B.KEYBOARD_BACKWARD_SEEK_OFFSET) : Wn;
				r = Math.max((this.mediaStore.getState().mediaCurrentTime ?? 0) - e, 0), i = new v.CustomEvent(a.MEDIA_SEEK_REQUEST, {
					composed: !0,
					bubbles: !0,
					detail: r
				}), this.dispatchEvent(i);
				break;
			}
			case "ArrowRight":
			case "l": {
				let e = this.hasAttribute(B.KEYBOARD_FORWARD_SEEK_OFFSET) ? +this.getAttribute(B.KEYBOARD_FORWARD_SEEK_OFFSET) : Wn;
				r = Math.max((this.mediaStore.getState().mediaCurrentTime ?? 0) + e, 0), i = new v.CustomEvent(a.MEDIA_SEEK_REQUEST, {
					composed: !0,
					bubbles: !0,
					detail: r
				}), this.dispatchEvent(i);
				break;
			}
			case "ArrowUp": {
				let e = this.hasAttribute(B.KEYBOARD_UP_VOLUME_STEP) ? +this.getAttribute(B.KEYBOARD_UP_VOLUME_STEP) : Gn;
				r = Math.min((this.mediaStore.getState().mediaVolume ?? 1) + e, 1), i = new v.CustomEvent(a.MEDIA_VOLUME_REQUEST, {
					composed: !0,
					bubbles: !0,
					detail: r
				}), this.dispatchEvent(i);
				break;
			}
			case "ArrowDown": {
				let e = this.hasAttribute(B.KEYBOARD_DOWN_VOLUME_STEP) ? +this.getAttribute(B.KEYBOARD_DOWN_VOLUME_STEP) : Gn;
				r = Math.max((this.mediaStore.getState().mediaVolume ?? 1) - e, 0), i = new v.CustomEvent(a.MEDIA_VOLUME_REQUEST, {
					composed: !0,
					bubbles: !0,
					detail: r
				}), this.dispatchEvent(i);
				break;
			}
			case "<": {
				let e = this.mediaStore.getState().mediaPlaybackRate ?? 1;
				r = Math.max(e - Kn, qn).toFixed(2), i = new v.CustomEvent(a.MEDIA_PLAYBACK_RATE_REQUEST, {
					composed: !0,
					bubbles: !0,
					detail: r
				}), this.dispatchEvent(i);
				break;
			}
			case ">": {
				let e = this.mediaStore.getState().mediaPlaybackRate ?? 1;
				r = Math.min(e + Kn, Jn).toFixed(2), i = new v.CustomEvent(a.MEDIA_PLAYBACK_RATE_REQUEST, {
					composed: !0,
					bubbles: !0,
					detail: r
				}), this.dispatchEvent(i);
				break;
			}
			case "/":
			case "?":
				e.shiftKey && On(this, Vn, Hn).call(this);
				break;
			case "p": n = this.mediaStore.getState().mediaIsPip ? a.MEDIA_EXIT_PIP_REQUEST : a.MEDIA_ENTER_PIP_REQUEST, i = new v.CustomEvent(n, {
				composed: !0,
				bubbles: !0
			}), this.dispatchEvent(i);
		}
	}
};
kn = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakSet(), Ln = function() {
	this.mediaStore = En({
		media: this.media,
		fullscreenElement: this.fullscreenElement,
		options: {
			defaultSubtitles: this.hasAttribute(B.DEFAULT_SUBTITLES),
			defaultDuration: this.hasAttribute(B.DEFAULT_DURATION) ? +this.getAttribute(B.DEFAULT_DURATION) : void 0,
			defaultStreamType: this.getAttribute(B.DEFAULT_STREAM_TYPE) ?? void 0,
			liveEdgeOffset: this.hasAttribute(B.LIVE_EDGE_OFFSET) ? +this.getAttribute(B.LIVE_EDGE_OFFSET) : void 0,
			seekToLiveOffset: this.hasAttribute(B.SEEK_TO_LIVE_OFFSET) ? +this.getAttribute(B.SEEK_TO_LIVE_OFFSET) : this.hasAttribute(B.LIVE_EDGE_OFFSET) ? +this.getAttribute(B.LIVE_EDGE_OFFSET) : void 0,
			noAutoSeekToLive: this.hasAttribute(B.NO_AUTO_SEEK_TO_LIVE),
			noVolumePref: this.hasAttribute(B.NO_VOLUME_PREF),
			noMutedPref: this.hasAttribute(B.NO_MUTED_PREF),
			noSubtitlesLangPref: this.hasAttribute(B.NO_SUBTITLES_LANG_PREF)
		}
	});
}, Rn = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakSet(), Bn = function(e) {
	let { metaKey: t, altKey: n, key: r, shiftKey: i } = e, a = i && (r === "/" || r === "?");
	if (a && I(this, jn)?.open) {
		this.removeEventListener("keyup", I(this, Rn));
		return;
	}
	if (t || n || !a && !Un.includes(r)) {
		this.removeEventListener("keyup", I(this, Rn));
		return;
	}
	let o = e.target, s = o instanceof HTMLElement && (o.tagName.toLowerCase() === "media-volume-range" || o.tagName.toLowerCase() === "media-time-range");
	[
		" ",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp",
		"ArrowDown"
	].includes(r) && !(I(this, kn).contains(`no${r.toLowerCase()}`) || r === " " && I(this, kn).contains("nospace")) && !s && e.preventDefault(), this.addEventListener("keyup", I(this, Rn), { once: !0 });
}, Vn = /* @__PURE__ */ new WeakSet(), Hn = function() {
	I(this, jn) || (R(this, jn, y.createElement("media-keyboard-shortcuts-dialog")), this.appendChild(I(this, jn))), I(this, jn).open = !0;
};
var Xn = Object.values(l), Zn = Object.values(s), Qn = (e) => {
	var t;
	let { observedAttributes: n } = e.constructor;
	!n && e.nodeName?.includes("-") && (v.customElements.upgrade(e), {observedAttributes: n} = e.constructor);
	let r = ((t = (e?.getAttribute)?.call(e, o.MEDIA_CHROME_ATTRIBUTES))?.split)?.call(t, /\s+/);
	return Array.isArray(n || r) ? (n || r).filter((e) => Xn.includes(e)) : [];
}, $n = (e) => (e.nodeName?.includes("-") && v.customElements.get(e.nodeName?.toLowerCase()) && !(e instanceof v.customElements.get(e.nodeName.toLowerCase())) && v.customElements.upgrade(e), Zn.some((t) => t in e)), er = (e) => $n(e) || !!Qn(e).length, tr = (e) => (e?.join)?.call(e, ":"), nr = {
	[l.MEDIA_SUBTITLES_LIST]: Bt,
	[l.MEDIA_SUBTITLES_SHOWING]: Bt,
	[l.MEDIA_SEEKABLE]: tr,
	[l.MEDIA_BUFFERED]: (e) => e?.map(tr).join(" "),
	[l.MEDIA_PREVIEW_COORDS]: (e) => e?.join(" "),
	[l.MEDIA_RENDITION_LIST]: ie,
	[l.MEDIA_AUDIO_TRACK_LIST]: oe
}, rr = async (e, t, n) => {
	if (e.isConnected || await le(0), typeof n == "boolean" || n == null) return T(e, t, n);
	if (typeof n == "number") return C(e, t, n);
	if (typeof n == "string") return D(e, t, n);
	if (Array.isArray(n) && !n.length) return e.removeAttribute(t);
	let r = nr[t]?.call(nr, n) ?? n;
	return e.setAttribute(t, r);
}, ir = (e) => !!e.closest?.call(e, "*[slot=\"media\"]"), ar = (e, t) => {
	if (ir(e)) return;
	let n = (e, t) => {
		er(e) && t(e);
		let { children: n = [] } = e ?? {}, r = e?.shadowRoot?.children ?? [];
		[...n, ...r].forEach((e) => ar(e, t));
	}, r = e?.nodeName.toLowerCase();
	if (r.includes("-") && !er(e)) {
		v.customElements.whenDefined(r).then(() => {
			n(e, t);
		});
		return;
	}
	n(e, t);
}, or = (e, t, n) => {
	e.forEach((e) => {
		if (t in e) {
			e[t] = n;
			return;
		}
		let r = Qn(e), i = t.toLowerCase();
		r.includes(i) && rr(e, i, n);
	});
}, sr = (e, t, n) => {
	ar(e, t);
	let r = (e) => {
		t(e?.composedPath()[0] ?? e.target);
	}, i = (e) => {
		n(e?.composedPath()[0] ?? e.target);
	};
	e.addEventListener(a.REGISTER_MEDIA_STATE_RECEIVER, r), e.addEventListener(a.UNREGISTER_MEDIA_STATE_RECEIVER, i);
	let s = (e) => {
		e.forEach((e) => {
			let { addedNodes: r = [], removedNodes: i = [], type: a, target: s, attributeName: c } = e;
			a === "childList" ? (Array.prototype.forEach.call(r, (e) => ar(e, t)), Array.prototype.forEach.call(i, (e) => ar(e, n))) : a === "attributes" && c === o.MEDIA_CHROME_ATTRIBUTES && (er(s) ? t(s) : n(s));
		});
	}, c = [], l = (e) => {
		let r = e.target;
		r.name !== "media" && (c.forEach((e) => ar(e, n)), c = [...r.assignedElements({ flatten: !0 })], c.forEach((e) => ar(e, t)));
	};
	e.addEventListener("slotchange", l);
	let u = new MutationObserver(s);
	return u.observe(e, {
		childList: !0,
		attributes: !0,
		subtree: !0
	}), () => {
		ar(e, n), e.removeEventListener("slotchange", l), u.disconnect(), e.removeEventListener(a.REGISTER_MEDIA_STATE_RECEIVER, r), e.removeEventListener(a.UNREGISTER_MEDIA_STATE_RECEIVER, i);
	};
};
v.customElements.get("media-controller") || v.customElements.define("media-controller", Yn);
var cr = Yn, lr = {
	PLACEMENT: "placement",
	BOUNDS: "bounds"
};
function ur(e) {
	return "\n    <style>\n      :host {\n        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));\n        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));\n        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);\n        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);\n        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));\n        position: relative;\n        pointer-events: none;\n        display: var(--media-tooltip-display, inline-flex);\n        justify-content: center;\n        align-items: center;\n        box-sizing: border-box;\n        z-index: var(--media-tooltip-z-index, 1);\n        background: var(--_tooltip-background);\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        font: var(--media-font,\n          var(--media-font-weight, 400)\n          var(--media-font-size, 13px) /\n          var(--media-text-content-height, var(--media-control-height, 18px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        padding: var(--media-tooltip-padding, .35em .7em);\n        border: var(--media-tooltip-border, none);\n        border-radius: var(--media-tooltip-border-radius, 5px);\n        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));\n        white-space: var(--media-tooltip-white-space, nowrap);\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      img, svg {\n        display: inline-block;\n      }\n\n      #arrow {\n        position: absolute;\n        width: 0px;\n        height: 0px;\n        border-style: solid;\n        display: var(--media-tooltip-arrow-display, block);\n      }\n\n      :host(:not([placement])),\n      :host([placement=\"top\"]) {\n        position: absolute;\n        bottom: calc(100% + var(--media-tooltip-distance, 12px));\n        left: 50%;\n        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);\n      }\n      :host(:not([placement])) #arrow,\n      :host([placement=\"top\"]) #arrow {\n        top: 100%;\n        left: 50%;\n        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);\n        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;\n        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);\n      }\n\n      :host([placement=\"right\"]) {\n        position: absolute;\n        left: calc(100% + var(--media-tooltip-distance, 12px));\n        top: 50%;\n        transform: translate(0, -50%);\n      }\n      :host([placement=\"right\"]) #arrow {\n        top: 50%;\n        right: 100%;\n        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;\n        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;\n        transform: translate(0, -50%);\n      }\n\n      :host([placement=\"bottom\"]) {\n        position: absolute;\n        top: calc(100% + var(--media-tooltip-distance, 12px));\n        left: 50%;\n        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);\n      }\n      :host([placement=\"bottom\"]) #arrow {\n        bottom: 100%;\n        left: 50%;\n        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);\n        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;\n        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);\n      }\n\n      :host([placement=\"left\"]) {\n        position: absolute;\n        right: calc(100% + var(--media-tooltip-distance, 12px));\n        top: 50%;\n        transform: translate(0, -50%);\n      }\n      :host([placement=\"left\"]) #arrow {\n        top: 50%;\n        left: 100%;\n        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);\n        border-color: transparent transparent transparent var(--_tooltip-arrow-background);\n        transform: translate(0, -50%);\n      }\n      \n      :host([placement=\"none\"]) #arrow {\n        display: none;\n      }\n    </style>\n    <slot></slot>\n    <div id=\"arrow\"></div>\n  ";
}
var dr = class extends v.HTMLElement {
	constructor() {
		if (super(), this.updateXOffset = () => {
			if (!Re(this, {
				checkOpacity: !1,
				checkVisibilityCSS: !1
			})) return;
			let e = this.placement;
			if (e === "left" || e === "right") {
				this.style.removeProperty("--media-tooltip-offset-x");
				return;
			}
			let t = getComputedStyle(this), n = Fe(this, "#" + this.bounds) ?? ke(this);
			if (!n) return;
			let { x: r, width: i } = n.getBoundingClientRect(), { x: a, width: o } = this.getBoundingClientRect(), s = a + o, c = r + i, l = t.getPropertyValue("--media-tooltip-offset-x"), u = l ? parseFloat(l.replace("px", "")) : 0, d = t.getPropertyValue("--media-tooltip-container-margin"), f = d ? parseFloat(d.replace("px", "")) : 0, p = a - r + u - f, m = s - c + u + f;
			if (p < 0) {
				this.style.setProperty("--media-tooltip-offset-x", `${p}px`);
				return;
			}
			if (m > 0) {
				this.style.setProperty("--media-tooltip-offset-x", `${m}px`);
				return;
			}
			this.style.removeProperty("--media-tooltip-offset-x");
		}, !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes);
			this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
		}
		if (this.arrowEl = this.shadowRoot.querySelector("#arrow"), Object.prototype.hasOwnProperty.call(this, "placement")) {
			let e = this.placement;
			delete this.placement, this.placement = e;
		}
	}
	static get observedAttributes() {
		return [lr.PLACEMENT, lr.BOUNDS];
	}
	get placement() {
		return E(this, lr.PLACEMENT);
	}
	set placement(e) {
		D(this, lr.PLACEMENT, e);
	}
	get bounds() {
		return E(this, lr.BOUNDS);
	}
	set bounds(e) {
		D(this, lr.BOUNDS, e);
	}
};
dr.shadowRootOptions = { mode: "open" }, dr.getTemplateHTML = ur, v.customElements.get("media-tooltip") || v.customElements.define("media-tooltip", dr);
var fr = dr, pr = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, V = (e, t, n) => (pr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), mr = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, hr = (e, t, n, r) => (pr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), gr = (e, t, n) => (pr(e, t, "access private method"), n), _r, vr, yr, br, xr, Sr, Cr, wr = {
	TOOLTIP_PLACEMENT: "tooltipplacement",
	DISABLED: "disabled",
	NO_TOOLTIP: "notooltip"
};
function Tr(e, t = {}) {
	return `
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e, t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${fr.shadowRootOptions.mode}">
          ${fr.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `;
}
function Er(e, t) {
	return "\n    <slot></slot>\n  ";
}
function Dr() {
	return "";
}
var H = class extends v.HTMLElement {
	constructor() {
		if (super(), mr(this, Sr), mr(this, _r, void 0), this.preventClick = !1, this.tooltipEl = null, mr(this, vr, (e) => {
			this.preventClick || this.handleClick(e), setTimeout(V(this, yr), 0);
		}), mr(this, yr, () => {
			var e, t;
			(t = (e = this.tooltipEl)?.updateXOffset) == null || t.call(e);
		}), mr(this, br, (e) => {
			let { key: t } = e;
			if (!this.keysUsed.includes(t)) {
				this.removeEventListener("keyup", V(this, br));
				return;
			}
			this.preventClick || this.handleClick(e);
		}), mr(this, xr, (e) => {
			let { metaKey: t, altKey: n, key: r } = e;
			if (t || n || !this.keysUsed.includes(r)) {
				this.removeEventListener("keyup", V(this, br));
				return;
			}
			this.addEventListener("keyup", V(this, br), { once: !0 });
		}), !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes), t = this.constructor.getTemplateHTML(e);
			this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(t) : this.shadowRoot.innerHTML = t;
		}
		this.tooltipEl = this.shadowRoot.querySelector("media-tooltip");
	}
	static get observedAttributes() {
		return [
			"disabled",
			wr.TOOLTIP_PLACEMENT,
			o.MEDIA_CONTROLLER,
			l.MEDIA_LANG
		];
	}
	enable() {
		this.addEventListener("click", V(this, vr)), this.addEventListener("keydown", V(this, xr)), this.tabIndex = 0;
	}
	disable() {
		this.removeEventListener("click", V(this, vr)), this.removeEventListener("keydown", V(this, xr)), this.removeEventListener("keyup", V(this, br)), this.tabIndex = -1;
	}
	attributeChangedCallback(e, t, n) {
		var r, i, a, s;
		e === o.MEDIA_CONTROLLER ? (t && ((i = (r = V(this, _r))?.unassociateElement) == null || i.call(r, this), hr(this, _r, null)), n && this.isConnected && (hr(this, _r, this.getRootNode()?.getElementById(n)), (s = (a = V(this, _r))?.associateElement) == null || s.call(a, this))) : e === "disabled" && n !== t ? n == null ? this.enable() : this.disable() : e === wr.TOOLTIP_PLACEMENT && this.tooltipEl && n !== t ? this.tooltipEl.placement = n : e === l.MEDIA_LANG && (this.shadowRoot.querySelector("slot[name=\"tooltip-content\"]").innerHTML = this.constructor.getTooltipContentHTML()), V(this, yr).call(this);
	}
	connectedCallback() {
		var e, t;
		let { style: n } = x(this.shadowRoot, ":host");
		n.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`), this.hasAttribute("disabled") ? this.disable() : this.enable(), this.setAttribute("role", "button");
		let r = this.getAttribute(o.MEDIA_CONTROLLER);
		r && (hr(this, _r, this.getRootNode()?.getElementById(r)), (t = (e = V(this, _r))?.associateElement) == null || t.call(e, this)), v.customElements.whenDefined("media-tooltip").then(() => gr(this, Sr, Cr).call(this));
	}
	disconnectedCallback() {
		var e, t;
		this.disable(), (t = (e = V(this, _r))?.unassociateElement) == null || t.call(e, this), hr(this, _r, null), this.removeEventListener("mouseenter", V(this, yr)), this.removeEventListener("focus", V(this, yr)), this.removeEventListener("click", V(this, vr));
	}
	get keysUsed() {
		return ["Enter", " "];
	}
	get tooltipPlacement() {
		return E(this, wr.TOOLTIP_PLACEMENT);
	}
	set tooltipPlacement(e) {
		D(this, wr.TOOLTIP_PLACEMENT, e);
	}
	get mediaController() {
		return E(this, o.MEDIA_CONTROLLER);
	}
	set mediaController(e) {
		D(this, o.MEDIA_CONTROLLER, e);
	}
	get disabled() {
		return w(this, wr.DISABLED);
	}
	set disabled(e) {
		T(this, wr.DISABLED, e);
	}
	get noTooltip() {
		return w(this, wr.NO_TOOLTIP);
	}
	set noTooltip(e) {
		T(this, wr.NO_TOOLTIP, e);
	}
	handleClick(e) {}
};
_r = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakSet(), Cr = function() {
	this.addEventListener("mouseenter", V(this, yr)), this.addEventListener("focus", V(this, yr)), this.addEventListener("click", V(this, vr));
	let e = this.tooltipPlacement;
	e && this.tooltipEl && (this.tooltipEl.placement = e);
}, H.shadowRootOptions = { mode: "open" }, H.getTemplateHTML = Tr, H.getSlotTemplateHTML = Er, H.getTooltipContentHTML = Dr, v.customElements.get("media-chrome-button") || v.customElements.define("media-chrome-button", H);
var Or = H, kr = "<svg aria-hidden=\"true\" viewBox=\"0 0 26 24\">\n  <path d=\"M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z\"/>\n</svg>\n";
function Ar(e) {
	return `
    <style>
      :host([${l.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${l.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${kr}</slot>
      <slot name="exit">${kr}</slot>
    </slot>
  `;
}
function jr() {
	return `
    <slot name="tooltip-enter">${t("start airplay")}</slot>
    <slot name="tooltip-exit">${t("stop airplay")}</slot>
  `;
}
var Mr = (e) => {
	let n = e.mediaIsAirplaying ? t("stop airplay") : t("start airplay");
	e.setAttribute("aria-label", n);
}, Nr = class extends H {
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_IS_AIRPLAYING,
			l.MEDIA_AIRPLAY_UNAVAILABLE
		];
	}
	connectedCallback() {
		super.connectedCallback(), Mr(this);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), e === l.MEDIA_IS_AIRPLAYING && Mr(this);
	}
	get mediaIsAirplaying() {
		return w(this, l.MEDIA_IS_AIRPLAYING);
	}
	set mediaIsAirplaying(e) {
		T(this, l.MEDIA_IS_AIRPLAYING, e);
	}
	get mediaAirplayUnavailable() {
		return E(this, l.MEDIA_AIRPLAY_UNAVAILABLE);
	}
	set mediaAirplayUnavailable(e) {
		D(this, l.MEDIA_AIRPLAY_UNAVAILABLE, e);
	}
	handleClick() {
		let e = new v.CustomEvent(a.MEDIA_AIRPLAY_REQUEST, {
			composed: !0,
			bubbles: !0
		});
		this.dispatchEvent(e);
	}
};
Nr.getSlotTemplateHTML = Ar, Nr.getTooltipContentHTML = jr, v.customElements.get("media-airplay-button") || v.customElements.define("media-airplay-button", Nr);
var Pr = Nr, Fr = "<svg aria-hidden=\"true\" viewBox=\"0 0 26 24\">\n  <path d=\"M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z\"/>\n</svg>", Ir = "<svg aria-hidden=\"true\" viewBox=\"0 0 26 24\">\n  <path d=\"M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z\"/>\n</svg>";
function Lr(e) {
	return `
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Fr}</slot>
      <slot name="off">${Ir}</slot>
    </slot>
  `;
}
function Rr() {
	return `
    <slot name="tooltip-enable">${t("Enable captions")}</slot>
    <slot name="tooltip-disable">${t("Disable captions")}</slot>
  `;
}
var zr = (e) => {
	e.setAttribute("aria-checked", Gt(e).toString());
}, Br = class extends H {
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_SUBTITLES_LIST,
			l.MEDIA_SUBTITLES_SHOWING
		];
	}
	connectedCallback() {
		super.connectedCallback(), this.setAttribute("role", "button"), this.setAttribute("aria-label", t("closed captions")), zr(this);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), e === l.MEDIA_SUBTITLES_SHOWING && zr(this);
	}
	get mediaSubtitlesList() {
		return Vr(this, l.MEDIA_SUBTITLES_LIST);
	}
	set mediaSubtitlesList(e) {
		Hr(this, l.MEDIA_SUBTITLES_LIST, e);
	}
	get mediaSubtitlesShowing() {
		return Vr(this, l.MEDIA_SUBTITLES_SHOWING);
	}
	set mediaSubtitlesShowing(e) {
		Hr(this, l.MEDIA_SUBTITLES_SHOWING, e);
	}
	handleClick() {
		this.dispatchEvent(new v.CustomEvent(a.MEDIA_TOGGLE_SUBTITLES_REQUEST, {
			composed: !0,
			bubbles: !0
		}));
	}
};
Br.getSlotTemplateHTML = Lr, Br.getTooltipContentHTML = Rr;
var Vr = (e, t) => {
	let n = e.getAttribute(t);
	return n ? Lt(n) : [];
}, Hr = (e, t, n) => {
	if (!n?.length) {
		e.removeAttribute(t);
		return;
	}
	let r = Bt(n);
	e.getAttribute(t) !== r && e.setAttribute(t, r);
};
v.customElements.get("media-captions-button") || v.customElements.define("media-captions-button", Br);
var Ur = Br, Wr = "<svg aria-hidden=\"true\" viewBox=\"0 0 24 24\"><g><path class=\"cast_caf_icon_arch0\" d=\"M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z\"/><path class=\"cast_caf_icon_arch1\" d=\"M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z\"/><path class=\"cast_caf_icon_arch2\" d=\"M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z\"/><path class=\"cast_caf_icon_box\" d=\"M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z\"/></g></svg>", Gr = "<svg aria-hidden=\"true\" viewBox=\"0 0 24 24\"><g><path class=\"cast_caf_icon_arch0\" d=\"M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z\"/><path class=\"cast_caf_icon_arch1\" d=\"M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z\"/><path class=\"cast_caf_icon_arch2\" d=\"M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z\"/><path class=\"cast_caf_icon_box\" d=\"M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z\"/><path class=\"cast_caf_icon_boxfill\" d=\"M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z\"/></g></svg>";
function Kr(e) {
	return `
    <style>
      :host([${l.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${l.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Wr}</slot>
      <slot name="exit">${Gr}</slot>
    </slot>
  `;
}
function qr() {
	return `
    <slot name="tooltip-enter">${t("Start casting")}</slot>
    <slot name="tooltip-exit">${t("Stop casting")}</slot>
  `;
}
var Jr = (e) => {
	let n = e.mediaIsCasting ? t("stop casting") : t("start casting");
	e.setAttribute("aria-label", n);
}, Yr = class extends H {
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_IS_CASTING,
			l.MEDIA_CAST_UNAVAILABLE
		];
	}
	connectedCallback() {
		super.connectedCallback(), Jr(this);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), e === l.MEDIA_IS_CASTING && Jr(this);
	}
	get mediaIsCasting() {
		return w(this, l.MEDIA_IS_CASTING);
	}
	set mediaIsCasting(e) {
		T(this, l.MEDIA_IS_CASTING, e);
	}
	get mediaCastUnavailable() {
		return E(this, l.MEDIA_CAST_UNAVAILABLE);
	}
	set mediaCastUnavailable(e) {
		D(this, l.MEDIA_CAST_UNAVAILABLE, e);
	}
	handleClick() {
		let e = this.mediaIsCasting ? a.MEDIA_EXIT_CAST_REQUEST : a.MEDIA_ENTER_CAST_REQUEST;
		this.dispatchEvent(new v.CustomEvent(e, {
			composed: !0,
			bubbles: !0
		}));
	}
};
Yr.getSlotTemplateHTML = Kr, Yr.getTooltipContentHTML = qr, v.customElements.get("media-cast-button") || v.customElements.define("media-cast-button", Yr);
var Xr = Yr, Zr = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, Qr = (e, t, n) => (Zr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $r = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ei = (e, t, n, r) => (Zr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ti = (e, t, n) => (Zr(e, t, "access private method"), n), ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi;
function _i(e) {
	return `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `;
}
function vi(e) {
	return "\n    <slot id=\"content\"></slot>\n  ";
}
var yi = {
	OPEN: "open",
	ANCHOR: "anchor"
}, bi = class extends v.HTMLElement {
	constructor() {
		super(), $r(this, ai), $r(this, si), $r(this, li), $r(this, di), $r(this, pi), $r(this, hi), $r(this, ni, !1), $r(this, ri, null), $r(this, ii, null);
	}
	static get observedAttributes() {
		return [yi.OPEN, yi.ANCHOR];
	}
	get open() {
		return w(this, yi.OPEN);
	}
	set open(e) {
		T(this, yi.OPEN, e);
	}
	handleEvent(e) {
		switch (e.type) {
			case "invoke":
				ti(this, di, fi).call(this, e);
				break;
			case "focusout":
				ti(this, pi, mi).call(this, e);
				break;
			case "keydown": ti(this, hi, gi).call(this, e);
		}
	}
	connectedCallback() {
		ti(this, ai, oi).call(this), this.role ||= "dialog", this.addEventListener("invoke", this), this.addEventListener("focusout", this), this.addEventListener("keydown", this);
	}
	disconnectedCallback() {
		this.removeEventListener("invoke", this), this.removeEventListener("focusout", this), this.removeEventListener("keydown", this);
	}
	attributeChangedCallback(e, t, n) {
		ti(this, ai, oi).call(this), e === yi.OPEN && n !== t && (this.open ? ti(this, si, ci).call(this) : ti(this, li, ui).call(this));
	}
	focus() {
		ei(this, ri, Ie());
		let e = !this.dispatchEvent(new Event("focus", {
			composed: !0,
			cancelable: !0
		})), t = !this.dispatchEvent(new Event("focusin", {
			composed: !0,
			bubbles: !0,
			cancelable: !0
		}));
		e || t || this.querySelector("[autofocus], [tabindex]:not([tabindex=\"-1\"]), [role=\"menu\"]")?.focus();
	}
	get keysUsed() {
		return ["Escape", "Tab"];
	}
};
ni = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ new WeakSet(), oi = function() {
	if (!Qr(this, ni) && (ei(this, ni, !0), !this.shadowRoot)) {
		this.attachShadow(this.constructor.shadowRootOptions);
		let e = b(this.attributes);
		this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e), queueMicrotask(() => {
			let { style: e } = x(this.shadowRoot, ":host");
			e.setProperty("transition", "display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in");
		});
	}
}, si = /* @__PURE__ */ new WeakSet(), ci = function() {
	var e;
	(e = Qr(this, ii)) == null || e.setAttribute("aria-expanded", "true"), this.dispatchEvent(new Event("open", {
		composed: !0,
		bubbles: !0
	})), this.addEventListener("transitionend", () => this.focus(), { once: !0 });
}, li = /* @__PURE__ */ new WeakSet(), ui = function() {
	var e;
	(e = Qr(this, ii)) == null || e.setAttribute("aria-expanded", "false"), this.dispatchEvent(new Event("close", {
		composed: !0,
		bubbles: !0
	}));
}, di = /* @__PURE__ */ new WeakSet(), fi = function(e) {
	ei(this, ii, e.relatedTarget), Pe(this, e.relatedTarget) || (this.open = !this.open);
}, pi = /* @__PURE__ */ new WeakSet(), mi = function(e) {
	var t;
	Pe(this, e.relatedTarget) || ((t = Qr(this, ri)) == null || t.focus(), Qr(this, ii) && Qr(this, ii) !== e.relatedTarget && this.open && (this.open = !1));
}, hi = /* @__PURE__ */ new WeakSet(), gi = function(e) {
	var t, n, r, i, a;
	let { key: o, ctrlKey: s, altKey: c, metaKey: l } = e;
	s || c || l || this.keysUsed.includes(o) && (e.preventDefault(), e.stopPropagation(), o === "Tab" ? (e.shiftKey ? (n = (t = this.previousElementSibling)?.focus) == null || n.call(t) : (i = (r = this.nextElementSibling)?.focus) == null || i.call(r), this.blur()) : o === "Escape" && ((a = Qr(this, ri)) == null || a.focus(), this.open = !1));
}, bi.shadowRootOptions = { mode: "open" }, bi.getTemplateHTML = _i, bi.getSlotTemplateHTML = vi, v.customElements.get("media-chrome-dialog") || v.customElements.define("media-chrome-dialog", bi);
var xi = bi, Si = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, U = (e, t, n) => (Si(e, t, "read from private field"), n ? n.call(e) : t.get(e)), W = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ci = (e, t, n, r) => (Si(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), G = (e, t, n) => (Si(e, t, "access private method"), n), wi, Ti, Ei, Di, K, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi;
function Ji(e) {
	return `
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `;
}
function Yi(e) {
	return "";
}
var Xi = class extends v.HTMLElement {
	constructor() {
		if (super(), W(this, Mi), W(this, Pi), W(this, Ii), W(this, Ri), W(this, Bi), W(this, Hi), W(this, Wi), W(this, Ki), W(this, wi, void 0), W(this, Ti, void 0), W(this, Ei, void 0), W(this, Di, void 0), W(this, K, {}), W(this, Oi, []), W(this, ki, () => {
			if (this.range.matches(":focus-visible")) {
				let { style: e } = x(this.shadowRoot, ":host");
				e.setProperty("--_focus-visible-box-shadow", "var(--_focus-box-shadow)");
			}
		}), W(this, Ai, () => {
			let { style: e } = x(this.shadowRoot, ":host");
			e.removeProperty("--_focus-visible-box-shadow");
		}), W(this, ji, () => {
			let e = this.shadowRoot.querySelector("#segments-clipping");
			e && e.parentNode.append(e);
		}), !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes), t = this.constructor.getTemplateHTML(e);
			this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(t) : this.shadowRoot.innerHTML = t;
		}
		this.container = this.shadowRoot.querySelector("#container"), Ci(this, Ei, this.shadowRoot.querySelector("#startpoint")), Ci(this, Di, this.shadowRoot.querySelector("#endpoint")), this.range = this.shadowRoot.querySelector("#range"), this.appearance = this.shadowRoot.querySelector("#appearance");
	}
	static get observedAttributes() {
		return [
			"disabled",
			"aria-disabled",
			o.MEDIA_CONTROLLER
		];
	}
	attributeChangedCallback(e, t, n) {
		var r, i, a, s;
		e === o.MEDIA_CONTROLLER ? (t && ((i = (r = U(this, wi))?.unassociateElement) == null || i.call(r, this), Ci(this, wi, null)), n && this.isConnected && (Ci(this, wi, this.getRootNode()?.getElementById(n)), (s = (a = U(this, wi))?.associateElement) == null || s.call(a, this))) : (e === "disabled" || e === "aria-disabled" && t !== n) && (n == null ? (this.range.removeAttribute(e), G(this, Pi, Fi).call(this)) : (this.range.setAttribute(e, n), G(this, Ii, Li).call(this)));
	}
	connectedCallback() {
		var e, t;
		let { style: n } = x(this.shadowRoot, ":host");
		n.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`), U(this, K).pointer = x(this.shadowRoot, "#pointer"), U(this, K).progress = x(this.shadowRoot, "#progress"), U(this, K).thumb = x(this.shadowRoot, "#thumb, ::slotted([slot=\"thumb\"])"), U(this, K).activeSegment = x(this.shadowRoot, "#segments-clipping rect:nth-child(0)");
		let r = this.getAttribute(o.MEDIA_CONTROLLER);
		r && (Ci(this, wi, this.getRootNode()?.getElementById(r)), (t = (e = U(this, wi))?.associateElement) == null || t.call(e, this)), this.updateBar(), this.shadowRoot.addEventListener("focusin", U(this, ki)), this.shadowRoot.addEventListener("focusout", U(this, Ai)), G(this, Pi, Fi).call(this), De(this.container, U(this, ji));
	}
	disconnectedCallback() {
		var e, t;
		G(this, Ii, Li).call(this), (t = (e = U(this, wi))?.unassociateElement) == null || t.call(e, this), Ci(this, wi, null), this.shadowRoot.removeEventListener("focusin", U(this, ki)), this.shadowRoot.removeEventListener("focusout", U(this, Ai)), Oe(this.container, U(this, ji));
	}
	updatePointerBar(e) {
		var t;
		(t = U(this, K).pointer) == null || t.style.setProperty("width", `${this.getPointerRatio(e) * 100}%`);
	}
	updateBar() {
		var e, t;
		let n = this.range.valueAsNumber * 100;
		(e = U(this, K).progress) == null || e.style.setProperty("width", `${n}%`), (t = U(this, K).thumb) == null || t.style.setProperty("left", `${n}%`);
	}
	updateSegments(e) {
		let t = this.shadowRoot.querySelector("#segments-clipping");
		if (t.textContent = "", this.container.classList.toggle("segments", !!e?.length), !e?.length) return;
		let n = [.../* @__PURE__ */ new Set([
			+this.range.min,
			...e.flatMap((e) => [e.start, e.end]),
			+this.range.max
		])];
		Ci(this, Oi, [...n]);
		let r = n.pop();
		for (let [e, i] of n.entries()) {
			let [a, o] = [e === 0, e === n.length - 1], s = a ? "calc(var(--segments-gap) / -1)" : `${i * 100}%`, c = `calc(${((o ? r : n[e + 1]) - i) * 100}%${a || o ? "" : " - var(--segments-gap)"})`, l = y.createElementNS("http://www.w3.org/2000/svg", "rect"), u = Ve(this.shadowRoot, `#segments-clipping rect:nth-child(${e + 1})`);
			u.style.setProperty("x", s), u.style.setProperty("width", c), t.append(l);
		}
	}
	getPointerRatio(e) {
		return ze(e.clientX, e.clientY, U(this, Ei).getBoundingClientRect(), U(this, Di).getBoundingClientRect());
	}
	get dragging() {
		return this.hasAttribute("dragging");
	}
	handleEvent(e) {
		switch (e.type) {
			case "pointermove":
				G(this, Ki, qi).call(this, e);
				break;
			case "input":
				this.updateBar();
				break;
			case "pointerenter":
				G(this, Bi, Vi).call(this, e);
				break;
			case "pointerdown":
				G(this, Ri, zi).call(this, e);
				break;
			case "pointerup":
				G(this, Hi, Ui).call(this);
				break;
			case "pointerleave": G(this, Wi, Gi).call(this);
		}
	}
	get keysUsed() {
		return [
			"ArrowUp",
			"ArrowRight",
			"ArrowDown",
			"ArrowLeft"
		];
	}
};
wi = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakSet(), Ni = function(e) {
	let t = U(this, K).activeSegment;
	if (!t) return;
	let n = this.getPointerRatio(e), r = `#segments-clipping rect:nth-child(${U(this, Oi).findIndex((e, t, r) => {
		let i = r[t + 1];
		return i != null && n >= e && n <= i;
	}) + 1})`;
	(t.selectorText != r || !t.style.transform) && (t.selectorText = r, t.style.setProperty("transform", "var(--media-range-segment-hover-transform, scaleY(2))"));
}, Pi = /* @__PURE__ */ new WeakSet(), Fi = function() {
	this.hasAttribute("disabled") || !this.isConnected || (this.addEventListener("input", this), this.addEventListener("pointerdown", this), this.addEventListener("pointerenter", this));
}, Ii = /* @__PURE__ */ new WeakSet(), Li = function() {
	var e, t;
	this.removeEventListener("input", this), this.removeEventListener("pointerdown", this), this.removeEventListener("pointerenter", this), this.removeEventListener("pointerleave", this), (e = v.window) == null || e.removeEventListener("pointerup", this), (t = v.window) == null || t.removeEventListener("pointermove", this);
}, Ri = /* @__PURE__ */ new WeakSet(), zi = function(e) {
	var t;
	Ci(this, Ti, e.composedPath().includes(this.range)), (t = v.window) == null || t.addEventListener("pointerup", this, { once: !0 });
}, Bi = /* @__PURE__ */ new WeakSet(), Vi = function(e) {
	var t;
	e.pointerType !== "mouse" && G(this, Ri, zi).call(this, e), this.addEventListener("pointerleave", this, { once: !0 }), (t = v.window) == null || t.addEventListener("pointermove", this);
}, Hi = /* @__PURE__ */ new WeakSet(), Ui = function() {
	var e;
	(e = v.window) == null || e.removeEventListener("pointerup", this), this.toggleAttribute("dragging", !1), this.range.disabled = this.hasAttribute("disabled");
}, Wi = /* @__PURE__ */ new WeakSet(), Gi = function() {
	var e, t;
	this.removeEventListener("pointerleave", this), (e = v.window) == null || e.removeEventListener("pointermove", this), this.toggleAttribute("dragging", !1), this.range.disabled = this.hasAttribute("disabled"), (t = U(this, K).activeSegment) == null || t.style.removeProperty("transform");
}, Ki = /* @__PURE__ */ new WeakSet(), qi = function(e) {
	(e.pointerType !== "pen" || e.buttons !== 0) && (this.toggleAttribute("dragging", e.buttons === 1 || e.pointerType !== "mouse"), this.updatePointerBar(e), G(this, Mi, Ni).call(this, e), this.dragging && (e.pointerType !== "mouse" || !U(this, Ti)) && (this.range.disabled = !0, this.range.valueAsNumber = this.getPointerRatio(e), this.range.dispatchEvent(new Event("input", {
		bubbles: !0,
		composed: !0
	}))));
}, Xi.shadowRootOptions = { mode: "open" }, Xi.getTemplateHTML = Ji, Xi.getContainerTemplateHTML = Yi, v.customElements.get("media-chrome-range") || v.customElements.define("media-chrome-range", Xi);
var Zi = Xi, Qi = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, $i = (e, t, n) => (Qi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ea = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ta = (e, t, n, r) => (Qi(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), na;
function ra(e) {
	return "\n    <style>\n      :host {\n        \n        box-sizing: border-box;\n        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        --media-loading-indicator-icon-height: 44px;\n      }\n\n      ::slotted(media-time-range),\n      ::slotted(media-volume-range) {\n        min-height: 100%;\n      }\n\n      ::slotted(media-time-range),\n      ::slotted(media-clip-selector) {\n        flex-grow: 1;\n      }\n\n      ::slotted([role=\"menu\"]) {\n        position: absolute;\n      }\n    </style>\n\n    <slot></slot>\n  ";
}
var ia = class extends v.HTMLElement {
	constructor() {
		if (super(), ea(this, na, void 0), !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes);
			this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
		}
	}
	static get observedAttributes() {
		return [o.MEDIA_CONTROLLER];
	}
	attributeChangedCallback(e, t, n) {
		var r, i, a, s;
		e === o.MEDIA_CONTROLLER && (t && ((i = (r = $i(this, na))?.unassociateElement) == null || i.call(r, this), ta(this, na, null)), n && this.isConnected && (ta(this, na, this.getRootNode()?.getElementById(n)), (s = (a = $i(this, na))?.associateElement) == null || s.call(a, this)));
	}
	connectedCallback() {
		var e, t;
		let n = this.getAttribute(o.MEDIA_CONTROLLER);
		n && (ta(this, na, this.getRootNode()?.getElementById(n)), (t = (e = $i(this, na))?.associateElement) == null || t.call(e, this));
	}
	disconnectedCallback() {
		var e, t;
		(t = (e = $i(this, na))?.unassociateElement) == null || t.call(e, this), ta(this, na, null);
	}
};
na = /* @__PURE__ */ new WeakMap(), ia.shadowRootOptions = { mode: "open" }, ia.getTemplateHTML = ra, v.customElements.get("media-control-bar") || v.customElements.define("media-control-bar", ia);
var aa = ia, oa = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, sa = (e, t, n) => (oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ca = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, la = (e, t, n, r) => (oa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ua;
function da(e, t = {}) {
	return `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e, t)}
  `;
}
function fa(e, t) {
	return "\n    <slot></slot>\n  ";
}
var pa = class extends v.HTMLElement {
	constructor() {
		if (super(), ca(this, ua, void 0), !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes);
			this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
		}
	}
	static get observedAttributes() {
		return [o.MEDIA_CONTROLLER];
	}
	attributeChangedCallback(e, t, n) {
		var r, i, a, s;
		e === o.MEDIA_CONTROLLER && (t && ((i = (r = sa(this, ua))?.unassociateElement) == null || i.call(r, this), la(this, ua, null)), n && this.isConnected && (la(this, ua, this.getRootNode()?.getElementById(n)), (s = (a = sa(this, ua))?.associateElement) == null || s.call(a, this)));
	}
	connectedCallback() {
		var e, t;
		let { style: n } = x(this.shadowRoot, ":host");
		n.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
		let r = this.getAttribute(o.MEDIA_CONTROLLER);
		r && (la(this, ua, this.getRootNode()?.getElementById(r)), (t = (e = sa(this, ua))?.associateElement) == null || t.call(e, this));
	}
	disconnectedCallback() {
		var e, t;
		(t = (e = sa(this, ua))?.unassociateElement) == null || t.call(e, this), la(this, ua, null);
	}
};
ua = /* @__PURE__ */ new WeakMap(), pa.shadowRootOptions = { mode: "open" }, pa.getTemplateHTML = da, pa.getSlotTemplateHTML = fa, v.customElements.get("media-text-display") || v.customElements.define("media-text-display", pa);
var ma = pa, ha = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, ga = (e, t, n) => (ha(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _a = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, va = (e, t, n, r) => (ha(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ya;
function ba(e, t) {
	return `
    <slot>${_(t.mediaDuration)}</slot>
  `;
}
var xa = class extends pa {
	constructor() {
		super(), _a(this, ya, void 0), va(this, ya, this.shadowRoot.querySelector("slot")), ga(this, ya).textContent = _(this.mediaDuration ?? 0);
	}
	static get observedAttributes() {
		return [...super.observedAttributes, l.MEDIA_DURATION];
	}
	attributeChangedCallback(e, t, n) {
		e === l.MEDIA_DURATION && (ga(this, ya).textContent = _(+n)), super.attributeChangedCallback(e, t, n);
	}
	get mediaDuration() {
		return S(this, l.MEDIA_DURATION);
	}
	set mediaDuration(e) {
		C(this, l.MEDIA_DURATION, e);
	}
};
ya = /* @__PURE__ */ new WeakMap(), xa.getSlotTemplateHTML = ba, v.customElements.get("media-duration-display") || v.customElements.define("media-duration-display", xa);
var Sa = xa, Ca = {
	2: t("Network Error"),
	3: t("Decode Error"),
	4: t("Source Not Supported"),
	5: t("Encryption Error")
}, wa = {
	2: t("A network error caused the media download to fail."),
	3: t("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),
	4: t("An unsupported error occurred. The server or network failed, or your browser does not support this format."),
	5: t("The media is encrypted and there are no keys to decrypt it.")
}, Ta = (e) => e.code === 1 ? null : {
	title: Ca[e.code] ?? `Error ${e.code}`,
	message: wa[e.code] ?? e.message
}, Ea = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, Da = (e, t, n) => (Ea(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Oa = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ka = (e, t, n, r) => (Ea(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Aa;
function ja(e) {
	return `
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${Na({
		code: +e.mediaerrorcode,
		message: e.mediaerrormessage
	})}
    </slot>
  `;
}
function Ma(e) {
	return e.code && Ta(e) !== null;
}
function Na(e) {
	let { title: t, message: n } = Ta(e) ?? {}, r = "";
	return t && (r += `<slot name="error-${e.code}-title"><h3>${t}</h3></slot>`), n && (r += `<slot name="error-${e.code}-message"><p>${n}</p></slot>`), r;
}
var Pa = [l.MEDIA_ERROR_CODE, l.MEDIA_ERROR_MESSAGE], Fa = class extends bi {
	constructor() {
		super(...arguments), Oa(this, Aa, null);
	}
	static get observedAttributes() {
		return [...super.observedAttributes, ...Pa];
	}
	formatErrorMessage(e) {
		return this.constructor.formatErrorMessage(e);
	}
	attributeChangedCallback(e, t, n) {
		if (super.attributeChangedCallback(e, t, n), !Pa.includes(e)) return;
		let r = this.mediaError ?? {
			code: this.mediaErrorCode,
			message: this.mediaErrorMessage
		};
		if (this.open = Ma(r), this.open && (this.shadowRoot.querySelector("slot").name = `error-${this.mediaErrorCode}`, this.shadowRoot.querySelector("#content").innerHTML = this.formatErrorMessage(r), !this.hasAttribute("aria-label"))) {
			let { title: e } = Ta(r);
			e && this.setAttribute("aria-label", e);
		}
	}
	get mediaError() {
		return Da(this, Aa);
	}
	set mediaError(e) {
		ka(this, Aa, e);
	}
	get mediaErrorCode() {
		return S(this, "mediaerrorcode");
	}
	set mediaErrorCode(e) {
		C(this, "mediaerrorcode", e);
	}
	get mediaErrorMessage() {
		return E(this, "mediaerrormessage");
	}
	set mediaErrorMessage(e) {
		D(this, "mediaerrormessage", e);
	}
};
Aa = /* @__PURE__ */ new WeakMap(), Fa.getSlotTemplateHTML = ja, Fa.formatErrorMessage = Na, v.customElements.get("media-error-dialog") || v.customElements.define("media-error-dialog", Fa);
var Ia = Fa, La = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, Ra = (e, t, n) => (La(e, t, "read from private field"), n ? n.call(e) : t.get(e)), za = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ba, Va;
function Ha(e) {
	return `
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${Ua()}
    </slot>
  `;
}
function Ua() {
	return `
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[
		{
			keys: ["Space", "k"],
			description: "Toggle Playback"
		},
		{
			keys: ["m"],
			description: "Toggle mute"
		},
		{
			keys: ["f"],
			description: "Toggle fullscreen"
		},
		{
			keys: ["c"],
			description: "Toggle captions or subtitles, if available"
		},
		{
			keys: ["p"],
			description: "Toggle Picture in Picture"
		},
		{
			keys: ["←", "j"],
			description: "Seek back 10s"
		},
		{
			keys: ["→", "l"],
			description: "Seek forward 10s"
		},
		{
			keys: ["↑"],
			description: "Turn volume up"
		},
		{
			keys: ["↓"],
			description: "Turn volume down"
		},
		{
			keys: ["< (SHIFT+,)"],
			description: "Decrease playback rate"
		},
		{
			keys: ["> (SHIFT+.)"],
			description: "Increase playback rate"
		}
	].map(({ keys: e, description: t }) => `
      <tr>
        <td>
          <div class="key-combo">${e.map((e, t) => t > 0 ? `<span class="key-separator">or</span><span class="key">${e}</span>` : `<span class="key">${e}</span>`).join("")}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `).join("")}</table>
  `;
}
var Wa = class extends bi {
	constructor() {
		super(...arguments), za(this, Ba, (e) => {
			if (!this.open) return;
			let t = this.shadowRoot?.querySelector("#content");
			if (!t) return;
			let n = e.composedPath(), r = n[0] === this || n.includes(this), i = n.includes(t);
			r && !i && (this.open = !1);
		}), za(this, Va, (e) => {
			if (!this.open) return;
			let t = e.shiftKey && (e.key === "/" || e.key === "?");
			(e.key === "Escape" || t) && !e.ctrlKey && !e.altKey && !e.metaKey && (this.open = !1, e.preventDefault(), e.stopPropagation());
		});
	}
	connectedCallback() {
		super.connectedCallback(), this.open && (this.addEventListener("click", Ra(this, Ba)), document.addEventListener("keydown", Ra(this, Va)));
	}
	disconnectedCallback() {
		this.removeEventListener("click", Ra(this, Ba)), document.removeEventListener("keydown", Ra(this, Va));
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), e === "open" && (this.open ? (this.addEventListener("click", Ra(this, Ba)), document.addEventListener("keydown", Ra(this, Va))) : (this.removeEventListener("click", Ra(this, Ba)), document.removeEventListener("keydown", Ra(this, Va))));
	}
};
Ba = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Wa.getSlotTemplateHTML = Ha, v.customElements.get("media-keyboard-shortcuts-dialog") || v.customElements.define("media-keyboard-shortcuts-dialog", Wa);
var Ga = Wa, Ka = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, qa = (e, t, n) => (Ka(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ja = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ya = (e, t, n, r) => (Ka(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Xa, Za = "<svg aria-hidden=\"true\" viewBox=\"0 0 26 24\">\n  <path d=\"M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z\"/>\n</svg>", Qa = "<svg aria-hidden=\"true\" viewBox=\"0 0 26 24\">\n  <path d=\"M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z\"/>\n</svg>";
function $a(e) {
	return `
    <style>
      :host([${l.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${l.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Za}</slot>
      <slot name="exit">${Qa}</slot>
    </slot>
  `;
}
function eo() {
	return `
    <slot name="tooltip-enter">${t("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${t("Exit fullscreen mode")}</slot>
  `;
}
var to = (e) => {
	let n = e.mediaIsFullscreen ? t("exit fullscreen mode") : t("enter fullscreen mode");
	e.setAttribute("aria-label", n);
}, no = class extends H {
	constructor() {
		super(...arguments), Ja(this, Xa, null);
	}
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_IS_FULLSCREEN,
			l.MEDIA_FULLSCREEN_UNAVAILABLE
		];
	}
	connectedCallback() {
		super.connectedCallback(), to(this);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), e === l.MEDIA_IS_FULLSCREEN && to(this);
	}
	get mediaFullscreenUnavailable() {
		return E(this, l.MEDIA_FULLSCREEN_UNAVAILABLE);
	}
	set mediaFullscreenUnavailable(e) {
		D(this, l.MEDIA_FULLSCREEN_UNAVAILABLE, e);
	}
	get mediaIsFullscreen() {
		return w(this, l.MEDIA_IS_FULLSCREEN);
	}
	set mediaIsFullscreen(e) {
		T(this, l.MEDIA_IS_FULLSCREEN, e);
	}
	handleClick(e) {
		Ya(this, Xa, e);
		let t = qa(this, Xa) instanceof PointerEvent, n = this.mediaIsFullscreen ? new v.CustomEvent(a.MEDIA_EXIT_FULLSCREEN_REQUEST, {
			composed: !0,
			bubbles: !0
		}) : new v.CustomEvent(a.MEDIA_ENTER_FULLSCREEN_REQUEST, {
			composed: !0,
			bubbles: !0,
			detail: t
		});
		this.dispatchEvent(n);
	}
};
Xa = /* @__PURE__ */ new WeakMap(), no.getSlotTemplateHTML = $a, no.getTooltipContentHTML = eo, v.customElements.get("media-fullscreen-button") || v.customElements.define("media-fullscreen-button", no);
var ro = no, { MEDIA_TIME_IS_LIVE: io, MEDIA_PAUSED: ao } = l, { MEDIA_SEEK_TO_LIVE_REQUEST: oo, MEDIA_PLAY_REQUEST: so } = a, co = "<svg viewBox=\"0 0 6 12\" aria-hidden=\"true\"><circle cx=\"3\" cy=\"6\" r=\"2\"></circle></svg>";
function lo(e) {
	return `
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${io}]:not([${ao}])) slot[name=indicator] > *,
      :host([${io}]:not([${ao}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${io}]:not([${ao}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${co}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${t("live")}</slot>
  `;
}
var uo = (e) => {
	let n = e.mediaPaused || !e.mediaTimeIsLive, r = t(n ? "seek to live" : "playing live");
	e.setAttribute("aria-label", r);
	let i = e.shadowRoot?.querySelector("slot[name=\"text\"]");
	i && (i.textContent = t("live")), n ? e.removeAttribute("aria-disabled") : e.setAttribute("aria-disabled", "true");
}, fo = class extends H {
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			io,
			ao
		];
	}
	connectedCallback() {
		super.connectedCallback(), uo(this);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), uo(this);
	}
	get mediaPaused() {
		return w(this, l.MEDIA_PAUSED);
	}
	set mediaPaused(e) {
		T(this, l.MEDIA_PAUSED, e);
	}
	get mediaTimeIsLive() {
		return w(this, l.MEDIA_TIME_IS_LIVE);
	}
	set mediaTimeIsLive(e) {
		T(this, l.MEDIA_TIME_IS_LIVE, e);
	}
	handleClick() {
		!this.mediaPaused && this.mediaTimeIsLive || (this.dispatchEvent(new v.CustomEvent(oo, {
			composed: !0,
			bubbles: !0
		})), this.hasAttribute(ao) && this.dispatchEvent(new v.CustomEvent(so, {
			composed: !0,
			bubbles: !0
		})));
	}
};
fo.getSlotTemplateHTML = lo, v.customElements.get("media-live-button") || v.customElements.define("media-live-button", fo);
var po = fo, mo = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, ho = (e, t, n) => (mo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), go = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _o = (e, t, n, r) => (mo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), vo, yo, bo = {
	LOADING_DELAY: "loadingdelay",
	NO_AUTOHIDE: "noautohide"
}, xo = 500, So = "\n<svg aria-hidden=\"true\" viewBox=\"0 0 100 100\">\n  <path d=\"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50\">\n    <animateTransform\n       attributeName=\"transform\"\n       attributeType=\"XML\"\n       type=\"rotate\"\n       dur=\"1s\"\n       from=\"0 50 50\"\n       to=\"360 50 50\"\n       repeatCount=\"indefinite\" />\n  </path>\n</svg>\n";
function Co(e) {
	return `
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${xo}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${l.MEDIA_LOADING}]:not([${l.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${l.MEDIA_LOADING}]:not([${l.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${l.MEDIA_LOADING}]:not([${l.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${So}</slot>
    <div id="status" role="status" aria-live="polite">${t("media loading")}</div>
  `;
}
var wo = class extends v.HTMLElement {
	constructor() {
		if (super(), go(this, vo, void 0), go(this, yo, xo), !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes);
			this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
		}
	}
	static get observedAttributes() {
		return [
			o.MEDIA_CONTROLLER,
			l.MEDIA_PAUSED,
			l.MEDIA_LOADING,
			bo.LOADING_DELAY
		];
	}
	attributeChangedCallback(e, t, n) {
		var r, i, a, s;
		e === bo.LOADING_DELAY && t !== n ? this.loadingDelay = Number(n) : e === o.MEDIA_CONTROLLER && (t && ((i = (r = ho(this, vo))?.unassociateElement) == null || i.call(r, this), _o(this, vo, null)), n && this.isConnected && (_o(this, vo, this.getRootNode()?.getElementById(n)), (s = (a = ho(this, vo))?.associateElement) == null || s.call(a, this)));
	}
	connectedCallback() {
		var e, t;
		let n = this.getAttribute(o.MEDIA_CONTROLLER);
		n && (_o(this, vo, this.getRootNode()?.getElementById(n)), (t = (e = ho(this, vo))?.associateElement) == null || t.call(e, this));
	}
	disconnectedCallback() {
		var e, t;
		(t = (e = ho(this, vo))?.unassociateElement) == null || t.call(e, this), _o(this, vo, null);
	}
	get loadingDelay() {
		return ho(this, yo);
	}
	set loadingDelay(e) {
		_o(this, yo, e);
		let { style: t } = x(this.shadowRoot, ":host");
		t.setProperty("--_loading-indicator-delay", `var(--media-loading-indicator-transition-delay, ${e}ms)`);
	}
	get mediaPaused() {
		return w(this, l.MEDIA_PAUSED);
	}
	set mediaPaused(e) {
		T(this, l.MEDIA_PAUSED, e);
	}
	get mediaLoading() {
		return w(this, l.MEDIA_LOADING);
	}
	set mediaLoading(e) {
		T(this, l.MEDIA_LOADING, e);
	}
	get mediaController() {
		return E(this, o.MEDIA_CONTROLLER);
	}
	set mediaController(e) {
		D(this, o.MEDIA_CONTROLLER, e);
	}
	get noAutohide() {
		return w(this, bo.NO_AUTOHIDE);
	}
	set noAutohide(e) {
		T(this, bo.NO_AUTOHIDE, e);
	}
};
vo = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), wo.shadowRootOptions = { mode: "open" }, wo.getTemplateHTML = Co, v.customElements.get("media-loading-indicator") || v.customElements.define("media-loading-indicator", wo);
var To = wo, Eo = "<svg aria-hidden=\"true\" viewBox=\"0 0 24 24\">\n  <path d=\"M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z\"/>\n</svg>", Do = "<svg aria-hidden=\"true\" viewBox=\"0 0 24 24\">\n  <path d=\"M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z\"/>\n</svg>", Oo = "<svg aria-hidden=\"true\" viewBox=\"0 0 24 24\">\n  <path d=\"M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z\"/>\n</svg>";
function ko(e) {
	return `
    <style>
      :host(:not([${l.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${l.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${l.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${l.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${l.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${l.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${l.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Eo}</slot>
      <slot name="low">${Do}</slot>
      <slot name="medium">${Do}</slot>
      <slot name="high">${Oo}</slot>
    </slot>
  `;
}
function Ao() {
	return `
    <slot name="tooltip-mute">${t("Mute")}</slot>
    <slot name="tooltip-unmute">${t("Unmute")}</slot>
  `;
}
var jo = (e) => {
	let n = e.mediaVolumeLevel === "off" ? t("unmute") : t("mute");
	e.setAttribute("aria-label", n);
}, Mo = class extends H {
	static get observedAttributes() {
		return [...super.observedAttributes, l.MEDIA_VOLUME_LEVEL];
	}
	connectedCallback() {
		super.connectedCallback(), jo(this);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), e === l.MEDIA_VOLUME_LEVEL && jo(this);
	}
	get mediaVolumeLevel() {
		return E(this, l.MEDIA_VOLUME_LEVEL);
	}
	set mediaVolumeLevel(e) {
		D(this, l.MEDIA_VOLUME_LEVEL, e);
	}
	handleClick() {
		let e = this.mediaVolumeLevel === "off" ? a.MEDIA_UNMUTE_REQUEST : a.MEDIA_MUTE_REQUEST;
		this.dispatchEvent(new v.CustomEvent(e, {
			composed: !0,
			bubbles: !0
		}));
	}
};
Mo.getSlotTemplateHTML = ko, Mo.getTooltipContentHTML = Ao, v.customElements.get("media-mute-button") || v.customElements.define("media-mute-button", Mo);
var No = Mo, Po = "<svg aria-hidden=\"true\" viewBox=\"0 0 28 24\">\n  <path d=\"M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z\"/>\n</svg>";
function Fo(e) {
	return `
    <style>
      :host([${l.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${l.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Po}</slot>
      <slot name="exit">${Po}</slot>
    </slot>
  `;
}
function Io() {
	return `
    <slot name="tooltip-enter">${t("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${t("Exit picture in picture mode")}</slot>
  `;
}
var Lo = (e) => {
	let n = e.mediaIsPip ? t("exit picture in picture mode") : t("enter picture in picture mode");
	e.setAttribute("aria-label", n);
}, Ro = class extends H {
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_IS_PIP,
			l.MEDIA_PIP_UNAVAILABLE
		];
	}
	connectedCallback() {
		super.connectedCallback(), Lo(this);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), e === l.MEDIA_IS_PIP && Lo(this);
	}
	get mediaPipUnavailable() {
		return E(this, l.MEDIA_PIP_UNAVAILABLE);
	}
	set mediaPipUnavailable(e) {
		D(this, l.MEDIA_PIP_UNAVAILABLE, e);
	}
	get mediaIsPip() {
		return w(this, l.MEDIA_IS_PIP);
	}
	set mediaIsPip(e) {
		T(this, l.MEDIA_IS_PIP, e);
	}
	handleClick() {
		let e = this.mediaIsPip ? a.MEDIA_EXIT_PIP_REQUEST : a.MEDIA_ENTER_PIP_REQUEST;
		this.dispatchEvent(new v.CustomEvent(e, {
			composed: !0,
			bubbles: !0
		}));
	}
};
Ro.getSlotTemplateHTML = Fo, Ro.getTooltipContentHTML = Io, v.customElements.get("media-pip-button") || v.customElements.define("media-pip-button", Ro);
var zo = Ro, Bo = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, Vo = (e, t, n) => (Bo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ho = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Uo, Wo = { RATES: "rates" }, Go = [
	1,
	1.2,
	1.5,
	1.7,
	2
];
function Ko(e) {
	return Math.round(e * 100) / 100;
}
function qo(e) {
	return `
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate ? Ko(+e.mediaplaybackrate) : 1}x</slot>
  `;
}
function Jo() {
	return t("Playback rate");
}
var Yo = class extends H {
	constructor() {
		super(), Ho(this, Uo, new Pt(this, Wo.RATES, { defaultValue: Go })), this.container = this.shadowRoot.querySelector("slot[name=\"icon\"]"), this.container.innerHTML = `${Ko(this.mediaPlaybackRate ?? 1)}x`;
	}
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_PLAYBACK_RATE,
			Wo.RATES
		];
	}
	attributeChangedCallback(e, n, r) {
		if (super.attributeChangedCallback(e, n, r), e === Wo.RATES && (Vo(this, Uo).value = r), e === l.MEDIA_PLAYBACK_RATE) {
			let e = r ? +r : NaN, n = Ko(Number.isNaN(e) ? 1 : e);
			this.container.innerHTML = `${n}x`, this.setAttribute("aria-label", t("Playback rate {playbackRate}", { playbackRate: n }));
		}
	}
	get rates() {
		return Vo(this, Uo);
	}
	set rates(e) {
		e ? Array.isArray(e) ? Vo(this, Uo).value = e.join(" ") : typeof e == "string" && (Vo(this, Uo).value = e) : Vo(this, Uo).value = "";
	}
	get mediaPlaybackRate() {
		return S(this, l.MEDIA_PLAYBACK_RATE, 1);
	}
	set mediaPlaybackRate(e) {
		C(this, l.MEDIA_PLAYBACK_RATE, e);
	}
	handleClick() {
		let e = Array.from(Vo(this, Uo).values(), (e) => +e).sort((e, t) => e - t), t = e.find((e) => e > this.mediaPlaybackRate) ?? e[0] ?? 1, n = new v.CustomEvent(a.MEDIA_PLAYBACK_RATE_REQUEST, {
			composed: !0,
			bubbles: !0,
			detail: t
		});
		this.dispatchEvent(n);
	}
};
Uo = /* @__PURE__ */ new WeakMap(), Yo.getSlotTemplateHTML = qo, Yo.getTooltipContentHTML = Jo, v.customElements.get("media-playback-rate-button") || v.customElements.define("media-playback-rate-button", Yo);
var Xo = Yo, Zo = "<svg aria-hidden=\"true\" viewBox=\"0 0 24 24\">\n  <path d=\"m6 21 15-9L6 3v18Z\"/>\n</svg>", Qo = "<svg aria-hidden=\"true\" viewBox=\"0 0 24 24\">\n  <path d=\"M6 20h4V4H6v16Zm8-16v16h4V4h-4Z\"/>\n</svg>";
function $o(e) {
	return `
    <style>
      :host([${l.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${l.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${l.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${l.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Zo}</slot>
      <slot name="pause">${Qo}</slot>
    </slot>
  `;
}
function es() {
	return `
    <slot name="tooltip-play">${t("Play")}</slot>
    <slot name="tooltip-pause">${t("Pause")}</slot>
  `;
}
var ts = (e) => {
	let n = e.mediaPaused ? t("play") : t("pause");
	e.setAttribute("aria-label", n);
}, ns = class extends H {
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_PAUSED,
			l.MEDIA_ENDED
		];
	}
	connectedCallback() {
		super.connectedCallback(), ts(this);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), (e === l.MEDIA_PAUSED || e === l.MEDIA_LANG) && ts(this);
	}
	get mediaPaused() {
		return w(this, l.MEDIA_PAUSED);
	}
	set mediaPaused(e) {
		T(this, l.MEDIA_PAUSED, e);
	}
	handleClick() {
		let e = this.mediaPaused ? a.MEDIA_PLAY_REQUEST : a.MEDIA_PAUSE_REQUEST;
		this.dispatchEvent(new v.CustomEvent(e, {
			composed: !0,
			bubbles: !0
		}));
	}
};
ns.getSlotTemplateHTML = $o, ns.getTooltipContentHTML = es, v.customElements.get("media-play-button") || v.customElements.define("media-play-button", ns);
var rs = ns, is = {
	PLACEHOLDER_SRC: "placeholdersrc",
	SRC: "src"
};
function as(e) {
	return "\n    <style>\n      :host {\n        pointer-events: none;\n        display: var(--media-poster-image-display, inline-block);\n        box-sizing: border-box;\n      }\n\n      img {\n        max-width: 100%;\n        max-height: 100%;\n        min-width: 100%;\n        min-height: 100%;\n        background-repeat: no-repeat;\n        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));\n        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));\n        object-fit: var(--media-object-fit, contain);\n        object-position: var(--media-object-position, center);\n      }\n    </style>\n\n    <img part=\"poster img\" aria-hidden=\"true\" id=\"image\"/>\n  ";
}
var os = (e) => {
	e.style.removeProperty("background-image");
}, ss = (e, t) => {
	e.style["background-image"] = `url('${t}')`;
}, cs = class extends v.HTMLElement {
	static get observedAttributes() {
		return [is.PLACEHOLDER_SRC, is.SRC];
	}
	constructor() {
		if (super(), !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes);
			this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
		}
		this.image = this.shadowRoot.querySelector("#image");
	}
	attributeChangedCallback(e, t, n) {
		e === is.SRC && (n == null ? this.image.removeAttribute(is.SRC) : this.image.setAttribute(is.SRC, n)), e === is.PLACEHOLDER_SRC && (n == null ? os(this.image) : ss(this.image, n));
	}
	get placeholderSrc() {
		return E(this, is.PLACEHOLDER_SRC);
	}
	set placeholderSrc(e) {
		D(this, is.SRC, e);
	}
	get src() {
		return E(this, is.SRC);
	}
	set src(e) {
		D(this, is.SRC, e);
	}
};
cs.shadowRootOptions = { mode: "open" }, cs.getTemplateHTML = as, v.customElements.get("media-poster-image") || v.customElements.define("media-poster-image", cs);
var ls = cs, us = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, ds = (e, t, n) => (us(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fs = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ps = (e, t, n, r) => (us(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ms, hs = class extends pa {
	constructor() {
		super(), fs(this, ms, void 0), ps(this, ms, this.shadowRoot.querySelector("slot"));
	}
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_PREVIEW_CHAPTER,
			l.MEDIA_LANG
		];
	}
	attributeChangedCallback(e, n, r) {
		if (super.attributeChangedCallback(e, n, r), (e === l.MEDIA_PREVIEW_CHAPTER || e === l.MEDIA_LANG) && r !== n && r != null) if (ds(this, ms).textContent = r, r !== "") {
			let e = t("chapter: {chapterName}", { chapterName: r });
			this.setAttribute("aria-valuetext", e);
		} else this.removeAttribute("aria-valuetext");
	}
	get mediaPreviewChapter() {
		return E(this, l.MEDIA_PREVIEW_CHAPTER);
	}
	set mediaPreviewChapter(e) {
		D(this, l.MEDIA_PREVIEW_CHAPTER, e);
	}
};
ms = /* @__PURE__ */ new WeakMap(), v.customElements.get("media-preview-chapter-display") || v.customElements.define("media-preview-chapter-display", hs);
var gs = hs, _s = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, vs = (e, t, n) => (_s(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ys = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, bs = (e, t, n, r) => (_s(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), xs;
function Ss(e) {
	return "\n    <style>\n      :host {\n        box-sizing: border-box;\n        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));\n        overflow: hidden;\n      }\n\n      img {\n        display: none;\n        position: relative;\n      }\n    </style>\n    <img crossorigin loading=\"eager\" decoding=\"async\">\n  ";
}
var Cs = class extends v.HTMLElement {
	constructor() {
		if (super(), ys(this, xs, void 0), !this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			let e = b(this.attributes);
			this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
		}
	}
	static get observedAttributes() {
		return [
			o.MEDIA_CONTROLLER,
			l.MEDIA_PREVIEW_IMAGE,
			l.MEDIA_PREVIEW_COORDS
		];
	}
	connectedCallback() {
		var e, t;
		let n = this.getAttribute(o.MEDIA_CONTROLLER);
		n && (bs(this, xs, this.getRootNode()?.getElementById(n)), (t = (e = vs(this, xs))?.associateElement) == null || t.call(e, this));
	}
	disconnectedCallback() {
		var e, t;
		(t = (e = vs(this, xs))?.unassociateElement) == null || t.call(e, this), bs(this, xs, null);
	}
	attributeChangedCallback(e, t, n) {
		var r, i, a, s;
		[l.MEDIA_PREVIEW_IMAGE, l.MEDIA_PREVIEW_COORDS].includes(e) && this.update(), e === o.MEDIA_CONTROLLER && (t && ((i = (r = vs(this, xs))?.unassociateElement) == null || i.call(r, this), bs(this, xs, null)), n && this.isConnected && (bs(this, xs, this.getRootNode()?.getElementById(n)), (s = (a = vs(this, xs))?.associateElement) == null || s.call(a, this)));
	}
	get mediaPreviewImage() {
		return E(this, l.MEDIA_PREVIEW_IMAGE);
	}
	set mediaPreviewImage(e) {
		D(this, l.MEDIA_PREVIEW_IMAGE, e);
	}
	get mediaPreviewCoords() {
		let e = this.getAttribute(l.MEDIA_PREVIEW_COORDS);
		if (e) return e.split(/\s+/).map((e) => +e);
	}
	set mediaPreviewCoords(e) {
		if (!e) {
			this.removeAttribute(l.MEDIA_PREVIEW_COORDS);
			return;
		}
		this.setAttribute(l.MEDIA_PREVIEW_COORDS, e.join(" "));
	}
	update() {
		let e = this.mediaPreviewCoords, t = this.mediaPreviewImage;
		if (!(e && t)) return;
		let [n, r, i, a] = e, o = t.split("#")[0], s = getComputedStyle(this), { maxWidth: c, maxHeight: l, minWidth: u, minHeight: d } = s, f = s.getPropertyValue("--media-preview-thumbnail-object-fit").trim() || "contain", p, m;
		if (f === "fill") {
			let e = parseInt(c) / i, t = parseInt(l) / a, n = parseInt(u) / i, r = parseInt(d) / a;
			p = e < 1 ? e : Math.max(e, n), m = t < 1 ? t : Math.max(t, r);
		} else {
			let e = Math.min(parseInt(c) / i, parseInt(l) / a), t = Math.max(parseInt(u) / i, parseInt(d) / a), n = e < 1 ? e : t > 1 ? t : 1;
			p = n, m = n;
		}
		let { style: ee } = x(this.shadowRoot, ":host"), te = x(this.shadowRoot, "img").style, h = this.shadowRoot.querySelector("img"), g = Math.min(p, m) < 1 ? "min" : "max";
		ee.setProperty(`${g}-width`, "initial", "important"), ee.setProperty(`${g}-height`, "initial", "important"), ee.width = `${i * p}px`, ee.height = `${a * m}px`;
		let ne = () => {
			te.width = `${this.imgWidth * p}px`, te.height = `${this.imgHeight * m}px`, te.display = "block";
		};
		h.src !== o && (h.onload = () => {
			this.imgWidth = h.naturalWidth, this.imgHeight = h.naturalHeight, ne(), h.onload = null;
		}, h.src = o, ne()), ne(), te.transform = `translate(-${n * p}px, -${r * m}px)`;
	}
};
xs = /* @__PURE__ */ new WeakMap(), Cs.shadowRootOptions = { mode: "open" }, Cs.getTemplateHTML = Ss, v.customElements.get("media-preview-thumbnail") || v.customElements.define("media-preview-thumbnail", Cs);
var ws = Cs, Ts = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, Es = (e, t, n) => (Ts(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ds = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Os = (e, t, n, r) => (Ts(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ks, As = class extends pa {
	constructor() {
		super(), Ds(this, ks, void 0), Os(this, ks, this.shadowRoot.querySelector("slot")), Es(this, ks).textContent = _(0);
	}
	static get observedAttributes() {
		return [...super.observedAttributes, l.MEDIA_PREVIEW_TIME];
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), e === l.MEDIA_PREVIEW_TIME && n != null && (Es(this, ks).textContent = _(parseFloat(n)));
	}
	get mediaPreviewTime() {
		return S(this, l.MEDIA_PREVIEW_TIME);
	}
	set mediaPreviewTime(e) {
		C(this, l.MEDIA_PREVIEW_TIME, e);
	}
};
ks = /* @__PURE__ */ new WeakMap(), v.customElements.get("media-preview-time-display") || v.customElements.define("media-preview-time-display", As);
var js = As, Ms = { SEEK_OFFSET: "seekoffset" }, Ns = 30, Ps = (e) => `
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;
function Fs(e, t) {
	return `
    <slot name="icon">${Ps(t.seekOffset)}</slot>
  `;
}
var Is = (e, n) => {
	e.setAttribute("aria-label", t("seek back {seekOffset} seconds", { seekOffset: n }));
};
function Ls() {
	return t("Seek backward");
}
var Rs = 0, zs = class extends H {
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_CURRENT_TIME,
			Ms.SEEK_OFFSET
		];
	}
	connectedCallback() {
		super.connectedCallback(), this.seekOffset = S(this, Ms.SEEK_OFFSET, Ns);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), Is(this, this.seekOffset), e === Ms.SEEK_OFFSET && (this.seekOffset = S(this, Ms.SEEK_OFFSET, Ns));
	}
	get seekOffset() {
		return S(this, Ms.SEEK_OFFSET, Ns);
	}
	set seekOffset(e) {
		C(this, Ms.SEEK_OFFSET, e), this.setAttribute("aria-label", t("seek back {seekOffset} seconds", { seekOffset: this.seekOffset })), je(Ne(this, "icon"), this.seekOffset);
	}
	get mediaCurrentTime() {
		return S(this, l.MEDIA_CURRENT_TIME, Rs);
	}
	set mediaCurrentTime(e) {
		C(this, l.MEDIA_CURRENT_TIME, e);
	}
	handleClick() {
		let e = Math.max(this.mediaCurrentTime - this.seekOffset, 0), t = new v.CustomEvent(a.MEDIA_SEEK_REQUEST, {
			composed: !0,
			bubbles: !0,
			detail: e
		});
		this.dispatchEvent(t);
	}
};
zs.getSlotTemplateHTML = Fs, zs.getTooltipContentHTML = Ls, v.customElements.get("media-seek-backward-button") || v.customElements.define("media-seek-backward-button", zs);
var Bs = zs, Vs = { SEEK_OFFSET: "seekoffset" }, Hs = 30, Us = (e) => `
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;
function Ws(e, t) {
	return `
    <slot name="icon">${Us(t.seekOffset)}</slot>
  `;
}
var Gs = (e, n) => {
	e.setAttribute("aria-label", t("seek forward {seekOffset} seconds", { seekOffset: n }));
};
function Ks() {
	return t("Seek forward");
}
var qs = 0, Js = class extends H {
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_CURRENT_TIME,
			Vs.SEEK_OFFSET
		];
	}
	connectedCallback() {
		super.connectedCallback(), this.seekOffset = S(this, Vs.SEEK_OFFSET, Hs);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), Gs(this, this.seekOffset), e === Vs.SEEK_OFFSET && (this.seekOffset = S(this, Vs.SEEK_OFFSET, Hs));
	}
	get seekOffset() {
		return S(this, Vs.SEEK_OFFSET, Hs);
	}
	set seekOffset(e) {
		C(this, Vs.SEEK_OFFSET, e), this.setAttribute("aria-label", t("seek forward {seekOffset} seconds", { seekOffset: this.seekOffset })), je(Ne(this, "icon"), this.seekOffset);
	}
	get mediaCurrentTime() {
		return S(this, l.MEDIA_CURRENT_TIME, qs);
	}
	set mediaCurrentTime(e) {
		C(this, l.MEDIA_CURRENT_TIME, e);
	}
	handleClick() {
		let e = this.mediaCurrentTime + this.seekOffset, t = new v.CustomEvent(a.MEDIA_SEEK_REQUEST, {
			composed: !0,
			bubbles: !0,
			detail: e
		});
		this.dispatchEvent(t);
	}
};
Js.getSlotTemplateHTML = Ws, Js.getTooltipContentHTML = Ks, v.customElements.get("media-seek-forward-button") || v.customElements.define("media-seek-forward-button", Js);
var Ys = Js, Xs = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, q = (e, t, n) => (Xs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Zs = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Qs = (e, t, n, r) => (Xs(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), $s = (e, t, n) => (Xs(e, t, "access private method"), n), ec, tc, nc, rc, ic, ac, oc, sc, cc, lc, uc, dc = {
	REMAINING: "remaining",
	SHOW_DURATION: "showduration",
	NO_TOGGLE: "notoggle"
}, fc = [
	...Object.values(dc),
	l.MEDIA_CURRENT_TIME,
	l.MEDIA_DURATION,
	l.MEDIA_SEEKABLE
], pc = ["Enter", " "], mc = "&nbsp;/&nbsp;", hc = (e, { timesSep: t = mc } = {}) => {
	let n = e.mediaCurrentTime ?? 0, [, r] = e.mediaSeekable ?? [], i = 0;
	Number.isFinite(e.mediaDuration) ? i = e.mediaDuration : Number.isFinite(r) && (i = r);
	let a = e.remaining ? _(0 - (i - n)) : _(n);
	return e.showDuration ? `${a}${t}${_(i)}` : a;
}, gc = (e) => {
	let n = e.mediaCurrentTime, [, r] = e.mediaSeekable ?? [], i = null;
	if (Number.isFinite(e.mediaDuration) ? i = e.mediaDuration : Number.isFinite(r) && (i = r), n == null || i === null) {
		e.setAttribute("aria-description", t("video not loaded, unknown time."));
		return;
	}
	let a = e.remaining ? pe(0 - (i - n)) : pe(n);
	if (!e.showDuration) {
		e.setAttribute("aria-description", a);
		return;
	}
	let o = pe(i), s = t("{currentTime} of {totalTime}", {
		currentTime: a,
		totalTime: o
	});
	e.setAttribute("aria-description", s);
};
function _c(e, t) {
	return `
    <slot>${hc(t)}</slot>
  `;
}
var vc = (e) => {
	e.setAttribute("aria-label", t("playback time"));
}, yc = class extends pa {
	constructor() {
		super(), Zs(this, rc), Zs(this, ac), Zs(this, sc), Zs(this, lc), Zs(this, ec, void 0), Zs(this, tc, null), Zs(this, nc, (e) => {
			let { metaKey: t, altKey: n, key: r } = e;
			if (t || n || !pc.includes(r)) {
				this.removeEventListener("keyup", q(this, tc));
				return;
			}
			this.addEventListener("keyup", q(this, tc));
		}), Qs(this, ec, this.shadowRoot.querySelector("slot")), q(this, ec).innerHTML = `${hc(this)}`;
	}
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			...fc,
			"disabled"
		];
	}
	connectedCallback() {
		let { style: e } = x(this.shadowRoot, ":host(:hover:not([notoggle]))");
		e.setProperty("cursor", "var(--media-cursor, pointer)"), e.setProperty("background", "var(--media-control-hover-background, rgba(50 50 70 / .7))"), this.setAttribute("aria-label", t("playback time")), $s(this, sc, cc).call(this), super.connectedCallback();
	}
	toggleTimeDisplay() {
		this.noToggle || (this.hasAttribute("remaining") ? this.removeAttribute("remaining") : this.setAttribute("remaining", ""));
	}
	disconnectedCallback() {
		this.disable(), $s(this, ac, oc).call(this), super.disconnectedCallback();
	}
	attributeChangedCallback(e, t, n) {
		vc(this), fc.includes(e) ? this.update() : e === "disabled" && n !== t ? n == null ? $s(this, sc, cc).call(this) : $s(this, lc, uc).call(this) : e === dc.NO_TOGGLE && n !== t && (this.noToggle ? $s(this, lc, uc).call(this) : $s(this, sc, cc).call(this)), super.attributeChangedCallback(e, t, n);
	}
	enable() {
		this.noToggle || (this.tabIndex = 0);
	}
	disable() {
		this.tabIndex = -1;
	}
	get remaining() {
		return w(this, dc.REMAINING);
	}
	set remaining(e) {
		T(this, dc.REMAINING, e);
	}
	get showDuration() {
		return w(this, dc.SHOW_DURATION);
	}
	set showDuration(e) {
		T(this, dc.SHOW_DURATION, e);
	}
	get noToggle() {
		return w(this, dc.NO_TOGGLE);
	}
	set noToggle(e) {
		T(this, dc.NO_TOGGLE, e);
	}
	get mediaDuration() {
		return S(this, l.MEDIA_DURATION);
	}
	set mediaDuration(e) {
		C(this, l.MEDIA_DURATION, e);
	}
	get mediaCurrentTime() {
		return S(this, l.MEDIA_CURRENT_TIME);
	}
	set mediaCurrentTime(e) {
		C(this, l.MEDIA_CURRENT_TIME, e);
	}
	get mediaSeekable() {
		let e = this.getAttribute(l.MEDIA_SEEKABLE);
		if (e) return e.split(":").map((e) => +e);
	}
	set mediaSeekable(e) {
		if (e == null) {
			this.removeAttribute(l.MEDIA_SEEKABLE);
			return;
		}
		this.setAttribute(l.MEDIA_SEEKABLE, e.join(":"));
	}
	update() {
		let e = hc(this);
		gc(this), e !== q(this, ec).innerHTML && (q(this, ec).innerHTML = e);
	}
};
ec = /* @__PURE__ */ new WeakMap(), tc = /* @__PURE__ */ new WeakMap(), nc = /* @__PURE__ */ new WeakMap(), rc = /* @__PURE__ */ new WeakSet(), ic = function() {
	q(this, tc) || (Qs(this, tc, (e) => {
		let { key: t } = e;
		if (!pc.includes(t)) {
			this.removeEventListener("keyup", q(this, tc));
			return;
		}
		this.toggleTimeDisplay();
	}), this.addEventListener("keydown", q(this, nc)), this.addEventListener("click", this.toggleTimeDisplay));
}, ac = /* @__PURE__ */ new WeakSet(), oc = function() {
	q(this, tc) && (this.removeEventListener("keyup", q(this, tc)), this.removeEventListener("keydown", q(this, nc)), this.removeEventListener("click", this.toggleTimeDisplay), Qs(this, tc, null));
}, sc = /* @__PURE__ */ new WeakSet(), cc = function() {
	!this.noToggle && !this.hasAttribute("disabled") && (this.setAttribute("role", "button"), this.enable(), $s(this, rc, ic).call(this));
}, lc = /* @__PURE__ */ new WeakSet(), uc = function() {
	this.removeAttribute("role"), this.disable(), $s(this, ac, oc).call(this);
}, yc.getSlotTemplateHTML = _c, v.customElements.get("media-time-display") || v.customElements.define("media-time-display", yc);
var bc = yc, xc = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, J = (e, t, n) => (xc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Sc = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, r) => (xc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Cc = (e, t, n, r) => ({
	set _(r) {
		Y(e, t, r, n);
	},
	get _() {
		return J(e, t, r);
	}
}), wc, Tc, Ec, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc = class {
	constructor(e, t, n) {
		Sc(this, wc, void 0), Sc(this, Tc, void 0), Sc(this, Ec, void 0), Sc(this, Dc, void 0), Sc(this, Oc, void 0), Sc(this, kc, void 0), Sc(this, Ac, void 0), Sc(this, jc, void 0), Sc(this, Mc, 0), Sc(this, Nc, (e = performance.now()) => {
			Y(this, Mc, requestAnimationFrame(J(this, Nc))), Y(this, Dc, performance.now() - J(this, Ec));
			let t = 1e3 / this.fps;
			if (J(this, Dc) > t) {
				Y(this, Ec, e - J(this, Dc) % t);
				let n = 1e3 / ((e - J(this, Tc)) / ++Cc(this, Oc)._), r = (e - J(this, kc)) / 1e3 / this.duration, i = J(this, Ac) + r * this.playbackRate;
				i - J(this, wc).valueAsNumber > 0 ? Y(this, jc, this.playbackRate / this.duration / n) : (Y(this, jc, .995 * J(this, jc)), i = J(this, wc).valueAsNumber + J(this, jc)), this.callback(i);
			}
		}), Y(this, wc, e), this.callback = t, this.fps = n;
	}
	start() {
		J(this, Mc) === 0 && (Y(this, Ec, performance.now()), Y(this, Tc, J(this, Ec)), Y(this, Oc, 0), J(this, Nc).call(this));
	}
	stop() {
		J(this, Mc) !== 0 && (cancelAnimationFrame(J(this, Mc)), Y(this, Mc, 0));
	}
	update({ start: e, duration: t, playbackRate: n }) {
		let r = e - J(this, wc).valueAsNumber, i = Math.abs(t - this.duration);
		(r > 0 || r < -.03 || i >= .5) && this.callback(e), Y(this, Ac, e), Y(this, kc, performance.now()), this.duration = t, this.playbackRate = n;
	}
};
wc = /* @__PURE__ */ new WeakMap(), Tc = /* @__PURE__ */ new WeakMap(), Ec = /* @__PURE__ */ new WeakMap(), Dc = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakMap(), kc = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap(), jc = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap(), Nc = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/media-chrome/dist/media-time-range.js
var Fc = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, X = (e, t, n) => (Fc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Z = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Q = (e, t, n, r) => (Fc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), $ = (e, t, n) => (Fc(e, t, "access private method"), n), Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol, sl, cl = (e) => {
	let n = e.range, r = pe(+dl(e)), i = pe(+e.mediaSeekableEnd), a = r && i ? t("{currentTime} of {totalTime}", {
		currentTime: r,
		totalTime: i
	}) : t("video not loaded, unknown time.");
	n.setAttribute("aria-valuetext", a);
};
function ll(e) {
	return `
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${l.MEDIA_PREVIEW_IMAGE}], [${l.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${l.MEDIA_PREVIEW_IMAGE}], [${l.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${l.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${l.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${l.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${l.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${l.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${l.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${l.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${l.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${l.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${l.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${l.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${l.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${ws.shadowRootOptions.mode}">
            ${ws.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `;
}
var ul = (e, t = e.mediaCurrentTime) => {
	let n = Number.isFinite(e.mediaSeekableStart) ? e.mediaSeekableStart : 0, r = Number.isFinite(e.mediaDuration) ? e.mediaDuration : e.mediaSeekableEnd;
	if (Number.isNaN(r)) return 0;
	let i = (t - n) / (r - n);
	return Math.max(0, Math.min(i, 1));
}, dl = (e, t = e.range.valueAsNumber) => {
	let n = Number.isFinite(e.mediaSeekableStart) ? e.mediaSeekableStart : 0, r = Number.isFinite(e.mediaDuration) ? e.mediaDuration : e.mediaSeekableEnd;
	return Number.isNaN(r) ? 0 : t * (r - n) + n;
}, fl = class extends Xi {
	constructor() {
		super(), Z(this, qc), Z(this, Xc), Z(this, Qc), Z(this, el), Z(this, nl), Z(this, il), Z(this, ol), Z(this, Ic, null), Z(this, Lc, void 0), Z(this, Rc, void 0), Z(this, zc, void 0), Z(this, Bc, void 0), Z(this, Vc, void 0), Z(this, Hc, void 0), Z(this, Uc, void 0), Z(this, Wc, void 0), Z(this, Gc, void 0), Z(this, Kc, () => {
			$(this, qc, Jc).call(this) ? X(this, Lc).start() : X(this, Lc).stop();
		}), Z(this, Yc, (e) => {
			this.dragging || (ce(e) && (this.range.valueAsNumber = e), X(this, Gc) || this.updateBar());
		}), this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin", "<div id=\"buffered\" part=\"buffered\"></div>"), Q(this, Rc, this.shadowRoot.querySelectorAll("[part~=\"box\"]")), Q(this, Bc, this.shadowRoot.querySelector("[part~=\"preview-box\"]")), Q(this, Vc, this.shadowRoot.querySelector("[part~=\"current-box\"]"));
		let e = getComputedStyle(this);
		Q(this, Hc, parseInt(e.getPropertyValue("--media-box-padding-left"))), Q(this, Uc, parseInt(e.getPropertyValue("--media-box-padding-right"))), Q(this, Lc, new Pc(this.range, X(this, Yc), 60));
	}
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_PAUSED,
			l.MEDIA_DURATION,
			l.MEDIA_SEEKABLE,
			l.MEDIA_CURRENT_TIME,
			l.MEDIA_PREVIEW_IMAGE,
			l.MEDIA_PREVIEW_TIME,
			l.MEDIA_PREVIEW_CHAPTER,
			l.MEDIA_BUFFERED,
			l.MEDIA_PLAYBACK_RATE,
			l.MEDIA_LOADING,
			l.MEDIA_ENDED
		];
	}
	connectedCallback() {
		var e;
		super.connectedCallback(), this.range.setAttribute("aria-label", t("seek")), X(this, Kc).call(this), Q(this, Ic, this.getRootNode()), (e = X(this, Ic)) == null || e.addEventListener("transitionstart", this);
	}
	disconnectedCallback() {
		var e;
		super.disconnectedCallback(), X(this, Lc).stop(), (e = X(this, Ic)) == null || e.removeEventListener("transitionstart", this), Q(this, Ic, null);
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), t != n && (e === l.MEDIA_CURRENT_TIME || e === l.MEDIA_PAUSED || e === l.MEDIA_ENDED || e === l.MEDIA_LOADING || e === l.MEDIA_DURATION || e === l.MEDIA_SEEKABLE ? (X(this, Lc).update({
			start: ul(this),
			duration: this.mediaSeekableEnd - this.mediaSeekableStart,
			playbackRate: this.mediaPlaybackRate
		}), X(this, Kc).call(this), cl(this)) : e === l.MEDIA_BUFFERED && this.updateBufferedBar(), (e === l.MEDIA_DURATION || e === l.MEDIA_SEEKABLE) && (this.mediaChaptersCues = X(this, Wc), this.updateBar()));
	}
	get mediaChaptersCues() {
		return X(this, Wc);
	}
	set mediaChaptersCues(e) {
		Q(this, Wc, e), this.updateSegments(X(this, Wc)?.map((e) => ({
			start: ul(this, e.startTime),
			end: ul(this, e.endTime)
		})));
	}
	get mediaPaused() {
		return w(this, l.MEDIA_PAUSED);
	}
	set mediaPaused(e) {
		T(this, l.MEDIA_PAUSED, e);
	}
	get mediaLoading() {
		return w(this, l.MEDIA_LOADING);
	}
	set mediaLoading(e) {
		T(this, l.MEDIA_LOADING, e);
	}
	get mediaDuration() {
		return S(this, l.MEDIA_DURATION);
	}
	set mediaDuration(e) {
		C(this, l.MEDIA_DURATION, e);
	}
	get mediaCurrentTime() {
		return S(this, l.MEDIA_CURRENT_TIME);
	}
	set mediaCurrentTime(e) {
		C(this, l.MEDIA_CURRENT_TIME, e);
	}
	get mediaPlaybackRate() {
		return S(this, l.MEDIA_PLAYBACK_RATE, 1);
	}
	set mediaPlaybackRate(e) {
		C(this, l.MEDIA_PLAYBACK_RATE, e);
	}
	get mediaBuffered() {
		let e = this.getAttribute(l.MEDIA_BUFFERED);
		return e ? e.split(" ").map((e) => e.split(":").map((e) => +e)) : [];
	}
	set mediaBuffered(e) {
		if (!e) {
			this.removeAttribute(l.MEDIA_BUFFERED);
			return;
		}
		let t = e.map((e) => e.join(":")).join(" ");
		this.setAttribute(l.MEDIA_BUFFERED, t);
	}
	get mediaSeekable() {
		let e = this.getAttribute(l.MEDIA_SEEKABLE);
		if (e) return e.split(":").map((e) => +e);
	}
	set mediaSeekable(e) {
		if (e == null) {
			this.removeAttribute(l.MEDIA_SEEKABLE);
			return;
		}
		this.setAttribute(l.MEDIA_SEEKABLE, e.join(":"));
	}
	get mediaSeekableEnd() {
		let [, e = this.mediaDuration] = this.mediaSeekable ?? [];
		return e;
	}
	get mediaSeekableStart() {
		let [e = 0] = this.mediaSeekable ?? [];
		return e;
	}
	get mediaPreviewImage() {
		return E(this, l.MEDIA_PREVIEW_IMAGE);
	}
	set mediaPreviewImage(e) {
		D(this, l.MEDIA_PREVIEW_IMAGE, e);
	}
	get mediaPreviewTime() {
		return S(this, l.MEDIA_PREVIEW_TIME);
	}
	set mediaPreviewTime(e) {
		C(this, l.MEDIA_PREVIEW_TIME, e);
	}
	get mediaEnded() {
		return w(this, l.MEDIA_ENDED);
	}
	set mediaEnded(e) {
		T(this, l.MEDIA_ENDED, e);
	}
	updateBar() {
		super.updateBar(), this.updateBufferedBar(), this.updateCurrentBox();
	}
	updateBufferedBar() {
		let e = this.mediaBuffered;
		if (!e.length) return;
		let t;
		if (this.mediaEnded) t = 1;
		else {
			let n = this.mediaCurrentTime, [, r = this.mediaSeekableStart] = e.find(([e, t]) => e <= n && n <= t) ?? [];
			t = ul(this, r);
		}
		let { style: n } = x(this.shadowRoot, "#buffered");
		n.setProperty("width", `${t * 100}%`);
	}
	updateCurrentBox() {
		if (!this.shadowRoot.querySelector("slot[name=\"current\"]").assignedElements().length) return;
		let e = x(this.shadowRoot, "#current-rail"), t = x(this.shadowRoot, "[part~=\"current-box\"]"), n = $(this, Xc, Zc).call(this, X(this, Vc)), r = $(this, Qc, $c).call(this, n, this.range.valueAsNumber), i = $(this, el, tl).call(this, n, this.range.valueAsNumber);
		e.style.transform = `translateX(${r})`, e.style.setProperty("--_range-width", `${n.range.width}`), t.style.setProperty("--_box-shift", `${i}`), t.style.setProperty("--_box-width", `${n.box.width}px`), t.style.setProperty("visibility", "initial");
	}
	handleEvent(e) {
		switch (super.handleEvent(e), e.type) {
			case "input":
				$(this, ol, sl).call(this);
				break;
			case "pointermove":
				$(this, nl, rl).call(this, e);
				break;
			case "pointerup":
				X(this, Gc) && Q(this, Gc, !1);
				break;
			case "pointerdown":
				Q(this, Gc, !0);
				break;
			case "pointerleave":
				$(this, il, al).call(this, null);
				break;
			case "transitionstart": Pe(e.target, this) && setTimeout(() => X(this, Kc).call(this), 0);
		}
	}
};
Ic = /* @__PURE__ */ new WeakMap(), Lc = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new WeakMap(), zc = /* @__PURE__ */ new WeakMap(), Bc = /* @__PURE__ */ new WeakMap(), Vc = /* @__PURE__ */ new WeakMap(), Hc = /* @__PURE__ */ new WeakMap(), Uc = /* @__PURE__ */ new WeakMap(), Wc = /* @__PURE__ */ new WeakMap(), Gc = /* @__PURE__ */ new WeakMap(), Kc = /* @__PURE__ */ new WeakMap(), qc = /* @__PURE__ */ new WeakSet(), Jc = function() {
	return this.isConnected && !this.mediaPaused && !this.mediaLoading && !this.mediaEnded && this.mediaSeekableEnd > 0 && Re(this);
}, Yc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakSet(), Zc = function(e) {
	let t = ((this.getAttribute("bounds") ? Fe(this, `#${this.getAttribute("bounds")}`) : this.parentElement) ?? this).getBoundingClientRect(), n = this.range.getBoundingClientRect(), r = e.offsetWidth;
	return {
		box: {
			width: r,
			min: -(n.left - t.left - r / 2),
			max: t.right - n.left - r / 2
		},
		bounds: t,
		range: n
	};
}, Qc = /* @__PURE__ */ new WeakSet(), $c = function(e, t) {
	let n = `${t * 100}%`, { width: r, min: i, max: a } = e.box;
	if (!r) return n;
	if (Number.isNaN(i) || (n = `max(${`calc(1 / var(--_range-width) * 100 * ${i}% + var(--media-box-padding-left))`}, ${n})`), !Number.isNaN(a)) {
		let e = `calc(1 / var(--_range-width) * 100 * ${a}% - var(--media-box-padding-right))`;
		n = `min(${n}, ${e})`;
	}
	return n;
}, el = /* @__PURE__ */ new WeakSet(), tl = function(e, t) {
	let { width: n, min: r, max: i } = e.box, a = t * e.range.width;
	if (a < r + X(this, Hc)) {
		let t = e.range.left - e.bounds.left - X(this, Hc);
		return `${a - n / 2 + t}px`;
	}
	if (a > i - X(this, Uc)) {
		let t = e.bounds.right - e.range.right - X(this, Uc);
		return `${a + n / 2 - t - e.range.width}px`;
	}
	return 0;
}, nl = /* @__PURE__ */ new WeakSet(), rl = function(e) {
	let t = [...X(this, Rc)].some((t) => e.composedPath().includes(t));
	if (!this.dragging && (t || !e.composedPath().includes(this))) {
		$(this, il, al).call(this, null);
		return;
	}
	let n = this.mediaSeekableEnd;
	if (!n) return;
	let r = x(this.shadowRoot, "#preview-rail"), i = x(this.shadowRoot, "[part~=\"preview-box\"]"), a = $(this, Xc, Zc).call(this, X(this, Bc)), o = (e.clientX - a.range.left) / a.range.width;
	o = Math.max(0, Math.min(1, o));
	let s = $(this, Qc, $c).call(this, a, o), c = $(this, el, tl).call(this, a, o);
	r.style.transform = `translateX(${s})`, r.style.setProperty("--_range-width", `${a.range.width}`), i.style.setProperty("--_box-shift", `${c}`), i.style.setProperty("--_box-width", `${a.box.width}px`);
	let l = Math.round(X(this, zc)) - Math.round(o * n);
	Math.abs(l) < 1 && o > .01 && o < .99 || (Q(this, zc, o * n), $(this, il, al).call(this, X(this, zc)));
}, il = /* @__PURE__ */ new WeakSet(), al = function(e) {
	this.dispatchEvent(new v.CustomEvent(a.MEDIA_PREVIEW_REQUEST, {
		composed: !0,
		bubbles: !0,
		detail: e
	}));
}, ol = /* @__PURE__ */ new WeakSet(), sl = function() {
	X(this, Lc).stop();
	let e = dl(this);
	this.dispatchEvent(new v.CustomEvent(a.MEDIA_SEEK_REQUEST, {
		composed: !0,
		bubbles: !0,
		detail: e
	}));
}, fl.shadowRootOptions = { mode: "open" }, fl.getContainerTemplateHTML = ll, v.customElements.get("media-time-range") || v.customElements.define("media-time-range", fl);
var pl = fl, ml = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, hl = (e, t, n) => (ml(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gl = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _l, vl = 1, yl = (e) => e.mediaMuted ? 0 : e.mediaVolume, bl = (e) => `${Math.round(e * 100)}%`, xl = class extends Xi {
	constructor() {
		super(...arguments), gl(this, _l, () => {
			let e = this.range.value, t = new v.CustomEvent(a.MEDIA_VOLUME_REQUEST, {
				composed: !0,
				bubbles: !0,
				detail: e
			});
			this.dispatchEvent(t);
		});
	}
	static get observedAttributes() {
		return [
			...super.observedAttributes,
			l.MEDIA_VOLUME,
			l.MEDIA_MUTED,
			l.MEDIA_VOLUME_UNAVAILABLE
		];
	}
	connectedCallback() {
		super.connectedCallback(), this.range.setAttribute("aria-label", t("volume")), this.range.addEventListener("input", hl(this, _l));
	}
	disconnectedCallback() {
		this.range.removeEventListener("input", hl(this, _l)), super.disconnectedCallback();
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), (e === l.MEDIA_VOLUME || e === l.MEDIA_MUTED) && (this.range.valueAsNumber = yl(this), this.range.setAttribute("aria-valuetext", bl(this.range.valueAsNumber)), this.updateBar());
	}
	get mediaVolume() {
		return S(this, l.MEDIA_VOLUME, vl);
	}
	set mediaVolume(e) {
		C(this, l.MEDIA_VOLUME, e);
	}
	get mediaMuted() {
		return w(this, l.MEDIA_MUTED);
	}
	set mediaMuted(e) {
		T(this, l.MEDIA_MUTED, e);
	}
	get mediaVolumeUnavailable() {
		return E(this, l.MEDIA_VOLUME_UNAVAILABLE);
	}
	set mediaVolumeUnavailable(e) {
		D(this, l.MEDIA_VOLUME_UNAVAILABLE, e);
	}
};
_l = /* @__PURE__ */ new WeakMap(), v.customElements.get("media-volume-range") || v.customElements.define("media-volume-range", xl);
var Sl = xl;
//#endregion
//#region node_modules/media-chrome/dist/media-loop-button.js
function Cl(e) {
	return `
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${l.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `;
}
function wl() {
	return t("Loop");
}
var Tl = class extends H {
	constructor() {
		super(...arguments), this.container = null;
	}
	static get observedAttributes() {
		return [...super.observedAttributes, l.MEDIA_LOOP];
	}
	connectedCallback() {
		super.connectedCallback(), this.container = this.shadowRoot?.querySelector("#icon") || null, this.container && (this.container.textContent = t("Loop"));
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), e === l.MEDIA_LOOP && this.container && this.setAttribute("aria-checked", this.mediaLoop ? "true" : "false");
	}
	get mediaLoop() {
		return w(this, l.MEDIA_LOOP);
	}
	set mediaLoop(e) {
		T(this, l.MEDIA_LOOP, e);
	}
	handleClick() {
		let e = !this.mediaLoop, t = new v.CustomEvent(a.MEDIA_LOOP_REQUEST, {
			composed: !0,
			bubbles: !0,
			detail: e
		});
		this.dispatchEvent(t);
	}
};
Tl.getSlotTemplateHTML = Cl, Tl.getTooltipContentHTML = wl, v.customElements.get("media-loop-button") || v.customElements.define("media-loop-button", Tl);
var El = Tl;
//#endregion
export { Pr as MediaAirplayButton, Ur as MediaCaptionsButton, Xr as MediaCastButton, Or as MediaChromeButton, xi as MediaChromeDialog, Zi as MediaChromeRange, wt as MediaContainer, aa as MediaControlBar, cr as MediaController, Sa as MediaDurationDisplay, Ia as MediaErrorDialog, ro as MediaFullscreenButton, Je as MediaGestureReceiver, Ga as MediaKeyboardShortcutsDialog, po as MediaLiveButton, To as MediaLoadingIndicator, El as MediaLoopButton, No as MediaMuteButton, zo as MediaPipButton, rs as MediaPlayButton, Xo as MediaPlaybackRateButton, ls as MediaPosterImage, gs as MediaPreviewChapterDisplay, ws as MediaPreviewThumbnail, js as MediaPreviewTimeDisplay, Bs as MediaSeekBackwardButton, Ys as MediaSeekForwardButton, ma as MediaTextDisplay, bc as MediaTimeDisplay, pl as MediaTimeRange, fr as MediaTooltip, Sl as MediaVolumeRange, i as constants, t, ue as timeUtils };
