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
  console.log(data);
  if (data) setEvolutionChain(Object(_functions_GlobalFunctions__WEBPACK_IMPORTED_MODULE_3__["extractEvolutionChain"])(data.data)); // useEffect(() => {
  //     console.log(data)
  //     if(data) {
  //         const evolutionData = extractEvolutionChain(data.data)
  //         setEvolutionChain(evolutionData)
  //     }
  //     return (() => {
  //         setEvolutionChain(null)
  //         }
  //     )
  // },[data])

  return __jsx("div", {
    className: "flex flex-wrap justify-evenly w-full mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
      lineNumber: 40,
      columnNumber: 73
    }
  }, __jsx("p", {
    className: "text-xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 42,
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
        lineNumber: 72,
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
        lineNumber: 74,
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
        lineNumber: 76,
        columnNumber: 21
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })), __jsx("p", {
    className: "text-xs capitalize",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, name))) : __jsx("div", {
    className: "flex justify-evenly flex-wrap w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-10 h-3.5 rounded bg-gray-200 animate-pulses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }))));
};

_s(Evolution, "GY6eL6xBfx1k3+M72rMuzt8oarM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC1jb21wb25lbnRzL0V2b2x1dGlvbi50c3giXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwicG9rZW1vblNwZWNpZXNEYXRhIiwicG9rZW1vbkRhdGEiLCJkYXRhIiwidXNlU1dSIiwiZXZvbHV0aW9uX2NoYWluIiwidXJsIiwiZmV0Y2hFdm9sdXRpb25EYXRhIiwiZXZvbHV0aW9uQ2hhaW4iLCJzZXRFdm9sdXRpb25DaGFpbiIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsImV4dHJhY3RFdm9sdXRpb25DaGFpbiIsIm1hcCIsIm5hbWUiLCJpbmRleCIsImdldElEU3RyaW5nZnJvbVVSTCIsImJhY2tncm91bmQiLCJmaW5kQ29sb3IiLCJ0eXBlcyIsInR5cGUiLCJzY2FsZSIsInkiLCJvcGFjaXR5IiwiYm94U2hhZG93IiwicHVzaCIsImdldEltYWdlU291cmNlRnJvbVVSTCIsImltYWdlUHJvcHMiLCJyZWYiLCJhbHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLE1BQU1BLFNBQW1DLEdBQUcsQ0FBQztBQUFDQyxvQkFBRDtBQUFxQkM7QUFBckIsQ0FBRCxLQUF1QztBQUFBOztBQUMvRSxRQUFNO0FBQUVDO0FBQUYsTUFBV0MsbURBQU0sQ0FBRSxHQUFFSCxrQkFBa0IsQ0FBQ0ksZUFBbkIsQ0FBbUNDLEdBQUksRUFBM0MsRUFBOENDLG1FQUE5QyxDQUF2QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDQyxzREFBUSxDQUE0QixJQUE1QixDQUFwRDtBQUNBLFFBQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENB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LENBTk4sRUFXTTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsc0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBWE4sQ0E3Q04sQ0FESjtBQWtFSCxDQXZGRDs7R0FBTWpCLFM7VUFDZUksMkMsRUFFRlEsaUU7OztLQUhiWixTO0FBMEZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLjIwYmRlMWE2NWJkN2JmN2U0OGVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGF6eUltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1pbWFnZXMnXHJcbmltcG9ydCB7IGV4dHJhY3RFdm9sdXRpb25DaGFpbiwgZ2V0SURTdHJpbmdmcm9tVVJMLCBnZXRJbWFnZVNvdXJjZUZyb21VUkwgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvR2xvYmFsRnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBHZXRQb2tlbW9uRGF0YUludGVyZmFjZSwgR2V0UG9rZW1vblNwZWNpZXNEYXRhSW50ZXJmYWNlLCBOYW1lVVJMSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlc1Byb3BzL0ludGVyZmFjZXMnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgZmluZENvbG9yIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2dldFR5cGVJY29uQW5kQ29sb3InXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyBmZXRjaEV2b2x1dGlvbkRhdGEgfSBmcm9tICcuLi8uLi9mZXRjaC9GZXRjaERhdGEnXHJcblxyXG5pbnRlcmZhY2UgRXZvbHV0aW9uUHJvcHN7XHJcbiAgICBwb2tlbW9uU3BlY2llc0RhdGE6IEdldFBva2Vtb25TcGVjaWVzRGF0YUludGVyZmFjZVxyXG4gICAgcG9rZW1vbkRhdGE6IEdldFBva2Vtb25EYXRhSW50ZXJmYWNlXHJcbn1cclxuXHJcblxyXG5jb25zdCBFdm9sdXRpb246IFJlYWN0LkZDPEV2b2x1dGlvblByb3BzPiA9ICh7cG9rZW1vblNwZWNpZXNEYXRhLCBwb2tlbW9uRGF0YX0pID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGAke3Bva2Vtb25TcGVjaWVzRGF0YS5ldm9sdXRpb25fY2hhaW4udXJsfWAsIGZldGNoRXZvbHV0aW9uRGF0YSlcclxuICAgIGNvbnN0IFtldm9sdXRpb25DaGFpbiwgc2V0RXZvbHV0aW9uQ2hhaW5dID0gdXNlU3RhdGU8TmFtZVVSTEludGVyZmFjZVtdIHwgbnVsbD4obnVsbClcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgaWYoZGF0YSkgc2V0RXZvbHV0aW9uQ2hhaW4oZXh0cmFjdEV2b2x1dGlvbkNoYWluKGRhdGEuZGF0YSkpIFxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vICAgICBpZihkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGV2b2x1dGlvbkRhdGEgPSBleHRyYWN0RXZvbHV0aW9uQ2hhaW4oZGF0YS5kYXRhKVxyXG4gICAgLy8gICAgICAgICBzZXRFdm9sdXRpb25DaGFpbihldm9sdXRpb25EYXRhKVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuICgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldEV2b2x1dGlvbkNoYWluKG51bGwpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICApXHJcbiAgICAvLyB9LFtkYXRhXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktZXZlbmx5IHctZnVsbCBtdC00XCIgPlxyXG4gICAgICAgIHsoZXZvbHV0aW9uQ2hhaW4pID8gZXZvbHV0aW9uQ2hhaW4ubWFwKCAoe25hbWUsIHVybH0sIGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIgPiN7Z2V0SURTdHJpbmdmcm9tVVJMKHVybCl9PC9wPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJ3LTI4IGgtMjggcm91bmRlZC1mdWxsIHAtNCBtLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsICR7ZmluZENvbG9yKHBva2Vtb25EYXRhLnR5cGVzWzBdLnR5cGUubmFtZSlbMV0gKyBcIjEwXCJ9IDAlLCAke2ZpbmRDb2xvcihwb2tlbW9uRGF0YS50eXBlc1swXS50eXBlLm5hbWUpWzFdfSA4MCUpYFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMCxcclxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS4xLFxyXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDVweCA1cHggMXB4IHJnYmEoMCwwLDAsLjI1KVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMHB4IDBweCAwcHggcmdiYSgwLDAsMCwuMjUpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC8keytnZXRJRFN0cmluZ2Zyb21VUkwodXJsKX1gKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGF6eUltYWdlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtnZXRJbWFnZVNvdXJjZUZyb21VUkwodXJsKX1cclxuICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsoeyBpbWFnZVByb3BzLCByZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGltZyByZWY9e3JlZn0gc3JjPScvcG9rZW1vbi1lZ2cucG5nJyBhbHQ9e2ltYWdlUHJvcHMuYWx0fSBkcmFnZ2FibGU9XCJmYWxzZVwiIG9uRHJhZ1N0YXJ0PXsgKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IGUucHJldmVudERlZmF1bHQoKX0gc3R5bGU9e3tmaWx0ZXI6IFwiYmx1cigxMHB4KVwifX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBhY3R1YWw9eyh7IGltYWdlUHJvcHMgfSkgPT4gPGltZyB7Li4uaW1hZ2VQcm9wc30gYWx0PXtuYW1lfSBkcmFnZ2FibGU9XCJmYWxzZVwiIG9uRHJhZ1N0YXJ0PXsgKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IGUucHJldmVudERlZmF1bHQoKX0gLz59XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17KCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvcG9rZW1vbi1lZ2cucG5nJyBhbHQ9XCJlZ2cgZXJyb3JcIiBkcmFnZ2FibGU9XCJmYWxzZVwiIG9uRHJhZ1N0YXJ0PXsgKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IGUucHJldmVudERlZmF1bHQoKX0gc3R5bGU9e3tmaWx0ZXI6IFwiYmx1cigxMHB4KVwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGNhcGl0YWxpemVcIiA+e25hbWV9PC9wPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+IClcclxuXHJcbiAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZXZlbmx5IGZsZXgtd3JhcCB3LWZ1bGxcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yOCBoLTI4IG0tMSByb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgYW5pbWF0ZS1wdWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjggaC0yOCBtLTEgcm91bmRlZC1mdWxsIGJnLWdyYXktNDAwIGFuaW1hdGUtcHVsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI4IGgtMjggbS0xIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBhbmltYXRlLXB1bHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2b2x1dGlvbiJdLCJzb3VyY2VSb290IjoiIn0=