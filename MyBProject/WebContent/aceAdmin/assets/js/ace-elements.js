!function(e, t) {
    var i = function(t, i) {
        function n(e) {
            e.preventDefault(), e.stopPropagation();
            var t = y.offset(), i = t[c], n = v ? e.pageY : e.pageX;
            n > i + z ? (z = n - i - A + I, z > E && (z = E)) : (z = n - i - I, 0 > z && (z = 0)), o.update_scroll()
        }
        function a(t) {
            t.preventDefault(), t.stopPropagation(), j = N = v ? t.pageY : t.pageX, H = !0, e("html").off("mousemove.ace_scroll").on("mousemove.ace_scroll", s), e(P).off("mouseup.ace_scroll").on("mouseup.ace_scroll", r), y.addClass("active"), q && o.$element.trigger("drag.start")
        }
        function s(e) {
            e.preventDefault(), e.stopPropagation(), j = v ? e.pageY : e.pageX, j - N + z > E ? j = N + E - z : 0 > j - N + z && (j = N - z), z += j - N, N = j, 0 > z ? z = 0 : z > E && (z = E), o.update_scroll()
        }
        function r(t) {
            t.preventDefault(), t.stopPropagation(), H = !1, e("html").off(".ace_scroll"), e(P).off(".ace_scroll"), y.removeClass("active"), q && o.$element.trigger("drag.end")
        }
        var o = this, l = e.extend({}, e.fn.ace_scroll.defaults, i);
        this.size = 0, this.$element = e(t), this.element = t;
        var c, d, h, u, f, p, v = !0, g = !1, m = !1, b = !1, w = null, _ = null, y = null, C = null, k = null, x = null, $ = null, A = 0, z = 0, E = 0, I = 0, D = !0, T = !1, S = 1, M = !1, H = !1, P = "onmouseup" in window ? window : "html", q = l.dragEvent || !1, L = i.scrollEvent || !1;
        this.create = function(t) {
            if (!b) {
                if (t && (l = e.extend({}, e.fn.ace_scroll.defaults, t)), this.size = parseInt(this.$element.attr("data-size")) || l.size || 200, v = !l.horizontal, c = v ? "top" : "left", d = v ? "height" : "width", h = v ? "maxHeight" : "maxWidth", u = v ? "clientHeight" : "clientWidth", f = v ? "scrollTop" : "scrollLeft", p = v ? "scrollHeight" : "scrollWidth", this.$element.addClass("ace-scroll " + ((v ? "" : " scroll-hz") + (l.styleClass ? " " + l.styleClass : ""))), "static" == this.$element.css("position") ? (M = this.element.style.position, this.element.style.position = "relative") : M = !1, this.$element.wrapInner('<div class="scroll-content" />'), this.$element.prepend('<div class="scroll-track"><div class="scroll-bar"></div></div>'), w = this.$element.find(".scroll-content").eq(0), v || w.wrapInner("<div />"), _ = w.get(0), y = this.$element.find(".scroll-track").eq(0), C = y.find(".scroll-bar").eq(0), k = y.get(0), x = C.get(0), $ = x.style, y.hide(), y.on("mousedown", n), C.on("mousedown", a), w.on("scroll", function() {
                    D && (z = parseInt(Math.round(this[f] * S)), $[c] = z + "px"), D = !1, L && this.$element.trigger("scroll", [_])
                }), l.mouseWheel) {
                    var i = l.mouseWheelLock, s = !l.lockAnyway;
                    this.$element.on("mousewheel.ace_scroll DOMMouseScroll.ace_scroll", function(t) {
                        if (!g) {
                            if (!m)
                                return s;
                            H && (H = !1, e("html").off(".ace_scroll"), e(P).off(".ace_scroll"), q && o.$element.trigger("drag.end"));
                            var n = t.originalEvent.detail < 0 || t.originalEvent.wheelDelta > 0 ? 1 : -1, a = !1, r = _[u], l = _[f];
                            i || (a = -1 == n ? _[p] <= l + r : 0 == l), o.move_bar(!0);
                            var c = parseInt(Math.round(Math.min(Math.max(r / 8, 54)), o.size)) + 1;
                            return _[f] = l - n * c, a && s
                        }
                    })
                }
                var r = ace.vars.touch && "ace_drag" in e.event.special && l.touchDrag;
                if (r) {
                    var A = "", E = r ? "ace_drag" : "swipe";
                    this.$element.on(E + ".ace_scroll", function(e) {
                        if (A = e.direction, v && ("up" == A || "down" == A) || !v && ("left" == A || "right" == A)) {
                            var t = v ? e.dy : e.dx;
                            0 != t && (Math.abs(t) > 20 && r && (t = 2 * t), o.move_bar(!0), _[f] = _[f] + t)
                        }
                    })
                }
                l.hoverReset && this.$element.on("mouseenter.ace_scroll touchstart.ace_scroll", function() {
                    o.reset()
                }), v || w.children(0).css(d, this.size), w.css(h, this.size), g = !1, b = !0
            }
        },
        this.is_active = function() {
            return m
        },
        this.is_enabled = function() {
            return !g
        }, 
        this.move_bar = function(e) {
            D = e
        }, 
        this.reset = function() {
            if (!g) {
                b || this.create();
                var e = v ? _[p] : this.size;
                if (v && 0 == e || !v && 0 == this.element.scrollWidth)
                    return void this.$element.removeClass("scroll-active");
                var t = v ? this.size : _.clientWidth;
                v || w.children(0).css(d, this.size), w.css(h, this.size), e > t ? (m = !0, y.css(d, t).show(), S = parseFloat((t / e).toFixed(5)), A = parseInt(Math.round(t * S)), I = parseInt(Math.round(A / 2)), E = t - A, z = parseInt(Math.round(_[f] * S)), $[d] = A + "px", $[c] = z + "px", this.$element.addClass("scroll-active"), T || (l.reset && (_[f] = 0, $[c] = 0), T = !0)) : (m = !1, y.hide(), this.$element.removeClass("scroll-active"), w.css(h, ""))
            }
        }, 
        this.disable = function() {
            return _[f] = 0, $[c] = 0, g = !0, m = !1, y.hide(), this.$element.removeClass("scroll-active"), w.css(h, ""), this
        },
        this.enable = function() {
            return g = !1, this.reset(), this
        },
        this.destroy = function() {
            return m = !1, g = !1, b = !1, this.$element.removeClass("ace-scroll scroll-hz" + (l.extraClass ? " " + l.extraClass : "")), this.$element.off(".ace_scroll"), v || w.find("> div").children().unwrap(), w.children().unwrap(), w.remove(), y.remove(), M !== !1 && (this.element.style.position = M), this
        }, 
        this.modify = function(t) {
            return t && (l = e.extend({}, e.fn.ace_scroll.defaults, t)), this.destroy(), this.create(), this.reset(), this
        }, 
        this.update = function(e) {
            return this.size = e.size, this
        }, 
        this.update_scroll = function() {
            D = !1, $[c] = z + "px", _[f] = parseInt(Math.round(z / S))
        };
        var N = -1, j = -1;
        return this.create(), this.reset(), this
    };
    e.fn.ace_scroll = function(n, a) {
        var s, r = this.each(function() {
            var t = e(this), r = t.data("ace_scroll"), o = "object" == typeof n && n;
            r || t.data("ace_scroll", r = new i(this, o)), "string" == typeof n && (s = r[n](a))
        });
        return s === t ? r : s
    }, e.fn.ace_scroll.defaults = {size: 200,horizontal: !1,mouseWheel: !0,mouseWheelLock: !1,lockAnyway: !1,styleClass: !1,hoverReset: !0,reset: !1,dragEvent: !1,touchDrag: !0,touchSwipe: !1,scrollEvent: !1}
}(window.jQuery), 
function(e, t) {
    var i = function(t, i) {
        var n = e.extend({}, e.fn.ace_colorpicker.defaults, i), a = e(t), s = "", r = "", o = null, l = [];
        a.addClass("hide").find("option").each(function() {
            var e = "colorpick-btn", t = this.value.replace(/[^\w\s,#\(\)\.]/g, "");
            this.value != t && (this.value = t), this.selected && (e += " selected", r = t), l.push(t), s += '<li><a class="' + e + '" href="#" style="background-color:' + t + ';" data-color="' + t + '"></a></li>'
        }).end().on("change.color", function() {
            a.next().find(".btn-colorpicker").css("background-color", this.value)
        }).after('<div class="dropdown dropdown-colorpicker">		<a data-toggle="dropdown" class="dropdown-toggle" ' + (n.auto_pos ? 'data-position="auto"' : "") + ' href="#"><span class="btn-colorpicker" style="background-color:' + r + '"></span></a><ul class="dropdown-menu' + (n.caret ? " dropdown-caret" : "") + (n.pull_right ? " dropdown-menu-right" : "") + '">' + s + "</ul></div>");
        var c = a.next().find(".dropdown-menu");
        c.on(ace.click_event, function(t) {
            var i = e(t.target);
            if (!i.is(".colorpick-btn"))
                return !1;
            o && o.removeClass("selected"), o = i, o.addClass("selected");
            var n = o.data("color");
            return a.val(n).trigger("change"), t.preventDefault(), !0
        }), o = a.next().find("a.selected"), this.pick = function(i, n) {
            if ("number" == typeof i) {
                if (i >= l.length)
                    return;
                t.selectedIndex = i, c.find("a:eq(" + i + ")").trigger(ace.click_event)
            } else if ("string" == typeof i) {
                var s = i.replace(/[^\w\s,#\(\)\.]/g, "");
                if (i = l.indexOf(s), -1 == i && n === !0 && (l.push(s), e("<option />").appendTo(a).val(s), e('<li><a class="colorpick-btn" href="#"></a></li>').appendTo(c).find("a").css("background-color", s).data("color", s), i = l.length - 1), -1 == i)
                    return;
                c.find("a:eq(" + i + ")").trigger(ace.click_event)
            }
        }, this.destroy = function() {
            a.removeClass("hide").off("change.color").next().remove(), l = []
        }
    };
    e.fn.ace_colorpicker = function(n, a) {
        var s, r = this.each(function() {
            var t = e(this), r = t.data("ace_colorpicker"), o = "object" == typeof n && n;
            r || t.data("ace_colorpicker", r = new i(this, o)), "string" == typeof n && (s = r[n](a))
        });
        return s === t ? r : s
    }, e.fn.ace_colorpicker.defaults = {pull_right: !1,caret: !0,auto_pos: !0}
}(window.jQuery),
function(e, t) {
    var i = "multiple" in document.createElement("INPUT"), n = "FileList" in window, a = "FileReader" in window, s = "File" in window, r = function(t, i) {
        var n = this;
        this.settings = e.extend({}, e.fn.ace_file_input.defaults, i), this.$element = e(t), this.element = t, this.disabled = !1, this.can_reset = !0, this.$element.off("change.ace_inner_call").on("change.ace_inner_call", function(e, t) {
            return t !== !0 ? l.call(n) : void 0
        });
        var a = this.$element.closest("label").css({display: "block"}), s = 0 == a.length ? "label" : "span";
        this.$element.wrap("<" + s + ' class="ace-file-input" />'), this.apply_settings(), this.reset_input_field()
    };
    r.error = {FILE_LOAD_FAILED: 1,IMAGE_LOAD_FAILED: 2,THUMBNAIL_FAILED: 3}, r.prototype.apply_settings = function() {
        var t = this;
        this.multi = this.$element.attr("multiple") && i, this.well_style = "well" == this.settings.style, this.well_style ? this.$element.parent().addClass("ace-file-multiple") : this.$element.parent().removeClass("ace-file-multiple"), this.$element.parent().find(":not(input[type=file])").remove(), this.$element.after('<span class="ace-file-container" data-title="' + this.settings.btn_choose + '"><span class="ace-file-name" data-title="' + this.settings.no_file + '">' + (this.settings.no_icon ? '<i class="' + ace.vars.icon + this.settings.no_icon + '"></i>' : "") + "</span></span>"), this.$label = this.$element.next(), this.$container = this.$element.closest(".ace-file-input");
        var a = !!this.settings.icon_remove;
        if (a) {
            var s = e('<a class="remove" href="#"><i class="' + ace.vars.icon + this.settings.icon_remove + '"></i></a>').appendTo(this.$element.parent());
            s.on(ace.click_event, function(e) {
                if (e.preventDefault(), !t.can_reset)
                    return !1;
                var i = !0;
                if (t.settings.before_remove && (i = t.settings.before_remove.call(t.element)), !i)
                    return !1;
                t.reset_input();
                return !1
            })
        }
        this.settings.droppable && n && o.call(this)
    }, r.prototype.show_file_list = function(t) {
        var i = "undefined" == typeof t ? this.$element.data("ace_input_files") : t;
        if (i && 0 != i.length) {
            this.well_style && (this.$label.find(".ace-file-name").remove(), this.settings.btn_change || this.$label.addClass("hide-placeholder")), this.$label.attr("data-title", this.settings.btn_change).addClass("selected");
            for (var n = 0; n < i.length; n++) {
                var s = "string" == typeof i[n] ? i[n] : e.trim(i[n].name), r = s.lastIndexOf("\\") + 1;
                0 == r && (r = s.lastIndexOf("/") + 1), s = s.substr(r);
                var o = "fa fa-file", l = "file";
                if (/\.(jpe?g|png|gif|svg|bmp|tiff?)$/i.test(s) ? (o = "fa fa-picture-o file-image", l = "image") : /\.(mpe?g|flv|mov|avi|swf|mp4|mkv|webm|wmv|3gp)$/i.test(s) ? (o = "fa fa-film file-video", l = "video") : /\.(mp3|ogg|wav|wma|amr|aac)$/i.test(s) && (o = "fa fa-music file-audio", l = "audio"), this.well_style) {
                    this.$label.append('<span class="ace-file-name" data-title="' + s + '"><i class="' + ace.vars.icon + o + '"></i></span>');
                    var d = e.trim(i[n].type), h = a && this.settings.thumbnail && (d.length > 0 && d.match("image") || 0 == d.length && "image" == l);
                    if (h) {
                        var u = this;
                        e.when(c.call(this, i[n])).fail(function(e) {
                            u.settings.preview_error && u.settings.preview_error.call(u, s, e.code)
                        })
                    }
                } else
                    this.$label.find(".ace-file-name").attr({"data-title": s}).find(ace.vars[".icon"]).attr("class", ace.vars.icon + o)
            }
            return !0
        }
    }, r.prototype.reset_input = function() {
        this.reset_input_ui(), this.reset_input_field()
    }, r.prototype.reset_input_ui = function() {
        this.$label.attr({"data-title": this.settings.btn_choose,"class": "ace-file-container"}).find(".ace-file-name:first").attr({"data-title": this.settings.no_file,"class": "ace-file-name"}).find(ace.vars[".icon"]).attr("class", ace.vars.icon + this.settings.no_icon).prev("img").remove(), this.settings.no_icon || this.$label.find(ace.vars[".icon"]).remove(), this.$label.find(".ace-file-name").not(":first").remove(), this.reset_input_data()
    }, r.prototype.reset_input_field = function() {
        this.$element.wrap("<form>").parent().get(0).reset(), this.$element.unwrap()
    }, r.prototype.reset_input_data = function() {
        this.$element.data("ace_input_files") && (this.$element.removeData("ace_input_files"), this.$element.removeData("ace_input_method"))
    }, r.prototype.enable_reset = function(e) {
        this.can_reset = e
    }, r.prototype.disable = function() {
        this.disabled = !0, this.$element.attr("disabled", "disabled").addClass("disabled")
    }, r.prototype.enable = function() {
        this.disabled = !1, this.$element.removeAttr("disabled").removeClass("disabled")
    }, r.prototype.files = function() {
        return e(this).data("ace_input_files") || null
    }, r.prototype.method = function() {
        return e(this).data("ace_input_method") || ""
    }, r.prototype.update_settings = function(t) {
        this.settings = e.extend({}, this.settings, t), this.apply_settings()
    }, r.prototype.loading = function(t) {
        if (t === !1)
            this.$container.find(".ace-file-overlay").remove(), this.element.removeAttribute("readonly");
        else {
            var i = "string" == typeof t ? t : '<i class="overlay-content fa fa-spin fa-spinner orange2 fa-2x"></i>', n = this.$container.find(".ace-file-overlay");
            0 == n.length && (n = e('<div class="ace-file-overlay"></div>').appendTo(this.$container), n.on("click tap", function(e) {
                return e.stopImmediatePropagation(), e.preventDefault(), !1
            }), this.element.setAttribute("readonly", "true")), n.empty().append(i)
        }
    };
    var o = function() {
        var e = this, t = this.$element.parent();
        t.off("dragenter").on("dragenter", function(e) {
            e.preventDefault(), e.stopPropagation()
        }).off("dragover").on("dragover", function(e) {
            e.preventDefault(), e.stopPropagation()
        }).off("drop").on("drop", function(t) {
            t.preventDefault(), t.stopPropagation();
            var i = t.originalEvent.dataTransfer, n = i.files;
            if (!e.multi && n.length > 1) {
                var a = [];
                a.push(n[0]), n = a
            }
            return n = h.call(e, n, !0), n === !1 ? !1 : (e.$element.data("ace_input_method", "drop"), e.$element.data("ace_input_files", n), e.show_file_list(n), e.$element.triggerHandler("change", [!0]), !0)
        })
    }, l = function() {
        var e = this.element.files || [this.element.value];
        return e = h.call(this, e, !1), e === !1 ? !1 : (this.$element.data("ace_input_method", "select"), this.$element.data("ace_input_files", e), this.show_file_list(e), !0)
    }, c = function(t) {
        var i = this, n = i.$label.find(".ace-file-name:last"), a = new e.Deferred, s = new FileReader;
        return s.onload = function(s) {
            n.prepend("<img class='middle' style='display:none;' />");
            var o = n.find("img:last").get(0);
            e(o).one("load", function() {
                var s = 50;
                "large" == i.settings.thumbnail ? s = 150 : "fit" == i.settings.thumbnail && (s = n.width()), n.addClass(s > 50 ? "large" : "");
                var l = d(o, s, t.type);
                if (null == l)
                    return e(this).remove(), void a.reject({code: r.error.THUMBNAIL_FAILED});
                var c = l.w, h = l.h;
                "small" == i.settings.thumbnail && (c = h = s), e(o).css({"background-image": "url(" + l.src + ")",width: c,height: h}).data("thumb", l.src).attr({src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="}).show(), a.resolve()
            }).one("error", function() {
                n.find("img").remove(), a.reject({code: r.error.IMAGE_LOAD_FAILED})
            }), o.src = s.target.result
        }, s.onerror = function() {
            a.reject({code: r.error.FILE_LOAD_FAILED})
        }, s.readAsDataURL(t), a.promise()
    }, d = function(t, i) {
        var n = t.width, a = t.height;
        n = n > 0 ? n : e(t).width(), a = a > 0 ? a : e(t).height(), (n > i || a > i) && (n > a ? (a = parseInt(i / n * a), n = i) : (n = parseInt(i / a * n), a = i));
        var s;
        try {
            var r = document.createElement("canvas");
            r.width = n, r.height = a;
            var o = r.getContext("2d");
            o.drawImage(t, 0, 0, t.width, t.height, 0, 0, n, a), s = r.toDataURL()
        } catch (l) {
            s = null
        }
        return s ? (/^data\:image\/(png|jpe?g|gif);base64,[0-9A-Za-z\+\/\=]+$/.test(s) || (s = null), s ? {src: s,w: n,h: a} : null) : null
    }, h = function(e, t) {
        var i = p.call(this, e, t);
        return -1 === i ? (this.reset_input(), !1) : i && 0 != i.length ? ((i instanceof Array || n && i instanceof FileList) && (e = i), i = !0, this.settings.before_change && (i = this.settings.before_change.call(this.element, e, t)), -1 === i ? (this.reset_input(), !1) : i && 0 != i.length ? ((i instanceof Array || n && i instanceof FileList) && (e = i), e) : (this.$element.data("ace_input_files") || this.reset_input(), !1)) : (this.$element.data("ace_input_files") || this.reset_input(), !1)
    }, u = function(e) {
        return e ? ("string" == typeof e && (e = [e]), 0 == e.length ? null : new RegExp(".(?:" + e.join("|") + ")$", "i")) : null
    }, f = function(e) {
        return e ? ("string" == typeof e && (e = [e]), 0 == e.length ? null : new RegExp("^(?:" + e.join("|").replace(/\//g, "\\/") + ")$", "i")) : null
    }, p = function(t, i) {
        var n = u(this.settings.allowExt), a = u(this.settings.denyExt), r = f(this.settings.allowMime), o = f(this.settings.denyMime), l = this.settings.maxSize || !1;
        if (!(n || a || r || o || l))
            return !0;
        for (var c = [], d = {}, h = 0; h < t.length; h++) {
            var p = t[h], v = s ? p.name : p;
            if (!n || n.test(v))
                if (a && a.test(v))
                    "ext" in d || (d.ext = []), d.ext.push(v);
                else {
                    var g;
                    if (s) {
                        if ((g = e.trim(p.type)).length > 0) {
                            if (r && !r.test(g)) {
                                "mime" in d || (d.mime = []), d.mime.push(v);
                                continue
                            }
                            if (o && o.test(g)) {
                                "mime" in d || (d.mime = []), d.mime.push(v);
                                continue
                            }
                        }
                        l && p.size > l ? ("size" in d || (d.size = []), d.size.push(v)) : c.push(p)
                    } else
                        c.push(p)
                }
            else
                "ext" in d || (d.ext = []), d.ext.push(v)
        }
        if (c.length == t.length)
            return t;
        var m = {ext: 0,mime: 0,size: 0};
        "ext" in d && (m.ext = d.ext.length), "mime" in d && (m.mime = d.mime.length), "size" in d && (m.size = d.size.length);
        var b;
        return this.$element.trigger(b = new e.Event("file.error.ace"), {file_count: t.length,invalid_count: t.length - c.length,error_list: d,error_count: m,dropped: i}), b.isDefaultPrevented() ? -1 : c
    };
    e.fn.ace_file_input = function(i, n) {
        var a, s = this.each(function() {
            var t = e(this), s = t.data("ace_file_input"), o = "object" == typeof i && i;
            s || t.data("ace_file_input", s = new r(this, o)), "string" == typeof i && (a = s[i](n))
        });
        return a === t ? s : a
    }, e.fn.ace_file_input.defaults = {style: !1,no_file: "No File ...",no_icon: "fa fa-upload",btn_choose: "Choose",btn_change: "Change",icon_remove: "fa fa-times",droppable: !1,thumbnail: !1,allowExt: null,denyExt: null,allowMime: null,denyMime: null,maxSize: !1,before_change: null,before_remove: null,preview_error: null}
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, i), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = e(this.options.menu), this.shown = !1, this.listen()
    };
    t.prototype = {constructor: t,select: function() {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(), this.hide()
        },updater: function(e) {
            return e
        },show: function() {
            var t = e.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
            return this.$menu.insertAfter(this.$element).css({top: t.top + t.height,left: t.left}).show(), this.shown = !0, this
        },hide: function() {
            return this.$menu.hide(), this.shown = !1, this
        },lookup: function() {
            var t;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (t = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, t ? this.process(t) : this)
        },process: function(t) {
            var i = this;
            return t = e.grep(t, function(e) {
                return i.matcher(e)
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },matcher: function(e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase())
        },sorter: function(e) {
            for (var t, i = [], n = [], a = []; t = e.shift(); )
                t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? n.push(t) : a.push(t) : i.push(t);
            return i.concat(n, a)
        },highlighter: function(e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                return "<strong>" + t + "</strong>"
            })
        },render: function(t) {
            var i = this;
            return t = e(t).map(function(t, n) {
                return t = e(i.options.item).attr("data-value", n), t.find("a").html(i.highlighter(n)), t[0]
            }), t.first().addClass("active"), this.$menu.html(t), this
        },next: function() {
            var t = this.$menu.find(".active").removeClass("active"), i = t.next();
            i.length || (i = e(this.$menu.find("li")[0])), i.addClass("active")
        },prev: function() {
            var e = this.$menu.find(".active").removeClass("active"), t = e.prev();
            t.length || (t = this.$menu.find("li").last()), t.addClass("active")
        },listen: function() {
            this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this))
        },eventSupported: function(e) {
            var t = e in this.$element;
            return t || (this.$element.setAttribute(e, "return;"), t = "function" == typeof this.$element[e]), t
        },move: function(e) {
            if (this.shown) {
                switch (e.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.prev();
                        break;
                    case 40:
                        e.preventDefault(), this.next()
                }
                e.stopPropagation()
            }
        },keydown: function(t) {
            this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
        },keypress: function(e) {
            this.suppressKeyPressRepeat || this.move(e)
        },keyup: function(e) {
            switch (e.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown)
                        return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown)
                        return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            e.stopPropagation(), e.preventDefault()
        },focus: function() {
            this.focused = !0
        },blur: function() {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        },click: function(e) {
            e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus()
        },mouseenter: function(t) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
        },mouseleave: function() {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }};
    var i = e.fn.typeahead;
    e.fn.typeahead = function(i) {
        return this.each(function() {
            var n = e(this), a = n.data("typeahead"), s = "object" == typeof i && i;
            a || n.data("typeahead", a = new t(this, s)), "string" == typeof i && a[i]()
        })
    }, e.fn.typeahead.defaults = {source: [],items: 8,menu: '<ul class="typeahead dropdown-menu"></ul>',item: '<li><a href="#"></a></li>',minLength: 1}, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function() {
        return e.fn.typeahead = i, this
    }, e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
        var t = e(this);
        t.data("typeahead") || t.typeahead(t.data())
    })
}(window.jQuery),
function(e) {
    e.fn.ace_wysiwyg = function(t) {
        var i = e.extend({speech_button: !0,wysiwyg: {}}, t), n = ["#ac725e", "#d06b64", "#f83a22", "#fa573c", "#ff7537", "#ffad46", "#42d692", "#16a765", "#7bd148", "#b3dc6c", "#fbe983", "#fad165", "#92e1c0", "#9fe1e7", "#9fc6e7", "#4986e7", "#9a9cff", "#b99aff", "#c2c2c2", "#cabdbf", "#cca6ac", "#f691b2", "#cd74e6", "#a47ae2", "#444444"], a = {font: {values: ["Arial", "Courier", "Comic Sans MS", "Helvetica", "Open Sans", "Tahoma", "Verdana"],icon: "fa fa-font",title: "Font"},fontSize: {values: {5: "Huge",3: "Normal",1: "Small"},icon: "fa fa-text-height",title: "Font Size"},bold: {icon: "fa fa-bold",title: "Bold (Ctrl/Cmd+B)"},italic: {icon: "fa fa-italic",title: "Italic (Ctrl/Cmd+I)"},strikethrough: {icon: "fa fa-strikethrough",title: "Strikethrough"},underline: {icon: "fa fa-underline",title: "Underline"},insertunorderedlist: {icon: "fa fa-list-ul",title: "Bullet list"},insertorderedlist: {icon: "fa fa-list-ol",title: "Number list"},outdent: {icon: "fa fa-outdent",title: "Reduce indent (Shift+Tab)"},indent: {icon: "fa fa-indent",title: "Indent (Tab)"},justifyleft: {icon: "fa fa-align-left",title: "Align Left (Ctrl/Cmd+L)"},justifycenter: {icon: "fa fa-align-center",title: "Center (Ctrl/Cmd+E)"},justifyright: {icon: "fa fa-align-right",title: "Align Right (Ctrl/Cmd+R)"},justifyfull: {icon: "fa fa-align-justify",title: "Justify (Ctrl/Cmd+J)"},createLink: {icon: "fa fa-link",title: "Hyperlink",button_text: "Add",placeholder: "URL",button_class: "btn-primary"},unlink: {icon: "fa fa-chain-broken",title: "Remove Hyperlink"},insertImage: {icon: "fa fa-picture-o",title: "Insert picture",button_text: '<i class="' + ace.vars.icon + 'fa fa-file"></i> Choose Image &hellip;',placeholder: "Image URL",button_insert: "Insert",button_class: "btn-success",button_insert_class: "btn-primary",choose_file: !0},foreColor: {values: n,title: "Change Color"},backColor: {values: n,title: "Change Background Color"},undo: {icon: "fa fa-undo",title: "Undo (Ctrl/Cmd+Z)"},redo: {icon: "fa fa-repeat",title: "Redo (Ctrl/Cmd+Y)"},viewSource: {icon: "fa fa-code",title: "View Source"}}, s = i.toolbar || ["font", null, "fontSize", null, "bold", "italic", "strikethrough", "underline", null, "insertunorderedlist", "insertorderedlist", "outdent", "indent", null, "justifyleft", "justifycenter", "justifyright", "justifyfull", null, "createLink", "unlink", null, "insertImage", null, "foreColor", null, "undo", "redo", null, "viewSource"];
        return this.each(function() {
            var t = ' <div class="wysiwyg-toolbar btn-toolbar center"> <div class="btn-group"> ';
            for (var n in s)
                if (s.hasOwnProperty(n)) {
                    var r = s[n];
                    if (null === r) {
                        t += ' </div> <div class="btn-group"> ';
                        continue
                    }
                    if ("string" == typeof r && r in a)
                        r = a[r], r.name = s[n];
                    else {
                        if (!("object" == typeof r && r.name in a))
                            continue;
                        r = e.extend(a[r.name], r)
                    }
                    var o = "className" in r ? r.className : "btn-default";
                    switch (r.name) {
                        case "font":
                            t += ' <a class="btn btn-sm ' + o + ' dropdown-toggle" data-toggle="dropdown" title="' + r.title + '"><i class="' + ace.vars.icon + r.icon + '"></i><i class="' + ace.vars.icon + 'fa fa-angle-down icon-on-right"></i></a> ', t += ' <ul class="dropdown-menu dropdown-light dropdown-caret">';
                            for (var l in r.values)
                                r.values.hasOwnProperty(l) && (t += ' <li><a data-edit="fontName ' + r.values[l] + '" style="font-family:\'' + r.values[l] + "'\">" + r.values[l] + "</a></li> ");
                            t += " </ul>";
                            break;
                        case "fontSize":
                            t += ' <a class="btn btn-sm ' + o + ' dropdown-toggle" data-toggle="dropdown" title="' + r.title + '"><i class="' + ace.vars.icon + r.icon + '"></i>&nbsp;<i class="' + ace.vars.icon + 'fa fa-angle-down icon-on-right"></i></a> ', t += ' <ul class="dropdown-menu dropdown-light dropdown-caret"> ';
                            for (var c in r.values)
                                r.values.hasOwnProperty(c) && (t += ' <li><a data-edit="fontSize ' + c + '"><font size="' + c + '">' + r.values[c] + "</font></a></li> ");
                            t += " </ul> ";
                            break;
                        case "createLink":
                            t += ' <div class="btn-group"> <a class="btn btn-sm ' + o + ' dropdown-toggle" data-toggle="dropdown" title="' + r.title + '"><i class="' + ace.vars.icon + r.icon + '"></i></a> ', t += ' <div class="dropdown-menu dropdown-caret dropdown-menu-right">							 <div class="input-group">								<input class="form-control" placeholder="' + r.placeholder + '" type="text" data-edit="' + r.name + '" />								<span class="input-group-btn">									<button class="btn btn-sm ' + r.button_class + '" type="button">' + r.button_text + "</button>								</span>							 </div>						</div> </div>";
                            break;
                        case "insertImage":
                            t += ' <div class="btn-group"> <a class="btn btn-sm ' + o + ' dropdown-toggle" data-toggle="dropdown" title="' + r.title + '"><i class="' + ace.vars.icon + r.icon + '"></i></a> ', t += ' <div class="dropdown-menu dropdown-caret dropdown-menu-right">							 <div class="input-group">								<input class="form-control" placeholder="' + r.placeholder + '" type="text" data-edit="' + r.name + '" />								<span class="input-group-btn">									<button class="btn btn-sm ' + r.button_insert_class + '" type="button">' + r.button_insert + "</button>								</span>							 </div>", r.choose_file && "FileReader" in window && (t += '<div class="space-2"></div>							 <label class="center block no-margin-bottom">								<button class="btn btn-sm ' + r.button_class + ' wysiwyg-choose-file" type="button">' + r.button_text + '</button>								<input type="file" data-edit="' + r.name + '" />							  </label>'), t += " </div> </div>";
                            break;
                        case "foreColor":
                        case "backColor":
                            t += ' <select class="hide wysiwyg_colorpicker" title="' + r.title + '"> ';
                            for (var d in r.values)
                                t += ' <option value="' + r.values[d] + '">' + r.values[d] + "</option> ";
                            t += " </select> ", t += ' <input style="display:none;" disabled class="hide" type="text" data-edit="' + r.name + '" /> ';
                            break;
                        case "viewSource":
                            t += ' <a class="btn btn-sm ' + o + '" data-view="source" title="' + r.title + '"><i class="' + ace.vars.icon + r.icon + '"></i></a> ';
                            break;
                        default:
                            t += ' <a class="btn btn-sm ' + o + '" data-edit="' + r.name + '" title="' + r.title + '"><i class="' + ace.vars.icon + r.icon + '"></i></a> '
                    }
                }
            t += " </div> ";
            var h;
            i.speech_button && "onwebkitspeechchange" in (h = document.createElement("input")) && (t += ' <input class="wysiwyg-speech-input" type="text" data-edit="inserttext" x-webkit-speech />'), h = null, t += " </div> ", t = i.toolbar_place ? i.toolbar_place.call(this, t) : e(this).before(t).prev(), t.find("a[title]").tooltip({animation: !1,container: "body"}), t.find(".dropdown-menu input[type=text]").on("click", function() {
                return !1
            }).on("change", function() {
                e(this).closest(".dropdown-menu").siblings(".dropdown-toggle").dropdown("toggle")
            }).on("keydown", function(t) {
                27 == t.which ? (this.value = "", e(this).change()) : 13 == t.which && (t.preventDefault(), t.stopPropagation(), e(this).change())
            }), t.find("input[type=file]").prev().on(ace.click_event, function() {
                e(this).next().click()
            }), t.find(".wysiwyg_colorpicker").each(function() {
                e(this).ace_colorpicker({pull_right: !0}).change(function() {
                    e(this).nextAll("input").eq(0).val(this.value).change()
                }).next().find(".btn-colorpicker").tooltip({title: this.title,animation: !1,container: "body"})
            });
            var u = e(this), f = !1;
            t.find("a[data-view=source]").on("click", function(t) {
                if (t.preventDefault(), f) {
                    var i = u.next();
                    u.html(i.val()).show(), i.remove(), e(this).removeClass("active")
                } else
                    e("<textarea />").css({width: u.outerWidth(),height: u.outerHeight()}).val(u.html()).insertAfter(u), u.hide(), e(this).addClass("active");
                f = !f
            });
            var p = e.extend({}, {activeToolbarClass: "active",toolbarSelector: t}, i.wysiwyg || {});
            e(this).wysiwyg(p)
        }), this
    }
}(window.jQuery), 
function(e, t) {
    function i(t, i) {
        var n = i.max;
        n = ("" + n).length;
        var a = parseInt(Math.max(20 * n + 40, 90)), s = e(t);
        s.addClass("spinner-input form-control").wrap('<div class="ace-spinner">');
        var r = s.closest(".ace-spinner").spinner(i).wrapInner("<div class='input-group'></div>"), o = r.data("spinner");
        i.on_sides ? (s.before('<div class="spinner-buttons input-group-btn">					<button type="button" class="btn spinner-down btn-xs ' + i.btn_down_class + '">						<i class="' + ace.vars.icon + i.icon_down + '"></i>					</button>				</div>').after('<div class="spinner-buttons input-group-btn">					<button type="button" class="btn spinner-up btn-xs ' + i.btn_up_class + '">						<i class="' + ace.vars.icon + i.icon_up + '"></i>					</button>				</div>'), r.addClass("touch-spinner"), r.css("width", a + "px")) : (s.after('<div class="spinner-buttons input-group-btn">					<button type="button" class="btn spinner-up btn-xs ' + i.btn_up_class + '">						<i class="' + ace.vars.icon + i.icon_up + '"></i>					</button>					<button type="button" class="btn spinner-down btn-xs ' + i.btn_down_class + '">						<i class="' + ace.vars.icon + i.icon_down + '"></i>					</button>				</div>'), ace.vars.touch || i.touch_spinner ? (r.addClass("touch-spinner"), r.css("width", a + "px")) : (s.next().addClass("btn-group-vertical"), r.css("width", a + "px"))), s.on("mousewheel.spinner DOMMouseScroll.spinner", function(e) {
            var t = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
            return o.step(t > 0), o.triggerChangedEvent(), !1
        }), r.on("changed", function() {
            s.trigger("change")
        }), this._call = function(e, t) {
            o[e](t)
        }
    }
    e.fn.ace_spinner = function(n, a) {
        var s, r = this.each(function() {
            var t = e(this), r = t.data("ace_spinner"), o = "object" == typeof n && n;
            r || (o = e.extend({}, e.fn.ace_spinner.defaults, n), t.data("ace_spinner", r = new i(this, o))), "string" == typeof n && (s = r._call(n, a))
        });
        return s === t ? r : s
    }, e.fn.ace_spinner.defaults = {icon_up: "fa fa-chevron-up",icon_down: "fa fa-chevron-down",on_sides: !1,btn_up_class: "",btn_down_class: "",max: 999,touch_spinner: !1}
}(window.jQuery), 
function(e) {
    var t = {"open-icon": ace.vars.icon + "fa fa-folder-open","close-icon": ace.vars.icon + "fa fa-folder",selectable: !0,"selected-icon": ace.vars.icon + "fa fa-check","unselected-icon": ace.vars.icon + "fa fa-times"};
    e.fn.ace_tree = function(i) {
        return t = e.extend({}, t, i), this.each(function() {
            var i = e(this);
            i.html('<div class="tree-folder" style="display:none;">				<div class="tree-folder-header">					<i class="' + ace.vars.icon + t["close-icon"] + '"></i>					<div class="tree-folder-name"></div>				</div>				<div class="tree-folder-content"></div>				<div class="tree-loader" style="display:none"></div>			</div>			<div class="tree-item" style="display:none;">				' + (null == t["unselected-icon"] ? "" : '<i class="' + ace.vars.icon + t["unselected-icon"] + '"></i>') + '				<div class="tree-item-name"></div>			</div>'),
            i.addClass(1 == t.selectable ? "tree-selectable" : "tree-unselectable"), i.tree(t)
        }), this
    }
}(window.jQuery), 
function(e) {
    e.fn.ace_wizard = function(t) {
        return this.each(function() {
            var i = e(this);
            i.wizard();
            var n = i.siblings(".wizard-actions").eq(0), a = i.data("wizard");
            a.$prevBtn.remove(), a.$nextBtn.remove(), a.$prevBtn = n.find(".btn-prev").eq(0).on(ace.click_event, function() {
                a.previous()
            }).attr("disabled", "disabled"), a.$nextBtn = n.find(".btn-next").eq(0).on(ace.click_event, function() {
                a.next()
            }).removeAttr("disabled"), a.nextText = a.$nextBtn.text();
            var s = t && (t.selectedItem && t.selectedItem.step || t.step);
            s && (a.currentStep = s, a.setState())
        }), this
    }
}(window.jQuery);
