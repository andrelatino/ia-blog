/*! Viewport Resizer v1.1.5 | http://lab.maltewassermann.com/viewport-resizer/ Copyright (c) 2016 Malte Wassermann */
(function(o, y, O) {
    var ca = "https:" === location.protocol ? "https://" : "http://"
      , da = y.createElement("script")
      , ea = y.getElementsByTagName("script")[0];
    da.src = ca + "ajax.googleapis.com/ajax/libs/jquery/2.0.1/jquery.min.js";
    ea.parentNode.insertBefore(da, ea);
    y.close();
    var fa = function(a) {
        if (o.jQuery && jQuery.fn.jquery === "2.0.1")
            a(jQuery);
        else {
            o.jQuery && jQuery.noConflict();
            o.setTimeout(function() {
                fa(a)
            }, 100)
        }
    };
    fa(function(a) {
        function z(b) {
            b = typeof b === "undefined" ? a("a.active", n) : a(b);
            var e = b.attr("data-viewport").toDimension();
            a("a.active", n).add(a("a.active", H)).removeClass("active").end(b.addClass("active"));
            ga(e)
        }
        function A(b, e) {
            var d = b ? b : a("a.active", n).add(a("a.active", H))
              , h = b ? d.attr("data-viewport").toDimension() : {
                width: B,
                height: I
            }
              , i = e == "swap" ? {
                width: h.height,
                height: h.width
            } : {
                width: h.width,
                height: h.height
            }
              , g = i.width + "x" + i.height
              , f = RegExp(e == "swap" ? h.width + "x" + h.height : h.height + "x" + h.width, "g");
            // h = e != null ? ha(e == "swap" && d.is(".portrait, .landscape") ? d.hasClass("landscape") ? 0 : -90 : e) : ha(h);
            var l = d.text();
            if (d.hasClass("custom") || !d.attr("data-icon")) {
                d.text(l.replace(f, g));
                l = d.text() === g ? "Custom" : d.text()
            }
            ia.html("").append(a("<b>").text(l)).append(a("<span>").text("Size: "  + function(k, j) {
                function q(s, P) {
                    if (P === 0)
                        return s;
                    return q(P, s % P)
                }
                c = q(k, j);
                return k / c + ":" + j / c
            }(i.width, i.height)));
            d.attr("title", l);
            ja.attr("class", d.is('[data-viewport="auto"]') ? "auto" : "").css({
                width: i.width,
                height: i.height,
                "margin-left": -i.width / 2
            });
            if (!b) {
                r.val(g).triggerHandler("edit");
                ka = r.val()
            }
        }
        function Da() {
            var b = "";
            a('a:not([data-viewport="auto"])', "#devices").clone().removeAttr("class").each(function() {
                b += a(this).prop("outerHTML")
            });
            a("#bookmarklet", C).attr({
                href: "javascript:void((function(d){if(self!=top||d.getElementById('toolbar')&&d.getElementById('toolbar').getAttribute('data-resizer'))return false;d.write('<!DOCTYPE HTML><html style=\"opacity:0;\"><head><meta charset=\"utf-8\"></head><body>" + b + '<script src="' + Ea + "\"><\/script></body></html>')})(document));"
            })
        }
        function Fa() {
            function b(k) {
                var j = g && typeof g === "number" ? g : Math.min(100 / u * B / 100, 1);
                j = Math.min(j, 10);
                j = Math.max(j, 0.25);
                j = k ? "" : "scale(" + j + ")";
                k = k ? "" : "0 0";
                v.css({
                    zoom: j,
                    "-webkit-transform": j,
                    "-webkit-transform-origin": k,
                    "-moz-transform": j,
                    "-moz-transform-origin": k,
                    "-ms-transform": j,
                    "-ms-transform-origin": k,
                    "-o-transform": j,
                    "-o-transform-origin": k,
                    transform: j,
                    "transform-origin": k
                })
            }
            function e(k) {
                v.css({
                    "min-width": k ? "" : u + "px",
                    "min-height": k || !l ? "" : l + "px"
                })
            }
            if (!m)
                return false;
            var d = function() {
                var k = {};
                if (m.find("meta[name=viewport]", "head").length) {
                    var j = m.find("meta[name=viewport]:first", "head");
                    typeof j.attr("content") !== "undefined" && j.attr("content").replace(/(\s)\s*/gm, "").split(/[,;.]+/).map(function(q) {
                        q = q.split("=");
                        k[q[0]] = q[1]
                    })
                }
                return k
            }()
              , h = d.width || false
              , i = d.height || false;
            d = d["initial-scale"] || false;
            var g = true
              , f = true
              , l = false;
            if (Q) {
                b("clear");
                e("clear");
                return false
            }
            if (h)
                if (h !== "device-width")
                    u = Number(h);
                else
                    f = g = false;
            else
                u = 980;
            if (i && i !== "device-height")
                l = Number(i);
            if (d) {
                f = g = false;
                if (d === "minimum-scale")
                    d = 0.25;
                if (d === "maximum-scale")
                    d = 10;
                d = Number(d);
                if (d < 1) {
                    u = 980 + 1 * d;
                    f = g = true
                } else if (d > 1)
                    g = d
            }
            g && b();
            f && e()
        }
        function la() {
            m = p.contents();
            u = m.width() || 0;
            v = a("html", m);
            R = a("body", m);
            S = v.add(R);
            if (!ma) {
                var b = ["DOMMouseScroll", "mousewheel"];
                if (a.event.fixHooks)
                    for (var e = b.length; e; )
                        a.event.fixHooks[b[--e]] = a.event.mouseHooks;
                a.event.special.mousewheel = {
                    setup: function() {
                        if (this.addEventListener)
                            for (var f = b.length; f; )
                                this.addEventListener(b[--f], d, false);
                        else
                            this.onmousewheel = d
                    },
                    teardown: function() {
                        if (this.removeEventListener)
                            for (var f = b.length; f; )
                                this.removeEventListener(b[--f], d, false);
                        else
                            this.onmousewheel = null
                    }
                };
                a.fn.extend({
                    mousewheel: function(f) {
                        return f ? this.bind("mousewheel", f) : this.trigger("mousewheel")
                    },
                    unmousewheel: function(f) {
                        return this.unbind("mousewheel", f)
                    }
                });
                var d = function(f) {
                    var l = f || o.event
                      , k = [].slice.call(arguments, 1)
                      , j = 0
                      , q = 0
                      , s = 0;
                    f = a.event.fix(l);
                    f.type = "mousewheel";
                    if (l.wheelDelta)
                        j = l.wheelDelta / 120;
                    if (l.detail)
                        j = -l.detail / 3;
                    s = j;
                    if (l.axis !== O && l.axis === l.HORIZONTAL_AXIS) {
                        s = 0;
                        q = -1 * j
                    }
                    if (l.wheelDeltaY !== O)
                        s = l.wheelDeltaY / 120;
                    if (l.wheelDeltaX !== O)
                        q = -1 * l.wheelDeltaX / 120;
                    k.unshift(f, j, q, s);
                    return (a.event.dispatch || a.event.handle).apply(this, k)
                }
                  , h = p.height()
                  , i = 0;
                v.css("overflow-y", "hidden");
                S.on("mousewheel", function(f, l, k, j) {
                    f.preventDefault();
                    f = 0.05;
                    if (l > 0.1)
                        f *= 5;
                    j = j > -f && j < f;
                    if (!(k < -f && j || k > f && j)) {
                        k = m.height() - h;
                        i -= l * Ga;
                        if (i < 0)
                            i = 0;
                        if (i > k)
                            i = k;
                        m.scrollTop(i)
                    }
                })
            }
            T && S.css({
                overflow: "scroll",
                "-webkit-overflow-scrolling": "touch",
                width: "100%",
                height: "100%"
            });
            e = v.css("background-color");
            var g = R.css("background-color");
            p.css("background-color", e === "transparent" || e === "rgba(0, 0, 0, 0)" ? g === "transparent" || g === "rgba(0, 0, 0, 0)" ? "#fff" : g : e);
            m.find("title", "head").length && !U.find("title").length && U.prepend(m.find("title").prepend("↔ "));
            Ha()
        }
        function Ia(b) {
            function e(h) {
                a("[data-viewport].active", "#devices").attr({
                    "data-viewport": h.height + "x" + h.width
                }).orientationClassName();
                return {
                    width: h.height,
                    height: h.width
                }
            }
            // var d = a("a.active", n).attr("data-viewport").toDimension();
            // if (b === 0 || b === 180) {
            //     if (d.width > d.height)
            //         d = e(d)
            // } else if (b === 90 || b === -90)
            //     if (d.height > d.width)
            //         d = e(d);
            // ga(d)
        }
        function ga(b) {
            B = b.width;
            I = b.height;
            b = (Q = b.auto) ? "auto" : "";
            var e = T && Q || J.hasClass("active") ? "" : " transition";
            D.attr("class", a.trim(b.concat(e)));
            w.css({
                width: B,
                height: I
            });
            var d = setTimeout(function() {
                Fa();
                clearTimeout(d)
            }, 200);
            A()
        }
        function ha(b) {
            if (typeof b === "object")
                b = b.width === b.height ? false : b.width > b.height ? -90 : 0;
            return b === 0 || b === 180 ? "Portrait" : b === 90 || b === -90 ? "Landscape" : V
        }
        function na(b) {
            b = b.filter(function() {
                return a(this).attr("data-viewport").length > 0
            });
            var e = a('<a data-viewport="auto" data-icon="auto">Auto Size</a>').add(b.clone());
            b.remove();
            n.html("");
            a.each(e, function() {
                n.append(a("<li>").append(a(this).setProperties().orientationClassName()))
            })
        }
        function oa() {
            E.add(C).addClass("updated");
            pa.removeClass("invisible")
        }
        function qa() {
            a("a.active", n).length ? z(a("a.active", n).removeClass("active").get(0)) : z(a('[data-viewport="auto"]', W))
        }
        function Ha() {
            var b = {
                Version: "Viewport Resizer (" + Ja + ")",
                "User agent": K,
                "Meta viewport": m.find("meta[name=viewport]:first", "head").attr("content")
            };
            X.html("");
            a.each(b, function(e, d) {
                X.append(a("<dt>").text(e)).append(a("<dd>").html(d ? d : V))
            })
        }
        function ra() {
            var b = F.css("background-color");
            D.css("color", function(e) {
                e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                var d = parseInt(e[1])
                  , h = parseInt(e[2]);
                e = parseInt(e[3]);
                return Math.sqrt(d * d * 0.241 + h * h * 0.691 + e * e * 0.068)
            }(b) < 130 ? "#fff" : "#000")
        }
        if (a("#toolbar[data-resizer]").length)
            return false;
        var Ja = "1.1.4"
          , L = ca + "lab.maltewassermann.com/viewport-resizer/"
          , Y = L + "resizer.min.css"
          , Ea = L + "resizer.min.js"
          , t = a(o)
          , sa = a("html")
          , U = a("head")
          , F = a("body")
          , G = a(location).attr("href")
          , V = "n/a"
          , K = typeof navigator.userAgent === "undefined" ? V : navigator.userAgent
          , ma = /webkit/i.test(K)
          , T = /mobile.*safari/i.test(K);
        L = /opera/i.test(K);
        var Ka = a('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">');
        Y = a('<link rel="stylesheet" href="./js/responsive/resizer.css">');
        var ta = a('<style type="text/css" media="print">')
          , C = a('<div id="expand">').hide()
          , X = a("<dl>")
          , La = a('<a id="bookmarklet">').attr("data-text", "Your bookmarklet").append(a("<span>").html("↔ Resizer"))
          , pa = a('<span class="invisible">').text(" has been changed. Please save or update your bookmarklet.")
          , W = a('<div id="toolbar">').attr("data-resizer", "basic")
          , n = a('<ul id="devices">')
          , H = a('<ul id="tools">')
          , r = a('<input id="edit" type="text" value="">')
          , ua = a('<a id="add" data-viewport="" data-icon="add" title="Add size to toolbar">')
          , ia = a('<li class="info">')
          , Ma = a('<ul id="extras">')
          , Z = a('<a title="Animate Viewport">').text("Animate")
          , $ = a('')
          , va = a('')
          , M = a('')
          , E = a('')
          , D = a('<div id="container">')
          , w = a('<div id="wrapper">')
          , p = a('<iframe id="content" name="content" frameborder="0">').attr("src", G)
          , wa = a('<b id="handle-e">')
          , xa = a('<b id="handle-s">')
          , aa = a('<b id="handle-w">');
        G = a('<b id="handle-se">');
        var ya = a('<b id="handle-sw">')
          , J = wa.add(xa).add(aa).add(G).add(ya)
          , ja = a('<div id="phantom">');
        G = new Date;
        var ba = t.innerWidth() || o.innerWidth || 400, za = t.innerHeight() || o.innerHeight || 400, N = 10, Ga = L ? 2 : 30, x = 50, m = false, B, I, Q, Aa, v, R, S, u, ka;
        String.prototype.toDimension = function() {
            if (this == "auto")
                return {
                    width: ba,
                    height: za - 42,
                    auto: true
                };
            else {
                var b = this.match(/\d{1,}\d/g);
                if (b) {
                    b = b.slice(0, 2);
                    return {
                        width: parseInt(typeof b[0] === "undefined" ? 400 : b[0]),
                        height: parseInt(typeof b[1] === "undefined" ? 600 : b[1]),
                        auto: false
                    }
                } else
                    return null
            }
        }
        ;
        a.fn.setProperties = function() {
            var b = a(this);
            if (b.is(":empty")) {
                var e = b.attr("data-viewport").toDimension();
                b.addClass("custom").text(e.width + "x" + e.height)
            }
            return b.attr("title", b.text())
        }
        ;
        a.fn.orientationClassName = function() {
            var b = a(this).attr("data-viewport").toDimension();
            b = b.width > b.height && !b.auto ? "" : b.height > b.width && !b.auto ? "" : "";
            return a(this).removeClass("").addClass(b)
        }
        ;
        (function() {
            function b(g) {
                g.preventDefault();
                p.css("pointer-events", "none");
                var f = i.is(aa) || i.is(ya) ? h.x - g.pageX : g.pageX - h.x;
                f = i.is(xa) ? h.w : Math.max(f + (h.w / 2 + d().w / 2), 0);
                g = i.is(wa) || i.is(aa) ? h.h : Math.max(g.pageY - h.y + h.h, 0);
                f = f > N ? f : N;
                g = g > N ? g : N;
                r.val(f + "x" + g).triggerHandler("change");
                i.addClass("active")
            }
            function e() {
                t.off({
                    mousemove: b,
                    mouseup: e
                });
                p.css("pointer-events", "");
                i.removeClass("active");
                D.addClass("transition")
            }
            function d() {
                return {
                    w: parseInt(w.css("width")) || w.width() || 0,
                    h: parseInt(w.css("height")) || w.height() || 0
                }
            }
            var h = {}, i;
            J.on({
                mouseenter: function() {
                    J.hasClass("active") || a(this).addClass("hover")
                },
                mouseleave: function() {
                    a(this).removeClass("hover")
                },
                mousedown: function(g) {
                    g.preventDefault();
                    i = a(this);
                    h = {
                        w: d().w,
                        h: d().h,
                        x: g.pageX,
                        y: g.pageY
                    };
                    t.on({
                        mousemove: b,
                        mouseup: e
                    });
                    Z.triggerHandler("stop")
                }
            })
        }
        )();
        U.prepend(Ka).prepend('<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9, chrome=1">').prepend(Y.on("load", function() {
            ra()
        })).append(ta);
        C.append(a('<div class="inner">').append(a('<p class="well">').append(La).append(pa)).append(X).append(a('<p class="muted">').html('About: <a href="http://lab.maltewassermann.com/viewport-resizer/" target="_blank">Viewport Resizer</a> is designed by Malte Wassermann (c) ' + G.getFullYear()))).appendTo(F);
        W.append(n).append(H.append(a("<li>").append(a('<label for="edit" data-icon="edit" title="Customize current size"><span>Customize:</span></label>')).append(r).append(ua)).append(ia)).append(Ma.append(a("<li>").append(Z)).append(a("<li>").append($)).append(ma ? a("<li>").append(va) : null).append(a("<li>").append(E)).append(a("<li>").append(M))).appendTo(F);
        D.append(ja).append(w.append(p).append(J)).appendTo(F);
        na(a("[data-viewport]", F));
        r.on("edit", function() {
            a(this).css("width", Math.round((a(this).val().length + 1) * 7))
        }).on("mouseover focus", function() {
            a(this).parent().addClass("hover")
        }).on("mouseout blur", function(b) {
            if (b.type == "blur" || !a(this).is(":focus"))
                a(this).parent().removeClass("hover")
        }).on("keyup", function() {
            a(this).triggerHandler("edit")
        }).on("change", function() {
            var b = a(this).val().toDimension();
            if (b) {
                a(this).parent().addClass("activeAdd");
                b = a("#add").text("").attr({
                    "data-viewport": b.width + "x" + b.height
                }).setProperties();
                z(b);
                a(this).trigger("blur")
            } else
                a(this).val(ka).triggerHandler("edit")
        });
        ua.on("click touchend", function(b) {
            b.preventDefault();
            b = a(this);
            var e = b.clone();
            b.removeClass("active").fadeOut("slow", function() {
                a("li.activeAdd", H).removeClass("activeAdd");
                a("<li>").append(e.removeAttr("id").removeAttr("data-icon").removeAttr("title").removeClass("custom").orientationClassName().fadeIn("slow")).appendTo(n);
                oa()
            })
        });
        E.on("click touchend", function(b) {
            b.preventDefault();
            Da();
            a(this).toggleClass("active");
            E.hasClass("updated") || C.removeClass("updated");
            C.slideToggle(150, function() {
                E.removeClass("updated")
            })
        });
        (function() {
            function b() {
                var f = Math.max(ba - x, e);
                g = Math.max(g, e);
                r.val(g + "x" + I).triggerHandler("change");
                if (g > f - x)
                    d = false;
                else if (g === e)
                    d = true;
                if (d)
                    g += x % f;
                else
                    g -= x % f
            }
            var e = 320, d = false, h = false, i, g;
            Z.on("start", function() {
                i = true;
                g = Math.round(B / x) * x;
                b();
                h = setInterval(b, 750);
                a(this).addClass("active")
            }).on("stop", function() {
                i = false;
                clearInterval(h);
                h = false;
                a(this).removeClass("active")
            }).on("click touchend", function(f) {
                f.preventDefault();
                i ? a(this).triggerHandler("stop") : a(this).triggerHandler("start")
            })
        }
        )();
        $.on("click touchend", function(b) {
            b.preventDefault();
            p.get(0).contentWindow.location.reload(true);
            p.on("load", function() {
                la()
            })
        });
        va.on("click touchend", function(b) {
            b.preventDefault();
            ta.html("body,#content{height:" + m.height() + "px !important;}");
            o.focus();
            o.print()
        });
        M.on("click touchend", function(b) {
            b.preventDefault();
            o.location.href = m.get(0).location.href
        });
        n.on("click touchend", '[data-viewport]:not(".active")', function(b) {
            b.preventDefault();
            z(a(this))
        }).on("mouseenter", '[data-viewport]:not(".active")', function() {
            A(a(this))
        }).on("mouseleave", '[data-viewport]:not(".active")', function() {
            A()
        }).on("click touchend", '[data-viewport]:not([data-viewport="auto"]).active', function(b) {
            b.preventDefault();
            a(this).removeClass("hover");
            Ia(a(this).hasClass("landscape") ? 0 : 0)
        }).on("mouseenter", '[data-viewport]:not([data-viewport="auto"]).active', function() {
            a(this).addClass("hover");
            A(a(this), "swap")
        }).on("mouseleave", '[data-viewport]:not([data-viewport="auto"]).active', function() {
            a(this).removeClass("hover");
            A()
        });
        p.on("load", function() {
            try {
                Aa = p.contents().get(0).location.href
            } catch (b) {
                alert("Access denied: Cross-domain security error");
                p.attr({
                    src: Aa
                });
                return false
            }
            la();
            if (T) {
                W.add(D).not(n).on("click touchend", function(d) {
                    !a(d.target).is(r) && r.is(":focus") && r.trigger("blur")
                });
                p.attr({
                    scrolling: "no"
                })
            }
            qa();
            sa.css("opacity", 1);
            var e = setTimeout(function() {
                sa.addClass("complete");
                clearTimeout(e)
            }, 10)
        });
        var Ba = false
          , Ca = false
          , Na = [17, 224, 91, 93];
        t.on("keydown", function(b) {
            if (b.keyCode == 116 || Ca && b.keyCode == 82)
                Ba = true;
            if (Na.indexOf(b.keyCode) >= 0)
                Ca = true;
            if (Ba) {
                b.preventDefault();
                $.click()
            }
            if (b.keyCode === 27) {
                b.preventDefault();
                M.click()
            }
        }).on("resize", function() {
            ba = t.innerWidth() || o.innerWidth || 400;
            za = t.innerHeight() || o.innerHeight || 400;
            a("a.active", n).is('[data-viewport="auto"]') && z()
        }).on("beforeunload", function() {
            M.click()
        });
        y.updateDeviceList = function(b) {
            na(b);
            oa();
            qa()
        }
        ;
        y.updateColorAffinity = function() {
            ra()
        }
    })
}
)(window, document);
