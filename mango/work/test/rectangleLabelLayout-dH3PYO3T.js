import { At as e } from "./client-CruOUf1V.js";
//#region node_modules/svelte/src/internal/flags/legacy.js
e();
//#endregion
//#region src/lib/features/annotations/rectangleLabelLayout.ts
var t = (e, t) => {
	let n = e.trim().split(/\s+/).filter(Boolean);
	if (!n.length) return [];
	let r = [], i = "";
	for (let e of n) {
		if (e.length > t) {
			i && r.push(i), i = "";
			for (let n = 0; n < e.length; n += t) r.push(e.slice(n, n + t));
			continue;
		}
		let n = i ? `${i} ${e}` : e;
		n.length <= t ? i = n : (r.push(i), i = e);
	}
	return i && r.push(i), r;
}, n = (e, n, r) => {
	let i = Math.max(1, e), a = Math.max(1, n), o = i * .88, s = a * .8, c = Math.max(1, Math.min(i, a) * .015), l = Math.max(c, a * .42), u = {
		fontSize: c,
		lineHeight: c * 1.18,
		lines: t(r, Math.max(1, Math.floor(o / (c * .56))))
	};
	for (let e = 0; e < 24; e += 1) {
		let e = (c + l) / 2, n = e * 1.18, i = t(r, Math.max(1, Math.floor(o / (e * .56))));
		i.length * n <= s ? (u = {
			fontSize: e,
			lineHeight: n,
			lines: i
		}, c = e) : l = e;
	}
	return u;
}, r = (e) => Math.max(1, e * .1);
//#endregion
export { r as n, n as t };
