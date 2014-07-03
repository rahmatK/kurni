if (function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = t.length,
            i = re.type(t);
        return "function" === i || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (re.isFunction(e)) return re.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return re.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (pe.test(e)) return re.filter(e, t, i);
            e = re.filter(e, t)
        }
        return re.grep(t, function (t) {
            return re.inArray(t, e) >= 0 !== i
        })
    }

    function s(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function r(t) {
        var e = we[t] = {};
        return re.each(t.match(be) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        me.addEventListener ? (me.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (me.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (o(), re.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Te, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ee.test(i) ? re.parseJSON(i) : i
                } catch (s) {}
                re.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, i, n) {
        if (re.acceptData(t)) {
            var s, r, o = re.expando,
                a = t.nodeType,
                l = a ? re.cache : t,
                u = a ? t[o] : t[o] && o;
            if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e) return u || (u = a ? t[o] = Q.pop() || re.guid++ : o), l[u] || (l[u] = a ? {} : {
                toJSON: re.noop
            }), ("object" == typeof e || "function" == typeof e) && (n ? l[u] = re.extend(l[u], e) : l[u].data = re.extend(l[u].data, e)), r = l[u], n || (r.data || (r.data = {}), r = r.data), void 0 !== i && (r[re.camelCase(e)] = i), "string" == typeof e ? (s = r[e], null == s && (s = r[re.camelCase(e)])) : s = r, s
        }
    }

    function h(t, e, i) {
        if (re.acceptData(t)) {
            var n, s, r = t.nodeType,
                o = r ? re.cache : t,
                a = r ? t[re.expando] : re.expando;
            if (o[a]) {
                if (e && (n = i ? o[a] : o[a].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in n ? e = [e] : (e = re.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !u(n) : !re.isEmptyObject(n)) return
                }(i || (delete o[a].data, u(o[a]))) && (r ? re.cleanData([t], !0) : ne.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return me.activeElement
        } catch (t) {}
    }

    function m(t) {
        var e = je.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function g(t, e) {
        var i, n, s = 0,
            r = typeof t.getElementsByTagName !== ke ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== ke ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [], i = t.childNodes || t; null != (n = i[s]); s++)!e || re.nodeName(n, e) ? r.push(n) : re.merge(r, g(n, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], r) : r
    }

    function v(t) {
        De.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function _(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }

    function b(t) {
        var e = Qe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) re._data(i, "globalEval", !e || re._data(e[n], "globalEval"))
    }

    function x(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var i, n, s, r = re._data(t),
                o = re._data(e, r),
                a = r.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a)
                    for (n = 0, s = a[i].length; s > n; n++) re.event.add(e, i, a[i][n])
            }
            o.data && (o.data = re.extend({}, o.data))
        }
    }

    function C(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[re.expando]) {
                s = re._data(e);
                for (n in s.events) re.removeEvent(e, n, s.handle);
                e.removeAttribute(re.expando)
            }
            "script" === i && e.text !== t.text ? (_(e).text = t.text, b(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && De.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function k(e, i) {
        var n = re(i.createElement(e)).appendTo(i.body),
            s = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(n[0]).display : re.css(n[0], "display");
        return n.detach(), s
    }

    function E(t) {
        var e = me,
            i = ti[t];
        return i || (i = k(t, e), "none" !== i && i || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), i = k(t, e), Ze.detach()), ti[t] = i), i
    }

    function T(t, e) {
        return {
            get: function () {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function F(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = pi.length; s--;)
            if (e = pi[s] + i, e in t) return e;
        return n
    }

    function S(t, e) {
        for (var i, n, s, r = [], o = 0, a = t.length; a > o; o++) n = t[o], n.style && (r[o] = re._data(n, "olddisplay"), i = n.style.display, e ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ae(n) && (r[o] = re._data(n, "olddisplay", E(n.nodeName)))) : r[o] || (s = Ae(n), (i && "none" !== i || !s) && re._data(n, "olddisplay", s ? i : re.css(n, "display"))));
        for (o = 0; a > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "" : "none"));
        return t
    }

    function A(t, e, i) {
        var n = ui.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function N(t, e, i, n, s) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === i && (o += re.css(t, i + Se[r], !0, s)), n ? ("content" === i && (o -= re.css(t, "padding" + Se[r], !0, s)), "margin" !== i && (o -= re.css(t, "border" + Se[r] + "Width", !0, s))) : (o += re.css(t, "padding" + Se[r], !0, s), "padding" !== i && (o += re.css(t, "border" + Se[r] + "Width", !0, s)));
        return o
    }

    function D(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = ei(t),
            o = ne.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, r);
        if (0 >= s || null == s) {
            if (s = ii(t, e, r), (0 > s || null == s) && (s = t.style[e]), si.test(s)) return s;
            n = o && (ne.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + N(t, e, i || (o ? "border" : "content"), n, r) + "px"
    }

    function P(t, e, i, n, s) {
        return new P.prototype.init(t, e, i, n, s)
    }

    function O() {
        return setTimeout(function () {
            fi = void 0
        }), fi = re.now()
    }

    function $(t, e) {
        var i, n = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Se[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function M(t, e, i) {
        for (var n, s = (bi[e] || []).concat(bi["*"]), r = 0, o = s.length; o > r; r++)
            if (n = s[r].call(i, e, t)) return n
    }

    function L(t, e, i) {
        var n, s, r, o, a, l, u, c, h = this,
            d = {},
            p = t.style,
            f = t.nodeType && Ae(t),
            m = re._data(t, "fxshow");
        i.queue || (a = re._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, h.always(function () {
            h.always(function () {
                a.unqueued--, re.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = re.css(t, "display"), c = E(t.nodeName), "none" === u && (u = c), "inline" === u && "none" === re.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== c ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || h.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (s = e[n], gi.exec(s)) {
                if (delete e[n], r = r || "toggle" === s, s === (f ? "hide" : "show")) {
                    if ("show" !== s || !m || void 0 === m[n]) continue;
                    f = !0
                }
                d[n] = m && m[n] || re.style(t, n)
            }
        if (!re.isEmptyObject(d)) {
            m ? "hidden" in m && (f = m.hidden) : m = re._data(t, "fxshow", {}), r && (m.hidden = !f), f ? re(t).show() : h.done(function () {
                re(t).hide()
            }), h.done(function () {
                var e;
                re._removeData(t, "fxshow");
                for (e in d) re.style(t, e, d[e])
            });
            for (n in d) o = M(f ? m[n] : 0, n, h), n in m || (m[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function j(t, e) {
        var i, n, s, r, o;
        for (i in t)
            if (n = re.camelCase(i), s = e[n], r = t[i], re.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), o = re.cssHooks[n], o && "expand" in o) {
                r = o.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = s)
            } else e[n] = s
    }

    function I(t, e, i) {
        var n, s, r = 0,
            o = _i.length,
            a = re.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var e = fi || O(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(r);
                return a.notifyWith(t, [u, r, i]), 1 > r && l ? i : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: re.extend({}, e),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: fi || O(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = re.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function (e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (j(c, u.opts.specialEasing); o > r; r++)
            if (n = _i[r].call(u, t, c, u.opts)) return n;
        return re.map(c, M, u), re.isFunction(u.opts.start) && u.opts.start.call(t, u), re.fx.timer(re.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function H(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                r = e.toLowerCase().match(be) || [];
            if (re.isFunction(i))
                for (; n = r[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function q(t, e, i, n) {
        function s(a) {
            var l;
            return r[a] = !0, re.each(t[a] || [], function (t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
            }), l
        }
        var r = {},
            o = t === Bi;
        return s(e.dataTypes[0]) || !r["*"] && s("*")
    }

    function R(t, e) {
        var i, n, s = re.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && re.extend(!0, t, i), t
    }

    function W(t, e, i) {
        for (var n, s, r, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (o in a)
                if (a[o] && a[o].test(s)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                n || (n = o)
            }
            r = r || n
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function z(t, e, i, n) {
        var s, r, o, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (o = u[l + " " + r] || u["* " + r], !o)
                for (s in u)
                    if (a = s.split(" "), a[1] === r && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                        o === !0 ? o = u[s] : u[s] !== !0 && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: o ? h : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function B(t, e, i, n) {
        var s;
        if (re.isArray(e)) re.each(e, function (e, s) {
            i || Qi.test(t) ? n(t, s) : B(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== re.type(e)) n(t, e);
        else
            for (s in e) B(t + "[" + s + "]", e[s], i, n)
    }

    function U() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function V() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function X(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var Q = [],
        G = Q.slice,
        Y = Q.concat,
        K = Q.push,
        J = Q.indexOf,
        Z = {},
        te = Z.toString,
        ee = Z.hasOwnProperty,
        ie = "".trim,
        ne = {},
        se = "1.11.0",
        re = function (t, e) {
            return new re.fn.init(t, e)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        le = /-([\da-z])/gi,
        ue = function (t, e) {
            return e.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: se,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function () {
            return G.call(this)
        },
        get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function (t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t, e) {
            return re.each(this, t, e)
        },
        map: function (t) {
            return this.pushStack(re.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function () {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: Q.sort,
        splice: Q.splice
    }, re.extend = re.fn.extend = function () {
        var t, e, i, n, s, r, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || re.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (s = arguments[a]))
                for (n in s) t = o[n], i = s[n], o !== i && (u && i && (re.isPlainObject(i) || (e = re.isArray(i))) ? (e ? (e = !1, r = t && re.isArray(t) ? t : []) : r = t && re.isPlainObject(t) ? t : {}, o[n] = re.extend(u, r, i)) : void 0 !== i && (o[n] = i));
        return o
    }, re.extend({
        expando: "jQuery" + (se + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === re.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === re.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            return t - parseFloat(t) >= 0
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function (t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ne.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        },
        globalEval: function (e) {
            e && re.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(ae, "ms-").replace(le, ue)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e, n) {
            var s, r = 0,
                o = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; o > r && (s = e.apply(t[r], n), s !== !1); r++);
                else
                    for (r in t)
                        if (s = e.apply(t[r], n), s === !1) break
            } else if (a)
                for (; o > r && (s = e.call(t[r], r, t[r]), s !== !1); r++);
            else
                for (r in t)
                    if (s = e.call(t[r], r, t[r]), s === !1) break; return t
        },
        trim: ie && !ie.call("\ufeff\xa0") ? function (t) {
            return null == t ? "" : ie.call(t)
        } : function (t) {
            return null == t ? "" : (t + "").replace(oe, "")
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? re.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
        },
        inArray: function (t, e, i) {
            var n;
            if (e) {
                if (J) return J.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function (t, e) {
            for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n];) t[s++] = e[n++];
            return t.length = s, t
        },
        grep: function (t, e, i) {
            for (var n, s = [], r = 0, o = t.length, a = !i; o > r; r++) n = !e(t[r], r), n !== a && s.push(t[r]);
            return s
        },
        map: function (t, e, n) {
            var s, r = 0,
                o = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; o > r; r++) s = e(t[r], r, n), null != s && l.push(s);
            else
                for (r in t) s = e(t[r], r, n), null != s && l.push(s);
            return Y.apply([], l)
        },
        guid: 1,
        proxy: function (t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), re.isFunction(t) ? (i = G.call(arguments, 2), n = function () {
                return t.apply(e || this, i.concat(G.call(arguments)))
            }, n.guid = t.guid = t.guid || re.guid++, n) : void 0
        },
        now: function () {
            return +new Date
        },
        support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ce = function (t) {
        function e(t, e, i, n) {
            var s, r, o, a, l, u, h, f, m, g;
            if ((e ? e.ownerDocument || e : q) !== P && D(e), e = e || P, i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if ($ && !n) {
                if (s = ye.exec(t))
                    if (o = s[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(o), !r || !r.parentNode) return i;
                            if (r.id === o) return i.push(r), i
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(o)) && I(e, r) && r.id === o) return i.push(r), i
                    } else {
                        if (s[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = s[3]) && C.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(o)), i
                    }
                if (C.qsa && (!M || !M.test(t))) {
                    if (f = h = H, m = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = d(t), (h = e.getAttribute("id")) ? f = h.replace(be, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + p(u[l]);
                        m = _e.test(t) && c(e.parentNode) || e, g = u.join(",")
                    }
                    if (g) try {
                        return Z.apply(i, m.querySelectorAll(g)), i
                    } catch (v) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return w(t.replace(le, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > k.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[H] = !0, t
        }

        function s(t) {
            var e = P.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) k.attrHandle[i[n]] = e
        }

        function o(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var s, r = t([], i.length, e), o = r.length; o--;) i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== X && t
        }

        function h() {}

        function d(t, i) {
            var n, s, r, o, a, l, u, c = B[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], u = k.preFilter; a;) {
                (!n || (s = ue.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(r = [])), n = !1, (s = ce.exec(a)) && (n = s.shift(), r.push({
                    value: n,
                    type: s[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (o in k.filter)!(s = fe[o].exec(a)) || u[o] && !(s = u[o](s)) || (n = s.shift(), r.push({
                    value: n,
                    type: o,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
        }

        function p(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function f(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                r = W++;
            return e.first ? function (e, i, r) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s) return t(e, i, r)
            } : function (e, i, o) {
                var a, l, u = [R, r];
                if (o) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, o)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) {
                            if (l = e[H] || (e[H] = {}), (a = l[n]) && a[0] === R && a[1] === r) return u[2] = a[2];
                            if (l[n] = u, u[2] = t(e, i, o)) return !0
                        }
            }
        }

        function m(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, e, i, n, s) {
            for (var r, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!i || i(r, n, s)) && (o.push(r), u && e.push(a));
            return o
        }

        function v(t, e, i, s, r, o) {
            return s && !s[H] && (s = v(s)), r && !r[H] && (r = v(r, o)), n(function (n, o, a, l) {
                var u, c, h, d = [],
                    p = [],
                    f = o.length,
                    m = n || b(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !n && e ? m : g(m, d, t, a, l),
                    y = i ? r || (n ? t : f || s) ? [] : o : v;
                if (i && i(v, y, a, l), s)
                    for (u = g(y, p), s(u, [], a, l), c = u.length; c--;)(h = u[c]) && (y[p[c]] = !(v[p[c]] = h));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = y.length; c--;)(h = y[c]) && u.push(v[c] = h);
                            r(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)(h = y[c]) && (u = r ? ee.call(n, h) : d[c]) > -1 && (n[u] = !(o[u] = h))
                    }
                } else y = g(y === o ? y.splice(f, y.length) : y), r ? r(null, o, y, l) : Z.apply(o, y)
            })
        }

        function y(t) {
            for (var e, i, n, s = t.length, r = k.relative[t[0].type], o = r || k.relative[" "], a = r ? 1 : 0, l = f(function (t) {
                return t === e
            }, o, !0), u = f(function (t) {
                return ee.call(e, t) > -1
            }, o, !0), c = [
                function (t, i, n) {
                    return !r && (n || i !== S) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
                }
            ]; s > a; a++)
                if (i = k.relative[t[a].type]) c = [f(m(c), i)];
                else {
                    if (i = k.filter[t[a].type].apply(null, t[a].matches), i[H]) {
                        for (n = ++a; s > n && !k.relative[t[n].type]; n++);
                        return v(a > 1 && m(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > a && y(t.slice(a, n)), s > n && y(t = t.slice(n)), s > n && p(t))
                    }
                    c.push(i)
                }
            return m(c)
        }

        function _(t, i) {
            var s = i.length > 0,
                r = t.length > 0,
                o = function (n, o, a, l, u) {
                    var c, h, d, p = 0,
                        f = "0",
                        m = n && [],
                        v = [],
                        y = S,
                        _ = n || r && k.find.TAG("*", u),
                        b = R += null == y ? 1 : Math.random() || .1,
                        w = _.length;
                    for (u && (S = o !== P && o); f !== w && null != (c = _[f]); f++) {
                        if (r && c) {
                            for (h = 0; d = t[h++];)
                                if (d(c, o, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (R = b)
                        }
                        s && ((c = !d && c) && p--, n && m.push(c))
                    }
                    if (p += f, s && f !== p) {
                        for (h = 0; d = i[h++];) d(m, v, o, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) m[f] || v[f] || (v[f] = K.call(l));
                            v = g(v)
                        }
                        Z.apply(l, v), u && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return u && (R = b, S = y), m
                };
            return s ? n(o) : o
        }

        function b(t, i, n) {
            for (var s = 0, r = i.length; r > s; s++) e(t, i[s], n);
            return n
        }

        function w(t, e, i, n) {
            var s, r, o, a, l, u = d(t);
            if (!n && 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && C.getById && 9 === e.nodeType && $ && k.relative[r[1].type]) {
                    if (e = (k.find.ID(o.matches[0].replace(we, xe), e) || [])[0], !e) return i;
                    t = t.slice(r.shift().value.length)
                }
                for (s = fe.needsContext.test(t) ? 0 : r.length; s-- && (o = r[s], !k.relative[a = o.type]);)
                    if ((l = k.find[a]) && (n = l(o.matches[0].replace(we, xe), _e.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(s, 1), t = n.length && p(r), !t) return Z.apply(i, n), i;
                        break
                    }
            }
            return F(t, u)(n, e, !$, i, _e.test(t) && c(e.parentNode) || e), i
        }
        var x, C, k, E, T, F, S, A, N, D, P, O, $, M, L, j, I, H = "sizzle" + -new Date,
            q = t.document,
            R = 0,
            W = 0,
            z = i(),
            B = i(),
            U = i(),
            V = function (t, e) {
                return t === e && (N = !0), 0
            },
            X = "undefined",
            Q = 1 << 31,
            G = {}.hasOwnProperty,
            Y = [],
            K = Y.pop,
            J = Y.push,
            Z = Y.push,
            te = Y.slice,
            ee = Y.indexOf || function (t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = se.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + se + ")" + ne + "*(?:([*^$|!~]?=)" + ne + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ne + "*\\]",
            ae = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            he = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(ae),
            pe = new RegExp("^" + re + "$"),
            fe = {
                ID: new RegExp("^#(" + se + ")"),
                CLASS: new RegExp("^\\.(" + se + ")"),
                TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ie + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _e = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
        try {
            Z.apply(Y = te.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: Y.length ? function (t, e) {
                    J.apply(t, te.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        C = e.support = {}, T = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, D = e.setDocument = function (t) {
            var e, i = t ? t.ownerDocument || t : q,
                n = i.defaultView;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, O = i.documentElement, $ = !T(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                D()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                D()
            })), C.attributes = s(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), C.getElementsByTagName = s(function (t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), C.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), C.getById = s(function (t) {
                return O.appendChild(t).id = H, !i.getElementsByName || !i.getElementsByName(H).length
            }), C.getById ? (k.find.ID = function (t, e) {
                if (typeof e.getElementById !== X && $) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, k.filter.ID = function (t) {
                var e = t.replace(we, xe);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete k.find.ID, k.filter.ID = function (t) {
                var e = t.replace(we, xe);
                return function (t) {
                    var i = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), k.find.TAG = C.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var i, n = [],
                    s = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, k.find.CLASS = C.getElementsByClassName && function (t, e) {
                return typeof e.getElementsByClassName !== X && $ ? e.getElementsByClassName(t) : void 0
            }, L = [], M = [], (C.qsa = ve.test(i.querySelectorAll)) && (s(function (t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || M.push(":checked")
            }), s(function (t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (C.matchesSelector = ve.test(j = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && s(function (t) {
                C.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), L.push("!=", ae)
            }), M = M.length && new RegExp(M.join("|")), L = L.length && new RegExp(L.join("|")), e = ve.test(O.compareDocumentPosition), I = e || ve.test(O.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, V = e ? function (t, e) {
                if (t === e) return N = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !C.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === q && I(q, t) ? -1 : e === i || e.ownerDocument === q && I(q, e) ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return N = !0, 0;
                var n, s = 0,
                    r = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    u = [e];
                if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0;
                if (r === a) return o(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (; l[s] === u[s];) s++;
                return s ? o(l[s], u[s]) : l[s] === q ? -1 : u[s] === q ? 1 : 0
            }, i) : P
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== P && D(t), i = i.replace(he, "='$1']"), !(!C.matchesSelector || !$ || L && L.test(i) || M && M.test(i))) try {
                var n = j.call(t, i);
                if (n || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (s) {}
            return e(i, P, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== P && D(t), I(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== P && D(t);
            var i = k.attrHandle[e.toLowerCase()],
                n = i && G.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !$) : void 0;
            return void 0 !== n ? n : C.attributes || !$ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (N = !C.detectDuplicates, A = !C.sortStable && t.slice(0), t.sort(V), N) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return A = null, t
        }, E = e.getText = function (t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += E(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += E(e);
            return i
        }, k = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(we, xe), t[3] = (t[4] || t[5] || "").replace(we, xe), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, i = !t[5] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : i && de.test(i) && (e = d(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(we, xe).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && z(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, i, n) {
                    return function (s) {
                        var r = e.attr(s, t);
                        return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (t, e, i, n, s) {
                    var r = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === s ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var u, c, h, d, p, f, m = r !== o ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                for (c = g[H] || (g[H] = {}), u = c[t] || [], p = u[0] === R && u[1], d = u[0] === R && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++d && h === e) {
                                        c[t] = [R, p, d];
                                        break
                                    }
                            } else if (y && (u = (e[H] || (e[H] = {}))[t]) && u[0] === R) d = u[1];
                            else
                                for (;
                                    (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[H] || (h[H] = {}))[t] = [R, d]), h !== e)););
                            return d -= s, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function (t, i) {
                    var s, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[H] ? r(i) : r.length > 1 ? (s = [t, t, "", i], k.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                        for (var n, s = r(t, i), o = s.length; o--;) n = ee.call(t, s[o]), t[n] = !(e[n] = s[o])
                    }) : function (t) {
                        return r(t, 0, s)
                    }) : r
                }
            },
            pseudos: {
                not: n(function (t) {
                    var e = [],
                        i = [],
                        s = F(t.replace(le, "$1"));
                    return s[H] ? n(function (t, e, i, n) {
                        for (var r, o = s(t, null, n, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
                    }) : function (t, n, r) {
                        return e[0] = t, s(e, null, r, i), !i.pop()
                    }
                }),
                has: n(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || E(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function (t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, xe).toLowerCase(),
                        function (e) {
                            var i;
                            do
                                if (i = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function (t) {
                    return t === O
                },
                focus: function (t) {
                    return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !k.pseudos.empty(t)
                },
                header: function (t) {
                    return ge.test(t.nodeName)
                },
                input: function (t) {
                    return me.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (t, e) {
                    return [e - 1]
                }),
                eq: u(function (t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: u(function (t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: u(function (t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: u(function (t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: u(function (t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) k.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        }) k.pseudos[x] = l(x);
        return h.prototype = k.filters = k.pseudos, k.setFilters = new h, F = e.compile = function (t, e) {
            var i, n = [],
                s = [],
                r = U[t + " "];
            if (!r) {
                for (e || (e = d(t)), i = e.length; i--;) r = y(e[i]), r[H] ? n.push(r) : s.push(r);
                r = U(t, _(s, n))
            }
            return r
        }, C.sortStable = H.split("").sort(V).join("") === H, C.detectDuplicates = !!N, D(), C.sortDetached = s(function (t) {
            return 1 & t.compareDocumentPosition(P.createElement("div"))
        }), s(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), C.attributes && s(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function (t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), s(function (t) {
            return null == t.getAttribute("disabled")
        }) || r(ie, function (t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
    var he = re.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pe = /^.[^:#\[\.,]*$/;
    re.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? re.find.matchesSelector(n, t) ? [n] : [] : re.find.matches(t, re.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({
        find: function (t) {
            var e, i = [],
                n = this,
                s = n.length;
            if ("string" != typeof t) return this.pushStack(re(t).filter(function () {
                for (e = 0; s > e; e++)
                    if (re.contains(n[e], this)) return !0
            }));
            for (e = 0; s > e; e++) re.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function (t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function (t) {
            return !!n(this, "string" == typeof t && he.test(t) ? re(t) : t || [], !1).length
        }
    });
    var fe, me = t.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ve = re.fn.init = function (t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : me, !0)), de.test(i[1]) && re.isPlainObject(e))
                        for (i in e) re.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (n = me.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return fe.find(t);
                    this.length = 1, this[0] = n
                }
                return this.context = me, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
        };
    ve.prototype = re.fn, fe = re(me);
    var ye = /^(?:parents|prev(?:Until|All))/,
        _e = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function (t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !re(s).is(i));) 1 === s.nodeType && n.push(s), s = s[e];
            return n
        },
        sibling: function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), re.fn.extend({
        has: function (t) {
            var e, i = re(t, this),
                n = i.length;
            return this.filter(function () {
                for (e = 0; n > e; e++)
                    if (re.contains(this, i[e])) return !0
            })
        },
        closest: function (t, e) {
            for (var i, n = 0, s = this.length, r = [], o = he.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? re.unique(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function (t, e, i) {
            return re.dir(t, "parentNode", i)
        },
        next: function (t) {
            return s(t, "nextSibling")
        },
        prev: function (t) {
            return s(t, "previousSibling")
        },
        nextAll: function (t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function (t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function (t, e, i) {
            return re.dir(t, "nextSibling", i)
        },
        prevUntil: function (t, e, i) {
            return re.dir(t, "previousSibling", i)
        },
        siblings: function (t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return re.sibling(t.firstChild)
        },
        contents: function (t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function (t, e) {
        re.fn[t] = function (i, n) {
            var s = re.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = re.filter(n, s)), this.length > 1 && (_e[t] || (s = re.unique(s)), ye.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var be = /\S+/g,
        we = {};
    re.Callbacks = function (t) {
        t = "string" == typeof t ? we[t] || r(t) : re.extend({}, t);
        var e, i, n, s, o, a, l = [],
            u = !t.once && [],
            c = function (r) {
                for (i = t.memory && r, n = !0, o = a || 0, a = 0, s = l.length, e = !0; l && s > o; o++)
                    if (l[o].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                e = !1, l && (u ? u.length && c(u.shift()) : i ? l = [] : h.disable())
            },
            h = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        ! function r(e) {
                            re.each(e, function (e, i) {
                                var n = re.type(i);
                                "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
                            })
                        }(arguments), e ? s = l.length : i && (a = n, c(i))
                    }
                    return this
                },
                remove: function () {
                    return l && re.each(arguments, function (t, i) {
                        for (var n;
                            (n = re.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (s >= n && s--, o >= n && o--)
                    }), this
                },
                has: function (t) {
                    return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], s = 0, this
                },
                disable: function () {
                    return l = u = i = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = void 0, i || h.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (t, i) {
                    return !l || n && !u || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? u.push(i) : c(i)), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return h
    }, re.extend({
        Deferred: function (t) {
            var e = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return re.Deferred(function (i) {
                            re.each(e, function (e, r) {
                                var o = re.isFunction(t[e]) && t[e];
                                s[r[1]](function () {
                                    var t = o && o.apply(this, arguments);
                                    t && re.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? re.extend(t, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, re.each(e, function (t, r) {
                var o = r[2],
                    a = r[3];
                n[r[1]] = o.add, a && o.add(function () {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), s[r[0]] = function () {
                    return s[r[0] + "With"](this === s ? n : this, arguments), this
                }, s[r[0] + "With"] = o.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function (t) {
            var e, i, n, s = 0,
                r = G.call(arguments),
                o = r.length,
                a = 1 !== o || t && re.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : re.Deferred(),
                u = function (t, i, n) {
                    return function (s) {
                        i[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (e = new Array(o), i = new Array(o), n = new Array(o); o > s; s++) r[s] && re.isFunction(r[s].promise) ? r[s].promise().done(u(s, n, r)).fail(l.reject).progress(u(s, i, e)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    });
    var xe;
    re.fn.ready = function (t) {
        return re.ready.promise().done(t), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? re.readyWait++ : re.ready(!0)
        },
        ready: function (t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!me.body) return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (xe.resolveWith(me, [re]), re.fn.trigger && re(me).trigger("ready").off("ready"))
            }
        }
    }), re.ready.promise = function (e) {
        if (!xe)
            if (xe = re.Deferred(), "complete" === me.readyState) setTimeout(re.ready);
            else if (me.addEventListener) me.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            me.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && me.documentElement
            } catch (n) {}
            i && i.doScroll && ! function s() {
                if (!re.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(s, 50)
                    }
                    o(), re.ready()
                }
            }()
        }
        return xe.promise(e)
    };
    var Ce, ke = "undefined";
    for (Ce in re(ne)) break;
    ne.ownLast = "0" !== Ce, ne.inlineBlockNeedsLayout = !1, re(function () {
            var t, e, i = me.getElementsByTagName("body")[0];
            i && (t = me.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = me.createElement("div"), i.appendChild(t).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ne.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (i.style.zoom = 1)), i.removeChild(t), t = e = null)
        }),
        function () {
            var t = me.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
            t = null
        }(), re.acceptData = function (t) {
            var e = re.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Te = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !u(t)
        },
        data: function (t, e, i) {
            return c(t, e, i)
        },
        removeData: function (t, e) {
            return h(t, e)
        },
        _data: function (t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function (t, e) {
            return h(t, e, !0)
        }
    }), re.fn.extend({
        data: function (t, e) {
            var i, n, s, r = this[0],
                o = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (s = re.data(r), 1 === r.nodeType && !re._data(r, "parsedAttrs"))) {
                    for (i = o.length; i--;) n = o[i].name, 0 === n.indexOf("data-") && (n = re.camelCase(n.slice(5)), l(r, n, s[n]));
                    re._data(r, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function () {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                re.data(this, t, e)
            }) : r ? l(r, t, re.data(r, t)) : void 0
        },
        removeData: function (t) {
            return this.each(function () {
                re.removeData(this, t)
            })
        }
    }), re.extend({
        queue: function (t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = re._data(t, e), i && (!n || re.isArray(i) ? n = re._data(t, e, re.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var i = re.queue(t, e),
                n = i.length,
                s = i.shift(),
                r = re._queueHooks(t, e),
                o = function () {
                    re.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, o, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return re._data(t, i) || re._data(t, i, {
                empty: re.Callbacks("once memory").add(function () {
                    re._removeData(t, e + "queue"), re._removeData(t, i)
                })
            })
        }
    }), re.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? re.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && re.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                re.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var i, n = 1,
                s = re.Deferred(),
                r = this,
                o = this.length,
                a = function () {
                    --n || s.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = re._data(r[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ae = function (t, e) {
            return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
        },
        Ne = re.access = function (t, e, i, n, s, r, o) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === re.type(i)) {
                s = !0;
                for (a in i) re.access(t, e, a, i[a], !0, r, o)
            } else if (void 0 !== n && (s = !0, re.isFunction(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function (t, e, i) {
                return u.call(re(t), i)
            })), e))
                for (; l > a; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : u ? e.call(t) : l ? e(t[0], i) : r
        },
        De = /^(?:checkbox|radio)$/i;
    ! function () {
        var t = me.createDocumentFragment(),
            e = me.createElement("div"),
            i = me.createElement("input");
        if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, t.appendChild(i), ne.appendChecked = i.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
            ne.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ne.deleteExpando = !1
            }
        }
        t = e = i = null
    }(),
    function () {
        var e, i, n = me.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + e, (ne[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ne[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Pe = /^(?:input|select|textarea)$/i,
        Oe = /^key/,
        $e = /^(?:mouse|contextmenu)|click/,
        Me = /^(?:focusinfocus|focusoutblur)$/,
        Le = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function (t, e, i, n, s) {
            var r, o, a, l, u, c, h, d, p, f, m, g = re._data(t);
            if (g) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = re.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || (c = g.handle = function (t) {
                    return typeof re === ke || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                }, c.elem = t), e = (e || "").match(be) || [""], a = e.length; a--;) r = Le.exec(e[a]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (u = re.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = re.event.special[p] || {}, h = re.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && re.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, l), (d = o[p]) || (d = o[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), re.event.global[p] = !0);
                t = null
            }
        },
        remove: function (t, e, i, n, s) {
            var r, o, a, l, u, c, h, d, p, f, m, g = re.hasData(t) && re._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(be) || [""], u = e.length; u--;)
                    if (a = Le.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = re.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) o = d[r], !s && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(r, 1), o.selector && d.delegateCount--, h.remove && h.remove.call(t, o));
                        l && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || re.removeEvent(t, p, g.handle), delete c[p])
                    } else
                        for (p in c) re.event.remove(t, p + e[u], i, n, !0);
                re.isEmptyObject(c) && (delete g.handle, re._removeData(t, "events"))
            }
        },
        trigger: function (e, i, n, s) {
            var r, o, a, l, u, c, h, d = [n || me],
                p = ee.call(e, "type") ? e.type : e,
                f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || me, 3 !== n.nodeType && 8 !== n.nodeType && !Me.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[re.expando] ? e : new re.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : re.makeArray(i, [e]), u = re.event.special[p] || {}, s || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!s && !u.noBubble && !re.isWindow(n)) {
                    for (l = u.delegateType || p, Me.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                    c === (n.ownerDocument || me) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (h = 0;
                    (a = d[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || p, r = (re._data(a, "events") || {})[e.type] && re._data(a, "handle"), r && r.apply(a, i), r = o && a[o], r && r.apply && re.acceptData(a) && (e.result = r.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), i) === !1) && re.acceptData(n) && o && n[p] && !re.isWindow(n)) {
                    c = n[o], c && (n[o] = null), re.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {}
                    re.event.triggered = void 0, c && (n[o] = c)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = re.event.fix(t);
            var e, i, n, s, r, o = [],
                a = G.call(arguments),
                l = (re._data(this, "events") || {})[t.type] || [],
                u = re.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (o = re.event.handlers.call(this, t, l), e = 0;
                    (s = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, r = 0;
                        (n = s.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((re.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var i, n, s, r, o = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (s = [], r = 0; a > r; r++) n = e[r], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? re(i, this).index(l) >= 0 : re.find(i, this, null, [l]).length), s[i] && s.push(n);
                        s.length && o.push({
                            elem: l,
                            handlers: s
                        })
                    }
            return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }), o
        },
        fix: function (t) {
            if (t[re.expando]) return t;
            var e, i, n, s = t.type,
                r = t,
                o = this.fixHooks[s];
            for (o || (this.fixHooks[s] = o = $e.test(s) ? this.mouseHooks : Oe.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new re.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = r.srcElement || me), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i, n, s, r = e.button,
                    o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || me, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, i, n) {
            var s = re.extend(new re.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? re.event.trigger(s, null, e) : re.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, re.removeEvent = me.removeEventListener ? function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function (t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === ke && (t[n] = null), t.detachEvent(n, i))
    }, re.Event = function (t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? d : p) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = d, this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var i, n = this,
                    s = t.relatedTarget,
                    r = t.handleObj;
                return (!s || s !== n && !re.contains(n, s)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ne.submitBubbles || (re.event.special.submit = {
        setup: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target,
                    i = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                i && !re._data(i, "submitBubbles") && (re.event.add(i, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), re._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (re.event.special.change = {
        setup: function () {
            return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Pe.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        },
        handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return re.event.remove(this, "._change"), !Pe.test(this.nodeName)
        }
    }), ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var i = function (t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this,
                    s = re._data(n, e);
                s || n.addEventListener(t, i, !0), re._data(n, e, (s || 0) + 1)
            },
            teardown: function () {
                var n = this.ownerDocument || this,
                    s = re._data(n, e) - 1;
                s ? re._data(n, e, s) : (n.removeEventListener(t, i, !0), re._removeData(n, e))
            }
        }
    }), re.fn.extend({
        on: function (t, e, i, n, s) {
            var r, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (r in t) this.on(r, e, i, t[r], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === s && (o = n, n = function (t) {
                return re().off(t), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = re.guid++)), this.each(function () {
                re.event.add(this, t, n, i, e)
            })
        },
        one: function (t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function (t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, re(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function () {
                re.event.remove(this, t, i, e)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var i = this[0];
            return i ? re.event.trigger(t, e, i, !0) : void 0
        }
    });
    var je = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ie = / jQuery\d+="(?:null|\d+)"/g,
        He = new RegExp("<(?:" + je + ")[\\s/>]", "i"),
        qe = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        ze = /<tbody/i,
        Be = /<|&#?\w+;/,
        Ue = /<(?:script|style|link)/i,
        Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xe = /^$|\/(?:java|ecma)script/i,
        Qe = /^true\/(.*)/,
        Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ke = m(me),
        Je = Ke.appendChild(me.createElement("div"));
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, re.extend({
        clone: function (t, e, i) {
            var n, s, r, o, a, l = re.contains(t.ownerDocument, t);
            if (ne.html5Clone || re.isXMLDoc(t) || !He.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Je.innerHTML = t.outerHTML, Je.removeChild(r = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (n = g(r), a = g(t), o = 0; null != (s = a[o]); ++o) n[o] && C(s, n[o]);
            if (e)
                if (i)
                    for (a = a || g(t), n = n || g(r), o = 0; null != (s = a[o]); o++) x(s, n[o]);
                else x(t, r);
            return n = g(r, "script"), n.length > 0 && w(n, !l && g(t, "script")), n = a = s = null, r
        },
        buildFragment: function (t, e, i, n) {
            for (var s, r, o, a, l, u, c, h = t.length, d = m(e), p = [], f = 0; h > f; f++)
                if (r = t[f], r || 0 === r)
                    if ("object" === re.type(r)) re.merge(p, r.nodeType ? [r] : r);
                    else if (Be.test(r)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (We.exec(r) || ["", ""])[1].toLowerCase(), c = Ye[l] || Ye._default, a.innerHTML = c[1] + r.replace(Re, "<$1></$2>") + c[2], s = c[0]; s--;) a = a.lastChild;
                if (!ne.leadingWhitespace && qe.test(r) && p.push(e.createTextNode(qe.exec(r)[0])), !ne.tbody)
                    for (r = "table" !== l || ze.test(r) ? "<table>" !== c[1] || ze.test(r) ? 0 : a : a.firstChild, s = r && r.childNodes.length; s--;) re.nodeName(u = r.childNodes[s], "tbody") && !u.childNodes.length && r.removeChild(u);
                for (re.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else p.push(e.createTextNode(r));
            for (a && d.removeChild(a), ne.appendChecked || re.grep(g(p, "input"), v), f = 0; r = p[f++];)
                if ((!n || -1 === re.inArray(r, n)) && (o = re.contains(r.ownerDocument, r), a = g(d.appendChild(r), "script"), o && w(a), i))
                    for (s = 0; r = a[s++];) Xe.test(r.type || "") && i.push(r);
            return a = null, d
        },
        cleanData: function (t, e) {
            for (var i, n, s, r, o = 0, a = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (i = t[o]); o++)
                if ((e || re.acceptData(i)) && (s = i[a], r = s && l[s])) {
                    if (r.events)
                        for (n in r.events) c[n] ? re.event.remove(i, n) : re.removeEvent(i, n, r.handle);
                    l[s] && (delete l[s], u ? delete i[a] : typeof i.removeAttribute !== ke ? i.removeAttribute(a) : i[a] = null, Q.push(s))
                }
        }
    }), re.fn.extend({
        text: function (t) {
            return Ne(this, function (t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function (t, e) {
            for (var i, n = t ? re.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || re.cleanData(g(i)), i.parentNode && (e && re.contains(i.ownerDocument, i) && w(g(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return re.clone(this, t, e)
            })
        },
        html: function (t) {
            return Ne(this, function (t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ie, "") : void 0;
                if (!("string" != typeof t || Ue.test(t) || !ne.htmlSerialize && He.test(t) || !ne.leadingWhitespace && qe.test(t) || Ye[(We.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Re, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (re.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, re.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function (t) {
            return this.remove(t, !0)
        },
        domManip: function (t, e) {
            t = Y.apply([], t);
            var i, n, s, r, o, a, l = 0,
                u = this.length,
                c = this,
                h = u - 1,
                d = t[0],
                p = re.isFunction(d);
            if (p || u > 1 && "string" == typeof d && !ne.checkClone && Ve.test(d)) return this.each(function (i) {
                var n = c.eq(i);
                p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (u && (a = re.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (r = re.map(g(a, "script"), _), s = r.length; u > l; l++) n = a, l !== h && (n = re.clone(n, !0, !0), s && re.merge(r, g(n, "script"))), e.call(this[l], n, l);
                if (s)
                    for (o = r[r.length - 1].ownerDocument, re.map(r, b), l = 0; s > l; l++) n = r[l], Xe.test(n.type || "") && !re._data(n, "globalEval") && re.contains(o, n) && (n.src ? re._evalUrl && re._evalUrl(n.src) : re.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ge, "")));
                a = i = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        re.fn[t] = function (t) {
            for (var i, n = 0, s = [], r = re(t), o = r.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), re(r[n])[e](i), K.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Ze, ti = {};
    ! function () {
        var t, e, i = me.createElement("div"),
            n = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(t.style.opacity), ne.cssFloat = !!t.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === i.style.backgroundClip, t = i = null, ne.shrinkWrapBlocks = function () {
            var t, i, s, r;
            if (null == e) {
                if (t = me.getElementsByTagName("body")[0], !t) return;
                r = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", i = me.createElement("div"), s = me.createElement("div"), t.appendChild(i).appendChild(s), e = !1, typeof s.style.zoom !== ke && (s.style.cssText = n + ";width:1px;padding:1px;zoom:1", s.innerHTML = "<div></div>", s.firstChild.style.width = "5px", e = 3 !== s.offsetWidth), t.removeChild(i), t = i = s = null
            }
            return e
        }
    }();
    var ei, ii, ni = /^margin/,
        si = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        ri = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ei = function (t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, ii = function (t, e, i) {
            var n, s, r, o, a = t.style;
            return i = i || ei(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || re.contains(t.ownerDocument, t) || (o = re.style(t, e)), si.test(o) && ni.test(e) && (n = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = s, a.maxWidth = r)), void 0 === o ? o : o + ""
        }) : me.documentElement.currentStyle && (ei = function (t) {
            return t.currentStyle
        }, ii = function (t, e, i) {
            var n, s, r, o, a = t.style;
            return i = i || ei(t), o = i ? i[e] : void 0, null == o && a && a[e] && (o = a[e]), si.test(o) && !ri.test(e) && (n = a.left, s = t.runtimeStyle, r = s && s.left, r && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = n, r && (s.left = r)), void 0 === o ? o : o + "" || "auto"
        }),
        function () {
            function e() {
                var e, i, n = me.getElementsByTagName("body")[0];
                n && (e = me.createElement("div"), i = me.createElement("div"), e.style.cssText = u, n.appendChild(e).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", re.swap(n, null != n.style.zoom ? {
                    zoom: 1
                } : {}, function () {
                    s = 4 === i.offsetWidth
                }), r = !0, o = !1, a = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(i, null) || {}).top, r = "4px" === (t.getComputedStyle(i, null) || {
                    width: "4px"
                }).width), n.removeChild(e), i = n = null)
            }
            var i, n, s, r, o, a, l = me.createElement("div"),
                u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = l.getElementsByTagName("a")[0], i.style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(i.style.opacity), ne.cssFloat = !!i.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === l.style.backgroundClip, i = l = null, re.extend(ne, {
                reliableHiddenOffsets: function () {
                    if (null != n) return n;
                    var t, e, i, s = me.createElement("div"),
                        r = me.getElementsByTagName("body")[0];
                    if (r) return s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = me.createElement("div"), t.style.cssText = u, r.appendChild(t).appendChild(s), s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = s.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", i = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", n = i && 0 === e[0].offsetHeight, r.removeChild(t), s = r = null, n
                },
                boxSizing: function () {
                    return null == s && e(), s
                },
                boxSizingReliable: function () {
                    return null == r && e(), r
                },
                pixelPosition: function () {
                    return null == o && e(), o
                },
                reliableMarginRight: function () {
                    var e, i, n, s;
                    if (null == a && t.getComputedStyle) {
                        if (e = me.getElementsByTagName("body")[0], !e) return;
                        i = me.createElement("div"), n = me.createElement("div"), i.style.cssText = u, e.appendChild(i).appendChild(n), s = n.appendChild(me.createElement("div")), s.style.cssText = n.style.cssText = c, s.style.marginRight = s.style.width = "0", n.style.width = "1px", a = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(i)
                    }
                    return a
                }
            })
        }(), re.swap = function (t, e, i, n) {
            var s, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            s = i.apply(t, n || []);
            for (r in e) t.style[r] = o[r];
            return s
        };
    var oi = /alpha\([^)]*\)/i,
        ai = /opacity\s*=\s*([^)]*)/,
        li = /^(none|table(?!-c[ea]).+)/,
        ui = new RegExp("^(" + Fe + ")(.*)$", "i"),
        ci = new RegExp("^([+-])=(" + Fe + ")", "i"),
        hi = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        di = {
            letterSpacing: 0,
            fontWeight: 400
        },
        pi = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = ii(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, o, a = re.camelCase(e),
                    l = t.style;
                if (e = re.cssProps[a] || (re.cssProps[a] = F(l, a)), o = re.cssHooks[e] || re.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(t, !1, n)) ? s : l[e];
                if (r = typeof i, "string" === r && (s = ci.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(re.css(t, e)), r = "number"), null != i && i === i && ("number" !== r || re.cssNumber[a] || (i += "px"), ne.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n))))) try {
                    l[e] = "", l[e] = i
                } catch (u) {}
            }
        },
        css: function (t, e, i, n) {
            var s, r, o, a = re.camelCase(e);
            return e = re.cssProps[a] || (re.cssProps[a] = F(t.style, a)), o = re.cssHooks[e] || re.cssHooks[a], o && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = ii(t, e, n)), "normal" === r && e in di && (r = di[e]), "" === i || i ? (s = parseFloat(r), i === !0 || re.isNumeric(s) ? s || 0 : r) : r
        }
    }), re.each(["height", "width"], function (t, e) {
        re.cssHooks[e] = {
            get: function (t, i, n) {
                return i ? 0 === t.offsetWidth && li.test(re.css(t, "display")) ? re.swap(t, hi, function () {
                    return D(t, e, n)
                }) : D(t, e, n) : void 0
            },
            set: function (t, i, n) {
                var s = n && ei(t);
                return A(t, i, n ? N(t, e, n, ne.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), ne.opacity || (re.cssHooks.opacity = {
        get: function (t, e) {
            return ai.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(r.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(r) ? r.replace(oi, s) : r + " " + s)
        }
    }), re.cssHooks.marginRight = T(ne.reliableMarginRight, function (t, e) {
        return e ? re.swap(t, {
            display: "inline-block"
        }, ii, [t, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        re.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Se[n] + e] = r[n] || r[n - 2] || r[0];
                return s
            }
        }, ni.test(t) || (re.cssHooks[t + e].set = A)
    }), re.fn.extend({
        css: function (t, e) {
            return Ne(this, function (t, e, i) {
                var n, s, r = {},
                    o = 0;
                if (re.isArray(e)) {
                    for (n = ei(t), s = e.length; s > o; o++) r[e[o]] = re.css(t, e[o], !1, n);
                    return r
                }
                return void 0 !== i ? re.style(t, e, i) : re.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return S(this, !0)
        },
        hide: function () {
            return S(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ae(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = P, P.prototype = {
        constructor: P,
        init: function (t, e, i, n, s, r) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (re.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var t = P.propHooks[this.prop];
            return t && t.get ? t.get(this) : P.propHooks._default.get(this)
        },
        run: function (t) {
            var e, i = P.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function (t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.fx = P.prototype.init, re.fx.step = {};
    var fi, mi, gi = /^(?:toggle|show|hide)$/,
        vi = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        yi = /queueHooks$/,
        _i = [L],
        bi = {
            "*": [
                function (t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        s = vi.exec(e),
                        r = s && s[3] || (re.cssNumber[t] ? "" : "px"),
                        o = (re.cssNumber[t] || "px" !== r && +n) && vi.exec(re.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (o && o[3] !== r) {
                        r = r || o[3], s = s || [], o = +n || 1;
                        do a = a || ".5", o /= a, re.style(i.elem, t, o + r); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return s && (o = i.start = +o || +n || 0, i.unit = r, i.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]), i
                }
            ]
        };
    re.Animation = re.extend(I, {
            tweener: function (t, e) {
                re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, s = t.length; s > n; n++) i = t[n], bi[i] = bi[i] || [], bi[i].unshift(e)
            },
            prefilter: function (t, e) {
                e ? _i.unshift(t) : _i.push(t)
            }
        }), re.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? re.extend({}, t) : {
                complete: i || !i && e || re.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !re.isFunction(e) && e
            };
            return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                re.isFunction(n.old) && n.old.call(this), n.queue && re.dequeue(this, n.queue)
            }, n
        }, re.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function (t, e, i, n) {
                var s = re.isEmptyObject(t),
                    r = re.speed(e, i, n),
                    o = function () {
                        var e = I(this, re.extend({}, t), r);
                        (s || re._data(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, s || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
            },
            stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        r = re.timers,
                        o = re._data(this);
                    if (s) o[s] && o[s].stop && n(o[s]);
                    else
                        for (s in o) o[s] && o[s].stop && yi.test(s) && n(o[s]);
                    for (s = r.length; s--;) r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), e = !1, r.splice(s, 1));
                    (e || !i) && re.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, i = re._data(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        r = re.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, re.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function (t, e) {
            var i = re.fn[e];
            re.fn[e] = function (t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate($(e, !0), t, n, s)
            }
        }), re.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            re.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), re.timers = [], re.fx.tick = function () {
            var t, e = re.timers,
                i = 0;
            for (fi = re.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
            e.length || re.fx.stop(), fi = void 0
        }, re.fx.timer = function (t) {
            re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function () {
            mi || (mi = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function () {
            clearInterval(mi), mi = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function (t, e) {
            return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                var n = setTimeout(e, t);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        function () {
            var t, e, i, n, s = me.createElement("div");
            s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = s.getElementsByTagName("a")[0], i = me.createElement("select"), n = i.appendChild(me.createElement("option")), e = s.getElementsByTagName("input")[0], t.style.cssText = "top:1px", ne.getSetAttribute = "t" !== s.className, ne.style = /top/.test(t.getAttribute("style")), ne.hrefNormalized = "/a" === t.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = n.selected, ne.enctype = !!me.createElement("form").enctype, i.disabled = !0, ne.optDisabled = !n.disabled, e = me.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value, t = e = i = n = s = null
        }();
    var wi = /\r/g;
    re.fn.extend({
        val: function (t) {
            var e, i, n, s = this[0]; {
                if (arguments.length) return n = re.isFunction(t), this.each(function (i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, re(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : re.isArray(s) && (s = re.map(s, function (t) {
                        return null == t ? "" : t + ""
                    })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return e = re.valHooks[s.type] || re.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(wi, "") : null == i ? "" : i)
            }
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.text(t)
                }
            },
            select: {
                get: function (t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, r = "select-one" === t.type || 0 > s, o = r ? null : [], a = r ? s + 1 : n.length, l = 0 > s ? a : r ? s : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== s || (ne.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && re.nodeName(i.parentNode, "optgroup"))) {
                            if (e = re(i).val(), r) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function (t, e) {
                    for (var i, n, s = t.options, r = re.makeArray(e), o = s.length; o--;)
                        if (n = s[o], re.inArray(re.valHooks.option.get(n), r) >= 0) try {
                            n.selected = i = !0
                        } catch (a) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {
            set: function (t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        }, ne.checkOn || (re.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xi, Ci, ki = re.expr.attrHandle,
        Ei = /^(?:checked|selected)$/i,
        Ti = ne.getSetAttribute,
        Fi = ne.input;
    re.fn.extend({
        attr: function (t, e) {
            return Ne(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                re.removeAttr(this, t)
            })
        }
    }), re.extend({
        attr: function (t, e, i) {
            var n, s, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === ke ? re.prop(t, e, i) : (1 === r && re.isXMLDoc(t) || (e = e.toLowerCase(), n = re.attrHooks[e] || (re.expr.match.bool.test(e) ? Ci : xi)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = re.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void re.removeAttr(t, e))
        },
        removeAttr: function (t, e) {
            var i, n, s = 0,
                r = e && e.match(be);
            if (r && 1 === t.nodeType)
                for (; i = r[s++];) n = re.propFix[i] || i, re.expr.match.bool.test(i) ? Fi && Ti || !Ei.test(i) ? t[n] = !1 : t[re.camelCase("default-" + i)] = t[n] = !1 : re.attr(t, i, ""), t.removeAttribute(Ti ? i : n)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ne.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), Ci = {
        set: function (t, e, i) {
            return e === !1 ? re.removeAttr(t, i) : Fi && Ti || !Ei.test(i) ? t.setAttribute(!Ti && re.propFix[i] || i, i) : t[re.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = ki[e] || re.find.attr;
        ki[e] = Fi && Ti || !Ei.test(e) ? function (t, e, n) {
            var s, r;
            return n || (r = ki[e], ki[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ki[e] = r), s
        } : function (t, e, i) {
            return i ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Fi && Ti || (re.attrHooks.value = {
        set: function (t, e, i) {
            return re.nodeName(t, "input") ? void(t.defaultValue = e) : xi && xi.set(t, e, i)
        }
    }), Ti || (xi = {
        set: function (t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, ki.id = ki.name = ki.coords = function (t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, re.valHooks.button = {
        get: function (t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },
        set: xi.set
    }, re.attrHooks.contenteditable = {
        set: function (t, e, i) {
            xi.set(t, "" === e ? !1 : e, i)
        }
    }, re.each(["width", "height"], function (t, e) {
        re.attrHooks[e] = {
            set: function (t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), ne.style || (re.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Si = /^(?:input|select|textarea|button|object)$/i,
        Ai = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function (t, e) {
            return Ne(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = re.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (t, e, i) {
            var n, s, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return r = 1 !== o || !re.isXMLDoc(t), r && (e = re.propFix[e] || e, s = re.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Si.test(t.nodeName) || Ai.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || re.each(["href", "src"], function (t, e) {
        re.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var Ni = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function (t) {
            var e, i, n, s, r, o, a = 0,
                l = this.length,
                u = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function (e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(be) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ni, " ") : " ")) {
                        for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        o = re.trim(n), i.className !== o && (i.className = o)
                    }
            return this
        },
        removeClass: function (t) {
            var e, i, n, s, r, o, a = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function (e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(be) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ni, " ") : "")) {
                        for (r = 0; s = e[r++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        o = t ? re.trim(n) : "", i.className !== o && (i.className = o)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function (i) {
                re(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function () {
                if ("string" === i)
                    for (var e, n = 0, s = re(this), r = t.match(be) || []; e = r[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(i === ke || "boolean" === i) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ni, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        re.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Di = re.now(),
        Pi = /\?/,
        Oi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            s = re.trim(e + "");
        return s && !re.trim(s.replace(Oi, function (t, e, s, r) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !r - !s, "")
        })) ? Function("return " + s)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function (e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (s) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), i
    };
    var $i, Mi, Li = /#.*$/,
        ji = /([?&])_=[^&]*/,
        Ii = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Hi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qi = /^(?:GET|HEAD)$/,
        Ri = /^\/\//,
        Wi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zi = {},
        Bi = {},
        Ui = "*/".concat("*");
    try {
        Mi = location.href
    } catch (Vi) {
        Mi = me.createElement("a"), Mi.href = "", Mi = Mi.href
    }
    $i = Wi.exec(Mi.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mi,
            type: "GET",
            isLocal: Hi.test($i[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ui,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? R(R(t, re.ajaxSettings), e) : R(re.ajaxSettings, t)
        },
        ajaxPrefilter: H(zi),
        ajaxTransport: H(Bi),
        ajax: function (t, e) {
            function i(t, e, i, n) {
                var s, c, v, y, b, x = e;
                2 !== _ && (_ = 2, a && clearTimeout(a), u = void 0, o = n || "", w.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (y = W(h, w, i)), y = z(h, y, w, s), s ? (h.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (re.lastModified[r] = b), b = w.getResponseHeader("etag"), b && (re.etag[r] = b)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, c = y.data, v = y.error, s = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", s ? f.resolveWith(d, [c, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(g), g = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [w, h, s ? c : v]), m.fireWith(d, [w, x]), l && (p.trigger("ajaxComplete", [w, h]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, r, o, a, l, u, c, h = re.ajaxSetup({}, e),
                d = h.context || h,
                p = h.context && (d.nodeType || d.jquery) ? re(d) : re.event,
                f = re.Deferred(),
                m = re.Callbacks("once memory"),
                g = h.statusCode || {},
                v = {},
                y = {},
                _ = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === _) {
                            if (!c)
                                for (c = {}; e = Ii.exec(o);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === _ ? o : null
                    },
                    setRequestHeader: function (t, e) {
                        var i = t.toLowerCase();
                        return _ || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return _ || (h.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > _)
                                for (e in t) g[e] = [g[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || b;
                        return u && u.abort(e), i(0, e), this
                    }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || Mi) + "").replace(Li, "").replace(Ri, $i[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = re.trim(h.dataType || "*").toLowerCase().match(be) || [""], null == h.crossDomain && (n = Wi.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === $i[1] && n[2] === $i[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === ($i[3] || ("http:" === $i[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = re.param(h.data, h.traditional)), q(zi, h, e, w), 2 === _) return w;
            l = h.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qi.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (Pi.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = ji.test(r) ? r.replace(ji, "$1_=" + Di++) : r + (Pi.test(r) ? "&" : "?") + "_=" + Di++)), h.ifModified && (re.lastModified[r] && w.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && w.setRequestHeader("If-None-Match", re.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ui + "; q=0.01" : "") : h.accepts["*"]);
            for (s in h.headers) w.setRequestHeader(s, h.headers[s]);
            if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === _)) return w.abort();
            b = "abort";
            for (s in {
                success: 1,
                error: 1,
                complete: 1
            }) w[s](h[s]);
            if (u = q(Bi, h, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, h.timeout));
                try {
                    _ = 1, u.send(v, i)
                } catch (x) {
                    if (!(2 > _)) throw x;
                    i(-1, x)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function (t, e, i) {
            return re.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return re.get(t, void 0, e, "script")
        }
    }), re.each(["get", "post"], function (t, e) {
        re[e] = function (t, i, n, s) {
            return re.isFunction(i) && (s = s || n, n = i, i = void 0), re.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        re.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), re._evalUrl = function (t) {
        return re.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function (t) {
            if (re.isFunction(t)) return this.each(function (e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return this.each(re.isFunction(t) ? function (e) {
                re(this).wrapInner(t.call(this, e))
            } : function () {
                var e = re(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = re.isFunction(t);
            return this.each(function (i) {
                re(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function (t) {
        return !re.expr.filters.hidden(t)
    };
    var Xi = /%20/g,
        Qi = /\[\]$/,
        Gi = /\r?\n/g,
        Yi = /^(?:submit|button|image|reset|file)$/i,
        Ki = /^(?:input|select|textarea|keygen)/i;
    re.param = function (t, e) {
        var i, n = [],
            s = function (t, e) {
                e = re.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function () {
            s(this.name, this.value)
        });
        else
            for (i in t) B(i, t[i], e, s);
        return n.join("&").replace(Xi, "+")
    }, re.fn.extend({
        serialize: function () {
            return re.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Ki.test(this.nodeName) && !Yi.test(t) && (this.checked || !De.test(t))
            }).map(function (t, e) {
                var i = re(this).val();
                return null == i ? null : re.isArray(i) ? re.map(i, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Gi, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Gi, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
    } : U;
    var Ji = 0,
        Zi = {},
        tn = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function () {
        for (var t in Zi) Zi[t](void 0, !0)
    }), ne.cors = !!tn && "withCredentials" in tn, tn = ne.ajax = !!tn, tn && re.ajaxTransport(function (t) {
        if (!t.crossDomain || ne.cors) {
            var e;
            return {
                send: function (i, n) {
                    var s, r = t.xhr(),
                        o = ++Ji;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) r[s] = t.xhrFields[s];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && r.setRequestHeader(s, i[s] + "");
                    r.send(t.hasContent && t.data || null), e = function (i, s) {
                        var a, l, u;
                        if (e && (s || 4 === r.readyState))
                            if (delete Zi[o], e = void 0, r.onreadystatechange = re.noop, s) 4 !== r.readyState && r.abort();
                            else {
                                u = {}, a = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                        u && n(a, l, u, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Zi[o] = e : e()
                },
                abort: function () {
                    e && e(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i = me.head || re("head")[0] || me.documentElement;
            return {
                send: function (n, s) {
                    e = me.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },
                abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        nn = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = en.pop() || re.expando + "_" + Di++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function (e, i, n) {
        var s, r, o, a = e.jsonp !== !1 && (nn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(nn, "$1" + s) : e.jsonp !== !1 && (e.url += (Pi.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
            return o || re.error(s + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = t[s], t[s] = function () {
            o = arguments
        }, n.always(function () {
            t[s] = r, e[s] && (e.jsonpCallback = i.jsonpCallback, en.push(s)), o && re.isFunction(r) && r(o[0]), o = r = void 0
        }), "script") : void 0
    }), re.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || me;
        var n = de.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = re.buildFragment([t], e, s), s && s.length && re(s).remove(), re.merge([], n.childNodes))
    };
    var sn = re.fn.load;
    re.fn.load = function (t, e, i) {
        if ("string" != typeof t && sn) return sn.apply(this, arguments);
        var n, s, r, o = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = t.slice(a, t.length), t = t.slice(0, a)), re.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && re.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, o.html(n ? re("<div>").append(re.parseHTML(t)).find(n) : t)
        }).complete(i && function (t, e) {
            o.each(i, s || [t.responseText, e, t])
        }), this
    }, re.expr.filters.animated = function (t) {
        return re.grep(re.timers, function (e) {
            return t === e.elem
        }).length
    };
    var rn = t.document.documentElement;
    re.offset = {
        setOffset: function (t, e, i) {
            var n, s, r, o, a, l, u, c = re.css(t, "position"),
                h = re(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), r = re.css(t, "top"), l = re.css(t, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [r, l]) > -1, u ? (n = h.position(), o = n.top, s = n.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, re.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                re.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                r = s && s.ownerDocument;
            if (r) return e = r.documentElement, re.contains(e, s) ? (typeof s.getBoundingClientRect !== ke && (n = s.getBoundingClientRect()), i = X(r), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function () {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === re.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (i = t.offset()), i.top += re.css(t[0], "borderTopWidth", !0), i.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - re.css(n, "marginTop", !0),
                    left: e.left - i.left - re.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || rn; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                return t || rn
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var i = /Y/.test(e);
        re.fn[t] = function (n) {
            return Ne(this, function (t, n, s) {
                var r = X(t);
                return void 0 === s ? r ? e in r ? r[e] : r.document.documentElement[n] : t[n] : void(r ? r.scrollTo(i ? re(r).scrollLeft() : s, i ? s : re(r).scrollTop()) : t[n] = s)
            }, t, n, arguments.length, null)
        }
    }), re.each(["top", "left"], function (t, e) {
        re.cssHooks[e] = T(ne.pixelPosition, function (t, i) {
            return i ? (i = ii(t, e), si.test(i) ? re(t).position()[e] + "px" : i) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        re.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (i, n) {
            re.fn[n] = function (n, s) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    o = i || (n === !0 || s === !0 ? "margin" : "border");
                return Ne(this, function (e, i, n) {
                    var s;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? re.css(e, i, o) : re.style(e, i, n, o)
                }, e, r ? n : void 0, r, null)
            }
        })
    }), re.fn.size = function () {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    });
    var on = t.jQuery,
        an = t.$;
    return re.noConflict = function (e) {
        return t.$ === re && (t.$ = an), e && t.jQuery === re && (t.jQuery = on), re
    }, typeof e === ke && (t.jQuery = t.$ = re), re
}), function () {
    var t, e;
    t = window.jQuery || ("function" == typeof require ? require("jquery") : void 0), e = t(document), t.turbo = {
        version: "2.0.2",
        isReady: !1,
        use: function (t, i) {
            return e.off(".turbo").on("" + t + ".turbo", this.onLoad).on("" + i + ".turbo", this.onFetch)
        },
        addCallback: function (i) {
            return t.turbo.isReady ? i(t) : e.on("turbo:ready", function () {
                return i(t)
            })
        },
        onLoad: function () {
            return t.turbo.isReady = !0, e.trigger("turbo:ready")
        },
        onFetch: function () {
            return t.turbo.isReady = !1
        },
        register: function () {
            return t(this.onLoad), t.fn.ready = this.addCallback
        }
    }, t.turbo.register(), t.turbo.use("page:load", "page:fetch")
}.call(this), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (e) {
            var i = t('meta[name="csrf-token"]').attr("content");
            i && e.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function () {
            var e = t("meta[name=csrf-token]").attr("content"),
                i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        },
        fire: function (e, i, n) {
            var s = t.Event(i);
            return e.trigger(s, n), s.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t.attr("href")
        },
        handleRemote: function (n) {
            var s, r, o, a, l, u, c, h;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain"), l = a === e ? null : a, u = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    s = n.attr("method"), r = n.attr("action"), o = n.serializeArray();
                    var d = n.data("ujs:submit-button");
                    d && (o.push(d), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), r = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", r = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (s = n.data("method"), r = i.href(n), o = n.data("params") || null);
                h = {
                    type: s || "GET",
                    data: o,
                    dataType: c,
                    beforeSend: function (t, s) {
                        return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [t, s])
                    },
                    success: function (t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function (t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function (t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: l
                }, u && (h.xhrFields = {
                    withCredentials: u
                }), r && (h.url = r);
                var p = i.ajax(h);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function (n) {
            var s = i.href(n),
                r = n.data("method"),
                o = n.attr("target"),
                a = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                u = t('<form method="post" action="' + s + '"></form>'),
                c = '<input name="_method" value="' + r + '" type="hidden" />';
            l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(c).appendTo("body"), u.submit()
        },
        disableFormElements: function (e) {
            e.find(i.disableSelector).each(function () {
                var e = t(this),
                    i = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[i]()), e[i](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function (e) {
            e.find(i.enableSelector).each(function () {
                var e = t(this),
                    i = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[i](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function (t) {
            var e, n = t.data("confirm"),
                s = !1;
            return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
        },
        blankInputs: function (e, i, n) {
            var s, r, o = t(),
                a = i || "input,textarea",
                l = e.find(a);
            return l.each(function () {
                if (s = t(this), r = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !r == !n) {
                    if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                    o = o.add(s)
                }
            }), o.length ? o : !1
        },
        nonBlankInputs: function (t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (t) {
            t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function (t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function (n) {
        var s = t(this),
            r = s.data("method"),
            o = s.data("params"),
            a = n.metaKey || n.ctrlKey;
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (!a && s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
            if (a && (!r || "GET" === r) && !o) return !0;
            var l = i.handleRemote(s);
            return l === !1 ? i.enableElement(s) : l.error(function () {
                i.enableElement(s)
            }), !1
        }
        return s.data("method") ? (i.handleMethod(s), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function (e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.inputChangeSelector, "change.rails", function (e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var s = t(this),
            r = s.data("remote") !== e,
            o = i.blankInputs(s, i.requiredInputSelector),
            a = i.nonBlankInputs(s, i.fileInputSelector);
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (o && s.attr("novalidate") == e && i.fire(s, "ajax:aborted:required", [o])) return i.stopEverything(n);
        if (r) {
            if (a) {
                setTimeout(function () {
                    i.disableFormElements(s)
                }, 13);
                var l = i.fire(s, "ajax:aborted:file", [a]);
                return l || setTimeout(function () {
                    i.enableFormElements(s)
                }, 13), l
            }
            return i.handleRemote(s), !1
        }
        setTimeout(function () {
            i.disableFormElements(s)
        }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        var s = n.attr("name"),
            r = s ? {
                name: s,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", r)
    }), n.delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function (e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function () {
        i.refreshCSRFTokens()
    }))
}(jQuery), function (t, e) {
    function i(e, i) {
        var s, r, o, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = e.parentNode, r = s.name, e.href && r && "map" === s.nodeName.toLowerCase() ? (o = t("img[usemap=#" + r + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
    }

    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    var s = 0,
        r = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function (e) {
            return function (i, n) {
                return "number" == typeof i ? this.each(function () {
                    var e = this;
                    setTimeout(function () {
                        t(e).focus(), n && n.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        scrollParent: function () {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function (i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length)
                for (var n, s, r = t(this[0]); r.length && r[0] !== document;) {
                    if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(r.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    r = r.parent()
                }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                r.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (i) {
                return !!t.data(i, e)
            }
        }) : function (e, i, n) {
            return !!t.data(e, n[3])
        },
        focusable: function (e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function (e) {
            var n = t.attr(e, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && i(e, !s)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (i, n) {
        function s(e, i, n, s) {
            return t.each(r, function () {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            o = n.toLowerCase(),
            a = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + n] = function (i) {
            return i === e ? a["inner" + n].call(this) : this.each(function () {
                t(this).css(o, s(this, i) + "px")
            })
        }, t.fn["outer" + n] = function (e, i) {
            return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function () {
                t(this).css(o, s(this, e, !0, i) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
        return function (i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
        disableSelection: function () {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
                t.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function (e, i, n) {
                var s, r = t.ui[e].prototype;
                for (s in n) r.plugins[s] = r.plugins[s] || [], r.plugins[s].push([i, n[s]])
            },
            call: function (t, e, i) {
                var n, s = t.plugins[e];
                if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (n = 0; n < s.length; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
            }
        },
        hasScroll: function (e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        }
    })
}(jQuery), function (t, e) {
    var i = 0,
        n = Array.prototype.slice,
        s = t.cleanData;
    t.cleanData = function (e) {
        for (var i, n = 0; null != (i = e[n]); n++) try {
            t(i).triggerHandler("remove")
        } catch (r) {}
        s(e)
    }, t.widget = function (e, i, n) {
        var s, r, o, a, l = {},
            u = e.split(".")[0];
        e = e.split(".")[1], s = u + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function (e) {
            return !!t.data(e, s)
        }, t[u] = t[u] || {}, r = t[u][e], o = t[u][e] = function (t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
        }, t.extend(o, r, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function (e, n) {
            return t.isFunction(n) ? void(l[e] = function () {
                var t = function () {
                        return i.prototype[e].apply(this, arguments)
                    },
                    s = function (t) {
                        return i.prototype[e].apply(this, t)
                    };
                return function () {
                    var e, i = this._super,
                        r = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = r, e
                }
            }()) : void(l[e] = n)
        }), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: r ? a.widgetEventPrefix || e : e
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: e,
            widgetFullName: s
        }), r ? (t.each(r._childConstructors, function (e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, o, i._proto)
        }), delete r._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o)
    }, t.widget.extend = function (i) {
        for (var s, r, o = n.call(arguments, 1), a = 0, l = o.length; l > a; a++)
            for (s in o[a]) r = o[a][s], o[a].hasOwnProperty(s) && r !== e && (i[s] = t.isPlainObject(r) ? t.isPlainObject(i[s]) ? t.widget.extend({}, i[s], r) : t.widget.extend({}, r) : r);
        return i
    }, t.widget.bridge = function (i, s) {
        var r = s.prototype.widgetFullName || i;
        t.fn[i] = function (o) {
            var a = "string" == typeof o,
                l = n.call(arguments, 1),
                u = this;
            return o = !a && l.length ? t.widget.extend.apply(null, [o].concat(l)) : o, this.each(a ? function () {
                var n, s = t.data(this, r);
                return s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (n = s[o].apply(s, l), n !== s && n !== e ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + o + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + o + "'")
            } : function () {
                var e = t.data(this, r);
                e ? e.option(o || {})._init() : t.data(this, r, new s(o, this))
            }), u
        }
    }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (i, n) {
            var s, r, o, a = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (a = {}, s = i.split("."), i = s.shift(), s.length) {
                    for (r = a[i] = t.widget.extend({}, this.options[i]), o = 0; o < s.length - 1; o++) r[s[o]] = r[s[o]] || {}, r = r[s[o]];
                    if (i = s.pop(), 1 === arguments.length) return r[i] === e ? null : r[i];
                    r[i] = n
                } else {
                    if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];
                    a[i] = n
                }
            return this._setOptions(a), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (e, i, n) {
            var s, r = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function (n, o) {
                function a() {
                    return e || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : void 0
                }
                "string" != typeof o && (a.guid = o.guid = o.guid || a.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    c = l[2];
                c ? s.delegate(c, u, a) : i.bind(u, a)
            })
        },
        _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, n) {
            var s, r, o = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
                for (s in r) s in i || (i[s] = r[s]);
            return this.element.trigger(i, n), !(t.isFunction(o) && o.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, s, r) {
            "string" == typeof s && (s = {
                effect: s
            });
            var o, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), o = !t.isEmptyObject(s), s.complete = r, s.delay && n.delay(s.delay), o && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, r) : n.queue(function (i) {
                t(this)[e](), r && r.call(n[0]), i()
            })
        }
    })
}(jQuery), function (t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function n(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function s(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var r, o = Math.max,
        a = Math.abs,
        l = Math.round,
        u = /left|center|right/,
        c = /top|center|bottom/,
        h = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
            scrollbarWidth: function () {
                if (r !== e) return r;
                var i, n, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = s.children()[0];
                return t("body").append(s), i = o.offsetWidth, s.css("overflow", "scroll"), n = o.offsetWidth, i === n && (n = s[0].clientWidth), s.remove(), r = i - n
            },
            getScrollInfo: function (e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    r = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                return {
                    width: r ? t.position.scrollbarWidth() : 0,
                    height: s ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function (e) {
                var i = t(e || window),
                    n = t.isWindow(i[0]),
                    s = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: n,
                    isDocument: s,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: n ? i.width() : i.outerWidth(),
                    height: n ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function (e) {
            if (!e || !e.of) return f.apply(this, arguments);
            e = t.extend({}, e);
            var r, p, m, g, v, y, _ = t(e.of),
                b = t.position.getWithinInfo(e.within),
                w = t.position.getScrollInfo(b),
                x = (e.collision || "flip").split(" "),
                C = {};
            return y = s(_), _[0].preventDefault && (e.at = "left top"), p = y.width, m = y.height, g = y.offset, v = t.extend({}, g), t.each(["my", "at"], function () {
                var t, i, n = (e[this] || "").split(" ");
                1 === n.length && (n = u.test(n[0]) ? n.concat(["center"]) : c.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = u.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", t = h.exec(n[0]), i = h.exec(n[1]), C[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(n[0])[0], d.exec(n[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), r = i(C.at, p, m), v.left += r[0], v.top += r[1], this.each(function () {
                var s, u, c = t(this),
                    h = c.outerWidth(),
                    d = c.outerHeight(),
                    f = n(this, "marginLeft"),
                    y = n(this, "marginTop"),
                    k = h + f + n(this, "marginRight") + w.width,
                    E = d + y + n(this, "marginBottom") + w.height,
                    T = t.extend({}, v),
                    F = i(C.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? T.left -= h : "center" === e.my[0] && (T.left -= h / 2), "bottom" === e.my[1] ? T.top -= d : "center" === e.my[1] && (T.top -= d / 2), T.left += F[0], T.top += F[1], t.support.offsetFractions || (T.left = l(T.left), T.top = l(T.top)), s = {
                    marginLeft: f,
                    marginTop: y
                }, t.each(["left", "top"], function (i, n) {
                    t.ui.position[x[i]] && t.ui.position[x[i]][n](T, {
                        targetWidth: p,
                        targetHeight: m,
                        elemWidth: h,
                        elemHeight: d,
                        collisionPosition: s,
                        collisionWidth: k,
                        collisionHeight: E,
                        offset: [r[0] + F[0], r[1] + F[1]],
                        my: e.my,
                        at: e.at,
                        within: b,
                        elem: c
                    })
                }), e.using && (u = function (t) {
                    var i = g.left - T.left,
                        n = i + p - h,
                        s = g.top - T.top,
                        r = s + m - d,
                        l = {
                            target: {
                                element: _,
                                left: g.left,
                                top: g.top,
                                width: p,
                                height: m
                            },
                            element: {
                                element: c,
                                left: T.left,
                                top: T.top,
                                width: h,
                                height: d
                            },
                            horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
                        };
                    h > p && a(i + n) < p && (l.horizontal = "center"), d > m && a(s + r) < m && (l.vertical = "middle"), l.important = o(a(i), a(n)) > o(a(s), a(r)) ? "horizontal" : "vertical", e.using.call(this, t, l)
                }), c.offset(t.extend(T, {
                    using: u
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function (t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollLeft : n.offset.left,
                        r = n.width,
                        a = t.left - e.collisionPosition.marginLeft,
                        l = s - a,
                        u = a + e.collisionWidth - r - s;
                    e.collisionWidth > r ? l > 0 && 0 >= u ? (i = t.left + l + e.collisionWidth - r - s, t.left += l - i) : t.left = u > 0 && 0 >= l ? s : l > u ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = o(t.left - a, t.left)
                },
                top: function (t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollTop : n.offset.top,
                        r = e.within.height,
                        a = t.top - e.collisionPosition.marginTop,
                        l = s - a,
                        u = a + e.collisionHeight - r - s;
                    e.collisionHeight > r ? l > 0 && 0 >= u ? (i = t.top + l + e.collisionHeight - r - s, t.top += l - i) : t.top = u > 0 && 0 >= l ? s : l > u ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = o(t.top - a, t.top)
                }
            },
            flip: {
                left: function (t, e) {
                    var i, n, s = e.within,
                        r = s.offset.left + s.scrollLeft,
                        o = s.width,
                        l = s.isWindow ? s.scrollLeft : s.offset.left,
                        u = t.left - e.collisionPosition.marginLeft,
                        c = u - l,
                        h = u + e.collisionWidth - o - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - r, (0 > i || i < a(c)) && (t.left += d + p + f)) : h > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || a(n) < h) && (t.left += d + p + f))
                },
                top: function (t, e) {
                    var i, n, s = e.within,
                        r = s.offset.top + s.scrollTop,
                        o = s.height,
                        l = s.isWindow ? s.scrollTop : s.offset.top,
                        u = t.top - e.collisionPosition.marginTop,
                        c = u - l,
                        h = u + e.collisionHeight - o - l,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        m = -2 * e.offset[1];
                    0 > c ? (n = t.top + p + f + m + e.collisionHeight - o - r, t.top + p + f + m > c && (0 > n || n < a(c)) && (t.top += p + f + m)) : h > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, t.top + p + f + m > h && (i > 0 || a(i) < h) && (t.top += p + f + m))
                }
            },
            flipfit: {
                left: function () {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function () {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function () {
            var e, i, n, s, r, o = document.getElementsByTagName("body")[0],
                a = document.createElement("div");
            e = document.createElement(o ? "div" : "body"), n = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, o && t.extend(n, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (r in n) e.style[r] = n[r];
            e.appendChild(a), i = o || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", s = t(a).offset().left, t.support.offsetFractions = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e)
        }()
}(jQuery), function (t) {
    t.widget("ui.menu", {
        version: "1.10.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function (t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function (t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function (e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function (e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function (e) {
                    this._delay(function () {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, s, r, o, a, l = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                l = !1, s = this.previousFilter || "", r = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), r === s ? o = !0 : r = s + r, a = new RegExp("^" + i(r), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return a.test(t(this).children("a").text())
                }), n = o && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (r = String.fromCharCode(e.keyCode), a = new RegExp("^" + i(r), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return a.test(t(this).children("a").text())
                })), n.length ? (this.focus(e, n), n.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function (t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var e, i = this.options.icons.submenu,
                n = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var e = t(this),
                    n = e.prev("a"),
                    s = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                n.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", n.attr("id"))
            }), e = n.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function () {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function (t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function (t, e) {
            var i, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function (e) {
            var i, n, s, r, o, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, r = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = e.height(), 0 > s ? this.activeMenu.scrollTop(r + s) : s + a > o && this.activeMenu.scrollTop(r + s - o + a))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, n)
        },
        nextPage: function (e) {
            var i, n, s;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - n - s < 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function (e) {
            var i, n, s;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - n + s > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
}(jQuery), function (t) {
    t.widget("ui.autocomplete", {
        version: "1.10.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                r = "textarea" === s,
                o = "input" === s;
            this.isMultiLine = r ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[r || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                    e = !1, n = !1, i = !1;
                    var r = t.ui.keyCode;
                    switch (s.keyCode) {
                    case r.PAGE_UP:
                        e = !0, this._move("previousPage", s);
                        break;
                    case r.PAGE_DOWN:
                        e = !0, this._move("nextPage", s);
                        break;
                    case r.UP:
                        e = !0, this._keyEvent("previous", s);
                        break;
                    case r.DOWN:
                        e = !0, this._keyEvent("next", s);
                        break;
                    case r.ENTER:
                    case r.NUMPAD_ENTER:
                        this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                        break;
                    case r.TAB:
                        this.menu.active && this.menu.select(s);
                        break;
                    case r.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                        break;
                    default:
                        i = !0, this._searchTimeout(s)
                    }
                },
                keypress: function (n) {
                    if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                        case s.PAGE_UP:
                            this._move("previousPage", n);
                            break;
                        case s.PAGE_DOWN:
                            this._move("nextPage", n);
                            break;
                        case s.UP:
                            this._keyEvent("previous", n);
                            break;
                        case s.DOWN:
                            this._keyEvent("next", n)
                        }
                    }
                },
                input: function (t) {
                    return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function (e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                        var e = this;
                        this.document.one("mousedown", function (n) {
                            n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                        })
                    })
                },
                menufocus: function (e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function () {
                        t(e.target).trigger(e.originalEvent)
                    });
                    var n = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
                },
                menuselect: function (t, e) {
                    var i = e.item.data("ui-autocomplete-item"),
                        n = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function () {
                        this.previous = n, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        },
        _initSource: function () {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
                n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function (t) {
                        s(t)
                    },
                    error: function () {
                        s([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (t) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function (t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function () {
            var e = ++this.requestIndex;
            return t.proxy(function (t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function (t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function (e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (e, i) {
            var n = this;
            t.each(i, function (t, i) {
                n._renderItemData(e, i)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function (e, i) {
            var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return n.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function (t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }
    })
}(jQuery), function (t) {
    var e = !1;
    t(document).mouseup(function () {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var n = this,
                    s = 1 === i.which,
                    r = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return s && !r && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    n.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return n._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return n._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function (e) {
            return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function (e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery), function (t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var e, i, n = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                r = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                o = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) o.push(r);
            this.handles = s.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function () {
            var e = this.options,
                i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, n, s, r, o, a, l, u, c = this,
                h = this.options;
            return h.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(n - c.values(e));
                (s > i || s === i && (e === c._lastChangedValue || c.values(e) === h.min)) && (s = i, r = t(this), o = e)
            }), a = this._start(e, o), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, r.addClass("ui-state-active").focus(), l = r.offset(), u = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - r.width() / 2,
                top: e.pageY - l.top - r.height() / 2 - (parseInt(r.css("borderTopWidth"), 10) || 0) - (parseInt(r.css("borderBottomWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, n), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, n, s, r;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), r = this._valueMin() + n * s, this._trimAlignValue(r)
        },
        _start: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function (t, e, i) {
            var n, s, r;
            this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, r = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: s
            }), n = this.values(e ? 0 : 1), r !== !1 && this.values(e, i))) : i !== this.value() && (r = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), r !== !1 && this.value(i))
        },
        _stop: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function (t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function (e, i) {
            var n, s, r;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(s[r]), this._change(null, r);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var n, s = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var e, i, n, s, r, o = this.options.range,
                a = this.options,
                l = this,
                u = this._animateOff ? !1 : a.animate,
                c = {};
            this.options.values && this.options.values.length ? this.handles.each(function (n) {
                i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: i + "%"
                }, a.animate), 1 === n && l.range[u ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: i + "%"
                }, a.animate), 1 === n && l.range[u ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))), e = i
            }) : (n = this.value(), s = this._valueMin(), r = this._valueMax(), i = r !== s ? (n - s) / (r - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: i + "%"
            }, a.animate), "max" === o && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: a.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: i + "%"
            }, a.animate), "max" === o && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: a.animate
            }))
        },
        _handleEvents: {
            keydown: function (i) {
                var n, s, r, o, a = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), n = this._start(i, a), n === !1)) return
                }
                switch (o = this.options.step, s = r = this.options.values && this.options.values.length ? this.values(a) : this.value(), i.keyCode) {
                case t.ui.keyCode.HOME:
                    r = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    r = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    r = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    r = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (s === this._valueMax()) return;
                    r = this._trimAlignValue(s + o);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (s === this._valueMin()) return;
                    r = this._trimAlignValue(s - o)
                }
                this._slide(i, a, r)
            },
            click: function (t) {
                t.preventDefault()
            },
            keyup: function (e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery), function (t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function () {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (e, i) {
            var n = null,
                s = !1,
                r = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
                return t.data(this, r.widgetName + "-item") === r ? (n = t(this), !1) : void 0
            }), t.data(e.target, r.widgetName + "-item") === r && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function () {
                this === e.target && (s = !0)
            }), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function (e, i, n) {
            var s, r, o = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(r)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            var i, n, s, r, o = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - t(document).scrollTop() < o.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < o.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + o.scrollSpeed)), e.pageX - t(document).scrollLeft() < o.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < o.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + o.scrollSpeed))), a !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = this.items[i], s = n.item[0], r = this._intersectsWithPointer(n), r && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === r ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
                    if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        r = this.options.axis,
                        o = {};
                    r && "x" !== r || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                        n._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function () {
                n.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                r = t.left,
                o = r + t.width,
                a = t.top,
                l = a + t.height,
                u = this.offset.click.top,
                c = this.offset.click.left,
                h = "x" === this.options.axis || n + u > a && l > n + u,
                d = "y" === this.options.axis || e + c > r && o > e + c,
                p = h && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : r < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function (t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                s = i && n,
                r = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return s ? this.floating ? o && "right" === o || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                n = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return this.floating && r ? "right" === r && n || "left" === r && !n : s && ("down" === s && i || "up" === s && !i)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            function i() {
                a.push(this)
            }
            var n, s, r, o, a = [],
                l = [],
                u = this._connectWith();
            if (u && e)
                for (n = u.length - 1; n >= 0; n--)
                    for (r = t(u[n]), s = r.length - 1; s >= 0; s--) o = t.data(r[s], this.widgetFullName), o && o !== this && !o.options.disabled && l.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(a)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i, n, s, r, o, a, l, u, c = this.items,
                h = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = t(d[i]), n = s.length - 1; n >= 0; n--) r = t.data(s[n], this.widgetFullName), r && r !== this && !r.options.disabled && (h.push([t.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {
                        item: this.currentItem
                    }) : t(r.options.items, r.element), r]), this.containers.push(r));
            for (i = h.length - 1; i >= 0; i--)
                for (o = h[i][1], a = h[i][0], n = 0, u = a.length; u > n; n++) l = t(a[n]), l.data(this.widgetName + "-item", o), c.push({
                    item: l,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function (e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, r;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), r = s.offset(), n.left = r.left, n.top = r.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) r = this.containers[i].element.offset(), this.containers[i].containerCache.left = r.left, this.containers[i].containerCache.top = r.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function () {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === n ? e.currentItem.children().each(function () {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s)
                    }) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function (t, s) {
                    (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function (n) {
            var s, r, o, a, l, u, c, h, d, p, f = null,
                m = null;
            for (s = this.containers.length - 1; s >= 0; s--)
                if (!t.contains(this.currentItem[0], this.containers[s].element[0]))
                    if (this._intersectsWith(this.containers[s].containerCache)) {
                        if (f && t.contains(this.containers[s].element[0], f.element[0])) continue;
                        f = this.containers[s], m = s
                    } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", n, this._uiHash(this)), this.containers[s].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", n, this._uiHash(this)), this.containers[m].containerCache.over = 1);
                else {
                    for (o = 1e4, a = null, p = f.floating || i(this.currentItem), l = p ? "left" : "top", u = p ? "width" : "height", c = this.positionAbs[l] + this.offset.click[l], r = this.items.length - 1; r >= 0; r--) t.contains(this.containers[m].element[0], this.items[r].item[0]) && this.items[r].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[r].top, this.items[r].height)) && (h = this.items[r].item.offset()[l], d = !1, Math.abs(h - c) > Math.abs(h + this.items[r][u] - c) && (d = !0, h += this.items[r][u]), Math.abs(h - c) < o && (o = Math.abs(h - c), a = this.items[r], this.direction = d ? "up" : "down"));
                    if (!a && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[m]) return;
                    a ? this._rearrange(n, a, null, !0) : this._rearrange(n, null, this.containers[m].element, !0), this._trigger("change", n, this._uiHash()), this.containers[m]._trigger("change", n, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", n, this._uiHash(this)), this.containers[m].containerCache.over = 1
                }
        },
        _createHelper: function (e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                r = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : s.scrollLeft()) * n
            }
        },
        _generatePosition: function (e) {
            var i, n, s = this.options,
                r = e.pageX,
                o = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / s.grid[1]) * s.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((r - this.originalPageX) / s.grid[0]) * s.grid[0], r = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function () {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function (t, e) {
            function i(t, e, i) {
                return function (n) {
                    i._trigger(t, n, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (s.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), s.push(function (t) {
                return function (e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), s.push(function (t) {
                return function (e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (n = 0; n < s.length; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery), function () {
    var t = this,
        e = t._,
        i = {},
        n = Array.prototype,
        s = Object.prototype,
        r = Function.prototype,
        o = n.push,
        a = n.slice,
        l = n.concat,
        u = s.toString,
        c = s.hasOwnProperty,
        h = n.forEach,
        d = n.map,
        p = n.reduce,
        f = n.reduceRight,
        m = n.filter,
        g = n.every,
        v = n.some,
        y = n.indexOf,
        _ = n.lastIndexOf,
        b = Array.isArray,
        w = Object.keys,
        x = r.bind,
        C = function (t) {
            return t instanceof C ? t : this instanceof C ? void(this._wrapped = t) : new C(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : t._ = C, C.VERSION = "1.6.0";
    var k = C.each = C.forEach = function (t, e, n) {
        if (null == t) return t;
        if (h && t.forEach === h) t.forEach(e, n);
        else if (t.length === +t.length) {
            for (var s = 0, r = t.length; r > s; s++)
                if (e.call(n, t[s], s, t) === i) return
        } else
            for (var o = C.keys(t), s = 0, r = o.length; r > s; s++)
                if (e.call(n, t[o[s]], o[s], t) === i) return; return t
    };
    C.map = C.collect = function (t, e, i) {
        var n = [];
        return null == t ? n : d && t.map === d ? t.map(e, i) : (k(t, function (t, s, r) {
            n.push(e.call(i, t, s, r))
        }), n)
    };
    var E = "Reduce of empty array with no initial value";
    C.reduce = C.foldl = C.inject = function (t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), p && t.reduce === p) return n && (e = C.bind(e, n)), s ? t.reduce(e, i) : t.reduce(e);
        if (k(t, function (t, r, o) {
            s ? i = e.call(n, i, t, r, o) : (i = t, s = !0)
        }), !s) throw new TypeError(E);
        return i
    }, C.reduceRight = C.foldr = function (t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f) return n && (e = C.bind(e, n)), s ? t.reduceRight(e, i) : t.reduceRight(e);
        var r = t.length;
        if (r !== +r) {
            var o = C.keys(t);
            r = o.length
        }
        if (k(t, function (a, l, u) {
            l = o ? o[--r] : --r, s ? i = e.call(n, i, t[l], l, u) : (i = t[l], s = !0)
        }), !s) throw new TypeError(E);
        return i
    }, C.find = C.detect = function (t, e, i) {
        var n;
        return T(t, function (t, s, r) {
            return e.call(i, t, s, r) ? (n = t, !0) : void 0
        }), n
    }, C.filter = C.select = function (t, e, i) {
        var n = [];
        return null == t ? n : m && t.filter === m ? t.filter(e, i) : (k(t, function (t, s, r) {
            e.call(i, t, s, r) && n.push(t)
        }), n)
    }, C.reject = function (t, e, i) {
        return C.filter(t, function (t, n, s) {
            return !e.call(i, t, n, s)
        }, i)
    }, C.every = C.all = function (t, e, n) {
        e || (e = C.identity);
        var s = !0;
        return null == t ? s : g && t.every === g ? t.every(e, n) : (k(t, function (t, r, o) {
            return (s = s && e.call(n, t, r, o)) ? void 0 : i
        }), !!s)
    };
    var T = C.some = C.any = function (t, e, n) {
        e || (e = C.identity);
        var s = !1;
        return null == t ? s : v && t.some === v ? t.some(e, n) : (k(t, function (t, r, o) {
            return s || (s = e.call(n, t, r, o)) ? i : void 0
        }), !!s)
    };
    C.contains = C.include = function (t, e) {
        return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : T(t, function (t) {
            return t === e
        })
    }, C.invoke = function (t, e) {
        var i = a.call(arguments, 2),
            n = C.isFunction(e);
        return C.map(t, function (t) {
            return (n ? e : t[e]).apply(t, i)
        })
    }, C.pluck = function (t, e) {
        return C.map(t, C.property(e))
    }, C.where = function (t, e) {
        return C.filter(t, C.matches(e))
    }, C.findWhere = function (t, e) {
        return C.find(t, C.matches(e))
    }, C.max = function (t, e, i) {
        if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        var n = -1 / 0,
            s = -1 / 0;
        return k(t, function (t, r, o) {
            var a = e ? e.call(i, t, r, o) : t;
            a > s && (n = t, s = a)
        }), n
    }, C.min = function (t, e, i) {
        if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        var n = 1 / 0,
            s = 1 / 0;
        return k(t, function (t, r, o) {
            var a = e ? e.call(i, t, r, o) : t;
            s > a && (n = t, s = a)
        }), n
    }, C.shuffle = function (t) {
        var e, i = 0,
            n = [];
        return k(t, function (t) {
            e = C.random(i++), n[i - 1] = n[e], n[e] = t
        }), n
    }, C.sample = function (t, e, i) {
        return null == e || i ? (t.length !== +t.length && (t = C.values(t)), t[C.random(t.length - 1)]) : C.shuffle(t).slice(0, Math.max(0, e))
    };
    var F = function (t) {
        return null == t ? C.identity : C.isFunction(t) ? t : C.property(t)
    };
    C.sortBy = function (t, e, i) {
        return e = F(e), C.pluck(C.map(t, function (t, n, s) {
            return {
                value: t,
                index: n,
                criteria: e.call(i, t, n, s)
            }
        }).sort(function (t, e) {
            var i = t.criteria,
                n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var S = function (t) {
        return function (e, i, n) {
            var s = {};
            return i = F(i), k(e, function (r, o) {
                var a = i.call(n, r, o, e);
                t(s, a, r)
            }), s
        }
    };
    C.groupBy = S(function (t, e, i) {
        C.has(t, e) ? t[e].push(i) : t[e] = [i]
    }), C.indexBy = S(function (t, e, i) {
        t[e] = i
    }), C.countBy = S(function (t, e) {
        C.has(t, e) ? t[e]++ : t[e] = 1
    }), C.sortedIndex = function (t, e, i, n) {
        i = F(i);
        for (var s = i.call(n, e), r = 0, o = t.length; o > r;) {
            var a = r + o >>> 1;
            i.call(n, t[a]) < s ? r = a + 1 : o = a
        }
        return r
    }, C.toArray = function (t) {
        return t ? C.isArray(t) ? a.call(t) : t.length === +t.length ? C.map(t, C.identity) : C.values(t) : []
    }, C.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : C.keys(t).length
    }, C.first = C.head = C.take = function (t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : 0 > e ? [] : a.call(t, 0, e)
    }, C.initial = function (t, e, i) {
        return a.call(t, 0, t.length - (null == e || i ? 1 : e))
    }, C.last = function (t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, C.rest = C.tail = C.drop = function (t, e, i) {
        return a.call(t, null == e || i ? 1 : e)
    }, C.compact = function (t) {
        return C.filter(t, C.identity)
    };
    var A = function (t, e, i) {
        return e && C.every(t, C.isArray) ? l.apply(i, t) : (k(t, function (t) {
            C.isArray(t) || C.isArguments(t) ? e ? o.apply(i, t) : A(t, e, i) : i.push(t)
        }), i)
    };
    C.flatten = function (t, e) {
        return A(t, e, [])
    }, C.without = function (t) {
        return C.difference(t, a.call(arguments, 1))
    }, C.partition = function (t, e) {
        var i = [],
            n = [];
        return k(t, function (t) {
            (e(t) ? i : n).push(t)
        }), [i, n]
    }, C.uniq = C.unique = function (t, e, i, n) {
        C.isFunction(e) && (n = i, i = e, e = !1);
        var s = i ? C.map(t, i, n) : t,
            r = [],
            o = [];
        return k(s, function (i, n) {
            (e ? n && o[o.length - 1] === i : C.contains(o, i)) || (o.push(i), r.push(t[n]))
        }), r
    }, C.union = function () {
        return C.uniq(C.flatten(arguments, !0))
    }, C.intersection = function (t) {
        var e = a.call(arguments, 1);
        return C.filter(C.uniq(t), function (t) {
            return C.every(e, function (e) {
                return C.contains(e, t)
            })
        })
    }, C.difference = function (t) {
        var e = l.apply(n, a.call(arguments, 1));
        return C.filter(t, function (t) {
            return !C.contains(e, t)
        })
    }, C.zip = function () {
        for (var t = C.max(C.pluck(arguments, "length").concat(0)), e = new Array(t), i = 0; t > i; i++) e[i] = C.pluck(arguments, "" + i);
        return e
    }, C.object = function (t, e) {
        if (null == t) return {};
        for (var i = {}, n = 0, s = t.length; s > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, C.indexOf = function (t, e, i) {
        if (null == t) return -1;
        var n = 0,
            s = t.length;
        if (i) {
            if ("number" != typeof i) return n = C.sortedIndex(t, e), t[n] === e ? n : -1;
            n = 0 > i ? Math.max(0, s + i) : i
        }
        if (y && t.indexOf === y) return t.indexOf(e, i);
        for (; s > n; n++)
            if (t[n] === e) return n;
        return -1
    }, C.lastIndexOf = function (t, e, i) {
        if (null == t) return -1;
        var n = null != i;
        if (_ && t.lastIndexOf === _) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
        for (var s = n ? i : t.length; s--;)
            if (t[s] === e) return s;
        return -1
    }, C.range = function (t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0), i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), s = 0, r = new Array(n); n > s;) r[s++] = t, t += i;
        return r
    };
    var N = function () {};
    C.bind = function (t, e) {
        var i, n;
        if (x && t.bind === x) return x.apply(t, a.call(arguments, 1));
        if (!C.isFunction(t)) throw new TypeError;
        return i = a.call(arguments, 2), n = function () {
            if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
            N.prototype = t.prototype;
            var s = new N;
            N.prototype = null;
            var r = t.apply(s, i.concat(a.call(arguments)));
            return Object(r) === r ? r : s
        }
    }, C.partial = function (t) {
        var e = a.call(arguments, 1);
        return function () {
            for (var i = 0, n = e.slice(), s = 0, r = n.length; r > s; s++) n[s] === C && (n[s] = arguments[i++]);
            for (; i < arguments.length;) n.push(arguments[i++]);
            return t.apply(this, n)
        }
    }, C.bindAll = function (t) {
        var e = a.call(arguments, 1);
        if (0 === e.length) throw new Error("bindAll must be passed function names");
        return k(e, function (e) {
            t[e] = C.bind(t[e], t)
        }), t
    }, C.memoize = function (t, e) {
        var i = {};
        return e || (e = C.identity),
            function () {
                var n = e.apply(this, arguments);
                return C.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
            }
    }, C.delay = function (t, e) {
        var i = a.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, i)
        }, e)
    }, C.defer = function (t) {
        return C.delay.apply(C, [t, 1].concat(a.call(arguments, 1)))
    }, C.throttle = function (t, e, i) {
        var n, s, r, o = null,
            a = 0;
        i || (i = {});
        var l = function () {
            a = i.leading === !1 ? 0 : C.now(), o = null, r = t.apply(n, s), n = s = null
        };
        return function () {
            var u = C.now();
            a || i.leading !== !1 || (a = u);
            var c = e - (u - a);
            return n = this, s = arguments, 0 >= c ? (clearTimeout(o), o = null, a = u, r = t.apply(n, s), n = s = null) : o || i.trailing === !1 || (o = setTimeout(l, c)), r
        }
    }, C.debounce = function (t, e, i) {
        var n, s, r, o, a, l = function () {
            var u = C.now() - o;
            e > u ? n = setTimeout(l, e - u) : (n = null, i || (a = t.apply(r, s), r = s = null))
        };
        return function () {
            r = this, s = arguments, o = C.now();
            var u = i && !n;
            return n || (n = setTimeout(l, e)), u && (a = t.apply(r, s), r = s = null), a
        }
    }, C.once = function (t) {
        var e, i = !1;
        return function () {
            return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, C.wrap = function (t, e) {
        return C.partial(e, t)
    }, C.compose = function () {
        var t = arguments;
        return function () {
            for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
            return e[0]
        }
    }, C.after = function (t, e) {
        return function () {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, C.keys = function (t) {
        if (!C.isObject(t)) return [];
        if (w) return w(t);
        var e = [];
        for (var i in t) C.has(t, i) && e.push(i);
        return e
    }, C.values = function (t) {
        for (var e = C.keys(t), i = e.length, n = new Array(i), s = 0; i > s; s++) n[s] = t[e[s]];
        return n
    }, C.pairs = function (t) {
        for (var e = C.keys(t), i = e.length, n = new Array(i), s = 0; i > s; s++) n[s] = [e[s], t[e[s]]];
        return n
    }, C.invert = function (t) {
        for (var e = {}, i = C.keys(t), n = 0, s = i.length; s > n; n++) e[t[i[n]]] = i[n];
        return e
    }, C.functions = C.methods = function (t) {
        var e = [];
        for (var i in t) C.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, C.extend = function (t) {
        return k(a.call(arguments, 1), function (e) {
            if (e)
                for (var i in e) t[i] = e[i]
        }), t
    }, C.pick = function (t) {
        var e = {},
            i = l.apply(n, a.call(arguments, 1));
        return k(i, function (i) {
            i in t && (e[i] = t[i])
        }), e
    }, C.omit = function (t) {
        var e = {},
            i = l.apply(n, a.call(arguments, 1));
        for (var s in t) C.contains(i, s) || (e[s] = t[s]);
        return e
    }, C.defaults = function (t) {
        return k(a.call(arguments, 1), function (e) {
            if (e)
                for (var i in e) void 0 === t[i] && (t[i] = e[i])
        }), t
    }, C.clone = function (t) {
        return C.isObject(t) ? C.isArray(t) ? t.slice() : C.extend({}, t) : t
    }, C.tap = function (t, e) {
        return e(t), t
    };
    var D = function (t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof C && (t = t._wrapped), e instanceof C && (e = e._wrapped);
        var s = u.call(t);
        if (s != u.call(e)) return !1;
        switch (s) {
        case "[object String]":
            return t == String(e);
        case "[object Number]":
            return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +e;
        case "[object RegExp]":
            return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var r = i.length; r--;)
            if (i[r] == t) return n[r] == e;
        var o = t.constructor,
            a = e.constructor;
        if (o !== a && !(C.isFunction(o) && o instanceof o && C.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1;
        i.push(t), n.push(e);
        var l = 0,
            c = !0;
        if ("[object Array]" == s) {
            if (l = t.length, c = l == e.length)
                for (; l-- && (c = D(t[l], e[l], i, n)););
        } else {
            for (var h in t)
                if (C.has(t, h) && (l++, !(c = C.has(e, h) && D(t[h], e[h], i, n)))) break;
            if (c) {
                for (h in e)
                    if (C.has(e, h) && !l--) break;
                c = !l
            }
        }
        return i.pop(), n.pop(), c
    };
    C.isEqual = function (t, e) {
        return D(t, e, [], [])
    }, C.isEmpty = function (t) {
        if (null == t) return !0;
        if (C.isArray(t) || C.isString(t)) return 0 === t.length;
        for (var e in t)
            if (C.has(t, e)) return !1;
        return !0
    }, C.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
    }, C.isArray = b || function (t) {
        return "[object Array]" == u.call(t)
    }, C.isObject = function (t) {
        return t === Object(t)
    }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        C["is" + t] = function (e) {
            return u.call(e) == "[object " + t + "]"
        }
    }), C.isArguments(arguments) || (C.isArguments = function (t) {
        return !(!t || !C.has(t, "callee"))
    }), "function" != typeof / . / && (C.isFunction = function (t) {
        return "function" == typeof t
    }), C.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, C.isNaN = function (t) {
        return C.isNumber(t) && t != +t
    }, C.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
    }, C.isNull = function (t) {
        return null === t
    }, C.isUndefined = function (t) {
        return void 0 === t
    }, C.has = function (t, e) {
        return c.call(t, e)
    }, C.noConflict = function () {
        return t._ = e, this
    }, C.identity = function (t) {
        return t
    }, C.constant = function (t) {
        return function () {
            return t
        }
    }, C.property = function (t) {
        return function (e) {
            return e[t]
        }
    }, C.matches = function (t) {
        return function (e) {
            if (e === t) return !0;
            for (var i in t)
                if (t[i] !== e[i]) return !1;
            return !0
        }
    }, C.times = function (t, e, i) {
        for (var n = Array(Math.max(0, t)), s = 0; t > s; s++) n[s] = e.call(i, s);
        return n
    }, C.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, C.now = Date.now || function () {
        return (new Date).getTime()
    };
    var P = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    P.unescape = C.invert(P.escape);
    var O = {
        escape: new RegExp("[" + C.keys(P.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + C.keys(P.unescape).join("|") + ")", "g")
    };
    C.each(["escape", "unescape"], function (t) {
        C[t] = function (e) {
            return null == e ? "" : ("" + e).replace(O[t], function (e) {
                return P[t][e]
            })
        }
    }), C.result = function (t, e) {
        if (null == t) return void 0;
        var i = t[e];
        return C.isFunction(i) ? i.call(t) : i
    }, C.mixin = function (t) {
        k(C.functions(t), function (e) {
            var i = C[e] = t[e];
            C.prototype[e] = function () {
                var t = [this._wrapped];
                return o.apply(t, arguments), I.call(this, i.apply(C, t))
            }
        })
    };
    var $ = 0;
    C.uniqueId = function (t) {
        var e = ++$ + "";
        return t ? t + e : e
    }, C.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var M = /(.)^/,
        L = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    C.template = function (t, e, i) {
        var n;
        i = C.defaults({}, i, C.templateSettings);
        var s = new RegExp([(i.escape || M).source, (i.interpolate || M).source, (i.evaluate || M).source].join("|") + "|$", "g"),
            r = 0,
            o = "__p+='";
        t.replace(s, function (e, i, n, s, a) {
            return o += t.slice(r, a).replace(j, function (t) {
                return "\\" + L[t]
            }), i && (o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), s && (o += "';\n" + s + "\n__p+='"), r = a + e.length, e
        }), o += "';\n", i.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            n = new Function(i.variable || "obj", "_", o)
        } catch (a) {
            throw a.source = o, a
        }
        if (e) return n(e, C);
        var l = function (t) {
            return n.call(this, t, C)
        };
        return l.source = "function(" + (i.variable || "obj") + "){\n" + o + "}", l
    }, C.chain = function (t) {
        return C(t).chain()
    };
    var I = function (t) {
        return this._chain ? C(t).chain() : t
    };
    C.mixin(C), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = n[t];
        C.prototype[t] = function () {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" != t && "splice" != t || 0 !== i.length || delete i[0], I.call(this, i)
        }
    }), k(["concat", "join", "slice"], function (t) {
        var e = n[t];
        C.prototype[t] = function () {
            return I.call(this, e.apply(this._wrapped, arguments))
        }
    }), C.extend(C.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    }), "function" == typeof define && define.amd && define("underscore", [], function () {
        return C
    })
}.call(this), function (t) {
    "function" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : this.NProgress = t()
}(function () {
    function t(t, e, i) {
        return e > t ? e : t > i ? i : t
    }

    function e(t) {
        return 100 * (-1 + t)
    }

    function i(t, i, n) {
        var s;
        return s = "translate3d" === u.positionUsing ? {
            transform: "translate3d(" + e(t) + "%,0,0)"
        } : "translate" === u.positionUsing ? {
            transform: "translate(" + e(t) + "%,0)"
        } : {
            "margin-left": e(t) + "%"
        }, s.transition = "all " + i + "ms " + n, s
    }

    function n(t, e) {
        var i = "string" == typeof t ? t : o(t);
        return i.indexOf(" " + e + " ") >= 0
    }

    function s(t, e) {
        var i = o(t),
            s = i + e;
        n(i, e) || (t.className = s.substring(1))
    }

    function r(t, e) {
        var i, s = o(t);
        n(t, e) && (i = s.replace(" " + e + " ", " "), t.className = i.substring(1, i.length - 1))
    }

    function o(t) {
        return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
    }

    function a(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }
    var l = {};
    l.version = "0.1.3";
    var u = l.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    l.configure = function (t) {
            var e, i;
            for (e in t) i = t[e], void 0 !== i && t.hasOwnProperty(e) && (u[e] = i);
            return this
        }, l.status = null, l.set = function (e) {
            var n = l.isStarted();
            e = t(e, u.minimum, 1), l.status = 1 === e ? null : e;
            var s = l.render(!n),
                r = s.querySelector(u.barSelector),
                o = u.speed,
                a = u.easing;
            return s.offsetWidth, c(function (t) {
                "" === u.positionUsing && (u.positionUsing = l.getPositioningCSS()), h(r, i(e, o, a)), 1 === e ? (h(s, {
                    transition: "none",
                    opacity: 1
                }), s.offsetWidth, setTimeout(function () {
                    h(s, {
                        transition: "all " + o + "ms linear",
                        opacity: 0
                    }), setTimeout(function () {
                        l.remove(), t()
                    }, o)
                }, o)) : setTimeout(t, o)
            }), this
        }, l.isStarted = function () {
            return "number" == typeof l.status
        }, l.start = function () {
            l.status || l.set(0);
            var t = function () {
                setTimeout(function () {
                    l.status && (l.trickle(), t())
                }, u.trickleSpeed)
            };
            return u.trickle && t(), this
        }, l.done = function (t) {
            return t || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
        }, l.inc = function (e) {
            var i = l.status;
            return i ? ("number" != typeof e && (e = (1 - i) * t(Math.random() * i, .1, .95)), i = t(i + e, 0, .994), l.set(i)) : l.start()
        }, l.trickle = function () {
            return l.inc(Math.random() * u.trickleRate)
        },
        function () {
            var t = 0,
                e = 0;
            l.promise = function (i) {
                return i && "resolved" != i.state() ? (0 == e && l.start(), t++, e++, i.always(function () {
                    e--, 0 == e ? (t = 0, l.done()) : l.set((t - e) / t)
                }), this) : this
            }
        }(), l.render = function (t) {
            if (l.isRendered()) return document.getElementById("nprogress");
            s(document.documentElement, "nprogress-busy");
            var i = document.createElement("div");
            i.id = "nprogress", i.innerHTML = u.template;
            var n, r = i.querySelector(u.barSelector),
                o = t ? "-100" : e(l.status || 0);
            return h(r, {
                transition: "all 0 linear",
                transform: "translate3d(" + o + "%,0,0)"
            }), u.showSpinner || (n = i.querySelector(u.spinnerSelector), n && a(n)), document.body.appendChild(i), i
        }, l.remove = function () {
            r(document.documentElement, "nprogress-busy");
            var t = document.getElementById("nprogress");
            t && a(t)
        }, l.isRendered = function () {
            return !!document.getElementById("nprogress")
        }, l.getPositioningCSS = function () {
            var t = document.body.style,
                e = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";
            return e + "Perspective" in t ? "translate3d" : e + "Transform" in t ? "translate" : "margin"
        };
    var c = function () {
            function t() {
                var i = e.shift();
                i && i(t)
            }
            var e = [];
            return function (i) {
                e.push(i), 1 == e.length && t()
            }
        }(),
        h = function () {
            function t(t) {
                return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (t, e) {
                    return e.toUpperCase()
                })
            }

            function e(t) {
                var e = document.body.style;
                if (t in e) return t;
                for (var i, n = s.length, r = t.charAt(0).toUpperCase() + t.slice(1); n--;)
                    if (i = s[n] + r, i in e) return i;
                return t
            }

            function i(i) {
                return i = t(i), r[i] || (r[i] = e(i))
            }

            function n(t, e, n) {
                e = i(e), t.style[e] = n
            }
            var s = ["Webkit", "O", "Moz", "ms"],
                r = {};
            return function (t, e) {
                var i, s, r = arguments;
                if (2 == r.length)
                    for (i in e) s = e[i], void 0 !== s && e.hasOwnProperty(i) && n(t, i, s);
                else n(t, r[1], r[2])
            }
        }();
    return l
}), $(function () {
    $(document).on("page:fetch", function () {
        NProgress.start()
    }), $(document).on("page:change", function () {
        NProgress.done()
    }), $(document).on("page:restore", function () {
        NProgress.remove()
    })
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (+ function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1,
            n = this;
        t(this).one(t.support.transition.end, function () {
            i = !0
        });
        var s = function () {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(s, e), this
    }, t(function () {
        t.support.transition = e()
    })
}(jQuery), + function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function (i) {
            t(i).on("click", e, this.close)
        };
    i.prototype.close = function (e) {
        function i() {
            r.trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(s);
        e && e.preventDefault(), r.length || (r = n.hasClass("alert") ? n : n.parent()), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one(t.support.transition.end, i).emulateTransitionEnd(150) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.alert");
            s || n.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(n)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery), + function (t) {
    "use strict";
    var e = function (i, n) {
        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.isLoading = !1
    };
    e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function (e) {
        var i = "disabled",
            n = this.$element,
            s = n.is("input") ? "val" : "html",
            r = n.data();
        e += "Text", r.resetText || n.data("resetText", n[s]()), n[s](r[e] || this.options[e]), setTimeout(t.proxy(function () {
            "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, e.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = function (i) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.button"),
                r = "object" == typeof i && i;
            s || n.data("bs.button", s = new e(this, r)), "toggle" == i ? s.toggle() : i && s.setState(i)
        })
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (e) {
        var i = t(e.target);
        i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle"), e.preventDefault()
    })
}(jQuery), + function (t) {
    "use strict";
    var e = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, e.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, e.prototype.to = function (e) {
        var i = this,
            n = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            i.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e]))
    }, e.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function (e, i) {
        var n = this.$element.find(".item.active"),
            s = i || n[e](),
            r = this.interval,
            o = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            l = this;
        if (!s.length) {
            if (!this.options.wrap) return;
            s = this.$element.find(".item")[a]()
        }
        if (s.hasClass("active")) return this.sliding = !1;
        var u = t.Event("slide.bs.carousel", {
            relatedTarget: s[0],
            direction: o
        });
        return this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (this.sliding = !0, r && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
            var e = t(l.$indicators.children()[l.getActiveIndex()]);
            e && e.addClass("active")
        })), t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(o), s.addClass(o), n.one(t.support.transition.end, function () {
            s.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function () {
                l.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * n.css("transition-duration").slice(0, -1))) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), r && this.cycle(), this)
    };
    var i = t.fn.carousel;
    t.fn.carousel = function (i) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.carousel"),
                r = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i),
                o = "string" == typeof i ? i : r.slide;
            s || n.data("bs.carousel", s = new e(this, r)), "number" == typeof i ? s.to(i) : o ? s[o]() : r.interval && s.pause().cycle()
        })
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
        var i, n = t(this),
            s = t(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
            r = t.extend({}, s.data(), n.data()),
            o = n.attr("data-slide-to");
        o && (r.interval = !1), s.carousel(r), (o = n.attr("data-slide-to")) && s.data("bs.carousel").to(o), e.preventDefault()
    }), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var e = t(this);
            e.carousel(e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";
    var e = function (i, n) {
        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, e.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = t.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var n = i.data("bs.collapse");
                    if (n && n.transitioning) return;
                    i.collapse("hide"), n || i.data("bs.collapse", null)
                }
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                var r = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[s]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return r.call(this);
                var o = t.camelCase(["scroll", s].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(r, this)).emulateTransitionEnd(350)[s](this.$element[0][o])
            }
        }
    }, e.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[i](0).one(t.support.transition.end, t.proxy(n, this)).emulateTransitionEnd(350) : n.call(this)
            }
        }
    }, e.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = function (i) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.collapse"),
                r = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i);
            !s && r.toggle && "show" == i && (i = !i), s || n.data("bs.collapse", s = new e(this, r)), "string" == typeof i && s[i]()
        })
    }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (e) {
        var i, n = t(this),
            s = n.attr("data-target") || e.preventDefault() || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            r = t(s),
            o = r.data("bs.collapse"),
            a = o ? "toggle" : n.data(),
            l = n.attr("data-parent"),
            u = l && t(l);
        o && o.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(n).addClass("collapsed"), n[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), r.collapse(a)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        t(n).remove(), t(s).each(function () {
            var n = i(t(this)),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || n.removeClass("open").trigger("hidden.bs.dropdown", s))
        })
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }
    var n = ".dropdown-backdrop",
        s = "[data-toggle=dropdown]",
        r = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.prototype.toggle = function (n) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var r = i(s),
                o = r.hasClass("open");
            if (e(), !o) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                r.toggleClass("open").trigger("shown.bs.dropdown", a), s.focus()
            }
            return !1
        }
    }, r.prototype.keydown = function (e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var n = t(this);
            if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = i(n),
                    o = r.hasClass("open");
                if (!o || o && 27 == e.keyCode) return 27 == e.which && r.find(s).focus(), n.click();
                var a = " li:not(.divider):visible a",
                    l = r.find("[role=menu]" + a + ", [role=listbox]" + a);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).focus()
                }
            }
        }
    };
    var o = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
        })
    }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = o, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ", [role=menu], [role=listbox]", r.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";
    var e = function (e, i) {
        this.options = i, this.$element = t(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function (t) {
        return this[this.isShown ? "hide" : "show"](t)
    }, e.prototype.show = function (e) {
        var i = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var n = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(document.body), i.$element.show().scrollTop(0), n && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? i.$element.find(".modal-dialog").one(t.support.transition.end, function () {
                i.$element.focus().trigger(s)
            }).emulateTransitionEnd(300) : i.$element.focus().trigger(s)
        }))
    }, e.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus()
        }, this))
    }, e.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function (e) {
        var i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    };
    var i = t.fn.modal;
    t.fn.modal = function (i, n) {
        return this.each(function () {
            var s = t(this),
                r = s.data("bs.modal"),
                o = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i);
            r || s.data("bs.modal", r = new e(this, o)), "string" == typeof i ? r[i](n) : o.show && r.show(n)
        })
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
        var i = t(this),
            n = i.attr("href"),
            s = t(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), i.data());
        i.is("a") && e.preventDefault(), s.modal(r, this).one("hide", function () {
            i.is(":visible") && i.focus()
        })
    }), t(document).on("show.bs.modal", ".modal", function () {
        t(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
        t(document.body).removeClass("modal-open")
    })
}(jQuery), + function (t) {
    "use strict";
    var e = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.prototype.init = function (e, i, n) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n);
        for (var s = this.options.trigger.split(" "), r = s.length; r--;) {
            var o = s[r];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function () {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function (t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, e.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show()
    }, e.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var i = this,
                n = this.tip();
            this.setContent(), this.options.animation && n.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                r = /\s?auto?\s?/i,
                o = r.test(s);
            o && (s = s.replace(r, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var a = this.getPosition(),
                l = n[0].offsetWidth,
                u = n[0].offsetHeight;
            if (o) {
                var c = this.$element.parent(),
                    h = s,
                    d = document.documentElement.scrollTop || document.body.scrollTop,
                    p = "body" == this.options.container ? window.innerWidth : c.outerWidth(),
                    f = "body" == this.options.container ? window.innerHeight : c.outerHeight(),
                    m = "body" == this.options.container ? 0 : c.offset().left;
                s = "bottom" == s && a.top + a.height + u - d > f ? "top" : "top" == s && a.top - d - u < 0 ? "bottom" : "right" == s && a.right + l > p ? "left" : "left" == s && a.left - l < m ? "right" : s, n.removeClass(h).addClass(s)
            }
            var g = this.getCalculatedOffset(s, a, l, u);
            this.applyPlacement(g, s), this.hoverState = null;
            var v = function () {
                i.$element.trigger("shown.bs." + i.type)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one(t.support.transition.end, v).emulateTransitionEnd(150) : v()
        }
    }, e.prototype.applyPlacement = function (e, i) {
        var n, s = this.tip(),
            r = s[0].offsetWidth,
            o = s[0].offsetHeight,
            a = parseInt(s.css("margin-top"), 10),
            l = parseInt(s.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(l) && (l = 0), e.top = e.top + a, e.left = e.left + l, t.offset.setOffset(s[0], t.extend({
            using: function (t) {
                s.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), s.addClass("in");
        var u = s[0].offsetWidth,
            c = s[0].offsetHeight;
        if ("top" == i && c != o && (n = !0, e.top = e.top + o - c), /bottom|top/.test(i)) {
            var h = 0;
            e.left < 0 && (h = -2 * e.left, e.left = 0, s.offset(e), u = s[0].offsetWidth, c = s[0].offsetHeight), this.replaceArrow(h - r + u, u, "left")
        } else this.replaceArrow(c - o, c, "top");
        n && s.offset(e)
    }, e.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function () {
        function e() {
            "in" != i.hoverState && n.detach(), i.$element.trigger("hidden.bs." + i.type)
        }
        var i = this,
            n = this.tip(),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function () {
        return this.getTitle()
    }, e.prototype.getPosition = function () {
        var e = this.$element[0];
        return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, this.$element.offset())
    }, e.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, e.prototype.getTitle = function () {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, e.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function () {
        this.enabled = !0
    }, e.prototype.disable = function () {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function (e) {
        var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function () {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function (i) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.tooltip"),
                r = "object" == typeof i && i;
            (s || "destroy" != i) && (s || n.data("bs.tooltip", s = new e(this, r)), "string" == typeof i && s[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, e.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = function (i) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.popover"),
                r = "object" == typeof i && i;
            (s || "destroy" != i) && (s || n.data("bs.popover", s = new e(this, r)), "string" == typeof i && s[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(i, n) {
        var s, r = t.proxy(this.process, this);
        this.$element = t(t(i).is("body") ? window : i), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", r), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || (s = t(i).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
    }
    e.DEFAULTS = {
        offset: 10
    }, e.prototype.refresh = function () {
        var e = this.$element[0] == window ? "offset" : "position";
        this.offsets = t([]), this.targets = t([]);
        var i = this;
        this.$body.find(this.selector).map(function () {
            var n = t(this),
                s = n.data("target") || n.attr("href"),
                r = /^#./.test(s) && t(s);
            return r && r.length && r.is(":visible") && [
                [r[e]().top + (!t.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), s]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            n = i - this.$scrollElement.height(),
            s = this.offsets,
            r = this.targets,
            o = this.activeTarget;
        if (e >= n) return o != (t = r.last()[0]) && this.activate(t);
        if (o && e <= s[0]) return o != (t = r[0]) && this.activate(t);
        for (t = s.length; t--;) o != r[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = function (i) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.scrollspy"),
                r = "object" == typeof i && i;
            s || n.data("bs.scrollspy", s = new e(this, r)), "string" == typeof i && s[i]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";
    var e = function (e) {
        this.element = t(e)
    };
    e.prototype.show = function () {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a")[0],
                r = t.Event("show.bs.tab", {
                    relatedTarget: s
                });
            if (e.trigger(r), !r.isDefaultPrevented()) {
                var o = t(n);
                this.activate(e.parent("li"), i), this.activate(o, o.parent(), function () {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s
                    })
                })
            }
        }
    }, e.prototype.activate = function (e, i, n) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
        }
        var r = i.find("> .active"),
            o = n && t.support.transition && r.hasClass("fade");
        o ? r.one(t.support.transition.end, s).emulateTransitionEnd(150) : s(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = function (i) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.tab");
            s || n.data("bs.tab", s = new e(this)), "string" == typeof i && s[i]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault(), t(this).tab("show")
    })
}(jQuery), + function (t) {
    "use strict";
    var e = function (i, n) {
        this.options = t.extend({}, e.DEFAULTS, n), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0
    }, e.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$window.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    }, e.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var i = t(document).height(),
                n = this.$window.scrollTop(),
                s = this.$element.offset(),
                r = this.options.offset,
                o = r.top,
                a = r.bottom;
            "top" == this.affixed && (s.top += n), "object" != typeof r && (a = o = r), "function" == typeof o && (o = r.top(this.$element)), "function" == typeof a && (a = r.bottom(this.$element));
            var l = null != this.unpin && n + this.unpin <= s.top ? !1 : null != a && s.top + this.$element.height() >= i - a ? "bottom" : null != o && o >= n ? "top" : !1;
            if (this.affixed !== l) {
                this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = t.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: i - a - this.$element.height()
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = function (i) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.affix"),
                r = "object" == typeof i && i;
            s || n.data("bs.affix", s = new e(this, r)), "string" == typeof i && s[i]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var e = t(this),
                i = e.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.affix(i)
        })
    })
}(jQuery), "undefined" == typeof Filterrific) var Filterrific = {};
Filterrific.submitFilterForm = function () {
        var t = $(this).parents("form"),
            e = t.attr("action");
        $(".filterrific_spinner").show(), $.ajax({
            url: e,
            data: t.serialize(),
            type: "GET",
            dataType: "script"
        }).done(function () {
            $(".filterrific_spinner").hide()
        })
    },
    function (t) {
        t.fn.filterrific_observe_field = function (e, i) {
            return e = 1e3 * e, this.each(function () {
                var n = t(this),
                    s = n.val(),
                    r = function () {
                        if (o()) return void(l && clearInterval(l));
                        var t = n.val();
                        s != t && (s = t, n.map(i))
                    },
                    o = function () {
                        return 0 == n.closest("html").length
                    },
                    a = function () {
                        l && (clearInterval(l), l = setInterval(r, e))
                    };
                r();
                var l = setInterval(r, e);
                n.bind("keyup click mousemove", a)
            })
        }
    }(jQuery), jQuery(document).ready(function (t) {
        t(document).on("change", "#filterrific_filter :input", Filterrific.submitFilterForm), t(".filterrific-periodically-observed").filterrific_observe_field(.5, Filterrific.submitFilterForm)
    }), ! function (t) {
        var e = {
                attr: function (t, e, i) {
                    var n, s = {},
                        r = new RegExp("^" + e, "i");
                    if ("undefined" == typeof t || "undefined" == typeof t[0]) return {};
                    for (var o in t[0].attributes)
                        if (n = t[0].attributes[o], "undefined" != typeof n && null !== n && n.specified && r.test(n.name)) {
                            if ("undefined" != typeof i && new RegExp(i + "$", "i").test(n.name)) return !0;
                            s[this.camelize(n.name.replace(e, ""))] = this.deserializeValue(n.value)
                        }
                    return "undefined" == typeof i ? s : !1
                },
                setAttr: function (t, e, i, n) {
                    t[0].setAttribute(this.dasherize(e + i), String(n))
                },
                get: function (t, e) {
                    for (var i = 0, n = (e || "").split("."); this.isObject(t) || this.isArray(t);)
                        if (t = t[n[i++]], i === n.length) return t;
                    return void 0
                },
                hash: function (t) {
                    return String(Math.random()).substring(2, t ? t + 2 : 9)
                },
                isArray: function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isObject: function (t) {
                    return t === Object(t)
                },
                deserializeValue: function (e) {
                    var i;
                    try {
                        return e ? "true" == e || ("false" == e ? !1 : "null" == e ? null : isNaN(i = Number(e)) ? /^[\[\{]/.test(e) ? t.parseJSON(e) : e : i) : e
                    } catch (n) {
                        return e
                    }
                },
                camelize: function (t) {
                    return t.replace(/-+(.)?/g, function (t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                },
                dasherize: function (t) {
                    return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                }
            },
            i = {
                namespace: "data-parsley-",
                inputs: "input, textarea, select",
                excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
                priorityEnabled: !0,
                uiEnabled: !0,
                validationThreshold: 3,
                focus: "first",
                trigger: !1,
                errorClass: "parsley-error",
                successClass: "parsley-success",
                classHandler: function () {},
                errorsContainer: function () {},
                errorsWrapper: '<ul class="parsley-errors-list"></ul>',
                errorTemplate: "<li></li>"
            },
            n = function () {};
        n.prototype = {
                asyncSupport: !1,
                actualizeOptions: function () {
                    return this.options = this.OptionsFactory.get(this), this
                },
                validateThroughValidator: function (t, e, i) {
                    return window.ParsleyValidator.validate.apply(window.ParsleyValidator, [t, e, i])
                },
                subscribe: function (e, i) {
                    return t.listenTo(this, e.toLowerCase(), i), this
                },
                unsubscribe: function (e) {
                    return t.unsubscribeTo(this, e.toLowerCase()), this
                },
                reset: function () {
                    if ("ParsleyForm" !== this.__class__) return t.emit("parsley:field:reset", this);
                    for (var e = 0; e < this.fields.length; e++) t.emit("parsley:field:reset", this.fields[e]);
                    t.emit("parsley:form:reset", this)
                },
                destroy: function () {
                    if ("ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void t.emit("parsley:field:destroy", this);
                    for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
                    this.$element.removeData("Parsley"), t.emit("parsley:form:destroy", this)
                }
            },
            function (t) {
                var e = function (t) {
                    return this.__class__ = "Validator", this.__version__ = "0.5.8", this.options = t || {}, this.bindingKey = this.options.bindingKey || "_validatorjsConstraint", this
                };
                e.prototype = {
                    constructor: e,
                    validate: function (t, e, i) {
                        if ("string" != typeof t && "object" != typeof t) throw new Error("You must validate an object or a string");
                        return "string" == typeof t || o(t) ? this._validateString(t, e, i) : this.isBinded(t) ? this._validateBindedObject(t, e) : this._validateObject(t, e, i)
                    },
                    bind: function (t, e) {
                        if ("object" != typeof t) throw new Error("Must bind a Constraint to an object");
                        return t[this.bindingKey] = new i(e), this
                    },
                    unbind: function (t) {
                        return "undefined" == typeof t._validatorjsConstraint ? this : (delete t[this.bindingKey], this)
                    },
                    isBinded: function (t) {
                        return "undefined" != typeof t[this.bindingKey]
                    },
                    getBinded: function (t) {
                        return this.isBinded(t) ? t[this.bindingKey] : null
                    },
                    _validateString: function (t, e, i) {
                        var r, a = [];
                        o(e) || (e = [e]);
                        for (var l = 0; l < e.length; l++) {
                            if (!(e[l] instanceof s)) throw new Error("You must give an Assert or an Asserts array to validate a string");
                            r = e[l].check(t, i), r instanceof n && a.push(r)
                        }
                        return a.length ? a : !0
                    },
                    _validateObject: function (t, e, n) {
                        if ("object" != typeof e) throw new Error("You must give a constraint to validate an object");
                        return e instanceof i ? e.check(t, n) : new i(e).check(t, n)
                    },
                    _validateBindedObject: function (t, e) {
                        return t[this.bindingKey].check(t, e)
                    }
                }, e.errorCode = {
                    must_be_a_string: "must_be_a_string",
                    must_be_an_array: "must_be_an_array",
                    must_be_a_number: "must_be_a_number",
                    must_be_a_string_or_array: "must_be_a_string_or_array"
                };
                var i = function (t, e) {
                    if (this.__class__ = "Constraint", this.options = e || {}, this.nodes = {}, t) try {
                        this._bootstrap(t)
                    } catch (i) {
                        throw new Error("Should give a valid mapping object to Constraint", i, t)
                    }
                    return this
                };
                i.prototype = {
                    constructor: i,
                    check: function (t, e) {
                        var i, n = {};
                        for (var a in this.options.strict ? this.nodes : t)
                            if (this.options.strict ? this.has(a, t) : this.has(a)) i = this._check(a, t[a], e), (o(i) && i.length > 0 || !o(i) && !r(i)) && (n[a] = i);
                            else if (this.options.strict) try {
                            (new s).HaveProperty(a).validate(t)
                        } catch (l) {
                            n[a] = l
                        }
                        return r(n) ? !0 : n
                    },
                    add: function (t, e) {
                        if (e instanceof s || o(e) && e[0] instanceof s) return this.nodes[t] = e, this;
                        if ("object" == typeof e && !o(e)) return this.nodes[t] = e instanceof i ? e : new i(e), this;
                        throw new Error("Should give an Assert, an Asserts array, a Constraint", e)
                    },
                    has: function (t, e) {
                        return e = "undefined" != typeof e ? e : this.nodes, "undefined" != typeof e[t]
                    },
                    get: function (t, e) {
                        return this.has(t) ? this.nodes[t] : e || null
                    },
                    remove: function (t) {
                        var e = [];
                        for (var i in this.nodes) i !== t && (e[i] = this.nodes[i]);
                        return this.nodes = e, this
                    },
                    _bootstrap: function (t) {
                        if (t instanceof i) return this.nodes = t.nodes;
                        for (var e in t) this.add(e, t[e])
                    },
                    _check: function (t, e, n) {
                        if (this.nodes[t] instanceof s) return this._checkAsserts(e, [this.nodes[t]], n);
                        if (o(this.nodes[t])) return this._checkAsserts(e, this.nodes[t], n);
                        if (this.nodes[t] instanceof i) return this.nodes[t].check(e, n);
                        throw new Error("Invalid node", this.nodes[t])
                    },
                    _checkAsserts: function (t, e, i) {
                        for (var n, s = [], r = 0; r < e.length; r++) n = e[r].check(t, i), "undefined" != typeof n && !0 !== n && s.push(n);
                        return s
                    }
                };
                var n = function (t, e, i) {
                    if (this.__class__ = "Violation", !(t instanceof s)) throw new Error("Should give an assertion implementing the Assert interface");
                    this.assert = t, this.value = e, "undefined" != typeof i && (this.violation = i)
                };
                n.prototype = {
                    show: function () {
                        var t = {
                            assert: this.assert.__class__,
                            value: this.value
                        };
                        return this.violation && (t.violation = this.violation), t
                    },
                    __toString: function () {
                        return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
                    },
                    getViolation: function () {
                        var t, e;
                        for (t in this.violation) e = this.violation[t];
                        return {
                            constraint: t,
                            expected: e
                        }
                    }
                };
                var s = function (t) {
                    return this.__class__ = "Assert", this.__parentClass__ = this.__class__, this.groups = [], "undefined" != typeof t && this.addGroup(t), this
                };
                s.prototype = {
                    construct: s,
                    check: function (t, e) {
                        if (!(e && !this.hasGroup(e) || !e && this.hasGroups())) try {
                            return this.validate(t, e)
                        } catch (i) {
                            return i
                        }
                    },
                    hasGroup: function (t) {
                        return o(t) ? this.hasOneOf(t) : "Any" === t ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(t) : "Default" === t
                    },
                    hasOneOf: function (t) {
                        for (var e = 0; e < t.length; e++)
                            if (this.hasGroup(t[e])) return !0;
                        return !1
                    },
                    hasGroups: function () {
                        return this.groups.length > 0
                    },
                    addGroup: function (t) {
                        return o(t) ? this.addGroups(t) : (this.hasGroup(t) || this.groups.push(t), this)
                    },
                    removeGroup: function (t) {
                        for (var e = [], i = 0; i < this.groups.length; i++) t !== this.groups[i] && e.push(this.groups[i]);
                        return this.groups = e, this
                    },
                    addGroups: function (t) {
                        for (var e = 0; e < t.length; e++) this.addGroup(t[e]);
                        return this
                    },
                    HaveProperty: function (t) {
                        return this.__class__ = "HaveProperty", this.node = t, this.validate = function (t) {
                            if ("undefined" == typeof t[this.node]) throw new n(this, t, {
                                value: this.node
                            });
                            return !0
                        }, this
                    },
                    Blank: function () {
                        return this.__class__ = "Blank", this.validate = function (t) {
                            if ("string" != typeof t) throw new n(this, t, {
                                value: e.errorCode.must_be_a_string
                            });
                            if ("" !== t.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new n(this, t);
                            return !0
                        }, this
                    },
                    Callback: function (t) {
                        if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof t) throw new Error("Callback must be instanciated with a function");
                        return this.fn = t, this.validate = function (t) {
                            var e = this.fn.apply(this, [t].concat(this.arguments));
                            if (!0 !== e) throw new n(this, t, {
                                result: e
                            });
                            return !0
                        }, this
                    },
                    Choice: function (t) {
                        if (this.__class__ = "Choice", !o(t) && "function" != typeof t) throw new Error("Choice must be instanciated with an array or a function");
                        return this.list = t, this.validate = function (t) {
                            for (var e = "function" == typeof this.list ? this.list() : this.list, i = 0; i < e.length; i++)
                                if (t === e[i]) return !0;
                            throw new n(this, t, {
                                choices: e
                            })
                        }, this
                    },
                    Collection: function (t) {
                        return this.__class__ = "Collection", this.constraint = "undefined" != typeof t ? new i(t) : !1, this.validate = function (t, i) {
                            var s, a = new e,
                                l = 0,
                                u = {},
                                c = this.groups.length ? this.groups : i;
                            if (!o(t)) throw new n(this, array, {
                                value: e.errorCode.must_be_an_array
                            });
                            for (var h = 0; h < t.length; h++) s = this.constraint ? a.validate(t[h], this.constraint, c) : a.validate(t[h], c), r(s) || (u[l] = s), l++;
                            return r(u) ? !0 : u
                        }, this
                    },
                    Count: function (t) {
                        return this.__class__ = "Count", this.count = t, this.validate = function (t) {
                            if (!o(t)) throw new n(this, t, {
                                value: e.errorCode.must_be_an_array
                            });
                            var i = "function" == typeof this.count ? this.count(t) : this.count;
                            if (isNaN(Number(i))) throw new Error("Count must be a valid interger", i);
                            if (i !== t.length) throw new n(this, t, {
                                count: i
                            });
                            return !0
                        }, this
                    },
                    Email: function () {
                        return this.__class__ = "Email", this.validate = function (t) {
                            var i = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
                            if ("string" != typeof t) throw new n(this, t, {
                                value: e.errorCode.must_be_a_string
                            });
                            if (!i.test(t)) throw new n(this, t);
                            return !0
                        }, this
                    },
                    Eql: function (t) {
                        if (this.__class__ = "Eql", "undefined" == typeof t) throw new Error("Equal must be instanciated with an Array or an Object");
                        return this.eql = t, this.validate = function (t) {
                            var e = "function" == typeof this.eql ? this.eql(t) : this.eql;
                            if (!a.eql(e, t)) throw new n(this, t, {
                                eql: e
                            });
                            return !0
                        }, this
                    },
                    EqualTo: function (t) {
                        if (this.__class__ = "EqualTo", "undefined" == typeof t) throw new Error("EqualTo must be instanciated with a value or a function");
                        return this.reference = t, this.validate = function (t) {
                            var e = "function" == typeof this.reference ? this.reference(t) : this.reference;
                            if (e !== t) throw new n(this, t, {
                                value: e
                            });
                            return !0
                        }, this
                    },
                    GreaterThan: function (t) {
                        if (this.__class__ = "GreaterThan", "undefined" == typeof t) throw new Error("Should give a threshold value");
                        return this.threshold = t, this.validate = function (t) {
                            if ("" === t || isNaN(Number(t))) throw new n(this, t, {
                                value: e.errorCode.must_be_a_number
                            });
                            if (this.threshold >= t) throw new n(this, t, {
                                threshold: this.threshold
                            });
                            return !0
                        }, this
                    },
                    GreaterThanOrEqual: function (t) {
                        if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof t) throw new Error("Should give a threshold value");
                        return this.threshold = t, this.validate = function (t) {
                            if ("" === t || isNaN(Number(t))) throw new n(this, t, {
                                value: e.errorCode.must_be_a_number
                            });
                            if (this.threshold > t) throw new n(this, t, {
                                threshold: this.threshold
                            });
                            return !0
                        }, this
                    },
                    InstanceOf: function (t) {
                        if (this.__class__ = "InstanceOf", "undefined" == typeof t) throw new Error("InstanceOf must be instanciated with a value");
                        return this.classRef = t, this.validate = function (t) {
                            if (!0 != t instanceof this.classRef) throw new n(this, t, {
                                classRef: this.classRef
                            });
                            return !0
                        }, this
                    },
                    IPv4: function () {
                        return this.__class__ = "IPv4", this.validate = function (t) {
                            var i = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
                            if ("string" != typeof t) throw new n(this, t, {
                                value: e.errorCode.must_be_a_string
                            });
                            if (!i.test(t)) throw new n(this, t);
                            return !0
                        }, this
                    },
                    Length: function (t) {
                        if (this.__class__ = "Length", !t.min && !t.max) throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
                        return this.min = t.min, this.max = t.max, this.validate = function (t) {
                            if ("string" != typeof t && !o(t)) throw new n(this, t, {
                                value: e.errorCode.must_be_a_string_or_array
                            });
                            if ("undefined" != typeof this.min && this.min === this.max && t.length !== this.min) throw new n(this, t, {
                                min: this.min,
                                max: this.max
                            });
                            if ("undefined" != typeof this.max && t.length > this.max) throw new n(this, t, {
                                max: this.max
                            });
                            if ("undefined" != typeof this.min && t.length < this.min) throw new n(this, t, {
                                min: this.min
                            });
                            return !0
                        }, this
                    },
                    LessThan: function (t) {
                        if (this.__class__ = "LessThan", "undefined" == typeof t) throw new Error("Should give a threshold value");
                        return this.threshold = t, this.validate = function (t) {
                            if ("" === t || isNaN(Number(t))) throw new n(this, t, {
                                value: e.errorCode.must_be_a_number
                            });
                            if (this.threshold <= t) throw new n(this, t, {
                                threshold: this.threshold
                            });
                            return !0
                        }, this
                    },
                    LessThanOrEqual: function (t) {
                        if (this.__class__ = "LessThanOrEqual", "undefined" == typeof t) throw new Error("Should give a threshold value");
                        return this.threshold = t, this.validate = function (t) {
                            if ("" === t || isNaN(Number(t))) throw new n(this, t, {
                                value: e.errorCode.must_be_a_number
                            });
                            if (this.threshold < t) throw new n(this, t, {
                                threshold: this.threshold
                            });
                            return !0
                        }, this
                    },
                    Mac: function () {
                        return this.__class__ = "Mac", this.validate = function (t) {
                            var i = /^(?:[0-9A-F]{2}:){5}[0-9A-F]{2}$/i;
                            if ("string" != typeof t) throw new n(this, t, {
                                value: e.errorCode.must_be_a_string
                            });
                            if (!i.test(t)) throw new n(this, t);
                            return !0
                        }, this
                    },
                    NotNull: function () {
                        return this.__class__ = "NotNull", this.validate = function (t) {
                            if (null === t || "undefined" == typeof t) throw new n(this, t);
                            return !0
                        }, this
                    },
                    NotBlank: function () {
                        return this.__class__ = "NotBlank", this.validate = function (t) {
                            if ("string" != typeof t) throw new n(this, t, {
                                value: e.errorCode.must_be_a_string
                            });
                            if ("" === t.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new n(this, t);
                            return !0
                        }, this
                    },
                    Null: function () {
                        return this.__class__ = "Null", this.validate = function (t) {
                            if (null !== t) throw new n(this, t);
                            return !0
                        }, this
                    },
                    Range: function (t, e) {
                        if (this.__class__ = "Range", "undefined" == typeof t || "undefined" == typeof e) throw new Error("Range assert expects min and max values");
                        return this.min = t, this.max = e, this.validate = function (t) {
                            try {
                                return "string" == typeof t && isNaN(Number(t)) || o(t) ? (new s).Length({
                                    min: this.min,
                                    max: this.max
                                }).validate(t) : (new s).GreaterThanOrEqual(this.min).validate(t) && (new s).LessThanOrEqual(this.max).validate(t), !0
                            } catch (e) {
                                throw new n(this, t, e.violation)
                            }
                            return !0
                        }, this
                    },
                    Regexp: function (t, i) {
                        if (this.__class__ = "Regexp", "undefined" == typeof t) throw new Error("You must give a regexp");
                        return this.regexp = t, this.flag = i || "", this.validate = function (t) {
                            if ("string" != typeof t) throw new n(this, t, {
                                value: e.errorCode.must_be_a_string
                            });
                            if (!new RegExp(this.regexp, this.flag).test(t)) throw new n(this, t, {
                                regexp: this.regexp,
                                flag: this.flag
                            });
                            return !0
                        }, this
                    },
                    Required: function () {
                        return this.__class__ = "Required", this.validate = function (t) {
                            if ("undefined" == typeof t) throw new n(this, t);
                            try {
                                "string" == typeof t ? (new s).NotNull().validate(t) && (new s).NotBlank().validate(t) : !0 === o(t) && (new s).Length({
                                    min: 1
                                }).validate(t)
                            } catch (e) {
                                throw new n(this, t)
                            }
                            return !0
                        }, this
                    },
                    Unique: function (t) {
                        return this.__class__ = "Unique", "object" == typeof t && (this.key = t.key), this.validate = function (t) {
                            var i, s = [];
                            if (!o(t)) throw new n(this, t, {
                                value: e.errorCode.must_be_an_array
                            });
                            for (var r = 0; r < t.length; r++)
                                if (i = "object" == typeof t[r] ? t[r][this.key] : t[r], "undefined" != typeof i) {
                                    if (-1 !== s.indexOf(i)) throw new n(this, t, {
                                        value: i
                                    });
                                    s.push(i)
                                }
                            return !0
                        }, this
                    }
                }, t.Assert = s, t.Validator = e, t.Violation = n, t.Constraint = i, Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
                    if (null === this) throw new TypeError;
                    var e = Object(this),
                        i = e.length >>> 0;
                    if (0 === i) return -1;
                    var n = 0;
                    if (arguments.length > 1 && (n = Number(arguments[1]), n != n ? n = 0 : 0 !== n && 1 / 0 != n && n != -1 / 0 && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= i) return -1;
                    for (var s = n >= 0 ? n : Math.max(i - Math.abs(n), 0); i > s; s++)
                        if (s in e && e[s] === t) return s;
                    return -1
                });
                var r = function (t) {
                        for (var e in t) return !1;
                        return !0
                    },
                    o = function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    a = {
                        eql: function (t, e) {
                            if (t === e) return !0;
                            if ("undefined" != typeof Buffer && Buffer.isBuffer(t) && Buffer.isBuffer(e)) {
                                if (t.length !== e.length) return !1;
                                for (var i = 0; i < t.length; i++)
                                    if (t[i] !== e[i]) return !1;
                                return !0
                            }
                            return t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : "object" != typeof t && "object" != typeof e ? t == e : this.objEquiv(t, e)
                        },
                        isUndefinedOrNull: function (t) {
                            return null === t || "undefined" == typeof t
                        },
                        isArguments: function (t) {
                            return "[object Arguments]" == Object.prototype.toString.call(t)
                        },
                        keys: function (t) {
                            if (Object.keys) return Object.keys(t);
                            var e = [];
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                            return e
                        },
                        objEquiv: function (t, e) {
                            if (this.isUndefinedOrNull(t) || this.isUndefinedOrNull(e)) return !1;
                            if (t.prototype !== e.prototype) return !1;
                            if (this.isArguments(t)) return this.isArguments(e) ? eql(pSlice.call(t), pSlice.call(e)) : !1;
                            try {
                                var i, n, s = this.keys(t),
                                    r = this.keys(e);
                                if (s.length !== r.length) return !1;
                                for (s.sort(), r.sort(), n = s.length - 1; n >= 0; n--)
                                    if (s[n] != r[n]) return !1;
                                for (n = s.length - 1; n >= 0; n--)
                                    if (i = s[n], !this.eql(t[i], e[i])) return !1;
                                return !0
                            } catch (o) {
                                return !1
                            }
                        }
                    };
                "function" == typeof define && define.amd && define("validator", [], function () {
                    return t
                })
            }("undefined" == typeof exports ? this["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = {} : exports);
        var s = function (t, e) {
            this.__class__ = "ParsleyValidator", this.Validator = Validator, this.locale = "en", this.init(t || {}, e || {})
        };
        s.prototype = {
            init: function (e, i) {
                this.catalog = i;
                for (var n in e) this.addValidator(n, e[n].fn, e[n].priority);
                t.emit("parsley:validator:init")
            },
            setLocale: function (t) {
                if ("undefined" == typeof this.catalog[t]) throw new Error(t + " is not available in the catalog");
                return this.locale = t, this
            },
            addCatalog: function (t, e, i) {
                return "object" == typeof e && (this.catalog[t] = e), !0 === i ? this.setLocale(t) : this
            },
            addMessage: function (t, e, i) {
                return void 0 === typeof this.catalog[t] && (this.catalog[t] = {}), this.catalog[t][e.toLowerCase()] = i, this
            },
            validate: function () {
                return (new this.Validator.Validator).validate.apply(new Validator.Validator, arguments)
            },
            addValidator: function (e, i, n) {
                return this.validators[e.toLowerCase()] = function (e) {
                    return t.extend((new Validator.Assert).Callback(i, e), {
                        priority: n
                    })
                }, this
            },
            updateValidator: function (t, e, i) {
                return addValidator(t, e, i)
            },
            removeValidator: function (t) {
                return delete this.validators[t], this
            },
            getErrorMessage: function (t) {
                var e;
                return e = "type" === t.name ? this.catalog[this.locale][t.name][t.requirements] : this.formatMessage(this.catalog[this.locale][t.name], t.requirements), "" !== e ? e : this.catalog[this.locale].defaultMessage
            },
            formatMessage: function (t, e) {
                if ("object" == typeof e) {
                    for (var i in e) t = this.formatMessage(t, e[i]);
                    return t
                }
                return "string" == typeof t ? t.replace(new RegExp("%s", "i"), e) : ""
            },
            validators: {
                notblank: function () {
                    return t.extend((new Validator.Assert).NotBlank(), {
                        priority: 2
                    })
                },
                required: function () {
                    return t.extend((new Validator.Assert).Required(), {
                        priority: 512
                    })
                },
                type: function (e) {
                    var i;
                    switch (e) {
                    case "email":
                        i = (new Validator.Assert).Email();
                        break;
                    case "number":
                        i = (new Validator.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
                        break;
                    case "integer":
                        i = (new Validator.Assert).Regexp("^-?\\d+$");
                        break;
                    case "digits":
                        i = (new Validator.Assert).Regexp("^\\d+$");
                        break;
                    case "alphanum":
                        i = (new Validator.Assert).Regexp("^\\w+$", "i");
                        break;
                    case "url":
                        i = (new Validator.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
                        break;
                    default:
                        throw new Error("validator type `" + e + "` is not supported")
                    }
                    return t.extend(i, {
                        priority: 256
                    })
                },
                pattern: function (e) {
                    var i = "";
                    return /^\/.*\/(?:[gimy]*)$/.test(e) && (i = e.replace(/.*\/([gimy]*)$/, "$1"), e = e.replace(new RegExp("^/(.*?)/" + i + "$"), "$1")), t.extend((new Validator.Assert).Regexp(e, i), {
                        priority: 64
                    })
                },
                minlength: function (e) {
                    return t.extend((new Validator.Assert).Length({
                        min: e
                    }), {
                        priority: 30,
                        requirementsTransformer: function () {
                            return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                        }
                    })
                },
                maxlength: function (e) {
                    return t.extend((new Validator.Assert).Length({
                        max: e
                    }), {
                        priority: 30,
                        requirementsTransformer: function () {
                            return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                        }
                    })
                },
                length: function (e) {
                    return t.extend((new Validator.Assert).Length({
                        min: e[0],
                        max: e[1]
                    }), {
                        priority: 32
                    })
                },
                mincheck: function (t) {
                    return this.minlength(t)
                },
                maxcheck: function (t) {
                    return this.maxlength(t)
                },
                check: function (t) {
                    return this.length(t)
                },
                min: function (e) {
                    return t.extend((new Validator.Assert).GreaterThanOrEqual(e), {
                        priority: 30,
                        requirementsTransformer: function () {
                            return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                        }
                    })
                },
                max: function (e) {
                    return t.extend((new Validator.Assert).LessThanOrEqual(e), {
                        priority: 30,
                        requirementsTransformer: function () {
                            return "string" != typeof e || isNaN(e) ? e : parseInt(e, 10)
                        }
                    })
                },
                range: function (e) {
                    return t.extend((new Validator.Assert).Range(e[0], e[1]), {
                        priority: 32,
                        requirementsTransformer: function () {
                            for (var t = 0; t < e.length; t++) e[t] = "string" != typeof e[t] || isNaN(e[t]) ? e[t] : parseInt(e[t], 10);
                            return e
                        }
                    })
                },
                equalto: function (e) {
                    return t.extend((new Validator.Assert).EqualTo(e), {
                        priority: 256,
                        requirementsTransformer: function () {
                            return t(e).length ? t(e).val() : e
                        }
                    })
                }
            }
        };
        var r = function () {
            this.__class__ = "ParsleyUI"
        };
        r.prototype = {
            listen: function () {
                return t.listen("parsley:form:init", this, this.setupForm), t.listen("parsley:field:init", this, this.setupField), t.listen("parsley:field:validated", this, this.reflow), t.listen("parsley:form:validated", this, this.focus), t.listen("parsley:field:reset", this, this.reset), t.listen("parsley:form:destroy", this, this.destroy), t.listen("parsley:field:destroy", this, this.destroy), this
            },
            reflow: function (t) {
                if ("undefined" != typeof t._ui && !1 !== t._ui.active) {
                    var e = this._diff(t.validationResult, t._ui.lastValidationResult);
                    t._ui.lastValidationResult = t.validationResult, t._ui.validatedOnce = !0, this.manageStatusClass(t), this.manageErrorsMessages(t, e), this.actualizeTriggers(t), (e.kept.length || e.added.length) && "undefined" == typeof t._ui.failedOnce && this.manageFailingFieldTrigger(t)
                }
            },
            getErrorsMessages: function (t) {
                if (!0 === t.validationResult) return [];
                for (var e = [], i = 0; i < t.validationResult.length; i++) e.push(this._getErrorMessage(t, t.validationResult[i].assert));
                return e
            },
            manageStatusClass: function (t) {
                !0 === t.validationResult ? this._successClass(t) : t.validationResult.length > 0 ? this._errorClass(t) : this._resetClass(t)
            },
            manageErrorsMessages: function (e, i) {
                if ("undefined" == typeof e.options.errorsMessagesDisabled) {
                    if ("undefined" != typeof e.options.errorMessage) return i.added.length || i.kept.length ? (0 === e._ui.$errorsWrapper.find(".parsley-custom-error-message").length && e._ui.$errorsWrapper.append(t(e.options.errorTemplate).addClass("parsley-custom-error-message")), e._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(e.options.errorMessage)) : e._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                    for (var n = 0; n < i.removed.length; n++) this.removeError(e, i.removed[n].assert.name, !0);
                    for (n = 0; n < i.added.length; n++) this.addError(e, i.added[n].assert.name, void 0, i.added[n].assert, !0);
                    for (n = 0; n < i.kept.length; n++) this.updateError(e, i.kept[n].assert.name, void 0, i.kept[n].assert, !0)
                }
            },
            addError: function (e, i, n, s, r) {
                e._ui.$errorsWrapper.addClass("filled").append(t(e.options.errorTemplate).addClass("parsley-" + i).html(n || this._getErrorMessage(e, s))), !0 !== r && this._errorClass(e)
            },
            updateError: function (t, e, i, n, s) {
                t._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(i || this._getErrorMessage(t, n)), !0 !== s && this._errorClass(t)
            },
            removeError: function (t, e, i) {
                t._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove(), !0 !== i && this.manageStatusClass(t)
            },
            focus: function (t) {
                if (!0 === t.validationResult || "none" === t.options.focus) return t._focusedField = null;
                t._focusedField = null;
                for (var e = 0; e < t.fields.length; e++)
                    if (!0 !== t.fields[e].validationResult && t.fields[e].validationResult.length > 0 && "undefined" == typeof t.fields[e].options.noFocus) {
                        if ("first" === t.options.focus) return t._focusedField = t.fields[e].$element, t._focusedField.focus();
                        t._focusedField = t.fields[e].$element
                    }
                return null === t._focusedField ? null : t._focusedField.focus()
            },
            _getErrorMessage: function (t, e) {
                var i = e.name + "Message";
                return "undefined" != typeof t.options[i] ? window.ParsleyValidator.formatMessage(t.options[i], e.requirements) : window.ParsleyValidator.getErrorMessage(e)
            },
            _diff: function (t, e, i) {
                for (var n = [], s = [], r = 0; r < t.length; r++) {
                    for (var o = !1, a = 0; a < e.length; a++)
                        if (t[r].assert.name === e[a].assert.name) {
                            o = !0;
                            break
                        }
                    o ? s.push(t[r]) : n.push(t[r])
                }
                return {
                    kept: s,
                    added: n,
                    removed: i ? [] : this._diff(e, t, !0).added
                }
            },
            setupForm: function (e) {
                e.$element.on("submit.Parsley", !1, t.proxy(e.onSubmitValidate, e)), !1 !== e.options.uiEnabled && e.$element.attr("novalidate", "")
            },
            setupField: function (e) {
                var i = {
                    active: !1
                };
                !1 !== e.options.uiEnabled && (i.active = !0, e.$element.attr(e.options.namespace + "id", e.__id__), i.$errorClassHandler = this._manageClassHandler(e), i.errorsWrapperId = "parsley-id-" + ("undefined" != typeof e.options.multiple ? "multiple-" + e.options.multiple : e.__id__), i.$errorsWrapper = t(e.options.errorsWrapper).attr("id", i.errorsWrapperId), i.lastValidationResult = [], i.validatedOnce = !1, i.validationInformationVisible = !1, e._ui = i, this._insertErrorWrapper(e), this.actualizeTriggers(e))
            },
            _manageClassHandler: function (e) {
                if ("string" == typeof e.options.classHandler && t(e.options.classHandler).length) return t(e.options.classHandler);
                var i = e.options.classHandler(e);
                return "undefined" != typeof i && i.length ? i : "undefined" == typeof e.options.multiple || e.$element.is("select") ? e.$element : e.$element.parent()
            },
            _insertErrorWrapper: function (e) {
                var i;
                if ("string" == typeof e.options.errorsContainer) {
                    if (t(e.options.errorsContainer + "").length) return t(e.options.errorsContainer).append(e._ui.$errorsWrapper);
                    window.console && window.console.warn && window.console.warn("The errors container `" + e.options.errorsContainer + "` does not exist in DOM")
                }
                return "function" == typeof e.options.errorsContainer && (i = e.options.errorsContainer(e)), "undefined" != typeof i && i.length ? i.append(e._ui.$errorsWrapper) : "undefined" == typeof e.options.multiple ? e.$element.after(e._ui.$errorsWrapper) : e.$element.parent().after(e._ui.$errorsWrapper)
            },
            actualizeTriggers: function (e) {
                var i = this;
                if (e.options.multiple ? t("[" + e.options.namespace + 'multiple="' + e.options.multiple + '"]').each(function () {
                    t(this).off(".Parsley")
                }) : e.$element.off(".Parsley"), !1 !== e.options.trigger) {
                    var n = e.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
                    "" !== n && (e.options.multiple ? t("[" + e.options.namespace + 'multiple="' + e.options.multiple + '"]').each(function () {
                        t(this).on(n.split(" ").join(".Parsley ") + ".Parsley", !1, t.proxy("function" == typeof e.eventValidate ? e.eventValidate : i.eventValidate, e))
                    }) : e.$element.on(n.split(" ").join(".Parsley ") + ".Parsley", !1, t.proxy("function" == typeof e.eventValidate ? e.eventValidate : this.eventValidate, e)))
                }
            },
            eventValidate: function (t) {
                new RegExp("key").test(t.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
            },
            manageFailingFieldTrigger: function (e) {
                return e._ui.failedOnce = !0, e.options.multiple && t("[" + e.options.namespace + 'multiple="' + e.options.multiple + '"]').each(function () {
                    return new RegExp("change", "i").test(t(this).parsley().options.trigger || "") ? void 0 : t(this).on("change.ParsleyFailedOnce", !1, t.proxy(e.validate, e))
                }), e.$element.is("select") && !new RegExp("change", "i").test(e.options.trigger || "") ? e.$element.on("change.ParsleyFailedOnce", !1, t.proxy(e.validate, e)) : new RegExp("keyup", "i").test(e.options.trigger || "") ? void 0 : e.$element.on("keyup.ParsleyFailedOnce", !1, t.proxy(e.validate, e))
            },
            reset: function (e) {
                e.$element.off(".Parsley"), e.$element.off(".ParsleyFailedOnce"), "undefined" != typeof e._ui && "ParsleyForm" !== e.__class__ && (e._ui.$errorsWrapper.children().each(function () {
                    t(this).remove()
                }), this._resetClass(e), e._ui.validatedOnce = !1, e._ui.lastValidationResult = [], e._ui.validationInformationVisible = !1)
            },
            destroy: function (t) {
                this.reset(t), "ParsleyForm" !== t.__class__ && (t._ui.$errorsWrapper.remove(), delete t._ui)
            },
            _successClass: function (t) {
                t._ui.validationInformationVisible = !0, t._ui.$errorClassHandler.removeClass(t.options.errorClass).addClass(t.options.successClass)
            },
            _errorClass: function (t) {
                t._ui.validationInformationVisible = !0, t._ui.$errorClassHandler.removeClass(t.options.successClass).addClass(t.options.errorClass)
            },
            _resetClass: function (t) {
                t._ui.$errorClassHandler.removeClass(t.options.successClass).removeClass(t.options.errorClass)
            }
        };
        var o = function (i, n, s, r) {
            this.__class__ = "OptionsFactory", this.__id__ = e.hash(4), this.formOptions = null, this.fieldOptions = null, this.staticOptions = t.extend(!0, {}, i, n, s, {
                namespace: r
            })
        };
        o.prototype = {
            get: function (t) {
                if ("undefined" == typeof t.__class__) throw new Error("Parsley Instance expected");
                switch (t.__class__) {
                case "Parsley":
                    return this.staticOptions;
                case "ParsleyForm":
                    return this.getFormOptions(t);
                case "ParsleyField":
                case "ParsleyFieldMultiple":
                    return this.getFieldOptions(t);
                default:
                    throw new Error("Instance " + t.__class__ + " is not supported")
                }
            },
            getFormOptions: function (i) {
                return this.formOptions = e.attr(i.$element, this.staticOptions.namespace), t.extend({}, this.staticOptions, this.formOptions)
            },
            getFieldOptions: function (i) {
                return this.fieldOptions = e.attr(i.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof i.parent && (this.formOptions = this.getFormOptions(i.parent)), t.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
            }
        };
        var a = function (i, n) {
            if (this.__class__ = "ParsleyForm", this.__id__ = e.hash(4), "OptionsFactory" !== e.get(n, "__class__")) throw new Error("You must give an OptionsFactory instance");
            this.OptionsFactory = n, this.$element = t(i), this.validationResult = null, this.options = this.OptionsFactory.get(this)
        };
        a.prototype = {
            onSubmitValidate: function (e) {
                return this.validate(void 0, void 0, e), !1 === this.validationResult && e instanceof t.Event && (e.stopImmediatePropagation(), e.preventDefault()), this
            },
            validate: function (e, i, n) {
                this.submitEvent = n, this.validationResult = !0;
                var s = [];
                this._refreshFields(), t.emit("parsley:form:validate", this);
                for (var r = 0; r < this.fields.length; r++) e && e !== this.fields[r].options.group || (s = this.fields[r].validate(i), !0 !== s && s.length > 0 && this.validationResult && (this.validationResult = !1));
                return t.emit("parsley:form:validated", this), this.validationResult
            },
            isValid: function (t, e) {
                this._refreshFields();
                for (var i = 0; i < this.fields.length; i++)
                    if ((!t || t === this.fields[i].options.group) && !1 === this.fields[i].isValid(e)) return !1;
                return !0
            },
            _refreshFields: function () {
                return this.actualizeOptions()._bindFields()
            },
            _bindFields: function () {
                var t = this;
                return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function () {
                    var e = new window.Parsley(this, {}, t);
                    "ParsleyField" !== e.__class__ && "ParsleyFieldMultiple" !== e.__class__ || e.$element.is(e.options.excluded) || "undefined" == typeof t.fieldsMappedById[e.__class__ + "-" + e.__id__] && (t.fieldsMappedById[e.__class__ + "-" + e.__id__] = e, t.fields.push(e))
                }), this
            }
        };
        var l = function (i, n, s, r, o) {
                if (!new RegExp("ParsleyField").test(e.get(i, "__class__"))) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
                if ("function" != typeof window.ParsleyValidator.validators[n] && "Assert" !== window.ParsleyValidator.validators[n](s).__parentClass__) throw new Error("Valid validator expected");
                var a = function (t, i) {
                    return "undefined" != typeof t.options[i + "Priority"] ? t.options[i + "Priority"] : e.get(window.ParsleyValidator.validators[i](s), "priority") || 2
                };
                return r = r || a(i, n), "function" == typeof window.ParsleyValidator.validators[n](s).requirementsTransformer && (s = window.ParsleyValidator.validators[n](s).requirementsTransformer()), t.extend(window.ParsleyValidator.validators[n](s), {
                    name: n,
                    requirements: s,
                    priority: r,
                    groups: [r],
                    isDomConstraint: o || e.attr(i.$element, i.options.namespace, n)
                })
            },
            u = function (i, n, s) {
                this.__class__ = "ParsleyField", this.__id__ = e.hash(4), this.$element = t(i), "undefined" != typeof s ? (this.parent = s, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) : (this.OptionsFactory = n, this.options = this.OptionsFactory.get(this)), this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
            };
        u.prototype = {
            validate: function (e) {
                return this.value = this.getValue(), t.emit("parsley:field:validate", this), t.emit("parsley:field:" + (this.isValid(e, this.value) ? "success" : "error"), this), t.emit("parsley:field:validated", this), this.validationResult
            },
            isValid: function (t, e) {
                this.refreshConstraints();
                var i = this._getConstraintsSortedPriorities();
                if (e = e || this.getValue(), 0 === e.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== t) return this.validationResult = [];
                if (!1 === this.options.priorityEnabled) return !0 === (this.validationResult = this.validateThroughValidator(e, this.constraints, "Any"));
                for (var n = 0; n < i.length; n++)
                    if (!0 !== (this.validationResult = this.validateThroughValidator(e, this.constraints, i[n]))) return !1;
                return !0
            },
            getValue: function () {
                var t;
                return t = "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof t || null === t ? "" : !0 === this.options.trimValue ? t.replace(/^\s+|\s+$/g, "") : t
            },
            refreshConstraints: function () {
                return this.actualizeOptions()._bindConstraints()
            },
            addConstraint: function (t, e, i, n) {
                if (t = t.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[t]) {
                    var s = new l(this, t, e, i, n);
                    "undefined" !== this.constraintsByName[s.name] && this.removeConstraint(s.name), this.constraints.push(s), this.constraintsByName[s.name] = s
                }
                return this
            },
            removeConstraint: function (t) {
                for (var e = 0; e < this.constraints.length; e++)
                    if (t === this.constraints[e].name) {
                        this.constraints.splice(e, 1);
                        break
                    }
                return this
            },
            updateConstraint: function (t, e, i) {
                return this.removeConstraint(t).addConstraint(t, e, i)
            },
            _bindConstraints: function () {
                for (var t = [], e = 0; e < this.constraints.length; e++)!1 === this.constraints[e].isDomConstraint && t.push(this.constraints[e]);
                this.constraints = t;
                for (var i in this.options) this.addConstraint(i, this.options[i]);
                return this._bindHtml5Constraints()
            },
            _bindHtml5Constraints: function () {
                (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0);
                var t = this.$element.attr("type");
                return "undefined" == typeof t ? this : "number" === t ? this.addConstraint("type", "integer", void 0, !0) : new RegExp(t, "i").test("email url range") ? this.addConstraint("type", t, void 0, !0) : this
            },
            _isRequired: function () {
                return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
            },
            _getConstraintsSortedPriorities: function () {
                for (var t = [], e = 0; e < this.constraints.length; e++) - 1 === t.indexOf(this.constraints[e].priority) && t.push(this.constraints[e].priority);
                return t.sort(function (t, e) {
                    return e - t
                }), t
            }
        };
        var c = function () {
            this.__class__ = "ParsleyFieldMultiple"
        };
        c.prototype = {
            addElement: function (t) {
                return this.$elements.push(t), this
            },
            refreshConstraints: function () {
                var t;
                if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
                for (var e = 0; e < this.$elements.length; e++) {
                    t = this.$elements[e].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                    for (var i = 0; i < t.length; i++) this.addConstraint(t[i].name, t[i].requirements, t[i].priority, t[i].isDomConstraint)
                }
                return this
            },
            getValue: function () {
                if ("undefined" != typeof this.options.value) return this.options.value;
                if (this.$element.is("input[type=radio]")) return t("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
                if (this.$element.is("input[type=checkbox]")) {
                    var e = [];
                    return t("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function () {
                        e.push(t(this).val())
                    }), e.length ? e : []
                }
                return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
            },
            _init: function (t) {
                return this.$elements = [this.$element], this.options.multiple = t, this
            }
        };
        var h = t({}),
            d = {};
        t.listen = function (t) {
            if ("undefined" == typeof d[t] && (d[t] = []), "function" == typeof arguments[1]) return d[t].push({
                fn: arguments[1]
            });
            if ("object" == typeof arguments[1] && "function" == typeof arguments[2]) return d[t].push({
                fn: arguments[2],
                ctxt: arguments[1]
            });
            throw new Error("Wrong parameters")
        }, t.listenTo = function (t, e, i) {
            if ("undefined" == typeof d[e] && (d[e] = []), !(t instanceof u || t instanceof a)) throw new Error("Must give Parsley instance");
            if ("string" != typeof e || "function" != typeof i) throw new Error("Wrong parameters");
            d[e].push({
                instance: t,
                fn: i
            })
        }, t.unsubscribe = function (t, e) {
            if ("undefined" != typeof d[t]) {
                if ("string" != typeof t || "function" != typeof e) throw new Error("Wrong arguments");
                for (var i = 0; i < d[t].length; i++)
                    if (d[t][i].fn === e) return d[t].splice(i, 1)
            }
        }, t.unsubscribeTo = function (t, e) {
            if ("undefined" != typeof d[e]) {
                if (!(t instanceof u || t instanceof a)) throw new Error("Must give Parsley instance");
                for (var i = 0; i < d[e].length; i++)
                    if ("undefined" != typeof d[e][i].instance && d[e][i].instance.__id__ === t.__id__) return d[e].splice(i, 1)
            }
        }, t.unsubscribeAll = function (t) {
            "undefined" != typeof d[t] && delete d[t]
        }, t.emit = function (t, e) {
            if ("undefined" != typeof d[t])
                for (var i = 0; i < d[t].length; i++)
                    if ("undefined" != typeof d[t][i].instance) {
                        if (e instanceof u || e instanceof a)
                            if (d[t][i].instance.__id__ !== e.__id__) {
                                if (d[t][i].instance instanceof a && e instanceof u)
                                    for (var n = 0; n < d[t][i].instance.fields.length; n++)
                                        if (d[t][i].instance.fields[n].__id__ === e.__id__) {
                                            d[t][i].fn.apply(h, Array.prototype.slice.call(arguments, 1));
                                            continue
                                        }
                            } else d[t][i].fn.apply(h, Array.prototype.slice.call(arguments, 1))
                    } else d[t][i].fn.apply("undefined" != typeof d[t][i].ctxt ? d[t][i].ctxt : h, Array.prototype.slice.call(arguments, 1))
        }, t.subscribed = function () {
            return d
        }, window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n.en = t.extend(window.ParsleyConfig.i18n.en || {}, {
            defaultMessage: "This value seems to be invalid.",
            type: {
                email: "This value should be a valid email.",
                url: "This value should be a valid url.",
                number: "This value should be a valid number.",
                integer: "This value should be a valid integer.",
                digits: "This value should be digits.",
                alphanum: "This value should be alphanumeric."
            },
            notblank: "This value should not be blank.",
            required: "This value is required.",
            pattern: "This value seems to be invalid.",
            min: "This value should be greater than or equal to %s.",
            max: "This value should be lower than or equal to %s.",
            range: "This value should be between %s and %s.",
            minlength: "This value is too short. It should have %s characters or more.",
            maxlength: "This value is too long. It should have %s characters or less.",
            length: "This value length is invalid. It should be between %s and %s characters long.",
            mincheck: "You must select at least %s choices.",
            maxcheck: "You must select %s choices or less.",
            check: "You must select between %s and %s choices.",
            equalto: "This value should be the same."
        }), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
        var p = function (i, n, s) {
            if (this.__class__ = "Parsley", this.__version__ = "2.0.0", this.__id__ = e.hash(4), "undefined" == typeof i) throw new Error("You must give an element");
            if ("undefined" != typeof s && "ParsleyForm" !== s.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
            return this.init(t(i), n, s)
        };
        p.prototype = {
            init: function (t, n, s) {
                if (!t.length) throw new Error("You must bind Parsley on an existing element.");
                if (this.$element = t, this.$element.data("Parsley")) {
                    var r = this.$element.data("Parsley");
                    return "undefined" != typeof s && (r.parent = s), r
                }
                return this.OptionsFactory = new o(i, e.get(window, "ParsleyConfig") || {}, n, this.getNamespace(n)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || e.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ? this.handleMultiple(s) : this.bind("parsleyField", s) : this
            },
            isMultiple: function () {
                return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
            },
            handleMultiple: function (i) {
                var n, s, r, o = this;
                if (this.options = t.extend(this.options, i ? i.OptionsFactory.get(i) : {}, e.attr(this.$element, this.options.namespace)), this.options.multiple ? s = this.options.multiple : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? s = n = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (s = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.bind("parsleyFieldMultiple", i, s || this.__id__);
                if ("undefined" == typeof s) return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
                if (s = s.replace(/(:|\.|\[|\]|\$)/g, ""), "undefined" != typeof n && t('input[name="' + n + '"]').each(function () {
                    t(this).is("input[type=radio], input[type=checkbox]") && t(this).attr(o.options.namespace + "multiple", s)
                }), t("[" + this.options.namespace + "multiple=" + s + "]").length)
                    for (var a = 0; a < t("[" + this.options.namespace + "multiple=" + s + "]").length; a++)
                        if ("undefined" != typeof t(t("[" + this.options.namespace + "multiple=" + s + "]").get(a)).data("Parsley")) {
                            r = t(t("[" + this.options.namespace + "multiple=" + s + "]").get(a)).data("Parsley"), this.$element.data("ParsleyFieldMultiple") || (r.addElement(this.$element), this.$element.attr(this.options.namespace + "id", r.__id__));
                            break
                        }
                return this.bind("parsleyField", i, s, !0), r || this.bind("parsleyFieldMultiple", i, s)
            },
            getNamespace: function (t) {
                return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof e.get(t, "namespace") ? t.namespace : "undefined" != typeof e.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : i.namespace
            },
            bind: function (i, s, r, o) {
                var l;
                switch (i) {
                case "parsleyForm":
                    l = t.extend(new a(this.$element, this.OptionsFactory), new n, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    l = t.extend(new u(this.$element, this.OptionsFactory, s), new n, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    l = t.extend(new u(this.$element, this.OptionsFactory, s), new n, new c, window.ParsleyExtend)._init(r);
                    break;
                default:
                    throw new Error(i + "is not a supported Parsley type")
                }
                return "undefined" != typeof r && e.setAttr(this.$element, this.options.namespace, "multiple", r), "undefined" != typeof o ? (this.$element.data("ParsleyFieldMultiple", l), l) : (new RegExp("ParsleyF", "i").test(l.__class__) && (this.$element.data("Parsley", l), t.emit("parsley:" + ("parsleyForm" === i ? "form" : "field") + ":init", l)), l)
            }
        }, t.fn.parsley = t.fn.psly = function (e) {
            if (this.length > 1) {
                var i = [];
                return this.each(function () {
                    i.push(t(this).parsley(e))
                }), i
            }
            return t(this).length ? new p(this, e) : void(window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
        }, window.ParsleyUI = "function" == typeof e.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new r).listen(), "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}), window.Parsley = window.psly = p, window.ParsleyUtils = e, window.ParsleyValidator = new s(window.ParsleyConfig.validators, window.ParsleyConfig.i18n), !1 !== e.get(window, "ParsleyConfig.autoBind") && t(document).ready(function () {
            t("[data-parsley-validate]").length && t("[data-parsley-validate]").parsley()
        }), "function" == typeof define && define.amd && define("parsley", function () {
            return window.Parsley
        })
    }(window.jQuery), ! function () {
        var t, e, i, n, s, r = {}.hasOwnProperty,
            o = function (t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        n = function () {
            function t() {
                this.options_index = 0, this.parsed = []
            }
            return t.prototype.add_node = function (t) {
                return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
            }, t.prototype.add_group = function (t) {
                var e, i, n, s, r, o;
                for (e = this.parsed.length, this.parsed.push({
                    array_index: e,
                    group: !0,
                    label: this.escapeExpression(t.label),
                    children: 0,
                    disabled: t.disabled
                }), r = t.childNodes, o = [], n = 0, s = r.length; s > n; n++) i = r[n], o.push(this.add_option(i, e, t.disabled));
                return o
            }, t.prototype.add_option = function (t, e, i) {
                return "OPTION" === t.nodeName.toUpperCase() ? ("" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: t.value,
                    text: t.text,
                    html: t.innerHTML,
                    selected: t.selected,
                    disabled: i === !0 ? i : t.disabled,
                    group_array_index: e,
                    classes: t.className,
                    style: t.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1) : void 0
            }, t.prototype.escapeExpression = function (t) {
                var e, i;
                return null == t || t === !1 ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(i, function (t) {
                    return e[t] || "&amp;"
                })) : t
            }, t
        }(), n.select_to_array = function (t) {
            var e, i, s, r, o;
            for (i = new n, o = t.childNodes, s = 0, r = o.length; r > s; s++) e = o[s], i.add_node(e);
            return i.parsed
        }, e = function () {
            function t(e, i) {
                this.form_field = e, this.options = null != i ? i : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
            }
            return t.prototype.set_default_values = function () {
                var t = this;
                return this.click_test_action = function (e) {
                    return t.test_active_click(e)
                }, this.activate_action = function (e) {
                    return t.activate_field(e)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
            }, t.prototype.set_default_text = function () {
                return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
            }, t.prototype.mouse_enter = function () {
                return this.mouse_on_container = !0
            }, t.prototype.mouse_leave = function () {
                return this.mouse_on_container = !1
            }, t.prototype.input_focus = function () {
                var t = this;
                if (this.is_multiple) {
                    if (!this.active_field) return setTimeout(function () {
                        return t.container_mousedown()
                    }, 50)
                } else if (!this.active_field) return this.activate_field()
            }, t.prototype.input_blur = function () {
                var t = this;
                return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
                    return t.blur_test()
                }, 100))
            }, t.prototype.results_option_build = function (t) {
                var e, i, n, s, r;
                for (e = "", r = this.results_data, n = 0, s = r.length; s > n; n++) i = r[n], e += i.group ? this.result_add_group(i) : this.result_add_option(i), (null != t ? t.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(i.text));
                return e
            }, t.prototype.result_add_option = function (t) {
                var e, i;
                return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.style.cssText = t.style, i.setAttribute("data-option-array-index", t.array_index), i.innerHTML = t.search_text, this.outerHTML(i)) : ""
            }, t.prototype.result_add_group = function (t) {
                var e;
                return (t.search_match || t.group_match) && t.active_options > 0 ? (e = document.createElement("li"), e.className = "group-result", e.innerHTML = t.search_text, this.outerHTML(e)) : ""
            }, t.prototype.results_update_field = function () {
                return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
            }, t.prototype.reset_single_select_options = function () {
                var t, e, i, n, s;
                for (n = this.results_data, s = [], e = 0, i = n.length; i > e; e++) t = n[e], s.push(t.selected ? t.selected = !1 : void 0);
                return s
            }, t.prototype.results_toggle = function () {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, t.prototype.results_search = function () {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, t.prototype.winnow_results = function () {
                var t, e, i, n, s, r, o, a, l, u, c, h, d;
                for (this.no_results_clear(), s = 0, o = this.get_search_text(), t = o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), n = this.search_contains ? "" : "^", i = new RegExp(n + t, "i"), u = new RegExp(t, "i"), d = this.results_data, c = 0, h = d.length; h > c; c++) e = d[c], e.search_match = !1, r = null, this.include_option_in_results(e) && (e.group && (e.group_match = !1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (r = this.results_data[e.group_array_index], 0 === r.active_options && r.search_match && (s += 1), r.active_options += 1), (!e.group || this.group_search) && (e.search_text = e.group ? e.label : e.html, e.search_match = this.search_string_match(e.search_text, i), e.search_match && !e.group && (s += 1), e.search_match ? (o.length && (a = e.search_text.search(u), l = e.search_text.substr(0, a + o.length) + "</em>" + e.search_text.substr(a + o.length), e.search_text = l.substr(0, a) + "<em>" + l.substr(a)), null != r && (r.group_match = !0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match = !0)));
                return this.result_clear_highlight(), 1 > s && o.length ? (this.update_results_content(""), this.no_results(o)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
            }, t.prototype.search_string_match = function (t, e) {
                var i, n, s, r;
                if (e.test(t)) return !0;
                if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (n = t.replace(/\[|\]/g, "").split(" "), n.length))
                    for (s = 0, r = n.length; r > s; s++)
                        if (i = n[s], e.test(i)) return !0
            }, t.prototype.choices_count = function () {
                var t, e, i, n;
                if (null != this.selected_option_count) return this.selected_option_count;
                for (this.selected_option_count = 0, n = this.form_field.options, e = 0, i = n.length; i > e; e++) t = n[e], t.selected && (this.selected_option_count += 1);
                return this.selected_option_count
            }, t.prototype.choices_click = function (t) {
                return t.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
            }, t.prototype.keyup_checker = function (t) {
                var e, i;
                switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), e) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (t.preventDefault(), this.results_showing) return this.result_select(t);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
                }
            }, t.prototype.clipboard_event_checker = function () {
                var t = this;
                return setTimeout(function () {
                    return t.results_search()
                }, 50)
            }, t.prototype.container_width = function () {
                return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
            }, t.prototype.include_option_in_results = function (t) {
                return this.is_multiple && !this.display_selected_options && t.selected ? !1 : !this.display_disabled_options && t.disabled ? !1 : t.empty ? !1 : !0
            }, t.prototype.search_results_touchstart = function (t) {
                return this.touch_started = !0, this.search_results_mouseover(t)
            }, t.prototype.search_results_touchmove = function (t) {
                return this.touch_started = !1, this.search_results_mouseout(t)
            }, t.prototype.search_results_touchend = function (t) {
                return this.touch_started ? this.search_results_mouseup(t) : void 0
            }, t.prototype.outerHTML = function (t) {
                var e;
                return t.outerHTML ? t.outerHTML : (e = document.createElement("div"), e.appendChild(t), e.innerHTML)
            }, t.browser_is_supported = function () {
                return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
            }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
        }(), t = jQuery, t.fn.extend({
            chosen: function (n) {
                return e.browser_is_supported() ? this.each(function () {
                    var e, s;
                    e = t(this), s = e.data("chosen"), "destroy" === n && s ? s.destroy() : s || e.data("chosen", new i(this, n))
                }) : this
            }
        }), i = function (e) {
            function i() {
                return s = i.__super__.constructor.apply(this, arguments)
            }
            return o(i, e), i.prototype.setup = function () {
                return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, i.prototype.set_up_html = function () {
                var e, i;
                return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), i = {
                    "class": e.join(" "),
                    style: "width: " + this.container_width() + ";",
                    title: this.form_field.title
                }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", i), this.container.html(this.is_multiple ? '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>' : '<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, i.prototype.register_observers = function () {
                var t = this;
                return this.container.bind("mousedown.chosen", function (e) {
                    t.container_mousedown(e)
                }), this.container.bind("mouseup.chosen", function (e) {
                    t.container_mouseup(e)
                }), this.container.bind("mouseenter.chosen", function (e) {
                    t.mouse_enter(e)
                }), this.container.bind("mouseleave.chosen", function (e) {
                    t.mouse_leave(e)
                }), this.search_results.bind("mouseup.chosen", function (e) {
                    t.search_results_mouseup(e)
                }), this.search_results.bind("mouseover.chosen", function (e) {
                    t.search_results_mouseover(e)
                }), this.search_results.bind("mouseout.chosen", function (e) {
                    t.search_results_mouseout(e)
                }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (e) {
                    t.search_results_mousewheel(e)
                }), this.search_results.bind("touchstart.chosen", function (e) {
                    t.search_results_touchstart(e)
                }), this.search_results.bind("touchmove.chosen", function (e) {
                    t.search_results_touchmove(e)
                }), this.search_results.bind("touchend.chosen", function (e) {
                    t.search_results_touchend(e)
                }), this.form_field_jq.bind("chosen:updated.chosen", function (e) {
                    t.results_update_field(e)
                }), this.form_field_jq.bind("chosen:activate.chosen", function (e) {
                    t.activate_field(e)
                }), this.form_field_jq.bind("chosen:open.chosen", function (e) {
                    t.container_mousedown(e)
                }), this.form_field_jq.bind("chosen:close.chosen", function (e) {
                    t.input_blur(e)
                }), this.search_field.bind("blur.chosen", function (e) {
                    t.input_blur(e)
                }), this.search_field.bind("keyup.chosen", function (e) {
                    t.keyup_checker(e)
                }), this.search_field.bind("keydown.chosen", function (e) {
                    t.keydown_checker(e)
                }), this.search_field.bind("focus.chosen", function (e) {
                    t.input_focus(e)
                }), this.search_field.bind("cut.chosen", function (e) {
                    t.clipboard_event_checker(e)
                }), this.search_field.bind("paste.chosen", function (e) {
                    t.clipboard_event_checker(e)
                }), this.is_multiple ? this.search_choices.bind("click.chosen", function (e) {
                    t.choices_click(e)
                }) : this.container.bind("click.chosen", function (t) {
                    t.preventDefault()
                })
            }, i.prototype.destroy = function () {
                return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, i.prototype.search_field_disabled = function () {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
            }, i.prototype.container_mousedown = function (e) {
                return this.is_disabled || (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, i.prototype.container_mouseup = function (t) {
                return "ABBR" !== t.target.nodeName || this.is_disabled ? void 0 : this.results_reset(t)
            }, i.prototype.search_results_mousewheel = function (t) {
                var e;
                return t.originalEvent && (e = -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e ? (t.preventDefault(), "DOMMouseScroll" === t.type && (e = 40 * e), this.search_results.scrollTop(e + this.search_results.scrollTop())) : void 0
            }, i.prototype.blur_test = function () {
                return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
            }, i.prototype.close_field = function () {
                return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, i.prototype.activate_field = function () {
                return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, i.prototype.test_active_click = function (e) {
                var i;
                return i = t(e.target).closest(".chosen-container"), i.length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
            }, i.prototype.results_build = function () {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = n.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, i.prototype.result_do_highlight = function (t) {
                var e, i, n, s, r;
                if (t.length) {
                    if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), n = parseInt(this.search_results.css("maxHeight"), 10), r = this.search_results.scrollTop(), s = n + r, i = this.result_highlight.position().top + this.search_results.scrollTop(), e = i + this.result_highlight.outerHeight(), e >= s) return this.search_results.scrollTop(e - n > 0 ? e - n : 0);
                    if (r > i) return this.search_results.scrollTop(i)
                }
            }, i.prototype.result_clear_highlight = function () {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, i.prototype.results_show = function () {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, i.prototype.update_results_content = function (t) {
                return this.search_results.html(t)
            }, i.prototype.results_hide = function () {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, i.prototype.set_tab_index = function () {
                var t;
                return this.form_field.tabIndex ? (t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t) : void 0
            }, i.prototype.set_label_behavior = function () {
                var e = this;
                return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (t) {
                    return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
                }) : void 0
            }, i.prototype.show_search_field_default = function () {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, i.prototype.search_results_mouseup = function (e) {
                var i;
                return i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), i.length ? (this.result_highlight = i, this.result_select(e), this.search_field.focus()) : void 0
            }, i.prototype.search_results_mouseover = function (e) {
                var i;
                return i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), i ? this.result_do_highlight(i) : void 0
            }, i.prototype.search_results_mouseout = function (e) {
                return t(e.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
            }, i.prototype.choice_build = function (e) {
                var i, n, s = this;
                return i = t("<li />", {
                    "class": "search-choice"
                }).html("<span>" + e.html + "</span>"), e.disabled ? i.addClass("search-choice-disabled") : (n = t("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": e.array_index
                }), n.bind("click.chosen", function (t) {
                    return s.choice_destroy_link_click(t)
                }), i.append(n)), this.search_container.before(i)
            }, i.prototype.choice_destroy_link_click = function (e) {
                return e.preventDefault(), e.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(t(e.target))
            }, i.prototype.choice_destroy = function (t) {
                return this.result_deselect(t[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()) : void 0
            }, i.prototype.results_reset = function () {
                return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
            }, i.prototype.results_reset_cleanup = function () {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, i.prototype.result_select = function (t) {
                var e, i;
                return this.result_highlight ? (e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), i = this.results_data[e[0].getAttribute("data-option-array-index")], i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(i.text), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[i.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
            }, i.prototype.single_set_selected_text = function (t) {
                return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(t)
            }, i.prototype.result_deselect = function (t) {
                var e;
                return e = this.results_data[t], this.form_field.options[e.options_index].disabled ? !1 : (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[e.options_index].value
                }), this.search_field_scale(), !0)
            }, i.prototype.single_deselect_control_build = function () {
                return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
            }, i.prototype.get_search_text = function () {
                return this.search_field.val() === this.default_text ? "" : t("<div/>").text(t.trim(this.search_field.val())).html()
            }, i.prototype.winnow_results_set_highlight = function () {
                var t, e;
                return e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), t = e.length ? e.first() : this.search_results.find(".active-result").first(), null != t ? this.result_do_highlight(t) : void 0
            }, i.prototype.no_results = function (e) {
                var i;
                return i = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), i.find("span").first().html(e), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, i.prototype.no_results_clear = function () {
                return this.search_results.find(".no-results").remove()
            }, i.prototype.keydown_arrow = function () {
                var t;
                return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
            }, i.prototype.keyup_arrow = function () {
                var t;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result"), t.length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, i.prototype.keydown_backstroke = function () {
                var t;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last(), t.length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, i.prototype.clear_backstroke = function () {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, i.prototype.keydown_checker = function (t) {
                var e, i;
                switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                    break;
                case 13:
                    t.preventDefault();
                    break;
                case 38:
                    t.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    t.preventDefault(), this.keydown_arrow()
                }
            }, i.prototype.search_field_scale = function () {
                var e, i, n, s, r, o, a, l, u;
                if (this.is_multiple) {
                    for (n = 0, a = 0, r = "position:absolute; left: -1000px; top: -1000px; display:none;", o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, u = o.length; u > l; l++) s = o[l], r += s + ":" + this.search_field.css(s) + ";";
                    return e = t("<div />", {
                        style: r
                    }), e.text(this.search_field.val()), t("body").append(e), a = e.width() + 25, e.remove(), i = this.container.outerWidth(), a > i - 10 && (a = i - 10), this.search_field.css({
                        width: a + "px"
                    })
                }
            }, i
        }(e)
    }.call(this),
    function () {
        function t(e) {
            var i = t.modules[e];
            if (!i) throw new Error('failed to require "' + e + '"');
            return "exports" in i || "function" != typeof i.definition || (i.client = i.component = !0, i.definition.call(this, i.exports = {}, i), delete i.definition), i.exports
        }
        t.modules = {}, t.register = function (e, i) {
            t.modules[e] = {
                definition: i
            }
        }, t.define = function (e, i) {
            t.modules[e] = {
                exports: i
            }
        }, t.register("component~emitter@1.1.2", function (t, e) {
            function i(t) {
                return t ? n(t) : void 0
            }

            function n(t) {
                for (var e in i.prototype) t[e] = i.prototype[e];
                return t
            }
            e.exports = i, i.prototype.on = i.prototype.addEventListener = function (t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this
            }, i.prototype.once = function (t, e) {
                function i() {
                    n.off(t, i), e.apply(this, arguments)
                }
                var n = this;
                return this._callbacks = this._callbacks || {}, i.fn = e, this.on(t, i), this
            }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function (t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var i = this._callbacks[t];
                if (!i) return this;
                if (1 == arguments.length) return delete this._callbacks[t], this;
                for (var n, s = 0; s < i.length; s++)
                    if (n = i[s], n === e || n.fn === e) {
                        i.splice(s, 1);
                        break
                    }
                return this
            }, i.prototype.emit = function (t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    i = this._callbacks[t];
                if (i) {
                    i = i.slice(0);
                    for (var n = 0, s = i.length; s > n; ++n) i[n].apply(this, e)
                }
                return this
            }, i.prototype.listeners = function (t) {
                return this._callbacks = this._callbacks || {}, this._callbacks[t] || []
            }, i.prototype.hasListeners = function (t) {
                return !!this.listeners(t).length
            }
        }), t.register("dropzone", function (e, i) {
            i.exports = t("dropzone/lib/dropzone.js")
        }), t.register("dropzone/lib/dropzone.js", function (e, i) {
            (function () {
                var e, n, s, r, o, a, l, u, c = {}.hasOwnProperty,
                    h = function (t, e) {
                        function i() {
                            this.constructor = t
                        }
                        for (var n in e) c.call(e, n) && (t[n] = e[n]);
                        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                    },
                    d = [].slice;
                n = "undefined" != typeof Emitter && null !== Emitter ? Emitter : t("component~emitter@1.1.2"), l = function () {}, e = function (t) {
                    function e(t, n) {
                        var s, r, o;
                        if (this.element = t, this.version = e.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
                        if (this.element.dropzone) throw new Error("Dropzone already attached.");
                        if (e.instances.push(this), this.element.dropzone = this, s = null != (o = e.optionsForElement(this.element)) ? o : {}, this.options = i({}, this.defaultOptions, s, null != n ? n : {}), this.options.forceFallback || !e.isBrowserSupported()) return this.options.fallback.call(this);
                        if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
                        if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                        this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (r = this.getExistingFallback()) && r.parentNode && r.parentNode.removeChild(r), this.previewsContainer = this.options.previewsContainer ? e.getElement(this.options.previewsContainer, "previewsContainer") : this.element, this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [this.element] : e.getElements(this.options.clickable, "clickable")), this.init()
                    }
                    var i;
                    return h(e, t), e.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached"], e.prototype.defaultOptions = {
                        url: null,
                        method: "post",
                        withCredentials: !1,
                        parallelUploads: 2,
                        uploadMultiple: !1,
                        maxFilesize: 256,
                        paramName: "file",
                        createImageThumbnails: !0,
                        maxThumbnailFilesize: 10,
                        thumbnailWidth: 100,
                        thumbnailHeight: 100,
                        maxFiles: null,
                        params: {},
                        clickable: !0,
                        ignoreHiddenFiles: !0,
                        acceptedFiles: null,
                        acceptedMimeTypes: null,
                        autoProcessQueue: !0,
                        autoQueue: !0,
                        addRemoveLinks: !1,
                        previewsContainer: null,
                        dictDefaultMessage: "Drop files here to upload",
                        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                        dictInvalidFileType: "You can't upload files of this type.",
                        dictResponseError: "Server responded with {{statusCode}} code.",
                        dictCancelUpload: "Cancel upload",
                        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                        dictRemoveFile: "Remove file",
                        dictRemoveFileConfirmation: null,
                        dictMaxFilesExceeded: "You can not upload any more files.",
                        accept: function (t, e) {
                            return e()
                        },
                        init: function () {
                            return l
                        },
                        forceFallback: !1,
                        fallback: function () {
                            var t, i, n, s, r, o;
                            for (this.element.className = "" + this.element.className + " dz-browser-not-supported", o = this.element.getElementsByTagName("div"), s = 0, r = o.length; r > s; s++) t = o[s], /(^| )dz-message($| )/.test(t.className) && (i = t, t.className = "dz-message");
                            return i || (i = e.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(i)), n = i.getElementsByTagName("span")[0], n && (n.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm())
                        },
                        resize: function (t) {
                            var e, i, n;
                            return e = {
                                srcX: 0,
                                srcY: 0,
                                srcWidth: t.width,
                                srcHeight: t.height
                            }, i = t.width / t.height, e.optWidth = this.options.thumbnailWidth, e.optHeight = this.options.thumbnailHeight, (null == e.optWidth || null == e.optHeigh) && (null == e.optWidth && null == e.optHeight ? (e.optWidth = e.srcWidth, e.optHeight = e.srcHeight) : null == e.optWidth ? e.optWidth = i * e.optHeight : null == e.optHeight && (e.optHeight = 1 / i * e.optWidth)), n = e.optWidth / e.optHeight, t.height < e.optHeight || t.width < e.optWidth ? (e.trgHeight = e.srcHeight, e.trgWidth = e.srcWidth) : i > n ? (e.srcHeight = t.height, e.srcWidth = e.srcHeight * n) : (e.srcWidth = t.width, e.srcHeight = e.srcWidth / n), e.srcX = (t.width - e.srcWidth) / 2, e.srcY = (t.height - e.srcHeight) / 2, e
                        },
                        drop: function () {
                            return this.element.classList.remove("dz-drag-hover")
                        },
                        dragstart: l,
                        dragend: function () {
                            return this.element.classList.remove("dz-drag-hover")
                        },
                        dragenter: function () {
                            return this.element.classList.add("dz-drag-hover")
                        },
                        dragover: function () {
                            return this.element.classList.add("dz-drag-hover")
                        },
                        dragleave: function () {
                            return this.element.classList.remove("dz-drag-hover")
                        },
                        paste: l,
                        reset: function () {
                            return this.element.classList.remove("dz-started")
                        },
                        addedfile: function (t) {
                            var i, n, s, r, o, a, l, u, c, h, d, p, f, m = this;
                            for (this.element === this.previewsContainer && this.element.classList.add("dz-started"), t.previewElement = e.createElement(this.options.previewTemplate.trim()), t.previewTemplate = t.previewElement, this.previewsContainer.appendChild(t.previewElement), h = t.previewElement.querySelectorAll("[data-dz-name]"), r = 0, l = h.length; l > r; r++) i = h[r], i.textContent = t.name;
                            for (d = t.previewElement.querySelectorAll("[data-dz-size]"), o = 0, u = d.length; u > o; o++) i = d[o], i.innerHTML = this.filesize(t.size);
                            for (this.options.addRemoveLinks && (t._removeLink = e.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), t.previewElement.appendChild(t._removeLink)), n = function (i) {
                                return i.preventDefault(), i.stopPropagation(), t.status === e.UPLOADING ? e.confirm(m.options.dictCancelUploadConfirmation, function () {
                                    return m.removeFile(t)
                                }) : m.options.dictRemoveFileConfirmation ? e.confirm(m.options.dictRemoveFileConfirmation, function () {
                                    return m.removeFile(t)
                                }) : m.removeFile(t)
                            }, p = t.previewElement.querySelectorAll("[data-dz-remove]"), f = [], a = 0, c = p.length; c > a; a++) s = p[a], f.push(s.addEventListener("click", n));
                            return f
                        },
                        removedfile: function (t) {
                            var e;
                            return null != (e = t.previewElement) && e.parentNode.removeChild(t.previewElement), this._updateMaxFilesReachedClass()
                        },
                        thumbnail: function (t, e) {
                            var i, n, s, r, o;
                            for (t.previewElement.classList.remove("dz-file-preview"), t.previewElement.classList.add("dz-image-preview"), r = t.previewElement.querySelectorAll("[data-dz-thumbnail]"), o = [], n = 0, s = r.length; s > n; n++) i = r[n], i.alt = t.name, o.push(i.src = e);
                            return o
                        },
                        error: function (t, e) {
                            var i, n, s, r, o;
                            for (t.previewElement.classList.add("dz-error"), "String" != typeof e && e.error && (e = e.error), r = t.previewElement.querySelectorAll("[data-dz-errormessage]"), o = [], n = 0, s = r.length; s > n; n++) i = r[n], o.push(i.textContent = e);
                            return o
                        },
                        errormultiple: l,
                        processing: function (t) {
                            return t.previewElement.classList.add("dz-processing"), t._removeLink ? t._removeLink.textContent = this.options.dictCancelUpload : void 0
                        },
                        processingmultiple: l,
                        uploadprogress: function (t, e) {
                            var i, n, s, r, o;
                            for (r = t.previewElement.querySelectorAll("[data-dz-uploadprogress]"), o = [], n = 0, s = r.length; s > n; n++) i = r[n], o.push(i.style.width = "" + e + "%");
                            return o
                        },
                        totaluploadprogress: l,
                        sending: l,
                        sendingmultiple: l,
                        success: function (t) {
                            return t.previewElement.classList.add("dz-success")
                        },
                        successmultiple: l,
                        canceled: function (t) {
                            return this.emit("error", t, "Upload canceled.")
                        },
                        canceledmultiple: l,
                        complete: function (t) {
                            return t._removeLink ? t._removeLink.textContent = this.options.dictRemoveFile : void 0
                        },
                        completemultiple: l,
                        maxfilesexceeded: l,
                        maxfilesreached: l,
                        previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>\u2714</span></div>\n  <div class="dz-error-mark"><span>\u2718</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'
                    }, i = function () {
                        var t, e, i, n, s, r, o;
                        for (n = arguments[0], i = 2 <= arguments.length ? d.call(arguments, 1) : [], r = 0, o = i.length; o > r; r++) {
                            e = i[r];
                            for (t in e) s = e[t], n[t] = s
                        }
                        return n
                    }, e.prototype.getAcceptedFiles = function () {
                        var t, e, i, n, s;
                        for (n = this.files, s = [], e = 0, i = n.length; i > e; e++) t = n[e], t.accepted && s.push(t);
                        return s
                    }, e.prototype.getRejectedFiles = function () {
                        var t, e, i, n, s;
                        for (n = this.files, s = [], e = 0, i = n.length; i > e; e++) t = n[e], t.accepted || s.push(t);
                        return s
                    }, e.prototype.getFilesWithStatus = function (t) {
                        var e, i, n, s, r;
                        for (s = this.files, r = [], i = 0, n = s.length; n > i; i++) e = s[i], e.status === t && r.push(e);
                        return r
                    }, e.prototype.getQueuedFiles = function () {
                        return this.getFilesWithStatus(e.QUEUED)
                    }, e.prototype.getUploadingFiles = function () {
                        return this.getFilesWithStatus(e.UPLOADING)
                    }, e.prototype.getActiveFiles = function () {
                        var t, i, n, s, r;
                        for (s = this.files, r = [], i = 0, n = s.length; n > i; i++) t = s[i], (t.status === e.UPLOADING || t.status === e.QUEUED) && r.push(t);
                        return r
                    }, e.prototype.init = function () {
                        var t, i, n, s, r, o, a, l = this;
                        for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(e.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (n = function () {
                            return l.hiddenFileInput && document.body.removeChild(l.hiddenFileInput), l.hiddenFileInput = document.createElement("input"), l.hiddenFileInput.setAttribute("type", "file"), (null == l.options.maxFiles || l.options.maxFiles > 1) && l.hiddenFileInput.setAttribute("multiple", "multiple"), l.hiddenFileInput.className = "dz-hidden-input", null != l.options.acceptedFiles && l.hiddenFileInput.setAttribute("accept", l.options.acceptedFiles), l.hiddenFileInput.style.visibility = "hidden", l.hiddenFileInput.style.position = "absolute", l.hiddenFileInput.style.top = "0", l.hiddenFileInput.style.left = "0", l.hiddenFileInput.style.height = "0", l.hiddenFileInput.style.width = "0", document.body.appendChild(l.hiddenFileInput), l.hiddenFileInput.addEventListener("change", function () {
                                var t, e, i, s;
                                if (e = l.hiddenFileInput.files, e.length)
                                    for (i = 0, s = e.length; s > i; i++) t = e[i], l.addFile(t);
                                return n()
                            })
                        })(), this.URL = null != (o = window.URL) ? o : window.webkitURL, a = this.events, s = 0, r = a.length; r > s; s++) t = a[s], this.on(t, this.options[t]);
                        return this.on("uploadprogress", function () {
                            return l.updateTotalUploadProgress()
                        }), this.on("removedfile", function () {
                            return l.updateTotalUploadProgress()
                        }), this.on("canceled", function (t) {
                            return l.emit("complete", t)
                        }), this.on("complete", function () {
                            return 0 === l.getUploadingFiles().length && 0 === l.getQueuedFiles().length ? setTimeout(function () {
                                return l.emit("queuecomplete")
                            }, 0) : void 0
                        }), i = function (t) {
                            return t.stopPropagation(), t.preventDefault ? t.preventDefault() : t.returnValue = !1
                        }, this.listeners = [{
                            element: this.element,
                            events: {
                                dragstart: function (t) {
                                    return l.emit("dragstart", t)
                                },
                                dragenter: function (t) {
                                    return i(t), l.emit("dragenter", t)
                                },
                                dragover: function (t) {
                                    var e;
                                    try {
                                        e = t.dataTransfer.effectAllowed
                                    } catch (n) {}
                                    return t.dataTransfer.dropEffect = "move" === e || "linkMove" === e ? "move" : "copy", i(t), l.emit("dragover", t)
                                },
                                dragleave: function (t) {
                                    return l.emit("dragleave", t)
                                },
                                drop: function (t) {
                                    return i(t), l.drop(t)
                                },
                                dragend: function (t) {
                                    return l.emit("dragend", t)
                                }
                            }
                        }], this.clickableElements.forEach(function (t) {
                            return l.listeners.push({
                                element: t,
                                events: {
                                    click: function (i) {
                                        return t !== l.element || i.target === l.element || e.elementInside(i.target, l.element.querySelector(".dz-message")) ? l.hiddenFileInput.click() : void 0
                                    }
                                }
                            })
                        }), this.enable(), this.options.init.call(this)
                    }, e.prototype.destroy = function () {
                        var t;
                        return this.disable(), this.removeAllFiles(!0), (null != (t = this.hiddenFileInput) ? t.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, e.instances.splice(e.instances.indexOf(this), 1)
                    }, e.prototype.updateTotalUploadProgress = function () {
                        var t, e, i, n, s, r, o, a;
                        if (n = 0, i = 0, t = this.getActiveFiles(), t.length) {
                            for (a = this.getActiveFiles(), r = 0, o = a.length; o > r; r++) e = a[r], n += e.upload.bytesSent, i += e.upload.total;
                            s = 100 * n / i
                        } else s = 100;
                        return this.emit("totaluploadprogress", s, i, n)
                    }, e.prototype._getParamName = function (t) {
                        return "function" == typeof this.options.paramName ? this.options.paramName(t) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + t + "]" : "")
                    }, e.prototype.getFallbackForm = function () {
                        var t, i, n, s;
                        return (t = this.getExistingFallback()) ? t : (n = '<div class="dz-fallback">', this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"), n += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', i = e.createElement(n), "FORM" !== this.element.tagName ? (s = e.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), s.appendChild(i)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != s ? s : i)
                    }, e.prototype.getExistingFallback = function () {
                        var t, e, i, n, s, r;
                        for (e = function (t) {
                            var e, i, n;
                            for (i = 0, n = t.length; n > i; i++)
                                if (e = t[i], /(^| )fallback($| )/.test(e.className)) return e
                        }, r = ["div", "form"], n = 0, s = r.length; s > n; n++)
                            if (i = r[n], t = e(this.element.getElementsByTagName(i))) return t
                    }, e.prototype.setupEventListeners = function () {
                        var t, e, i, n, s, r, o;
                        for (r = this.listeners, o = [], n = 0, s = r.length; s > n; n++) t = r[n], o.push(function () {
                            var n, s;
                            n = t.events, s = [];
                            for (e in n) i = n[e], s.push(t.element.addEventListener(e, i, !1));
                            return s
                        }());
                        return o
                    }, e.prototype.removeEventListeners = function () {
                        var t, e, i, n, s, r, o;
                        for (r = this.listeners, o = [], n = 0, s = r.length; s > n; n++) t = r[n], o.push(function () {
                            var n, s;
                            n = t.events, s = [];
                            for (e in n) i = n[e], s.push(t.element.removeEventListener(e, i, !1));
                            return s
                        }());
                        return o
                    }, e.prototype.disable = function () {
                        var t, e, i, n, s;
                        for (this.clickableElements.forEach(function (t) {
                            return t.classList.remove("dz-clickable")
                        }), this.removeEventListeners(), n = this.files, s = [], e = 0, i = n.length; i > e; e++) t = n[e], s.push(this.cancelUpload(t));
                        return s
                    }, e.prototype.enable = function () {
                        return this.clickableElements.forEach(function (t) {
                            return t.classList.add("dz-clickable")
                        }), this.setupEventListeners()
                    }, e.prototype.filesize = function (t) {
                        var e;
                        return t >= 109951162777.6 ? (t /= 109951162777.6, e = "TiB") : t >= 107374182.4 ? (t /= 107374182.4, e = "GiB") : t >= 104857.6 ? (t /= 104857.6, e = "MiB") : t >= 102.4 ? (t /= 102.4, e = "KiB") : (t = 10 * t, e = "b"), "<strong>" + Math.round(t) / 10 + "</strong> " + e
                    }, e.prototype._updateMaxFilesReachedClass = function () {
                        return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
                    }, e.prototype.drop = function (t) {
                        var e, i;
                        t.dataTransfer && (this.emit("drop", t), e = t.dataTransfer.files, e.length && (i = t.dataTransfer.items, i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(e)))
                    }, e.prototype.paste = function (t) {
                        var e, i;
                        if (null != (null != t && null != (i = t.clipboardData) ? i.items : void 0)) return this.emit("paste", t), e = t.clipboardData.items, e.length ? this._addFilesFromItems(e) : void 0
                    }, e.prototype.handleFiles = function (t) {
                        var e, i, n, s;
                        for (s = [], i = 0, n = t.length; n > i; i++) e = t[i], s.push(this.addFile(e));
                        return s
                    }, e.prototype._addFilesFromItems = function (t) {
                        var e, i, n, s, r;
                        for (r = [], n = 0, s = t.length; s > n; n++) i = t[n], r.push(null != i.webkitGetAsEntry && (e = i.webkitGetAsEntry()) ? e.isFile ? this.addFile(i.getAsFile()) : e.isDirectory ? this._addFilesFromDirectory(e, e.name) : void 0 : null != i.getAsFile ? null == i.kind || "file" === i.kind ? this.addFile(i.getAsFile()) : void 0 : void 0);
                        return r
                    }, e.prototype._addFilesFromDirectory = function (t, e) {
                        var i, n, s = this;
                        return i = t.createReader(), n = function (t) {
                            var i, n, r;
                            for (n = 0, r = t.length; r > n; n++) i = t[n], i.isFile ? i.file(function (t) {
                                return s.options.ignoreHiddenFiles && "." === t.name.substring(0, 1) ? void 0 : (t.fullPath = "" + e + "/" + t.name, s.addFile(t))
                            }) : i.isDirectory && s._addFilesFromDirectory(i, "" + e + "/" + i.name)
                        }, i.readEntries(n, function (t) {
                            return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(t) : void 0
                        })
                    }, e.prototype.accept = function (t, i) {
                        return t.size > 1024 * this.options.maxFilesize * 1024 ? i(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(t.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : e.isValidFile(t, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", t)) : this.options.accept.call(this, t, i) : i(this.options.dictInvalidFileType)
                    }, e.prototype.addFile = function (t) {
                        var i = this;
                        return t.upload = {
                            progress: 0,
                            total: t.size,
                            bytesSent: 0
                        }, this.files.push(t), t.status = e.ADDED, this.emit("addedfile", t), this._enqueueThumbnail(t), this.accept(t, function (e) {
                            return e ? (t.accepted = !1, i._errorProcessing([t], e)) : (t.accepted = !0, i.options.autoQueue && i.enqueueFile(t)), i._updateMaxFilesReachedClass()
                        })
                    }, e.prototype.enqueueFiles = function (t) {
                        var e, i, n;
                        for (i = 0, n = t.length; n > i; i++) e = t[i], this.enqueueFile(e);
                        return null
                    }, e.prototype.enqueueFile = function (t) {
                        var i = this;
                        if (t.status !== e.ADDED || t.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                        return t.status = e.QUEUED, this.options.autoProcessQueue ? setTimeout(function () {
                            return i.processQueue()
                        }, 0) : void 0
                    }, e.prototype._thumbnailQueue = [], e.prototype._processingThumbnail = !1, e.prototype._enqueueThumbnail = function (t) {
                        var e = this;
                        return this.options.createImageThumbnails && t.type.match(/image.*/) && t.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(t), setTimeout(function () {
                            return e._processThumbnailQueue()
                        }, 0)) : void 0
                    }, e.prototype._processThumbnailQueue = function () {
                        var t = this;
                        if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) return this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function () {
                            return t._processingThumbnail = !1, t._processThumbnailQueue()
                        })
                    }, e.prototype.removeFile = function (t) {
                        return t.status === e.UPLOADING && this.cancelUpload(t), this.files = u(this.files, t), this.emit("removedfile", t), 0 === this.files.length ? this.emit("reset") : void 0
                    }, e.prototype.removeAllFiles = function (t) {
                        var i, n, s, r;
                        for (null == t && (t = !1), r = this.files.slice(), n = 0, s = r.length; s > n; n++) i = r[n], (i.status !== e.UPLOADING || t) && this.removeFile(i);
                        return null
                    }, e.prototype.createThumbnail = function (t, e) {
                        var i, n = this;
                        return i = new FileReader, i.onload = function () {
                            var s;
                            return s = document.createElement("img"), s.onload = function () {
                                var i, r, o, l, u, c, h, d;
                                return t.width = s.width, t.height = s.height, o = n.options.resize.call(n, t), null == o.trgWidth && (o.trgWidth = o.optWidth), null == o.trgHeight && (o.trgHeight = o.optHeight), i = document.createElement("canvas"), r = i.getContext("2d"), i.width = o.trgWidth, i.height = o.trgHeight, a(r, s, null != (u = o.srcX) ? u : 0, null != (c = o.srcY) ? c : 0, o.srcWidth, o.srcHeight, null != (h = o.trgX) ? h : 0, null != (d = o.trgY) ? d : 0, o.trgWidth, o.trgHeight), l = i.toDataURL("image/png"), n.emit("thumbnail", t, l), null != e ? e() : void 0
                            }, s.src = i.result
                        }, i.readAsDataURL(t)
                    }, e.prototype.processQueue = function () {
                        var t, e, i, n;
                        if (e = this.options.parallelUploads, i = this.getUploadingFiles().length, t = i, !(i >= e) && (n = this.getQueuedFiles(), n.length > 0)) {
                            if (this.options.uploadMultiple) return this.processFiles(n.slice(0, e - i));
                            for (; e > t;) {
                                if (!n.length) return;
                                this.processFile(n.shift()), t++
                            }
                        }
                    }, e.prototype.processFile = function (t) {
                        return this.processFiles([t])
                    }, e.prototype.processFiles = function (t) {
                        var i, n, s;
                        for (n = 0, s = t.length; s > n; n++) i = t[n], i.processing = !0, i.status = e.UPLOADING, this.emit("processing", i);
                        return this.options.uploadMultiple && this.emit("processingmultiple", t), this.uploadFiles(t)
                    }, e.prototype._getFilesWithXhr = function (t) {
                        var e, i;
                        return i = function () {
                            var i, n, s, r;
                            for (s = this.files, r = [], i = 0, n = s.length; n > i; i++) e = s[i], e.xhr === t && r.push(e);
                            return r
                        }.call(this)
                    }, e.prototype.cancelUpload = function (t) {
                        var i, n, s, r, o, a, l;
                        if (t.status === e.UPLOADING) {
                            for (n = this._getFilesWithXhr(t.xhr), s = 0, o = n.length; o > s; s++) i = n[s], i.status = e.CANCELED;
                            for (t.xhr.abort(), r = 0, a = n.length; a > r; r++) i = n[r], this.emit("canceled", i);
                            this.options.uploadMultiple && this.emit("canceledmultiple", n)
                        } else((l = t.status) === e.ADDED || l === e.QUEUED) && (t.status = e.CANCELED, this.emit("canceled", t), this.options.uploadMultiple && this.emit("canceledmultiple", [t]));
                        return this.options.autoProcessQueue ? this.processQueue() : void 0
                    }, e.prototype.uploadFile = function (t) {
                        return this.uploadFiles([t])
                    }, e.prototype.uploadFiles = function (t) {
                        var n, s, r, o, a, l, u, c, h, d, p, f, m, g, v, y, _, b, w, x, C, k, E, T, F, S, A, N, D, P, O, $, M = this;
                        for (_ = new XMLHttpRequest, b = 0, k = t.length; k > b; b++) n = t[b], n.xhr = _;
                        _.open(this.options.method, this.options.url, !0), _.withCredentials = !!this.options.withCredentials, g = null, r = function () {
                            var e, i, s;
                            for (s = [], e = 0, i = t.length; i > e; e++) n = t[e], s.push(M._errorProcessing(t, g || M.options.dictResponseError.replace("{{statusCode}}", _.status), _));
                            return s
                        }, v = function (e) {
                            var i, s, r, o, a, l, u, c, h;
                            if (null != e)
                                for (s = 100 * e.loaded / e.total, r = 0, l = t.length; l > r; r++) n = t[r], n.upload = {
                                    progress: s,
                                    total: e.total,
                                    bytesSent: e.loaded
                                };
                            else {
                                for (i = !0, s = 100, o = 0, u = t.length; u > o; o++) n = t[o], (100 !== n.upload.progress || n.upload.bytesSent !== n.upload.total) && (i = !1), n.upload.progress = s, n.upload.bytesSent = n.upload.total;
                                if (i) return
                            }
                            for (h = [], a = 0, c = t.length; c > a; a++) n = t[a], h.push(M.emit("uploadprogress", n, s, n.upload.bytesSent));
                            return h
                        }, _.onload = function (i) {
                            var n;
                            if (t[0].status !== e.CANCELED && 4 === _.readyState) {
                                if (g = _.responseText, _.getResponseHeader("content-type") && ~_.getResponseHeader("content-type").indexOf("application/json")) try {
                                    g = JSON.parse(g)
                                } catch (s) {
                                    i = s, g = "Invalid JSON response from server."
                                }
                                return v(), 200 <= (n = _.status) && 300 > n ? M._finished(t, g, i) : r()
                            }
                        }, _.onerror = function () {
                            return t[0].status !== e.CANCELED ? r() : void 0
                        }, m = null != (A = _.upload) ? A : _, m.onprogress = v, l = {
                            Accept: "application/json",
                            "Cache-Control": "no-cache",
                            "X-Requested-With": "XMLHttpRequest"
                        }, this.options.headers && i(l, this.options.headers);
                        for (o in l) a = l[o], _.setRequestHeader(o, a);
                        if (s = new FormData, this.options.params) {
                            N = this.options.params;
                            for (p in N) y = N[p], s.append(p, y)
                        }
                        for (w = 0, E = t.length; E > w; w++) n = t[w], this.emit("sending", n, _, s);
                        if (this.options.uploadMultiple && this.emit("sendingmultiple", t, _, s), "FORM" === this.element.tagName)
                            for (D = this.element.querySelectorAll("input, textarea, select, button"), x = 0, T = D.length; T > x; x++)
                                if (c = D[x], h = c.getAttribute("name"), d = c.getAttribute("type"), "SELECT" === c.tagName && c.hasAttribute("multiple"))
                                    for (P = c.options, C = 0, F = P.length; F > C; C++) f = P[C], f.selected && s.append(h, f.value);
                                else(!d || "checkbox" !== (O = d.toLowerCase()) && "radio" !== O || c.checked) && s.append(h, c.value);
                        for (u = S = 0, $ = t.length - 1; $ >= 0 ? $ >= S : S >= $; u = $ >= 0 ? ++S : --S) s.append(this._getParamName(u), t[u], t[u].name);
                        return _.send(s)
                    }, e.prototype._finished = function (t, i, n) {
                        var s, r, o;
                        for (r = 0, o = t.length; o > r; r++) s = t[r], s.status = e.SUCCESS, this.emit("success", s, i, n), this.emit("complete", s);
                        return this.options.uploadMultiple && (this.emit("successmultiple", t, i, n), this.emit("completemultiple", t)), this.options.autoProcessQueue ? this.processQueue() : void 0
                    }, e.prototype._errorProcessing = function (t, i, n) {
                        var s, r, o;
                        for (r = 0, o = t.length; o > r; r++) s = t[r], s.status = e.ERROR, this.emit("error", s, i, n), this.emit("complete", s);
                        return this.options.uploadMultiple && (this.emit("errormultiple", t, i, n), this.emit("completemultiple", t)), this.options.autoProcessQueue ? this.processQueue() : void 0
                    }, e
                }(n), e.version = "3.9.0", e.options = {}, e.optionsForElement = function (t) {
                    return t.getAttribute("id") ? e.options[s(t.getAttribute("id"))] : void 0
                }, e.instances = [], e.forElement = function (t) {
                    if ("string" == typeof t && (t = document.querySelector(t)), null == (null != t ? t.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                    return t.dropzone
                }, e.autoDiscover = !0, e.discover = function () {
                    var t, i, n, s, r, o;
                    for (document.querySelectorAll ? n = document.querySelectorAll(".dropzone") : (n = [], t = function (t) {
                        var e, i, s, r;
                        for (r = [], i = 0, s = t.length; s > i; i++) e = t[i], r.push(/(^| )dropzone($| )/.test(e.className) ? n.push(e) : void 0);
                        return r
                    }, t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"))), o = [], s = 0, r = n.length; r > s; s++) i = n[s], o.push(e.optionsForElement(i) !== !1 ? new e(i) : void 0);
                    return o
                }, e.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], e.isBrowserSupported = function () {
                    var t, i, n, s, r;
                    if (t = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                        if ("classList" in document.createElement("a"))
                            for (r = e.blacklistedBrowsers, n = 0, s = r.length; s > n; n++) i = r[n], i.test(navigator.userAgent) && (t = !1);
                        else t = !1;
                    else t = !1;
                    return t
                }, u = function (t, e) {
                    var i, n, s, r;
                    for (r = [], n = 0, s = t.length; s > n; n++) i = t[n], i !== e && r.push(i);
                    return r
                }, s = function (t) {
                    return t.replace(/[\-_](\w)/g, function (t) {
                        return t.charAt(1).toUpperCase()
                    })
                }, e.createElement = function (t) {
                    var e;
                    return e = document.createElement("div"), e.innerHTML = t, e.childNodes[0]
                }, e.elementInside = function (t, e) {
                    if (t === e) return !0;
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                    return !1
                }, e.getElement = function (t, e) {
                    var i;
                    if ("string" == typeof t ? i = document.querySelector(t) : null != t.nodeType && (i = t), null == i) throw new Error("Invalid `" + e + "` option provided. Please provide a CSS selector or a plain HTML element.");
                    return i
                }, e.getElements = function (t, e) {
                    var i, n, s, r, o, a, l, u;
                    if (t instanceof Array) {
                        s = [];
                        try {
                            for (r = 0, a = t.length; a > r; r++) n = t[r], s.push(this.getElement(n, e))
                        } catch (c) {
                            i = c, s = null
                        }
                    } else if ("string" == typeof t)
                        for (s = [], u = document.querySelectorAll(t), o = 0, l = u.length; l > o; o++) n = u[o], s.push(n);
                    else null != t.nodeType && (s = [t]); if (null == s || !s.length) throw new Error("Invalid `" + e + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
                    return s
                }, e.confirm = function (t, e, i) {
                    return window.confirm(t) ? e() : null != i ? i() : void 0
                }, e.isValidFile = function (t, e) {
                    var i, n, s, r, o;
                    if (!e) return !0;
                    for (e = e.split(","), n = t.type, i = n.replace(/\/.*$/, ""), r = 0, o = e.length; o > r; r++)
                        if (s = e[r], s = s.trim(), "." === s.charAt(0)) {
                            if (-1 !== t.name.toLowerCase().indexOf(s.toLowerCase(), t.name.length - s.length)) return !0
                        } else if (/\/\*$/.test(s)) {
                        if (i === s.replace(/\/.*$/, "")) return !0
                    } else if (n === s) return !0;
                    return !1
                }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (t) {
                    return this.each(function () {
                        return new e(this, t)
                    })
                }), "undefined" != typeof i && null !== i ? i.exports = e : window.Dropzone = e, e.ADDED = "added", e.QUEUED = "queued", e.ACCEPTED = e.QUEUED, e.UPLOADING = "uploading", e.PROCESSING = e.UPLOADING, e.CANCELED = "canceled", e.ERROR = "error", e.SUCCESS = "success", o = function (t) {
                    var e, i, n, s, r, o, a, l, u, c;
                    for (a = t.naturalWidth, o = t.naturalHeight, i = document.createElement("canvas"), i.width = 1, i.height = o, n = i.getContext("2d"), n.drawImage(t, 0, 0), s = n.getImageData(0, 0, 1, o).data, c = 0, r = o, l = o; l > c;) e = s[4 * (l - 1) + 3], 0 === e ? r = l : c = l, l = r + c >> 1;
                    return u = l / o, 0 === u ? 1 : u
                }, a = function (t, e, i, n, s, r, a, l, u, c) {
                    var h;
                    return h = o(e), t.drawImage(e, i, n, s, r, a, l, u, c / h)
                }, r = function (t, e) {
                    var i, n, s, r, o, a, l, u, c;
                    if (s = !1, c = !0, n = t.document, u = n.documentElement, i = n.addEventListener ? "addEventListener" : "attachEvent", l = n.addEventListener ? "removeEventListener" : "detachEvent", a = n.addEventListener ? "" : "on", r = function (i) {
                        return "readystatechange" !== i.type || "complete" === n.readyState ? (("load" === i.type ? t : n)[l](a + i.type, r, !1), !s && (s = !0) ? e.call(t, i.type || i) : void 0) : void 0
                    }, o = function () {
                        var t;
                        try {
                            u.doScroll("left")
                        } catch (e) {
                            return t = e, void setTimeout(o, 50)
                        }
                        return r("poll")
                    }, "complete" !== n.readyState) {
                        if (n.createEventObject && u.doScroll) {
                            try {
                                c = !t.frameElement
                            } catch (h) {}
                            c && o()
                        }
                        return n[i](a + "DOMContentLoaded", r, !1), n[i](a + "readystatechange", r, !1), t[i](a + "load", r, !1)
                    }
                }, e._autoDiscoverFunction = function () {
                    return e.autoDiscover ? e.discover() : void 0
                }, r(window, e._autoDiscoverFunction)
            }).call(this)
        }), "object" == typeof exports ? module.exports = t("dropzone") : "function" == typeof define && define.amd ? define([], function () {
            return t("dropzone")
        }) : this.Dropzone = t("dropzone")
    }(),
    function () {
        var t, e, i, n, s, r, o, a, l, u, c, h, d, p, f, m, g, v, y, _, b, w, x, C, k, E, T, F, S, A, N, D, P, O, $, M, L, j, I, H, q, R, W, z, B, U, V, X, Q, G = [].indexOf || function (t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            Y = {}.hasOwnProperty,
            K = function (t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) Y.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            J = [].slice;
        S = {}, h = 10, z = !1, m = null, F = null, $ = null, f = null, X = null, _ = function (t) {
            var e;
            return t = new i(t), H(), c(), M(t), z && (e = B(t.absolute)) ? (b(e), w(t)) : w(t, W)
        }, B = function (t) {
            var e;
            return e = S[t], e && !e.transitionCacheDisabled ? e : void 0
        }, g = function (t) {
            return null == t && (t = !0), z = t
        }, w = function (t, e) {
            return null == e && (e = function () {
                return function () {}
            }(this)), U("page:fetch", {
                url: t.absolute
            }), null != X && X.abort(), X = new XMLHttpRequest, X.open("GET", t.withoutHashForIE10compatibility(), !0), X.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), X.setRequestHeader("X-XHR-Referer", $), X.onload = function () {
                var i;
                return U("page:receive"), (i = P()) ? (d.apply(null, y(i)), L(), e(), U("page:load")) : document.location.href = t.absolute
            }, X.onloadend = function () {
                return X = null
            }, X.onerror = function () {
                return document.location.href = t.absolute
            }, X.send()
        }, b = function (t) {
            return null != X && X.abort(), d(t.title, t.body), O(t), U("page:restore")
        }, c = function () {
            var t;
            return t = new i(m.url), S[t.absolute] = {
                url: t.relative,
                body: document.body,
                title: document.title,
                positionY: window.pageYOffset,
                positionX: window.pageXOffset,
                cachedAt: (new Date).getTime(),
                transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
            }, p(h)
        }, N = function (t) {
            return null == t && (t = h), /^[\d]+$/.test(t) ? h = parseInt(t) : void 0
        }, p = function (t) {
            var e, i, n, s, r, o;
            for (n = Object.keys(S), e = n.map(function (t) {
                return S[t].cachedAt
            }).sort(function (t, e) {
                return e - t
            }), o = [], s = 0, r = n.length; r > s; s++) i = n[s], S[i].cachedAt <= e[t] && (U("page:expire", S[i]), o.push(delete S[i]));
            return o
        }, d = function (e, i, n, s) {
            return document.title = e, document.documentElement.replaceChild(i, document.body), null != n && t.update(n), s && v(), m = window.history.state, U("page:change"), U("page:update")
        }, v = function () {
            var t, e, i, n, s, r, o, a, l, u, c, h;
            for (r = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), o = 0, l = r.length; l > o; o++)
                if (s = r[o], "" === (c = s.type) || "text/javascript" === c) {
                    for (e = document.createElement("script"), h = s.attributes, a = 0, u = h.length; u > a; a++) t = h[a], e.setAttribute(t.name, t.value);
                    e.appendChild(document.createTextNode(s.innerHTML)), n = s.parentNode, i = s.nextSibling, n.removeChild(s), n.insertBefore(e, i)
                }
        }, q = function (t) {
            return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
        }, M = function (t) {
            return (t = new i(t)).absolute !== $ ? window.history.pushState({
                turbolinks: !0,
                url: t.absolute
            }, "", t.absolute) : void 0
        }, L = function () {
            var t, e;
            return (t = X.getResponseHeader("X-XHR-Redirected-To")) ? (t = new i(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(m, "", t.href + e)) : void 0
        }, H = function () {
            return $ = document.location.href
        }, I = function () {
            return window.history.replaceState({
                turbolinks: !0,
                url: document.location.href
            }, "", document.location.href)
        }, j = function () {
            return m = window.history.state
        }, O = function (t) {
            return window.scrollTo(t.positionX, t.positionY)
        }, W = function () {
            return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
        }, D = function (t) {
            var e, i;
            return e = (null != (i = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? i[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", e
        }, U = function (t, e) {
            var i;
            return i = document.createEvent("Events"), e && (i.data = e), i.initEvent(t, !0, !0), document.dispatchEvent(i)
        }, A = function () {
            return !U("page:before-change")
        }, P = function () {
            var t, e, i, n, s, r;
            return e = function () {
                var t;
                return 400 <= (t = X.status) && 600 > t
            }, r = function () {
                return X.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
            }, n = function (t) {
                var e, i, n, s, r;
                for (s = t.head.childNodes, r = [], i = 0, n = s.length; n > i; i++) e = s[i], null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && r.push(e.getAttribute("src") || e.getAttribute("href"));
                return r
            }, t = function (t) {
                var e;
                return F || (F = n(document)), e = n(t), e.length !== F.length || s(e, F).length !== F.length
            }, s = function (t, e) {
                var i, n, s, r, o;
                for (t.length > e.length && (r = [e, t], t = r[0], e = r[1]), o = [], n = 0, s = t.length; s > n; n++) i = t[n], G.call(e, i) >= 0 && o.push(i);
                return o
            }, !e() && r() && (i = f(X.responseText), i && !t(i)) ? i : void 0
        }, y = function (e) {
            var i;
            return i = e.querySelector("title"), [null != i ? i.textContent : void 0, q(e.body), t.get(e).token, "runScripts"]
        }, t = {
            get: function (t) {
                var e;
                return null == t && (t = document), {
                    node: e = t.querySelector('meta[name="csrf-token"]'),
                    token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0
                }
            },
            update: function (t) {
                var e;
                return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
            }
        }, s = function () {
            var t, e, i, n, s, r;
            e = function (t) {
                return (new DOMParser).parseFromString(t, "text/html")
            }, t = function (t) {
                var e;
                return e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, e
            }, i = function (t) {
                var e;
                return e = document.implementation.createHTMLDocument(""), e.open("replace"), e.write(t), e.close(), e
            };
            try {
                if (window.DOMParser) return s = e("<html><body><p>test"), e
            } catch (o) {
                return n = o, s = t("<html><body><p>test"), t
            } finally {
                if (1 !== (null != s && null != (r = s.body) ? r.childNodes.length : void 0)) return i
            }
        }, i = function () {
            function t(e) {
                return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
            }
            return t.prototype.withoutHash = function () {
                return this.href.replace(this.hash, "")
            }, t.prototype.withoutHashForIE10compatibility = function () {
                return this.withoutHash()
            }, t.prototype.hasNoHash = function () {
                return 0 === this.hash.length
            }, t.prototype._parse = function () {
                var t;
                return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
            }, t
        }(), n = function (t) {
            function e(t) {
                return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, void e.__super__.constructor.apply(this, arguments))
            }
            return K(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function () {
                var t, i, n, s;
                for (i = 1 <= arguments.length ? J.call(arguments, 0) : [], n = 0, s = i.length; s > n; n++) t = i[n], e.HTML_EXTENSIONS.push(t);
                return e.HTML_EXTENSIONS
            }, e.prototype.shouldIgnore = function () {
                return this._crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
            }, e.prototype._crossOrigin = function () {
                return this.origin !== (new i).origin
            }, e.prototype._anchored = function () {
                var t;
                return (this.hash && this.withoutHash()) === (t = new i).withoutHash() || this.href === t.href + "#"
            }, e.prototype._nonHtml = function () {
                return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
            }, e.prototype._optOut = function () {
                var t, e;
                for (e = this.link; !t && e !== document;) t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
                return t
            }, e.prototype._target = function () {
                return 0 !== this.link.target.length
            }, e
        }(i), e = function () {
            function t(t) {
                this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (A() || V(this.link.href), this.event.preventDefault()))
            }
            return t.installHandlerLast = function (e) {
                return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
            }, t.handle = function (e) {
                return new t(e)
            }, t.prototype._extractLink = function () {
                var t;
                for (t = this.event.target; t.parentNode && "A" !== t.nodeName;) t = t.parentNode;
                return "A" === t.nodeName && 0 !== t.href.length ? this.link = new n(t) : void 0
            }, t.prototype._validForTurbolinks = function () {
                return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
            }, t.prototype._nonStandardClick = function () {
                return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
            }, t
        }(), u = function (t) {
            return setTimeout(t, 500)
        }, k = function () {
            return document.addEventListener("DOMContentLoaded", function () {
                return U("page:change"), U("page:update")
            }, !0)
        }, T = function () {
            return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function (t, e) {
                return jQuery.trim(e.responseText) ? U("page:update") : void 0
            }) : void 0
        }, E = function (t) {
            var e, n;
            return (null != (n = t.state) ? n.turbolinks : void 0) ? (e = S[new i(t.state.url).absolute]) ? (c(), b(e)) : V(t.target.location.href) : void 0
        }, C = function () {
            return I(), j(), f = s(), document.addEventListener("click", e.installHandlerLast, !0), u(function () {
                return window.addEventListener("popstate", E, !1)
            })
        }, x = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), a = window.history && window.history.pushState && window.history.replaceState && x, r = !navigator.userAgent.match(/CriOS\//), R = "GET" === (Q = D("request_method")) || "" === Q, l = a && r && R, o = document.addEventListener && document.createEvent, o && (k(), T()), l ? (V = _, C()) : V = function (t) {
            return document.location.href = t
        }, this.Turbolinks = {
            visit: V,
            pagesCached: N,
            enableTransitionCache: g,
            allowLinkExtensions: n.allowExtensions,
            supported: l
        }
    }.call(this), $(document).ready(function () {
        $("select").chosen({
            no_results_text: "Oops, nothing found!"
        })
    }),
    function () {}.call(this),
    function (t) {
        var e = {
            init: function (i) {
                return this.each(function () {
                    var n = this,
                        s = t(n).empty();
                    n.opt = t.extend(!0, {}, t.fn.raty.defaults, i), s.data("settings", n.opt), n.opt.number = "function" == typeof n.opt.number ? n.opt.number.call(n) : e.between(n.opt.number, 0, 20), "/" != n.opt.path.substring(n.opt.path.length - 1, n.opt.path.length) && (n.opt.path += "/"), "function" == typeof n.opt.score && (n.opt.score = n.opt.score.call(n)), n.opt.score && (n.opt.score = e.between(n.opt.score, 0, n.opt.number));
                    for (var r = 1; r <= n.opt.number; r++) t("<img />", {
                        src: n.opt.path + (!n.opt.score || n.opt.score < r ? n.opt.starOff : n.opt.starOn),
                        alt: r,
                        title: r <= n.opt.hints.length && null !== n.opt.hints[r - 1] ? n.opt.hints[r - 1] : r
                    }).appendTo(n), n.opt.space && s.append(r < n.opt.number ? "&#160;" : "");
                    n.stars = s.children('img:not(".raty-cancel")'), n.score = t("<input />", {
                        type: "hidden",
                        name: n.opt.scoreName
                    }).appendTo(n), n.opt.score && n.opt.score > 0 && (n.score.val(n.opt.score), e.roundStar.call(n, n.opt.score)), n.opt.iconRange && e.fill.call(n, n.opt.score), e.setTarget.call(n, n.opt.score, n.opt.targetKeep);
                    var o = n.opt.space ? 4 : 0,
                        a = n.opt.width || n.opt.number * n.opt.size + n.opt.number * o;
                    n.opt.cancel && (n.cancel = t("<img />", {
                        src: n.opt.path + n.opt.cancelOff,
                        alt: "x",
                        title: n.opt.cancelHint,
                        "class": "raty-cancel"
                    }), "left" == n.opt.cancelPlace ? s.prepend("&#160;").prepend(n.cancel) : s.append("&#160;").append(n.cancel), a += n.opt.size + o), n.opt.readOnly ? (e.fixHint.call(n), n.cancel && n.cancel.hide()) : (s.css("cursor", "pointer"), e.bindAction.call(n)), s.css("width", a)
                })
            },
            between: function (t, e, i) {
                return Math.min(Math.max(parseFloat(t), e), i)
            },
            bindAction: function () {
                var i = this,
                    n = t(i);
                n.mouseleave(function () {
                    var t = i.score.val() || void 0;
                    e.initialize.call(i, t), e.setTarget.call(i, t, i.opt.targetKeep), i.opt.mouseover && i.opt.mouseover.call(i, t)
                });
                var s = i.opt.half ? "mousemove" : "mouseover";
                i.opt.cancel && i.cancel.mouseenter(function () {
                    t(this).attr("src", i.opt.path + i.opt.cancelOn), i.stars.attr("src", i.opt.path + i.opt.starOff), e.setTarget.call(i, null, !0), i.opt.mouseover && i.opt.mouseover.call(i, null)
                }).mouseleave(function () {
                    t(this).attr("src", i.opt.path + i.opt.cancelOff), i.opt.mouseover && i.opt.mouseover.call(i, i.score.val() || null)
                }).click(function (t) {
                    i.score.removeAttr("value"), i.opt.click && i.opt.click.call(i, null, t)
                }), i.stars.bind(s, function (s) {
                    var r = parseInt(this.alt, 10);
                    if (i.opt.half) {
                        var o = parseFloat((s.pageX - t(this).offset().left) / i.opt.size),
                            a = o > .5 ? 1 : .5;
                        r = parseFloat(this.alt) - 1 + a, e.fill.call(i, r), i.opt.precision && (r = r - a + o), e.showHalf.call(i, r)
                    } else e.fill.call(i, r);
                    n.data("score", r), e.setTarget.call(i, r, !0), i.opt.mouseover && i.opt.mouseover.call(i, r, s)
                }).click(function (t) {
                    i.score.val(i.opt.half || i.opt.precision ? n.data("score") : this.alt), i.opt.click && i.opt.click.call(i, i.score.val(), t)
                })
            },
            cancel: function (i) {
                return t(this).each(function () {
                    var n = this,
                        s = t(n);
                    return s.data("readonly") === !0 ? this : (i ? e.click.call(n, null) : e.score.call(n, null), void n.score.removeAttr("value"))
                })
            },
            click: function (i) {
                return t(this).each(function () {
                    return t(this).data("readonly") === !0 ? this : (e.initialize.call(this, i), this.opt.click ? this.opt.click.call(this, i) : e.error.call(this, 'you must add the "click: function(score, evt) { }" callback.'), void e.setTarget.call(this, i, !0))
                })
            },
            error: function (e) {
                t(this).html(e), t.error(e)
            },
            fill: function (t) {
                for (var e, i, n, s = this, r = s.stars.length, o = 0, a = 1; r >= a; a++) e = s.stars.eq(a - 1), s.opt.iconRange && s.opt.iconRange.length > o ? (i = s.opt.iconRange[o], n = s.opt.single ? a == t ? i.on || s.opt.starOn : i.off || s.opt.starOff : t >= a ? i.on || s.opt.starOn : i.off || s.opt.starOff, a <= i.range && e.attr("src", s.opt.path + n), a == i.range && o++) : (n = s.opt.single ? a == t ? s.opt.starOn : s.opt.starOff : t >= a ? s.opt.starOn : s.opt.starOff, e.attr("src", s.opt.path + n))
            },
            fixHint: function () {
                var e = t(this),
                    i = parseInt(this.score.val(), 10),
                    n = this.opt.noRatedMsg;
                !isNaN(i) && i > 0 && (n = i <= this.opt.hints.length && null !== this.opt.hints[i - 1] ? this.opt.hints[i - 1] : i), e.data("readonly", !0).css("cursor", "default").attr("title", n), this.score.attr("readonly", "readonly"), this.stars.attr("title", n)
            },
            getScore: function () {
                var e, i = [];
                return t(this).each(function () {
                    e = this.score.val(), i.push(e ? parseFloat(e) : void 0)
                }), i.length > 1 ? i : i[0]
            },
            readOnly: function (i) {
                return this.each(function () {
                    var n = t(this);
                    return n.data("readonly") === i ? this : (this.cancel && (i ? this.cancel.hide() : this.cancel.show()), i ? (n.unbind(), n.children("img").unbind(), e.fixHint.call(this)) : (e.bindAction.call(this), e.unfixHint.call(this)), void n.data("readonly", i))
                })
            },
            reload: function () {
                return e.set.call(this, {})
            },
            roundStar: function (t) {
                var e = (t - Math.floor(t)).toFixed(2);
                if (e > this.opt.round.down) {
                    var i = this.opt.starOn;
                    e < this.opt.round.up && this.opt.halfShow ? i = this.opt.starHalf : e < this.opt.round.full && (i = this.opt.starOff), this.stars.eq(Math.ceil(t) - 1).attr("src", this.opt.path + i)
                }
            },
            score: function () {
                return arguments.length ? e.setScore.apply(this, arguments) : e.getScore.call(this)
            },
            set: function (e) {
                return this.each(function () {
                    var i = t(this),
                        n = i.data("settings"),
                        s = i.clone().removeAttr("style").insertBefore(i);
                    i.remove(), s.raty(t.extend(n, e))
                }), t(this.selector)
            },
            setScore: function (i) {
                return t(this).each(function () {
                    return t(this).data("readonly") === !0 ? this : (e.initialize.call(this, i), void e.setTarget.call(this, i, !0))
                })
            },
            setTarget: function (i, n) {
                if (this.opt.target) {
                    var s = t(this.opt.target);
                    0 == s.length && e.error.call(this, "target selector invalid or missing!");
                    var r = i;
                    r = n && void 0 !== r ? "hint" == this.opt.targetType ? null === r && this.opt.cancel ? this.opt.cancelHint : this.opt.hints[Math.ceil(r - 1)] : this.opt.precision ? parseFloat(r).toFixed(1) : r : this.opt.targetText, this.opt.targetFormat.indexOf("{score}") < 0 && e.error.call(this, 'template "{score}" missing!'), null !== i && (r = this.opt.targetFormat.toString().replace("{score}", r)), s.is(":input") ? s.val(r) : s.html(r)
                }
            },
            showHalf: function (t) {
                var e = (t - Math.floor(t)).toFixed(1);
                e > 0 && .6 > e && this.stars.eq(Math.ceil(t) - 1).attr("src", this.opt.path + this.opt.starHalf)
            },
            initialize: function (t) {
                t = t ? e.between(t, 0, this.opt.number) : 0, e.fill.call(this, t), t > 0 && (this.opt.halfShow && e.roundStar.call(this, t), this.score.val(t))
            },
            unfixHint: function () {
                for (var e = 0; e < this.opt.number; e++) this.stars.eq(e).attr("title", e < this.opt.hints.length && null !== this.opt.hints[e] ? this.opt.hints[e] : e);
                t(this).data("readonly", !1).css("cursor", "pointer").removeAttr("title"), this.score.attr("readonly", "readonly")
            }
        };
        t.fn.raty = function (i) {
            return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist!") : e.init.apply(this, arguments)
        }, t.fn.raty.defaults = {
            cancel: !1,
            cancelHint: "cancel this rating!",
            cancelOff: "cancel-off.png",
            cancelOn: "cancel-on.png",
            cancelPlace: "left",
            click: void 0,
            half: !1,
            halfShow: !0,
            hints: ["bad", "poor", "regular", "good", "gorgeous"],
            iconRange: void 0,
            mouseover: void 0,
            noRatedMsg: "not rated yet",
            number: 5,
            path: "img/",
            precision: !1,
            round: {
                down: .25,
                full: .6,
                up: .76
            },
            readOnly: !1,
            score: void 0,
            scoreName: "score",
            single: !1,
            size: 16,
            space: !0,
            starHalf: "star-half.png",
            starOff: "star-off.png",
            starOn: "star-on.png",
            target: void 0,
            targetFormat: "{score}",
            targetKeep: !1,
            targetText: "",
            targetType: "hint",
            width: void 0
        }
    }(jQuery), $.fn.raty.defaults.path = "/assets", $.fn.raty.defaults.half_show = !0, $(function () {
        $(".star").each(function () {
            var t = "true" == $(this).attr("data-readonly");
            $(this).raty({
                score: function () {
                    return $(this).attr("data-rating")
                },
                number: function () {
                    return $(this).attr("data-star-count")
                },
                readOnly: t,
                click: function (t) {
                    var e = this;
                    $.post("/rate", {
                        score: t,
                        dimension: $(this).attr("data-dimension"),
                        id: $(this).attr("data-id"),
                        klass: $(this).attr("data-classname")
                    }, function (i) {
                        i && "true" == $(e).attr("data-disable-after-rate") && $(e).raty("set", {
                            readOnly: !0,
                            score: t
                        })
                    })
                }
            })
        })
    }),
    function () {}.call(this),
    function () {}.call(this);