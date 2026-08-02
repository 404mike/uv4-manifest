import { B as e, Ct as t, Dt as n, H as r, I as i, Q as a, R as o, St as s, Tt as c, U as l, W as u, _t as d, g as f, gt as p, j as m, n as h, nt as g, wt as _ } from "./client-CruOUf1V.js";
import { r as v } from "./i18n-CG_FGWUx.js";
import { t as y } from "./x-g5RBTE3r.js";
//#region src/lib/viewer/context.ts
var b = [
	"dark",
	"light",
	"sepia",
	"midnight",
	"ringo"
], x = (e) => !!e && b.includes(e), S = Symbol("mango-viewer-context"), C = (e) => c(S, e), w = () => {
	let e = s(S);
	if (!e) throw Error("Viewer context is unavailable outside a Mango viewer");
	return e;
}, T = (e) => {
	if (!e) return "";
	if (typeof document > "u" || typeof DOMParser > "u") return e.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
	let t = new DOMParser().parseFromString(e, "text/html"), n = /* @__PURE__ */ new Set([
		"a",
		"b",
		"br",
		"i",
		"img",
		"p",
		"small",
		"span",
		"sub",
		"sup"
	]), r = {
		a: ["href"],
		img: ["src", "alt"]
	}, i = (e) => {
		let a = e.tagName.toLowerCase();
		if (!n.has(a)) {
			let n = t.createTextNode(e.textContent ?? "");
			e.replaceWith(n);
			return;
		}
		let o = r[a] ?? [];
		for (let t of Array.from(e.attributes)) {
			let n = t.name.toLowerCase();
			if (!o.includes(n)) {
				e.removeAttribute(t.name);
				continue;
			}
			let r = t.value ?? "";
			(n === "href" || n === "src") && r.trim().toLowerCase().startsWith("javascript:") && e.removeAttribute(t.name);
		}
		for (let t of Array.from(e.children)) i(t);
	};
	for (let e of Array.from(t.body.children)) i(e);
	return t.body.innerHTML;
}, E = e("<button class=\"panel__close svelte-1rom8wj\" type=\"button\"><!></button>");
function D(e, s) {
	_(s, !0);
	let c = () => d(v, "$t", l), [l, b] = p(), x = h(s, "label", 3, "Close"), S = h(s, "lucide", 3, !1), C = h(s, "onclose", 3, void 0), w = () => {
		C()?.();
	};
	var T = E(), D = g(T), O = (e) => {
		y(e, { "aria-hidden": "true" });
	}, k = (e) => {
		var t = r();
		a((e) => i(t, e), [() => c()("common.closeGlyph")]), o(e, t);
	};
	m(D, (e) => {
		S() ? e(O) : e(k, -1);
	}), n(T), a(() => f(T, "aria-label", x())), u("click", T, w), o(e, T), t(), b();
}
l(["click"]);
//#endregion
export { C as a, x as i, T as n, b as o, w as r, D as t };
