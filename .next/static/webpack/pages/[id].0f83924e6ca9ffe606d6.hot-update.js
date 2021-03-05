webpackHotUpdate_N_E("pages/[id]",{

/***/ "./components/modal-components/Evolution.tsx":
/*!***************************************************!*\
  !*** ./components/modal-components/Evolution.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_HRV_Desktop_Programmes_REACT_poke_decks_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-images */ "./node_modules/react-lazy-images/dist/react-lazy-images.es.js");
/* harmony import */ var _functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/GlobalFunctions */ "./functions/GlobalFunctions.ts");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _functions_getTypeIconAndColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/getTypeIconAndColor */ "./functions/getTypeIconAndColor.ts");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fetch_FetchData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../fetch/FetchData */ "./fetch/FetchData.ts");


var _jsxFileName = "C:\\Users\\HRV\\Desktop\\Programmes\\REACT\\poke-decks\\components\\modal-components\\Evolution.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const Evolution = ({
  pokemonSpeciesData,
  pokemonData
}) => {
  _s();

  const {
    data
  } = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])(`${pokemonSpeciesData.evolution_chain.url}`, _fetch_FetchData__WEBPACK_IMPORTED_MODULE_8__["fetchEvolutionData"]);
  const {
    0: evolutionChain,
    1: setEvolutionChain
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (data) {
      const evolutionData = Object(_functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_3__["extractEvolutionChain"])(data);
      setEvolutionChain(evolutionData);
    } else setEvolutionChain(null);

    return () => {
      setEvolutionChain(null);
    };
  }, [data]);
  return __jsx("div", {
    className: "flex flex-wrap justify-evenly w-full mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, evolutionChain ? evolutionChain.map(({
    name,
    url
  }, index) => __jsx("div", {
    key: index,
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 73
    }
  }, __jsx("p", {
    className: "text-xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "#", Object(_functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_3__["getIDStringfromURL"])(url)), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    className: "w-28 h-28 rounded-full p-4 m-2 cursor-pointer",
    style: {
      background: `linear-gradient(0deg, ${Object(_functions_getTypeIconAndColor__WEBPACK_IMPORTED_MODULE_6__["findColor"])(pokemonData.types[0].type.name)[1] + "10"} 0%, ${Object(_functions_getTypeIconAndColor__WEBPACK_IMPORTED_MODULE_6__["findColor"])(pokemonData.types[0].type.name)[1]} 80%)`
    },
    initial: {
      scale: 0,
      y: 0,
      opacity: 0
    },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1
    },
    whileHover: {
      scale: 1.1,
      boxShadow: "0 5px 5px 1px rgba(0,0,0,.25)"
    },
    whileTap: {
      scale: 1,
      boxShadow: "0 0px 0px 0px rgba(0,0,0,.25)"
    },
    onClick: () => router.push(`/${Object(_functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_3__["getIDStringfromURL"])(url)}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(react_lazy_images__WEBPACK_IMPORTED_MODULE_2__["LazyImage"], {
    src: Object(_functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_3__["getImageSourceFromURL"])(url),
    alt: name,
    placeholder: ({
      imageProps,
      ref
    }) => __jsx("img", {
      ref: ref,
      src: "/pokemon-egg.png",
      alt: imageProps.alt,
      draggable: "false",
      onDragStart: e => e.preventDefault(),
      style: {
        filter: "blur(10px)"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }),
    actual: ({
      imageProps
    }) => __jsx("img", Object(C_Users_HRV_Desktop_Programmes_REACT_poke_decks_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageProps, {
      alt: name,
      draggable: "false",
      onDragStart: e => e.preventDefault(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 45
      }
    })),
    error: () => __jsx("img", {
      src: "/pokemon-egg.png",
      alt: "egg error",
      draggable: "false",
      onDragStart: e => e.preventDefault(),
      style: {
        filter: "blur(10px)"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  })), __jsx("p", {
    className: "text-xs capitalize",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, name))) : __jsx("div", {
    className: "flex justify-evenly flex-wrap w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }))));
};

_s(Evolution, "Vsl4fRlROtjixNdYqMQsW1WUTKs=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__["default"], next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = Evolution;
/* harmony default export */ __webpack_exports__["default"] = (Evolution);

var _c;

$RefreshReg$(_c, "Evolution");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC1jb21wb25lbnRzL0V2b2x1dGlvbi50c3giXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwicG9rZW1vblNwZWNpZXNEYXRhIiwicG9rZW1vbkRhdGEiLCJkYXRhIiwidXNlU1dSIiwiZXZvbHV0aW9uX2NoYWluIiwidXJsIiwiZmV0Y2hFdm9sdXRpb25EYXRhIiwiZXZvbHV0aW9uQ2hhaW4iLCJzZXRFdm9sdXRpb25DaGFpbiIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZXZvbHV0aW9uRGF0YSIsImV4dHJhY3RFdm9sdXRpb25DaGFpbiIsIm1hcCIsIm5hbWUiLCJpbmRleCIsImdldElEU3RyaW5nZnJvbVVSTCIsImJhY2tncm91bmQiLCJmaW5kQ29sb3IiLCJ0eXBlcyIsInR5cGUiLCJzY2FsZSIsInkiLCJvcGFjaXR5IiwiYm94U2hhZG93IiwicHVzaCIsImdldEltYWdlU291cmNlRnJvbVVSTCIsImltYWdlUHJvcHMiLCJyZWYiLCJhbHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLE1BQU1BLFNBQW1DLEdBQUcsQ0FBQztBQUFDQyxvQkFBRDtBQUFxQkM7QUFBckIsQ0FBRCxLQUF1QztBQUFBOztBQUMvRSxRQUFNO0FBQUVDO0FBQUYsTUFBV0MsbURBQU0sQ0FBRSxHQUFFSCxrQkFBa0IsQ0FBQ0ksZUFBbkIsQ0FBbUNDLEdBQUksRUFBM0MsRUFBOENDLG1FQUE5QyxDQUF2QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDQyxzREFBUSxDQUE0QixJQUE1QixDQUFwRDtBQUNBLFFBQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFFQUMseURBQVMs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QUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBTk4sRUFXTTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsc0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBWE4sQ0E3Q04sQ0FESjtBQWtFSCxDQXJGRDs7R0FBTWpCLFM7VUFDZUksMkMsRUFFRlEsaUU7OztLQUhiWixTO0FBd0ZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLjBmODM5MjRlNmNhOWZmZTYwNmQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGF6eUltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1pbWFnZXMnXHJcbmltcG9ydCB7IGV4dHJhY3RFdm9sdXRpb25DaGFpbiwgZ2V0SURTdHJpbmdmcm9tVVJMLCBnZXRJbWFnZVNvdXJjZUZyb21VUkwgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvR2xvYmFsRnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBHZXRQb2tlbW9uRGF0YUludGVyZmFjZSwgR2V0UG9rZW1vblNwZWNpZXNEYXRhSW50ZXJmYWNlLCBOYW1lVVJMSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlc1Byb3BzL0ludGVyZmFjZXMnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgZmluZENvbG9yIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2dldFR5cGVJY29uQW5kQ29sb3InXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyBmZXRjaEV2b2x1dGlvbkRhdGEgfSBmcm9tICcuLi8uLi9mZXRjaC9GZXRjaERhdGEnXHJcblxyXG5pbnRlcmZhY2UgRXZvbHV0aW9uUHJvcHN7XHJcbiAgICBwb2tlbW9uU3BlY2llc0RhdGE6IEdldFBva2Vtb25TcGVjaWVzRGF0YUludGVyZmFjZVxyXG4gICAgcG9rZW1vbkRhdGE6IEdldFBva2Vtb25EYXRhSW50ZXJmYWNlXHJcbn1cclxuXHJcblxyXG5jb25zdCBFdm9sdXRpb246IFJlYWN0LkZDPEV2b2x1dGlvblByb3BzPiA9ICh7cG9rZW1vblNwZWNpZXNEYXRhLCBwb2tlbW9uRGF0YX0pID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGAke3Bva2Vtb25TcGVjaWVzRGF0YS5ldm9sdXRpb25fY2hhaW4udXJsfWAsIGZldGNoRXZvbHV0aW9uRGF0YSlcclxuICAgIGNvbnN0IFtldm9sdXRpb25DaGFpbiwgc2V0RXZvbHV0aW9uQ2hhaW5dID0gdXNlU3RhdGU8TmFtZVVSTEludGVyZmFjZVtdIHwgbnVsbD4obnVsbClcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2b2x1dGlvbkRhdGEgPSBleHRyYWN0RXZvbHV0aW9uQ2hhaW4oZGF0YSlcclxuICAgICAgICAgICAgc2V0RXZvbHV0aW9uQ2hhaW4oZXZvbHV0aW9uRGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBzZXRFdm9sdXRpb25DaGFpbihudWxsKVxyXG5cclxuICAgICAgICByZXR1cm4gKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0RXZvbHV0aW9uQ2hhaW4obnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH0sW2RhdGFdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1ldmVubHkgdy1mdWxsIG10LTRcIiA+XHJcbiAgICAgICAgeyhldm9sdXRpb25DaGFpbikgPyBldm9sdXRpb25DaGFpbi5tYXAoICh7bmFtZSwgdXJsfSwgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIiA+I3tnZXRJRFN0cmluZ2Zyb21VUkwodXJsKX08L3A+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInctMjggaC0yOCByb3VuZGVkLWZ1bGwgcC00IG0tMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgJHtmaW5kQ29sb3IocG9rZW1vbkRhdGEudHlwZXNbMF0udHlwZS5uYW1lKVsxXSArIFwiMTBcIn0gMCUsICR7ZmluZENvbG9yKHBva2Vtb25EYXRhLnR5cGVzWzBdLnR5cGUubmFtZSlbMV19IDgwJSlgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgNXB4IDVweCAxcHggcmdiYSgwLDAsMCwuMjUpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLC4yNSlcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgLyR7Z2V0SURTdHJpbmdmcm9tVVJMKHVybCl9YCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhenlJbWFnZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNyYz17Z2V0SW1hZ2VTb3VyY2VGcm9tVVJMKHVybCl9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17KHsgaW1hZ2VQcm9wcywgcmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxpbWcgcmVmPXtyZWZ9IHNyYz0nL3Bva2Vtb24tZWdnLnBuZycgYWx0PXtpbWFnZVByb3BzLmFsdH0gZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IHN0eWxlPXt7ZmlsdGVyOiBcImJsdXIoMTBweClcIn19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgYWN0dWFsPXsoeyBpbWFnZVByb3BzIH0pID0+IDxpbWcgey4uLmltYWdlUHJvcHN9IGFsdD17bmFtZX0gZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IC8+fVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9eygpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3Bva2Vtb24tZWdnLnBuZycgYWx0PVwiZWdnIGVycm9yXCIgZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IHN0eWxlPXt7ZmlsdGVyOiBcImJsdXIoMTBweClcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBjYXBpdGFsaXplXCIgPntuYW1lfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PiApXHJcblxyXG4gICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seSBmbGV4LXdyYXAgdy1mdWxsXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjggaC0yOCBtLTEgcm91bmRlZC1mdWxsIGJnLWdyYXktNDAwIGFuaW1hdGUtcHVsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI4IGgtMjggbS0xIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBhbmltYXRlLXB1bHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yOCBoLTI4IG0tMSByb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgYW5pbWF0ZS1wdWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9