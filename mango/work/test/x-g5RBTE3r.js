import { A as e, Ct as t, Dt as n, E as r, J as i, Ot as a, P as o, R as s, St as c, V as l, i as u, it as d, k as f, kt as p, m, mt as h, n as g, nt as _, r as v, rt as y, wt as b, z as x } from "./client-CruOUf1V.js";
//#region node_modules/@lucide/svelte/dist/defaultAttributes.js
var S = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, C = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, w = Symbol("lucide-context"), T = () => c(w), E = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"name",
	"color",
	"size",
	"strokeWidth",
	"absoluteStrokeWidth",
	"iconNode",
	"children"
]), D = l("<svg><!><!></svg>");
function O(c, l) {
	b(l, !0);
	let u = T() ?? {}, w = g(l, "color", 19, () => u.color ?? "currentColor"), O = g(l, "size", 19, () => u.size ?? 24), k = g(l, "strokeWidth", 19, () => u.strokeWidth ?? 2), A = g(l, "absoluteStrokeWidth", 19, () => u.absoluteStrokeWidth ?? !1), j = g(l, "iconNode", 19, () => []), M = v(l, E), N = h(() => A() ? Number(k()) * 24 / Number(O()) : k());
	var P = D();
	m(P, (e) => ({
		...S,
		...e,
		...M,
		width: O(),
		height: O(),
		stroke: w(),
		"stroke-width": i(N),
		class: [
			"lucide-icon lucide",
			u.class,
			l.name && `lucide-${l.name}`,
			l.class
		]
	}), [() => !l.children && !C(M) && { "aria-hidden": "true" }]);
	var F = _(P);
	f(F, 17, j, e, (e, t) => {
		var n = h(() => p(i(t), 2));
		let a = () => i(n)[0], o = () => i(n)[1];
		var c = x(), l = y(c);
		r(l, a, !0, (e, t) => {
			m(e, () => ({ ...o() }));
		}), s(e, c);
	});
	var I = d(F);
	o(I, () => l.children ?? a), n(P), s(c, P), t();
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/x.svelte
var k = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function A(e, t) {
	let n = v(t, k), r = [["path", { d: "M18 6 6 18" }], ["path", { d: "m6 6 12 12" }]];
	O(e, u({ name: "x" }, () => n, { get iconNode() {
		return r;
	} }));
}
//#endregion
export { O as n, A as t };
