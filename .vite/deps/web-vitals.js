import "./chunk-ROME4SDB.js";

// node_modules/web-vitals/dist/web-vitals.js
var e;
var n;
var t;
var r;
var i;
var a = -1;
var o = function(e3) {
  addEventListener("pageshow", function(n2) {
    n2.persisted && (a = n2.timeStamp, e3(n2));
  }, true);
};
var c = function() {
  return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
};
var u = function() {
  var e3 = c();
  return e3 && e3.activationStart || 0;
};
var f = function(e3, n2) {
  var t2 = c(), r2 = "navigate";
  a >= 0 ? r2 = "back-forward-cache" : t2 && (document.prerendering || u() > 0 ? r2 = "prerender" : document.wasDiscarded ? r2 = "restore" : t2.type && (r2 = t2.type.replace(/_/g, "-")));
  return { name: e3, value: void 0 === n2 ? -1 : n2, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: r2 };
};
var s = function(e3, n2, t2) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e3)) {
      var r2 = new PerformanceObserver(function(e4) {
        Promise.resolve().then(function() {
          n2(e4.getEntries());
        });
      });
      return r2.observe(Object.assign({ type: e3, buffered: true }, t2 || {})), r2;
    }
  } catch (e4) {
  }
};
var d = function(e3, n2, t2, r2) {
  var i2, a2;
  return function(o2) {
    n2.value >= 0 && (o2 || r2) && ((a2 = n2.value - (i2 || 0)) || void 0 === i2) && (i2 = n2.value, n2.delta = a2, n2.rating = function(e4, n3) {
      return e4 > n3[1] ? "poor" : e4 > n3[0] ? "needs-improvement" : "good";
    }(n2.value, t2), e3(n2));
  };
};
var l = function(e3) {
  requestAnimationFrame(function() {
    return requestAnimationFrame(function() {
      return e3();
    });
  });
};
var p = function(e3) {
  var n2 = function(n3) {
    "pagehide" !== n3.type && "hidden" !== document.visibilityState || e3(n3);
  };
  addEventListener("visibilitychange", n2, true), addEventListener("pagehide", n2, true);
};
var v = function(e3) {
  var n2 = false;
  return function(t2) {
    n2 || (e3(t2), n2 = true);
  };
};
var m = -1;
var h = function() {
  return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
};
var g = function(e3) {
  "hidden" === document.visibilityState && m > -1 && (m = "visibilitychange" === e3.type ? e3.timeStamp : 0, T());
};
var y = function() {
  addEventListener("visibilitychange", g, true), addEventListener("prerenderingchange", g, true);
};
var T = function() {
  removeEventListener("visibilitychange", g, true), removeEventListener("prerenderingchange", g, true);
};
var E = function() {
  return m < 0 && (m = h(), y(), o(function() {
    setTimeout(function() {
      m = h(), y();
    }, 0);
  })), { get firstHiddenTime() {
    return m;
  } };
};
var C = function(e3) {
  document.prerendering ? addEventListener("prerenderingchange", function() {
    return e3();
  }, true) : e3();
};
var L = [1800, 3e3];
var b = function(e3, n2) {
  n2 = n2 || {}, C(function() {
    var t2, r2 = E(), i2 = f("FCP"), a2 = s("paint", function(e4) {
      e4.forEach(function(e5) {
        "first-contentful-paint" === e5.name && (a2.disconnect(), e5.startTime < r2.firstHiddenTime && (i2.value = Math.max(e5.startTime - u(), 0), i2.entries.push(e5), t2(true)));
      });
    });
    a2 && (t2 = d(e3, i2, L, n2.reportAllChanges), o(function(r3) {
      i2 = f("FCP"), t2 = d(e3, i2, L, n2.reportAllChanges), l(function() {
        i2.value = performance.now() - r3.timeStamp, t2(true);
      });
    }));
  });
};
var w = [0.1, 0.25];
var S = function(e3, n2) {
  n2 = n2 || {}, b(v(function() {
    var t2, r2 = f("CLS", 0), i2 = 0, a2 = [], c2 = function(e4) {
      e4.forEach(function(e5) {
        if (!e5.hadRecentInput) {
          var n3 = a2[0], t3 = a2[a2.length - 1];
          i2 && e5.startTime - t3.startTime < 1e3 && e5.startTime - n3.startTime < 5e3 ? (i2 += e5.value, a2.push(e5)) : (i2 = e5.value, a2 = [e5]);
        }
      }), i2 > r2.value && (r2.value = i2, r2.entries = a2, t2());
    }, u2 = s("layout-shift", c2);
    u2 && (t2 = d(e3, r2, w, n2.reportAllChanges), p(function() {
      c2(u2.takeRecords()), t2(true);
    }), o(function() {
      i2 = 0, r2 = f("CLS", 0), t2 = d(e3, r2, w, n2.reportAllChanges), l(function() {
        return t2();
      });
    }), setTimeout(t2, 0));
  }));
};
var A = { passive: true, capture: true };
var I = /* @__PURE__ */ new Date();
var P = function(r2, i2) {
  e || (e = i2, n = r2, t = /* @__PURE__ */ new Date(), k(removeEventListener), F());
};
var F = function() {
  if (n >= 0 && n < t - I) {
    var i2 = { entryType: "first-input", name: e.type, target: e.target, cancelable: e.cancelable, startTime: e.timeStamp, processingStart: e.timeStamp + n };
    r.forEach(function(e3) {
      e3(i2);
    }), r = [];
  }
};
var M = function(e3) {
  if (e3.cancelable) {
    var n2 = (e3.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - e3.timeStamp;
    "pointerdown" == e3.type ? function(e4, n3) {
      var t2 = function() {
        P(e4, n3), i2();
      }, r2 = function() {
        i2();
      }, i2 = function() {
        removeEventListener("pointerup", t2, A), removeEventListener("pointercancel", r2, A);
      };
      addEventListener("pointerup", t2, A), addEventListener("pointercancel", r2, A);
    }(n2, e3) : P(n2, e3);
  }
};
var k = function(e3) {
  ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n2) {
    return e3(n2, M, A);
  });
};
var D = [100, 300];
var x = function(t2, i2) {
  i2 = i2 || {}, C(function() {
    var a2, c2 = E(), u2 = f("FID"), l2 = function(e3) {
      e3.startTime < c2.firstHiddenTime && (u2.value = e3.processingStart - e3.startTime, u2.entries.push(e3), a2(true));
    }, m2 = function(e3) {
      e3.forEach(l2);
    }, h2 = s("first-input", m2);
    a2 = d(t2, u2, D, i2.reportAllChanges), h2 && p(v(function() {
      m2(h2.takeRecords()), h2.disconnect();
    })), h2 && o(function() {
      var o2;
      u2 = f("FID"), a2 = d(t2, u2, D, i2.reportAllChanges), r = [], n = -1, e = null, k(addEventListener), o2 = l2, r.push(o2), F();
    });
  });
};
var B = 0;
var R = 1 / 0;
var H = 0;
var N = function(e3) {
  e3.forEach(function(e4) {
    e4.interactionId && (R = Math.min(R, e4.interactionId), H = Math.max(H, e4.interactionId), B = H ? (H - R) / 7 + 1 : 0);
  });
};
var O = function() {
  return i ? B : performance.interactionCount || 0;
};
var q = function() {
  "interactionCount" in performance || i || (i = s("event", N, { type: "event", buffered: true, durationThreshold: 0 }));
};
var j = [200, 500];
var _ = 0;
var z = function() {
  return O() - _;
};
var G = [];
var J = {};
var K = function(e3) {
  var n2 = G[G.length - 1], t2 = J[e3.interactionId];
  if (t2 || G.length < 10 || e3.duration > n2.latency) {
    if (t2)
      t2.entries.push(e3), t2.latency = Math.max(t2.latency, e3.duration);
    else {
      var r2 = { id: e3.interactionId, latency: e3.duration, entries: [e3] };
      J[r2.id] = r2, G.push(r2);
    }
    G.sort(function(e4, n3) {
      return n3.latency - e4.latency;
    }), G.splice(10).forEach(function(e4) {
      delete J[e4.id];
    });
  }
};
var Q = function(e3, n2) {
  n2 = n2 || {}, C(function() {
    var t2;
    q();
    var r2, i2 = f("INP"), a2 = function(e4) {
      e4.forEach(function(e5) {
        (e5.interactionId && K(e5), "first-input" === e5.entryType) && (!G.some(function(n4) {
          return n4.entries.some(function(n5) {
            return e5.duration === n5.duration && e5.startTime === n5.startTime;
          });
        }) && K(e5));
      });
      var n3, t3 = (n3 = Math.min(G.length - 1, Math.floor(z() / 50)), G[n3]);
      t3 && t3.latency !== i2.value && (i2.value = t3.latency, i2.entries = t3.entries, r2());
    }, c2 = s("event", a2, { durationThreshold: null !== (t2 = n2.durationThreshold) && void 0 !== t2 ? t2 : 40 });
    r2 = d(e3, i2, j, n2.reportAllChanges), c2 && ("interactionId" in PerformanceEventTiming.prototype && c2.observe({ type: "first-input", buffered: true }), p(function() {
      a2(c2.takeRecords()), i2.value < 0 && z() > 0 && (i2.value = 0, i2.entries = []), r2(true);
    }), o(function() {
      G = [], _ = O(), i2 = f("INP"), r2 = d(e3, i2, j, n2.reportAllChanges);
    }));
  });
};
var U = [2500, 4e3];
var V = {};
var W = function(e3, n2) {
  n2 = n2 || {}, C(function() {
    var t2, r2 = E(), i2 = f("LCP"), a2 = function(e4) {
      var n3 = e4[e4.length - 1];
      n3 && n3.startTime < r2.firstHiddenTime && (i2.value = Math.max(n3.startTime - u(), 0), i2.entries = [n3], t2());
    }, c2 = s("largest-contentful-paint", a2);
    if (c2) {
      t2 = d(e3, i2, U, n2.reportAllChanges);
      var m2 = v(function() {
        V[i2.id] || (a2(c2.takeRecords()), c2.disconnect(), V[i2.id] = true, t2(true));
      });
      ["keydown", "click"].forEach(function(e4) {
        addEventListener(e4, function() {
          return setTimeout(m2, 0);
        }, true);
      }), p(m2), o(function(r3) {
        i2 = f("LCP"), t2 = d(e3, i2, U, n2.reportAllChanges), l(function() {
          i2.value = performance.now() - r3.timeStamp, V[i2.id] = true, t2(true);
        });
      });
    }
  });
};
var X = [800, 1800];
var Y = function e2(n2) {
  document.prerendering ? C(function() {
    return e2(n2);
  }) : "complete" !== document.readyState ? addEventListener("load", function() {
    return e2(n2);
  }, true) : setTimeout(n2, 0);
};
var Z = function(e3, n2) {
  n2 = n2 || {};
  var t2 = f("TTFB"), r2 = d(e3, t2, X, n2.reportAllChanges);
  Y(function() {
    var i2 = c();
    if (i2) {
      var a2 = i2.responseStart;
      if (a2 <= 0 || a2 > performance.now())
        return;
      t2.value = Math.max(a2 - u(), 0), t2.entries = [i2], r2(true), o(function() {
        t2 = f("TTFB", 0), (r2 = d(e3, t2, X, n2.reportAllChanges))(true);
      });
    }
  });
};
export {
  w as CLSThresholds,
  L as FCPThresholds,
  D as FIDThresholds,
  j as INPThresholds,
  U as LCPThresholds,
  X as TTFBThresholds,
  S as getCLS,
  b as getFCP,
  x as getFID,
  Q as getINP,
  W as getLCP,
  Z as getTTFB,
  S as onCLS,
  b as onFCP,
  x as onFID,
  Q as onINP,
  W as onLCP,
  Z as onTTFB
};
//# sourceMappingURL=web-vitals.js.map
