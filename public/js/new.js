if (function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document)throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = !!t && "length" in t && t.length, n = ht.type(t);
            return "function" !== n && !ht.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function i(t, e, n) {
            if (ht.isFunction(e))return ht.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType)return ht.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (Ct.test(e))return ht.filter(e, t, n);
                e = ht.filter(e, t)
            }
            return ht.grep(t, function (t) {
                return ht.inArray(t, e) > -1 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function r(t) {
            var e = {};
            return ht.each(t.match($t) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(), ht.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Rt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Pt.test(n) ? ht.parseJSON(n) : n)
                    } catch (t) {
                    }
                    ht.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function u(t) {
            var e;
            for (e in t)if (("data" !== e || !ht.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
            return !0
        }

        function c(t, e, n, i) {
            if (Lt(t)) {
                var o, r, s = ht.expando, a = t.nodeType, l = a ? ht.cache : t, u = a ? t[s] : t[s] && s;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)return u || (u = a ? t[s] = nt.pop() || ht.guid++ : s), l[u] || (l[u] = a ? {} : {toJSON: ht.noop}), "object" != typeof e && "function" != typeof e || (i ? l[u] = ht.extend(l[u], e) : l[u].data = ht.extend(l[u].data, e)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ht.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[ht.camelCase(e)])) : o = r, o
            }
        }

        function d(t, e, n) {
            if (Lt(t)) {
                var i, o, r = t.nodeType, s = r ? ht.cache : t, a = r ? t[ht.expando] : ht.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        ht.isArray(e) ? e = e.concat(ht.map(e, ht.camelCase)) : e in i ? e = [e] : (e = ht.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;)delete i[e[o]];
                        if (n ? !u(i) : !ht.isEmptyObject(i))return
                    }
                    (n || (delete s[a].data, u(s[a]))) && (r ? ht.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                }
            }
        }

        function p(t, e, n, i) {
            var o, r = 1, s = 20, a = i ? function () {
                    return i.cur()
                } : function () {
                    return ht.css(t, e, "")
                }, l = a(), u = n && n[3] || (ht.cssNumber[e] ? "" : "px"),
                c = (ht.cssNumber[e] || "px" !== u && +l) && qt.exec(ht.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do r = r || ".5", c /= r, ht.style(t, e, c + u); while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }

        function h(t) {
            var e = zt.split("|"), n = t.createDocumentFragment();
            if (n.createElement)for (; e.length;)n.createElement(e.pop());
            return n
        }

        function f(t, e) {
            var n, i, o = 0,
                r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
            if (!r)for (r = [], n = t.childNodes || t; null != (i = n[o]); o++)!e || ht.nodeName(i, e) ? r.push(i) : ht.merge(r, f(i, e));
            return void 0 === e || e && ht.nodeName(t, e) ? ht.merge([t], r) : r
        }

        function m(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++)ht._data(n, "globalEval", !e || ht._data(e[i], "globalEval"))
        }

        function g(t) {
            Mt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function v(t, e, n, i, o) {
            for (var r, s, a, l, u, c, d, p = t.length, v = h(e), y = [],
                     b = 0; b < p; b++)if (s = t[b], s || 0 === s)if ("object" === ht.type(s)) ht.merge(y, s.nodeType ? [s] : s); else if (Vt.test(s)) {
                for (l = l || v.appendChild(e.createElement("div")), u = (Wt.exec(s) || ["", ""])[1].toLowerCase(), d = Ut[u] || Ut._default, l.innerHTML = d[1] + ht.htmlPrefilter(s) + d[2], r = d[0]; r--;)l = l.lastChild;
                if (!dt.leadingWhitespace && Bt.test(s) && y.push(e.createTextNode(Bt.exec(s)[0])), !dt.tbody)for (s = "table" !== u || Xt.test(s) ? "<table>" !== d[1] || Xt.test(s) ? 0 : l : l.firstChild, r = s && s.childNodes.length; r--;)ht.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (ht.merge(y, l.childNodes), l.textContent = ""; l.firstChild;)l.removeChild(l.firstChild);
                l = v.lastChild
            } else y.push(e.createTextNode(s));
            for (l && v.removeChild(l), dt.appendChecked || ht.grep(f(y, "input"), g), b = 0; s = y[b++];)if (i && ht.inArray(s, i) > -1) o && o.push(s); else if (a = ht.contains(s.ownerDocument, s), l = f(v.appendChild(s), "script"), a && m(l), n)for (r = 0; s = l[r++];)_t.test(s.type || "") && n.push(s);
            return l = null, v
        }

        function y() {
            return !0
        }

        function b() {
            return !1
        }

        function w() {
            try {
                return it.activeElement
            } catch (t) {
            }
        }

        function x(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e)x(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = b; else if (!o)return t;
            return 1 === r && (s = o, o = function (t) {
                return ht().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = ht.guid++)), t.each(function () {
                ht.event.add(this, e, o, i, n)
            })
        }

        function T(t, e) {
            return ht.nodeName(t, "table") && ht.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function C(t) {
            return t.type = (null !== ht.find.attr(t, "type")) + "/" + t.type, t
        }

        function S(t) {
            var e = oe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function E(t, e) {
            if (1 === e.nodeType && ht.hasData(t)) {
                var n, i, o, r = ht._data(t), s = ht._data(e, r), a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)for (i = 0, o = a[n].length; i < o; i++)ht.event.add(e, n, a[n][i])
                }
                s.data && (s.data = ht.extend({}, s.data))
            }
        }

        function k(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !dt.noCloneEvent && e[ht.expando]) {
                    o = ht._data(e);
                    for (i in o.events)ht.removeEvent(e, i, o.handle);
                    e.removeAttribute(ht.expando)
                }
                "script" === n && e.text !== t.text ? (C(e).text = t.text, S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !ht.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Mt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
            }
        }

        function A(t, e, n, i) {
            e = rt.apply([], e);
            var o, r, s, a, l, u, c = 0, d = t.length, p = d - 1, h = e[0], m = ht.isFunction(h);
            if (m || d > 1 && "string" == typeof h && !dt.checkClone && ie.test(h))return t.each(function (o) {
                var r = t.eq(o);
                m && (e[0] = h.call(this, o, r.html())), A(r, e, n, i)
            });
            if (d && (u = v(e, t[0].ownerDocument, !1, t, i), o = u.firstChild, 1 === u.childNodes.length && (u = o), o || i)) {
                for (a = ht.map(f(u, "script"), C), s = a.length; c < d; c++)r = u, c !== p && (r = ht.clone(r, !0, !0), s && ht.merge(a, f(r, "script"))), n.call(t[c], r, c);
                if (s)for (l = a[a.length - 1].ownerDocument, ht.map(a, S), c = 0; c < s; c++)r = a[c], _t.test(r.type || "") && !ht._data(r, "globalEval") && ht.contains(l, r) && (r.src ? ht._evalUrl && ht._evalUrl(r.src) : ht.globalEval((r.text || r.textContent || r.innerHTML || "").replace(re, "")));
                u = o = null
            }
            return t
        }

        function I(t, e, n) {
            for (var i, o = e ? ht.filter(e, t) : t,
                     r = 0; null != (i = o[r]); r++)n || 1 !== i.nodeType || ht.cleanData(f(i)), i.parentNode && (n && ht.contains(i.ownerDocument, i) && m(f(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function $(t, e) {
            var n = ht(e.createElement(t)).appendTo(e.body), i = ht.css(n[0], "display");
            return n.detach(), i
        }

        function N(t) {
            var e = it, n = ue[t];
            return n || (n = $(t, e), "none" !== n && n || (le = (le || ht("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), n = $(t, e), le.detach()), ue[t] = n), n
        }

        function D(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function L(t) {
            if (t in Se)return t;
            for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--;)if (t = Ce[n] + e, t in Se)return t
        }

        function P(t, e) {
            for (var n, i, o, r = [], s = 0,
                     a = t.length; s < a; s++)i = t[s], i.style && (r[s] = ht._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ht(i) && (r[s] = ht._data(i, "olddisplay", N(i.nodeName)))) : (o = Ht(i), (n && "none" !== n || !o) && ht._data(i, "olddisplay", o ? n : ht.css(i, "display"))));
            for (s = 0; s < a; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function R(t, e, n) {
            var i = we.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function j(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
                     s = 0; r < 4; r += 2)"margin" === n && (s += ht.css(t, n + Ot[r], !0, o)), i ? ("content" === n && (s -= ht.css(t, "padding" + Ot[r], !0, o)), "margin" !== n && (s -= ht.css(t, "border" + Ot[r] + "Width", !0, o))) : (s += ht.css(t, "padding" + Ot[r], !0, o), "padding" !== n && (s += ht.css(t, "border" + Ot[r] + "Width", !0, o)));
            return s
        }

        function q(t, e, n) {
            var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = fe(t),
                s = dt.boxSizing && "border-box" === ht.css(t, "boxSizing", !1, r);
            if (o <= 0 || null == o) {
                if (o = me(t, e, r), (o < 0 || null == o) && (o = t.style[e]), de.test(o))return o;
                i = s && (dt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + j(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function O(t, e, n, i, o) {
            return new O.prototype.init(t, e, n, i, o)
        }

        function H() {
            return t.setTimeout(function () {
                Ee = void 0
            }), Ee = ht.now()
        }

        function F(t, e) {
            var n, i = {height: t}, o = 0;
            for (e = e ? 1 : 0; o < 4; o += 2 - e)n = Ot[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function M(t, e, n) {
            for (var i, o = (B.tweeners[e] || []).concat(B.tweeners["*"]), r = 0,
                     s = o.length; r < s; r++)if (i = o[r].call(n, e, t))return i
        }

        function W(t, e, n) {
            var i, o, r, s, a, l, u, c, d = this, p = {}, h = t.style, f = t.nodeType && Ht(t),
                m = ht._data(t, "fxshow");
            n.queue || (a = ht._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, d.always(function () {
                d.always(function () {
                    a.unqueued--, ht.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = ht.css(t, "display"), c = "none" === u ? ht._data(t, "olddisplay") || N(t.nodeName) : u, "inline" === c && "none" === ht.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", dt.shrinkWrapBlocks() || d.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in e)if (o = e[i], Ae.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i])continue;
                    f = !0
                }
                p[i] = m && m[i] || ht.style(t, i)
            } else u = void 0;
            if (ht.isEmptyObject(p)) "inline" === ("none" === u ? N(t.nodeName) : u) && (h.display = u); else {
                m ? "hidden" in m && (f = m.hidden) : m = ht._data(t, "fxshow", {}), r && (m.hidden = !f), f ? ht(t).show() : d.done(function () {
                    ht(t).hide()
                }), d.done(function () {
                    var e;
                    ht._removeData(t, "fxshow");
                    for (e in p)ht.style(t, e, p[e])
                });
                for (i in p)s = M(f ? m[i] : 0, i, d), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function _(t, e) {
            var n, i, o, r, s;
            for (n in t)if (i = ht.camelCase(n), o = e[i], r = t[n], ht.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = ht.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete t[i];
                for (n in r)n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
        }

        function B(t, e, n) {
            var i, o, r = 0, s = B.prefilters.length, a = ht.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o)return !1;
                for (var e = Ee || H(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0,
                         r = 1 - i, s = 0, l = u.tweens.length; s < l; s++)u.tweens[s].run(r);
                return a.notifyWith(t, [u, r, n]), r < 1 && l ? n : (a.resolveWith(t, [u]), !1)
            }, u = a.promise({
                elem: t,
                props: ht.extend({}, e),
                opts: ht.extend(!0, {specialEasing: {}, easing: ht.easing._default}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ee || H(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = ht.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? u.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; n < i; n++)u.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }), c = u.props;
            for (_(c, u.opts.specialEasing); r < s; r++)if (i = B.prefilters[r].call(u, t, c, u.opts))return ht.isFunction(i.stop) && (ht._queueHooks(u.elem, u.opts.queue).stop = ht.proxy(i.stop, i)), i;
            return ht.map(c, M, u), ht.isFunction(u.opts.start) && u.opts.start.call(t, u), ht.fx.timer(ht.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function z(t) {
            return ht.attr(t, "class") || ""
        }

        function U(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0, r = e.toLowerCase().match($t) || [];
                if (ht.isFunction(n))for (; i = r[o++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function V(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, ht.each(t[a] || [], function (t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }

            var r = {}, s = t === Je;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function X(t, e) {
            var n, i, o = ht.ajaxSettings.flatOptions || {};
            for (i in e)void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ht.extend(!0, t, n), t
        }

        function Q(t, e, n) {
            for (var i, o, r, s, a = t.contents,
                     l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)for (s in a)if (a[s] && a[s].test(o)) {
                l.unshift(s);
                break
            }
            if (l[0] in n) r = l[0]; else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            if (r)return r !== l[0] && l.unshift(r), n[r]
        }

        function Y(t, e, n, i) {
            var o, r, s, a, l, u = {}, c = t.dataTypes.slice();
            if (c[1])for (s in t.converters)u[s.toLowerCase()] = t.converters[s];
            for (r = c.shift(); r;)if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                if (s = u[l + " " + r] || u["* " + r], !s)for (o in u)if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                    s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                    break
                }
                if (s !== !0)if (s && t["throws"]) e = s(e); else try {
                    e = s(e)
                } catch (t) {
                    return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: e}
        }

        function G(t) {
            return t.style && t.style.display || ht.css(t, "display")
        }

        function K(t) {
            if (!ht.contains(t.ownerDocument || it, t))return !0;
            for (; t && 1 === t.nodeType;) {
                if ("none" === G(t) || "hidden" === t.type)return !0;
                t = t.parentNode
            }
            return !1
        }

        function J(t, e, n, i) {
            var o;
            if (ht.isArray(e)) ht.each(e, function (e, o) {
                n || on.test(t) ? i(t, o) : J(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            }); else if (n || "object" !== ht.type(e)) i(t, e); else for (o in e)J(t + "[" + o + "]", e[o], n, i)
        }

        function Z() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {
            }
        }

        function tt() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }

        function et(t) {
            return ht.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }

        var nt = [], it = t.document, ot = nt.slice, rt = nt.concat, st = nt.push, at = nt.indexOf, lt = {},
            ut = lt.toString, ct = lt.hasOwnProperty, dt = {}, pt = "1.12.4", ht = function (t, e) {
                return new ht.fn.init(t, e)
            }, ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, mt = /^-ms-/, gt = /-([\da-z])/gi, vt = function (t, e) {
                return e.toUpperCase()
            };
        ht.fn = ht.prototype = {
            jquery: pt, constructor: ht, selector: "", length: 0, toArray: function () {
                return ot.call(this)
            }, get: function (t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : ot.call(this)
            }, pushStack: function (t) {
                var e = ht.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t) {
                return ht.each(this, t)
            }, map: function (t) {
                return this.pushStack(ht.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(ot.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: st, sort: nt.sort, splice: nt.splice
        }, ht.extend = ht.fn.extend = function () {
            var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ht.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)if (null != (o = arguments[a]))for (i in o)t = s[i], n = o[i], s !== n && (u && n && (ht.isPlainObject(n) || (e = ht.isArray(n))) ? (e ? (e = !1, r = t && ht.isArray(t) ? t : []) : r = t && ht.isPlainObject(t) ? t : {}, s[i] = ht.extend(u, r, n)) : void 0 !== n && (s[i] = n));
            return s
        }, ht.extend({
            expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === ht.type(t)
            }, isArray: Array.isArray || function (t) {
                return "array" === ht.type(t)
            }, isWindow: function (t) {
                return null != t && t == t.window
            }, isNumeric: function (t) {
                var e = t && t.toString();
                return !ht.isArray(t) && e - parseFloat(e) + 1 >= 0
            }, isEmptyObject: function (t) {
                var e;
                for (e in t)return !1;
                return !0
            }, isPlainObject: function (t) {
                var e;
                if (!t || "object" !== ht.type(t) || t.nodeType || ht.isWindow(t))return !1;
                try {
                    if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf"))return !1
                } catch (t) {
                    return !1
                }
                if (!dt.ownFirst)for (e in t)return ct.call(t, e);
                for (e in t);
                return void 0 === e || ct.call(t, e)
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
            }, globalEval: function (e) {
                e && ht.trim(e) && (t.execScript || function (e) {
                    t.eval.call(t, e)
                })(e)
            }, camelCase: function (t) {
                return t.replace(mt, "ms-").replace(gt, vt)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e) {
                var i, o = 0;
                if (n(t))for (i = t.length; o < i && e.call(t[o], o, t[o]) !== !1; o++); else for (o in t)if (e.call(t[o], o, t[o]) === !1)break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(ft, "")
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ht.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
            }, inArray: function (t, e, n) {
                var i;
                if (e) {
                    if (at)return at.call(e, t, n);
                    for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)if (n in e && e[n] === t)return n
                }
                return -1
            }, merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n;)t[o++] = e[i++];
                if (n !== n)for (; void 0 !== e[i];)t[o++] = e[i++];
                return t.length = o, t
            }, grep: function (t, e, n) {
                for (var i, o = [], r = 0, s = t.length, a = !n; r < s; r++)i = !e(t[r], r), i !== a && o.push(t[r]);
                return o
            }, map: function (t, e, i) {
                var o, r, s = 0, a = [];
                if (n(t))for (o = t.length; s < o; s++)r = e(t[s], s, i), null != r && a.push(r); else for (s in t)r = e(t[s], s, i), null != r && a.push(r);
                return rt.apply([], a)
            }, guid: 1, proxy: function (t, e) {
                var n, i, o;
                if ("string" == typeof e && (o = t[e], e = t, t = o), ht.isFunction(t))return n = ot.call(arguments, 2), i = function () {
                    return t.apply(e || this, n.concat(ot.call(arguments)))
                }, i.guid = t.guid = t.guid || ht.guid++, i
            }, now: function () {
                return +new Date
            }, support: dt
        }), "function" == typeof Symbol && (ht.fn[Symbol.iterator] = nt[Symbol.iterator]), ht.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            lt["[object " + e + "]"] = e.toLowerCase()
        });
        var yt = function (t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, u, d, h, f = e && e.ownerDocument, m = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)return n;
                if (!i && ((e ? e.ownerDocument || e : M) !== L && D(e), e = e || L, R)) {
                    if (11 !== m && (u = vt.exec(t)))if (o = u[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(o)))return n;
                            if (s.id === o)return n.push(s), n
                        } else if (f && (s = f.getElementById(o)) && H(e, s) && s.id === o)return n.push(s), n
                    } else {
                        if (u[2])return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = u[3]) && x.getElementsByClassName && e.getElementsByClassName)return J.apply(n, e.getElementsByClassName(o)), n
                    }
                    if (x.qsa && !U[t + " "] && (!j || !j.test(t))) {
                        if (1 !== m) f = e, h = t; else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = F), d = E(t), r = d.length, l = pt.test(a) ? "#" + a : "[id='" + a + "']"; r--;)d[r] = l + " " + p(d[r]);
                            h = d.join(","), f = yt.test(t) && c(e.parentNode) || e
                        }
                        if (h)try {
                            return J.apply(n, f.querySelectorAll(h)), n
                        } catch (t) {
                        } finally {
                            a === F && e.removeAttribute("id")
                        }
                    }
                }
                return A(t.replace(at, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[F] = !0, t
            }

            function o(t) {
                var e = L.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = n.length; i--;)T.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {
            }

            function p(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++)i += t[e].value;
                return i
            }

            function h(t, e, n) {
                var i = e.dir, o = n && "parentNode" === i, r = _++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];)if (1 === e.nodeType || o)return t(e, n, r)
                } : function (e, n, s) {
                    var a, l, u, c = [W, r];
                    if (s) {
                        for (; e = e[i];)if ((1 === e.nodeType || o) && t(e, n, s))return !0
                    } else for (; e = e[i];)if (1 === e.nodeType || o) {
                        if (u = e[F] || (e[F] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === W && a[1] === r)return c[2] = a[2];
                        if (l[i] = c, c[2] = t(e, n, s))return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;)if (!t[o](e, n, i))return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var o = 0, r = n.length; o < r; o++)e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length,
                         u = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));
                return s
            }

            function v(t, e, n, o, r, s) {
                return o && !o[F] && (o = v(o)), r && !r[F] && (r = v(r, s)), i(function (i, s, a, l) {
                    var u, c, d, p = [], h = [], f = s.length, v = i || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : g(v, p, t, a, l), b = n ? r || (i ? t : f || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)for (u = g(b, h), o(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[h[c]] = !(y[h[c]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                r(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(d = b[c]) && (u = r ? tt(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else b = g(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : J.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0,
                         l = h(function (t) {
                             return t === e
                         }, s, !0), u = h(function (t) {
                        return tt(e, t) > -1
                    }, s, !0), c = [function (t, n, i) {
                        var o = !r && (i || n !== I) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, o
                    }]; a < o; a++)if (n = T.relative[t[a].type]) c = [h(f(c), n)]; else {
                    if (n = T.filter[t[a].type].apply(null, t[a].matches), n[F]) {
                        for (i = ++a; i < o && !T.relative[t[i].type]; i++);
                        return v(a > 1 && f(c), a > 1 && p(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), n, a < i && y(t.slice(a, i)), i < o && y(t = t.slice(i)), i < o && p(t))
                    }
                    c.push(n)
                }
                return f(c)
            }

            function b(t, n) {
                var o = n.length > 0, r = t.length > 0, s = function (i, s, a, l, u) {
                    var c, d, p, h = 0, f = "0", m = i && [], v = [], y = I, b = i || r && T.find.TAG("*", u),
                        w = W += null == y ? 1 : Math.random() || .1, x = b.length;
                    for (u && (I = s === L || s || u); f !== x && null != (c = b[f]); f++) {
                        if (r && c) {
                            for (d = 0, s || c.ownerDocument === L || (D(c), a = !R); p = t[d++];)if (p(c, s || L, a)) {
                                l.push(c);
                                break
                            }
                            u && (W = w)
                        }
                        o && ((c = !p && c) && h--, i && m.push(c))
                    }
                    if (h += f, o && f !== h) {
                        for (d = 0; p = n[d++];)p(m, v, s, a);
                        if (i) {
                            if (h > 0)for (; f--;)m[f] || v[f] || (v[f] = G.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (W = w, I = y), m
                };
                return o ? i(s) : s
            }

            var w, x, T, C, S, E, k, A, I, $, N, D, L, P, R, j, q, O, H, F = "sizzle" + 1 * new Date, M = t.document,
                W = 0, _ = 0, B = n(), z = n(), U = n(), V = function (t, e) {
                    return t === e && (N = !0), 0
                }, X = 1 << 31, Q = {}.hasOwnProperty, Y = [], G = Y.pop, K = Y.push, J = Y.push, Z = Y.slice,
                tt = function (t, e) {
                    for (var n = 0, i = t.length; n < i; n++)if (t[n] === e)return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                lt = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), dt = new RegExp(rt),
                pt = new RegExp("^" + it + "$"), ht = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it + "|[*])"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                }, ft = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), xt = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, Tt = function () {
                    D()
                };
            try {
                J.apply(Y = Z.call(M.childNodes), M.childNodes), Y[M.childNodes.length].nodeType
            } catch (t) {
                J = {
                    apply: Y.length ? function (t, e) {
                        K.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, S = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, D = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : M;
                return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, P = L.documentElement, R = !S(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), x.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function (t) {
                    return t.appendChild(L.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = gt.test(L.getElementsByClassName), x.getById = o(function (t) {
                    return P.appendChild(t).id = F, !L.getElementsByName || !L.getElementsByName(F).length
                }), x.getById ? (T.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && R) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function (t) {
                    var e = t.replace(wt, xt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function (t) {
                    var e = t.replace(wt, xt);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = x.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, T.find.CLASS = x.getElementsByClassName && function (t, e) {
                        if ("undefined" != typeof e.getElementsByClassName && R)return e.getElementsByClassName(t)
                    }, q = [], j = [], (x.qsa = gt.test(L.querySelectorAll)) && (o(function (t) {
                    P.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || j.push(".#.+[+~]")
                }), o(function (t) {
                    var e = L.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
                })), (x.matchesSelector = gt.test(O = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function (t) {
                    x.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), q.push("!=", rt)
                }), j = j.length && new RegExp(j.join("|")), q = q.length && new RegExp(q.join("|")), e = gt.test(P.compareDocumentPosition), H = e || gt.test(P.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, V = e ? function (t, e) {
                    if (t === e)return N = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === L || t.ownerDocument === M && H(M, t) ? -1 : e === L || e.ownerDocument === M && H(M, e) ? 1 : $ ? tt($, t) - tt($, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e)return N = !0, 0;
                    var n, i = 0, o = t.parentNode, r = e.parentNode, a = [t], l = [e];
                    if (!o || !r)return t === L ? -1 : e === L ? 1 : o ? -1 : r ? 1 : $ ? tt($, t) - tt($, e) : 0;
                    if (o === r)return s(t, e);
                    for (n = t; n = n.parentNode;)a.unshift(n);
                    for (n = e; n = n.parentNode;)l.unshift(n);
                    for (; a[i] === l[i];)i++;
                    return i ? s(a[i], l[i]) : a[i] === M ? -1 : l[i] === M ? 1 : 0
                }, L) : L
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== L && D(t), n = n.replace(ct, "='$1']"), x.matchesSelector && R && !U[n + " "] && (!q || !q.test(n)) && (!j || !j.test(n)))try {
                    var i = O.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                } catch (t) {
                }
                return e(n, L, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== L && D(t), H(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== L && D(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && Q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0;
                return void 0 !== i ? i : x.attributes || !R ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if (N = !x.detectDuplicates, $ = !x.sortStable && t.slice(0), t.sort(V), N) {
                    for (; e = t[o++];)e === t[o] && (i = n.push(o));
                    for (; i--;)t.splice(n[i], 1)
                }
                return $ = null, t
            }, C = e.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += C(t)
                    } else if (3 === o || 4 === o)return t.nodeValue
                } else for (; e = t[i++];)n += C(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(wt, xt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, n, i) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    }, CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var u, c, d, p, h, f, m = r !== s ? "nextSibling" : "previousSibling", g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (p = e; p = p[m];)if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (p = g, d = p[F] || (p[F] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[t] || [], h = u[0] === W && u[1], b = h && u[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();)if (1 === p.nodeType && ++b && p === e) {
                                        c[t] = [W, h, b];
                                        break
                                    }
                                } else if (y && (p = e, d = p[F] || (p[F] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[t] || [], h = u[0] === W && u[1], b = h), b === !1)for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[F] || (p[F] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[t] = [W, b]), p !== e)););
                                return b -= o, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, n) {
                        var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[F] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;)i = tt(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function (t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], o = k(t.replace(at, "$1"));
                        return o[F] ? i(function (t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function (t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return t = t.replace(wt, xt), function (e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(), function (e) {
                            var n;
                            do if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === P
                    }, focus: function (t) {
                        return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                        return !0
                    }, parent: function (t) {
                        return !T.pseudos.empty(t)
                    }, header: function (t) {
                        return mt.test(t.nodeName)
                    }, input: function (t) {
                        return ft.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: u(function () {
                        return [0]
                    }), last: u(function (t, e) {
                        return [e - 1]
                    }), eq: u(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }), even: u(function (t, e) {
                        for (var n = 0; n < e; n += 2)t.push(n);
                        return t
                    }), odd: u(function (t, e) {
                        for (var n = 1; n < e; n += 2)t.push(n);
                        return t
                    }), lt: u(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;)t.push(i);
                        return t
                    }), gt: u(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;)t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[w] = a(w);
            for (w in{submit: !0, reset: !0})T.pseudos[w] = l(w);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = e.tokenize = function (t, n) {
                var i, o, r, s, a, l, u, c = z[t + " "];
                if (c)return n ? 0 : c.slice(0);
                for (a = t, l = [], u = T.preFilter; a;) {
                    i && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(at, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter)!(o = ht[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i)break
                }
                return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
            }, k = e.compile = function (t, e) {
                var n, i = [], o = [], r = U[t + " "];
                if (!r) {
                    for (e || (e = E(t)), n = e.length; n--;)r = y(e[n]), r[F] ? i.push(r) : o.push(r);
                    r = U(t, b(o, i)), r.selector = t
                }
                return r
            }, A = e.select = function (t, e, n, i) {
                var o, r, s, a, l, u = "function" == typeof t && t, d = !i && E(t = u.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && R && T.relative[r[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(wt, xt), e) || [])[0], !e)return n;
                        u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = ht.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)if ((l = T.find[a]) && (i = l(s.matches[0].replace(wt, xt), yt.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = i.length && p(r), !t)return J.apply(n, i), n;
                        break
                    }
                }
                return (u || k(t, d))(i, e, !R, n, !e || yt.test(t) && c(e.parentNode) || e), n
            }, x.sortStable = F.split("").sort(V).join("") === F, x.detectDuplicates = !!N, D(), x.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(L.createElement("div"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (t, e, n) {
                if (!n)return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())return t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function (t, e, n) {
                var i;
                if (!n)return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ht.find = yt, ht.expr = yt.selectors, ht.expr[":"] = ht.expr.pseudos, ht.uniqueSort = ht.unique = yt.uniqueSort, ht.text = yt.getText, ht.isXMLDoc = yt.isXML, ht.contains = yt.contains;
        var bt = function (t, e, n) {
            for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
                if (o && ht(t).is(n))break;
                i.push(t)
            }
            return i
        }, wt = function (t, e) {
            for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
            return n
        }, xt = ht.expr.match.needsContext, Tt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Ct = /^.[^:#\[\.,]*$/;
        ht.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ht.find.matchesSelector(i, t) ? [i] : [] : ht.find.matches(t, ht.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, ht.fn.extend({
            find: function (t) {
                var e, n = [], i = this, o = i.length;
                if ("string" != typeof t)return this.pushStack(ht(t).filter(function () {
                    for (e = 0; e < o; e++)if (ht.contains(i[e], this))return !0
                }));
                for (e = 0; e < o; e++)ht.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? ht.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            }, filter: function (t) {
                return this.pushStack(i(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(i(this, t || [], !0))
            }, is: function (t) {
                return !!i(this, "string" == typeof t && xt.test(t) ? ht(t) : t || [], !1).length
            }
        });
        var St, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kt = ht.fn.init = function (t, e, n) {
            var i, o;
            if (!t)return this;
            if (n = n || St, "string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Et.exec(t), !i || !i[1] && e)return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ht ? e[0] : e, ht.merge(this, ht.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), Tt.test(i[1]) && ht.isPlainObject(e))for (i in e)ht.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (o = it.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2])return St.find(t);
                    this.length = 1, this[0] = o
                }
                return this.context = it, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ht.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ht) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ht.makeArray(t, this))
        };
        kt.prototype = ht.fn, St = ht(it);
        var At = /^(?:parents|prev(?:Until|All))/, It = {children: !0, contents: !0, next: !0, prev: !0};
        ht.fn.extend({
            has: function (t) {
                var e, n = ht(t, this), i = n.length;
                return this.filter(function () {
                    for (e = 0; e < i; e++)if (ht.contains(this, n[e]))return !0
                })
            }, closest: function (t, e) {
                for (var n, i = 0, o = this.length, r = [],
                         s = xt.test(t) || "string" != typeof t ? ht(t, e || this.context) : 0; i < o; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ht.find.matchesSelector(n, t))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? ht.uniqueSort(r) : r)
            }, index: function (t) {
                return t ? "string" == typeof t ? ht.inArray(this[0], ht(t)) : ht.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(ht.uniqueSort(ht.merge(this.get(), ht(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ht.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return bt(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return bt(t, "parentNode", n)
            }, next: function (t) {
                return o(t, "nextSibling")
            }, prev: function (t) {
                return o(t, "previousSibling")
            }, nextAll: function (t) {
                return bt(t, "nextSibling")
            }, prevAll: function (t) {
                return bt(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return bt(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return bt(t, "previousSibling", n)
            }, siblings: function (t) {
                return wt((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return wt(t.firstChild)
            }, contents: function (t) {
                return ht.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ht.merge([], t.childNodes)
            }
        }, function (t, e) {
            ht.fn[t] = function (n, i) {
                var o = ht.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ht.filter(i, o)), this.length > 1 && (It[t] || (o = ht.uniqueSort(o)), At.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var $t = /\S+/g;
        ht.Callbacks = function (t) {
            t = "string" == typeof t ? r(t) : ht.extend({}, t);
            var e, n, i, o, s = [], a = [], l = -1, u = function () {
                for (o = t.once, i = e = !0; a.length; l = -1)for (n = a.shift(); ++l < s.length;)s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1), e = !1, o && (s = n ? [] : "")
            }, c = {
                add: function () {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function e(n) {
                        ht.each(n, function (n, i) {
                            ht.isFunction(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== ht.type(i) && e(i)
                        })
                    }(arguments), n && !e && u()), this
                }, remove: function () {
                    return ht.each(arguments, function (t, e) {
                        for (var n; (n = ht.inArray(e, s, n)) > -1;)s.splice(n, 1), n <= l && l--
                    }), this
                }, has: function (t) {
                    return t ? ht.inArray(t, s) > -1 : s.length > 0
                }, empty: function () {
                    return s && (s = []), this
                }, disable: function () {
                    return o = a = [], s = n = "", this
                }, disabled: function () {
                    return !s
                }, lock: function () {
                    return o = !0, n || c.disable(), this
                }, locked: function () {
                    return !!o
                }, fireWith: function (t, n) {
                    return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return c
        }, ht.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", ht.Callbacks("once memory"), "resolved"], ["reject", "fail", ht.Callbacks("once memory"), "rejected"], ["notify", "progress", ht.Callbacks("memory")]],
                    n = "pending", i = {
                        state: function () {
                            return n
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return ht.Deferred(function (n) {
                                ht.each(e, function (e, r) {
                                    var s = ht.isFunction(t[e]) && t[e];
                                    o[r[1]](function () {
                                        var t = s && s.apply(this, arguments);
                                        t && ht.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? ht.extend(t, i) : i
                        }
                    }, o = {};
                return i.pipe = i.then, ht.each(e, function (t, r) {
                    var s = r[2], a = r[3];
                    i[r[1]] = s.add, a && s.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e, n, i, o = 0, r = ot.call(arguments), s = r.length,
                    a = 1 !== s || t && ht.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ht.Deferred(),
                    u = function (t, n, i) {
                        return function (o) {
                            n[t] = this, i[t] = arguments.length > 1 ? ot.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); o < s; o++)r[o] && ht.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, e)).done(u(o, i, r)).fail(l.reject) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var Nt;
        ht.fn.ready = function (t) {
            return ht.ready.promise().done(t), this
        }, ht.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? ht.readyWait++ : ht.ready(!0)
            }, ready: function (t) {
                (t === !0 ? --ht.readyWait : ht.isReady) || (ht.isReady = !0, t !== !0 && --ht.readyWait > 0 || (Nt.resolveWith(it, [ht]), ht.fn.triggerHandler && (ht(it).triggerHandler("ready"), ht(it).off("ready"))))
            }
        }), ht.ready.promise = function (e) {
            if (!Nt)if (Nt = ht.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll) t.setTimeout(ht.ready); else if (it.addEventListener) it.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a); else {
                it.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && it.documentElement
                } catch (t) {
                }
                n && n.doScroll && !function e() {
                    if (!ht.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return t.setTimeout(e, 50)
                        }
                        s(), ht.ready()
                    }
                }()
            }
            return Nt.promise(e)
        }, ht.ready.promise();
        var Dt;
        for (Dt in ht(dt))break;
        dt.ownFirst = "0" === Dt, dt.inlineBlockNeedsLayout = !1, ht(function () {
            var t, e, n, i;
            n = it.getElementsByTagName("body")[0], n && n.style && (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }), function () {
            var t = it.createElement("div");
            dt.deleteExpando = !0;
            try {
                delete t.test
            } catch (t) {
                dt.deleteExpando = !1
            }
            t = null
        }();
        var Lt = function (t) {
            var e = ht.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
        }, Pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Rt = /([A-Z])/g;
        ht.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (t) {
                return t = t.nodeType ? ht.cache[t[ht.expando]] : t[ht.expando], !!t && !u(t)
            },
            data: function (t, e, n) {
                return c(t, e, n)
            },
            removeData: function (t, e) {
                return d(t, e)
            },
            _data: function (t, e, n) {
                return c(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return d(t, e, !0)
            }
        }), ht.fn.extend({
            data: function (t, e) {
                var n, i, o, r = this[0], s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = ht.data(r), 1 === r.nodeType && !ht._data(r, "parsedAttrs"))) {
                        for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ht.camelCase(i.slice(5)), l(r, i, o[i])));
                        ht._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    ht.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    ht.data(this, t, e)
                }) : r ? l(r, t, ht.data(r, t)) : void 0
            }, removeData: function (t) {
                return this.each(function () {
                    ht.removeData(this, t)
                })
            }
        }), ht.extend({
            queue: function (t, e, n) {
                var i;
                if (t)return e = (e || "fx") + "queue", i = ht._data(t, e), n && (!i || ht.isArray(n) ? i = ht._data(t, e, ht.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = ht.queue(t, e), i = n.length, o = n.shift(), r = ht._queueHooks(t, e), s = function () {
                    ht.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return ht._data(t, n) || ht._data(t, n, {
                        empty: ht.Callbacks("once memory").add(function () {
                            ht._removeData(t, e + "queue"), ht._removeData(t, n)
                        })
                    })
            }
        }), ht.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ht.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = ht.queue(this, t, e);
                    ht._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ht.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    ht.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, o = ht.Deferred(), r = this, s = this.length, a = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)n = ht._data(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        }), function () {
            var t;
            dt.shrinkWrapBlocks = function () {
                if (null != t)return t;
                t = !1;
                var e, n, i;
                return n = it.getElementsByTagName("body")[0], n && n.style ? (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(it.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            qt = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"), Ot = ["Top", "Right", "Bottom", "Left"],
            Ht = function (t, e) {
                return t = e || t, "none" === ht.css(t, "display") || !ht.contains(t.ownerDocument, t)
            }, Ft = function (t, e, n, i, o, r, s) {
                var a = 0, l = t.length, u = null == n;
                if ("object" === ht.type(n)) {
                    o = !0;
                    for (a in n)Ft(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, ht.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                        return u.call(ht(t), n)
                    })), e))for (; a < l; a++)e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
            }, Mt = /^(?:checkbox|radio)$/i, Wt = /<([\w:-]+)/, _t = /^$|\/(?:java|ecma)script/i, Bt = /^\s+/,
            zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        !function () {
            var t = it.createElement("div"), e = it.createDocumentFragment(), n = it.createElement("input");
            t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", dt.leadingWhitespace = 3 === t.firstChild.nodeType, dt.tbody = !t.getElementsByTagName("tbody").length, dt.htmlSerialize = !!t.getElementsByTagName("link").length, dt.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), dt.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = it.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.noCloneEvent = !!t.addEventListener, t[ht.expando] = 1, dt.attributes = !t.getAttribute(ht.expando)
        }();
        var Ut = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ut.optgroup = Ut.option, Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead, Ut.th = Ut.td;
        var Vt = /<|&#?\w+;/, Xt = /<tbody/i;
        !function () {
            var e, n, i = it.createElement("div");
            for (e in{
                submit: !0,
                change: !0,
                focusin: !0
            })n = "on" + e, (dt[e] = n in t) || (i.setAttribute(n, "t"), dt[e] = i.attributes[n].expando === !1);
            i = null
        }();
        var Qt = /^(?:input|select|textarea)$/i, Yt = /^key/, Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Kt = /^(?:focusinfocus|focusoutblur)$/, Jt = /^([^.]*)(?:\.(.+)|)/;
        ht.event = {
            global: {},
            add: function (t, e, n, i, o) {
                var r, s, a, l, u, c, d, p, h, f, m, g = ht._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ht.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function (t) {
                        return "undefined" == typeof ht || t && ht.event.triggered === t.type ? void 0 : ht.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match($t) || [""], a = e.length; a--;)r = Jt.exec(e[a]) || [], h = m = r[1], f = (r[2] || "").split(".").sort(), h && (u = ht.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = ht.event.special[h] || {}, d = ht.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ht.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, l), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && u.setup.call(t, i, f, c) !== !1 || (t.addEventListener ? t.addEventListener(h, c, !1) : t.attachEvent && t.attachEvent("on" + h, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ht.event.global[h] = !0);
                    t = null
                }
            },
            remove: function (t, e, n, i, o) {
                var r, s, a, l, u, c, d, p, h, f, m, g = ht.hasData(t) && ht._data(t);
                if (g && (c = g.events)) {
                    for (e = (e || "").match($t) || [""], u = e.length; u--;)if (a = Jt.exec(e[u]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (d = ht.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = c[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;)s = p[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, d.remove && d.remove.call(t, s));
                        l && !p.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || ht.removeEvent(t, h, g.handle), delete c[h])
                    } else for (h in c)ht.event.remove(t, h + e[u], n, i, !0);
                    ht.isEmptyObject(c) && (delete g.handle, ht._removeData(t, "events"))
                }
            },
            trigger: function (e, n, i, o) {
                var r, s, a, l, u, c, d, p = [i || it], h = ct.call(e, "type") ? e.type : e,
                    f = ct.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = c = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !Kt.test(h + ht.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), s = h.indexOf(":") < 0 && "on" + h, e = e[ht.expando] ? e : new ht.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ht.makeArray(n, [e]), u = ht.event.special[h] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!o && !u.noBubble && !ht.isWindow(i)) {
                        for (l = u.delegateType || h, Kt.test(l + h) || (a = a.parentNode); a; a = a.parentNode)p.push(a), c = a;
                        c === (i.ownerDocument || it) && p.push(c.defaultView || c.parentWindow || t)
                    }
                    for (d = 0; (a = p[d++]) && !e.isPropagationStopped();)e.type = d > 1 ? l : u.bindType || h, r = (ht._data(a, "events") || {})[e.type] && ht._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && Lt(a) && (e.result = r.apply(a, n), e.result === !1 && e.preventDefault());
                    if (e.type = h, !o && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && Lt(i) && s && i[h] && !ht.isWindow(i)) {
                        c = i[s], c && (i[s] = null), ht.event.triggered = h;
                        try {
                            i[h]()
                        } catch (t) {
                        }
                        ht.event.triggered = void 0, c && (i[s] = c)
                    }
                    return e.result
                }
            },
            dispatch: function (t) {
                t = ht.event.fix(t);
                var e, n, i, o, r, s = [], a = ot.call(arguments), l = (ht._data(this, "events") || {})[t.type] || [],
                    u = ht.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (s = ht.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, i = ((ht.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, o, r, s = [], a = e.delegateCount, l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (i = [], n = 0; n < a; n++)r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? ht(o, this).index(l) > -1 : ht.find(o, this, null, [l]).length), i[o] && i.push(r);
                    i.length && s.push({elem: l, handlers: i})
                }
                return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
            },
            fix: function (t) {
                if (t[ht.expando])return t;
                var e, n, i, o = t.type, r = t, s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Gt.test(o) ? this.mouseHooks : Yt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ht.Event(r), e = i.length; e--;)n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, o, r = e.button, s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== w() && this.focus)try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === w() && this.blur)return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if (ht.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                    }, _default: function (t) {
                        return ht.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n) {
                var i = ht.extend(new ht.Event, n, {type: t, isSimulated: !0});
                ht.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
            }
        }, ht.removeEvent = it.removeEventListener ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        } : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
        }, ht.Event = function (t, e) {
            return this instanceof ht.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && ht.extend(this, e), this.timeStamp = t && t.timeStamp || ht.now(), void(this[ht.expando] = !0)) : new ht.Event(t, e)
        }, ht.Event.prototype = {
            constructor: ht.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ht.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            ht.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, o = t.relatedTarget, r = t.handleObj;
                    return o && (o === i || ht.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), dt.submit || (ht.event.special.submit = {
            setup: function () {
                return !ht.nodeName(this, "form") && void ht.event.add(this, "click._submit keypress._submit", function (t) {
                        var e = t.target,
                            n = ht.nodeName(e, "input") || ht.nodeName(e, "button") ? ht.prop(e, "form") : void 0;
                        n && !ht._data(n, "submit") && (ht.event.add(n, "submit._submit", function (t) {
                            t._submitBubble = !0
                        }), ht._data(n, "submit", !0))
                    })
            }, postDispatch: function (t) {
                t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ht.event.simulate("submit", this.parentNode, t))
            }, teardown: function () {
                return !ht.nodeName(this, "form") && void ht.event.remove(this, "._submit")
            }
        }), dt.change || (ht.event.special.change = {
            setup: function () {
                return Qt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ht.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                }), ht.event.add(this, "click._change", function (t) {
                    this._justChanged && !t.isTrigger && (this._justChanged = !1), ht.event.simulate("change", this, t)
                })), !1) : void ht.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    Qt.test(e.nodeName) && !ht._data(e, "change") && (ht.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ht.event.simulate("change", this.parentNode, t)
                    }), ht._data(e, "change", !0))
                })
            }, handle: function (t) {
                var e = t.target;
                if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)return t.handleObj.handler.apply(this, arguments)
            }, teardown: function () {
                return ht.event.remove(this, "._change"), !Qt.test(this.nodeName)
            }
        }), dt.focusin || ht.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                ht.event.simulate(e, t.target, ht.event.fix(t))
            };
            ht.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = ht._data(i, e);
                    o || i.addEventListener(t, n, !0), ht._data(i, e, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = ht._data(i, e) - 1;
                    o ? ht._data(i, e, o) : (i.removeEventListener(t, n, !0), ht._removeData(i, e))
                }
            }
        }), ht.fn.extend({
            on: function (t, e, n, i) {
                return x(this, t, e, n, i)
            }, one: function (t, e, n, i) {
                return x(this, t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj)return i = t.handleObj, ht(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t)this.off(o, e, t[o]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = b), this.each(function () {
                    ht.event.remove(this, t, n, e)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    ht.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n)return ht.event.trigger(t, e, n, !0)
            }
        });
        var Zt = / jQuery\d+="(?:null|\d+)"/g, te = new RegExp("<(?:" + zt + ")[\\s/>]", "i"),
            ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ne = /<script|<style|<link/i, ie = /checked\s*(?:[^=]|=\s*.checked.)/i, oe = /^true\/(.*)/,
            re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, se = h(it), ae = se.appendChild(it.createElement("div"));
        ht.extend({
            htmlPrefilter: function (t) {
                return t.replace(ee, "<$1></$2>")
            }, clone: function (t, e, n) {
                var i, o, r, s, a, l = ht.contains(t.ownerDocument, t);
                if (dt.html5Clone || ht.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(r = ae.firstChild)), !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ht.isXMLDoc(t)))for (i = f(r), a = f(t), s = 0; null != (o = a[s]); ++s)i[s] && k(o, i[s]);
                if (e)if (n)for (a = a || f(t), i = i || f(r), s = 0; null != (o = a[s]); s++)E(o, i[s]); else E(t, r);
                return i = f(r, "script"), i.length > 0 && m(i, !l && f(t, "script")), i = a = o = null, r
            }, cleanData: function (t, e) {
                for (var n, i, o, r, s = 0, a = ht.expando, l = ht.cache, u = dt.attributes,
                         c = ht.event.special; null != (n = t[s]); s++)if ((e || Lt(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)for (i in r.events)c[i] ? ht.event.remove(n, i) : ht.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), nt.push(o))
                }
            }
        }), ht.fn.extend({
            domManip: A, detach: function (t) {
                return I(this, t, !0)
            }, remove: function (t) {
                return I(this, t)
            }, text: function (t) {
                return Ft(this, function (t) {
                    return void 0 === t ? ht.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
                }, null, t, arguments.length)
            }, append: function () {
                return A(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = T(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return A(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = T(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return A(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return A(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ht.cleanData(f(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                    t.options && ht.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return ht.clone(this, t, e)
                })
            }, html: function (t) {
                return Ft(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                    if ("string" == typeof t && !ne.test(t) && (dt.htmlSerialize || !te.test(t)) && (dt.leadingWhitespace || !Bt.test(t)) && !Ut[(Wt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ht.htmlPrefilter(t);
                        try {
                            for (; n < i; n++)e = this[n] || {}, 1 === e.nodeType && (ht.cleanData(f(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return A(this, arguments, function (e) {
                    var n = this.parentNode;
                    ht.inArray(this, t) < 0 && (ht.cleanData(f(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), ht.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            ht.fn[t] = function (t) {
                for (var n, i = 0, o = [], r = ht(t),
                         s = r.length - 1; i <= s; i++)n = i === s ? this : this.clone(!0), ht(r[i])[e](n), st.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var le, ue = {HTML: "block", BODY: "block"}, ce = /^margin/,
            de = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"), pe = function (t, e, n, i) {
                var o, r, s = {};
                for (r in e)s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e)t.style[r] = s[r];
                return o
            }, he = it.documentElement;
        !function () {
            function e() {
                var e, c, d = it.documentElement;
                d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = a = !1, i = s = !0, t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, o = "4px" === (c || {width: "4px"}).width, u.style.marginRight = "50%", i = "4px" === (c || {marginRight: "4px"}).marginRight, e = u.appendChild(it.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", r = 0 === u.getClientRects().length, r && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"),
                    e[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === e[0].offsetHeight, r && (e[0].style.display = "", e[1].style.display = "none", r = 0 === e[0].offsetHeight)), d.removeChild(l)
            }

            var n, i, o, r, s, a, l = it.createElement("div"), u = it.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", dt.opacity = "0.5" === u.style.opacity, dt.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === u.style.backgroundClip, l = it.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), dt.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ht.extend(dt, {
                reliableHiddenOffsets: function () {
                    return null == n && e(), r
                }, boxSizingReliable: function () {
                    return null == n && e(), o
                }, pixelMarginRight: function () {
                    return null == n && e(), i
                }, pixelPosition: function () {
                    return null == n && e(), n
                }, reliableMarginRight: function () {
                    return null == n && e(), s
                }, reliableMarginLeft: function () {
                    return null == n && e(), a
                }
            }))
        }();
        var fe, me, ge = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (fe = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        }, me = function (t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || fe(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || ht.contains(t.ownerDocument, t) || (s = ht.style(t, e)), n && !dt.pixelMarginRight() && de.test(s) && ce.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 === s ? s : s + ""
        }) : he.currentStyle && (fe = function (t) {
                return t.currentStyle
            }, me = function (t, e, n) {
                var i, o, r, s, a = t.style;
                return n = n || fe(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), de.test(s) && !ge.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
            });
        var ve = /alpha\([^)]*\)/i, ye = /opacity\s*=\s*([^)]*)/i, be = /^(none|table(?!-c[ea]).+)/,
            we = new RegExp("^(" + jt + ")(.*)$", "i"),
            xe = {position: "absolute", visibility: "hidden", display: "block"},
            Te = {letterSpacing: "0", fontWeight: "400"}, Ce = ["Webkit", "O", "Moz", "ms"],
            Se = it.createElement("div").style;
        ht.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = me(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": dt.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = ht.camelCase(e), l = t.style;
                    if (e = ht.cssProps[a] || (ht.cssProps[a] = L(a) || a), s = ht.cssHooks[e] || ht.cssHooks[a], void 0 === n)return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                    if (r = typeof n, "string" === r && (o = qt.exec(n)) && o[1] && (n = p(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (ht.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i)))))try {
                        l[e] = n
                    } catch (t) {
                    }
                }
            },
            css: function (t, e, n, i) {
                var o, r, s, a = ht.camelCase(e);
                return e = ht.cssProps[a] || (ht.cssProps[a] = L(a) || a), s = ht.cssHooks[e] || ht.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = me(t, e, i)), "normal" === r && e in Te && (r = Te[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), ht.each(["height", "width"], function (t, e) {
            ht.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n)return be.test(ht.css(t, "display")) && 0 === t.offsetWidth ? pe(t, xe, function () {
                        return q(t, e, i)
                    }) : q(t, e, i)
                }, set: function (t, n, i) {
                    var o = i && fe(t);
                    return R(t, n, i ? j(t, e, i, dt.boxSizing && "border-box" === ht.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), dt.opacity || (ht.cssHooks.opacity = {
            get: function (t, e) {
                return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            }, set: function (t, e) {
                var n = t.style, i = t.currentStyle, o = ht.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ht.trim(r.replace(ve, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ve.test(r) ? r.replace(ve, o) : r + " " + o)
            }
        }), ht.cssHooks.marginRight = D(dt.reliableMarginRight, function (t, e) {
            if (e)return pe(t, {display: "inline-block"}, me, [t, "marginRight"])
        }), ht.cssHooks.marginLeft = D(dt.reliableMarginLeft, function (t, e) {
            if (e)return (parseFloat(me(t, "marginLeft")) || (ht.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - pe(t, {marginLeft: 0}, function () {
                        return t.getBoundingClientRect().left
                    }) : 0)) + "px"
        }), ht.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            ht.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {},
                             r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)o[t + Ot[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ce.test(t) || (ht.cssHooks[t + e].set = R)
        }), ht.fn.extend({
            css: function (t, e) {
                return Ft(this, function (t, e, n) {
                    var i, o, r = {}, s = 0;
                    if (ht.isArray(e)) {
                        for (i = fe(t), o = e.length; s < o; s++)r[e[s]] = ht.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? ht.style(t, e, n) : ht.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return P(this, !0)
            }, hide: function () {
                return P(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Ht(this) ? ht(this).show() : ht(this).hide()
                })
            }
        }), ht.Tween = O, O.prototype = {
            constructor: O, init: function (t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || ht.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ht.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = O.propHooks[this.prop];
                return t && t.get ? t.get(this) : O.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = O.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ht.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ht.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                }, set: function (t) {
                    ht.fx.step[t.prop] ? ht.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ht.cssProps[t.prop]] && !ht.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ht.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ht.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, ht.fx = O.prototype.init, ht.fx.step = {};
        var Ee, ke, Ae = /^(?:toggle|show|hide)$/, Ie = /queueHooks$/;
        ht.Animation = ht.extend(B, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return p(n.elem, t, qt.exec(e), n), n
                }]
            }, tweener: function (t, e) {
                ht.isFunction(t) ? (e = t, t = ["*"]) : t = t.match($t);
                for (var n, i = 0,
                         o = t.length; i < o; i++)n = t[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
            }, prefilters: [W], prefilter: function (t, e) {
                e ? B.prefilters.unshift(t) : B.prefilters.push(t)
            }
        }), ht.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? ht.extend({}, t) : {
                complete: n || !n && e || ht.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ht.isFunction(e) && e
            };
            return i.duration = ht.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ht.fx.speeds ? ht.fx.speeds[i.duration] : ht.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ht.isFunction(i.old) && i.old.call(this), i.queue && ht.dequeue(this, i.queue)
            }, i
        }, ht.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Ht).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var o = ht.isEmptyObject(t), r = ht.speed(e, n, i), s = function () {
                    var e = B(this, ht.extend({}, t), r);
                    (o || ht._data(this, "finish")) && e.stop(!0)
                };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, o = null != t && t + "queueHooks", r = ht.timers, s = ht._data(this);
                    if (o) s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && Ie.test(o) && i(s[o]);
                    for (o = r.length; o--;)r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    !e && n || ht.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = ht._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = ht.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ht.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < s; e++)i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ht.each(["toggle", "show", "hide"], function (t, e) {
            var n = ht.fn[e];
            ht.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, i, o)
            }
        }), ht.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            ht.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ht.timers = [], ht.fx.tick = function () {
            var t, e = ht.timers, n = 0;
            for (Ee = ht.now(); n < e.length; n++)t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || ht.fx.stop(), Ee = void 0
        }, ht.fx.timer = function (t) {
            ht.timers.push(t), t() ? ht.fx.start() : ht.timers.pop()
        }, ht.fx.interval = 13, ht.fx.start = function () {
            ke || (ke = t.setInterval(ht.fx.tick, ht.fx.interval))
        }, ht.fx.stop = function () {
            t.clearInterval(ke), ke = null
        }, ht.fx.speeds = {slow: 600, fast: 200, _default: 400}, ht.fn.delay = function (e, n) {
            return e = ht.fx ? ht.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
                var o = t.setTimeout(n, e);
                i.stop = function () {
                    t.clearTimeout(o)
                }
            })
        }, function () {
            var t, e = it.createElement("input"), n = it.createElement("div"), i = it.createElement("select"),
                o = i.appendChild(it.createElement("option"));
            n = it.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", dt.getSetAttribute = "t" !== n.className, dt.style = /top/.test(t.getAttribute("style")), dt.hrefNormalized = "/a" === t.getAttribute("href"), dt.checkOn = !!e.value, dt.optSelected = o.selected, dt.enctype = !!it.createElement("form").enctype, i.disabled = !0, dt.optDisabled = !o.disabled, e = it.createElement("input"), e.setAttribute("value", ""), dt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), dt.radioValue = "t" === e.value
        }();
        var $e = /\r/g, Ne = /[\x20\t\r\n\f]+/g;
        ht.fn.extend({
            val: function (t) {
                var e, n, i, o = this[0];
                {
                    if (arguments.length)return i = ht.isFunction(t), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, ht(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ht.isArray(o) && (o = ht.map(o, function (t) {
                                return null == t ? "" : t + ""
                            })), e = ht.valHooks[this.type] || ht.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o)return e = ht.valHooks[o.type] || ht.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace($e, "") : null == n ? "" : n)
                }
            }
        }), ht.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = ht.find.attr(t, "value");
                        return null != e ? e : ht.trim(ht.text(t)).replace(Ne, " ")
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0,
                                 s = r ? null : [], a = r ? o + 1 : i.length,
                                 l = o < 0 ? a : r ? o : 0; l < a; l++)if (n = i[l], (n.selected || l === o) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ht.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ht(n).val(), r)return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, i, o = t.options, r = ht.makeArray(e),
                                 s = o.length; s--;)if (i = o[s], ht.inArray(ht.valHooks.option.get(i), r) > -1)try {
                            i.selected = n = !0
                        } catch (t) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ht.each(["radio", "checkbox"], function () {
            ht.valHooks[this] = {
                set: function (t, e) {
                    if (ht.isArray(e))return t.checked = ht.inArray(ht(t).val(), e) > -1
                }
            }, dt.checkOn || (ht.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var De, Le, Pe = ht.expr.attrHandle, Re = /^(?:checked|selected)$/i, je = dt.getSetAttribute, qe = dt.input;
        ht.fn.extend({
            attr: function (t, e) {
                return Ft(this, ht.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    ht.removeAttr(this, t)
                })
            }
        }), ht.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)return "undefined" == typeof t.getAttribute ? ht.prop(t, e, n) : (1 === r && ht.isXMLDoc(t) || (e = e.toLowerCase(), o = ht.attrHooks[e] || (ht.expr.match.bool.test(e) ? Le : De)), void 0 !== n ? null === n ? void ht.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = ht.find.attr(t, e), null == i ? void 0 : i))
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!dt.radioValue && "radio" === e && ht.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var n, i, o = 0, r = e && e.match($t);
                if (r && 1 === t.nodeType)for (; n = r[o++];)i = ht.propFix[n] || n, ht.expr.match.bool.test(n) ? qe && je || !Re.test(n) ? t[i] = !1 : t[ht.camelCase("default-" + n)] = t[i] = !1 : ht.attr(t, n, ""), t.removeAttribute(je ? n : i)
            }
        }), Le = {
            set: function (t, e, n) {
                return e === !1 ? ht.removeAttr(t, n) : qe && je || !Re.test(n) ? t.setAttribute(!je && ht.propFix[n] || n, n) : t[ht.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ht.each(ht.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = Pe[e] || ht.find.attr;
            qe && je || !Re.test(e) ? Pe[e] = function (t, e, i) {
                var o, r;
                return i || (r = Pe[e], Pe[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Pe[e] = r), o
            } : Pe[e] = function (t, e, n) {
                if (!n)return t[ht.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), qe && je || (ht.attrHooks.value = {
            set: function (t, e, n) {
                return ht.nodeName(t, "input") ? void(t.defaultValue = e) : De && De.set(t, e, n)
            }
        }), je || (De = {
            set: function (t, e, n) {
                var i = t.getAttributeNode(n);
                if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n))return e
            }
        }, Pe.id = Pe.name = Pe.coords = function (t, e, n) {
            var i;
            if (!n)return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, ht.valHooks.button = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                if (n && n.specified)return n.value
            }, set: De.set
        }, ht.attrHooks.contenteditable = {
            set: function (t, e, n) {
                De.set(t, "" !== e && e, n)
            }
        }, ht.each(["width", "height"], function (t, e) {
            ht.attrHooks[e] = {
                set: function (t, n) {
                    if ("" === n)return t.setAttribute(e, "auto"), n
                }
            }
        })), dt.style || (ht.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            }, set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Oe = /^(?:input|select|textarea|button|object)$/i, He = /^(?:a|area)$/i;
        ht.fn.extend({
            prop: function (t, e) {
                return Ft(this, ht.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return t = ht.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (t) {
                    }
                })
            }
        }), ht.extend({
            prop: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)return 1 === r && ht.isXMLDoc(t) || (e = ht.propFix[e] || e, o = ht.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = ht.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Oe.test(t.nodeName) || He.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {"for": "htmlFor", "class": "className"}
        }), dt.hrefNormalized || ht.each(["href", "src"], function (t, e) {
            ht.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), dt.optSelected || (ht.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ht.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ht.propFix[this.toLowerCase()] = this
        }), dt.enctype || (ht.propFix.enctype = "encoding");
        var Fe = /[\t\r\n\f]/g;
        ht.fn.extend({
            addClass: function (t) {
                var e, n, i, o, r, s, a, l = 0;
                if (ht.isFunction(t))return this.each(function (e) {
                    ht(this).addClass(t.call(this, e, z(this)))
                });
                if ("string" == typeof t && t)for (e = t.match($t) || []; n = this[l++];)if (o = z(n), i = 1 === n.nodeType && (" " + o + " ").replace(Fe, " ")) {
                    for (s = 0; r = e[s++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    a = ht.trim(i), o !== a && ht.attr(n, "class", a)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, o, r, s, a, l = 0;
                if (ht.isFunction(t))return this.each(function (e) {
                    ht(this).removeClass(t.call(this, e, z(this)))
                });
                if (!arguments.length)return this.attr("class", "");
                if ("string" == typeof t && t)for (e = t.match($t) || []; n = this[l++];)if (o = z(n), i = 1 === n.nodeType && (" " + o + " ").replace(Fe, " ")) {
                    for (s = 0; r = e[s++];)for (; i.indexOf(" " + r + " ") > -1;)i = i.replace(" " + r + " ", " ");
                    a = ht.trim(i), o !== a && ht.attr(n, "class", a)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ht.isFunction(t) ? this.each(function (n) {
                    ht(this).toggleClass(t.call(this, n, z(this), e), e)
                }) : this.each(function () {
                    var e, i, o, r;
                    if ("string" === n)for (i = 0, o = ht(this), r = t.match($t) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== n || (e = z(this), e && ht._data(this, "__className__", e), ht.attr(this, "class", e || t === !1 ? "" : ht._data(this, "__className__") || ""))
                })
            }, hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)if (1 === n.nodeType && (" " + z(n) + " ").replace(Fe, " ").indexOf(e) > -1)return !0;
                return !1
            }
        }), ht.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            ht.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ht.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        });
        var Me = t.location, We = ht.now(), _e = /\?/,
            Be = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ht.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
            var n, i = null, o = ht.trim(e + "");
            return o && !ht.trim(o.replace(Be, function (t, e, o, r) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
            })) ? Function("return " + o)() : ht.error("Invalid JSON: " + e)
        }, ht.parseXML = function (e) {
            var n, i;
            if (!e || "string" != typeof e)return null;
            try {
                t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (t) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ht.error("Invalid XML: " + e), n
        };
        var ze = /#.*$/, Ue = /([?&])_=[^&]*/, Ve = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Qe = /^(?:GET|HEAD)$/, Ye = /^\/\//,
            Ge = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ke = {}, Je = {}, Ze = "*/".concat("*"),
            tn = Me.href, en = Ge.exec(tn.toLowerCase()) || [];
        ht.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: tn,
                type: "GET",
                isLocal: Xe.test(en[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ze,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": ht.parseJSON, "text xml": ht.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? X(X(t, ht.ajaxSettings), e) : X(ht.ajaxSettings, t)
            },
            ajaxPrefilter: U(Ke),
            ajaxTransport: U(Je),
            ajax: function (e, n) {
                function i(e, n, i, o) {
                    var r, d, y, b, x, C = n;
                    2 !== w && (w = 2, l && t.clearTimeout(l), c = void 0, a = o || "", T.readyState = e > 0 ? 4 : 0, r = e >= 200 && e < 300 || 304 === e, i && (b = Q(p, T, i)), b = Y(p, b, T, r), r ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ht.lastModified[s] = x), x = T.getResponseHeader("etag"), x && (ht.etag[s] = x)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, r = !y)) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || C) + "", r ? m.resolveWith(h, [d, C, T]) : m.rejectWith(h, [T, C, y]), T.statusCode(v), v = void 0, u && f.trigger(r ? "ajaxSuccess" : "ajaxError", [T, p, r ? d : y]), g.fireWith(h, [T, C]), u && (f.trigger("ajaxComplete", [T, p]), --ht.active || ht.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var o, r, s, a, l, u, c, d, p = ht.ajaxSetup({}, n), h = p.context || p,
                    f = p.context && (h.nodeType || h.jquery) ? ht(h) : ht.event, m = ht.Deferred(),
                    g = ht.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, w = 0, x = "canceled",
                    T = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (2 === w) {
                                if (!d)for (d = {}; e = Ve.exec(a);)d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        }, getAllResponseHeaders: function () {
                            return 2 === w ? a : null
                        }, setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return w || (t = b[n] = b[n] || t, y[t] = e), this
                        }, overrideMimeType: function (t) {
                            return w || (p.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t)if (w < 2)for (e in t)v[e] = [v[e], t[e]]; else T.always(t[T.status]);
                            return this
                        }, abort: function (t) {
                            var e = t || x;
                            return c && c.abort(e), i(0, e), this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || tn) + "").replace(ze, "").replace(Ye, en[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ht.trim(p.dataType || "*").toLowerCase().match($t) || [""], null == p.crossDomain && (o = Ge.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === en[1] && o[2] === en[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ht.param(p.data, p.traditional)), V(Ke, p, n, T), 2 === w)return T;
                u = ht.event && p.global, u && 0 === ht.active++ && ht.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Qe.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (_e.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Ue.test(s) ? s.replace(Ue, "$1_=" + We++) : s + (_e.test(s) ? "&" : "?") + "_=" + We++)), p.ifModified && (ht.lastModified[s] && T.setRequestHeader("If-Modified-Since", ht.lastModified[s]), ht.etag[s] && T.setRequestHeader("If-None-Match", ht.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : p.accepts["*"]);
                for (r in p.headers)T.setRequestHeader(r, p.headers[r]);
                if (p.beforeSend && (p.beforeSend.call(h, T, p) === !1 || 2 === w))return T.abort();
                x = "abort";
                for (r in{success: 1, error: 1, complete: 1})T[r](p[r]);
                if (c = V(Je, p, n, T)) {
                    if (T.readyState = 1, u && f.trigger("ajaxSend", [T, p]), 2 === w)return T;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        w = 1, c.send(y, i)
                    } catch (t) {
                        if (!(w < 2))throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function (t, e, n) {
                return ht.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return ht.get(t, void 0, e, "script")
            }
        }), ht.each(["get", "post"], function (t, e) {
            ht[e] = function (t, n, i, o) {
                return ht.isFunction(n) && (o = o || i, i = n, n = void 0), ht.ajax(ht.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, ht.isPlainObject(t) && t))
            }
        }), ht._evalUrl = function (t) {
            return ht.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
        }, ht.fn.extend({
            wrapAll: function (t) {
                if (ht.isFunction(t))return this.each(function (e) {
                    ht(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ht(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            }, wrapInner: function (t) {
                return ht.isFunction(t) ? this.each(function (e) {
                    ht(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = ht(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = ht.isFunction(t);
                return this.each(function (n) {
                    ht(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    ht.nodeName(this, "body") || ht(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ht.expr.filters.hidden = function (t) {
            return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : K(t)
        }, ht.expr.filters.visible = function (t) {
            return !ht.expr.filters.hidden(t)
        };
        var nn = /%20/g, on = /\[\]$/, rn = /\r?\n/g, sn = /^(?:submit|button|image|reset|file)$/i,
            an = /^(?:input|select|textarea|keygen)/i;
        ht.param = function (t, e) {
            var n, i = [], o = function (t, e) {
                e = ht.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = ht.ajaxSettings && ht.ajaxSettings.traditional), ht.isArray(t) || t.jquery && !ht.isPlainObject(t)) ht.each(t, function () {
                o(this.name, this.value)
            }); else for (n in t)J(n, t[n], e, o);
            return i.join("&").replace(nn, "+")
        }, ht.fn.extend({
            serialize: function () {
                return ht.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = ht.prop(this, "elements");
                    return t ? ht.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !ht(this).is(":disabled") && an.test(this.nodeName) && !sn.test(t) && (this.checked || !Mt.test(t))
                }).map(function (t, e) {
                    var n = ht(this).val();
                    return null == n ? null : ht.isArray(n) ? ht.map(n, function (t) {
                        return {name: e.name, value: t.replace(rn, "\r\n")}
                    }) : {name: e.name, value: n.replace(rn, "\r\n")}
                }).get()
            }
        }), ht.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
            return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
        } : Z;
        var ln = 0, un = {}, cn = ht.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in un)un[t](void 0, !0)
        }), dt.cors = !!cn && "withCredentials" in cn, cn = dt.ajax = !!cn, cn && ht.ajaxTransport(function (e) {
            if (!e.crossDomain || dt.cors) {
                var n;
                return {
                    send: function (i, o) {
                        var r, s = e.xhr(), a = ++ln;
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (r in e.xhrFields)s[r] = e.xhrFields[r];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (r in i)void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                        s.send(e.hasContent && e.data || null), n = function (t, i) {
                            var r, l, u;
                            if (n && (i || 4 === s.readyState))if (delete un[a], n = void 0, s.onreadystatechange = ht.noop, i) 4 !== s.readyState && s.abort(); else {
                                u = {}, r = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (t) {
                                    l = ""
                                }
                                r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                            }
                            u && o(r, l, u, s.getAllResponseHeaders())
                        }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = un[a] = n : n()
                    }, abort: function () {
                        n && n(void 0, !0)
                    }
                }
            }
        }), ht.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return ht.globalEval(t), t
                }
            }
        }), ht.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ht.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n = it.head || ht("head")[0] || it.documentElement;
                return {
                    send: function (i, o) {
                        e = it.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    }, abort: function () {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var dn = [], pn = /(=)\?(?=&|$)|\?\?/;
        ht.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = dn.pop() || ht.expando + "_" + We++;
                return this[t] = !0, t
            }
        }), ht.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o, r, s,
                a = e.jsonp !== !1 && (pn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])return o = e.jsonpCallback = ht.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(pn, "$1" + o) : e.jsonp !== !1 && (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return s || ht.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
                s = arguments
            }, i.always(function () {
                void 0 === r ? ht(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, dn.push(o)), s && ht.isFunction(r) && r(s[0]), s = r = void 0
            }), "script"
        }), ht.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t)return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || it;
            var i = Tt.exec(t), o = !n && [];
            return i ? [e.createElement(i[1])] : (i = v([t], e, o), o && o.length && ht(o).remove(), ht.merge([], i.childNodes))
        };
        var hn = ht.fn.load;
        ht.fn.load = function (t, e, n) {
            if ("string" != typeof t && hn)return hn.apply(this, arguments);
            var i, o, r, s = this, a = t.indexOf(" ");
            return a > -1 && (i = ht.trim(t.slice(a, t.length)), t = t.slice(0, a)), ht.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && ht.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                r = arguments, s.html(i ? ht("<div>").append(ht.parseHTML(t)).find(i) : t)
            }).always(n && function (t, e) {
                    s.each(function () {
                        n.apply(this, r || [t.responseText, e, t])
                    })
                }), this
        }, ht.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            ht.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), ht.expr.filters.animated = function (t) {
            return ht.grep(ht.timers, function (e) {
                return t === e.elem
            }).length
        }, ht.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, s, a, l, u, c = ht.css(t, "position"), d = ht(t), p = {};
                "static" === c && (t.style.position = "relative"), a = d.offset(), r = ht.css(t, "top"), l = ht.css(t, "left"), u = ("absolute" === c || "fixed" === c) && ht.inArray("auto", [r, l]) > -1, u ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ht.isFunction(e) && (e = e.call(t, n, ht.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : d.css(p)
            }
        }, ht.fn.extend({
            offset: function (t) {
                if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                    ht.offset.setOffset(this, t, e)
                });
                var e, n, i = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
                if (r)return e = r.documentElement, ht.contains(e, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = et(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
            }, position: function () {
                if (this[0]) {
                    var t, e, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === ht.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ht.nodeName(t[0], "html") || (n = t.offset()), n.top += ht.css(t[0], "borderTopWidth", !0), n.left += ht.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ht.css(i, "marginTop", !0),
                        left: e.left - n.left - ht.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && !ht.nodeName(t, "html") && "static" === ht.css(t, "position");)t = t.offsetParent;
                    return t || he
                })
            }
        }), ht.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = /Y/.test(e);
            ht.fn[t] = function (i) {
                return Ft(this, function (t, i, o) {
                    var r = et(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? ht(r).scrollLeft() : o, n ? o : ht(r).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), ht.each(["top", "left"], function (t, e) {
            ht.cssHooks[e] = D(dt.pixelPosition, function (t, n) {
                if (n)return n = me(t, e), de.test(n) ? ht(t).position()[e] + "px" : n
            })
        }), ht.each({Height: "height", Width: "width"}, function (t, e) {
            ht.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                ht.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Ft(this, function (e, n, i) {
                        var o;
                        return ht.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? ht.css(e, n, s) : ht.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), ht.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), ht.fn.size = function () {
            return this.length
        }, ht.fn.andSelf = ht.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ht
        });
        var fn = t.jQuery, mn = t.$;
        return ht.noConflict = function (e) {
            return t.$ === ht && (t.$ = mn), e && t.jQuery === ht && (t.jQuery = fn), ht
        }, e || (t.jQuery = t.$ = ht), ht
    }), function (t, e) {
        "use strict";
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var n, i = t(document);
        t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function () {
                return t("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function () {
                return t("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function (t) {
                var e = n.csrfToken();
                e && t.setRequestHeader("X-CSRF-Token", e)
            },
            refreshCSRFTokens: function () {
                t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function (e, n, i) {
                var o = t.Event(n);
                return e.trigger(o, i), o.result !== !1
            },
            confirm: function (t) {
                return confirm(t)
            },
            ajax: function (e) {
                return t.ajax(e)
            },
            href: function (t) {
                return t[0].href
            },
            isRemote: function (t) {
                return t.data("remote") !== e && t.data("remote") !== !1
            },
            handleRemote: function (i) {
                var o, r, s, a, l, u;
                if (n.fire(i, "ajax:before")) {
                    if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                        o = i.data("ujs:submit-button-formmethod") || i.attr("method"), r = i.data("ujs:submit-button-formaction") || i.attr("action"), s = t(i[0]).serializeArray();
                        var c = i.data("ujs:submit-button");
                        c && (s.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), s = i.data("params") || null);
                    return u = {
                        type: o || "GET", data: s, dataType: l, beforeSend: function (t, o) {
                            return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), !!n.fire(i, "ajax:beforeSend", [t, o]) && void i.trigger("ajax:send", t)
                        }, success: function (t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        }, complete: function (t, e) {
                            i.trigger("ajax:complete", [t, e])
                        }, error: function (t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        }, crossDomain: n.isCrossDomain(r)
                    }, a && (u.xhrFields = {withCredentials: a}), r && (u.url = r), n.ajax(u)
                }
                return !1
            },
            isCrossDomain: function (t) {
                var e = document.createElement("a");
                e.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                } catch (t) {
                    return !0
                }
            },
            handleMethod: function (i) {
                var o = n.href(i), r = i.data("method"), s = i.attr("target"), a = n.csrfToken(), l = n.csrfParam(),
                    u = t('<form method="post" action="' + o + '"></form>'),
                    c = '<input name="_method" value="' + r + '" type="hidden" />';
                l === e || a === e || n.isCrossDomain(o) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
            },
            formElements: function (e, n) {
                return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
            },
            disableFormElements: function (e) {
                n.formElements(e, n.disableSelector).each(function () {
                    n.disableFormElement(t(this))
                })
            },
            disableFormElement: function (t) {
                var n, i;
                n = t.is("button") ? "html" : "val", i = t.data("disable-with"), i !== e && (t.data("ujs:enable-with", t[n]()), t[n](i)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
            },
            enableFormElements: function (e) {
                n.formElements(e, n.enableSelector).each(function () {
                    n.enableFormElement(t(this))
                })
            },
            enableFormElement: function (t) {
                var n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
            },
            allowAction: function (t) {
                var e, i = t.data("confirm"), o = !1;
                if (!i)return !0;
                if (n.fire(t, "confirm")) {
                    try {
                        o = n.confirm(i)
                    } catch (t) {
                        (console.error || console.log).call(console, t.stack || t)
                    }
                    e = n.fire(t, "confirm:complete", [o])
                }
                return o && e
            },
            blankInputs: function (e, n, i) {
                var o, r, s, a, l = t(), u = n || "input,textarea", c = e.find(u), d = {};
                return c.each(function () {
                    o = t(this), o.is("input[type=radio]") ? (a = o.attr("name"), d[a] || (0 === e.find('input[type=radio]:checked[name="' + a + '"]').length && (s = e.find('input[type=radio][name="' + a + '"]'), l = l.add(s)), d[a] = a)) : (r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val(), r === i && (l = l.add(o)))
                }), !!l.length && l
            },
            nonBlankInputs: function (t, e) {
                return n.blankInputs(t, e, !0)
            },
            stopEverything: function (e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function (t) {
                var i = t.data("disable-with");
                i !== e && (t.data("ujs:enable-with", t.html()), t.html(i)), t.bind("click.railsDisable", function (t) {
                    return n.stopEverything(t)
                }), t.data("ujs:disabled", !0)
            },
            enableElement: function (t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
            }
        }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
            t.crossDomain || n.CSRFProtection(i)
        }), t(window).on("pageshow.rails", function () {
            t(t.rails.enableSelector).each(function () {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableFormElement(e)
            }), t(t.rails.linkDisableSelector).each(function () {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableElement(e)
            })
        }), i.on("ajax:complete", n.linkDisableSelector, function () {
            n.enableElement(t(this))
        }), i.on("ajax:complete", n.buttonDisableSelector, function () {
            n.enableFormElement(t(this))
        }), i.on("click.rails", n.linkClickSelector, function (e) {
            var i = t(this), o = i.data("method"), r = i.data("params"), s = e.metaKey || e.ctrlKey;
            if (!n.allowAction(i))return n.stopEverything(e);
            if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (s && (!o || "GET" === o) && !r)return !0;
                var a = n.handleRemote(i);
                return a === !1 ? n.enableElement(i) : a.fail(function () {
                    n.enableElement(i)
                }), !1
            }
            return o ? (n.handleMethod(i), !1) : void 0
        }), i.on("click.rails", n.buttonClickSelector, function (e) {
            var i = t(this);
            if (!n.allowAction(i) || !n.isRemote(i))return n.stopEverything(e);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var o = n.handleRemote(i);
            return o === !1 ? n.enableFormElement(i) : o.fail(function () {
                n.enableFormElement(i)
            }), !1
        }), i.on("change.rails", n.inputChangeSelector, function (e) {
            var i = t(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
        }), i.on("submit.rails", n.formSubmitSelector, function (i) {
            var o, r, s = t(this), a = n.isRemote(s);
            if (!n.allowAction(s))return n.stopEverything(i);
            if (s.attr("novalidate") === e)if (s.data("ujs:formnovalidate-button") === e) {
                if (o = n.blankInputs(s, n.requiredInputSelector, !1), o && n.fire(s, "ajax:aborted:required", [o]))return n.stopEverything(i)
            } else s.data("ujs:formnovalidate-button", e);
            if (a) {
                if (r = n.nonBlankInputs(s, n.fileInputSelector)) {
                    setTimeout(function () {
                        n.disableFormElements(s)
                    }, 13);
                    var l = n.fire(s, "ajax:aborted:file", [r]);
                    return l || setTimeout(function () {
                        n.enableFormElements(s)
                    }, 13), l
                }
                return n.handleRemote(s), !1
            }
            setTimeout(function () {
                n.disableFormElements(s)
            }, 13)
        }), i.on("click.rails", n.formInputClickSelector, function (e) {
            var i = t(this);
            if (!n.allowAction(i))return n.stopEverything(e);
            var o = i.attr("name"), r = o ? {name: o, value: i.val()} : null, s = i.closest("form");
            0 === s.length && (s = t("#" + i.attr("form"))), s.data("ujs:submit-button", r), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.on("ajax:send.rails", n.formSubmitSelector, function (e) {
            this === e.target && n.disableFormElements(t(this))
        }), i.on("ajax:complete.rails", n.formSubmitSelector, function (e) {
            this === e.target && n.enableFormElements(t(this))
        }), t(function () {
            n.refreshCSRFTokens()
        }))
    }(jQuery), function () {
        (function () {
            (function () {
                this.Turbolinks = {
                    supported: function () {
                        return null != window.history.pushState && null != window.requestAnimationFrame
                    }(), visit: function (e, n) {
                        return t.controller.visit(e, n)
                    }, clearCache: function () {
                        return t.controller.clearCache()
                    }
                }
            }).call(this)
        }).call(this);
        var t = this.Turbolinks;
        (function () {
            (function () {
                var e, n;
                t.copyObject = function (t) {
                    var e, n, i;
                    n = {};
                    for (e in t)i = t[e], n[e] = i;
                    return n
                }, t.closest = function (t, n) {
                    return e.call(t, n)
                }, e = function () {
                    var t, e;
                    return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
                        var e;
                        for (e = this; e;) {
                            if (e.nodeType === Node.ELEMENT_NODE && n.call(e, t))return e;
                            e = e.parentNode
                        }
                    }
                }(), t.defer = function (t) {
                    return setTimeout(t, 1)
                }, t.dispatch = function (t, e) {
                    var n, i, o, r, s;
                    return r = null != e ? e : {}, s = r.target, n = r.cancelable, i = r.data, o = document.createEvent("Events"), o.initEvent(t, !0, n === !0), o.data = null != i ? i : {}, (null != s ? s : document).dispatchEvent(o), o
                }, t.match = function (t, e) {
                    return n.call(t, e)
                }, n = function () {
                    var t, e, n, i;
                    return t = document.documentElement, null != (e = null != (n = null != (i = t.matchesSelector) ? i : t.webkitMatchesSelector) ? n : t.msMatchesSelector) ? e : t.mozMatchesSelector
                }(), t.uuid = function () {
                    var t, e, n;
                    for (n = "", t = e = 1; 36 >= e; t = ++e)n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                    return n
                }
            }).call(this), function () {
                t.Location = function () {
                    function t(t) {
                        var e, n;
                        null == t && (t = ""), n = document.createElement("a"), n.href = t.toString(), this.absoluteURL = n.href, e = n.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = n.hash.slice(1))
                    }

                    var e, n, i, o;
                    return t.wrap = function (t) {
                        return t instanceof this ? t : new this(t)
                    }, t.prototype.getOrigin = function () {
                        return this.absoluteURL.split("/", 3).join("/")
                    }, t.prototype.getPath = function () {
                        var t, e;
                        return null != (t = null != (e = this.absoluteURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
                    }, t.prototype.getPathComponents = function () {
                        return this.getPath().split("/").slice(1)
                    }, t.prototype.getLastPathComponent = function () {
                        return this.getPathComponents().slice(-1)[0]
                    }, t.prototype.getExtension = function () {
                        var t, e;
                        return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
                    }, t.prototype.isHTML = function () {
                        return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                    }, t.prototype.isPrefixedBy = function (t) {
                        var e;
                        return e = n(t), this.isEqualTo(t) || o(this.absoluteURL, e)
                    }, t.prototype.isEqualTo = function (t) {
                        return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
                    }, t.prototype.toCacheKey = function () {
                        return this.requestURL
                    }, t.prototype.toJSON = function () {
                        return this.absoluteURL
                    }, t.prototype.toString = function () {
                        return this.absoluteURL
                    }, t.prototype.valueOf = function () {
                        return this.absoluteURL
                    }, n = function (t) {
                        return e(t.getOrigin() + t.getPath())
                    }, e = function (t) {
                        return i(t, "/") ? t : t + "/"
                    }, o = function (t, e) {
                        return t.slice(0, e.length) === e
                    }, i = function (t, e) {
                        return t.slice(-e.length) === e
                    }, t
                }()
            }.call(this), function () {
                var e = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                };
                t.HttpRequest = function () {
                    function n(n, i, o) {
                        this.delegate = n, this.requestCanceled = e(this.requestCanceled, this), this.requestTimedOut = e(this.requestTimedOut, this), this.requestFailed = e(this.requestFailed, this), this.requestLoaded = e(this.requestLoaded, this), this.requestProgressed = e(this.requestProgressed, this), this.url = t.Location.wrap(i).requestURL, this.referrer = t.Location.wrap(o).absoluteURL, this.createXHR()
                    }

                    return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE = -1, n.timeout = 60, n.prototype.send = function () {
                        var t;
                        return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
                    }, n.prototype.cancel = function () {
                        return this.xhr && this.sent ? this.xhr.abort() : void 0
                    }, n.prototype.requestProgressed = function (t) {
                        return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
                    }, n.prototype.requestLoaded = function () {
                        return this.endRequest(function (t) {
                            return function () {
                                var e;
                                return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
                            }
                        }(this))
                    }, n.prototype.requestFailed = function () {
                        return this.endRequest(function (t) {
                            return function () {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
                            }
                        }(this))
                    }, n.prototype.requestTimedOut = function () {
                        return this.endRequest(function (t) {
                            return function () {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
                            }
                        }(this))
                    }, n.prototype.requestCanceled = function () {
                        return this.endRequest()
                    }, n.prototype.notifyApplicationBeforeRequestStart = function () {
                        return t.dispatch("turbolinks:request-start", {data: {url: this.url, xhr: this.xhr}})
                    }, n.prototype.notifyApplicationAfterRequestEnd = function () {
                        return t.dispatch("turbolinks:request-end", {data: {url: this.url, xhr: this.xhr}})
                    }, n.prototype.createXHR = function () {
                        return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                    }, n.prototype.endRequest = function (t) {
                        return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0
                    }, n.prototype.setProgress = function (t) {
                        var e;
                        return this.progress = t, "function" == typeof(e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
                    }, n.prototype.destroy = function () {
                        var t;
                        return this.setProgress(1), "function" == typeof(t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null
                    }, n
                }()
            }.call(this), function () {
                var e = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                };
                t.ProgressBar = function () {
                    function t() {
                        this.trickle = e(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
                    }

                    var n;
                    return n = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function () {
                        return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                    }, t.prototype.hide = function () {
                        return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
                            return function () {
                                return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1
                            }
                        }(this))) : void 0
                    }, t.prototype.setValue = function (t) {
                        return this.value = t, this.refresh()
                    }, t.prototype.installStylesheetElement = function () {
                        return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                    }, t.prototype.installProgressElement = function () {
                        return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                    }, t.prototype.fadeProgressElement = function (t) {
                        return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * n)
                    }, t.prototype.uninstallProgressElement = function () {
                        return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                    }, t.prototype.startTrickling = function () {
                        return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
                    }, t.prototype.stopTrickling = function () {
                        return clearInterval(this.trickleInterval), this.trickleInterval = null
                    }, t.prototype.trickle = function () {
                        return this.setValue(this.value + Math.random() / 100)
                    }, t.prototype.refresh = function () {
                        return requestAnimationFrame(function (t) {
                            return function () {
                                return t.progressElement.style.width = 10 + 90 * t.value + "%"
                            }
                        }(this))
                    }, t.prototype.createStylesheetElement = function () {
                        var t;
                        return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t
                    }, t.prototype.createProgressElement = function () {
                        var t;
                        return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t
                    }, t
                }()
            }.call(this), function () {
                var e = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                };
                t.BrowserAdapter = function () {
                    function n(n) {
                        this.controller = n, this.showProgressBar = e(this.showProgressBar, this), this.progressBar = new t.ProgressBar
                    }

                    var i, o, r, s;
                    return s = t.HttpRequest, i = s.NETWORK_FAILURE, r = s.TIMEOUT_FAILURE, o = 500, n.prototype.visitProposedToLocationWithAction = function (t, e) {
                        return this.controller.startVisitToLocationWithAction(t, e)
                    }, n.prototype.visitStarted = function (t) {
                        return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
                    }, n.prototype.visitRequestStarted = function (t) {
                        return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
                    }, n.prototype.visitRequestProgressed = function (t) {
                        return this.progressBar.setValue(t.progress)
                    }, n.prototype.visitRequestCompleted = function (t) {
                        return t.loadResponse()
                    }, n.prototype.visitRequestFailedWithStatusCode = function (t, e) {
                        switch (e) {
                            case i:
                            case r:
                                return this.reload();
                            default:
                                return t.loadResponse()
                        }
                    }, n.prototype.visitRequestFinished = function () {
                        return this.hideProgressBar()
                    }, n.prototype.visitCompleted = function (t) {
                        return t.followRedirect()
                    }, n.prototype.pageInvalidated = function () {
                        return this.reload()
                    }, n.prototype.showProgressBarAfterDelay = function () {
                        return this.progressBarTimeout = setTimeout(this.showProgressBar, o)
                    }, n.prototype.showProgressBar = function () {
                        return this.progressBar.show()
                    }, n.prototype.hideProgressBar = function () {
                        return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                    }, n.prototype.reload = function () {
                        return window.location.reload()
                    }, n
                }()
            }.call(this), function () {
                var e, n = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                };
                e = !1, addEventListener("load", function () {
                    return t.defer(function () {
                        return e = !0
                    })
                }, !1), t.History = function () {
                    function i(t) {
                        this.delegate = t, this.onPopState = n(this.onPopState, this)
                    }

                    return i.prototype.start = function () {
                        return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), this.started = !0)
                    }, i.prototype.stop = function () {
                        return this.started ? (removeEventListener("popstate", this.onPopState, !1), this.started = !1) : void 0
                    }, i.prototype.push = function (e, n) {
                        return e = t.Location.wrap(e), this.update("push", e, n)
                    }, i.prototype.replace = function (e, n) {
                        return e = t.Location.wrap(e), this.update("replace", e, n)
                    }, i.prototype.onPopState = function (e) {
                        var n, i, o, r;
                        return this.shouldHandlePopState() && (r = null != (i = e.state) ? i.turbolinks : void 0) ? (n = t.Location.wrap(window.location), o = r.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, o)) : void 0
                    }, i.prototype.shouldHandlePopState = function () {
                        return e === !0
                    }, i.prototype.update = function (t, e, n) {
                        var i;
                        return i = {turbolinks: {restorationIdentifier: n}}, history[t + "State"](i, null, e)
                    }, i
                }()
            }.call(this), function () {
                t.Snapshot = function () {
                    function e(t) {
                        var e, n;
                        n = t.head, e = t.body, this.head = null != n ? n : document.createElement("head"), this.body = null != e ? e : document.createElement("body")
                    }

                    return e.wrap = function (t) {
                        return t instanceof this ? t : this.fromHTML(t)
                    }, e.fromHTML = function (t) {
                        var e;
                        return e = document.createElement("html"), e.innerHTML = t, this.fromElement(e)
                    }, e.fromElement = function (t) {
                        return new this({head: t.querySelector("head"), body: t.querySelector("body")})
                    }, e.prototype.clone = function () {
                        return new e({head: this.head.cloneNode(!0), body: this.body.cloneNode(!0)})
                    }, e.prototype.getRootLocation = function () {
                        var e, n;
                        return n = null != (e = this.getSetting("root")) ? e : "/", new t.Location(n)
                    }, e.prototype.getCacheControlValue = function () {
                        return this.getSetting("cache-control")
                    }, e.prototype.hasAnchor = function (t) {
                        try {
                            return null != this.body.querySelector("[id='" + t + "']")
                        } catch (t) {
                        }
                    }, e.prototype.isPreviewable = function () {
                        return "no-preview" !== this.getCacheControlValue()
                    }, e.prototype.isCacheable = function () {
                        return "no-cache" !== this.getCacheControlValue()
                    }, e.prototype.getSetting = function (t) {
                        var e, n;
                        return n = this.head.querySelectorAll("meta[name='turbolinks-" + t + "']"), e = n[n.length - 1], null != e ? e.getAttribute("content") : void 0
                    }, e
                }()
            }.call(this), function () {
                var e = [].slice;
                t.Renderer = function () {
                    function t() {
                    }

                    var n;
                    return t.render = function () {
                        var t, n, i, o;
                        return i = arguments[0], n = arguments[1], t = 3 <= arguments.length ? e.call(arguments, 2) : [], o = function (t, e, n) {
                            n.prototype = t.prototype;
                            var i = new n, o = t.apply(i, e);
                            return Object(o) === o ? o : i
                        }(this, t, function () {
                        }), o.delegate = i, o.render(n), o
                    }, t.prototype.renderView = function (t) {
                        return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody)
                    }, t.prototype.invalidateView = function () {
                        return this.delegate.viewInvalidated()
                    }, t.prototype.createScriptElement = function (t) {
                        var e;
                        return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, n(e, t), e)
                    }, n = function (t, e) {
                        var n, i, o, r, s, a, l;
                        for (r = e.attributes, a = [], n = 0, i = r.length; i > n; n++)s = r[n], o = s.name, l = s.value, a.push(t.setAttribute(o, l));
                        return a
                    }, t
                }()
            }.call(this), function () {
                t.HeadDetails = function () {
                    function t(t) {
                        var e, n, r, s, a, l, u;
                        for (this.element = t, this.elements = {}, u = this.element.childNodes, s = 0, l = u.length; l > s; s++)r = u[s], r.nodeType === Node.ELEMENT_NODE && (a = r.outerHTML, n = null != (e = this.elements)[a] ? e[a] : e[a] = {
                            type: o(r),
                            tracked: i(r),
                            elements: []
                        }, n.elements.push(r))
                    }

                    var e, n, i, o;
                    return t.prototype.hasElementWithKey = function (t) {
                        return t in this.elements
                    }, t.prototype.getTrackedElementSignature = function () {
                        var t, e;
                        return function () {
                            var n, i;
                            n = this.elements, i = [];
                            for (t in n)e = n[t].tracked, e && i.push(t);
                            return i
                        }.call(this).join("")
                    }, t.prototype.getScriptElementsNotInDetails = function (t) {
                        return this.getElementsMatchingTypeNotInDetails("script", t)
                    }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
                        return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
                    }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
                        var n, i, o, r, s, a;
                        o = this.elements, s = [];
                        for (i in o)r = o[i], a = r.type, n = r.elements, a !== t || e.hasElementWithKey(i) || s.push(n[0]);
                        return s
                    }, t.prototype.getProvisionalElements = function () {
                        var t, e, n, i, o, r, s;
                        n = [], i = this.elements;
                        for (e in i)o = i[e], s = o.type, r = o.tracked, t = o.elements, null != s || r ? t.length > 1 && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
                        return n
                    }, o = function (t) {
                        return e(t) ? "script" : n(t) ? "stylesheet" : void 0
                    }, i = function (t) {
                        return "reload" === t.getAttribute("data-turbolinks-track")
                    }, e = function (t) {
                        var e;
                        return e = t.tagName.toLowerCase(), "script" === e
                    }, n = function (t) {
                        var e;
                        return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel")
                    }, t
                }()
            }.call(this), function () {
                var e = function (t, e) {
                    function i() {
                        this.constructor = t
                    }

                    for (var o in e)n.call(e, o) && (t[o] = e[o]);
                    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                }, n = {}.hasOwnProperty;
                t.SnapshotRenderer = function (n) {
                    function i(e, n) {
                        this.currentSnapshot = e, this.newSnapshot = n, this.currentHeadDetails = new t.HeadDetails(this.currentSnapshot.head), this.newHeadDetails = new t.HeadDetails(this.newSnapshot.head), this.newBody = this.newSnapshot.body
                    }

                    return e(i, n), i.prototype.render = function (t) {
                        return this.trackedElementsAreIdentical() ? (this.mergeHead(), this.renderView(function (e) {
                            return function () {
                                return e.replaceBody(), e.focusFirstAutofocusableElement(), t()
                            }
                        }(this))) : this.invalidateView()
                    }, i.prototype.mergeHead = function () {
                        return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                    }, i.prototype.replaceBody = function () {
                        return this.activateBodyScriptElements(), this.importBodyPermanentElements(), this.assignNewBody()
                    }, i.prototype.trackedElementsAreIdentical = function () {
                        return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                    }, i.prototype.copyNewHeadStylesheetElements = function () {
                        var t, e, n, i, o;
                        for (i = this.getNewHeadStylesheetElements(), o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(document.head.appendChild(t));
                        return o
                    }, i.prototype.copyNewHeadScriptElements = function () {
                        var t, e, n, i, o;
                        for (i = this.getNewHeadScriptElements(), o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(document.head.appendChild(this.createScriptElement(t)));
                        return o
                    }, i.prototype.removeCurrentHeadProvisionalElements = function () {
                        var t, e, n, i, o;
                        for (i = this.getCurrentHeadProvisionalElements(), o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(document.head.removeChild(t));
                        return o
                    }, i.prototype.copyNewHeadProvisionalElements = function () {
                        var t, e, n, i, o;
                        for (i = this.getNewHeadProvisionalElements(), o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(document.head.appendChild(t));
                        return o
                    }, i.prototype.importBodyPermanentElements = function () {
                        var t, e, n, i, o, r;
                        for (i = this.getNewBodyPermanentElements(), r = [], e = 0, n = i.length; n > e; e++)o = i[e], (t = this.findCurrentBodyPermanentElement(o)) ? r.push(o.parentNode.replaceChild(t, o)) : r.push(void 0);
                        return r
                    }, i.prototype.activateBodyScriptElements = function () {
                        var t, e, n, i, o, r;
                        for (i = this.getNewBodyScriptElements(), r = [], e = 0, n = i.length; n > e; e++)o = i[e], t = this.createScriptElement(o), r.push(o.parentNode.replaceChild(t, o));
                        return r
                    }, i.prototype.assignNewBody = function () {
                        return document.body = this.newBody
                    }, i.prototype.focusFirstAutofocusableElement = function () {
                        var t;
                        return null != (t = this.findFirstAutofocusableElement()) ? t.focus() : void 0
                    }, i.prototype.getNewHeadStylesheetElements = function () {
                        return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                    }, i.prototype.getNewHeadScriptElements = function () {
                        return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                    }, i.prototype.getCurrentHeadProvisionalElements = function () {
                        return this.currentHeadDetails.getProvisionalElements()
                    }, i.prototype.getNewHeadProvisionalElements = function () {
                        return this.newHeadDetails.getProvisionalElements()
                    }, i.prototype.getNewBodyPermanentElements = function () {
                        return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")
                    }, i.prototype.findCurrentBodyPermanentElement = function (t) {
                        return document.body.querySelector("#" + t.id + "[data-turbolinks-permanent]")
                    }, i.prototype.getNewBodyScriptElements = function () {
                        return this.newBody.querySelectorAll("script")
                    }, i.prototype.findFirstAutofocusableElement = function () {
                        return document.body.querySelector("[autofocus]")
                    }, i
                }(t.Renderer)
            }.call(this), function () {
                var e = function (t, e) {
                    function i() {
                        this.constructor = t
                    }

                    for (var o in e)n.call(e, o) && (t[o] = e[o]);
                    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                }, n = {}.hasOwnProperty;
                t.ErrorRenderer = function (t) {
                    function n(t) {
                        this.html = t
                    }

                    return e(n, t), n.prototype.render = function (t) {
                        return this.renderView(function (e) {
                            return function () {
                                return e.replaceDocumentHTML(), e.activateBodyScriptElements(), t()
                            }
                        }(this))
                    }, n.prototype.replaceDocumentHTML = function () {
                        return document.documentElement.innerHTML = this.html
                    }, n.prototype.activateBodyScriptElements = function () {
                        var t, e, n, i, o, r;
                        for (i = this.getScriptElements(), r = [], e = 0, n = i.length; n > e; e++)o = i[e], t = this.createScriptElement(o), r.push(o.parentNode.replaceChild(t, o));
                        return r
                    }, n.prototype.getScriptElements = function () {
                        return document.documentElement.querySelectorAll("script")
                    }, n
                }(t.Renderer)
            }.call(this), function () {
                t.View = function () {
                    function e(t) {
                        this.delegate = t, this.element = document.documentElement
                    }

                    return e.prototype.getRootLocation = function () {
                        return this.getSnapshot().getRootLocation()
                    }, e.prototype.getSnapshot = function () {
                        return t.Snapshot.fromElement(this.element)
                    }, e.prototype.render = function (t, e) {
                        var n, i, o;
                        return o = t.snapshot, n = t.error, i = t.isPreview, this.markAsPreview(i), null != o ? this.renderSnapshot(o, e) : this.renderError(n, e)
                    }, e.prototype.markAsPreview = function (t) {
                        return t ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
                    }, e.prototype.renderSnapshot = function (e, n) {
                        return t.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), t.Snapshot.wrap(e))
                    }, e.prototype.renderError = function (e, n) {
                        return t.ErrorRenderer.render(this.delegate, n, e)
                    }, e
                }()
            }.call(this), function () {
                var e = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                };
                t.ScrollManager = function () {
                    function t(t) {
                        this.delegate = t, this.onScroll = e(this.onScroll, this)
                    }

                    return t.prototype.start = function () {
                        return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
                    }, t.prototype.stop = function () {
                        return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
                    }, t.prototype.scrollToElement = function (t) {
                        return t.scrollIntoView()
                    }, t.prototype.scrollToPosition = function (t) {
                        var e, n;
                        return e = t.x, n = t.y, window.scrollTo(e, n)
                    }, t.prototype.onScroll = function () {
                        return this.updatePosition({x: window.pageXOffset, y: window.pageYOffset})
                    }, t.prototype.updatePosition = function (t) {
                        var e;
                        return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
                    }, t
                }()
            }.call(this), function () {
                t.SnapshotCache = function () {
                    function e(t) {
                        this.size = t, this.keys = [], this.snapshots = {}
                    }

                    var n;
                    return e.prototype.has = function (t) {
                        var e;
                        return e = n(t), e in this.snapshots
                    }, e.prototype.get = function (t) {
                        var e;
                        if (this.has(t))return e = this.read(t), this.touch(t), e
                    }, e.prototype.put = function (t, e) {
                        return this.write(t, e), this.touch(t), e
                    }, e.prototype.read = function (t) {
                        var e;
                        return e = n(t), this.snapshots[e]
                    }, e.prototype.write = function (t, e) {
                        var i;
                        return i = n(t), this.snapshots[i] = e
                    }, e.prototype.touch = function (t) {
                        var e, i;
                        return i = n(t), e = this.keys.indexOf(i), e > -1 && this.keys.splice(e, 1), this.keys.unshift(i), this.trim()
                    }, e.prototype.trim = function () {
                        var t, e, n, i, o;
                        for (i = this.keys.splice(this.size), o = [], t = 0, n = i.length; n > t; t++)e = i[t], o.push(delete this.snapshots[e]);
                        return o
                    }, n = function (e) {
                        return t.Location.wrap(e).toCacheKey()
                    }, e
                }()
            }.call(this), function () {
                var e = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                };
                t.Visit = function () {
                    function n(n, i, o) {
                        this.controller = n, this.action = o, this.performScroll = e(this.performScroll, this), this.identifier = t.uuid(), this.location = t.Location.wrap(i), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
                    }

                    var i;
                    return n.prototype.start = function () {
                        return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                    }, n.prototype.cancel = function () {
                        var t;
                        return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                    }, n.prototype.complete = function () {
                        var t;
                        return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                    }, n.prototype.fail = function () {
                        var t;
                        return "started" === this.state ? (this.state = "failed", "function" == typeof(t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
                    }, n.prototype.changeHistory = function () {
                        var t, e;
                        return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = i(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0)
                    }, n.prototype.issueRequest = function () {
                        return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new t.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                    }, n.prototype.getCachedSnapshot = function () {
                        var t;
                        return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t
                    }, n.prototype.hasCachedSnapshot = function () {
                        return null != this.getCachedSnapshot()
                    }, n.prototype.loadCachedSnapshot = function () {
                        var t, e;
                        return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
                            var n;
                            return this.cacheSnapshot(), this.controller.render({
                                snapshot: e,
                                isPreview: t
                            }, this.performScroll), "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this), t ? void 0 : this.complete()
                        })) : void 0
                    }, n.prototype.loadResponse = function () {
                        return null != this.response ? this.render(function () {
                            var t, e;
                            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({error: this.response}, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({snapshot: this.response}, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.complete())
                        }) : void 0
                    }, n.prototype.followRedirect = function () {
                        return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
                    }, n.prototype.requestStarted = function () {
                        var t;
                        return this.recordTimingMetric("requestStart"), "function" == typeof(t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
                    }, n.prototype.requestProgressed = function (t) {
                        var e;
                        return this.progress = t, "function" == typeof(e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
                    }, n.prototype.requestCompletedWithResponse = function (e, n) {
                        return this.response = e, null != n && (this.redirectedToLocation = t.Location.wrap(n)), this.adapter.visitRequestCompleted(this)
                    }, n.prototype.requestFailedWithStatusCode = function (t, e) {
                        return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t)
                    }, n.prototype.requestFinished = function () {
                        var t;
                        return this.recordTimingMetric("requestEnd"), "function" == typeof(t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
                    }, n.prototype.performScroll = function () {
                        return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
                    }, n.prototype.scrollToRestoredPosition = function () {
                        var t, e;
                        return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0
                    }, n.prototype.scrollToAnchor = function () {
                        return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                    }, n.prototype.scrollToTop = function () {
                        return this.controller.scrollToPosition({x: 0, y: 0})
                    }, n.prototype.recordTimingMetric = function (t) {
                        var e;
                        return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
                    }, n.prototype.getTimingMetrics = function () {
                        return t.copyObject(this.timingMetrics)
                    }, i = function (t) {
                        switch (t) {
                            case"replace":
                                return "replaceHistoryWithLocationAndRestorationIdentifier";
                            case"advance":
                            case"restore":
                                return "pushHistoryWithLocationAndRestorationIdentifier"
                        }
                    }, n.prototype.shouldIssueRequest = function () {
                        return "restore" !== this.action || !this.hasCachedSnapshot()
                    }, n.prototype.cacheSnapshot = function () {
                        return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
                    }, n.prototype.render = function (t) {
                        return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
                            return function () {
                                return e.frame = null, t.call(e)
                            }
                        }(this))
                    }, n.prototype.cancelRender = function () {
                        return this.frame ? cancelAnimationFrame(this.frame) : void 0
                    }, n
                }()
            }.call(this), function () {
                var e = function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                };
                t.Controller = function () {
                    function n() {
                        this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new t.History(this), this.view = new t.View(this), this.scrollManager = new t.ScrollManager(this), this.restorationData = {}, this.clearCache()
                    }

                    return n.prototype.start = function () {
                        return t.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
                    }, n.prototype.disable = function () {
                        return this.enabled = !1
                    }, n.prototype.stop = function () {
                        return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
                    }, n.prototype.clearCache = function () {
                        return this.cache = new t.SnapshotCache(10)
                    }, n.prototype.visit = function (e, n) {
                        var i, o;
                        return null == n && (n = {}), e = t.Location.wrap(e), this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (i = null != (o = n.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(e, i)) : window.location = e : void 0
                    }, n.prototype.startVisitToLocationWithAction = function (e, n, i) {
                        var o;
                        return t.supported ? (o = this.getRestorationDataForIdentifier(i), this.startVisit(e, n, {restorationData: o})) : window.location = e
                    }, n.prototype.startHistory = function () {
                        return this.location = t.Location.wrap(window.location), this.restorationIdentifier = t.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                    }, n.prototype.stopHistory = function () {
                        return this.history.stop()
                    }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (e, n) {
                        return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.push(this.location, this.restorationIdentifier)
                    }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (e, n) {
                        return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.replace(this.location, this.restorationIdentifier)
                    }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function (e, n) {
                        var i;
                        return this.restorationIdentifier = n, this.enabled ? (i = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", {
                            restorationIdentifier: this.restorationIdentifier,
                            restorationData: i,
                            historyChanged: !0
                        }), this.location = t.Location.wrap(e)) : this.adapter.pageInvalidated()
                    }, n.prototype.getCachedSnapshotForLocation = function (t) {
                        var e;
                        return e = this.cache.get(t), e ? e.clone() : void 0
                    }, n.prototype.shouldCacheSnapshot = function () {
                        return this.view.getSnapshot().isCacheable()
                    }, n.prototype.cacheSnapshot = function () {
                        var t;
                        return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), t = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, t.clone())) : void 0
                    }, n.prototype.scrollToAnchor = function (t) {
                        var e;
                        return (e = document.getElementById(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                            x: 0,
                            y: 0
                        })
                    }, n.prototype.scrollToElement = function (t) {
                        return this.scrollManager.scrollToElement(t)
                    }, n.prototype.scrollToPosition = function (t) {
                        return this.scrollManager.scrollToPosition(t)
                    }, n.prototype.scrollPositionChanged = function (t) {
                        var e;
                        return e = this.getCurrentRestorationData(), e.scrollPosition = t
                    }, n.prototype.render = function (t, e) {
                        return this.view.render(t, e)
                    }, n.prototype.viewInvalidated = function () {
                        return this.adapter.pageInvalidated()
                    }, n.prototype.viewWillRender = function (t) {
                        return this.notifyApplicationBeforeRender(t)
                    }, n.prototype.viewRendered = function () {
                        return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                    }, n.prototype.pageLoaded = function () {
                        return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                    }, n.prototype.clickCaptured = function () {
                        return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                    }, n.prototype.clickBubbled = function (t) {
                        var e, n, i;
                        return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (t.preventDefault(), e = this.getActionForLink(n), this.visit(i, {action: e})) : void 0
                    }, n.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
                        var n;
                        return n = this.notifyApplicationAfterClickingLinkToLocation(t, e), !n.defaultPrevented
                    }, n.prototype.applicationAllowsVisitingLocation = function (t) {
                        var e;
                        return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented
                    }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function (e, n) {
                        return t.dispatch("turbolinks:click", {target: e, data: {url: n.absoluteURL}, cancelable: !0})
                    }, n.prototype.notifyApplicationBeforeVisitingLocation = function (e) {
                        return t.dispatch("turbolinks:before-visit", {data: {url: e.absoluteURL}, cancelable: !0})
                    }, n.prototype.notifyApplicationAfterVisitingLocation = function (e) {
                        return t.dispatch("turbolinks:visit", {data: {url: e.absoluteURL}})
                    }, n.prototype.notifyApplicationBeforeCachingSnapshot = function () {
                        return t.dispatch("turbolinks:before-cache")
                    }, n.prototype.notifyApplicationBeforeRender = function (e) {
                        return t.dispatch("turbolinks:before-render", {data: {newBody: e}})
                    }, n.prototype.notifyApplicationAfterRender = function () {
                        return t.dispatch("turbolinks:render")
                    }, n.prototype.notifyApplicationAfterPageLoad = function (e) {
                        return null == e && (e = {}), t.dispatch("turbolinks:load", {
                            data: {
                                url: this.location.absoluteURL,
                                timing: e
                            }
                        })
                    }, n.prototype.startVisit = function (t, e, n) {
                        var i;
                        return null != (i = this.currentVisit) && i.cancel(), this.currentVisit = this.createVisit(t, e, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t)
                    }, n.prototype.createVisit = function (e, n, i) {
                        var o, r, s, a, l;
                        return r = null != i ? i : {}, a = r.restorationIdentifier, s = r.restorationData, o = r.historyChanged, l = new t.Visit(this, e, n), l.restorationIdentifier = null != a ? a : t.uuid(), l.restorationData = t.copyObject(s), l.historyChanged = o, l.referrer = this.location, l
                    }, n.prototype.visitCompleted = function (t) {
                        return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
                    }, n.prototype.clickEventIsSignificant = function (t) {
                        return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
                    }, n.prototype.getVisitableLinkForNode = function (e) {
                        return this.nodeIsVisitable(e) ? t.closest(e, "a[href]:not([target])") : void 0
                    }, n.prototype.getVisitableLocationForLink = function (e) {
                        var n;
                        return n = new t.Location(e.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0
                    }, n.prototype.getActionForLink = function (t) {
                        var e;
                        return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
                    }, n.prototype.nodeIsVisitable = function (e) {
                        var n;
                        return !(n = t.closest(e, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks")
                    }, n.prototype.locationIsVisitable = function (t) {
                        return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
                    }, n.prototype.getCurrentRestorationData = function () {
                        return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                    }, n.prototype.getRestorationDataForIdentifier = function (t) {
                        var e;
                        return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
                    }, n
                }()
            }.call(this), function () {
                var e, n, i;
                t.start = function () {
                    return n() ? (null == t.controller && (t.controller = e()), t.controller.start()) : void 0
                }, n = function () {
                    return null == window.Turbolinks && (window.Turbolinks = t), i()
                }, e = function () {
                    var e;
                    return e = new t.Controller, e.adapter = new t.BrowserAdapter(e), e
                }, i = function () {
                    return window.Turbolinks === t
                }, i() && t.start()
            }.call(this)
        }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
    }.call(this), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }

        var o = t(this), r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === r ? [] : r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.button"), r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }

    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap)return e;
        var o = "prev" == t ? -1 : 1, r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function (t) {
        var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"), r = i || this.getItemForDirection(e, o), s = this.interval,
            a = "next" == e ? "left" : "right", l = this;
        if (r.hasClass("active"))return this.sliding = !1;
        var u = r[0], c = t.Event("slide.bs.carousel", {relatedTarget: u, direction: a});
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {relatedTarget: u, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function () {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var o = function (n) {
        var i, o = t(this), r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()), a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function () {
            var i = t(this), o = e(i), r = {relatedTarget: this};
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }

    var o = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.7", s.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o), s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {relatedTarget: this};
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i), s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a", l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e, i) {
        return this.each(function () {
            var o = t(this), r = o.data("bs.modal"), s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }

    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this, o = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {relatedTarget: e});
            o ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this), o = i.attr("href"), r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tooltip"), r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)if (this.inState[t])return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)return;
            var o = this, r = this.tip(), s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i, u = l.test(a);
            u && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(), d = r[0].offsetWidth, p = r[0].offsetHeight;
            if (u) {
                var h = a, f = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > f.bottom ? "top" : "top" == a && c.top - p < f.top ? "bottom" : "right" == a && c.right + d > f.width ? "left" : "left" == a && c.left - d < f.left ? "right" : a, r.removeClass(h).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, d, p);
            this.applyPlacement(m, a);
            var g = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(), o = i[0].offsetWidth, r = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth, u = i[0].offsetHeight;
        "top" == n && u != r && (e.top = e.top + r - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var d = /top|bottom/.test(n), p = d ? 2 * c.left - o + l : 2 * c.top - r + u,
            h = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][h], d)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }

        var o = this, r = t(this.$tip), s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
        var r = window.SVGElement && n instanceof window.SVGElement, s = i ? {top: 0, left: 0} : r ? null : e.offset(),
            a = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
            l = i ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, o, a, l, s)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = {top: 0, left: 0};
        if (!this.$viewport)return o;
        var r = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll, l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var u = e.left - r, c = e.left + r + n;
            u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, n.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.popover"), r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"), r = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                s = t.Event("show.bs.tab", {relatedTarget: o[0]});
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }

        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var o = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.affix"), r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(), r = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed)return n > o && "top";
        if ("bottom" == this.affixed)return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(t - i >= o + s) && "bottom";
        var a = null == this.affixed, l = a ? o : r.top, u = a ? s : e;
        return null != n && n >= o ? "top" : null != i && l + u >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), i = this.options.offset, o = i.top, r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented())return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: s - e - r})
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o), s = r.data("bs.collapse"), a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.scrollspy"), r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }

    e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, n = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), o = e.data("target") || e.attr("href"), r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0])return this.activeTarget = null, this.clear();
        for (t = o.length; t--;)s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), window.Modernizr = function (t, e, n) {
    function i(t) {
        b.cssText = t
    }

    function o(t, e) {
        return i(C.join(t + ";") + (e || ""))
    }

    function r(t, e) {
        return typeof t === e
    }

    function s(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function a(t, e) {
        for (var i in t) {
            var o = t[i];
            if (!s(o, "-") && b[o] !== n)return "pfx" != e || o
        }
        return !1
    }

    function l(t, e, i) {
        for (var o in t) {
            var s = e[t[o]];
            if (s !== n)return i === !1 ? t[o] : r(s, "function") ? s.bind(i || e) : s
        }
        return !1
    }

    function u(t, e, n) {
        var i = t.charAt(0).toUpperCase() + t.slice(1), o = (t + " " + E.join(i + " ") + i).split(" ");
        return r(e, "string") || r(e, "undefined") ? a(o, e) : (o = (t + " " + k.join(i + " ") + i).split(" "), l(o, e, n))
    }

    function c() {
        f.input = function (n) {
            for (var i = 0, o = n.length; i < o; i++)N[n[i]] = n[i] in w;
            return N.list && (N.list = !!e.createElement("datalist") && !!t.HTMLDataListElement), N
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function (t) {
            for (var i, o, r, s = 0,
                     a = t.length; s < a; s++)w.setAttribute("type", o = t[s]), i = "text" !== w.type, i && (w.value = x, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (g.appendChild(w), r = e.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != x)), $[t[s]] = !!i;
            return $
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var d, p, h = "2.6.2", f = {}, m = !0, g = e.documentElement, v = "modernizr", y = e.createElement(v), b = y.style,
        w = e.createElement("input"), x = ":)", T = {}.toString, C = " -webkit- -moz- -o- -ms- ".split(" "),
        S = "Webkit Moz O ms", E = S.split(" "), k = S.toLowerCase().split(" "),
        A = {svg: "http://www.w3.org/2000/svg"}, I = {}, $ = {}, N = {}, D = [], L = D.slice,
        P = function (t, n, i, o) {
            var r, s, a, l, u = e.createElement("div"), c = e.body, d = c || e.createElement("body");
            if (parseInt(i, 10))for (; i--;)a = e.createElement("div"), a.id = o ? o[i] : v + (i + 1), u.appendChild(a);
            return r = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), u.id = v, (c ? u : d).innerHTML += r, d.appendChild(u), c || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), s = n(u, t), c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = l), !!s
        }, R = function (e) {
            var n = t.matchMedia || t.msMatchMedia;
            if (n)return n(e).matches;
            var i;
            return P("@media " + e + " { #" + v + " { position: absolute; } }", function (e) {
                i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
            }), i
        }, j = function () {
            function t(t, o) {
                o = o || e.createElement(i[t] || "div"), t = "on" + t;
                var s = t in o;
                return s || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), s = r(o[t], "function"), r(o[t], "undefined") || (o[t] = n), o.removeAttribute(t))), o = null, s
            }

            var i = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return t
        }(), q = {}.hasOwnProperty;
    p = r(q, "undefined") || r(q.call, "undefined") ? function (t, e) {
        return e in t && r(t.constructor.prototype[e], "undefined")
    } : function (t, e) {
        return q.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function (t) {
        var e = this;
        if ("function" != typeof e)throw new TypeError;
        var n = L.call(arguments, 1), i = function () {
            if (this instanceof i) {
                var o = function () {
                };
                o.prototype = e.prototype;
                var r = new o, s = e.apply(r, n.concat(L.call(arguments)));
                return Object(s) === s ? s : r
            }
            return e.apply(t, n.concat(L.call(arguments)))
        };
        return i
    }), I.flexbox = function () {
        return u("flexWrap")
    }, I.canvas = function () {
        var t = e.createElement("canvas");
        return !!t.getContext && !!t.getContext("2d")
    }, I.canvastext = function () {
        return !!f.canvas && !!r(e.createElement("canvas").getContext("2d").fillText, "function")
    }, I.webgl = function () {
        return !!t.WebGLRenderingContext
    }, I.touch = function () {
        var n;
        return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : P(["@media (", C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
            n = 9 === t.offsetTop
        }), n
    }, I.geolocation = function () {
        return "geolocation" in navigator
    }, I.postmessage = function () {
        return !!t.postMessage
    }, I.websqldatabase = function () {
        return !!t.openDatabase
    }, I.indexedDB = function () {
        return !!u("indexedDB", t)
    }, I.hashchange = function () {
        return j("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
    }, I.history = function () {
        return !!t.history && !!history.pushState
    }, I.draganddrop = function () {
        var t = e.createElement("div");
        return "draggable" in t || "ondragstart" in t && "ondrop" in t
    }, I.websockets = function () {
        return "WebSocket" in t || "MozWebSocket" in t
    }, I.rgba = function () {
        return i("background-color:rgba(150,255,150,.5)"), s(b.backgroundColor, "rgba")
    }, I.hsla = function () {
        return i("background-color:hsla(120,40%,100%,.5)"), s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla")
    }, I.multiplebgs = function () {
        return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, I.backgroundsize = function () {
        return u("backgroundSize")
    }, I.borderimage = function () {
        return u("borderImage")
    }, I.borderradius = function () {
        return u("borderRadius")
    }, I.boxshadow = function () {
        return u("boxShadow")
    }, I.textshadow = function () {
        return "" === e.createElement("div").style.textShadow
    }, I.opacity = function () {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, I.cssanimations = function () {
        return u("animationName")
    }, I.csscolumns = function () {
        return u("columnCount")
    }, I.cssgradients = function () {
        var t = "background-image:", e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return i((t + "-webkit- ".split(" ").join(e + t) + C.join(n + t)).slice(0, -t.length)), s(b.backgroundImage, "gradient")
    }, I.cssreflections = function () {
        return u("boxReflect")
    }, I.csstransforms = function () {
        return !!u("transform")
    }, I.csstransforms3d = function () {
        var t = !!u("perspective");
        return t && "webkitPerspective" in g.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight
        }), t
    }, I.csstransitions = function () {
        return u("transition")
    }, I.fontface = function () {
        var t;
        return P('@fonts-face {fonts-family:"fonts";src:url("https://")}', function (n, i) {
            var o = e.getElementById("smodernizr"), r = o.sheet || o.styleSheet,
                s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
        }), t
    }, I.generatedcontent = function () {
        var t;
        return P(["#", v, "{fonts:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;fonts:3px/1 a}'].join(""), function (e) {
            t = e.offsetHeight >= 3
        }), t
    }, I.video = function () {
        var t = e.createElement("video"), n = !1;
        try {
            (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (t) {
        }
        return n
    }, I.audio = function () {
        var t = e.createElement("audio"), n = !1;
        try {
            (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (t) {
        }
        return n
    }, I.localstorage = function () {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (t) {
            return !1
        }
    }, I.sessionstorage = function () {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (t) {
            return !1
        }
    }, I.webworkers = function () {
        return !!t.Worker
    }, I.applicationcache = function () {
        return !!t.applicationCache
    }, I.svg = function () {
        return !!e.createElementNS && !!e.createElementNS(A.svg, "svg").createSVGRect
    }, I.inlinesvg = function () {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == A.svg
    }, I.smil = function () {
        return !!e.createElementNS && /SVGAnimate/.test(T.call(e.createElementNS(A.svg, "animate")))
    }, I.svgclippaths = function () {
        return !!e.createElementNS && /SVGClipPath/.test(T.call(e.createElementNS(A.svg, "clipPath")))
    };
    for (var O in I)p(I, O) && (d = O.toLowerCase(), f[d] = I[O](), D.push((f[d] ? "" : "no-") + d));
    return f.input || c(), f.addTest = function (t, e) {
        if ("object" == typeof t)for (var i in t)p(t, i) && f.addTest(i, t[i]); else {
            if (t = t.toLowerCase(), f[t] !== n)return f;
            e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), f[t] = e
        }
        return f
    }, i(""), y = w = null, function (t, e) {
        function n(t, e) {
            var n = t.createElement("p"), i = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }

        function i() {
            var t = v.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function o(t) {
            var e = g[t[f]];
            return e || (e = {}, m++, t[f] = m, g[m] = e), e
        }

        function r(t, n, i) {
            if (n || (n = e), c)return n.createElement(t);
            i || (i = o(n));
            var r;
            return r = i.cache[t] ? i.cache[t].cloneNode() : h.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), r.canHaveChildren && !p.test(t) ? i.frag.appendChild(r) : r
        }

        function s(t, n) {
            if (t || (t = e), c)return t.createDocumentFragment();
            n = n || o(t);
            for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; s < l; s++)r.createElement(a[s]);
            return r
        }

        function a(t, e) {
            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
                return v.shivMethods ? r(n, t, e) : e.createElem(n)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (t) {
                    return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                }) + ");return n}")(v, e.frag)
        }

        function l(t) {
            t || (t = e);
            var i = o(t);
            return v.shivCSS && !u && !i.hasCSS && (i.hasCSS = !!n(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), c || a(t, i), t
        }

        var u, c, d = t.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            f = "_html5shiv", m = 0, g = {};
        !function () {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", u = "hidden" in t, c = 1 == t.childNodes.length || function () {
                        e.createElement("a");
                        var t = e.createDocumentFragment();
                        return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                    }()
            } catch (t) {
                u = !0, c = !0
            }
        }();
        var v = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: c,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: r,
            createDocumentFragment: s
        };
        t.html5 = v, l(e)
    }(this, e), f._version = h, f._prefixes = C, f._domPrefixes = k, f._cssomPrefixes = E, f.mq = R, f.hasEvent = j, f.testProp = function (t) {
        return a([t])
    }, f.testAllProps = u, f.testStyles = P, f.prefixed = function (t, e, n) {
        return e ? u(t, e, n) : u(t, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + D.join(" ") : ""), f
}(this, this.document), function (t, e, n) {
    function i(t) {
        return "[object Function]" == g.call(t)
    }

    function o(t) {
        return "string" == typeof t
    }

    function r() {
    }

    function s(t) {
        return !t || "loaded" == t || "complete" == t || "uninitialized" == t
    }

    function a() {
        var t = v.shift();
        y = 1, t ? t.t ? f(function () {
            ("c" == t.t ? p.injectCss : p.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
        }, 0) : (t(), a()) : y = 0
    }

    function l(t, n, i, o, r, l, u) {
        function c(e) {
            if (!h && s(d.readyState) && (b.r = h = 1, !y && a(), d.onload = d.onreadystatechange = null, e)) {
                "img" != t && f(function () {
                    x.removeChild(d)
                }, 50);
                for (var i in k[n])k[n].hasOwnProperty(i) && k[n][i].onload()
            }
        }

        var u = u || p.errorTimeout, d = e.createElement(t), h = 0, g = 0, b = {t: i, s: n, e: r, a: l, x: u};
        1 === k[n] && (g = 1, k[n] = []), "object" == t ? d.data = n : (d.src = n, d.type = t), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function () {
            c.call(this, g)
        }, v.splice(o, 0, b), "img" != t && (g || 2 === k[n] ? (x.insertBefore(d, w ? null : m), f(c, u)) : k[n].push(d))
    }

    function u(t, e, n, i, r) {
        return y = 0, e = e || "j", o(t) ? l("c" == e ? C : T, t, e, this.i++, n, i, r) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
    }

    function c() {
        var t = p;
        return t.loader = {load: u, i: 0}, t
    }

    var d, p, h = e.documentElement, f = t.setTimeout, m = e.getElementsByTagName("script")[0], g = {}.toString, v = [],
        y = 0, b = "MozAppearance" in h.style, w = b && !!e.createRange().compareNode, x = w ? h : m.parentNode,
        h = t.opera && "[object Opera]" == g.call(t.opera), h = !!e.attachEvent && !h,
        T = b ? "object" : h ? "script" : "img", C = h ? "script" : T, S = Array.isArray || function (t) {
                return "[object Array]" == g.call(t)
            }, E = [], k = {}, A = {
            timeout: function (t, e) {
                return e.length && (t.timeout = e[0]), t
            }
        };
    p = function (t) {
        function e(t) {
            var e, n, i, t = t.split("!"), o = E.length, r = t.pop(), s = t.length,
                r = {url: r, origUrl: r, prefixes: t};
            for (n = 0; n < s; n++)i = t[n].split("="), (e = A[i.shift()]) && (r = e(r, i));
            for (n = 0; n < o; n++)r = E[n](r);
            return r
        }

        function s(t, o, r, s, a) {
            var l = e(t), u = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = i(o) ? o : o[t] || o[s] || o[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, o, r, s, a) : (k[l.url] ? l.noexec = !0 : k[l.url] = 1, r.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(o) || i(u)) && r.load(function () {
                c(), o && o(l.origUrl, a, s), u && u(l.origUrl, a, s), k[l.url] = 2
            })))
        }

        function a(t, e) {
            function n(t, n) {
                if (t) {
                    if (o(t)) n || (d = function () {
                        var t = [].slice.call(arguments);
                        p.apply(this, t), h()
                    }), s(t, d, e, 0, u); else if (Object(t) === t)for (l in a = function () {
                        var e, n = 0;
                        for (e in t)t.hasOwnProperty(e) && n++;
                        return n
                    }(), t)t.hasOwnProperty(l) && (!n && !--a && (i(d) ? d = function () {
                        var t = [].slice.call(arguments);
                        p.apply(this, t), h()
                    } : d[l] = function (t) {
                        return function () {
                            var e = [].slice.call(arguments);
                            t && t.apply(this, e), h()
                        }
                    }(p[l])), s(t[l], d, e, l, u))
                } else!n && h()
            }

            var a, l, u = !!t.test, c = t.load || t.both, d = t.callback || r, p = d, h = t.complete || r;
            n(u ? t.yep : t.nope, !!c), c && n(c)
        }

        var l, u, d = this.yepnope.loader;
        if (o(t)) s(t, 0, d, 0); else if (S(t))for (l = 0; l < t.length; l++)u = t[l], o(u) ? s(u, 0, d, 0) : S(u) ? p(u) : Object(u) === u && a(u, d); else Object(t) === t && a(t, d)
    }, p.addPrefix = function (t, e) {
        A[t] = e
    }, p.addFilter = function (t) {
        E.push(t)
    }, p.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", d = function () {
        e.removeEventListener("DOMContentLoaded", d, 0), e.readyState = "complete"
    }, 0)), t.yepnope = c(), t.yepnope.executeStack = a, t.yepnope.injectJs = function (t, n, i, o, l, u) {
        var c, d, h = e.createElement("script"), o = o || p.errorTimeout;
        h.src = t;
        for (d in i)h.setAttribute(d, i[d]);
        n = u ? a : n || r, h.onreadystatechange = h.onload = function () {
            !c && s(h.readyState) && (c = 1, n(), h.onload = h.onreadystatechange = null)
        }, f(function () {
            c || (c = 1, n(1))
        }, o), l ? h.onload() : m.parentNode.insertBefore(h, m)
    }, t.yepnope.injectCss = function (t, n, i, o, s, l) {
        var u, o = e.createElement("link"), n = l ? a : n || r;
        o.href = t, o.rel = "stylesheet", o.type = "text/css";
        for (u in i)o.setAttribute(u, i[u]);
        s || (m.parentNode.insertBefore(o, m), f(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, function () {
    var t = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++)if (e in this && this[e] === t)return e;
            return -1
        }, e = [].slice;
    !function (t, e) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (n) {
            return e(n, t)
        }) : e(t.jQuery, t)
    }(this, function (n, i) {
        var o, r, s, a, l, u, c, d, p, h, f, m, g, v, y, b;
        return o = n(i), d = t.call(i, "ontouchstart") >= 0, a = {
            horizontal: {},
            vertical: {}
        }, l = 1, c = {}, u = "waypoints-context-id", f = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", y = "waypoint", b = "waypoints", r = function () {
            function t(t) {
                var e = this;
                this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, t.data(u, this.id), c[this.id] = this, t.bind(m, function () {
                    var t;
                    if (!e.didScroll && !d)return e.didScroll = !0, t = function () {
                        return e.doScroll(), e.didScroll = !1
                    }, i.setTimeout(t, n[b].settings.scrollThrottle)
                }), t.bind(f, function () {
                    var t;
                    if (!e.didResize)return e.didResize = !0, t = function () {
                        return n[b]("refresh"), e.didResize = !1
                    }, i.setTimeout(t, n[b].settings.resizeThrottle)
                })
            }

            return t.prototype.doScroll = function () {
                var t, e = this;
                return t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !d || t.vertical.oldScroll && t.vertical.newScroll || n[b]("refresh"), n.each(t, function (t, i) {
                    var o, r, s;
                    return s = [], r = i.newScroll > i.oldScroll, o = r ? i.forward : i.backward, n.each(e.waypoints[t], function (t, e) {
                        var n, o;
                        return i.oldScroll < (n = e.offset) && n <= i.newScroll ? s.push(e) : i.newScroll < (o = e.offset) && o <= i.oldScroll ? s.push(e) : void 0
                    }), s.sort(function (t, e) {
                        return t.offset - e.offset
                    }), r || s.reverse(), n.each(s, function (t, e) {
                        if (e.options.continuous || t === s.length - 1)return e.trigger([o])
                    })
                }), this.oldScroll = {x: t.horizontal.newScroll, y: t.vertical.newScroll}
            }, t.prototype.refresh = function () {
                var t, e, i, o = this;
                return i = n.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                    horizontal: {
                        contextOffset: i ? 0 : e.left,
                        contextScroll: i ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: i ? 0 : e.top,
                        contextScroll: i ? 0 : this.oldScroll.y,
                        contextDimension: i ? n[b]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(t, function (t, e) {
                    return n.each(o.waypoints[t], function (t, i) {
                        var o, r, s, a, l;
                        if (o = i.options.offset, s = i.offset, r = n.isWindow(i.element) ? 0 : i.$element.offset()[e.offsetProp], n.isFunction(o) ? o = o.apply(i.element) : "string" == typeof o && (o = parseFloat(o), i.options.offset.indexOf("%") > -1 && (o = Math.ceil(e.contextDimension * o / 100))), i.offset = r - e.contextOffset + e.contextScroll - o, (!i.options.onlyOnScroll || null == s) && i.enabled)return null !== s && s < (a = e.oldScroll) && a <= i.offset ? i.trigger([e.backward]) : null !== s && s > (l = e.oldScroll) && l >= i.offset ? i.trigger([e.forward]) : null === s && e.oldScroll >= i.offset ? i.trigger([e.forward]) : void 0
                    })
                })
            }, t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical))return this.$element.unbind([f, m].join(" ")), delete c[this.id]
            }, t
        }(), s = function () {
            function t(t, e, i) {
                var o, r;
                i = n.extend({}, n.fn[y].defaults, i), "bottom-in-view" === i.offset && (i.offset = function () {
                    var t;
                    return t = n[b]("viewportHeight"), n.isWindow(e.element) || (t = e.$element.height()), t - n(this).outerHeight()
                }), this.$element = t, this.element = t[0], this.axis = i.horizontal ? "horizontal" : "vertical", this.callback = i.handler, this.context = e, this.enabled = i.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = i, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, o = null != (r = t.data(v)) ? r : [], o.push(this.id), t.data(v, o)
            }

            return t.prototype.trigger = function (t) {
                if (this.enabled)return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
            }, t.prototype.disable = function () {
                return this.enabled = !1
            }, t.prototype.enable = function () {
                return this.context.refresh(),
                    this.enabled = !0
            }, t.prototype.destroy = function () {
                return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, t.getWaypointsByElement = function (t) {
                var e, i;
                return (i = n(t).data(v)) ? (e = n.extend({}, a.horizontal, a.vertical), n.map(i, function (t) {
                    return e[t]
                })) : []
            }, t
        }(), h = {
            init: function (t, e) {
                var i;
                return null == e && (e = {}), null == (i = e.handler) && (e.handler = t), this.each(function () {
                    var t, i, o, a;
                    return t = n(this), o = null != (a = e.context) ? a : n.fn[y].defaults.context, n.isWindow(o) || (o = t.closest(o)), o = n(o), i = c[o.data(u)], i || (i = new r(o)), new s(t, i, e)
                }), n[b]("refresh"), this
            }, disable: function () {
                return h._invoke(this, "disable")
            }, enable: function () {
                return h._invoke(this, "enable")
            }, destroy: function () {
                return h._invoke(this, "destroy")
            }, prev: function (t, e) {
                return h._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0)return t.push(n[e - 1])
                })
            }, next: function (t, e) {
                return h._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1)return t.push(n[e + 1])
                })
            }, _traverse: function (t, e, o) {
                var r, s;
                return null == t && (t = "vertical"), null == e && (e = i), s = p.aggregate(e), r = [], this.each(function () {
                    var e;
                    return e = n.inArray(this, s[t]), o(r, e, s[t])
                }), this.pushStack(r)
            }, _invoke: function (t, e) {
                return t.each(function () {
                    var t;
                    return t = s.getWaypointsByElement(this), n.each(t, function (t, n) {
                        return n[e](), !0
                    })
                }), this
            }
        }, n.fn[y] = function () {
            var t, i;
            return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], h[i] ? h[i].apply(this, t) : n.isFunction(i) ? h.init.apply(this, arguments) : n.isPlainObject(i) ? h.init.apply(this, [null, i]) : i ? n.error("The " + i + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[y].defaults = {
            context: i,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, p = {
            refresh: function () {
                return n.each(c, function (t, e) {
                    return e.refresh()
                })
            }, viewportHeight: function () {
                var t;
                return null != (t = i.innerHeight) ? t : o.height()
            }, aggregate: function (t) {
                var e, i, o;
                return e = a, t && (e = null != (o = c[n(t).data(u)]) ? o.waypoints : void 0), e ? (i = {
                    horizontal: [],
                    vertical: []
                }, n.each(i, function (t, o) {
                    return n.each(e[t], function (t, e) {
                        return o.push(e)
                    }), o.sort(function (t, e) {
                        return t.offset - e.offset
                    }), i[t] = n.map(o, function (t) {
                        return t.element
                    }), i[t] = n.unique(i[t])
                }), i) : []
            }, above: function (t) {
                return null == t && (t = i), p._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y
                })
            }, below: function (t) {
                return null == t && (t = i), p._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y
                })
            }, left: function (t) {
                return null == t && (t = i), p._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x
                })
            }, right: function (t) {
                return null == t && (t = i), p._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x
                })
            }, enable: function () {
                return p._invoke("enable")
            }, disable: function () {
                return p._invoke("disable")
            }, destroy: function () {
                return p._invoke("destroy")
            }, extendFn: function (t, e) {
                return h[t] = e
            }, _invoke: function (t) {
                var e;
                return e = n.extend({}, a.vertical, a.horizontal), n.each(e, function (e, n) {
                    return n[t](), !0
                })
            }, _filter: function (t, e, i) {
                var o, r;
                return (o = c[n(t).data(u)]) ? (r = [], n.each(o.waypoints[e], function (t, e) {
                    if (i(o, e))return r.push(e)
                }), r.sort(function (t, e) {
                    return t.offset - e.offset
                }), n.map(r, function (t) {
                    return t.element
                })) : []
            }
        }, n[b] = function () {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[n] ? p[n].apply(null, t) : p.aggregate.call(null, n)
        }, n[b].settings = {resizeThrottle: 100, scrollThrottle: 30}, o.load(function () {
            return n[b]("refresh")
        })
    })
}.call(this), "function" != typeof Object.create && (Object.create = function (t) {
    function e() {
    }

    return e.prototype = t, new e
}), function (t, e, n) {
    var i = {
        init: function (e, n) {
            var i = this;
            i.$elem = t(n), i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e), i.userOptions = e, i.loadContent()
        }, loadContent: function () {
            function e(t) {
                var e, n = "";
                if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]); else {
                    for (e in t.owl)t.owl.hasOwnProperty(e) && (n += t.owl[e].item);
                    i.$elem.html(n)
                }
                i.logIn()
            }

            var n, i = this;
            "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (n = i.options.jsonPath, t.getJSON(n, e)) : i.logIn()
        }, logIn: function () {
            var t = this;
            t.$elem.data({
                "owl-originalStyles": t.$elem.attr("style"),
                "owl-originalClasses": t.$elem.attr("class")
            }), t.$elem.css({opacity: 0}), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars()
        }, setVars: function () {
            var t = this;
            return 0 !== t.$elem.children().length && (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), void t.onStartup())
        }, onStartup: function () {
            var t = this;
            t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle), t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
        }, eachMoveUpdate: function () {
            var t = this;
            t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
        }, updateVars: function () {
            var t = this;
            "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
        }, reload: function () {
            var t = this;
            e.setTimeout(function () {
                t.updateVars()
            }, 0)
        }, watchVisibility: function () {
            var t = this;
            return t.$elem.is(":visible") === !1 && (t.$elem.css({opacity: 0}), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function () {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({opacity: 1}, 200), e.clearInterval(t.checkVisible))
                }, 500)))
        }, wrapItems: function () {
            var t = this;
            t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
        }, baseClass: function () {
            var t = this, e = t.$elem.hasClass(t.options.baseClass), n = t.$elem.hasClass(t.options.theme);
            e || t.$elem.addClass(t.options.baseClass), n || t.$elem.addClass(t.options.theme)
        }, updateItems: function () {
            var e, n, i = this;
            if (i.options.responsive === !1)return !1;
            if (i.options.singleItem === !0)return i.options.items = i.orignalItems = 1, i.options.itemsCustom = !1, i.options.itemsDesktop = !1, i.options.itemsDesktopSmall = !1, i.options.itemsTablet = !1, i.options.itemsTabletSmall = !1, i.options.itemsMobile = !1, !1;
            if (e = t(i.options.responsiveBaseWidth).width(), e > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1)for (i.options.itemsCustom.sort(function (t, e) {
                return t[0] - e[0]
            }), n = 0; n < i.options.itemsCustom.length; n += 1)i.options.itemsCustom[n][0] <= e && (i.options.items = i.options.itemsCustom[n][1]); else e <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]), e <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]), e <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]), e <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]), e <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
            i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount)
        }, response: function () {
            var n, i, o = this;
            return o.options.responsive === !0 && (i = t(e).width(), o.resizer = function () {
                    t(e).width() !== i && (o.options.autoPlay !== !1 && e.clearInterval(o.autoPlayInterval), e.clearTimeout(n), n = e.setTimeout(function () {
                        i = t(e).width(), o.updateVars()
                    }, o.options.responsiveRefreshRate))
                }, void t(e).resize(o.resizer))
        }, updatePosition: function () {
            var t = this;
            t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp()
        }, appendItemsSizes: function () {
            var e = this, n = 0, i = e.itemsAmount - e.options.items;
            e.$owlItems.each(function (o) {
                var r = t(this);
                r.css({width: e.itemWidth}).data("owl-item", Number(o)), o % e.options.items !== 0 && o !== i || o > i || (n += 1), r.data("owl-roundPages", n)
            })
        }, appendWrapperSizes: function () {
            var t = this, e = t.$owlItems.length * t.itemWidth;
            t.$owlWrapper.css({width: 2 * e, left: 0}), t.appendItemsSizes()
        }, calculateAll: function () {
            var t = this;
            t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
        }, calculateWidth: function () {
            var t = this;
            t.itemWidth = Math.round(t.$elem.width() / t.options.items)
        }, max: function () {
            var t = this, e = (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth) * -1;
            return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
        }, min: function () {
            return 0
        }, loops: function () {
            var e, n, i, o = this, r = 0, s = 0;
            for (o.positionsInArray = [0], o.pagesInArray = [], e = 0; e < o.itemsAmount; e += 1)s += o.itemWidth, o.positionsInArray.push(-s), o.options.scrollPerPage === !0 && (n = t(o.$owlItems[e]), i = n.data("owl-roundPages"), i !== r && (o.pagesInArray[r] = o.positionsInArray[e], r = i))
        }, buildControls: function () {
            var e = this;
            e.options.navigation !== !0 && e.options.pagination !== !0 || (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons()
        }, buildButtons: function () {
            var e = this, n = t('<div class="owl-buttons"/>');
            e.owlControls.append(n), e.buttonPrev = t("<div/>", {
                "class": "owl-prev",
                html: e.options.navigationText[0] || ""
            }), e.buttonNext = t("<div/>", {
                "class": "owl-next",
                html: e.options.navigationText[1] || ""
            }), n.append(e.buttonPrev).append(e.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (t) {
                t.preventDefault()
            }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (n) {
                n.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
            })
        }, buildPagination: function () {
            var e = this;
            e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (n) {
                n.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
            })
        }, updatePagination: function () {
            var e, n, i, o, r, s, a = this;
            if (a.options.pagination === !1)return !1;
            for (a.paginationWrapper.html(""), e = 0, n = a.itemsAmount - a.itemsAmount % a.options.items, o = 0; o < a.itemsAmount; o += 1)o % a.options.items === 0 && (e += 1, n === o && (i = a.itemsAmount - a.options.items), r = t("<div/>", {"class": "owl-page"}), s = t("<span></span>", {
                text: a.options.paginationNumbers === !0 ? e : "",
                "class": a.options.paginationNumbers === !0 ? "owl-numbers" : ""
            }), r.append(s), r.data("owl-page", n === o ? i : o), r.data("owl-roundPages", e), a.paginationWrapper.append(r));
            a.checkPagination()
        }, checkPagination: function () {
            var e = this;
            return e.options.pagination !== !1 && void e.paginationWrapper.find(".owl-page").each(function () {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
        }, checkNavigation: function () {
            var t = this;
            return t.options.navigation !== !1 && void(t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled"))))
        }, updateControls: function () {
            var t = this;
            t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
        }, destroyControls: function () {
            var t = this;
            t.owlControls && t.owlControls.remove()
        }, next: function (t) {
            var e = this;
            if (e.isTransition)return !1;
            if (e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0)) {
                if (e.options.rewindNav !== !0)return e.currentItem = e.maximumItem, !1;
                e.currentItem = 0, t = "rewind"
            }
            e.goTo(e.currentItem, t)
        }, prev: function (t) {
            var e = this;
            if (e.isTransition)return !1;
            if (e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) {
                if (e.options.rewindNav !== !0)return e.currentItem = 0, !1;
                e.currentItem = e.maximumItem, t = "rewind"
            }
            e.goTo(e.currentItem, t)
        }, goTo: function (t, n, i) {
            var o, r = this;
            return !r.isTransition && ("function" == typeof r.options.beforeMove && r.options.beforeMove.apply(this, [r.$elem]), t >= r.maximumItem ? t = r.maximumItem : t <= 0 && (t = 0), r.currentItem = r.owl.currentItem = t, r.options.transitionStyle !== !1 && "drag" !== i && 1 === r.options.items && r.browser.support3d === !0 ? (r.swapSpeed(0), r.browser.support3d === !0 ? r.transition3d(r.positionsInArray[t]) : r.css2slide(r.positionsInArray[t], 1), r.afterGo(), r.singleItemTransition(), !1) : (o = r.positionsInArray[t], r.browser.support3d === !0 ? (r.isCss3Finish = !1, n === !0 ? (r.swapSpeed("paginationSpeed"), e.setTimeout(function () {
                    r.isCss3Finish = !0
                }, r.options.paginationSpeed)) : "rewind" === n ? (r.swapSpeed(r.options.rewindSpeed), e.setTimeout(function () {
                    r.isCss3Finish = !0
                }, r.options.rewindSpeed)) : (r.swapSpeed("slideSpeed"), e.setTimeout(function () {
                    r.isCss3Finish = !0
                }, r.options.slideSpeed)), r.transition3d(o)) : n === !0 ? r.css2slide(o, r.options.paginationSpeed) : "rewind" === n ? r.css2slide(o, r.options.rewindSpeed) : r.css2slide(o, r.options.slideSpeed), void r.afterGo()))
        }, jumpTo: function (t) {
            var e = this;
            "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || t === -1 ? t = e.maximumItem : t <= 0 && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
        }, afterGo: function () {
            var t = this;
            t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
        }, stop: function () {
            var t = this;
            t.apStatus = "stop", e.clearInterval(t.autoPlayInterval)
        }, checkAp: function () {
            var t = this;
            "stop" !== t.apStatus && t.play()
        }, play: function () {
            var t = this;
            return t.apStatus = "play", t.options.autoPlay !== !1 && (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function () {
                t.next(!0)
            }, t.options.autoPlay)))
        }, swapSpeed: function (t) {
            var e = this;
            "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
        }, addCssSpeed: function (t) {
            return {
                "-webkit-transition": "all " + t + "ms ease",
                "-moz-transition": "all " + t + "ms ease",
                "-o-transition": "all " + t + "ms ease",
                transition: "all " + t + "ms ease"
            }
        }, removeTransition: function () {
            return {"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: ""}
        }, doTranslate: function (t) {
            return {
                "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                transform: "translate3d(" + t + "px, 0px,0px)"
            }
        }, transition3d: function (t) {
            var e = this;
            e.$owlWrapper.css(e.doTranslate(t))
        }, css2move: function (t) {
            var e = this;
            e.$owlWrapper.css({left: t})
        }, css2slide: function (t, e) {
            var n = this;
            n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({left: t}, {
                duration: e || n.options.slideSpeed,
                complete: function () {
                    n.isCssFinish = !0
                }
            })
        }, checkBrowser: function () {
            var t, i, o, r, s = this, a = "translate3d(0px, 0px, 0px)", l = n.createElement("div");
            l.style.cssText = "  -moz-transform:" + a + "; -ms-transform:" + a + "; -o-transform:" + a + "; -webkit-transform:" + a + "; transform:" + a, t = /translate3d\(0px, 0px, 0px\)/g, i = l.style.cssText.match(t), o = null !== i && 1 === i.length, r = "ontouchstart" in e || e.navigator.msMaxTouchPoints, s.browser = {
                support3d: o,
                isTouch: r
            }
        }, moveEvents: function () {
            var t = this;
            t.options.mouseDrag === !1 && t.options.touchDrag === !1 || (t.gestures(), t.disabledEvents())
        }, eventTypes: function () {
            var t = this, e = ["s", "e", "x"];
            t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
        }, disabledEvents: function () {
            var e = this;
            e.$elem.on("dragstart.owl", function (t) {
                t.preventDefault()
            }), e.$elem.on("mousedown.disableTextSelect", function (e) {
                return t(e.target).is("input, textarea, select, option")
            })
        }, gestures: function () {
            function i(t) {
                if (void 0 !== t.touches)return {x: t.touches[0].pageX, y: t.touches[0].pageY};
                if (void 0 === t.touches) {
                    if (void 0 !== t.pageX)return {x: t.pageX, y: t.pageY};
                    if (void 0 === t.pageX)return {x: t.clientX, y: t.clientY}
                }
            }

            function o(e) {
                "on" === e ? (t(n).on(l.ev_types.move, s), t(n).on(l.ev_types.end, a)) : "off" === e && (t(n).off(l.ev_types.move), t(n).off(l.ev_types.end))
            }

            function r(n) {
                var r, s = n.originalEvent || n || e.event;
                if (3 === s.which)return !1;
                if (!(l.itemsAmount <= l.options.items)) {
                    if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish)return !1;
                    if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish)return !1;
                    l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, t(this).css(l.removeTransition()), r = t(this).position(), u.relativePos = r.left, u.offsetX = i(s).x - r.left, u.offsetY = i(s).y - r.top, o("on"), u.sliding = !1, u.targetElement = s.target || s.srcElement
                }
            }

            function s(o) {
                var r, s, a = o.originalEvent || o || e.event;
                l.newPosX = i(a).x - u.offsetX, l.newPosY = i(a).y - u.offsetY, l.newRelativeX = l.newPosX - u.relativePos, "function" == typeof l.options.startDragging && u.dragging !== !0 && 0 !== l.newRelativeX && (u.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== a.preventDefault ? a.preventDefault() : a.returnValue = !1, u.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && u.sliding === !1 && t(n).off("touchmove.owl"), r = function () {
                    return l.newRelativeX / 5
                }, s = function () {
                    return l.maximumPixels + l.newRelativeX / 5
                }, l.newPosX = Math.max(Math.min(l.newPosX, r()), s()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
            }

            function a(n) {
                var i, r, s, a = n.originalEvent || n || e.event;
                a.target = a.target || a.srcElement, u.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.newRelativeX < 0 ? l.dragDirection = l.owl.dragDirection = "left" : l.dragDirection = l.owl.dragDirection = "right", 0 !== l.newRelativeX && (i = l.getNewPosition(), l.goTo(i, !1, "drag"), u.targetElement === a.target && l.browser.isTouch !== !0 && (t(a.target).on("click.disable", function (e) {
                    e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                }), r = t._data(a.target, "events").click, s = r.pop(), r.splice(0, 0, s))), o("off")
            }

            var l = this, u = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", r)
        }, getNewPosition: function () {
            var t = this, e = t.closestItem();
            return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
        }, closestItem: function () {
            var e = this, n = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray, i = e.newPosX,
                o = null;
            return t.each(n, function (r, s) {
                i - e.itemWidth / 20 > n[r + 1] && i - e.itemWidth / 20 < s && "left" === e.moveDirection() ? (o = s, e.options.scrollPerPage === !0 ? e.currentItem = t.inArray(o, e.positionsInArray) : e.currentItem = r) : i + e.itemWidth / 20 < s && i + e.itemWidth / 20 > (n[r + 1] || n[r] - e.itemWidth) && "right" === e.moveDirection() && (e.options.scrollPerPage === !0 ? (o = n[r + 1] || n[n.length - 1], e.currentItem = t.inArray(o, e.positionsInArray)) : (o = n[r + 1], e.currentItem = r + 1))
            }), e.currentItem
        }, moveDirection: function () {
            var t, e = this;
            return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
        }, customEvents: function () {
            var t = this;
            t.$elem.on("owl.next", function () {
                t.next()
            }), t.$elem.on("owl.prev", function () {
                t.prev()
            }), t.$elem.on("owl.play", function (e, n) {
                t.options.autoPlay = n, t.play(), t.hoverStatus = "play"
            }), t.$elem.on("owl.stop", function () {
                t.stop(), t.hoverStatus = "stop"
            }), t.$elem.on("owl.goTo", function (e, n) {
                t.goTo(n)
            }), t.$elem.on("owl.jumpTo", function (e, n) {
                t.jumpTo(n)
            })
        }, stopOnHover: function () {
            var t = this;
            t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function () {
                t.stop()
            }), t.$elem.on("mouseout", function () {
                "stop" !== t.hoverStatus && t.play()
            }))
        }, lazyLoad: function () {
            var e, n, i, o, r, s = this;
            if (s.options.lazyLoad === !1)return !1;
            for (e = 0; e < s.itemsAmount; e += 1)n = t(s.$owlItems[e]), "loaded" !== n.data("owl-loaded") && (i = n.data("owl-item"), o = n.find(".lazyOwl"), "string" == typeof o.data("src") ? (void 0 === n.data("owl-loaded") && (o.hide(), n.addClass("loading").data("owl-loaded", "checked")), r = s.options.lazyFollow !== !0 || i >= s.currentItem, r && i < s.currentItem + s.options.items && o.length && o.each(function () {
                s.lazyPreload(n, t(this))
            })) : n.data("owl-loaded", "loaded"))
        }, lazyPreload: function (t, n) {
            function i() {
                t.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), "fade" === s.options.lazyEffect ? n.fadeIn(400) : n.show(), "function" == typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
            }

            function o() {
                a += 1, s.completeImg(n.get(0)) || r === !0 ? i() : a <= 100 ? e.setTimeout(o, 100) : i()
            }

            var r, s = this, a = 0;
            "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), r = !0) : n[0].src = n.data("src"), o()
        }, autoHeight: function () {
            function n() {
                var n = t(r.$owlItems[r.currentItem]).height();
                r.wrapperOuter.css("height", n + "px"), r.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function () {
                    r.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function i() {
                o += 1, r.completeImg(s.get(0)) ? n() : o <= 100 ? e.setTimeout(i, 100) : r.wrapperOuter.css("height", "")
            }

            var o, r = this, s = t(r.$owlItems[r.currentItem]).find("img");
            void 0 !== s.get(0) ? (o = 0, i()) : n()
        }, completeImg: function (t) {
            var e;
            return !!t.complete && (e = typeof t.naturalWidth, "undefined" === e || 0 !== t.naturalWidth)
        }, onVisibleItems: function () {
            var e, n = this;
            for (n.options.addClassActive === !0 && n.$owlItems.removeClass("active"), n.visibleItems = [], e = n.currentItem; e < n.currentItem + n.options.items; e += 1)n.visibleItems.push(e), n.options.addClassActive === !0 && t(n.$owlItems[e]).addClass("active");
            n.owl.visibleItems = n.visibleItems
        }, transitionTypes: function (t) {
            var e = this;
            e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
        }, singleItemTransition: function () {
            function t(t) {
                return {position: "relative", left: t + "px"}
            }

            var e = this, n = e.outClass, i = e.inClass, o = e.$owlItems.eq(e.currentItem),
                r = e.$owlItems.eq(e.prevItem),
                s = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                a = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
            e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": a + "px",
                "-moz-perspective-origin": a + "px",
                "perspective-origin": a + "px"
            }), r.css(t(s, 10)).addClass(n).on(l, function () {
                e.endPrev = !0, r.off(l), e.clearTransStyle(r, n)
            }), o.addClass(i).on(l, function () {
                e.endCurrent = !0, o.off(l), e.clearTransStyle(o, i)
            })
        }, clearTransStyle: function (t, e) {
            var n = this;
            t.css({
                position: "",
                left: ""
            }).removeClass(e), n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"), n.endPrev = !1, n.endCurrent = !1, n.isTransition = !1)
        }, owlStatus: function () {
            var t = this;
            t.owl = {
                userOptions: t.userOptions,
                baseElement: t.$elem,
                userItems: t.$userItems,
                owlItems: t.$owlItems,
                currentItem: t.currentItem,
                prevItem: t.prevItem,
                visibleItems: t.visibleItems,
                isTouch: t.browser.isTouch,
                browser: t.browser,
                dragDirection: t.dragDirection
            }
        }, clearEvents: function () {
            var i = this;
            i.$elem.off(".owl owl mousedown.disableTextSelect"), t(n).off(".owl owl"), t(e).off("resize", i.resizer)
        }, unWrap: function () {
            var t = this;
            0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr({
                style: t.$elem.data("owl-originalStyles") || "",
                "class": t.$elem.data("owl-originalClasses")
            })
        }, destroy: function () {
            var t = this;
            t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
        }, reinit: function (e) {
            var n = this, i = t.extend({}, n.userOptions, e);
            n.unWrap(), n.init(i, n.$elem)
        }, addItem: function (t, e) {
            var n, i = this;
            return !!t && (0 === i.$elem.children().length ? (i.$elem.append(t), i.setVars(), !1) : (i.unWrap(), n = void 0 === e || e === -1 ? -1 : e, n >= i.$userItems.length || n === -1 ? i.$userItems.eq(-1).after(t) : i.$userItems.eq(n).before(t), void i.setVars()))
        }, removeItem: function (t) {
            var e, n = this;
            return 0 !== n.$elem.children().length && (e = void 0 === t || t === -1 ? -1 : t, n.unWrap(), n.$userItems.eq(e).remove(), void n.setVars())
        }
    };
    t.fn.owlCarousel = function (e) {
        return this.each(function () {
            if (t(this).data("owl-init") === !0)return !1;
            t(this).data("owl-init", !0);
            var n = Object.create(i);
            n.init(e, this), t.data(this, "owlCarousel", n)
        })
    }, t.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: e,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document), function (t, e) {
    "use strict";
    var n, i = e.event, o = e.event.handle ? "handle" : "dispatch";
    i.special.smartresize = {
        setup: function () {
            e(this).bind("resize", i.special.smartresize.handler)
        }, teardown: function () {
            e(this).unbind("resize", i.special.smartresize.handler)
        }, handler: function (t, e) {
            var r = this, s = arguments;
            t.type = "smartresize", n && clearTimeout(n), n = setTimeout(function () {
                i[o].apply(r, s)
            }, "execAsap" === e ? 0 : 100)
        }
    }, e.fn.smartresize = function (t) {
        return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
    }, e.Mason = function (t, n) {
        this.element = e(n), this._create(t), this._init()
    }, e.Mason.settings = {
        isResizable: !0,
        isAnimated: !1,
        animationOptions: {queue: !1, duration: 500},
        gutterWidth: 0,
        isRTL: !1,
        isFitWidth: !1,
        containerStyle: {position: "relative"}
    }, e.Mason.prototype = {
        _filterFindBricks: function (t) {
            var e = this.options.itemSelector;
            return e ? t.filter(e).add(t.find(e)) : t
        }, _getBricks: function (t) {
            var e = this._filterFindBricks(t).css({position: "absolute"}).addClass("masonry-brick");
            return e
        }, _create: function (n) {
            this.options = e.extend(!0, {}, e.Mason.settings, n), this.styleQueue = [];
            var i = this.element[0].style;
            this.originalStyle = {height: i.height || ""};
            var o = this.options.containerStyle;
            for (var r in o)this.originalStyle[r] = i[r] || "";
            this.element.css(o), this.horizontalDirection = this.options.isRTL ? "right" : "left";
            var s = this.element.css("padding-" + this.horizontalDirection), a = this.element.css("padding-top");
            this.offset = {
                x: s ? parseInt(s, 10) : 0,
                y: a ? parseInt(a, 10) : 0
            }, this.isFluid = this.options.columnWidth && "function" == typeof this.options.columnWidth;
            var l = this;
            setTimeout(function () {
                l.element.addClass("masonry")
            }, 0), this.options.isResizable && e(t).bind("smartresize.masonry", function () {
                l.resize()
            }), this.reloadItems()
        }, _init: function (t) {
            this._getColumns(), this._reLayout(t)
        }, option: function (t) {
            e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
        }, layout: function (t, e) {
            for (var n = 0, i = t.length; n < i; n++)this._placeBrick(t[n]);
            var o = {};
            if (o.height = Math.max.apply(Math, this.colYs), this.options.isFitWidth) {
                var r = 0;
                for (n = this.cols; --n && 0 === this.colYs[n];)r++;
                o.width = (this.cols - r) * this.columnWidth - this.options.gutterWidth
            }
            this.styleQueue.push({$el: this.element, style: o});
            var s, a = this.isLaidOut && this.options.isAnimated ? "animate" : "css", l = this.options.animationOptions;
            for (n = 0, i = this.styleQueue.length; n < i; n++)s = this.styleQueue[n], s.$el[a](s.style, l);
            this.styleQueue = [], e && e.call(t), this.isLaidOut = !0
        }, _getColumns: function () {
            var t = this.options.isFitWidth ? this.element.parent() : this.element, e = t.width();
            this.columnWidth = this.isFluid ? this.options.columnWidth(e) : this.options.columnWidth || this.$bricks.outerWidth(!0) || e, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((e + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, _placeBrick: function (t) {
            var n, i, o, r, s, a = e(t);
            if (n = Math.ceil(a.outerWidth(!0) / this.columnWidth), n = Math.min(n, this.cols), 1 === n) o = this.colYs; else for (i = this.cols + 1 - n, o = [], s = 0; s < i; s++)r = this.colYs.slice(s, s + n), o[s] = Math.max.apply(Math, r);
            for (var l = Math.min.apply(Math, o), u = 0, c = 0, d = o.length; c < d; c++)if (o[c] === l) {
                u = c;
                break
            }
            var p = {top: l + this.offset.y};
            p[this.horizontalDirection] = this.columnWidth * u + this.offset.x, this.styleQueue.push({
                $el: a,
                style: p
            });
            var h = l + a.outerHeight(!0), f = this.cols + 1 - d;
            for (c = 0; c < f; c++)this.colYs[u + c] = h
        }, resize: function () {
            var t = this.cols;
            this._getColumns(), (this.isFluid || this.cols !== t) && this._reLayout()
        }, _reLayout: function (t) {
            var e = this.cols;
            for (this.colYs = []; e--;)this.colYs.push(0);
            this.layout(this.$bricks, t)
        }, reloadItems: function () {
            this.$bricks = this._getBricks(this.element.children())
        }, reload: function (t) {
            this.reloadItems(), this._init(t)
        }, appended: function (t, e, n) {
            if (e) {
                this._filterFindBricks(t).css({top: this.element.height()});
                var i = this;
                setTimeout(function () {
                    i._appended(t, n)
                }, 1)
            } else this._appended(t, n)
        }, _appended: function (t, e) {
            var n = this._getBricks(t);
            this.$bricks = this.$bricks.add(n), this.layout(n, e)
        }, remove: function (t) {
            this.$bricks = this.$bricks.not(t), t.remove()
        }, destroy: function () {
            this.$bricks.removeClass("masonry-brick").each(function () {
                this.style.position = "", this.style.top = "", this.style.left = ""
            });
            var n = this.element[0].style;
            for (var i in this.originalStyle)n[i] = this.originalStyle[i];
            this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), e(t).unbind(".masonry")
        }
    }, e.fn.imagesLoaded = function (t) {
        function n() {
            t.call(o, r)
        }

        function i(t) {
            var o = t.target;
            o.src !== a && e.inArray(o, l) === -1 && (l.push(o), --s <= 0 && (setTimeout(n), r.unbind(".imagesLoaded", i)))
        }

        var o = this, r = o.find("img").add(o.filter("img")), s = r.length,
            a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", l = [];
        return s || n(), r.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
            var t = this.src;
            this.src = a, this.src = t
        }), o
    };
    var r = function (e) {
        t.console && t.console.error(e)
    };
    e.fn.masonry = function (t) {
        if ("string" == typeof t) {
            var n = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var i = e.data(this, "masonry");
                return i ? e.isFunction(i[t]) && "_" !== t.charAt(0) ? void i[t].apply(i, n) : void r("no such method '" + t + "' for masonry instance") : void r("cannot call methods on masonry prior to initialization; attempted to call method '" + t + "'")
            })
        } else this.each(function () {
            var n = e.data(this, "masonry");
            n ? (n.option(t || {}), n._init()) : e.data(this, "masonry", new e.Mason(t, this))
        });
        return this
    }
}(window, jQuery), $.scrollTo = $.fn.scrollTo = function (t, e, n) {
    return this instanceof $ ? (n = $.extend({}, {
        gap: {x: 0, y: 0},
        animation: {easing: "swing", duration: 800, complete: $.noop, step: $.noop}
    }, n), this.each(function () {
        var i = $(this);
        i.stop().animate({
            scrollLeft: isNaN(Number(t)) ? $(e).offset().left + n.gap.x : t,
            scrollTop: isNaN(Number(e)) ? $(e).offset().top + n.gap.y : e
        }, n.animation)
    })) : $.fn.scrollTo.apply($("html, body"), arguments)
};