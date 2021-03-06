webpackHotUpdate_N_E("pages/[id]",{

/***/ "./components/deck/ActualCard.tsx":
/*!****************************************!*\
  !*** ./components/deck/ActualCard.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_HRV_Desktop_Programmes_REACT_poke_decks_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_getTypeIconAndColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/getTypeIconAndColor */ "./functions/getTypeIconAndColor.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/GlobalFunctions */ "./functions/GlobalFunctions.ts");
/* harmony import */ var react_lazy_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lazy-images */ "./node_modules/react-lazy-images/dist/react-lazy-images.es.js");


var _jsxFileName = "C:\\Users\\HRV\\Desktop\\Programmes\\REACT\\poke-decks\\components\\deck\\ActualCard.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const ActualCard = ({
  pokemondata
}) => {
  _s();

  const sprite = Object(_functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_5__["getImageSourcefromID"])(pokemondata.id);
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx("div", {
    className: "h-full w-full p-4 flex flex-col justify-between bg-white relative addFilter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full h-full relative",
    style: {
      background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${Object(_functions_getTypeIconAndColor__WEBPACK_IMPORTED_MODULE_2__["findColor"])(pokemondata.types[0].type.name)[1]} 100%)`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "absolute top-5 right-1/2 transform translate-x-1/2 text-black text-opacity-25 font-bold text-5xl tracking-widest leading-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "#", Object(_functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_5__["getIDStringfromID"])(pokemondata.id)), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "absolute right-2 top-2 Courier text-2xl font-black text-white leading-none cursor-pointer hover:text-opacity-50",
    initial: {
      opacity: 1
    },
    whileHover: {
      opacity: .5
    },
    whileTap: {
      opacity: 8
    },
    transition: {
      opacity: {
        duration: 0.25
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, router.asPath === '/' && __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "20px",
    height: "20px",
    viewBox: "0 0 416.979 416.979",
    xmlSpace: "preserve",
    fill: "#FFF",
    onClick: () => router.push(`/${pokemondata.id}`, '/', {
      shallow: true
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85\r c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786\r c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576\r c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765\r c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "w-52 h-52 absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(react_lazy_images__WEBPACK_IMPORTED_MODULE_6__["LazyImage"], {
    src: sprite,
    alt: pokemondata.name,
    placeholder: ({
      imageProps,
      ref
    }) => __jsx("img", {
      ref: ref,
      src: '/pokemon-egg.png',
      alt: imageProps.alt,
      draggable: "false",
      onDragStart: e => e.preventDefault(),
      style: {
        filter: "blur(10px)"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }),
    actual: ({
      imageProps
    }) => __jsx("img", Object(C_Users_HRV_Desktop_Programmes_REACT_poke_decks_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageProps, {
      alt: pokemondata.name,
      draggable: "false",
      onDragStart: e => e.preventDefault(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 43
      }
    })),
    error: () => __jsx("img", {
      src: '/pokemon-egg.png',
      alt: "egg error",
      draggable: "false",
      onDragStart: e => e.preventDefault(),
      style: {
        filter: "blur(10px)"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "flex absolute bottom-12 right-1/2 transform translate-x-1/2 translate-y-1/4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, pokemondata.types.map((type, index) => __jsx("img", {
    src: Object(_functions_getTypeIconAndColor__WEBPACK_IMPORTED_MODULE_2__["getTypeIcon"])(type.type.name)[1],
    className: "-m-0.5 rounded-full",
    style: {
      width: "40px",
      height: "40px",
      margin: pokemondata.types.length > 1 ? "-0.125rem" : "0"
    },
    key: index,
    draggable: "false",
    onDragStart: e => e.preventDefault(),
    alt: Object(_functions_getTypeIconAndColor__WEBPACK_IMPORTED_MODULE_2__["getTypeIcon"])(type.type.name)[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 55
    }
  }))), __jsx("div", {
    className: "absolute bottom-4 right-1/2 transform translate-x-1/2  w-max  text-black text-center font-bold capitalize text-xl leading-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, pokemondata.name));
};

_s(ActualCard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = ActualCard;
/* harmony default export */ __webpack_exports__["default"] = (ActualCard);

var _c;

$RefreshReg$(_c, "ActualCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZWNrL0FjdHVhbENhcmQudHN4Il0sIm5hbWVzIjpbIkFjdHVhbENhcmQiLCJwb2tlbW9uZGF0YSIsInNwcml0ZSIsImdldEltYWdlU291cmNlZnJvbUlEIiwiaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYWNrZ3JvdW5kIiwiZmluZENvbG9yIiwidHlwZXMiLCJ0eXBlIiwibmFtZSIsImdldElEU3RyaW5nZnJvbUlEIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiYXNQYXRoIiwicHVzaCIsInNoYWxsb3ciLCJpbWFnZVByb3BzIiwicmVmIiwiYWx0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIiwibWFwIiwiaW5kZXgiLCJnZXRUeXBlSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxNQUFNQSxVQUEwQyxHQUFLLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQW1CO0FBQUE7O0FBQ3BFLFFBQU1DLE1BQU0sR0FBR0MsdUZBQW9CLENBQUNGLFdBQVcsQ0FBQ0csRUFBYixDQUFuQztBQUNBLFFBQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxTQUNFO0FBQ0UsYUFBUyxFQUFDLDhFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUNFLGFBQVMsRUFBQyx3QkFEWjtBQUVFLFNBQUssRUFBRTtBQUNMQyxnQkFBVSxFQUFHLGlEQUFnREMsZ0ZBQVMsQ0FBQ1AsV0FBVyxDQUFDUSxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkMsSUFBM0IsQ0FBVCxDQUEwQyxDQUExQyxDQUE2QztBQURyRyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFHLGFBQVMs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDT3RCLFdBQVcsQ0FBQ1EsS0FBWixDQUFrQmUsR0FBbEIsQ0FBdUIsQ0FBQ2QsSUFBRCxFQUFNZSxLQUFOLEtBQWdCO0FBQU0sT0FBRyxFQUFFQyxrRkFBVyxDQUFDaEIsSUFBSSxDQUFDQSxJQUFMLENBQVVDLElBQVgsQ0FBWCxDQUE0QixDQUE1QixDQUFYO0FBQ00sYUFBUyxFQUFDLHFCQURoQjtBQUVNLFNBQUssRUFBRTtBQUNMZ0IsV0FBSyxFQUFFLE1BREY7QUFFTEMsWUFBTSxFQUFFLE1BRkg7QUFHTEMsWUFBTSxFQUFFNUIsV0FBVyxDQUFDUSxLQUFaLENBQWtCcUIsTUFBbEIsR0FBMkIsQ0FBM0IsR0FBK0IsV0FBL0IsR0FBNkM7QUFIaEQsS0FGYjtBQU9NLE9BQUcsRUFBRUwsS0FQWDtBQVFNLGFBQVMsRUFBQyxPQVJoQjtBQVNNLGVBQVcsRUFBR0osQ0FBQyxJQUFJQSxDQUFDLENBQUNDLGNBQUYsRUFUekI7QUFVTSxPQUFHLEVBQUVJLGtGQUFXLENBQUNoQixJQUFJLENBQUNBLElBQUwsQ0FBVUMsSUFBWCxDQUFYLENBQTRCLENBQTVCLENBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF2QyxDQURQLENBMURGLEVBMEVJO0FBQUssYUFBUyxFQUFDLGdJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDU1YsV0FBVyxDQUFDVSxJQURyQixDQTFFSixDQURGO0FBZ0ZELENBbkZIOztHQUFNWCxVO1VBRWFNLGlFOzs7S0FGYk4sVTtBQXFGV0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS5kYWQzZjBhOWVmOTJhNjgyNWQ3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBY3R1YWxDYXJkSW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uL0ludGVyZmFjZXNQcm9wcy9JbnRlcmZhY2VzXCJcclxuaW1wb3J0IHtnZXRUeXBlSWNvbiwgZmluZENvbG9yfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZ2V0VHlwZUljb25BbmRDb2xvcic7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldEltYWdlU291cmNlZnJvbUlELCBnZXRJRFN0cmluZ2Zyb21JRCB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9HbG9iYWxGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBMYXp5SW1hZ2UgfSBmcm9tIFwicmVhY3QtbGF6eS1pbWFnZXNcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFjdHVhbENhcmQ6IFJlYWN0LkZDPEFjdHVhbENhcmRJbnRlcmZhY2UgPiAgPSAgKHtwb2tlbW9uZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IHNwcml0ZSA9IGdldEltYWdlU291cmNlZnJvbUlEKHBva2Vtb25kYXRhLmlkKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gYmctd2hpdGUgcmVsYXRpdmUgYWRkRmlsdGVyIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlXCIgXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsICR7ZmluZENvbG9yKHBva2Vtb25kYXRhLnR5cGVzWzBdLnR5cGUubmFtZSlbMV19IDEwMCUpYFxyXG4gICAgICAgICAgfX0gXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNSByaWdodC0xLzIgdHJhbnNmb3JtIHRyYW5zbGF0ZS14LTEvMiB0ZXh0LWJsYWNrIHRleHQtb3BhY2l0eS0yNSBmb250LWJvbGQgdGV4dC01eGwgdHJhY2tpbmctd2lkZXN0IGxlYWRpbmctbm9uZVwiID4je2dldElEU3RyaW5nZnJvbUlEKHBva2Vtb25kYXRhLmlkKX08L3A+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTIgdG9wLTIgQ291cmllciB0ZXh0LTJ4bCBmb250LWJsYWNrIHRleHQtd2hpdGUgbGVhZGluZy1ub25lIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtb3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiA4LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjI1XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5hc1BhdGggPT09ICcvJyAmJiBcclxuICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDQxNi45NzkgNDE2Ljk3OVwiIHhtbFNwYWNlPVwicHJlc2VydmVcIiBmaWxsPVwiI0ZGRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvJHtwb2tlbW9uZGF0YS5pZH1gLCAgJy8nLCB7IHNoYWxsb3c6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzU2LjAwNCw2MS4xNTZjLTgxLjM3LTgxLjQ3LTIxMy4zNzctODEuNTUxLTI5NC44NDgtMC4xODJjLTgxLjQ3LDgxLjM3MS04MS41NTIsMjEzLjM3OS0wLjE4MSwyOTQuODVcclxuICAgICAgICAgICAgICAgICAgICAgIGM4MS4zNjksODEuNDcsMjEzLjM3OCw4MS41NTEsMjk0Ljg0OSwwLjE4MUM0MzcuMjkzLDI3NC42MzYsNDM3LjM3NSwxNDIuNjI2LDM1Ni4wMDQsNjEuMTU2eiBNMjM3LjYsMzQwLjc4NlxyXG4gICAgICAgICAgICAgICAgICAgICAgYzAsMy4yMTctMi42MDcsNS44MjItNS44MjIsNS44MjJoLTQ2LjU3NmMtMy4yMTUsMC01LjgyMi0yLjYwNS01LjgyMi01LjgyMlYxNjcuODg1YzAtMy4yMTcsMi42MDctNS44MjIsNS44MjItNS44MjJoNDYuNTc2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjMy4yMTUsMCw1LjgyMiwyLjYwNCw1LjgyMiw1LjgyMlYzNDAuNzg2eiBNMjA4LjQ5LDEzNy45MDFjLTE4LjYxOCwwLTMzLjc2Ni0xNS4xNDYtMzMuNzY2LTMzLjc2NVxyXG4gICAgICAgICAgICAgICAgICAgICAgYzAtMTguNjE3LDE1LjE0Ny0zMy43NjYsMzMuNzY2LTMzLjc2NmMxOC42MTksMCwzMy43NjYsMTUuMTQ4LDMzLjc2NiwzMy43NjZDMjQyLjI1NiwxMjIuNzU1LDIyNy4xMDcsMTM3LjkwMSwyMDguNDksMTM3LjkwMXpcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01MiBoLTUyIGFic29sdXRlIGxlZnQtMS8yIGJvdHRvbS0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdHJhbnNsYXRlLXktMS8yXCIgID5cclxuICAgICAgICAgICAgPExhenlJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17c3ByaXRlfVxyXG4gICAgICAgICAgICAgIGFsdD17cG9rZW1vbmRhdGEubmFtZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17KHsgaW1hZ2VQcm9wcywgcmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxpbWcgIHJlZj17cmVmfSBzcmM9eycvcG9rZW1vbi1lZ2cucG5nJ30gYWx0PXtpbWFnZVByb3BzLmFsdH0gZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IHN0eWxlPXt7ZmlsdGVyOiBcImJsdXIoMTBweClcIn19IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBhY3R1YWw9eyh7IGltYWdlUHJvcHMgfSkgPT4gPGltZyB7Li4uaW1hZ2VQcm9wc30gYWx0PXtwb2tlbW9uZGF0YS5uYW1lfSAgZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgXHJcbiAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgZXJyb3I9eygpID0+IChcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL3Bva2Vtb24tZWdnLnBuZyd9IGFsdD1cImVnZyBlcnJvclwiIGRyYWdnYWJsZT1cImZhbHNlXCIgb25EcmFnU3RhcnQ9eyAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBzdHlsZT17e2ZpbHRlcjogXCJibHVyKDEwcHgpXCJ9fSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgYm90dG9tLTEyIHJpZ2h0LTEvMiB0cmFuc2Zvcm0gdHJhbnNsYXRlLXgtMS8yIHRyYW5zbGF0ZS15LTEvNCBcIiA+XHJcbiAgICAgICAgICAgICAge3Bva2Vtb25kYXRhLnR5cGVzLm1hcCggKHR5cGUsaW5kZXgpID0+IDxpbWcgIHNyYz17Z2V0VHlwZUljb24odHlwZS50eXBlLm5hbWUpWzFdfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiLW0tMC41IHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBwb2tlbW9uZGF0YS50eXBlcy5sZW5ndGggPiAxID8gXCItMC4xMjVyZW1cIiA6IFwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJmYWxzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17IGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17Z2V0VHlwZUljb24odHlwZS50eXBlLm5hbWUpWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IHJpZ2h0LTEvMiB0cmFuc2Zvcm0gdHJhbnNsYXRlLXgtMS8yICB3LW1heCAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlciBmb250LWJvbGQgY2FwaXRhbGl6ZSB0ZXh0LXhsIGxlYWRpbmctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG9rZW1vbmRhdGEubmFtZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBBY3R1YWxDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==