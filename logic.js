! function(a, b, c) {
    "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c()
}(this, "verge", function() {
    function a() {
        return {
            width: k(),
            height: l()
        }
    }

    function b(a, b) {
        var c = {};
        return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c
    }

    function c(a, c) {
        return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1
    }

    function d(b) {
        b = null == b ? a() : 1 === b.nodeType ? c(b) : b;
        var d = b.height,
            e = b.width;
        return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d
    }
    var e = {},
        f = "undefined" != typeof window && window,
        g = "undefined" != typeof document && document,
        h = g && g.documentElement,
        i = f.matchMedia || f.msMatchMedia,
        j = i ? function(a) {
            return !!i.call(f, a).matches
        } : function() {
            return !1
        },
        k = e.viewportW = function() {
            var a = h.clientWidth,
                b = f.innerWidth;
            return b > a ? b : a
        },
        l = e.viewportH = function() {
            var a = h.clientHeight,
                b = f.innerHeight;
            return b > a ? b : a
        };
    return e.mq = j, e.matchMedia = i ? function() {
        return i.apply(f, arguments)
    } : function() {
        return {}
    }, e.viewport = a, e.scrollX = function() {
        return f.pageXOffset || h.scrollLeft
    }, e.scrollY = function() {
        return f.pageYOffset || h.scrollTop
    }, e.rectangle = c, e.aspect = d, e.inX = function(a, b) {
        var d = c(a, b);
        return !!d && d.right >= 0 && d.left <= k()
    }, e.inY = function(a, b) {
        var d = c(a, b);
        return !!d && d.bottom >= 0 && d.top <= l()
    }, e.inViewport = function(a, b) {
        var d = c(a, b);
        return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k()
    }, e
});
(function() {
    var p = {
        h: {
            points: [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
            size: 5
        },
        n: {
            points: [1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
            size: 5
        },
        k: {
            points: [1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
            size: 5
        },
        r: {
            points: [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
            size: 5
        },
        a: {
            points: [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
            size: 5
        },
        c: {
            points: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            size: 5
        },
        f: {
            points: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            size: 5
        },
        t: {
            points: [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
            size: 5
        },
        p: {
            points: [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            size: 5
        },
        i: {
            points: [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
            size: 3
        },
        x: {
            points: [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
            size: 5
        },
        e: {
            points: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            size: 5
        },
        l: {
            points: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            size: 5
        }
    };
    text = "hackerrank";
    word = {
        points: [],
        size: 0
    };

    function c() {
        var j;
        var i;
        i = verge.viewportH();
        j = verge.viewportW();
        return [j, i]
    }
    for (var v = 0; v < 5; v++) {
        for (var t = 0, s = text.length; t < s; t++) {
            curLetter = text[t];
            curLetterSize = p[curLetter].size;
            if (v == 0) {
                word.size += curLetterSize;
                if (t < s - 1) {
                    word.size += 1
                }
            }
            for (var u = 0; u < curLetterSize; u++) {
                word.points.push(p[curLetter].points[(curLetterSize * v) + u])
            }
            if (t < s - 1) {
                word.points.push(0)
            }
        }
    }
    viewportSize = c();
    $("#featureAnimation, #featureBox").height(viewportSize[1]);
    $("#featureAnimation, #featureBox, .featureTextGreen, .featureTextWhite").width(viewportSize[0]);
    diffword = [];
    for (var v = 0; v < 5; v++) {
        yoffset = v - 2;
        for (var t = 0; t < word.size; t++) {
            xoffset = t - Math.ceil(word.size / 2);
            if (word.points[(v * word.size) + t] == 1) {
                diffword.push({
                    x: xoffset,
                    y: yoffset
                })
            }
        }
    }
    var l = Math.floor(parseInt($("#featureAnimation").width() / 150));
    var w = new TimelineMax({
            delay: 1.2
        }),
        n = $("#featureBackground"),
        h = Math.ceil(($("#featureAnimation").height() / 2) / (l) * (l)),
        f = Math.ceil(($("#featureAnimation").width() / 2) / (l) * (l)),
        x = Math.max(f, h) + 150,
        m = $("#ctrl_slider"),
        a = {
            value: 0
        },
        o = (document.all && !document.addEventListener);
    // w.eventCallback("onComplete", function() {
    //     $('.page-box').fadeTo(0, 1);
    //     w.timeScale(4);
    //     w.reverse();
    //     TweenMax.to("#featureBox, #featureAnimation", 1, {
    //         scale: 0.05,
    //         ease: Expo.easeIn,
    //         backgroundColor: "#fff"
    //     })
    // });
    w.add(e());

    function d(j, i) {
        return Math.ceil(Math.random() * (i - j) + j)
    }

    function q() {
        r = d(10, 240);
        g = d(10, 240);
        b = d(10, 240);
        return "rgb(" + r + "," + g + "," + b + ")"
    }

    function e() {
        var k = new TimelineLite(),
            z = 1,
            B = 45,
            E = 1,
            y = [],
            C = [],
            D, A, F, j;
        for (var B = 0; B < diffword.length; B++) {
            D = $("<div class='star' style='background-color:green; z-index: 99; width:" + l + "px; height:" + l + "px'></div>").appendTo(n);
            j = Math.random() * z * z;
            C.push(D);
            yy = (diffword[B].y * (l + 2));
            xx = (diffword[B].x * (l + 2));
            k.set(D, {
                display: "block"
            }, j);
            TweenLite.set(D, {
                scale: 0.05,
                top: h,
                left: f,
                z: 0.1
            });
            k.add(new TweenMax(D, z, {
                y: yy,
                x: xx,
                scale: 1,
                ease: Expo.easeIn
            }), j)
        }
        while (--B > -1) {
            D = $("<div class='star' style='background-color:" + q() + "; width:" + l + "px; height:" + l + "px'></div>").appendTo(n);
            F = Math.random() * z;
            y.push(D);
            A = Math.random() * Math.PI * 2;
            k.set(D, {
                display: "block"
            }, F);
            if (o) {
                TweenLite.set(D, {
                    width: 1,
                    height: 1,
                    top: h,
                    left: f
                });
                k.add(new TweenMax(D, z, {
                    top: (h + Math.sin(A) * x) | 0,
                    left: (f + Math.cos(A) * x) | 0,
                    width: l,
                    height: l,
                    ease: Expo.easeIn,
                    repeat: E,
                    repeatDelay: Math.random() * z
                }), F)
            } else {
                TweenLite.set(D, {
                    scale: 0.05,
                    top: h,
                    left: f,
                    z: 0.1
                });
                xx = Math.ceil((Math.cos(A) * x) / (l + 2)) * (l + 2), yy = Math.ceil((Math.sin(A) * x) / (l + 2)) * (l + 2);
                k.add(new TweenMax(D, z, {
                    y: yy,
                    x: xx,
                    scale: 5,
                    ease: Cubic.easeIn,
                    repeat: E,
                    repeatDelay: Math.random() * z
                }), F)
            }
        }
        k.set(y, {
            display: "none"
        });
        return k
    }
    TweenLite.set("#featureAnimation", {
        perspective: 700,
        visibility: "visible"
    })
})();