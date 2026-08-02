import { n as e } from "./rolldown-runtime-B0aSnxlc.js";
import { B as t, C as n, Ct as r, Dt as i, G as a, I as o, J as s, Q as c, R as l, S as u, V as d, X as f, Y as p, Z as ee, _t as m, bt as te, ct as h, d as g, g as _, gt as ne, it as v, j as y, k as b, n as x, nt as S, o as re, ot as C, q as w, rt as T, wt as ie, z as ae } from "./client-CruOUf1V.js";
import { n as oe, t as se } from "./rectangleLabelLayout-dH3PYO3T.js";
import "./index-client-B4rLUVh0.js";
//#region src/lib/story/annotationPlacement.ts
var E = .34, D = .01, O = (e, t, n) => Math.min(n, Math.max(t, e)), k = (e) => {
	let t = O(e.w, D, 1), n = O(e.h, D, 1);
	return {
		x: O(e.x, 0, 1 - t),
		y: O(e.y, 0, 1 - n),
		w: t,
		h: n
	};
}, A = Object.freeze(((e, t) => {
	let n = O(t, D, 1);
	return k({
		x: e.x - n / 2,
		y: e.y - n / 2,
		w: n,
		h: n
	});
})({
	x: .5,
	y: .5
}, E)), j = (e) => {
	if (!e || typeof e != "object") return !1;
	let t = e;
	if (!Number.isFinite(t.x) || !Number.isFinite(t.y) || !Number.isFinite(t.w) || !Number.isFinite(t.h)) return !1;
	let n = t.x, r = t.y, i = t.w, a = t.h;
	return n >= 0 && r >= 0 && i > 0 && a > 0;
}, M = (e) => ({
	x: e.x,
	y: e.y,
	w: e.w,
	h: e.h
}), N = (e) => {
	if (j(e)) return M(e);
	if (e && typeof e == "object") {
		let t = e;
		if (Number.isFinite(t.x) && Number.isFinite(t.y) && Number.isFinite(t.w) && Number.isFinite(t.h)) {
			let e = t.x, n = t.y, r = t.w, i = t.h;
			return e > 1 || n > 1 || r > 1 || i > 1 ? {
				x: Math.max(0, e),
				y: Math.max(0, n),
				w: Math.max(1e-4, r),
				h: Math.max(1e-4, i)
			} : k({
				x: e,
				y: n,
				w: r,
				h: i
			});
		}
	}
	return null;
}, P = {
	thin: 1.5,
	medium: 2.5,
	thick: 4
}, F = /* @__PURE__ */ e({ default: () => I }), ce = t("<button type=\"button\" data-testid=\"story-annotation-note\"> </button>"), le = d("<rect class=\"story-annotation-overlay__shape svelte-14qi414\"></rect>"), ue = d("<polygon class=\"story-annotation-overlay__shape svelte-14qi414\"></polygon>"), de = d("<polyline class=\"story-annotation-overlay__line svelte-14qi414\"></polyline>"), fe = t("<span class=\"story-annotation-overlay__point svelte-14qi414\"> </span>"), pe = t("<span> </span>"), me = t("<svg class=\"story-annotation-overlay__drawings svelte-14qi414\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" aria-label=\"Chapter drawing annotations\"></svg> <div class=\"story-annotation-overlay__markers svelte-14qi414\"><!> <!></div>", 1), he = t("<div class=\"story-annotation-overlay svelte-14qi414\" data-testid=\"story-annotation-overlay\"><!> <!></div>");
function I(e, t) {
	ie(t, !1);
	let d = () => m(be(), "$story", D), E = () => m(xe(), "$viewBox", D), [D, O] = ne(), k = C(), j = C(), M = C(), F = C(), I = C(), L = C(), R = C(), z = C(), B = C(), V = C(), H = C(), U = C(), W = C(), G = C(), K = C(), q = C(), ge = C(), _e = C(), ve = C(), ye = C(), be = x(t, "story", 8), xe = x(t, "viewBox", 24, () => te(null)), J = x(t, "chapterId", 8, null), Y = x(t, "language", 8, "en"), X = x(t, "visible", 8, !0), Se = x(t, "showDrawings", 8, !0), Z = x(t, "editable", 8, !1), Ce = x(t, "onEditText", 8, void 0), we = (e) => e.label?.[Y()] ?? e.label?.en ?? e.text ?? "", Te = C(0), Ee = C(0), De = (e) => {
		if (e.kind !== "rect" || e.w == null || e.h == null) return `left:${e.cx}%; top:${e.cy}%; border-color:${e.color}; --annotation-scale:${s(W)};`;
		let t = s(Te) * e.w / 100, n = s(Ee) * e.h / 100, { fontSize: r, lineHeight: i } = se(t, n, e.label), a = oe(r), o = Math.max(2, r * .28);
		return `left:${e.cx}%; top:${e.cy}%; width:${e.w}%; height:${e.h}%; padding:${o.toFixed(2)}px; font-size:${r.toFixed(2)}px; line-height:${i.toFixed(2)}px; -webkit-text-stroke-width:${a.toFixed(2)}px;`;
	};
	f(() => (d(), w(J())), () => {
		h(k, d().chapters.find((e) => e.id === J()) ?? null);
	}), f(() => (s(k), w(Y())), () => {
		h(j, s(k)?.annotations?.[Y()] ?? null);
	}), f(() => s(j), () => {
		h(M, s(j)?.text ?? "");
	}), f(() => (s(k), N), () => {
		h(F, Object.values(s(k)?.annotations ?? {}).map((e) => N(e?.placement)).find((e) => !!e));
	}), f(() => (s(j), s(k), s(F), A), () => {
		h(I, N(s(j)?.placement) ?? N(s(k)?.annotationPlacement) ?? s(F) ?? A);
	}), f(() => s(k), () => {
		h(L, s(k)?.viewBox ?? null);
	}), f(() => E(), () => {
		h(R, E());
	}), f(() => s(I), () => {
		h(z, !!(s(I) && (s(I).x > 1 || s(I).y > 1 || s(I).w > 1 || s(I).h > 1)));
	}), f(() => (s(z), s(I), s(L)), () => {
		h(B, s(z) ? s(I) : s(L) ? {
			x: s(L).x + s(L).w * s(I).x,
			y: s(L).y + s(L).h * s(I).y,
			w: s(L).w * s(I).w,
			h: s(L).h * s(I).h
		} : null);
	}), f(() => (s(B), s(R)), () => {
		h(V, s(B) && s(R) ? {
			x: (s(B).x - s(R).x) / s(R).w,
			y: (s(B).y - s(R).y) / s(R).h,
			w: s(B).w / s(R).w,
			h: s(B).h / s(R).h
		} : null);
	}), f(() => s(V), () => {
		h(H, s(V) !== null && Number.isFinite(s(V).x) && Number.isFinite(s(V).y) && Number.isFinite(s(V).w) && Number.isFinite(s(V).h));
	}), f(() => (s(H), s(V)), () => {
		h(U, s(H) && s(V).x + s(V).w >= 0 && s(V).x <= 1 && s(V).y + s(V).h >= 0 && s(V).y <= 1);
	}), f(() => (s(L), s(R)), () => {
		h(W, s(L) && s(R) && s(R).w > 0 ? Math.max(.15, s(L).w / s(R).w) : 1);
	}), f(() => (s(H), s(V), s(W), s(I)), () => {
		h(G, s(H) ? `left: ${(s(V).x * 100).toFixed(3)}%; top: ${(s(V).y * 100).toFixed(3)}%; width: ${(s(V).w * 100).toFixed(3)}%; height: ${(s(V).h * 100).toFixed(3)}%; --annotation-scale:${s(W)};` : `left: ${(s(I).x * 100).toFixed(3)}%; top: ${(s(I).y * 100).toFixed(3)}%; width: ${(s(I).w * 100).toFixed(3)}%; height: ${(s(I).h * 100).toFixed(3)}%; --annotation-scale:1;`);
	}), f(() => (w(X()), s(M), w(J()), s(H), s(U)), () => {
		h(K, !!(X() && s(M) && J() && (!s(H) || s(U))));
	}), f(() => (s(R), s(k), P), () => {
		h(q, (() => {
			let e = s(R);
			if (!e) return [];
			let t = (t) => ({
				x: (t.x - e.x) / e.w * 100,
				y: (t.y - e.y) / e.h * 100
			}), n = 0;
			return (s(k)?.drawingAnnotations ?? []).flatMap((r) => {
				let i = r.color?.trim() || "var(--accent, #e07a3f)", a = P[r.strokeWidth ?? "medium"], o = we(r), s = r.fillMode ?? "transparent", c = {
					id: r.id,
					color: i,
					strokePx: a,
					label: o,
					fillMode: s
				};
				if (r.rect) {
					let n = t(r.rect), i = r.rect.w / e.w * 100, a = r.rect.h / e.h * 100;
					return [{
						...c,
						kind: "rect",
						x: n.x,
						y: n.y,
						w: i,
						h: a,
						cx: n.x + i / 2,
						cy: n.y + a / 2
					}];
				}
				if (r.point) {
					let e = t(r.point);
					return n += 1, [{
						...c,
						kind: "point",
						cx: e.x,
						cy: e.y,
						pointNumber: n
					}];
				}
				if (r.points?.length) {
					let e = r.points.map(t), n = e.reduce((e, t) => e + t.x, 0) / e.length, i = e.reduce((e, t) => e + t.y, 0) / e.length;
					return [{
						...c,
						kind: r.type === "polygon" ? "polygon" : "line",
						pointsStr: e.map((e) => `${e.x},${e.y}`).join(" "),
						cx: n,
						cy: i
					}];
				}
				return [];
			});
		})());
	}), f(() => s(q), () => {
		h(ge, s(q).filter((e) => e.kind !== "point"));
	}), f(() => s(q), () => {
		h(_e, s(q).filter((e) => e.kind === "point"));
	}), f(() => s(q), () => {
		h(ve, s(q).filter((e) => e.label.trim().length > 0));
	}), f(() => (w(X()), w(Se()), s(q)), () => {
		h(ye, X() && Se() && s(q).length > 0);
	}), ee(), re();
	var Q = he(), $ = S(Q), Oe = (e) => {
		var t = ce();
		let r;
		var d = S(t, !0);
		i(t), c(() => {
			r = n(t, 1, "story-annotation-overlay__note svelte-14qi414", null, r, { "story-annotation-overlay__note--editable": Z() }), u(t, s(G)), t.disabled = !Z(), _(t, "aria-label", `Edit text annotation: ${s(M)}`), o(d, s(M));
		}), a("click", t, () => Z() && Ce()?.(Y())), l(e, t);
	};
	y($, (e) => {
		s(K) && e(Oe);
	});
	var ke = v($, 2), Ae = (e) => {
		var t = me(), r = T(t);
		b(r, 5, () => s(ge), (e) => e.id, (e, t) => {
			var n = ae(), r = T(n), i = (e) => {
				var n = le();
				c(() => {
					_(n, "x", (s(t), p(() => s(t).x))), _(n, "y", (s(t), p(() => s(t).y))), _(n, "width", (s(t), p(() => s(t).w))), _(n, "height", (s(t), p(() => s(t).h))), u(n, (s(t), p(() => `stroke:${s(t).color};stroke-width:${s(t).strokePx}px;fill:${s(t).fillMode === "solid" ? s(t).color : `color-mix(in srgb, ${s(t).color} 16%, transparent)`};`)));
				}), l(e, n);
			}, a = (e) => {
				var n = ue();
				c(() => {
					_(n, "points", (s(t), p(() => s(t).pointsStr))), u(n, (s(t), p(() => `stroke:${s(t).color};stroke-width:${s(t).strokePx}px;fill:${s(t).fillMode === "solid" ? s(t).color : `color-mix(in srgb, ${s(t).color} 16%, transparent)`};`)));
				}), l(e, n);
			}, o = (e) => {
				var n = de();
				c(() => {
					_(n, "points", (s(t), p(() => s(t).pointsStr))), u(n, (s(t), p(() => `stroke:${s(t).color};stroke-width:${s(t).strokePx}px;`)));
				}), l(e, n);
			};
			y(r, (e) => {
				s(t), p(() => s(t).kind === "rect") ? e(i) : (s(t), p(() => s(t).kind === "polygon") ? e(a, 1) : e(o, -1));
			}), l(e, n);
		}), i(r);
		var a = v(r, 2), d = S(a);
		b(d, 1, () => s(_e), (e) => e.id, (e, t) => {
			var n = fe(), r = S(n, !0);
			i(n), c(() => {
				u(n, (s(t), p(() => `left:${s(t).cx}%; top:${s(t).cy}%; background:${s(t).color};`))), o(r, (s(t), p(() => s(t).pointNumber)));
			}), l(e, n);
		});
		var f = v(d, 2);
		b(f, 1, () => s(ve), (e) => `label-${e.id}`, (e, t) => {
			var r = pe();
			let a;
			var d = S(r, !0);
			i(r), c((e) => {
				a = n(r, 1, "story-annotation-overlay__label svelte-14qi414", null, a, { "story-annotation-overlay__label--rectangle": s(t).kind === "rect" }), u(r, e), o(d, (s(t), p(() => s(t).label)));
			}, [() => (s(t), p(() => De(s(t))))]), l(e, r);
		}), i(a), l(e, t);
	};
	y(ke, (e) => {
		s(ye) && e(Ae);
	}), i(Q), g(Q, "clientWidth", (e) => h(Te, e)), g(Q, "clientHeight", (e) => h(Ee, e)), l(e, Q), r(), O();
}
//#endregion
export { M as a, A as i, F as n, N as o, P as r, j as s, I as t };
