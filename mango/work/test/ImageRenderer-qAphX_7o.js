import { r as e } from "./rolldown-runtime-B0aSnxlc.js";
import { $ as t, B as n, C as r, Ct as i, Dt as a, G as o, I as s, J as c, N as l, Q as u, R as d, S as f, U as p, V as m, W as h, _t as ee, at as te, ct as g, g as _, gt as ne, it as v, j as y, k as re, l as b, lt as x, mt as S, n as C, nt as w, rt as ie, u as ae, wt as oe, z as se } from "./client-CruOUf1V.js";
import { r as ce } from "./i18n-CG_FGWUx.js";
//#region src/lib/viewer/osd/iiifTileSourceWorkaround.ts
var T = Symbol.for("mango.osd.iiif-exact-tile-level-patch"), le = (e) => {
	let t = e.IIIFTileSource?.prototype;
	if (!t || t[T]) return;
	let n = t.getTileUrl;
	t.getTileUrl = function(e, t, r) {
		let i = this, a = i.levelSizes?.[e], o = i.getTileWidth(e), s = i.getTileHeight(e), c = !i.emulateLegacyImagePyramid && !!a && a.width <= o && a.height <= s, l = a?.width === o || a?.height === s;
		if (c && l && i._id) {
			let e = a.width === i.width && a.height === i.height, t = i.version === 3 ? e ? "max" : `${a.width},${a.height}` : e ? "full" : `${a.width},`, n = i.version === 1 ? "native" : "default";
			return [
				i._id,
				"full",
				t,
				"0",
				`${n}.${i.tileFormat ?? "jpg"}`
			].join("/");
		}
		return n.call(i, e, t, r);
	}, Object.defineProperty(t, T, { value: !0 });
}, ue = m("<title class=\"svelte-16dhwsm\"> </title>"), de = m("<polygon role=\"button\" tabindex=\"0\"><!></polygon>"), fe = m("<polyline role=\"button\" tabindex=\"0\"><!></polyline>"), pe = n("<div role=\"button\" tabindex=\"0\"></div>"), me = n("<div> </div>"), he = n("<div class=\"annotation-tooltip svelte-16dhwsm\" role=\"tooltip\"> </div>"), ge = n("<div class=\"osd svelte-16dhwsm\" role=\"application\" tabindex=\"0\"><div class=\"osd__viewport svelte-16dhwsm\"></div> <div class=\"osd__overlays svelte-16dhwsm\" aria-hidden=\"true\"><svg class=\"annotation-svg svelte-16dhwsm\" aria-hidden=\"true\"></svg> <!> <!> <!></div></div>");
function _e(n, p) {
	oe(p, !0);
	let m = () => ee(ce, "$t", T), [T, _e] = ne(), E = C(p, "tileSource", 3, null), D = C(p, "layers", 19, () => []), O = C(p, "layerOpacities", 19, () => ({})), k = C(p, "annotations", 19, () => []), ve = C(p, "highlightIds", 19, () => []), A = C(p, "activeAnnotationId", 3, null), j = C(p, "hoverAnnotationId", 3, null), M = C(p, "layoutMode", 3, "single"), ye = C(p, "activeLayoutImages", 19, () => []), be = C(p, "osdConfig", 19, () => ({})), N = C(p, "legacyOsdConfig", 3, void 0), xe = C(p, "rotation", 3, 0), Se = C(p, "initialViewBox", 3, null), Ce = C(p, "onzoomchange", 3, void 0), we = C(p, "onviewboxchange", 3, void 0), Te = C(p, "onannotationhover", 3, void 0), Ee = C(p, "onannotationselect", 3, void 0), De = C(p, "onannotationclear", 3, void 0), Oe = C(p, "onrotationchange", 3, void 0), ke = C(p, "onviewerready", 3, void 0), Ae = C(p, "onloaderror", 3, void 0), P = x(null), F = x(null), I = null, L = /* @__PURE__ */ new WeakMap(), R = x(!1), z = x(te([])), je = null, Me = 0, Ne = !1, B = !1, Pe = x("none"), V = x(null), Fe = S(() => m()("viewer.panels.annotations.fallback")), H = null, Ie = !1, U = !1, W, G = !1, Le = () => {
		U = !0, W !== void 0 && clearTimeout(W), W = setTimeout(() => {
			W = void 0, U = !1, K();
		}, 220);
	}, Re = () => {
		W !== void 0 && clearTimeout(W), W = void 0, U && (U = !1, K());
	}, K = () => {
		let e = c(F)?.viewport;
		if (!e || Ie || U || B || typeof e.getHomeZoom != "function" || typeof e.getHomeBounds != "function" || typeof e.getBounds != "function" || typeof e.getCenter != "function" || typeof e.panTo != "function") return;
		let t = e.getZoom(!0), n = e.getHomeZoom();
		if (!Number.isFinite(t) || !Number.isFinite(n)) return;
		let r = e.getCenter(!0), i = e.getHomeBounds().getCenter(), a = e.getBounds(!0), o = c(F)?.world?.getHomeBounds?.(), s = t <= n * 1.001, l = !!(o && o.width <= a.width * 1.001), u = !!(o && o.height <= a.height * 1.001);
		if (!s && !l && !u) return;
		let d = {
			x: s || l ? i.x : r.x,
			y: s || u ? i.y : r.y
		};
		Math.abs(r.x - d.x) < 1e-6 && Math.abs(r.y - d.y) < 1e-6 || (Ie = !0, e.panTo(d, !0), e.applyConstraints?.(), Ie = !1);
	}, ze = (e) => {
		let t = [];
		return e.brightness !== 100 && t.push(`brightness(${e.brightness / 100})`), e.contrast !== 100 && t.push(`contrast(${e.contrast / 100})`), e.saturation !== 100 && t.push(`saturate(${e.saturation / 100})`), e.invert && t.push("invert(1)"), e.grayscale && t.push("grayscale(1)"), t.length > 0 ? t.join(" ") : "none";
	}, Be = {
		research: "#fb7185",
		transcription: "#60a5fa",
		highlights: "#34d399",
		mine: "#a78bfa"
	}, Ve = "#a78bfa", He = (e) => {
		let t = e ? Be[e] ?? Ve : Ve;
		return `stroke: ${t}; fill: rgba(${parseInt(t.slice(1, 3), 16) || 0}, ${parseInt(t.slice(3, 5), 16) || 0}, ${parseInt(t.slice(5, 7), 16) || 0}, 0.18);`;
	}, Ue = (e) => e.targetStyle?.trim() || He(e.targetStyleClass), We = (e) => e.label?.trim() || "", Ge = (e) => ({
		x: e.bounds.x + e.bounds.width / 2,
		y: e.bounds.y + e.bounds.height + 12
	}), Ke = (e) => {
		let t = e.split(";").map((e) => e.trim()).filter(Boolean).map((e) => {
			let t = e.indexOf(":");
			if (t < 0) return null;
			let n = e.slice(0, t).trim().toLowerCase(), r = e.slice(t + 1).trim();
			return !n || !r ? null : [n, r];
		}).filter((e) => !!e);
		return Object.fromEntries(t);
	}, qe = (e) => {
		let t = Ke(e), n = t.stroke, r = t.fill, i = Object.entries(t).filter(([e]) => e !== "stroke" && e !== "fill").map(([e, t]) => `${e}: ${t};`), a = [];
		return n && a.push(`border-color: ${n};`), r && a.push(`background: ${r};`), [...a, ...i].join(" ");
	}, Je = (e) => {
		Te()?.({ id: e });
	}, Ye = (e) => {
		j() === e && Te()?.({ id: null });
	}, q = (e) => {
		Ee()?.({ id: e });
	}, Xe = () => {
		De()?.();
	}, Ze = (e, t) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), q(t));
	}, Qe = (e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), Xe());
	}, J = (e) => !(!j() && !A() || j() && e === j() || A() && e === A()), $e = () => {
		if (!A()) {
			g(V, null);
			return;
		}
		let e = c(z).find((e) => e.id === A());
		if (!e) {
			g(V, null);
			return;
		}
		let t = e.text?.trim() || c(Fe);
		if (!t) {
			g(V, null);
			return;
		}
		let n = c(P)?.clientWidth ?? 0, r = e.bounds.x + e.bounds.width / 2, i = e.bounds.y + e.bounds.height + 10, a = n > 0 ? Math.max(12, n - 12) : 12, o = Math.min(Math.max(r, 12), a), s = n ? Math.min(320, Math.max(180, n * .6)) : 240;
		g(V, {
			id: e.id,
			text: t,
			x: o,
			y: i,
			maxWidth: s
		}, !0);
	}, et = () => {
		let e = k().filter((e) => e.rect || e.point || e.polygon);
		if (!c(F) || e.length === 0) {
			g(z, [], !0);
			return;
		}
		let t = D()[0]?.id, n = c(F).world?.getItemAt(0);
		if (t) {
			let e = c(F).world.getItemCount();
			for (let r = 0; r < e; r++) {
				let e = c(F).world.getItemAt(r), i = L.get(e) ?? "";
				if (i === t || i.endsWith(":" + t)) {
					n = e;
					break;
				}
			}
		}
		if (!n) {
			g(z, [], !0);
			return;
		}
		let r = new Set(ve()), i = (e, t) => {
			let r = n.imageToViewportRectangle(e, t, 0, 0), i = c(F).viewport.viewportToViewerElementRectangle(r);
			return {
				x: i.x,
				y: i.y
			};
		};
		g(z, e.map((e) => {
			let t = e.targetStyleClass, a = Ue(e);
			if (e.polygon?.points?.length) {
				let n = e.polygon.points.map((e) => i(e.x, e.y)), o = n.map((e) => `${e.x},${e.y}`).join(" "), s = n.map((e) => e.x), c = n.map((e) => e.y), l = Math.min(...s), u = Math.max(...s), d = Math.min(...c), f = Math.max(...c), p = e.polygon.svg && (e.polygon.svg.includes("<polyline") || e.polygon.svg.includes("<line"));
				return {
					id: e.id,
					type: p ? "polyline" : "polygon",
					points: o,
					bounds: {
						x: l,
						y: d,
						width: u - l,
						height: f - d
					},
					isHighlight: r.has(e.id),
					text: e.text,
					label: We(e),
					className: t,
					style: a
				};
			}
			if (e.point) {
				let n = i(e.point.x, e.point.y);
				return {
					id: e.id,
					type: "point",
					point: n,
					bounds: {
						x: n.x,
						y: n.y,
						width: 0,
						height: 0
					},
					isHighlight: r.has(e.id),
					text: e.text,
					label: We(e),
					className: t,
					style: qe(a)
				};
			}
			if (!e.rect) return null;
			let o = n.imageToViewportRectangle(e.rect.x, e.rect.y, e.rect.w, e.rect.h), s = c(F).viewport.viewportToViewerElementRectangle(o);
			return {
				id: e.id,
				type: "rect",
				rect: {
					x: s.x,
					y: s.y,
					width: s.width,
					height: s.height
				},
				bounds: {
					x: s.x,
					y: s.y,
					width: s.width,
					height: s.height
				},
				isHighlight: r.has(e.id),
				text: e.text,
				label: We(e),
				className: t,
				style: qe(a)
			};
		}).filter((e) => !!e), !0), $e();
	}, Y = () => {
		H === null && (H = requestAnimationFrame(() => {
			H = null, et();
		}));
	}, tt = () => {
		if (!c(F)?.viewport) return;
		let e = c(F).world?.getItemAt(0);
		if (!e) return;
		let t = c(F).viewport.getBounds(!0), n = e.viewportToImageRectangle(t), r = {
			x: n.x,
			y: n.y,
			w: n.width,
			h: n.height
		}, i = c(F).viewport.getZoom(!0), a = c(F).viewport.getHomeZoom?.();
		je = r, Me = i, we()?.({ viewBox: r }), Ce()?.({
			zoom: i,
			viewBox: r,
			...Number.isFinite(a) && a > 0 ? { homeZoom: a } : {}
		});
	}, nt = () => je, rt = () => Me, it = (e) => {
		if (!c(F)?.viewport || !c(F)?.world?.getItemAt(0)) return;
		let t = c(F).world.getItemAt(0), n = t.getContentSize?.();
		if (!n || n.x <= 0 || n.y <= 0) return;
		let r = n.x, i = n.y, a = { ...e };
		a.w > r && (a.w = r, a.x = 0), a.h > i && (a.h = i, a.y = 0), a.x < 0 && (a.x = Math.max(0, a.x)), a.y < 0 && (a.y = Math.max(0, a.y)), a.x + a.w > r && (a.x = Math.max(0, r - a.w)), a.y + a.h > i && (a.y = Math.max(0, i - a.h));
		let o = t.imageToViewportRectangle(a.x, a.y, a.w, a.h);
		c(F).viewport.fitBounds(o, !0);
		let s = typeof o.getCenter == "function" ? o.getCenter() : {
			x: o.x + o.width / 2,
			y: o.y + o.height / 2
		};
		c(F).viewport.panTo?.(s, !0), c(F).viewport.applyConstraints?.(!0), G = !0;
	}, at = (e) => {
		c(F)?.viewport && (c(F).viewport.zoomBy(e, void 0, !0), c(F).viewport.applyConstraints());
	}, ot = () => {
		c(F)?.viewport && (G = !1, c(F).viewport.goHome?.(!0), c(F).viewport.applyConstraints?.());
	}, st = (e) => {
		if (!c(F)?.viewport) return;
		let t = typeof c(F).viewport.getRotation == "function" ? c(F).viewport.getRotation() : 0;
		if (typeof c(F).viewport.setRotation == "function") {
			let n = t + e;
			c(F).viewport.setRotation(n), c(F).viewport.applyConstraints?.(), Oe()?.({ rotation: n });
		}
	}, ct = (e) => {
		!c(F)?.viewport || !Number.isFinite(e) || typeof c(F).viewport.setRotation == "function" && (c(F).viewport.setRotation(e), c(F).viewport.applyConstraints?.());
	}, lt = (e) => {
		g(Pe, ze(e), !0);
	};
	l(() => {
		let t = !1, n = null, r = null, i = null, a = null, o = () => {
			let e = (typeof performance < "u" ? performance.now() : 0) + 1500, t = 0, n = -1, r = -1, a = () => {
				if (i = null, !c(F) || !c(P) || U || G) return;
				let a = c(P).clientWidth, s = c(P).clientHeight;
				if (a <= 0 || s <= 0) {
					o();
					return;
				}
				let l = c(F).viewport?.getContainerSize?.(), u = !l || Math.abs(l.x - a) > 1 || Math.abs(l.y - s) > 1, d = a !== n || s !== r;
				n = a, r = s, u || d ? (c(F).forceResize?.(), c(F).viewport?.goHome?.(!0), c(F).viewport?.applyConstraints?.(), K(), Y(), t = 0) : t += 1;
				let f = typeof performance < "u" ? performance.now() : e;
				t < 2 && f < e && o();
			}, o = () => {
				i = requestAnimationFrame(a);
			};
			o();
		}, s = (e) => {
			let t = (typeof performance < "u" ? performance.now() : 0) + 1500, n = 0, r = -1, i = -1, o = () => {
				B = !1;
			}, s = () => {
				if (a = null, !c(F) || !c(P) || U) {
					o();
					return;
				}
				if (it(e), Y(), (typeof performance < "u" ? performance.now() : t) >= t) {
					o();
					return;
				}
				let s = c(P).clientWidth, u = c(P).clientHeight;
				if (s <= 0 || u <= 0) {
					l();
					return;
				}
				let d = c(F).viewport?.getContainerSize?.(), f = !d || Math.abs(d.x - s) > 1 || Math.abs(d.y - u) > 1, p = s !== r || u !== i;
				r = s, i = u, f || p ? (c(F).forceResize?.(), n = 0) : n += 1, n < 2 ? l() : o();
			}, l = () => {
				a = requestAnimationFrame(s);
			};
			B = !0, l();
		};
		return (async () => {
			if (!c(P)) return;
			let i = await import("./openseadragon-PhC8xKOg.js").then((t) => /* @__PURE__ */ e(t.default));
			if (t) return;
			let a = i.default || i;
			if (le(a), I = a, g(F, a({
				prefixUrl: "",
				showNavigationControl: !1,
				showHomeControl: !1,
				showFullPageControl: !1,
				showSequenceControl: !1,
				showZoomControl: !1,
				drawer: "canvas",
				animationTime: .5,
				minZoomImageRatio: .1,
				homeFillsViewer: !1,
				visibilityRatio: 1,
				constrainDuringPan: !0,
				gestureSettingsMouse: { clickToZoom: N()?.clickToZoomEnabled ?? !1 },
				preserveViewport: N()?.preserveViewport ?? !1,
				showNavigator: N()?.showNavigator ?? !1,
				showRotationControl: N()?.showRotationControl ?? !1,
				...be(),
				element: c(P),
				tileSources: null
			}), !0), typeof ResizeObserver < "u") {
				let e = 0, t = 0;
				n = new ResizeObserver(() => {
					if (!c(P) || !c(F)) return;
					let n = c(P).clientWidth, i = c(P).clientHeight;
					n <= 0 || i <= 0 || (n !== e || i !== t) && (e = n, t = i, r !== null && cancelAnimationFrame(r), r = requestAnimationFrame(() => {
						r = null, c(F)?.forceResize(), K(), c(F)?.viewport?.applyConstraints?.(), Y();
					}));
				}), n.observe(c(P));
			}
			let l = () => {
				K(), tt(), Y();
			};
			c(F).addHandler("open", () => {
				mt() || (g(R, !0), X = "", G = !1, ke()?.({ viewer: c(F) }), ct(xe()), Se() && !Ne ? (Ne = !0, s(Se())) : N()?.preserveViewport || o(), l());
			}), c(F).addHandler("zoom", l), c(F).addHandler("pan", l), c(F).addHandler("animation", () => {
				Y();
			}), c(F).addHandler("animation-finish", l), c(F).addHandler("resize", l), c(F).addHandler("fully-loaded-change", function() {
				if (!c(F) || !c(P) || U) return;
				let e = c(P).clientWidth, t = c(P).clientHeight;
				if (e <= 0 || t <= 0) return;
				let n = c(F).viewport?.getContainerSize?.();
				n && Math.abs(n.x - e) <= 1 && Math.abs(n.y - t) <= 1 || (c(F).forceResize?.(), !Se() && !G && c(F).viewport?.goHome?.(!0), c(F).viewport?.applyConstraints?.(), Y());
			}), c(F).addHandler("canvas-press", Le), c(F).addHandler("canvas-drag", Le), c(F).addHandler("canvas-scroll", Le), c(F).addHandler("canvas-pinch", Le), c(F).addHandler("canvas-drag-end", Re), c(F).addHandler("canvas-release", Re), c(F).addHandler("open-failed", (e) => {
				if (X = "", g(R, !1), !mt()) {
					let t = e;
					Ae()?.({ message: t.message || m()("viewer.stage.mediaError") });
				}
			}), ke()?.({ viewer: c(F) });
		})().catch((e) => {
			let t = e instanceof Error ? e.message : String(e);
			Ae()?.({ message: t });
		}), () => {
			H !== null && (cancelAnimationFrame(H), H = null), r !== null && (cancelAnimationFrame(r), r = null), a !== null && (cancelAnimationFrame(a), a = null), B = !1, i !== null && (cancelAnimationFrame(i), i = null), Re(), n?.disconnect(), t = !0, c(F)?.destroy();
		};
	});
	let ut = () => {
		let e = [];
		if (ye() && ye().length > 0) {
			let t = 0;
			for (let n of ye()) {
				let r = 0, i = 0, a = 1, o = n.height / n.width;
				M() === "two-page" ? n.index === 0 || n.index % 2 == 1 ? (r = 0, i = 0, a = 1) : (r = 1.02, i = 0, a = 1) : M() === "continuous" ? (r = 0, i = t, a = 1, t += o + .05) : (r = 0, i = 0, a = 1);
				let s = n.source.src.endsWith("info.json") ? n.source.src : {
					type: "image",
					url: n.source.src
				}, c = O()[n.source.id] === void 0 ? 1 : O()[n.source.id];
				if (e.push({
					customLayerId: `${n.id}:${n.source.id}`,
					canvasIndex: n.index,
					layerId: n.source.id,
					tileSource: s,
					x: r,
					y: i,
					width: a,
					isPrimary: !0,
					opacity: c
				}), n.layers && n.layers.length > 0) for (let t of n.layers) {
					let o = t.src.endsWith("info.json") ? t.src : {
						type: "image",
						url: t.src
					}, s = O()[t.id] === void 0 ? 0 : O()[t.id];
					e.push({
						customLayerId: `${n.id}:${t.id}`,
						canvasIndex: n.index,
						layerId: t.id,
						tileSource: o,
						x: r,
						y: i,
						width: a,
						isPrimary: !1,
						opacity: s
					});
				}
			}
		} else if (D() && D().length > 0) for (let t = 0; t < D().length; t++) {
			let n = D()[t], r = n.src.endsWith("info.json") ? n.src : {
				type: "image",
				url: n.src
			}, i = O()[n.id] === void 0 ? +(t === 0) : O()[n.id];
			e.push({
				customLayerId: n.id,
				canvasIndex: 0,
				layerId: n.id,
				tileSource: r,
				x: 0,
				y: 0,
				width: 1,
				isPrimary: t === 0,
				opacity: i
			});
		}
		else E() && e.push({
			customLayerId: "base",
			canvasIndex: 0,
			layerId: "base",
			tileSource: E(),
			x: 0,
			y: 0,
			width: 1,
			isPrimary: !0,
			opacity: 1
		});
		return e;
	}, dt = S(() => ut()), ft = x(""), X = "", Z = null, Q = /* @__PURE__ */ new Set(), pt = (e) => {
		if (c(F)) {
			if (c(F)._opening) {
				Z = e;
				return;
			}
			Z = null, X = e.customLayerId, g(R, !1), c(F).open(e.tileSource);
		}
	}, mt = () => {
		let e = Z;
		return !e || e.customLayerId === X ? (Z = null, !1) : (Z = null, X = "", pt(e), !0);
	};
	t(() => {
		if (!c(F)) return;
		let e = c(dt)[0];
		if (e) {
			let t = e.customLayerId;
			t !== c(ft) && (g(ft, t, !0), Q.clear(), pt(e));
		} else g(ft, ""), X = "", Z = null, g(R, !1), Q.clear(), c(F).close();
	}), t(() => {
		if (!c(F) || !c(R) || !I) return;
		let e = c(dt), t = c(F).world.getItemCount(), n = [];
		for (let e = 0; e < t; e++) n.push(c(F).world.getItemAt(e));
		let r = e[0], i = n[0];
		if (i && r) {
			L.set(i, r.customLayerId), i.setOpacity(r.opacity);
			let e = i.getBounds();
			(e.x !== r.x || e.y !== r.y) && i.setPosition(new I.Point(r.x, r.y)), e.width !== r.width && i.setWidth(r.width);
		}
		let a = e.slice(1);
		n.slice(1).forEach((e) => {
			let t = L.get(e);
			t && (a.some((e) => e.customLayerId === t) || c(F).world.removeItem(e));
		}), a.forEach((e) => {
			let t = n.find((t) => L.get(t) === e.customLayerId);
			if (t) {
				t.setOpacity(e.opacity);
				let n = t.getBounds();
				(n.x !== e.x || n.y !== e.y) && t.setPosition(new I.Point(e.x, e.y)), n.width !== e.width && t.setWidth(e.width);
			} else {
				if (Q.has(e.customLayerId)) return;
				Q.add(e.customLayerId);
				let t = {
					tileSource: e.tileSource,
					x: e.x,
					y: e.y,
					width: e.width,
					opacity: e.opacity,
					success: (t) => {
						Q.delete(e.customLayerId);
						let n = t.item;
						L.set(n, e.customLayerId);
						let r = ut().find((t) => t.customLayerId === e.customLayerId);
						if (!r) {
							c(F).world.removeItem(n);
							return;
						}
						n.setOpacity(r.opacity);
						let i = new I.Point(r.x, r.y);
						n.setPosition(i), n.setWidth(r.width);
					},
					error: (t) => {
						console.error(`Failed to load tile source for layer ${e.customLayerId}:`, t), Q.delete(e.customLayerId);
					},
					failure: (t) => {
						console.error(`Failed to load tile source for layer ${e.customLayerId}:`, t), Q.delete(e.customLayerId);
					}
				};
				c(F).addTiledImage(t);
			}
		});
	}), t(() => {
		c(F) && (E(), k(), ve(), Y());
	}), t(() => {
		c(F) && (A(), c(Fe), c(z), $e());
	});
	var ht = {
		getViewBox: nt,
		getZoom: rt,
		setViewBox: it,
		zoomBy: at,
		goHome: ot,
		rotateBy: st,
		setRotation: ct,
		setFilters: lt
	}, $ = ge(), gt = w($);
	ae(gt, (e) => g(P, e), () => c(P));
	var _t = v(gt, 2), vt = w(_t);
	re(vt, 21, () => c(z), (e) => e.id, (e, t) => {
		var n = se(), i = ie(n), l = (e) => {
			var n = de();
			let i;
			var l = S(() => b(() => q(c(t).id))), p = w(n), m = (e) => {
				var n = ue(), r = w(n, !0);
				a(n), u(() => s(r, c(t).text)), d(e, n);
			};
			y(p, (e) => {
				c(t).text && e(m);
			}), a(n), u((e) => {
				i = r(n, 0, `annotation-shape ${c(t).isHighlight ? "annotation--hit" : ""} ${c(t).className ?? "" ?? ""}`, "svelte-16dhwsm", i, e), _(n, "points", c(t).points), f(n, c(t).style), _(n, "data-annotation-id", c(t).id);
			}, [() => ({
				"annotation--dimmed": J(c(t).id),
				"annotation--active": c(t).id === A()
			})]), o("mouseenter", n, () => Je(c(t).id)), o("mouseleave", n, () => Ye(c(t).id)), h("click", n, function(...e) {
				c(l)?.apply(this, e);
			}), h("keydown", n, (e) => Ze(e, c(t).id)), d(e, n);
		}, p = (e) => {
			var n = fe();
			let i;
			var l = S(() => b(() => q(c(t).id))), p = w(n), m = (e) => {
				var n = ue(), r = w(n, !0);
				a(n), u(() => s(r, c(t).text)), d(e, n);
			};
			y(p, (e) => {
				c(t).text && e(m);
			}), a(n), u((e) => {
				i = r(n, 0, `annotation-shape annotation-shape--polyline ${c(t).isHighlight ? "annotation--hit" : ""} ${c(t).className ?? "" ?? ""}`, "svelte-16dhwsm", i, e), _(n, "points", c(t).points), f(n, c(t).style), _(n, "data-annotation-id", c(t).id);
			}, [() => ({
				"annotation--dimmed": J(c(t).id),
				"annotation--active": c(t).id === A()
			})]), o("mouseenter", n, () => Je(c(t).id)), o("mouseleave", n, () => Ye(c(t).id)), h("click", n, function(...e) {
				c(l)?.apply(this, e);
			}), h("keydown", n, (e) => Ze(e, c(t).id)), d(e, n);
		};
		y(i, (e) => {
			c(t).type === "polygon" && c(t).points ? e(l) : c(t).type === "polyline" && c(t).points && e(p, 1);
		}), d(e, n);
	}), a(vt);
	var yt = v(vt, 2);
	re(yt, 17, () => c(z), (e) => e.id, (e, t) => {
		var n = se(), i = ie(n), a = (e) => {
			var n = pe();
			let i;
			var a = S(() => b(() => q(c(t).id)));
			u((e) => {
				i = r(n, 1, `annotation ${c(t).isHighlight ? "annotation--hit" : ""} ${c(t).className ?? "" ?? ""}`, "svelte-16dhwsm", i, e), f(n, `
            left: ${c(t).rect.x ?? ""}px;
            top: ${c(t).rect.y ?? ""}px;
            width: ${c(t).rect.width ?? ""}px;
            height: ${c(t).rect.height ?? ""}px;
            ${c(t).style ?? "" ?? ""}
          `), _(n, "title", c(t).text), _(n, "data-annotation-id", c(t).id);
			}, [() => ({
				"annotation--dimmed": J(c(t).id),
				"annotation--active": c(t).id === A()
			})]), o("mouseenter", n, () => Je(c(t).id)), o("mouseleave", n, () => Ye(c(t).id)), h("click", n, function(...e) {
				c(a)?.apply(this, e);
			}), h("keydown", n, (e) => Ze(e, c(t).id)), d(e, n);
		}, s = (e) => {
			var n = pe();
			let i;
			var a = S(() => b(() => q(c(t).id)));
			u((e) => {
				i = r(n, 1, `annotation annotation--point ${c(t).isHighlight ? "annotation--hit" : ""} ${c(t).className ?? "" ?? ""}`, "svelte-16dhwsm", i, e), f(n, `
            left: ${c(t).point.x ?? ""}px;
            top: ${c(t).point.y ?? ""}px;
            ${c(t).style ?? "" ?? ""}
          `), _(n, "title", c(t).text), _(n, "data-annotation-id", c(t).id);
			}, [() => ({
				"annotation--dimmed": J(c(t).id),
				"annotation--active": c(t).id === A()
			})]), o("mouseenter", n, () => Je(c(t).id)), o("mouseleave", n, () => Ye(c(t).id)), h("click", n, function(...e) {
				c(a)?.apply(this, e);
			}), h("keydown", n, (e) => Ze(e, c(t).id)), d(e, n);
		};
		y(i, (e) => {
			c(t).type === "rect" && c(t).rect ? e(a) : c(t).type === "point" && c(t).point && e(s, 1);
		}), d(e, n);
	});
	var bt = v(yt, 2);
	re(bt, 17, () => c(z), (e) => e.id, (e, t) => {
		var n = se(), i = ie(n), o = (e) => {
			let n = S(() => Ge(c(t)));
			var i = me();
			let o;
			var l = w(i, !0);
			a(i), u((e) => {
				o = r(i, 1, "annotation-label svelte-16dhwsm", null, o, e), f(i, `left: ${c(n).x ?? ""}px; top: ${c(n).y ?? ""}px;`), s(l, c(t).label);
			}, [() => ({ "annotation-label--dimmed": J(c(t).id) })]), d(e, i);
		};
		y(i, (e) => {
			c(t).label && e(o);
		}), d(e, n);
	});
	var xt = v(bt, 2), St = (e) => {
		var t = he(), n = w(t, !0);
		a(t), u(() => {
			f(t, `left: ${c(V).x ?? ""}px; top: ${c(V).y ?? ""}px; max-width: ${c(V).maxWidth ?? ""}px;`), s(n, c(V).text);
		}), d(e, t);
	};
	y(xt, (e) => {
		c(V) && e(St);
	}), a(_t), a($), u((e) => {
		f($, `--osd-canvas-filter: ${c(Pe) ?? ""};`), _($, "aria-label", e);
	}, [() => m()("renderers.osd.label")]), h("click", $, Xe), h("keydown", $, Qe), d(n, $);
	var Ct = i(ht);
	return _e(), Ct;
}
p(["click", "keydown"]);
//#endregion
//#region src/lib/renderers/ImageRenderer.svelte
var E = {
	supportsZoom: !0,
	supportsFilters: !0,
	supportsPan: !0,
	supportsViewBox: !0,
	supportsRotation: !0,
	isInteractive: !0
}, D = n("<div class=\"image-placeholder svelte-ggurt8\"> </div>");
function O(e, t) {
	oe(t, !0);
	let n = () => ee(ce, "$t", r), [r, o] = ne(), l = C(t, "source", 3, null), f = C(t, "layers", 19, () => []), p = C(t, "layerOpacities", 19, () => ({})), m = C(t, "annotations", 19, () => []), h = C(t, "highlightIds", 19, () => []), te = C(t, "activeAnnotationId", 3, null), _ = C(t, "hoverAnnotationId", 3, null), v = C(t, "layoutMode", 3, "single"), re = C(t, "activeLayoutImages", 19, () => []), b = C(t, "osdConfig", 19, () => ({})), T = C(t, "legacyOsdConfig", 3, void 0), le = C(t, "rotation", 3, 0), ue = C(t, "initialViewBox", 3, null), de = C(t, "onzoomChange", 3, void 0), fe = C(t, "onviewBoxChange", 3, void 0), pe = C(t, "onannotationHover", 3, void 0), me = C(t, "onannotationSelect", 3, void 0), he = C(t, "onannotationClear", 3, void 0), ge = C(t, "onrotationChange", 3, void 0), E = C(t, "onviewerready", 3, void 0), O = C(t, "onloaderror", 3, void 0), k = x(null), ve = S(() => A(l())), A = (e) => e ? e.src.endsWith("info.json") ? e.src : {
		type: "image",
		url: e.src
	} : null;
	var j = {
		getViewBox: () => c(k)?.getViewBox?.() ?? null,
		setViewBox: (e) => {
			c(k)?.setViewBox?.(e);
		},
		zoomBy: (e) => {
			c(k)?.zoomBy?.(e);
		},
		goHome: () => {
			c(k)?.goHome?.();
		},
		rotateBy: (e) => {
			c(k)?.rotateBy?.(e);
		},
		setRotation: (e) => {
			c(k)?.setRotation?.(e);
		},
		setImageFilters: (e) => {
			c(k)?.setFilters?.(e);
		}
	}, M = se(), ye = ie(M), be = (e) => {
		ae(_e(e, {
			get tileSource() {
				return c(ve);
			},
			get layers() {
				return f();
			},
			get layerOpacities() {
				return p();
			},
			get annotations() {
				return m();
			},
			get highlightIds() {
				return h();
			},
			get activeAnnotationId() {
				return te();
			},
			get hoverAnnotationId() {
				return _();
			},
			get layoutMode() {
				return v();
			},
			get activeLayoutImages() {
				return re();
			},
			get osdConfig() {
				return b();
			},
			get legacyOsdConfig() {
				return T();
			},
			get rotation() {
				return le();
			},
			get initialViewBox() {
				return ue();
			},
			onviewboxchange: (e) => fe()?.(e),
			onzoomchange: (e) => de()?.(e),
			onrotationchange: (e) => ge()?.(e),
			onannotationhover: (e) => pe()?.(e),
			onannotationselect: (e) => me()?.(e),
			onannotationclear: () => he()?.(),
			get onviewerready() {
				return E();
			},
			get onloaderror() {
				return O();
			}
		}), (e) => g(k, e, !0), () => c(k));
	}, N = (e) => {
		var t = D(), r = w(t, !0);
		a(t), u((e) => s(r, e), [() => n()("renderers.image.noSource")]), d(e, t);
	};
	y(ye, (e) => {
		c(ve) ? e(be) : e(N, -1);
	}), d(e, M);
	var xe = i(j);
	return o(), xe;
}
//#endregion
export { E as capabilities, O as default };
