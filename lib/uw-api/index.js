/*
  Tencent is pleased to support the open source community by making Metis available.
  Copyright (C) 2018 THL A29 Limited, a Tencent company. All rights reserved.
  Licensed under the BSD 3-Clause License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
  https://opensource.org/licenses/BSD-3-Clause
  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

!(function(e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t(
      require("lodash"),
      require("../uw2"),
      require("isomorphic-fetch"),
      require("copy-to-clipboard"),
      require("qs")
    );
  else if ("function" == typeof define && define.amd)
    define([
      "lodash",
      "../uw2",
      "isomorphic-fetch",
      "copy-to-clipboard",
      "qs"
    ], t);
  else {
    var n =
      "object" == typeof exports
        ? t(
            require("lodash"),
            require("../uw2"),
            require("isomorphic-fetch"),
            require("copy-to-clipboard"),
            require("qs")
          )
        : t(
            e.lodash,
            e["../uw2"],
            e["isomorphic-fetch"],
            e["copy-to-clipboard"],
            e.qs
          );
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(window, function(e, t, n, r, i) {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            n.d(
              r,
              i,
              function(t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 6))
    );
  })([
    function(t, n) {
      t.exports = e;
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, t) {
      e.exports = n;
    },
    function(e, t, n) {
      var r, i;
      /*!
       * JavaScript Cookie v2.2.0
       * https://github.com/js-cookie/js-cookie
       *
       * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
       * Released under the MIT license
       */ !(function(o) {
        if (
          (void 0 ===
            (i = "function" == typeof (r = o) ? r.call(t, n, t, e) : r) ||
            (e.exports = i),
          !0,
          (e.exports = o()),
          !!0)
        ) {
          var a = window.Cookies,
            s = (window.Cookies = o());
          s.noConflict = function() {
            return (window.Cookies = a), s;
          };
        }
      })(function() {
        function e() {
          for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) t[r] = n[r];
          }
          return t;
        }
        return (function t(n) {
          function r(t, i, o) {
            var a;
            if ("undefined" != typeof document) {
              if (arguments.length > 1) {
                if (
                  "number" ==
                  typeof (o = e({ path: "/" }, r.defaults, o)).expires
                ) {
                  var s = new Date();
                  s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires),
                    (o.expires = s);
                }
                o.expires = o.expires ? o.expires.toUTCString() : "";
                try {
                  (a = JSON.stringify(i)), /^[\{\[]/.test(a) && (i = a);
                } catch (e) {}
                (i = n.write
                  ? n.write(i, t)
                  : encodeURIComponent(String(i)).replace(
                      /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                      decodeURIComponent
                    )),
                  (t = (t = (t = encodeURIComponent(String(t))).replace(
                    /%(23|24|26|2B|5E|60|7C)/g,
                    decodeURIComponent
                  )).replace(/[\(\)]/g, escape));
                var c = "";
                for (var u in o)
                  o[u] && ((c += "; " + u), !0 !== o[u] && (c += "=" + o[u]));
                return (document.cookie = t + "=" + i + c);
              }
              t || (a = {});
              for (
                var d = document.cookie ? document.cookie.split("; ") : [],
                  f = /(%[0-9A-Z]{2})+/g,
                  l = 0;
                l < d.length;
                l++
              ) {
                var p = d[l].split("="),
                  g = p.slice(1).join("=");
                this.json || '"' !== g.charAt(0) || (g = g.slice(1, -1));
                try {
                  var v = p[0].replace(f, decodeURIComponent);
                  if (
                    ((g = n.read
                      ? n.read(g, v)
                      : n(g, v) || g.replace(f, decodeURIComponent)),
                    this.json)
                  )
                    try {
                      g = JSON.parse(g);
                    } catch (e) {}
                  if (t === v) {
                    a = g;
                    break;
                  }
                  t || (a[v] = g);
                } catch (e) {}
              }
              return a;
            }
          }
          return (
            (r.set = r),
            (r.get = function(e) {
              return r.call(r, e);
            }),
            (r.getJSON = function() {
              return r.apply({ json: !0 }, [].slice.call(arguments));
            }),
            (r.defaults = {}),
            (r.remove = function(t, n) {
              r(t, "", e(n, { expires: -1 }));
            }),
            (r.withConverter = t),
            r
          );
        })(function() {});
      });
    },
    function(e, t) {
      e.exports = r;
    },
    function(e, t) {
      e.exports = i;
    },
    function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(5),
        i = n.n(r),
        o = n(4),
        a = n.n(o),
        s = n(3),
        c = n.n(s),
        u = n(1),
        d = n(2),
        f = n.n(d),
        l = n(0),
        p = n.n(l),
        g =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          },
        v = (function() {
          return function(e, t, n) {
            var r = this;
            (this.isWang = !1),
              (this.request = function(e) {
                var t = e.url,
                  n = e.data,
                  i = e.success,
                  o =
                    void 0 === i
                      ? function(e) {
                          return e;
                        }
                      : i,
                  a = e.failed,
                  s = e.method,
                  c = void 0 === s ? "GET" : s,
                  u = e.headers,
                  d = e.needLogin,
                  f = void 0 === d || d;
                if (r.isWang) {
                  var l = p.a.get(window, [
                    "_g_config",
                    "apikey",
                    window._g_appName
                  ]);
                  p.a.set(r.headers, ["apikey"], l || r.apikey);
                }
                var v = w("" + r.origin + t, {
                    method: c,
                    body: n ? JSON.stringify(n) : void 0,
                    mode: r.crossOrigin,
                    credentials: r.cookies,
                    headers: new Headers(
                      g(
                        { "Content-Type": "application/json;charset=UTF-8" },
                        r.headers,
                        u
                      )
                    )
                  }),
                  m = v
                    .then(h)
                    .then(
                      (function(e, t, n, r) {
                        return function(i) {
                          var o = i.code;
                          if (!t || !e || "4000" !== o)
                            return p.a.isFunction(r) ? r(i) : i;
                          p.a.isFunction(n)
                            ? n()
                            : window.uw.event.emit("@@auth_expired");
                        };
                      })(r.isWang, f, r.custom.onExpired, r.custom.onRequest)
                    )
                    .then(o)
                    .catch(a);
                return (m.abort = v.abort), m;
              }),
              (this.upload = function(e, t, n) {
                void 0 === t && (t = !0), void 0 === n && (n = "file[]");
                var i = e.onProgress,
                  o = void 0 === i ? function() {} : i,
                  a = e.params,
                  s = e.url,
                  c = e.file,
                  u = e.needConvert,
                  d = void 0 === u ? t : u,
                  f = e.filename,
                  l = void 0 === f ? n : f,
                  g = new FormData();
                g.append(l, c),
                  p.a.forOwn(a, function(e, t) {
                    g.append(t, e);
                  });
                var v = new XMLHttpRequest();
                !p.a.isUndefined(e) &&
                  o &&
                  (v.upload.addEventListener("progress", function(e) {
                    if (e.lengthComputable) {
                      var t = Math.floor((e.loaded / e.total) * 100);
                      o("uploading", t);
                    } else o("uploading", null);
                  }),
                  v.addEventListener("readystatechange", function() {
                    if (4 === v.readyState)
                      if (v.status >= 200 && v.status < 300) {
                        var e = JSON.parse(v.response);
                        r.isWang && "4000" === e.code
                          ? window.uw.event.emit("@@auth_expired")
                          : o("done", e);
                      } else o("error", v.response);
                  }),
                  v.upload.addEventListener("error", function(e) {
                    o("error", e);
                  }),
                  v.upload.addEventListener("abort", function(e) {
                    o("abort", e);
                  }));
                var h = d ? r.origin.replace("gw.", "access.") : r.origin;
                return (
                  v.open("post", "" + h + s, !0),
                  (v.withCredentials = "include" === r.cookies),
                  p.a.forOwn(r.headers, function(e, t) {
                    v.setRequestHeader(t, e);
                  }),
                  v.send(g),
                  v
                );
              }),
              (this.download = function(e, t, n) {
                void 0 === n && (n = !0);
                var i = {};
                p.a.isString(e) ? (i.url = e) : (i = e);
                var o = i.url,
                  a = i.filename,
                  s = void 0 === a ? t : a,
                  c = i.needConvert,
                  u = void 0 === c ? n : c,
                  d = "" + r.origin + o,
                  f = document.createElement("a");
                s && (f.download = s),
                  u
                    ? ((d = "" + r.origin.replace("gw.", "access.") + o),
                      (f.href = d),
                      (f.target = "_blank"),
                      f.click())
                    : w(d, {
                        mode: "cors",
                        credentials: "include",
                        headers: r.headers
                      }).then(function(e) {
                        return e.blob().then(function(e) {
                          if (window.ActiveXObject || "ActiveXObject" in window)
                            window.navigator.msSaveBlob(e, s);
                          else {
                            var t = window.URL.createObjectURL(e),
                              n = document.createElement("a");
                            (n.href = t),
                              (n.download = s),
                              document.body.appendChild(n),
                              n.click(),
                              setTimeout(function() {
                                window.URL.revokeObjectURL(t);
                              }, 0);
                          }
                        });
                      });
              });
            var i = e[t];
            switch (((this.custom = n), !0)) {
              case p.a.startsWith(i, "devzhiyun"):
              case p.a.startsWith(i, "zhiyun"):
                var o = p.a.startsWith(i, "devzhiyun"),
                  a = i.split("/")[1],
                  s = window.location.protocol,
                  c = (function(e, t) {
                    var n = e.replace(t + "//", ""),
                      r = /^(.*)zhiyun.*$/g.exec(n);
                    if (r) {
                      var i = r[1];
                      return "" === i ? "www" : i;
                    }
                    return "www";
                  })(window.location.origin, s);
                (c = a ? a + "." : "www" === c ? "" : c),
                  (this.origin =
                    s +
                    "//" +
                    (o ? "dev.gw" : "gw") +
                    "." +
                    c +
                    "zhiyun." +
                    document.domain),
                  (this.crossOrigin = "cors"),
                  (this.cookies = "include"),
                  (this.headers = { apikey: e.apikey, "Request-Id": m() }),
                  (this.apikey = e.apikey),
                  (this.isWang = !0);
                break;
              case p.a.startsWith(i, "wang"):
                s = window.location.protocol;
                var u = i.split("/")[1];
                (this.origin = s + "//" + u),
                  (this.crossOrigin = "cors"),
                  (this.cookies = "include"),
                  (this.headers = { apikey: e.apikey, "Request-Id": m() }),
                  (this.apikey = e.apikey),
                  (this.isWang = !0);
                break;
              default:
                var d = i,
                  f = d.origin,
                  l = void 0 === f ? "" : f,
                  v = d.crossOrigin,
                  y = void 0 === v ? "no-cors" : v,
                  x = d.cookies,
                  b = void 0 === x ? "same-origin" : x,
                  S = d.headers;
                (this.origin = l),
                  (this.crossOrigin = y),
                  (this.cookies = b),
                  (this.headers = S);
            }
          };
        })();
      function h(e) {
        if (e.status >= 200 && e.status < 300) return e.json();
        throw new Error("错误：" + e.status + " " + e.statusText);
      }
      function w(e, t) {
        var n,
          r = new Promise(function(e, t) {
            n = function() {
              t("abort.");
            };
          }),
          i = Promise.race([f()(e, t), r]);
        return (i.abort = n), i;
      }
      function m() {
        var e = new Date().getTime();
        return (
          "web" +
          "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return (
              (e = Math.floor(e / 16)),
              ("x" === t ? n : (7 & n) | 8).toString(16)
            );
          })
        );
      }
      var y = "uwStore",
        x = (function() {
          return function() {
            var e = this;
            (this.set = function(t, n) {
              var r = e.getStore();
              p.a.set(r, t, n), e.setStore(r);
            }),
              (this.get = function(t, n) {
                var r = e.getStore();
                return p.a.isUndefined(t) ? r : p.a.get(r, t) || n;
              }),
              (this.clear = function(t) {
                var n = e.getStore();
                p.a.unset(n, t), e.setStore(n);
              }),
              (this.getStore = function() {
                var e = localStorage.getItem(y);
                return e ? JSON.parse(e) : {};
              }),
              (this.setStore = function(e) {
                localStorage.setItem(y, JSON.stringify(e));
              }),
              p.a.isUndefined(localStorage.getItem(y)) &&
                localStorage.setItem(y, JSON.stringify({}));
          };
        })();
      function b(e, t) {
        var n = { isValidated: !0, errors: {} };
        return t
          ? (p.a.forEach(e, function(e, r) {
              var i = t[r];
              if (p.a.isArray(i) && !p.a.isEmpty(i))
                for (var o = 0, a = i; o < a.length; o++) {
                  var s = a[o];
                  if (s) {
                    var c = S(s, e);
                    if (c) {
                      (n.isValidated = !1), (n.errors[r] = c);
                      break;
                    }
                  }
                }
            }),
            n)
          : n;
      }
      function S(e, t) {
        var n = e[0],
          r = e[1],
          i = e[2];
        switch (n) {
          case "required":
            return p.a.isEmpty(t) && !p.a.isNumber(t) && !p.a.isNil(t) && r;
          case "string":
            return p.a.isString(t) && r;
          case "number":
            return p.a.isNumber(t) && r;
          case "array":
            return p.a.isArray(t) && r;
          case "reg":
            return p.a.isRegExp(r) && !t.match(r) && i;
          case "!reg":
          case "reg!":
            return p.a.isRegExp(r) && t.match(r) && i;
          case "length":
            return p.a.isNumber(r) && t.length > r && i;
          case "min-length":
            return p.a.isNumber(r) && t.length < r && i;
          case "custom":
            return p.a.isFunction(r) && r(t) && i;
          default:
            return !1;
        }
      }
      var O = (function() {
          return function() {
            (this.add = function(e, t) {
              var n = e.split(".").map(function(e) {
                  return Number(e);
                }),
                r = n.length;
              return (
                p.a.isNumber(t) ? (n[r - 1] += t) : n[r - 1]++, n.join(".")
              );
            }),
              (this.gt = function(e, t) {
                if (!p.a.isString(e) || !p.a.isString(t))
                  throw Error("version.gt: invalid arguments.");
                var n = e.split(".").map(function(e) {
                    return Number(e);
                  }),
                  r = t.split(".").map(function(e) {
                    return Number(e);
                  });
                return (
                  n[0] > r[0] ||
                  (n[0] === r[0] && n[1] > r[1]) ||
                  (n[0] === r[0] && n[1] === r[1] && n[2] > r[2])
                );
              });
          };
        })(),
        k = document.getElementById("uw-root");
      var j = {
        on: function(e, t) {
          k && k.addEventListener(e, t);
        },
        off: function(e, t) {
          k && k.removeEventListener(e, t);
        },
        emit: function(e, t) {
          var n = new CustomEvent(e, { detail: t });
          k && k.dispatchEvent(n);
        },
        once: function(e, t) {
          var n = function(r) {
            t(r), k && k.removeEventListener(e, n);
          };
          k && k.addEventListener(e, n);
        }
      };
      function q(e) {
        if ((void 0 === e && (e = []), !Array.isArray(e)))
          throw Error("[uw.queue]: list must be array");
        for (var t = 0, n = e; t < n.length; t++) {
          var r = n[t];
          if (Array.isArray(r)) {
            var i = r[0],
              o = r[1];
            if (i) return o;
          }
        }
      }
      var E =
        Object.assign ||
        function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        };
      t.default = function(e) {
        var t = e.request,
          n = e.env,
          r = e.custom,
          o = new v(t, n, void 0 === r ? {} : r);
        Object.assign(
          window,
          E({}, u, {
            Header: u.View.Header,
            Sider: u.View.Sider,
            ActionBar: u.View.ActionBar,
            Page: u.View.Page,
            Content: u.View.Content,
            Title: u.View.Title,
            SplitPanel: u.View.SplitPanel,
            FormItem: u.Form.Item,
            TextArea: u.Input.TextArea,
            RadioGroup: u.Radio.Group,
            uw: {
              qs: i.a,
              copy: a.a,
              cookie: c.a,
              validate: b,
              event: j,
              queue: q,
              request: o.request,
              upload: o.upload,
              download: o.download,
              storage: new x(),
              version: new O(),
              toReactString: function(e) {
                return {
                  __html: e
                    .replace(/( |　)/g, "&nbsp;")
                    .replace(/\n|\r\n/g, "<br/>")
                };
              },
              render: function(e) {
                return e();
              },
              getGlobalConfig: function(e) {
                return (
                  window._g_config || (window._g_config = {}),
                  e ? window._g_config[e] : window._g_config
                );
              }
            }
          })
        );
      };
    }
  ]);
});
