import { $ as e, A as t, B as n, C as r, Ct as i, Dt as a, Et as o, I as s, J as c, P as l, Q as u, R as d, S as f, U as p, V as m, W as h, _t as g, at as _, b as v, ct as y, g as b, gt as x, h as S, ht as C, it as w, j as T, k as E, lt as D, mt as O, n as k, nt as A, p as j, rt as M, v as N, wt as P, x as F, z as I } from "./client-CruOUf1V.js";
import { r as L } from "./i18n-CG_FGWUx.js";
//#region src/lib/features/annotations/workspace/LeftSidebar.svelte
var R = n("<button type=\"button\"><span> </span></button>"), ee = m("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"left-sidebar__eye-svg svelte-1rad5mv\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>"), z = m("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"left-sidebar__eye-svg svelte-1rad5mv\"><path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a13.16 13.16 0 0 1 1.66-2.62M14.78 9.22A3 3 0 0 0 12 9a3 3 0 0 0-3 3 3 3 0 0 0 .22 2.78m0 0a3 3 0 0 0 3.78-3.78M22 12s-3 7-10 7a9.74 9.74 0 0 1-5.39-1.61M2 2l20 20\"></path></svg>"), te = n("<div><button type=\"button\" class=\"left-sidebar__layer-toggle svelte-1rad5mv\"><span class=\"left-sidebar__dot svelte-1rad5mv\"></span> <span class=\"left-sidebar__layer-name svelte-1rad5mv\"> </span> <span class=\"left-sidebar__eye svelte-1rad5mv\"><!></span></button> <input type=\"color\" class=\"left-sidebar__layer-color svelte-1rad5mv\"/></div>"), B = n("<aside class=\"left-sidebar svelte-1rad5mv\"><p class=\"left-sidebar__label svelte-1rad5mv\"> </p> <div class=\"left-sidebar__tools svelte-1rad5mv\"></div> <div class=\"left-sidebar__layers svelte-1rad5mv\"><div class=\"left-sidebar__layers-head svelte-1rad5mv\"><p class=\"left-sidebar__label svelte-1rad5mv\"> </p> <button type=\"button\" class=\"left-sidebar__plus svelte-1rad5mv\">+</button></div> <!></div></aside>");
function V(e, n) {
	P(n, !0);
	let o = () => g(L, "$t", l), [l, p] = x(), m = k(n, "activeTool", 3, "rectangle"), _ = k(n, "layers", 19, () => [
		{
			id: "research",
			name: "Research Notes",
			color: "#fb7185",
			visible: !0
		},
		{
			id: "transcription",
			name: "Transcription",
			color: "#60a5fa",
			visible: !0
		},
		{
			id: "highlights",
			name: "Highlights",
			color: "#34d399",
			visible: !0
		},
		{
			id: "mine",
			name: "My Annotations",
			color: "#a78bfa",
			visible: !0
		}
	]), v = k(n, "ontoolchange", 3, void 0), y = k(n, "ontogglelayer", 3, void 0), C = k(n, "onaddlayer", 3, void 0), D = k(n, "onlayercolorchange", 3, void 0), O = [
		{
			id: "select",
			label: "Select / Pan"
		},
		{
			id: "rectangle",
			label: "Rectangle"
		},
		{
			id: "polygon",
			label: "Polygon"
		},
		{
			id: "point",
			label: "Point"
		},
		{
			id: "freehand",
			label: "Freehand"
		},
		{
			id: "line",
			label: "Line"
		}
	];
	var j = B(), M = A(j), F = A(M, !0);
	a(M);
	var I = w(M, 2);
	E(I, 21, () => O, t, (e, t) => {
		var n = R();
		let i;
		var l = A(n), f = A(l, !0);
		a(l), a(n), u((e) => {
			i = r(n, 1, "left-sidebar__tool svelte-1rad5mv", null, i, { "left-sidebar__tool--active": c(t).id === m() }), s(f, e);
		}, [() => o()(`viewer.panels.annotations.editor.tools.${c(t).id}`) === `viewer.panels.annotations.editor.tools.${c(t).id}` ? c(t).label : o()(`viewer.panels.annotations.editor.tools.${c(t).id}`)]), h("click", n, () => {
			c(t).id === m() ? c(t).id !== "select" && v()?.({ tool: "select" }) : v()?.({ tool: c(t).id });
		}), d(e, n);
	}), a(I);
	var V = w(I, 2), ne = A(V), H = A(ne), re = A(H, !0);
	a(H);
	var ie = w(H, 2);
	a(ne);
	var U = w(ne, 2);
	E(U, 17, _, t, (e, t) => {
		var n = te();
		let i;
		var l = A(n), p = A(l), m = w(p, 2), g = A(m, !0);
		a(m);
		var _ = w(m, 2), v = A(_), x = (e) => {
			var t = ee();
			d(e, t);
		}, C = (e) => {
			var t = z();
			d(e, t);
		};
		T(v, (e) => {
			c(t).visible ? e(x) : e(C, -1);
		}), a(_), a(l);
		var E = w(l, 2);
		S(E), a(n), u((e, a) => {
			i = r(n, 1, "left-sidebar__layer svelte-1rad5mv", null, i, { "left-sidebar__layer--hidden": !c(t).visible }), b(l, "aria-pressed", c(t).visible), b(l, "title", e), f(p, `background:${c(t).color};`), s(g, a), N(E, c(t).color), b(E, "aria-label", `Set ${c(t).name} color`);
		}, [() => c(t).visible ? o()("viewer.panels.annotations.editor.hideLayer") : o()("viewer.panels.annotations.editor.showLayer"), () => o()(`viewer.panels.annotations.editor.layers.${c(t).id}`) === `viewer.panels.annotations.editor.layers.${c(t).id}` ? c(t).name : o()(`viewer.panels.annotations.editor.layers.${c(t).id}`)]), h("click", l, () => y()?.({ id: c(t).id })), h("input", E, (e) => D()?.({
			id: c(t).id,
			color: e.currentTarget.value
		})), d(e, n);
	}), a(V), a(j), u((e, t) => {
		s(F, e), s(re, t);
	}, [() => o()("viewer.panels.annotations.editor.createTitle"), () => o()("viewer.panels.annotations.editor.layersLabel")]), h("click", ie, () => C()?.()), d(e, j), i(), p();
}
p(["click", "input"]);
//#endregion
//#region src/lib/features/annotations/workspace/RightInspector.svelte
var ne = n("<option> </option>"), H = n("<button type=\"button\" class=\"tag-pill svelte-1hh10hh\"> <span aria-hidden=\"true\" class=\"svelte-1hh10hh\">×</span></button>"), re = n("<div class=\"tag-list svelte-1hh10hh\"></div>"), ie = n("<div class=\"right-inspector__scroll svelte-1hh10hh\"><details class=\"inspector-accordion svelte-1hh10hh\" open=\"\"><summary class=\"inspector-accordion__summary svelte-1hh10hh\"> </summary> <div class=\"inspector-accordion__content svelte-1hh10hh\"><div class=\"right-inspector__group svelte-1hh10hh\"><label for=\"anno-type\" class=\"svelte-1hh10hh\"> </label> <select id=\"anno-type\" class=\"svelte-1hh10hh\"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div class=\"right-inspector__group svelte-1hh10hh\"><label for=\"anno-layer\" class=\"svelte-1hh10hh\"> </label> <select id=\"anno-layer\" class=\"svelte-1hh10hh\"></select></div> <div class=\"right-inspector__group svelte-1hh10hh\"><label for=\"anno-label\" class=\"svelte-1hh10hh\"> </label> <input id=\"anno-label\" class=\"svelte-1hh10hh\"/></div> <div class=\"right-inspector__group svelte-1hh10hh\"><label for=\"anno-text\" class=\"svelte-1hh10hh\"> </label> <textarea id=\"anno-text\" rows=\"4\" class=\"svelte-1hh10hh\"></textarea></div> <div class=\"right-inspector__group svelte-1hh10hh\"><label for=\"anno-tags\" class=\"svelte-1hh10hh\"> </label> <div class=\"tag-editor svelte-1hh10hh\"><input id=\"anno-tags\" class=\"svelte-1hh10hh\"/> <button type=\"button\" class=\"tag-editor__add svelte-1hh10hh\"> </button></div> <!></div></div></details> <details class=\"inspector-accordion svelte-1hh10hh\"><summary class=\"inspector-accordion__summary svelte-1hh10hh\"> </summary> <div class=\"inspector-accordion__content svelte-1hh10hh\"><div class=\"right-inspector__group svelte-1hh10hh\"><label for=\"anno-notes\" class=\"svelte-1hh10hh\"> </label> <textarea id=\"anno-notes\" rows=\"3\" class=\"svelte-1hh10hh\"></textarea></div></div></details></div> <div class=\"right-inspector__actions svelte-1hh10hh\"><button type=\"button\" class=\"right-inspector__save svelte-1hh10hh\"> </button> <button type=\"button\" class=\"right-inspector__delete svelte-1hh10hh\"> </button></div>", 1), U = n("<p class=\"right-inspector__empty svelte-1hh10hh\"> </p>"), ae = n("<aside class=\"right-inspector svelte-1hh10hh\"><div class=\"right-inspector__head svelte-1hh10hh\"><h3 class=\"svelte-1hh10hh\"> </h3> <span class=\"svelte-1hh10hh\"> </span></div> <!></aside>");
function oe(n, r) {
	P(r, !0);
	let l = () => g(L, "$t", f), [f, p] = x(), m = k(r, "annotation", 3, null), O = k(r, "layers", 19, () => [
		{
			id: "research",
			name: "Research Notes",
			color: "#fb7185",
			visible: !0
		},
		{
			id: "transcription",
			name: "Transcription",
			color: "#60a5fa",
			visible: !0
		},
		{
			id: "highlights",
			name: "Highlights",
			color: "#34d399",
			visible: !0
		},
		{
			id: "mine",
			name: "My Annotations",
			color: "#a78bfa",
			visible: !0
		}
	]), j = k(r, "total", 3, 0), I = k(r, "index", 3, 0), R = k(r, "isDraft", 3, !1), ee = k(r, "ondelete", 3, void 0), z = k(r, "onupdate", 3, void 0), te = k(r, "onsave", 3, void 0), B = D(null), V = D(""), oe = D(""), se = D(""), W = D(_([])), G = D(""), ce = D("sc:painting"), K = D("mine"), q = () => O()[0]?.id ?? "mine", le = (e) => O().find((t) => t.id === e), J = (e) => le(e)?.id ?? q(), ue = (e) => le(e)?.color ?? "#a78bfa";
	e(() => {
		m() && m().id !== c(B) ? (y(B, m().id, !0), y(V, m().label ?? "", !0), y(oe, m().text ?? "", !0), y(se, m().notes ?? "", !0), y(W, [...m().tags ?? []], !0), y(G, ""), y(ce, m().motivation?.[0] ?? "sc:painting", !0), y(K, J(m().targetStyleClass), !0)) : m() || y(B, null);
	}), e(() => {
		if (!m()) return;
		let e = J(m().targetStyleClass);
		c(K) !== e && y(K, e, !0);
	});
	let de = (e) => e === "painting" || e === "sc:painting" ? "sc:painting" : e === "commenting" || e === "oa:commenting" ? "oa:commenting" : e === "tagging" || e === "oa:tagging" ? "oa:tagging" : e, fe = (e) => {
		y(V, e, !0), m() && z()?.({
			id: m().id,
			patch: { label: e }
		});
	}, pe = (e) => {
		y(oe, e, !0), m() && z()?.({
			id: m().id,
			patch: { text: e }
		});
	}, me = (e) => {
		y(se, e, !0), m() && z()?.({
			id: m().id,
			patch: { notes: e }
		});
	}, Y = (e) => {
		y(W, e, !0), m() && z()?.({
			id: m().id,
			patch: { tags: e }
		});
	}, he = () => {
		let e = c(G).trim().replace(/\s+/g, " ");
		if (e) {
			if (c(W).some((t) => t.toLowerCase() === e.toLowerCase())) {
				y(G, "");
				return;
			}
			Y([...c(W), e]), y(G, "");
		}
	}, ge = (e) => {
		e < 0 || e >= c(W).length || Y(c(W).filter((t, n) => n !== e));
	}, _e = (e) => {
		y(ce, e, !0), m() && z()?.({
			id: m().id,
			patch: { motivation: [e] }
		});
	}, ve = (e) => {
		y(K, e, !0), m() && z()?.({
			id: m().id,
			patch: {
				targetStyleClass: e,
				targetStyle: ye(e)
			}
		});
	}, ye = (e) => {
		let t = ue(e);
		return `stroke: ${t}; fill: rgba(${parseInt(t.slice(1, 3), 16) || 0}, ${parseInt(t.slice(3, 5), 16) || 0}, ${parseInt(t.slice(5, 7), 16) || 0}, 0.18);`;
	};
	var be = ae(), X = A(be), Z = A(X), xe = A(Z, !0);
	a(Z);
	var Q = w(Z, 2), Se = A(Q, !0);
	a(Q), a(X);
	var Ce = w(X, 2), we = (e) => {
		var n = ie(), r = M(n), i = A(r), f = A(i), p = A(f, !0);
		a(f);
		var g = w(f, 2), _ = A(g), x = A(_), D = A(x, !0);
		a(x);
		var k = w(x, 2), j = A(k), P = A(j, !0);
		a(j), j.value = j.__value = "sc:painting";
		var I = w(j), L = A(I, !0);
		a(I), I.value = I.__value = "supplementing";
		var z = w(I), B = A(z, !0);
		a(z), z.value = z.__value = "contextualizing";
		var U = w(z), ae = A(U, !0);
		a(U), U.value = U.__value = "contentState";
		var q = w(U), le = A(q, !0);
		a(q), q.value = q.__value = "highlighting";
		var J = w(q), ue = A(J, !0);
		a(J), J.value = J.__value = "oa:commenting";
		var Y = w(J), ye = A(Y, !0);
		a(Y), Y.value = Y.__value = "oa:tagging", a(k);
		var be;
		v(k), a(_);
		var X = w(_, 2), Z = A(X), xe = A(Z, !0);
		a(Z);
		var Q = w(Z, 2);
		E(Q, 21, O, t, (e, t) => {
			var n = ne(), r = A(n, !0);
			a(n);
			var i = {};
			u((e) => {
				s(r, e), i !== (i = c(t).id) && (n.value = (n.__value = c(t).id) ?? "");
			}, [() => l()(`viewer.panels.annotations.editor.layers.${c(t).id}`) === `viewer.panels.annotations.editor.layers.${c(t).id}` ? c(t).name : l()(`viewer.panels.annotations.editor.layers.${c(t).id}`)]), d(e, n);
		}), a(Q);
		var Se;
		v(Q), a(X);
		var Ce = w(X, 2), we = A(Ce), Te = A(we, !0);
		a(we);
		var Ee = w(we, 2);
		S(Ee), a(Ce);
		var De = w(Ce, 2), Oe = A(De), ke = A(Oe, !0);
		a(Oe);
		var Ae = w(Oe, 2);
		C(Ae), a(De);
		var je = w(De, 2), Me = A(je), Ne = A(Me, !0);
		a(Me);
		var Pe = w(Me, 2), $ = A(Pe);
		S($);
		var Fe = w($, 2), Ie = A(Fe, !0);
		a(Fe), a(Pe);
		var Le = w(Pe, 2), Re = (e) => {
			var n = re();
			E(n, 21, () => c(W), t, (e, t, n) => {
				var r = H(), i = A(r);
				o(), a(r), u((e) => {
					b(r, "title", e), s(i, `${c(t) ?? ""} `);
				}, [() => l()("viewer.panels.annotations.editor.removeTag", { tag: c(t) })]), h("click", r, () => ge(n)), d(e, r);
			}), a(n), d(e, n);
		};
		T(Le, (e) => {
			c(W).length > 0 && e(Re);
		}), a(je), a(g), a(i);
		var ze = w(i, 2), Be = A(ze), Ve = A(Be, !0);
		a(Be);
		var He = w(Be, 2), Ue = A(He), We = A(Ue), Ge = A(We, !0);
		a(We);
		var Ke = w(We, 2);
		C(Ke), a(Ue), a(He), a(ze), a(r);
		var qe = w(r, 2), Je = A(qe), Ye = A(Je, !0);
		a(Je);
		var Xe = w(Je, 2), Ze = A(Xe, !0);
		a(Xe), a(qe), u((e, t, n, r, i, a, o, l, u, d, f, m, h, g, _, v, y, x, S, C, w, T, E) => {
			s(p, e), s(D, t), s(P, n), s(L, r), s(B, i), s(ae, a), s(le, o), s(ue, l), s(ye, u), be !== (be = d) && (k.value = (k.__value = d) ?? "", F(k, d)), s(xe, f), Se !== (Se = c(K)) && (Q.value = (Q.__value = c(K)) ?? "", F(Q, c(K))), s(Te, m), N(Ee, c(V)), b(Ee, "placeholder", h), s(ke, g), N(Ae, c(oe)), b(Ae, "placeholder", _), s(Ne, v), N($, c(G)), b($, "placeholder", y), s(Ie, x), s(Ve, S), s(Ge, C), N(Ke, c(se)), b(Ke, "placeholder", w), s(Ye, T), s(Ze, E);
		}, [
			() => l()("viewer.panels.annotations.editor.details"),
			() => l()("viewer.panels.annotations.editor.motivation"),
			() => l()("viewer.panels.annotations.editor.motivations.painting"),
			() => l()("viewer.panels.annotations.editor.motivations.supplementing"),
			() => l()("viewer.panels.annotations.editor.motivations.contextualizing"),
			() => l()("viewer.panels.annotations.editor.motivations.contentState"),
			() => l()("viewer.panels.annotations.editor.motivations.highlighting"),
			() => l()("viewer.panels.annotations.editor.motivations.commenting"),
			() => l()("viewer.panels.annotations.editor.motivations.tagging"),
			() => de(c(ce)),
			() => l()("viewer.panels.annotations.editor.layer"),
			() => l()("viewer.panels.annotations.editor.label"),
			() => l()("viewer.panels.annotations.editor.labelPlaceholder"),
			() => l()("viewer.panels.annotations.editor.text"),
			() => l()("viewer.panels.annotations.editor.textPlaceholder"),
			() => l()("viewer.panels.annotations.editor.tags"),
			() => l()("viewer.panels.annotations.editor.tagPlaceholder"),
			() => l()("viewer.panels.annotations.editor.addTag"),
			() => l()("viewer.panels.annotations.editor.notes"),
			() => l()("viewer.panels.annotations.editor.privateNotes"),
			() => l()("viewer.panels.annotations.editor.notesPlaceholder"),
			() => R() ? l()("viewer.panels.annotations.editor.saveAnnotation") : l()("viewer.panels.annotations.editor.saveChanges"),
			() => l()("viewer.panels.annotations.editor.deleteAnnotation")
		]), h("change", k, (e) => _e(e.currentTarget.value)), h("change", Q, (e) => ve(e.currentTarget.value)), h("input", Ee, (e) => fe(e.currentTarget.value)), h("input", Ae, (e) => pe(e.currentTarget.value)), h("input", $, (e) => y(G, e.currentTarget.value, !0)), h("keydown", $, (e) => {
			(e.key === "Enter" || e.key === ",") && (e.preventDefault(), he());
		}), h("click", Fe, he), h("input", Ke, (e) => me(e.currentTarget.value)), h("click", Je, function(...e) {
			te()?.apply(this, e);
		}), h("click", Xe, () => ee()?.({ id: m().id })), d(e, n);
	}, Te = (e) => {
		var t = U(), n = A(t, !0);
		a(t), u((e) => s(n, e), [() => l()("viewer.panels.annotations.editor.empty")]), d(e, t);
	};
	T(Ce, (e) => {
		m() ? e(we) : e(Te, -1);
	}), a(be), u((e, t) => {
		s(xe, e), s(Se, t);
	}, [() => l()("viewer.panels.annotations.editor.detailsTitle"), () => j() > 0 ? l()("viewer.panels.annotations.editor.pagination", {
		current: I() + 1,
		total: j()
	}) : l()("viewer.panels.annotations.editor.pagination", {
		current: 0,
		total: 0
	})]), d(n, be), i(), p();
}
p([
	"change",
	"input",
	"keydown",
	"click"
]);
//#endregion
//#region src/lib/features/annotations/workspace/AnnotationBrowserTable.svelte
var se = n("<tr><td class=\"svelte-egmfhz\"> </td><td class=\"svelte-egmfhz\"> </td><td class=\"svelte-egmfhz\"> </td><td class=\"svelte-egmfhz\"> </td></tr>"), W = n("<section class=\"annotation-table svelte-egmfhz\"><div class=\"annotation-table__toolbar svelte-egmfhz\"><h3 class=\"svelte-egmfhz\"> </h3> <input class=\"svelte-egmfhz\"/></div> <div class=\"annotation-table__wrap svelte-egmfhz\"><table class=\"svelte-egmfhz\"><thead><tr class=\"svelte-egmfhz\"><th class=\"svelte-egmfhz\"> </th><th class=\"svelte-egmfhz\"> </th><th class=\"svelte-egmfhz\"> </th><th class=\"svelte-egmfhz\"> </th></tr></thead><tbody></tbody></table></div></section>");
function G(e, n) {
	P(n, !0);
	let o = () => g(L, "$t", l), [l, f] = x(), p = k(n, "annotations", 19, () => []), m = k(n, "activeId", 3, null), _ = k(n, "onselect", 3, void 0), v = D(""), C = O(() => {
		let e = c(v).trim().toLowerCase();
		return e ? p().filter((t) => (t.label ?? "").toLowerCase().includes(e) || (t.text ?? "").toLowerCase().includes(e) || t.id.toLowerCase().includes(e)) : p();
	}), T = (e) => e.polygon ? "polygon" : e.point ? "point" : "rect";
	var M = W(), N = A(M), F = A(N), I = A(F, !0);
	a(F);
	var R = w(F, 2);
	S(R), a(N);
	var ee = w(N, 2), z = A(ee), te = A(z), B = A(te), V = A(B), ne = A(V, !0);
	a(V);
	var H = w(V), re = A(H, !0);
	a(H);
	var ie = w(H), U = A(ie, !0);
	a(ie);
	var ae = w(ie), oe = A(ae, !0);
	a(ae), a(B), a(te);
	var G = w(te);
	E(G, 21, () => c(C), t, (e, t) => {
		var n = se();
		let i;
		var l = A(n), f = A(l, !0);
		a(l);
		var p = w(l), g = A(p, !0);
		a(p);
		var v = w(p), y = A(v, !0);
		a(v);
		var b = w(v), x = A(b, !0);
		a(b), a(n), u((e) => {
			i = r(n, 1, "svelte-egmfhz", null, i, { active: c(t).id === m() }), s(f, c(t).id), s(g, c(t).label || "-"), s(y, c(t).text || "-"), s(x, e);
		}, [() => o()(`viewer.panels.annotations.editor.tools.${T(c(t))}`) === `viewer.panels.annotations.editor.tools.${T(c(t))}` ? T(c(t)) : o()(`viewer.panels.annotations.editor.tools.${T(c(t))}`)]), h("click", n, () => _()?.({ id: c(t).id })), d(e, n);
	}), a(G), a(z), a(ee), a(M), u((e, t, n, r, i, a) => {
		s(I, e), b(R, "placeholder", t), s(ne, n), s(re, r), s(U, i), s(oe, a);
	}, [
		() => o()("viewer.panels.annotations.title"),
		() => o()("viewer.panels.annotations.editor.searchPlaceholder"),
		() => o()("viewer.panels.annotations.editor.id"),
		() => o()("viewer.panels.annotations.editor.label"),
		() => o()("viewer.panels.annotations.editor.text"),
		() => o()("viewer.panels.annotations.editor.type")
	]), j(R, () => c(v), (e) => y(v, e)), d(e, M), i(), f();
}
p(["click"]);
//#endregion
//#region src/lib/features/annotations/workspace/AnnotationWorkspace.svelte
var ce = n("<section class=\"annotation-workspace svelte-5l63lu\"><aside class=\"annotation-workspace__left svelte-5l63lu\"><!></aside> <div class=\"annotation-workspace__center svelte-5l63lu\"><div class=\"annotation-workspace__stage svelte-5l63lu\"><!></div> <div class=\"annotation-workspace__bottom svelte-5l63lu\"><!></div></div> <aside class=\"annotation-workspace__right svelte-5l63lu\"><!></aside></section>");
function K(e, t) {
	P(t, !0);
	let n = k(t, "annotations", 19, () => []), r = k(t, "activeAnnotationId", 3, null), o = k(t, "draftAnnotation", 3, null), s = k(t, "activeTool", 3, "rectangle"), u = k(t, "layers", 19, () => [
		{
			id: "research",
			name: "Research Notes",
			color: "#fb7185",
			visible: !0
		},
		{
			id: "transcription",
			name: "Transcription",
			color: "#60a5fa",
			visible: !0
		},
		{
			id: "highlights",
			name: "Highlights",
			color: "#34d399",
			visible: !0
		},
		{
			id: "mine",
			name: "My Annotations",
			color: "#a78bfa",
			visible: !0
		}
	]), f = k(t, "ontoolchange", 3, void 0), p = k(t, "ontogglelayer", 3, void 0), m = k(t, "onaddlayer", 3, void 0), h = k(t, "onlayercolorchange", 3, void 0), g = k(t, "onannotationselect", 3, void 0), _ = k(t, "onannotationdelete", 3, void 0), v = k(t, "onannotationupdate", 3, void 0), y = k(t, "onannotationsave", 3, void 0), b = O(() => o() && o().id === r() ? o() : n().find((e) => e.id === r()) ?? null), x = O(() => Math.max(0, n().findIndex((e) => e.id === r()))), S = O(() => o() ? o().id === r() : !1);
	var C = ce(), E = A(C);
	V(A(E), {
		get activeTool() {
			return s();
		},
		get layers() {
			return u();
		},
		get ontoolchange() {
			return f();
		},
		get ontogglelayer() {
			return p();
		},
		get onaddlayer() {
			return m();
		},
		get onlayercolorchange() {
			return h();
		}
	}), a(E);
	var D = w(E, 2), j = A(D), N = A(j), F = (e) => {
		var n = I(), r = M(n);
		l(r, () => t.stage), d(e, n);
	};
	T(N, (e) => {
		t.stage && e(F);
	}), a(j);
	var L = w(j, 2);
	G(A(L), {
		get annotations() {
			return n();
		},
		get activeId() {
			return r();
		},
		get onselect() {
			return g();
		}
	}), a(L), a(D);
	var R = w(D, 2);
	oe(A(R), {
		get annotation() {
			return c(b);
		},
		get total() {
			return n().length;
		},
		get index() {
			return c(x);
		},
		get layers() {
			return u();
		},
		get isDraft() {
			return c(S);
		},
		get ondelete() {
			return _();
		},
		get onupdate() {
			return v();
		},
		get onsave() {
			return y();
		}
	}), a(R), a(C), d(e, C), i();
}
//#endregion
export { K as default };
