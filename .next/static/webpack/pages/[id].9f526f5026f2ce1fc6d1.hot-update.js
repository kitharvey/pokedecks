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
    onClick: () => router.push(`/`),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC1jb21wb25lbnRzL0V2b2x1dGlvbi50c3giXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwicG9rZW1vblNwZWNpZXNEYXRhIiwicG9rZW1vbkRhdGEiLCJkYXRhIiwidXNlU1dSIiwiZXZvbHV0aW9uX2NoYWluIiwidXJsIiwiZmV0Y2hFdm9sdXRpb25EYXRhIiwiZXZvbHV0aW9uQ2hhaW4iLCJzZXRFdm9sdXRpb25DaGFpbiIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImV2b2x1dGlvbkRhdGEiLCJleHRyYWN0RXZvbHV0aW9uQ2hhaW4iLCJtYXAiLCJuYW1lIiwiaW5kZXgiLCJnZXRJRFN0cmluZ2Zyb21VUkwiLCJiYWNrZ3JvdW5kIiwiZmluZENvbG9yIiwidHlwZXMiLCJ0eXBlIiwic2NhbGUiLCJ5Iiwib3BhY2l0eSIsImJveFNoYWRvdyIsInB1c2giLCJnZXRJbWFnZVNvdXJjZUZyb21VUkwiLCJpbWFnZVByb3BzIiwicmVmIiwiYWx0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxNQUFNQSxTQUFtQyxHQUFHLENBQUM7QUFBQ0Msb0JBQUQ7QUFBcUJDO0FBQXJCLENBQUQsS0FBdUM7QUFBQTs7QUFDL0UsUUFBTTtBQUFFQztBQUFGLE1BQVdDLG1EQUFNLENBQUUsR0FBRUgsa0JBQWtCLENBQUNJLGVBQW5CLENBQW1DQyxHQUFJLEVBQTNDLEVBQThDQyxtRUFBOUMsQ0FBdkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Msc0RBQVEsQ0FBNEIsSUFBNUIsQ0FBcEQ7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVB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LGFBQVMsRUFBQyxzREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FOTixFQVdNO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxzREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FYTixDQTdDTixDQURKO0FBa0VILENBeEZEOztHQUFNbkIsUztVQUNlSSwyQyxFQUVGUSxpRTs7O0tBSGJaLFM7QUEyRlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tpZF0uOWY1MjZmNTAyNmYyY2UxZmM2ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMYXp5SW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWltYWdlcydcclxuaW1wb3J0IHsgZXh0cmFjdEV2b2x1dGlvbkNoYWluLCBnZXRJRFN0cmluZ2Zyb21VUkwsIGdldEltYWdlU291cmNlRnJvbVVSTCB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9HbG9iYWxGdW5jdGlvbnMnXHJcbmltcG9ydCB7IEdldFBva2Vtb25EYXRhSW50ZXJmYWNlLCBHZXRQb2tlbW9uU3BlY2llc0RhdGFJbnRlcmZhY2UsIE5hbWVVUkxJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzUHJvcHMvSW50ZXJmYWNlcydcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyBmaW5kQ29sb3IgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZ2V0VHlwZUljb25BbmRDb2xvcidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IGZldGNoRXZvbHV0aW9uRGF0YSB9IGZyb20gJy4uLy4uL2ZldGNoL0ZldGNoRGF0YSdcclxuXHJcbmludGVyZmFjZSBFdm9sdXRpb25Qcm9wc3tcclxuICAgIHBva2Vtb25TcGVjaWVzRGF0YTogR2V0UG9rZW1vblNwZWNpZXNEYXRhSW50ZXJmYWNlXHJcbiAgICBwb2tlbW9uRGF0YTogR2V0UG9rZW1vbkRhdGFJbnRlcmZhY2VcclxufVxyXG5cclxuXHJcbmNvbnN0IEV2b2x1dGlvbjogUmVhY3QuRkM8RXZvbHV0aW9uUHJvcHM+ID0gKHtwb2tlbW9uU3BlY2llc0RhdGEsIHBva2Vtb25EYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoYCR7cG9rZW1vblNwZWNpZXNEYXRhLmV2b2x1dGlvbl9jaGFpbi51cmx9YCwgZmV0Y2hFdm9sdXRpb25EYXRhKVxyXG4gICAgY29uc3QgW2V2b2x1dGlvbkNoYWluLCBzZXRFdm9sdXRpb25DaGFpbl0gPSB1c2VTdGF0ZTxOYW1lVVJMSW50ZXJmYWNlW10gfCBudWxsPihudWxsKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAvLyBpZihkYXRhKSBzZXRFdm9sdXRpb25DaGFpbihleHRyYWN0RXZvbHV0aW9uQ2hhaW4oZGF0YS5kYXRhKSkgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGlmKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZvbHV0aW9uRGF0YSA9IGV4dHJhY3RFdm9sdXRpb25DaGFpbihkYXRhKVxyXG4gICAgICAgICAgICBzZXRFdm9sdXRpb25DaGFpbihldm9sdXRpb25EYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHNldEV2b2x1dGlvbkNoYWluKG51bGwpXHJcblxyXG4gICAgICAgIHJldHVybiAoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRFdm9sdXRpb25DaGFpbihudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfSxbZGF0YV0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWV2ZW5seSB3LWZ1bGwgbXQtNFwiID5cclxuICAgICAgICB7KGV2b2x1dGlvbkNoYWluKSA/IGV2b2x1dGlvbkNoYWluLm1hcCggKHtuYW1lLCB1cmx9LCBpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiID5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14c1wiID4je2dldElEU3RyaW5nZnJvbVVSTCh1cmwpfTwvcD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwidy0yOCBoLTI4IHJvdW5kZWQtZnVsbCBwLTQgbS0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgwZGVnLCAke2ZpbmRDb2xvcihwb2tlbW9uRGF0YS50eXBlc1swXS50eXBlLm5hbWUpWzFdICsgXCIxMFwifSAwJSwgJHtmaW5kQ29sb3IocG9rZW1vbkRhdGEudHlwZXNbMF0udHlwZS5uYW1lKVsxXX0gODAlKWBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuMSxcclxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCA1cHggNXB4IDFweCByZ2JhKDAsMCwwLC4yNSlcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDBweCAwcHggMHB4IHJnYmEoMCwwLDAsLjI1KVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvYCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhenlJbWFnZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNyYz17Z2V0SW1hZ2VTb3VyY2VGcm9tVVJMKHVybCl9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17KHsgaW1hZ2VQcm9wcywgcmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxpbWcgcmVmPXtyZWZ9IHNyYz0nL3Bva2Vtb24tZWdnLnBuZycgYWx0PXtpbWFnZVByb3BzLmFsdH0gZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IHN0eWxlPXt7ZmlsdGVyOiBcImJsdXIoMTBweClcIn19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgYWN0dWFsPXsoeyBpbWFnZVByb3BzIH0pID0+IDxpbWcgey4uLmltYWdlUHJvcHN9IGFsdD17bmFtZX0gZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IC8+fVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9eygpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3Bva2Vtb24tZWdnLnBuZycgYWx0PVwiZWdnIGVycm9yXCIgZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IHN0eWxlPXt7ZmlsdGVyOiBcImJsdXIoMTBweClcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBjYXBpdGFsaXplXCIgPntuYW1lfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PiApXHJcblxyXG4gICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seSBmbGV4LXdyYXAgdy1mdWxsXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjggaC0yOCBtLTEgcm91bmRlZC1mdWxsIGJnLWdyYXktNDAwIGFuaW1hdGUtcHVsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0zLjUgcm91bmRlZCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI4IGgtMjggbS0xIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBhbmltYXRlLXB1bHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMy41IHJvdW5kZWQgYmctZ3JheS0yMDAgYW5pbWF0ZS1wdWxzZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yOCBoLTI4IG0tMSByb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgYW5pbWF0ZS1wdWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTMuNSByb3VuZGVkIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9