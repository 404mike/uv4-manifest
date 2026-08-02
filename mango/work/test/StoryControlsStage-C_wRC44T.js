import { $ as e, A as t, B as n, C as r, Ct as i, Dt as a, G as o, H as s, I as c, J as l, K as u, P as d, Q as f, R as p, S as m, U as h, W as g, at as ee, ct as _, g as v, it as y, j as b, k as x, lt as S, mt as C, n as w, nt as T, rt as E, u as te, wt as ne, z as re } from "./client-CruOUf1V.js";
//#region src/lib/story/viewer/StoryControlsStage.svelte
var ie = n("<span class=\"story-shell__loading svelte-1wj95mh\"><span class=\"story-shell__spinner svelte-1wj95mh\"></span> Loading chapter...</span>"), ae = n("<button type=\"button\" class=\"story-shell__metadata-toggle svelte-1wj95mh\"> </button>"), oe = n("<p> </p> <!>", 1), se = n("<img loading=\"eager\" class=\"svelte-1wj95mh\"/>"), ce = n("<span class=\"story-shell__chapter-fallback svelte-1wj95mh\" aria-hidden=\"true\"></span>"), le = n("<button type=\"button\"><span class=\"story-shell__chapter-thumb svelte-1wj95mh\"><!></span> <span class=\"story-shell__chapter-number svelte-1wj95mh\"> </span> <span aria-hidden=\"true\"></span></button>"), ue = n("<div class=\"story-shell__error svelte-1wj95mh\" data-testid=\"story-controls-error\"> </div>"), de = n("<div data-testid=\"story-controls-stage\"><div class=\"story-shell__body svelte-1wj95mh\"><section class=\"story-shell__stage-wrap svelte-1wj95mh\"><div class=\"story-shell__stage-frame svelte-1wj95mh\"><!></div></section> <aside class=\"story-shell__sidebar svelte-1wj95mh\"><div class=\"story-shell__metadata svelte-1wj95mh\"><p class=\"story-shell__chapter-label svelte-1wj95mh\"><!></p> <h2 class=\"story-shell__title svelte-1wj95mh\"> </h2> <div class=\"story-shell__accent svelte-1wj95mh\" aria-hidden=\"true\"></div> <!></div> <div class=\"story-shell__playback svelte-1wj95mh\"><div class=\"story-shell__transport svelte-1wj95mh\"><button type=\"button\" class=\"story-shell__transport-btn svelte-1wj95mh\" aria-label=\"Previous chapter\">&#9664;</button> <button type=\"button\" data-testid=\"story-controls-play\"><!></button> <button type=\"button\" class=\"story-shell__transport-btn svelte-1wj95mh\" aria-label=\"Next chapter\">&#9654;</button></div> <div class=\"story-shell__timeline svelte-1wj95mh\"><div class=\"story-shell__timeline-track svelte-1wj95mh\" aria-hidden=\"true\"><div class=\"story-shell__timeline-fill svelte-1wj95mh\"></div> <div class=\"story-shell__timeline-thumb svelte-1wj95mh\"></div></div> <div class=\"story-shell__timeline-text svelte-1wj95mh\"> </div></div></div></aside></div> <nav class=\"story-shell__footer svelte-1wj95mh\" aria-label=\"Story chapters\" data-testid=\"story-controls-pagination\"></nav> <!></div>");
function D(n, h) {
	ne(h, !0);
	let D = w(h, "currentChapterIndex", 3, 0), fe = w(h, "totalChapters", 3, 0), O = w(h, "chapterThumbnails", 19, () => []), pe = w(h, "chapterDurationSec", 3, 0), me = w(h, "chapterElapsedSec", 3, 0), he = w(h, "chapterTitle", 3, ""), k = w(h, "chapterDescription", 3, ""), A = w(h, "disabled", 3, !1), j = w(h, "loading", 3, !1), ge = w(h, "error", 3, null), M = w(h, "playState", 3, "idle"), _e = w(h, "onplay", 3, void 0), ve = w(h, "onpause", 3, void 0);
	w(h, "onstop", 3, void 0);
	let ye = w(h, "onselectChapter", 3, void 0);
	w(h, "onzoomIn", 3, void 0), w(h, "onzoomOut", 3, void 0), w(h, "onfit", 3, void 0), w(h, "onrefresh", 3, void 0);
	let be = w(h, "onpreviousChapter", 3, void 0), xe = w(h, "onnextChapter", 3, void 0), N = w(h, "stage", 3, void 0), P = [
		"#d4b487",
		"#bb9a72",
		"#7f9f80",
		"#b5a089",
		"#d8be99",
		"#d2b48a",
		"#ccb188",
		"#d9c09a",
		"#bfa684",
		"#dac5a3",
		"#d0b896",
		"#cdb08a"
	], F = () => Math.max(0, fe()), I = () => {
		let e = F();
		return e === 0 ? 0 : Math.min(Math.max(D(), 0), e - 1);
	}, L = (e) => `${String(Math.floor(e / 60)).padStart(2, "0")}:${String(e % 60).padStart(2, "0")}`, R = C(() => Math.max(0, pe())), Se = C(() => Math.min(Math.max(0, me()), l(R))), Ce = C(() => l(R) > 0 ? l(Se) / l(R) * 100 : 0), we = () => {
		if (!(A() || j())) {
			if (M() === "playing") {
				ve()?.();
				return;
			}
			_e()?.();
		}
	}, Te = (e) => {
		if (A() || j()) return;
		let t = F();
		if (t === 0) return;
		let n = Math.min(Math.max(e, 0), t - 1);
		ye()?.({ index: n });
	}, Ee = (e) => e + 1, De = C(() => Array.from({ length: Math.max(0, fe()) }, (e, t) => t)), z = S(ee(/* @__PURE__ */ new Set())), Oe = (e) => {
		e && _(z, /* @__PURE__ */ new Set([...l(z), e]), !0);
	}, ke = (e) => !!e && !l(z).has(e ?? ""), B = S(null), V = S(!1), Ae = S(-1), je = () => k().trim().length > 96;
	e(() => {
		l(Ae) !== D() && (_(Ae, D()), _(V, !1));
	});
	let Me = !1;
	e(() => {
		let e = I(), t = l(B);
		if (!t) return;
		let n = t.children[e];
		if (!n) return;
		let r = t.scrollWidth - t.clientWidth;
		if (r <= 0) return;
		let i = t.getBoundingClientRect(), a = n.getBoundingClientRect(), o = a.left + a.width / 2 - (i.left + i.width / 2), s = Math.max(0, Math.min(t.scrollLeft + o, r)), c = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches, u = Me && !c ? "smooth" : "auto";
		Me = !0, typeof t.scrollTo == "function" ? t.scrollTo({
			left: s,
			behavior: u
		}) : t.scrollLeft = s;
	});
	var H = de();
	let Ne;
	var U = T(H), W = T(U), Pe = T(W), Fe = T(Pe), Ie = (e) => {
		var t = re(), n = E(t);
		d(n, N), p(e, t);
	};
	b(Fe, (e) => {
		N() && e(Ie);
	}), a(Pe), a(W);
	var Le = y(W, 2), G = T(Le), K = T(G), Re = T(K), ze = (e) => {
		var t = ie();
		p(e, t);
	}, Be = (e) => {
		var t = s();
		f((e, n) => c(t, `Chapter ${e ?? ""} of ${n ?? ""}`), [() => I() + 1, () => F()]), p(e, t);
	};
	b(Re, (e) => {
		j() ? e(ze) : e(Be, -1);
	}), a(K);
	var q = y(K, 2), Ve = T(q, !0);
	a(q);
	var He = y(q, 4), Ue = (e) => {
		var t = oe(), n = E(t);
		let i;
		var o = T(n, !0);
		a(n);
		var s = y(n, 2), u = (e) => {
			var t = ae(), n = T(t, !0);
			a(t), f(() => {
				v(t, "aria-expanded", l(V)), c(n, l(V) ? "Show less" : "Show more");
			}), g("click", t, () => _(V, !l(V))), p(e, t);
		}, d = C(() => je());
		b(s, (e) => {
			l(d) && e(u);
		}), f(() => {
			i = r(n, 1, "story-shell__description svelte-1wj95mh", null, i, { "story-shell__description--expanded": l(V) }), c(o, k());
		}), p(e, t);
	};
	b(He, (e) => {
		k() && e(Ue);
	}), a(G);
	var We = y(G, 2), J = T(We), Y = T(J), X = y(Y, 2);
	let Ge;
	var Ke = T(X), qe = (e) => {
		var t = s("❚❚");
		p(e, t);
	}, Je = (e) => {
		var t = s("▶");
		p(e, t);
	};
	b(Ke, (e) => {
		M() === "playing" ? e(qe) : e(Je, -1);
	}), a(X);
	var Ye = y(X, 2);
	a(J);
	var Xe = y(J, 2), Z = T(Xe), Ze = T(Z), Qe = y(Ze, 2);
	a(Z);
	var Q = y(Z, 2), $e = T(Q);
	a(Q), a(Xe), a(We), a(Le), a(U);
	var $ = y(U, 2);
	x($, 21, () => l(De), t, (e, t) => {
		var n = le();
		let i;
		var s = T(n), d = T(s), h = (e) => {
			var n = se();
			f((e) => {
				v(n, "src", O()[l(t)] ?? ""), v(n, "alt", e);
			}, [() => `Chapter ${Ee(l(t))} thumbnail`]), o("error", n, () => Oe(O()[l(t)])), u(n), p(e, n);
		}, ee = C(() => ke(O()[l(t)])), _ = (e) => {
			var n = ce();
			f(() => m(n, `background: linear-gradient(140deg, ${P[l(t) % P.length]}, #eadac4);`)), p(e, n);
		};
		b(d, (e) => {
			l(ee) ? e(h) : e(_, -1);
		}), a(s);
		var x = y(s, 2), S = T(x, !0);
		a(x);
		var w = y(x, 2);
		let E;
		a(n), f((e, a, o, s) => {
			i = r(n, 1, "story-shell__chapter svelte-1wj95mh", null, i, e), v(n, "aria-current", a), n.disabled = A() || j(), v(n, "data-testid", `story-controls-page-${l(t) + 1}`), c(S, o), E = r(w, 1, "story-shell__dot svelte-1wj95mh", null, E, s);
		}, [
			() => ({ "story-shell__chapter--active": l(t) === I() }),
			() => l(t) === I() ? "page" : void 0,
			() => Ee(l(t)),
			() => ({ "story-shell__dot--active": l(t) === I() })
		]), g("click", n, () => Te(l(t))), p(e, n);
	}), a($), te($, (e) => _(B, e), () => l(B));
	var et = y($, 2), tt = (e) => {
		var t = ue(), n = T(t, !0);
		a(t), f(() => c(n, ge())), p(e, t);
	};
	b(et, (e) => {
		ge() && e(tt);
	}), a(H), f((e, t) => {
		Ne = r(H, 1, "story-shell svelte-1wj95mh", null, Ne, { "story-shell--metadata-expanded": l(V) }), c(Ve, he()), Y.disabled = A() || j(), Ge = r(X, 1, "story-shell__play-btn svelte-1wj95mh", null, Ge, { "story-shell__play-btn--active": M() === "playing" }), X.disabled = A() || j(), v(X, "aria-label", M() === "playing" ? "Pause story" : "Play story"), Ye.disabled = A() || j(), m(Ze, `width: ${l(Ce)}%;`), m(Qe, `left: clamp(6px, ${l(Ce)}%, calc(100% - 6px));`), c($e, `${e ?? ""} / ${t ?? ""}`);
	}, [() => L(Math.floor(l(Se))), () => L(Math.floor(l(R)))]), g("click", Y, () => be()?.()), g("click", X, we), g("click", Ye, () => xe()?.()), p(n, H), i();
}
h(["click"]);
//#endregion
export { D as default };
