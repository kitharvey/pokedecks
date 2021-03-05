_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill.default;
}

const data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
let {
  assetPrefix,
  page
} = data;
assetPrefix = assetPrefix || '';
let mostRecentHash = null;
/* eslint-disable-next-line */

let curHash = __webpack_require__.h();
const hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


async function tryApplyUpdates() {
  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }

  try {
    const res = await fetch(`${hotUpdatePath}${curHash}.hot-update.json`);
    const jsonData = await res.json();
    const curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

    const pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(mod => {
      return mod.indexOf(`pages${curPage.substr(0, 1) === '/' ? curPage : `/${curPage}`}`) !== -1 || mod.indexOf(`pages${curPage.substr(0, 1) === '/' ? curPage : `/${curPage}`}`.replace(/\//g, '\\')) !== -1;
    });

    if (pageUpdated) {
      document.location.reload(true);
    } else {
      curHash = mostRecentHash;
    }
  } catch (err) {
    console.error('Error occurred checking for update', err);
    document.location.reload(true);
  }
}

(0, _eventsource.getEventSourceWrapper)({
  path: `${assetPrefix}/_next/webpack-hmr`
}).addMessageListener(event => {
  if (event.data === '\uD83D\uDC93') {
    return;
  }

  try {
    const message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, () => page);
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
const eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(cb => {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: () => {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function (fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: cb => {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function () {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


let evtSource;
let currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  const pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  const url = `${assetPrefix}/_next/webpack-hmr?page=${currentPage}`;
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(event => {
    if (event.data.indexOf('{') === -1) return;

    try {
      const payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(pageRes => {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImRvY3VtZW50IiwiYXNzZXRQcmVmaXgiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJob3RVcGRhdGVQYXRoIiwibW9kdWxlIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJyZXMiLCJmZXRjaCIsImpzb25EYXRhIiwiY3VyUGFnZSIsInBhZ2UiLCJwYWdlVXBkYXRlZCIsIkFycmF5IiwiT2JqZWN0IiwibW9kIiwiY29uc29sZSIsInBhdGgiLCJldmVudCIsIm1lc3NhZ2UiLCJ0cnlBcHBseVVwZGF0ZXMiLCJldmVudENhbGxiYWNrcyIsImxhc3RBY3Rpdml0eSIsImxpc3RlbmVycyIsIm9wdGlvbnMiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJzb3VyY2UiLCJpIiwiY2IiLCJjbGVhckludGVydmFsIiwic2V0VGltZW91dCIsImNsb3NlIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwiUmVzcG9uc2UiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyIiwiQWJvcnRDb250cm9sbGVyIiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsIm9jdGV0c0NvdW50IiwiY29kZVBvaW50IiwiYml0c05lZWRlZCIsIlJFUExBQ0VSIiwic3RyaW5nIiwib2N0ZXRzIiwib2N0ZXQiLCJ2YWxpZCIsIlN0cmluZyIsInN1cHBvcnRzU3RyZWFtT3B0aW9uIiwic3RyZWFtIiwiayIsInRoYXQiLCJ4aHIiLCJzdGF0ZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJvblN0YXJ0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImNvbnRlbnRUeXBlIiwib25Qcm9ncmVzcyIsInJlc3BvbnNlVGV4dCIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJYSFJXcmFwcGVyIiwibmFtZSIsImMiLCJtYXAiLCJhcnJheSIsImFsbCIsImxpbmUiLCJwYXJ0cyIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJIZWFkZXJzUG9seWZpbGwiLCJYSFJUcmFuc3BvcnQiLCJvZmZzZXQiLCJjaHVuayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsImhlYWRlcnMiLCJvblN0YXJ0Q2FsbGJhY2siLCJvbkZpbmlzaENhbGxiYWNrIiwiSGVhZGVyc1dyYXBwZXIiLCJjb250cm9sbGVyIiwic2lnbmFsIiwidGV4dERlY29kZXIiLCJjcmVkZW50aWFscyIsIndpdGhDcmVkZW50aWFscyIsImNhY2hlIiwicmVhZGVyIiwicmVzcG9uc2UiLCJyZWFkTmV4dENodW5rIiwicmVzdWx0IiwicmVzb2x2ZSIsInJlamVjdCIsIlByb21pc2UiLCJFdmVudFRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJsZW5ndGgiLCJsaXN0ZW5lciIsInRocm93RXJyb3IiLCJ0eXBlIiwiZm91bmQiLCJmaWx0ZXJlZCIsIkV2ZW50IiwiTWVzc2FnZUV2ZW50IiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJmaXJlIiwiZiIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwibGFzdEV2ZW50SWQiLCJyZXRyeSIsIndhc0FjdGl2aXR5IiwiQ3VycmVudFRyYW5zcG9ydCIsInRyYW5zcG9ydCIsImNhbmNlbEZ1bmN0aW9uIiwiY3VycmVudFN0YXRlIiwiZGF0YUJ1ZmZlciIsImxhc3RFdmVudElkQnVmZmVyIiwiZXZlbnRUeXBlQnVmZmVyIiwidGV4dEJ1ZmZlciIsImZpZWxkU3RhcnQiLCJ2YWx1ZVN0YXJ0IiwiZXMiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwieCIsImNhbGxiYWNrIiwiZXZ0U291cmNlIiwicGF0aG5hbWUiLCJwYXRobmFtZUZuIiwiY2xvc2VQaW5nIiwiY3VycmVudFBhZ2UiLCJvbmRlbWFuZCIsInBheWxvYWQiLCJsb2NhdGlvbiIsInBhZ2VSZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFKQTs7O0FBTUEsSUFBSSxDQUFDQSxNQUFNLENBQVgsYUFBeUI7QUFDdkJBLFFBQU0sQ0FBTkEsY0FBcUJDLHFCQUFyQkQ7QUFHRjs7QUFBQSxNQUFNRSxJQUFJ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SUFBSSxDQUFKQSxNQUFXb0IsS0FBSyxDQUFoQyxJQUFnQnBCLENBQWhCOztBQUNBLFVBQUl1SyxPQUFPLENBQVgsU0FBcUI7QUFDbkI7QUFDQTtBQUNBN0osYUFBSyxDQUFDOEosUUFBUSxDQUFULE1BQWdCO0FBQ25CMUUscUJBQVcsRUFEYnBGO0FBQXFCLFNBQWhCLENBQUxBLE1BRVMrSixPQUFELElBQWE7QUFDbkIsY0FBSUEsT0FBTyxDQUFQQSxXQUFKLEtBQTRCO0FBQzFCRCxvQkFBUSxDQUFSQTtBQUVIO0FBTkQ5SjtBQVFIO0FBQUMsS0FiRixDQWFFLFlBQVk7QUFDWlEsYUFBTyxDQUFQQTtBQUVIO0FBbEJEK0k7QUFtQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNEO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCIvKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cbmltcG9ydCBFdmVudFNvdXJjZVBvbHlmaWxsIGZyb20gJy4vZXZlbnQtc291cmNlLXBvbHlmaWxsJ1xuaW1wb3J0IHsgZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIH0gZnJvbSAnLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlJ1xuaW1wb3J0IHsgc2V0dXBQaW5nIH0gZnJvbSAnLi9vbi1kZW1hbmQtZW50cmllcy11dGlscydcbmltcG9ydCB7IGRpc3BsYXlDb250ZW50IH0gZnJvbSAnLi9mb3VjJ1xuXG5pZiAoIXdpbmRvdy5FdmVudFNvdXJjZSkge1xuICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBFdmVudFNvdXJjZVBvbHlmaWxsXG59XG5cbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpXG5sZXQgeyBhc3NldFByZWZpeCwgcGFnZSB9ID0gZGF0YVxuYXNzZXRQcmVmaXggPSBhc3NldFByZWZpeCB8fCAnJ1xubGV0IG1vc3RSZWNlbnRIYXNoID0gbnVsbFxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5sZXQgY3VySGFzaCA9IF9fd2VicGFja19oYXNoX19cbmNvbnN0IGhvdFVwZGF0ZVBhdGggPVxuICBhc3NldFByZWZpeCArIChhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpID8gJycgOiAnLycpICsgJ19uZXh0L3N0YXRpYy93ZWJwYWNrLydcblxuLy8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpIHtcbiAgLy8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cbiAgLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcmV0dXJuIG1vc3RSZWNlbnRIYXNoICE9PSBfX3dlYnBhY2tfaGFzaF9fXG59XG5cbi8vIFdlYnBhY2sgZGlzYWxsb3dzIHVwZGF0ZXMgaW4gb3RoZXIgc3RhdGVzLlxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xuICByZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcbi8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cbmFzeW5jIGZ1bmN0aW9uIHRyeUFwcGx5VXBkYXRlcygpIHtcbiAgaWYgKCFpc1VwZGF0ZUF2YWlsYWJsZSgpIHx8ICFjYW5BcHBseVVwZGF0ZXMoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc3QgY3VyUGFnZSA9IHBhZ2UgPT09ICcvJyA/ICdpbmRleCcgOiBwYWdlXG4gICAgLy8gd2VicGFjayA1IHVzZXMgYW4gYXJyYXkgaW5zdGVhZFxuICAgIGNvbnN0IHBhZ2VVcGRhdGVkID0gKEFycmF5LmlzQXJyYXkoanNvbkRhdGEuYylcbiAgICAgID8ganNvbkRhdGEuY1xuICAgICAgOiBPYmplY3Qua2V5cyhqc29uRGF0YS5jKVxuICAgICkuc29tZSgobW9kKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gXG4gICAgICAgICkgIT09IC0xIHx8XG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7XG4gICAgICAgICAgICBjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWBcbiAgICAgICAgICB9YC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKVxuICAgICAgICApICE9PSAtMVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAocGFnZVVwZGF0ZWQpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJIYXNoID0gbW9zdFJlY2VudEhhc2hcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIGNoZWNraW5nIGZvciB1cGRhdGUnLCBlcnIpXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gIH1cbn1cblxuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHtcbiAgcGF0aDogYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yYCxcbn0pLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmRhdGEgPT09ICdcXHVEODNEXFx1REM5MycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcblxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3N5bmMnIHx8IG1lc3NhZ2UuYWN0aW9uID09PSAnYnVpbHQnKSB7XG4gICAgICBpZiAoIW1lc3NhZ2UuaGFzaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG1vc3RSZWNlbnRIYXNoID0gbWVzc2FnZS5oYXNoXG4gICAgICB0cnlBcHBseVVwZGF0ZXMoKVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdyZWxvYWRQYWdlJykge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfVxuICB9IGNhdGNoIChleCkge1xuICAgIGNvbnNvbGUud2FybignSW52YWxpZCBITVIgbWVzc2FnZTogJyArIGV2ZW50LmRhdGEgKyAnXFxuJyArIGV4KVxuICB9XG59KVxuXG5zZXR1cFBpbmcoYXNzZXRQcmVmaXgsICgpID0+IHBhZ2UpXG5kaXNwbGF5Q29udGVudCgpXG4iLCJjb25zdCBldmVudENhbGxiYWNrcyA9IFtdXG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gIHZhciBzb3VyY2VcbiAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgdmFyIGxpc3RlbmVycyA9IFtdXG5cbiAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIHtcbiAgICBvcHRpb25zLnRpbWVvdXQgPSAyMCAqIDEwMDBcbiAgfVxuXG4gIGluaXQoKVxuICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ldyBEYXRlKCkgLSBsYXN0QWN0aXZpdHkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMilcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKVxuICAgIHNvdXJjZS5vbm9wZW4gPSBoYW5kbGVPbmxpbmVcbiAgICBzb3VyY2Uub25lcnJvciA9IGhhbmRsZURpc2Nvbm5lY3RcbiAgICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coJ1tITVJdIGNvbm5lY3RlZCcpXG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KVxuICAgIH1cblxuICAgIGV2ZW50Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICBpZiAoIWNiLnVuZmlsdGVyZWQgJiYgZXZlbnQuZGF0YS5pbmRleE9mKCdhY3Rpb24nKSA9PT0gLTEpIHJldHVyblxuICAgICAgY2IoZXZlbnQpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICBzb3VyY2UuY2xvc2UoKVxuICAgIHNldFRpbWVvdXQoaW5pdCwgb3B0aW9ucy50aW1lb3V0KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgfSxcbiAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uIChmbikge1xuICAgICAgbGlzdGVuZXJzLnB1c2goZm4pXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm9uZGVtYW5kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogKGNiKSA9PiB7XG4gICAgICAgIGV2ZW50Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgICB9LFxuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW1wcm92ZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0V2ZW50U291cmNlL1xuLy8gQXZhaWxhYmxlIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG52YXIgUmVzcG9uc2UgPSB3aW5kb3cuUmVzcG9uc2VcbnZhciBUZXh0RGVjb2RlciA9IHdpbmRvdy5UZXh0RGVjb2RlclxudmFyIFRleHRFbmNvZGVyID0gd2luZG93LlRleHRFbmNvZGVyXG52YXIgQWJvcnRDb250cm9sbGVyID0gd2luZG93LkFib3J0Q29udHJvbGxlclxuXG5pZiAoQWJvcnRDb250cm9sbGVyID09IHVuZGVmaW5lZCkge1xuICBBYm9ydENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaWduYWwgPSBudWxsXG4gICAgdGhpcy5hYm9ydCA9IGZ1bmN0aW9uICgpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpIHtcbiAgdGhpcy5iaXRzTmVlZGVkID0gMFxuICB0aGlzLmNvZGVQb2ludCA9IDBcbn1cblxuVGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKG9jdGV0cykge1xuICBmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsIHNoaWZ0LCBvY3RldHNDb3VudCkge1xuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAwODAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MDdmZlxuICAgIH1cbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHgwODAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGQ3ZmYpIHx8XG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHhlMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGZmZmYpXG4gICAgICApXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAxMDAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgxMGZmZmZcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICBmdW5jdGlvbiBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpIHtcbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDEpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj4gNiA+IDE1ID8gMyA6IGNvZGVQb2ludCA+IDMxID8gMiA6IDFcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAyKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID4gMTUgPyAzIDogMlxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDMpIHtcbiAgICAgIHJldHVybiAzXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigpXG4gIH1cbiAgdmFyIFJFUExBQ0VSID0gMHhmZmZkXG4gIHZhciBzdHJpbmcgPSAnJ1xuICB2YXIgYml0c05lZWRlZCA9IHRoaXMuYml0c05lZWRlZFxuICB2YXIgY29kZVBvaW50ID0gdGhpcy5jb2RlUG9pbnRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvY3RldHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgb2N0ZXQgPSBvY3RldHNbaV1cbiAgICBpZiAoYml0c05lZWRlZCAhPT0gMCkge1xuICAgICAgaWYgKFxuICAgICAgICBvY3RldCA8IDEyOCB8fFxuICAgICAgICBvY3RldCA+IDE5MSB8fFxuICAgICAgICAhdmFsaWQoXG4gICAgICAgICAgKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKSxcbiAgICAgICAgICBiaXRzTmVlZGVkIC0gNixcbiAgICAgICAgICBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAob2N0ZXQgPj0gMCAmJiBvY3RldCA8PSAxMjcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXRcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMTkyICYmIG9jdGV0IDw9IDIyMykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDFcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAzMVxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyMjQgJiYgb2N0ZXQgPD0gMjM5KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMlxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDE1XG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDI0MCAmJiBvY3RldCA8PSAyNDcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgN1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgYml0c05lZWRlZCAhPT0gMCAmJlxuICAgICAgICAhdmFsaWQoY29kZVBvaW50LCBiaXRzTmVlZGVkLCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJpdHNOZWVkZWQgLT0gNlxuICAgICAgY29kZVBvaW50ID0gKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSA+PiAxMCkpXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAgIDB4ZGMwMCArICgoY29kZVBvaW50IC0gMHhmZmZmIC0gMSkgJiAweDNmZilcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLmJpdHNOZWVkZWQgPSBiaXRzTmVlZGVkXG4gIHRoaXMuY29kZVBvaW50ID0gY29kZVBvaW50XG4gIHJldHVybiBzdHJpbmdcbn1cblxuLy8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cbnZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSgndGVzdCcpLCB7XG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgIH0pID09PSAndGVzdCdcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIElFLCBFZGdlXG5pZiAoXG4gIFRleHREZWNvZGVyID09IHVuZGVmaW5lZCB8fFxuICBUZXh0RW5jb2RlciA9PSB1bmRlZmluZWQgfHxcbiAgIXN1cHBvcnRzU3RyZWFtT3B0aW9uKClcbikge1xuICBUZXh0RGVjb2RlciA9IFRleHREZWNvZGVyUG9seWZpbGxcbn1cblxudmFyIGsgPSBmdW5jdGlvbiAoKSB7fVxuXG5mdW5jdGlvbiBYSFJXcmFwcGVyKHhocikge1xuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gIHRoaXMucmVzcG9uc2VUeXBlID0gJydcbiAgdGhpcy5yZWFkeVN0YXRlID0gMFxuICB0aGlzLnN0YXR1cyA9IDBcbiAgdGhpcy5zdGF0dXNUZXh0ID0gJydcbiAgdGhpcy5yZXNwb25zZVRleHQgPSAnJ1xuICB0aGlzLm9ucHJvZ3Jlc3MgPSBrXG4gIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICB0aGlzLl9jb250ZW50VHlwZSA9ICcnXG4gIHRoaXMuX3hociA9IHhoclxuICB0aGlzLl9zZW5kVGltZW91dCA9IDBcbiAgdGhpcy5fYWJvcnQgPSBrXG59XG5cblhIUldyYXBwZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgdGhpcy5fYWJvcnQodHJ1ZSlcblxuICB2YXIgdGhhdCA9IHRoaXNcbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICB2YXIgc3RhdGUgPSAxXG4gIHZhciB0aW1lb3V0ID0gMFxuXG4gIHRoaXMuX2Fib3J0ID0gZnVuY3Rpb24gKHNpbGVudCkge1xuICAgIGlmICh0aGF0Ll9zZW5kVGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KVxuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICB4aHIub25sb2FkID0ga1xuICAgICAgeGhyLm9uZXJyb3IgPSBrXG4gICAgICB4aHIub25hYm9ydCA9IGtcbiAgICAgIHhoci5vbnByb2dyZXNzID0ga1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGtcbiAgICAgIC8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICAvLyBPcGVyYSA8IDEwOiBYTUxIdHRwUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICB4aHIuYWJvcnQoKVxuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0XG4gICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUgPSAwXG4gIH1cblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhdGUgPT09IDEpIHtcbiAgICAgIC8vIHN0YXRlID0gMjtcbiAgICAgIHZhciBzdGF0dXMgPSAwXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9ICcnXG4gICAgICB2YXIgY29udGVudFR5cGUgPSB1bmRlZmluZWRcbiAgICAgIGlmICghKCdjb250ZW50VHlwZScgaW4geGhyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgICAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4gICAgICAgICAgLy8gT3BlcmEgPCAxMSB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMlxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxuICAgICAgICAgIHN0YXR1cyA9IDBcbiAgICAgICAgICBzdGF0dXNUZXh0ID0gJydcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc3ODU0XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICBzdGF0dXNUZXh0ID0gJ09LJ1xuICAgICAgICBjb250ZW50VHlwZSA9IHhoci5jb250ZW50VHlwZVxuICAgICAgfVxuICAgICAgaWYgKHN0YXR1cyAhPT0gMCkge1xuICAgICAgICBzdGF0ZSA9IDJcbiAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gMlxuICAgICAgICB0aGF0LnN0YXR1cyA9IHN0YXR1c1xuICAgICAgICB0aGF0LnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0XG4gICAgICAgIHRoYXQuX2NvbnRlbnRUeXBlID0gY29udGVudFR5cGVcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBvblN0YXJ0KClcbiAgICBpZiAoc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gM1xuICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9ICcnXG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJRSA4IC0gOSB3aXRoIFhNTEh0dHBSZXF1ZXN0XG4gICAgICB9XG4gICAgICB0aGF0LnJlYWR5U3RhdGUgPSAzXG4gICAgICB0aGF0LnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dFxuICAgICAgdGhhdC5vbnByb2dyZXNzKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEZpcmVmb3ggNTIgZmlyZXMgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSA0KSB3aXRob3V0IGZpbmFsIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gMylcbiAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxuICAgIG9uUHJvZ3Jlc3MoKVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uUmVhZHlTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyICE9IHVuZGVmaW5lZCkge1xuICAgICAgLy8gT3BlcmEgMTJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBvbkZpbmlzaCgpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICBvblN0YXJ0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDUwMClcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG4gIHhoci5vbmxvYWQgPSBvbkZpbmlzaFxuICB4aHIub25lcnJvciA9IG9uRmluaXNoXG4gIC8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW9yLCBidXQgaXQgaXMgYmV0dGVyIHRoYW4ganVzdCBpZ25vcmUgYWJvcnRcbiAgLy8gc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc2ODU5NlxuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcbiAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE1MzU3MFxuICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcbiAgeGhyLm9uYWJvcnQgPSBvbkZpbmlzaFxuXG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xuICBpZiAoXG4gICAgISgnc2VuZEFzQmluYXJ5JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmXG4gICAgISgnbW96QW5vbicgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKVxuICApIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IG9uUHJvZ3Jlc3NcbiAgfVxuXG4gIC8vIElFIDggLSA5IChYTUxIVFRQUmVxdWVzdClcbiAgLy8gT3BlcmEgPCAxMlxuICAvLyBGaXJlZm94IDwgMy41XG4gIC8vIEZpcmVmb3ggMy41IC0gMy42IC0gPyA8IDkuMFxuICAvLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxuICAvLyBzZWUgYWxzbyAjNjRcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG9uUmVhZHlTdGF0ZUNoYW5nZVxuXG4gIGlmICgnY29udGVudFR5cGUnIGluIHhocikge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ3BhZGRpbmc9dHJ1ZSdcbiAgfVxuICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcblxuICBpZiAoJ3JlYWR5U3RhdGUnIGluIHhocikge1xuICAgIC8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xuICAgIC8vICM5MVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgMClcbiAgfVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2Fib3J0KGZhbHNlKVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fY29udGVudFR5cGVcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHhocikge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzICE9IHVuZGVmaW5lZFxuICAgID8gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgOiAnJ1xufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gbG9hZGluZyBpbmRpY2F0b3IgaW4gU2FmYXJpIDwgPyAoNiksIENocm9tZSA8IDE0LCBGaXJlZm94XG4gIGlmIChcbiAgICAhKCdvbnRpbWVvdXQnIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICBkb2N1bWVudCAhPSB1bmRlZmluZWQgJiZcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZSdcbiAgKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdGhhdC5fc2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMFxuICAgICAgdGhhdC5zZW5kKClcbiAgICB9LCA0KVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICAvLyB3aXRoQ3JlZGVudGlhbHMgc2hvdWxkIGJlIHNldCBhZnRlciBcIm9wZW5cIiBmb3IgU2FmYXJpIGFuZCBDaHJvbWUgKDwgMTkgPylcbiAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMud2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZVxuICB0cnkge1xuICAgIC8vIHhoci5zZW5kKCk7IHRocm93cyBcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIgaW4gRmlyZWZveCAzLjBcbiAgICB4aHIuc2VuZCh1bmRlZmluZWQpXG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIC8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcbiAgICB0aHJvdyBlcnJvcjFcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApICsgMHgyMClcbiAgfSlcbn1cblxuZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCkge1xuICAvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgYXJyYXkgPSBhbGwuc3BsaXQoJ1xcclxcbicpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgbGluZSA9IGFycmF5W2ldXG4gICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOiAnKVxuICAgIHZhciBuYW1lID0gcGFydHMuc2hpZnQoKVxuICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJylcbiAgICBtYXBbdG9Mb3dlckNhc2UobmFtZSldID0gdmFsdWVcbiAgfVxuICB0aGlzLl9tYXAgPSBtYXBcbn1cbkhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV1cbn1cblxuZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCkge31cblxuWEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKFxuICB4aHIsXG4gIG9uU3RhcnRDYWxsYmFjayxcbiAgb25Qcm9ncmVzc0NhbGxiYWNrLFxuICBvbkZpbmlzaENhbGxiYWNrLFxuICB1cmwsXG4gIHdpdGhDcmVkZW50aWFscyxcbiAgaGVhZGVyc1xuKSB7XG4gIHhoci5vcGVuKCdHRVQnLCB1cmwpXG4gIHZhciBvZmZzZXQgPSAwXG4gIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgdmFyIGNodW5rID0gcmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldClcbiAgICBvZmZzZXQgKz0gY2h1bmsubGVuZ3RoXG4gICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICB9XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgdmFyIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgdmFyIGhlYWRlcnMgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0LFxuICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgbmV3IEhlYWRlcnNQb2x5ZmlsbChoZWFkZXJzKSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHhoci5hYm9ydCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgeGhyLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFsc1xuICB4aHIucmVzcG9uc2VUeXBlID0gJ3RleHQnXG4gIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgfVxuICB9XG4gIHhoci5zZW5kKClcbn1cblxuZnVuY3Rpb24gSGVhZGVyc1dyYXBwZXIoaGVhZGVycykge1xuICB0aGlzLl9oZWFkZXJzID0gaGVhZGVyc1xufVxuSGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKVxufVxuXG5mdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpIHt9XG5cbkZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKFxuICB4aHIsXG4gIG9uU3RhcnRDYWxsYmFjayxcbiAgb25Qcm9ncmVzc0NhbGxiYWNrLFxuICBvbkZpbmlzaENhbGxiYWNrLFxuICB1cmwsXG4gIHdpdGhDcmVkZW50aWFscyxcbiAgaGVhZGVyc1xuKSB7XG4gIHZhciBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIHZhciBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbCAvLyBzZWUgIzEyMFxuICB2YXIgdGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuICBmZXRjaCh1cmwsIHtcbiAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIGNyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnc2FtZS1vcmlnaW4nLFxuICAgIHNpZ25hbDogc2lnbmFsLFxuICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKClcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksXG4gICAgICAgIG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgIHJlYWRlci5jYW5jZWwoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZE5leHRDaHVuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZWFkZXJcbiAgICAgICAgICAgIC5yZWFkKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgLy8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuaylcbiAgICAgICAgICAgICAgICByZWFkTmV4dENodW5rKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZWFkTmV4dENodW5rKClcbiAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgIH1cbiAgICApXG59XG5cbmZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xuICB0aGlzLl9saXN0ZW5lcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IoZSkge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBlXG4gIH0sIDApXG59XG5cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnRhcmdldCA9IHRoaXNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGxlbmd0aCA9IHR5cGVMaXN0ZW5lcnMubGVuZ3RoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGxpc3RlbmVyID0gdHlwZUxpc3RlbmVyc1tpXVxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3dFcnJvcihlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgdHlwZSA9IFN0cmluZyh0eXBlKVxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzID09IHVuZGVmaW5lZCkge1xuICAgIHR5cGVMaXN0ZW5lcnMgPSBbXVxuICAgIGxpc3RlbmVyc1t0eXBlXSA9IHR5cGVMaXN0ZW5lcnNcbiAgfVxuICB2YXIgZm91bmQgPSBmYWxzZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgIGZvdW5kID0gdHJ1ZVxuICAgIH1cbiAgfVxuICBpZiAoIWZvdW5kKSB7XG4gICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbHRlcmVkID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldICE9PSBsaXN0ZW5lcikge1xuICAgICAgICBmaWx0ZXJlZC5wdXNoKHR5cGVMaXN0ZW5lcnNbaV0pXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbdHlwZV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzW3R5cGVdID0gZmlsdGVyZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnQodHlwZSkge1xuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSlcbiAgdGhpcy5kYXRhID0gb3B0aW9ucy5kYXRhXG4gIHRoaXMubGFzdEV2ZW50SWQgPSBvcHRpb25zLmxhc3RFdmVudElkXG59XG5cbk1lc3NhZ2VFdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSlcblxuZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzXG4gIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dFxuICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnNcbn1cblxuQ29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG52YXIgV0FJVElORyA9IC0xXG52YXIgQ09OTkVDVElORyA9IDBcbnZhciBPUEVOID0gMVxudmFyIENMT1NFRCA9IDJcblxudmFyIEFGVEVSX0NSID0gLTFcbnZhciBGSUVMRF9TVEFSVCA9IDBcbnZhciBGSUVMRCA9IDFcbnZhciBWQUxVRV9TVEFSVCA9IDJcbnZhciBWQUxVRSA9IDNcblxudmFyIGNvbnRlbnRUeXBlUmVnRXhwID0gL150ZXh0XFwvZXZlbnRcXC1zdHJlYW07PyhcXHMqY2hhcnNldFxcPXV0ZlxcLTgpPyQvaVxuXG52YXIgTUlOSU1VTV9EVVJBVElPTiA9IDEwMDBcbnZhciBNQVhJTVVNX0RVUkFUSU9OID0gMTgwMDAwMDBcblxudmFyIHBhcnNlRHVyYXRpb24gPSBmdW5jdGlvbiAodmFsdWUsIGRlZikge1xuICB2YXIgbiA9IHBhcnNlSW50KHZhbHVlLCAxMClcbiAgaWYgKG4gIT09IG4pIHtcbiAgICBuID0gZGVmXG4gIH1cbiAgcmV0dXJuIGNsYW1wRHVyYXRpb24obilcbn1cbnZhciBjbGFtcER1cmF0aW9uID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIE1JTklNVU1fRFVSQVRJT04pLCBNQVhJTVVNX0RVUkFUSU9OKVxufVxuXG52YXIgZmlyZSA9IGZ1bmN0aW9uICh0aGF0LCBmLCBldmVudCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZi5jYWxsKHRoYXQsIGV2ZW50KVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93RXJyb3IoZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudFNvdXJjZVBvbHlmaWxsKHVybCwgb3B0aW9ucykge1xuICBFdmVudFRhcmdldC5jYWxsKHRoaXMpXG5cbiAgdGhpcy5vbm9wZW4gPSB1bmRlZmluZWRcbiAgdGhpcy5vbm1lc3NhZ2UgPSB1bmRlZmluZWRcbiAgdGhpcy5vbmVycm9yID0gdW5kZWZpbmVkXG5cbiAgdGhpcy51cmwgPSB1bmRlZmluZWRcbiAgdGhpcy5yZWFkeVN0YXRlID0gdW5kZWZpbmVkXG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbiAgdGhpcy5fY2xvc2UgPSB1bmRlZmluZWRcblxuICBzdGFydCh0aGlzLCB1cmwsIG9wdGlvbnMpXG59XG5cbnZhciBpc0ZldGNoU3VwcG9ydGVkID1cbiAgZmV0Y2ggIT0gdW5kZWZpbmVkICYmIFJlc3BvbnNlICE9IHVuZGVmaW5lZCAmJiAnYm9keScgaW4gUmVzcG9uc2UucHJvdG90eXBlXG5cbmZ1bmN0aW9uIHN0YXJ0KGVzLCB1cmwsIG9wdGlvbnMpIHtcbiAgdXJsID0gU3RyaW5nKHVybClcbiAgdmFyIHdpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIEJvb2xlYW4ob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpXG5cbiAgdmFyIGluaXRpYWxSZXRyeSA9IGNsYW1wRHVyYXRpb24oMTAwMClcbiAgdmFyIGhlYXJ0YmVhdFRpbWVvdXQgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCAhPSB1bmRlZmluZWRcbiAgICAgID8gcGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsIDQ1MDAwKVxuICAgICAgOiBjbGFtcER1cmF0aW9uKDQ1MDAwKVxuXG4gIHZhciBsYXN0RXZlbnRJZCA9ICcnXG4gIHZhciByZXRyeSA9IGluaXRpYWxSZXRyeVxuICB2YXIgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICB2YXIgaGVhZGVycyA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFkZXJzICE9IHVuZGVmaW5lZFxuICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpXG4gICAgICA6IHVuZGVmaW5lZFxuICB2YXIgQ3VycmVudFRyYW5zcG9ydCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkXG4gICAgICA/IG9wdGlvbnMuVHJhbnNwb3J0XG4gICAgICA6IFhNTEh0dHBSZXF1ZXN0XG4gIHZhciB4aHIgPVxuICAgIGlzRmV0Y2hTdXBwb3J0ZWQgJiZcbiAgICAhKG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZClcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IG5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpXG4gIHZhciB0cmFuc3BvcnQgPSB4aHIgPT0gdW5kZWZpbmVkID8gbmV3IEZldGNoVHJhbnNwb3J0KCkgOiBuZXcgWEhSVHJhbnNwb3J0KClcbiAgdmFyIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gIHZhciB0aW1lb3V0ID0gMFxuICB2YXIgY3VycmVudFN0YXRlID0gV0FJVElOR1xuICB2YXIgZGF0YUJ1ZmZlciA9ICcnXG4gIHZhciBsYXN0RXZlbnRJZEJ1ZmZlciA9ICcnXG4gIHZhciBldmVudFR5cGVCdWZmZXIgPSAnJ1xuXG4gIHZhciB0ZXh0QnVmZmVyID0gJydcbiAgdmFyIHN0YXRlID0gRklFTERfU1RBUlRcbiAgdmFyIGZpZWxkU3RhcnQgPSAwXG4gIHZhciB2YWx1ZVN0YXJ0ID0gMFxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIGhlYWRlcnMsIGNhbmNlbCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gY2FuY2VsXG4gICAgICBpZiAoXG4gICAgICAgIHN0YXR1cyA9PT0gMjAwICYmXG4gICAgICAgIGNvbnRlbnRUeXBlICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICBjb250ZW50VHlwZVJlZ0V4cC50ZXN0KGNvbnRlbnRUeXBlKVxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IE9QRU5cbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gICAgICAgIGVzLnJlYWR5U3RhdGUgPSBPUEVOXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLCB7XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICBmaXJlKGVzLCBlcy5vbm9wZW4sIGV2ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAnJ1xuICAgICAgICBpZiAoc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBpZiAoc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gICAgICAgICAgfVxuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIiArXG4gICAgICAgICAgICBzdGF0dXMgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgK1xuICAgICAgICAgICAgJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgIFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBDb250ZW50LVR5cGUgc3BlY2lmeWluZyBhbiB1bnN1cHBvcnRlZCB0eXBlOiBcIiArXG4gICAgICAgICAgICAoY29udGVudFR5cGUgPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgIDogY29udGVudFR5cGUucmVwbGFjZSgvXFxzKy9nLCAnICcpKSArXG4gICAgICAgICAgICAnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpXG4gICAgICAgIGNsb3NlKClcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KVxuICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICh0ZXh0Q2h1bmspIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOKSB7XG4gICAgICB2YXIgbiA9IC0xXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRDaHVuay5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpXG4gICAgICAgIGlmIChjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBuID0gaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgY2h1bmsgPSAobiAhPT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKDAsIG4gKyAxKVxuICAgICAgdGV4dEJ1ZmZlciA9IChuID09PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UobiArIDEpXG4gICAgICBpZiAoY2h1bmsgIT09ICcnKSB7XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IGNodW5rLmxlbmd0aDsgcG9zaXRpb24gKz0gMSkge1xuICAgICAgICB2YXIgYyA9IGNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IgJiYgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgZmllbGQgPSBjaHVuay5zbGljZShmaWVsZFN0YXJ0LCB2YWx1ZVN0YXJ0IC0gMSlcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY2h1bmsuc2xpY2UoXG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCArXG4gICAgICAgICAgICAgICAgICAodmFsdWVTdGFydCA8IHBvc2l0aW9uICYmXG4gICAgICAgICAgICAgICAgICBjaHVuay5jaGFyQ29kZUF0KHZhbHVlU3RhcnQpID09PSAnICcuY2hhckNvZGVBdCgwKVxuICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgOiAwKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGlmIChmaWVsZCA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSAnXFxuJ1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgIGxhc3RFdmVudElkQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdyZXRyeScpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsUmV0cnkgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBpbml0aWFsUmV0cnkpXG4gICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2hlYXJ0YmVhdFRpbWVvdXQnKSB7XG4gICAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICAgICAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFCdWZmZXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQgPSBsYXN0RXZlbnRJZEJ1ZmZlclxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnbWVzc2FnZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudChldmVudFR5cGVCdWZmZXIsIHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFCdWZmZXIuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZDogbGFzdEV2ZW50SWRCdWZmZXIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25tZXNzYWdlLCBldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGF0YUJ1ZmZlciA9ICcnXG4gICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZSA9IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgPyBBRlRFUl9DUiA6IEZJRUxEX1NUQVJUXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgZmllbGRTdGFydCA9IHBvc2l0aW9uXG4gICAgICAgICAgICAgIHN0YXRlID0gRklFTERcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgaWYgKGMgPT09ICc6Jy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVfU1RBUlRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gVkFMVUVfU1RBUlQpIHtcbiAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOIHx8IGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY3VycmVudFN0YXRlID0gV0FJVElOR1xuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uVGltZW91dCgpXG4gICAgICB9LCByZXRyeSlcbiAgICAgIHJldHJ5ID0gY2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkgKiAxNiwgcmV0cnkgKiAyKSlcblxuICAgICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnZXJyb3InKVxuICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50U3RhdGUgPSBDTE9TRURcbiAgICBpZiAoY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB0aW1lb3V0ID0gMFxuICAgIH1cbiAgICBlcy5yZWFkeVN0YXRlID0gQ0xPU0VEXG4gIH1cblxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSAwXG5cbiAgICBpZiAoY3VycmVudFN0YXRlICE9PSBXQUlUSU5HKSB7XG4gICAgICBpZiAoIXdhc0FjdGl2aXR5ICYmIGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvd0Vycm9yKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICdObyBhY3Rpdml0eSB3aXRoaW4gJyArXG4gICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgK1xuICAgICAgICAgICAgICAnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLidcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24oKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgb25UaW1lb3V0KClcbiAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG5cbiAgICBjdXJyZW50U3RhdGUgPSBDT05ORUNUSU5HXG4gICAgZGF0YUJ1ZmZlciA9ICcnXG4gICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IGxhc3RFdmVudElkXG4gICAgdGV4dEJ1ZmZlciA9ICcnXG4gICAgZmllbGRTdGFydCA9IDBcbiAgICB2YWx1ZVN0YXJ0ID0gMFxuICAgIHN0YXRlID0gRklFTERfU1RBUlRcblxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxuICAgIC8vIFJlcXVlc3QgaGVhZGVyIGZpZWxkIExhc3QtRXZlbnQtSUQgaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycy5cbiAgICB2YXIgcmVxdWVzdFVSTCA9IHVybFxuICAgIGlmICh1cmwuc2xpY2UoMCwgNSkgIT09ICdkYXRhOicgJiYgdXJsLnNsaWNlKDAsIDUpICE9PSAnYmxvYjonKSB7XG4gICAgICBpZiAobGFzdEV2ZW50SWQgIT09ICcnKSB7XG4gICAgICAgIHJlcXVlc3RVUkwgKz1cbiAgICAgICAgICAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICtcbiAgICAgICAgICAnbGFzdEV2ZW50SWQ9JyArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7fVxuICAgIHJlcXVlc3RIZWFkZXJzWydBY2NlcHQnXSA9ICd0ZXh0L2V2ZW50LXN0cmVhbSdcbiAgICBpZiAoaGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSBoZWFkZXJzW25hbWVdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zcG9ydC5vcGVuKFxuICAgICAgICB4aHIsXG4gICAgICAgIG9uU3RhcnQsXG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIG9uRmluaXNoLFxuICAgICAgICByZXF1ZXN0VVJMLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgIHJlcXVlc3RIZWFkZXJzXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNsb3NlKClcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG5cbiAgZXMudXJsID0gdXJsXG4gIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HXG4gIGVzLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFsc1xuICBlcy5fY2xvc2UgPSBjbG9zZVxuXG4gIG9uVGltZW91dCgpXG59XG5cbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldC5wcm90b3R5cGUpXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DT05ORUNUSU5HID0gQ09OTkVDVElOR1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTiA9IE9QRU5cbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2Nsb3NlKClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DT05ORUNUSU5HID0gQ09OTkVDVElOR1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQgPSBDTE9TRURcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZFxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFNvdXJjZVBvbHlmaWxsXG4iLCIvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVtb3ZlIE5leHQuanMnIG5vLUZPVUMgc3R5bGVzIHdvcmthcm91bmQgZm9yIHVzaW5nXG4vLyBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudC4gSXQgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGh5ZHJhdGlvbiwgb3IgZWxzZVxuLy8gcmVuZGVyaW5nIHdvbid0IGhhdmUgdGhlIGNvcnJlY3QgY29tcHV0ZWQgdmFsdWVzIGluIGVmZmVjdHMuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgOyh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQpKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0LWhpZGUtZm91Y10nKSwgaSA9IHgubGVuZ3RoO1xuICAgICAgaS0tO1xuXG4gICAgKSB7XG4gICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSlcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9KVxufVxuIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5cbmxldCBldnRTb3VyY2VcbmV4cG9ydCBsZXQgY3VycmVudFBhZ2VcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUGluZygpIHtcbiAgaWYgKGV2dFNvdXJjZSkgZXZ0U291cmNlLmNsb3NlKClcbiAgZXZ0U291cmNlID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xuICBjb25zdCBwYXRobmFtZSA9IHBhdGhuYW1lRm4oKVxuXG4gIC8vIE1ha2Ugc3VyZSB0byBvbmx5IGNyZWF0ZSBuZXcgRXZlbnRTb3VyY2UgcmVxdWVzdCBpZiBwYWdlIGhhcyBjaGFuZ2VkXG4gIGlmIChwYXRobmFtZSA9PT0gY3VycmVudFBhZ2UgJiYgIXJldHJ5KSByZXR1cm5cbiAgY3VycmVudFBhZ2UgPSBwYXRobmFtZVxuICAvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbiAgY2xvc2VQaW5nKClcblxuICBjb25zdCB1cmwgPSBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXI/cGFnZT0ke2N1cnJlbnRQYWdlfWBcbiAgZXZ0U291cmNlID0gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHsgcGF0aDogdXJsLCB0aW1lb3V0OiA1MDAwLCBvbmRlbWFuZDogMSB9KVxuXG4gIGV2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEuaW5kZXhPZigneycpID09PSAtMSkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG4gICAgICBpZiAocGF5bG9hZC5pbnZhbGlkKSB7XG4gICAgICAgIC8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuICAgICAgICBmZXRjaChsb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4oKHBhZ2VSZXMpID0+IHtcbiAgICAgICAgICBpZiAocGFnZVJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLCBlcnIpXG4gICAgfVxuICB9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gODgwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuLyoqKioqKi8gXHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX25jY3dwY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDg4MCk7XG4vKioqKioqLyB9KSgpXG47Il0sInNvdXJjZVJvb3QiOiIifQ==