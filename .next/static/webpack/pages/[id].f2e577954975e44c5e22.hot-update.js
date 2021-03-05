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
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])(); // console.log(data)
  // if(data) setEvolutionChain(extractEvolutionChain(data.data)) 

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(data);

    if (data) {
      const evolutionData = Object(_functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_3__["extractEvolutionChain"])(data.data);
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
      lineNumber: 40,
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
      lineNumber: 41,
      columnNumber: 73
    }
  }, __jsx("p", {
    className: "text-xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
    onClick: () => router.push(`/${+Object(_functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_3__["getIDStringfromURL"])(url)}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
        lineNumber: 73,
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
        lineNumber: 75,
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
        lineNumber: 77,
        columnNumber: 21
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  })), __jsx("p", {
    className: "text-xs capitalize",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, name))) : __jsx("div", {
    className: "flex justify-evenly flex-wrap w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC1jb21wb25lbnRzL0V2b2x1dGlvbi50c3giXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwicG9rZW1vblNwZWNpZXNEYXRhIiwicG9rZW1vbkRhdGEiLCJkYXRhIiwidXNlU1dSIiwiZXZvbHV0aW9uX2NoYWluIiwidXJsIiwiZmV0Y2hFdm9sdXRpb25EYXRhIiwiZXZvbHV0aW9uQ2hhaW4iLCJzZXRFdm9sdXRpb25DaGFpbiIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImV2b2x1dGlvbkRhdGEiLCJleHRyYWN0RXZvbHV0aW9uQ2hhaW4iLCJtYXAiLCJuYW1lIiwiaW5kZXgiLCJnZXRJRFN0cmluZ2Zyb21VUkwiLCJiYWNrZ3JvdW5kIiwiZmluZENvbG9yIiwidHlwZXMiLCJ0eXBlIiwic2NhbGUiLCJ5Iiwib3BhY2l0eSIsImJveFNoYWRvdyIsInB1c2giLCJnZXRJbWFnZVNvdXJjZUZyb21VUkwiLCJpbWFnZVByb3BzIiwicmVmIiwiYWx0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxNQUFNQSxTQUFtQyxHQUFHLENBQUM7QUFBQ0Msb0JBQUQ7QUFBcUJDO0FBQXJCLENBQUQsS0FBdUM7QUFBQTs7QUFDL0UsUUFBTTtBQUFFQztBQUFGLE1BQVdDLG1EQUFNLENBQUUsR0FBRUgsa0JBQWtCLENBQUNJLGVBQW5CLENBQW1DQyxHQUFJLEVBQTNDLEVBQThDQyxtRUFBOUMsQ0FBdkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Msc0RBQVEsQ0FBNEIsSUFBNUIsQ0FBcEQ7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLHNEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQU5OLEVBV007QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLHNEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQVhOLENBN0NOLENBREo7QUFrRUgsQ0F4RkQ7O0dBQU1uQixTO1VBQ2VJLDJDLEVBRUZRLGlFOzs7S0FIYlosUztBQTJGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS5mMmU1Nzc5NTQ5NzVlNDRjNWUyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExhenlJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktaW1hZ2VzJ1xyXG5pbXBvcnQgeyBleHRyYWN0RXZvbHV0aW9uQ2hhaW4sIGdldElEU3RyaW5nZnJvbVVSTCwgZ2V0SW1hZ2VTb3VyY2VGcm9tVVJMIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL0dsb2JhbEZ1bmN0aW9ucydcclxuaW1wb3J0IHsgR2V0UG9rZW1vbkRhdGFJbnRlcmZhY2UsIEdldFBva2Vtb25TcGVjaWVzRGF0YUludGVyZmFjZSwgTmFtZVVSTEludGVyZmFjZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXNQcm9wcy9JbnRlcmZhY2VzJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IGZpbmRDb2xvciB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9nZXRUeXBlSWNvbkFuZENvbG9yJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuaW1wb3J0IHsgZmV0Y2hFdm9sdXRpb25EYXRhIH0gZnJvbSAnLi4vLi4vZmV0Y2gvRmV0Y2hEYXRhJ1xyXG5cclxuaW50ZXJmYWNlIEV2b2x1dGlvblByb3Bze1xyXG4gICAgcG9rZW1vblNwZWNpZXNEYXRhOiBHZXRQb2tlbW9uU3BlY2llc0RhdGFJbnRlcmZhY2VcclxuICAgIHBva2Vtb25EYXRhOiBHZXRQb2tlbW9uRGF0YUludGVyZmFjZVxyXG59XHJcblxyXG5cclxuY29uc3QgRXZvbHV0aW9uOiBSZWFjdC5GQzxFdm9sdXRpb25Qcm9wcz4gPSAoe3Bva2Vtb25TcGVjaWVzRGF0YSwgcG9rZW1vbkRhdGF9KSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihgJHtwb2tlbW9uU3BlY2llc0RhdGEuZXZvbHV0aW9uX2NoYWluLnVybH1gLCBmZXRjaEV2b2x1dGlvbkRhdGEpXHJcbiAgICBjb25zdCBbZXZvbHV0aW9uQ2hhaW4sIHNldEV2b2x1dGlvbkNoYWluXSA9IHVzZVN0YXRlPE5hbWVVUkxJbnRlcmZhY2VbXSB8IG51bGw+KG51bGwpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vIGlmKGRhdGEpIHNldEV2b2x1dGlvbkNoYWluKGV4dHJhY3RFdm9sdXRpb25DaGFpbihkYXRhLmRhdGEpKSBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgaWYoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBldm9sdXRpb25EYXRhID0gZXh0cmFjdEV2b2x1dGlvbkNoYWluKGRhdGEuZGF0YSlcclxuICAgICAgICAgICAgc2V0RXZvbHV0aW9uQ2hhaW4oZXZvbHV0aW9uRGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBzZXRFdm9sdXRpb25DaGFpbihudWxsKVxyXG5cclxuICAgICAgICByZXR1cm4gKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0RXZvbHV0aW9uQ2hhaW4obnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH0sW2RhdGFdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1ldmVubHkgdy1mdWxsIG10LTRcIiA+XHJcbiAgICAgICAgeyhldm9sdXRpb25DaGFpbikgPyBldm9sdXRpb25DaGFpbi5tYXAoICh7bmFtZSwgdXJsfSwgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIiA+I3tnZXRJRFN0cmluZ2Zyb21VUkwodXJsKX08L3A+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInctMjggaC0yOCByb3VuZGVkLWZ1bGwgcC00IG0tMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgJHtmaW5kQ29sb3IocG9rZW1vbkRhdGEudHlwZXNbMF0udHlwZS5uYW1lKVsxXSArIFwiMTBcIn0gMCUsICR7ZmluZENvbG9yKHBva2Vtb25EYXRhLnR5cGVzWzBdLnR5cGUubmFtZSlbMV19IDgwJSlgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgNXB4IDVweCAxcHggcmdiYSgwLDAsMCwuMjUpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLC4yNSlcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgLyR7K2dldElEU3RyaW5nZnJvbVVSTCh1cmwpfWApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYXp5SW1hZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlU291cmNlRnJvbVVSTCh1cmwpfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyh7IGltYWdlUHJvcHMsIHJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nIHJlZj17cmVmfSBzcmM9Jy9wb2tlbW9uLWVnZy5wbmcnIGFsdD17aW1hZ2VQcm9wcy5hbHR9IGRyYWdnYWJsZT1cImZhbHNlXCIgb25EcmFnU3RhcnQ9eyAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBzdHlsZT17e2ZpbHRlcjogXCJibHVyKDEwcHgpXCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIGFjdHVhbD17KHsgaW1hZ2VQcm9wcyB9KSA9PiA8aW1nIHsuLi5pbWFnZVByb3BzfSBhbHQ9e25hbWV9IGRyYWdnYWJsZT1cImZhbHNlXCIgb25EcmFnU3RhcnQ9eyAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAvPn1cclxuICAgICAgICAgICAgICAgIGVycm9yPXsoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9wb2tlbW9uLWVnZy5wbmcnIGFsdD1cImVnZyBlcnJvclwiIGRyYWdnYWJsZT1cImZhbHNlXCIgb25EcmFnU3RhcnQ9eyAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBzdHlsZT17e2ZpbHRlcjogXCJibHVyKDEwcHgpXCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgY2FwaXRhbGl6ZVwiID57bmFtZX08L3A+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj4gKVxyXG5cclxuICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1ldmVubHkgZmxleC13cmFwIHctZnVsbFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI4IGgtMjggbS0xIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBhbmltYXRlLXB1bHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yOCBoLTI4IG0tMSByb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgYW5pbWF0ZS1wdWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjggaC0yOCBtLTEgcm91bmRlZC1mdWxsIGJnLWdyYXktNDAwIGFuaW1hdGUtcHVsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZvbHV0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==