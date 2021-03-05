webpackHotUpdate_N_E("pages/index",{

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
    onClick: () => router.push(`/${pokemondata.id}`),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZWNrL0FjdHVhbENhcmQudHN4Il0sIm5hbWVzIjpbIkFjdHVhbENhcmQiLCJwb2tlbW9uZGF0YSIsInNwcml0ZSIsImdldEltYWdlU291cmNlZnJvbUlEIiwiaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYWNrZ3JvdW5kIiwiZmluZENvbG9yIiwidHlwZXMiLCJ0eXBlIiwibmFtZSIsImdldElEU3RyaW5nZnJvbUlEIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiYXNQYXRoIiwicHVzaCIsImltYWdlUHJvcHMiLCJyZWYiLCJhbHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJtYXAiLCJpbmRleCIsImdldFR5cGVJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLE1BQU1BLFVBQTBDLEdBQUssQ0FBQztBQUFDQztBQUFELENBQUQsS0FBbUI7QUFBQTs7QUFDcEUsUUFBTUMsTUFBTSxHQUFHQyx1RkFBb0IsQ0FBQ0YsV0FBVyxDQUFDRyxFQUFiLENBQW5DO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4QjtBQUNBLFNBQ0U7QUFDRSxhQUFTLEVBQUMsOEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQ0UsYUFBUyxFQUFDLHdCQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUcsaURBQWdEQyxnRkFBUyxDQUFDUCxXQUFXLENBQUNRLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxJQUEzQixDQUFULENBQTBDLENBQTFDLENBQTZDO0FBRHJHLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUcsYUFBUyxFQUFDLCtIQUFi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QUFaLENBQWtCYyxHQUFsQixDQUF1QixDQUFDYixJQUFELEVBQU1jLEtBQU4sS0FBZ0I7QUFBTSxPQUFHLEVBQUVDLGtGQUFXLENBQUNmLElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxJQUFYLENBQVgsQ0FBNEIsQ0FBNUIsQ0FBWDtBQUNNLGFBQVMsRUFBQyxxQkFEaEI7QUFFTSxTQUFLLEVBQUU7QUFDTGUsV0FBSyxFQUFFLE1BREY7QUFFTEMsWUFBTSxFQUFFLE1BRkg7QUFHTEMsWUFBTSxFQUFFM0IsV0FBVyxDQUFDUSxLQUFaLENBQWtCb0IsTUFBbEIsR0FBMkIsQ0FBM0IsR0FBK0IsV0FBL0IsR0FBNkM7QUFIaEQsS0FGYjtBQU9NLE9BQUcsRUFBRUwsS0FQWDtBQVFNLGFBQVMsRUFBQyxPQVJoQjtBQVNNLGVBQVcsRUFBR0osQ0FBQyxJQUFJQSxDQUFDLENBQUNDLGNBQUYsRUFUekI7QUFVTSxPQUFHLEVBQUVJLGtGQUFXLENBQUNmLElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxJQUFYLENBQVgsQ0FBNEIsQ0FBNUIsQ0FWWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXZDLENBRFAsQ0ExREYsRUEwRUk7QUFBSyxhQUFTLEVBQUMsZ0lBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNTVixXQUFXLENBQUNVLElBRHJCLENBMUVKLENBREY7QUFnRkQsQ0FuRkg7O0dBQU1YLFU7VUFFYU0saUU7OztLQUZiTixVO0FBcUZXQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjZmYTI1NjQ3NDhhYzY3ZDJmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBY3R1YWxDYXJkSW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uL0ludGVyZmFjZXNQcm9wcy9JbnRlcmZhY2VzXCJcclxuaW1wb3J0IHtnZXRUeXBlSWNvbiwgZmluZENvbG9yfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZ2V0VHlwZUljb25BbmRDb2xvcic7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldEltYWdlU291cmNlZnJvbUlELCBnZXRJRFN0cmluZ2Zyb21JRCB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9HbG9iYWxGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBMYXp5SW1hZ2UgfSBmcm9tIFwicmVhY3QtbGF6eS1pbWFnZXNcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFjdHVhbENhcmQ6IFJlYWN0LkZDPEFjdHVhbENhcmRJbnRlcmZhY2UgPiAgPSAgKHtwb2tlbW9uZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IHNwcml0ZSA9IGdldEltYWdlU291cmNlZnJvbUlEKHBva2Vtb25kYXRhLmlkKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gYmctd2hpdGUgcmVsYXRpdmUgYWRkRmlsdGVyIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlXCIgXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsICR7ZmluZENvbG9yKHBva2Vtb25kYXRhLnR5cGVzWzBdLnR5cGUubmFtZSlbMV19IDEwMCUpYFxyXG4gICAgICAgICAgfX0gXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNSByaWdodC0xLzIgdHJhbnNmb3JtIHRyYW5zbGF0ZS14LTEvMiB0ZXh0LWJsYWNrIHRleHQtb3BhY2l0eS0yNSBmb250LWJvbGQgdGV4dC01eGwgdHJhY2tpbmctd2lkZXN0IGxlYWRpbmctbm9uZVwiID4je2dldElEU3RyaW5nZnJvbUlEKHBva2Vtb25kYXRhLmlkKX08L3A+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTIgdG9wLTIgQ291cmllciB0ZXh0LTJ4bCBmb250LWJsYWNrIHRleHQtd2hpdGUgbGVhZGluZy1ub25lIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtb3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiA4LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjI1XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5hc1BhdGggPT09ICcvJyAmJiBcclxuICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDQxNi45NzkgNDE2Ljk3OVwiIHhtbFNwYWNlPVwicHJlc2VydmVcIiBmaWxsPVwiI0ZGRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvJHtwb2tlbW9uZGF0YS5pZH1gKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNTYuMDA0LDYxLjE1NmMtODEuMzctODEuNDctMjEzLjM3Ny04MS41NTEtMjk0Ljg0OC0wLjE4MmMtODEuNDcsODEuMzcxLTgxLjU1MiwyMTMuMzc5LTAuMTgxLDI5NC44NVxyXG4gICAgICAgICAgICAgICAgICAgICAgYzgxLjM2OSw4MS40NywyMTMuMzc4LDgxLjU1MSwyOTQuODQ5LDAuMTgxQzQzNy4yOTMsMjc0LjYzNiw0MzcuMzc1LDE0Mi42MjYsMzU2LjAwNCw2MS4xNTZ6IE0yMzcuNiwzNDAuNzg2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjMCwzLjIxNy0yLjYwNyw1LjgyMi01LjgyMiw1LjgyMmgtNDYuNTc2Yy0zLjIxNSwwLTUuODIyLTIuNjA1LTUuODIyLTUuODIyVjE2Ny44ODVjMC0zLjIxNywyLjYwNy01LjgyMiw1LjgyMi01LjgyMmg0Ni41NzZcclxuICAgICAgICAgICAgICAgICAgICAgIGMzLjIxNSwwLDUuODIyLDIuNjA0LDUuODIyLDUuODIyVjM0MC43ODZ6IE0yMDguNDksMTM3LjkwMWMtMTguNjE4LDAtMzMuNzY2LTE1LjE0Ni0zMy43NjYtMzMuNzY1XHJcbiAgICAgICAgICAgICAgICAgICAgICBjMC0xOC42MTcsMTUuMTQ3LTMzLjc2NiwzMy43NjYtMzMuNzY2YzE4LjYxOSwwLDMzLjc2NiwxNS4xNDgsMzMuNzY2LDMzLjc2NkMyNDIuMjU2LDEyMi43NTUsMjI3LjEwNywxMzcuOTAxLDIwOC40OSwxMzcuOTAxelwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUyIGgtNTIgYWJzb2x1dGUgbGVmdC0xLzIgYm90dG9tLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB0cmFuc2xhdGUteS0xLzJcIiAgPlxyXG4gICAgICAgICAgICA8TGF6eUltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtzcHJpdGV9XHJcbiAgICAgICAgICAgICAgYWx0PXtwb2tlbW9uZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsoeyBpbWFnZVByb3BzLCByZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGltZyAgcmVmPXtyZWZ9IHNyYz17Jy9wb2tlbW9uLWVnZy5wbmcnfSBhbHQ9e2ltYWdlUHJvcHMuYWx0fSBkcmFnZ2FibGU9XCJmYWxzZVwiIG9uRHJhZ1N0YXJ0PXsgKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IGUucHJldmVudERlZmF1bHQoKX0gc3R5bGU9e3tmaWx0ZXI6IFwiYmx1cigxMHB4KVwifX0gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGFjdHVhbD17KHsgaW1hZ2VQcm9wcyB9KSA9PiA8aW1nIHsuLi5pbWFnZVByb3BzfSBhbHQ9e3Bva2Vtb25kYXRhLm5hbWV9ICBkcmFnZ2FibGU9XCJmYWxzZVwiIG9uRHJhZ1N0YXJ0PXsgKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICBcclxuICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICBlcnJvcj17KCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eycvcG9rZW1vbi1lZ2cucG5nJ30gYWx0PVwiZWdnIGVycm9yXCIgZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IHN0eWxlPXt7ZmlsdGVyOiBcImJsdXIoMTBweClcIn19IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhYnNvbHV0ZSBib3R0b20tMTIgcmlnaHQtMS8yIHRyYW5zZm9ybSB0cmFuc2xhdGUteC0xLzIgdHJhbnNsYXRlLXktMS80IFwiID5cclxuICAgICAgICAgICAgICB7cG9rZW1vbmRhdGEudHlwZXMubWFwKCAodHlwZSxpbmRleCkgPT4gPGltZyAgc3JjPXtnZXRUeXBlSWNvbih0eXBlLnR5cGUubmFtZSlbMV19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItbS0wLjUgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHBva2Vtb25kYXRhLnR5cGVzLmxlbmd0aCA+IDEgPyBcIi0wLjEyNXJlbVwiIDogXCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsgZSA9PiBlLnByZXZlbnREZWZhdWx0KCl9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtnZXRUeXBlSWNvbih0eXBlLnR5cGUubmFtZSlbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgcmlnaHQtMS8yIHRyYW5zZm9ybSB0cmFuc2xhdGUteC0xLzIgIHctbWF4ICB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGZvbnQtYm9sZCBjYXBpdGFsaXplIHRleHQteGwgbGVhZGluZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwb2tlbW9uZGF0YS5uYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEFjdHVhbENhcmQiXSwic291cmNlUm9vdCI6IiJ9