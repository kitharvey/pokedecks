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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC1jb21wb25lbnRzL0V2b2x1dGlvbi50c3giXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwicG9rZW1vblNwZWNpZXNEYXRhIiwicG9rZW1vbkRhdGEiLCJkYXRhIiwidXNlU1dSIiwiZXZvbHV0aW9uX2NoYWluIiwidXJsIiwiZmV0Y2hFdm9sdXRpb25EYXRhIiwiZXZvbHV0aW9uQ2hhaW4iLCJzZXRFdm9sdXRpb25DaGFpbiIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXh0cmFjdEV2b2x1dGlvbkNoYWluIiwibWFwIiwibmFtZSIsImluZGV4IiwiZ2V0SURTdHJpbmdmcm9tVVJMIiwiYmFja2dyb3VuZCIsImZpbmRDb2xvciIsInR5cGVzIiwidHlwZSIsInNjYWxlIiwieSIsIm9wYWNpdHkiLCJib3hTaGFkb3ciLCJwdXNoIiwiZ2V0SW1hZ2VTb3VyY2VGcm9tVVJMIiwiaW1hZ2VQcm9wcyIsInJlZiIsImFsdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsTUFBTUEsU0FBbUMsR0FBRyxDQUFDO0FBQUNDLG9CQUFEO0FBQXFCQztBQUFyQixDQUFELEtBQXVDO0FBQUE7O0FBQy9FLFFBQU07QUFBRUM7QUFBRixNQUFXQyxtREFBTSxDQUFFLEdBQUVILGtCQUFrQixDQUFDSSxlQUFuQixDQUFtQ0MsR0FBSSxFQUEzQyxFQUE4Q0MsbUVBQTlDLENBQXZCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NDLHNEQUFRLENBQTRCLElBQTVCLENBQXBEO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4QjtBQUVBLE1BQUdULElBQUgsRUFBU00saUJBQWlCLENBQUNJLHdGQUFx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O0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsc0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBWE4sQ0E3Q04sQ0FESjtBQWtFSCxDQXZGRDs7R0FBTWYsUztVQUNlSSwyQyxFQUVGUSxpRTs7O0tBSGJaLFM7QUEwRlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tpZF0uODM0NGM2NzdkNTIxYWIwYzVjMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMYXp5SW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWltYWdlcydcclxuaW1wb3J0IHsgZXh0cmFjdEV2b2x1dGlvbkNoYWluLCBnZXRJRFN0cmluZ2Zyb21VUkwsIGdldEltYWdlU291cmNlRnJvbVVSTCB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9HbG9iYWxGdW5jdGlvbnMnXHJcbmltcG9ydCB7IEdldFBva2Vtb25EYXRhSW50ZXJmYWNlLCBHZXRQb2tlbW9uU3BlY2llc0RhdGFJbnRlcmZhY2UsIE5hbWVVUkxJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzUHJvcHMvSW50ZXJmYWNlcydcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyBmaW5kQ29sb3IgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZ2V0VHlwZUljb25BbmRDb2xvcidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IGZldGNoRXZvbHV0aW9uRGF0YSB9IGZyb20gJy4uLy4uL2ZldGNoL0ZldGNoRGF0YSdcclxuXHJcbmludGVyZmFjZSBFdm9sdXRpb25Qcm9wc3tcclxuICAgIHBva2Vtb25TcGVjaWVzRGF0YTogR2V0UG9rZW1vblNwZWNpZXNEYXRhSW50ZXJmYWNlXHJcbiAgICBwb2tlbW9uRGF0YTogR2V0UG9rZW1vbkRhdGFJbnRlcmZhY2VcclxufVxyXG5cclxuXHJcbmNvbnN0IEV2b2x1dGlvbjogUmVhY3QuRkM8RXZvbHV0aW9uUHJvcHM+ID0gKHtwb2tlbW9uU3BlY2llc0RhdGEsIHBva2Vtb25EYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoYCR7cG9rZW1vblNwZWNpZXNEYXRhLmV2b2x1dGlvbl9jaGFpbi51cmx9YCwgZmV0Y2hFdm9sdXRpb25EYXRhKVxyXG4gICAgY29uc3QgW2V2b2x1dGlvbkNoYWluLCBzZXRFdm9sdXRpb25DaGFpbl0gPSB1c2VTdGF0ZTxOYW1lVVJMSW50ZXJmYWNlW10gfCBudWxsPihudWxsKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBpZihkYXRhKSBzZXRFdm9sdXRpb25DaGFpbihleHRyYWN0RXZvbHV0aW9uQ2hhaW4oZGF0YS5kYXRhKSkgXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy8gICAgIGlmKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgZXZvbHV0aW9uRGF0YSA9IGV4dHJhY3RFdm9sdXRpb25DaGFpbihkYXRhLmRhdGEpXHJcbiAgICAvLyAgICAgICAgIHNldEV2b2x1dGlvbkNoYWluKGV2b2x1dGlvbkRhdGEpXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgc2V0RXZvbHV0aW9uQ2hhaW4obnVsbClcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIClcclxuICAgIC8vIH0sW2RhdGFdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1ldmVubHkgdy1mdWxsIG10LTRcIiA+XHJcbiAgICAgICAgeyhldm9sdXRpb25DaGFpbikgPyBldm9sdXRpb25DaGFpbi5tYXAoICh7bmFtZSwgdXJsfSwgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIiA+I3tnZXRJRFN0cmluZ2Zyb21VUkwodXJsKX08L3A+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInctMjggaC0yOCByb3VuZGVkLWZ1bGwgcC00IG0tMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgJHtmaW5kQ29sb3IocG9rZW1vbkRhdGEudHlwZXNbMF0udHlwZS5uYW1lKVsxXSArIFwiMTBcIn0gMCUsICR7ZmluZENvbG9yKHBva2Vtb25EYXRhLnR5cGVzWzBdLnR5cGUubmFtZSlbMV19IDgwJSlgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgNXB4IDVweCAxcHggcmdiYSgwLDAsMCwuMjUpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLC4yNSlcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgLyR7K2dldElEU3RyaW5nZnJvbVVSTCh1cmwpfWApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYXp5SW1hZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlU291cmNlRnJvbVVSTCh1cmwpfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyh7IGltYWdlUHJvcHMsIHJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nIHJlZj17cmVmfSBzcmM9Jy9wb2tlbW9uLWVnZy5wbmcnIGFsdD17aW1hZ2VQcm9wcy5hbHR9IGRyYWdnYWJsZT1cImZhbHNlXCIgb25EcmFnU3RhcnQ9eyAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBzdHlsZT17e2ZpbHRlcjogXCJibHVyKDEwcHgpXCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIGFjdHVhbD17KHsgaW1hZ2VQcm9wcyB9KSA9PiA8aW1nIHsuLi5pbWFnZVByb3BzfSBhbHQ9e25hbWV9IGRyYWdnYWJsZT1cImZhbHNlXCIgb25EcmFnU3RhcnQ9eyAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAvPn1cclxuICAgICAgICAgICAgICAgIGVycm9yPXsoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9wb2tlbW9uLWVnZy5wbmcnIGFsdD1cImVnZyBlcnJvclwiIGRyYWdnYWJsZT1cImZhbHNlXCIgb25EcmFnU3RhcnQ9eyAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBzdHlsZT17e2ZpbHRlcjogXCJibHVyKDEwcHgpXCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgY2FwaXRhbGl6ZVwiID57bmFtZX08L3A+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj4gKVxyXG5cclxuICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1ldmVubHkgZmxleC13cmFwIHctZnVsbFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI4IGgtMjggbS0xIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBhbmltYXRlLXB1bHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yOCBoLTI4IG0tMSByb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgYW5pbWF0ZS1wdWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjggaC0yOCBtLTEgcm91bmRlZC1mdWxsIGJnLWdyYXktNDAwIGFuaW1hdGUtcHVsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZvbHV0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==