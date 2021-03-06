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
    onClick: () => router.push(`/${pokemondata.id}`, undefined, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZWNrL0FjdHVhbENhcmQudHN4Il0sIm5hbWVzIjpbIkFjdHVhbENhcmQiLCJwb2tlbW9uZGF0YSIsInNwcml0ZSIsImdldEltYWdlU291cmNlZnJvbUlEIiwiaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYWNrZ3JvdW5kIiwiZmluZENvbG9yIiwidHlwZXMiLCJ0eXBlIiwibmFtZSIsImdldElEU3RyaW5nZnJvbUlEIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiYXNQYXRoIiwicHVzaCIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJpbWFnZVByb3BzIiwicmVmIiwiYWx0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIiwibWFwIiwiaW5kZXgiLCJnZXRUeXBlSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxNQUFNQSxVQUEwQyxHQUFLLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQW1CO0FBQUE7O0FBQ3BFLFFBQU1DLE1BQU0sR0FBR0MsdUZBQW9CLENBQUNGLFdBQVcsQ0FBQ0csRUFBYixDQUFuQztBQUNBLFFBQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxTQUNFO0FBQ0UsYUFBUyxFQUFDLDhFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUNFLGFBQVMsRUFBQyx3QkFEWjtBQUVFLFNBQUssRUFBRTtBQUNMQyxnQkFBVSxFQUFHLGlEQUFnREMsZ0ZBQVMsQ0FBQ1AsV0FBVyxDQUFDUSxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkMsSUFBM0IsQ0FBVCxDQUEwQyxDQUExQyxDQUE2QztBQURyRyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FN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QUFTLEVBQUMsOEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPdkIsV0FBVyxDQUFDUSxLQUFaLENBQWtCZ0IsR0FBbEIsQ0FBdUIsQ0FBQ2YsSUFBRCxFQUFNZ0IsS0FBTixLQUFnQjtBQUFNLE9BQUcsRUFBRUMsa0ZBQVcsQ0FBQ2pCLElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxJQUFYLENBQVgsQ0FBNEIsQ0FBNUIsQ0FBWDtBQUNNLGFBQVMsRUFBQyxxQkFEaEI7QUFFTSxTQUFLLEVBQUU7QUFDTGlCLFdBQUssRUFBRSxNQURGO0FBRUxDLFlBQU0sRUFBRSxNQUZIO0FBR0xDLFlBQU0sRUFBRTdCLFdBQVcsQ0FBQ1EsS0FBWixDQUFrQnNCLE1BQWxCLEdBQTJCLENBQTNCLEdBQStCLFdBQS9CLEdBQTZDO0FBSGhELEtBRmI7QUFPTSxPQUFHLEVBQUVMLEtBUFg7QUFRTSxhQUFTLEVBQUMsT0FSaEI7QUFTTSxlQUFXLEVBQUdKLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxjQUFGLEVBVHpCO0FBVU0sT0FBRyxFQUFFSSxrRkFBVyxDQUFDakIsSUFBSSxDQUFDQSxJQUFMLENBQVVDLElBQVgsQ0FBWCxDQUE0QixDQUE1QixDQVZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdkMsQ0FEUCxDQTFERixFQTBFSTtBQUFLLGFBQVMsRUFBQyxnSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1NWLFdBQVcsQ0FBQ1UsSUFEckIsQ0ExRUosQ0FERjtBQWdGRCxDQW5GSDs7R0FBTVgsVTtVQUVhTSxpRTs7O0tBRmJOLFU7QUFxRldBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMzZWIxOTk2YTNlZmY1NjBlZjA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFjdHVhbENhcmRJbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vSW50ZXJmYWNlc1Byb3BzL0ludGVyZmFjZXNcIlxyXG5pbXBvcnQge2dldFR5cGVJY29uLCBmaW5kQ29sb3J9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9nZXRUeXBlSWNvbkFuZENvbG9yJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0SW1hZ2VTb3VyY2Vmcm9tSUQsIGdldElEU3RyaW5nZnJvbUlEIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL0dsb2JhbEZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IExhenlJbWFnZSB9IGZyb20gXCJyZWFjdC1sYXp5LWltYWdlc1wiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQWN0dWFsQ2FyZDogUmVhY3QuRkM8QWN0dWFsQ2FyZEludGVyZmFjZSA+ICA9ICAoe3Bva2Vtb25kYXRhfSkgPT4ge1xyXG4gICAgY29uc3Qgc3ByaXRlID0gZ2V0SW1hZ2VTb3VyY2Vmcm9tSUQocG9rZW1vbmRhdGEuaWQpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBcclxuICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSByZWxhdGl2ZSBhZGRGaWx0ZXIgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcmVsYXRpdmVcIiBcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgJHtmaW5kQ29sb3IocG9rZW1vbmRhdGEudHlwZXNbMF0udHlwZS5uYW1lKVsxXX0gMTAwJSlgXHJcbiAgICAgICAgICB9fSBcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC01IHJpZ2h0LTEvMiB0cmFuc2Zvcm0gdHJhbnNsYXRlLXgtMS8yIHRleHQtYmxhY2sgdGV4dC1vcGFjaXR5LTI1IGZvbnQtYm9sZCB0ZXh0LTV4bCB0cmFja2luZy13aWRlc3QgbGVhZGluZy1ub25lXCIgPiN7Z2V0SURTdHJpbmdmcm9tSUQocG9rZW1vbmRhdGEuaWQpfTwvcD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMiBDb3VyaWVyIHRleHQtMnhsIGZvbnQtYmxhY2sgdGV4dC13aGl0ZSBsZWFkaW5nLW5vbmUgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1vcGFjaXR5LTUwXCJcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgXHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDgsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuMjVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cm91dGVyLmFzUGF0aCA9PT0gJy8nICYmIFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgNDE2Ljk3OSA0MTYuOTc5XCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiIGZpbGw9XCIjRkZGXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC8ke3Bva2Vtb25kYXRhLmlkfWAsICB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNTYuMDA0LDYxLjE1NmMtODEuMzctODEuNDctMjEzLjM3Ny04MS41NTEtMjk0Ljg0OC0wLjE4MmMtODEuNDcsODEuMzcxLTgxLjU1MiwyMTMuMzc5LTAuMTgxLDI5NC44NVxyXG4gICAgICAgICAgICAgICAgICAgICAgYzgxLjM2OSw4MS40NywyMTMuMzc4LDgxLjU1MSwyOTQuODQ5LDAuMTgxQzQzNy4yOTMsMjc0LjYzNiw0MzcuMzc1LDE0Mi42MjYsMzU2LjAwNCw2MS4xNTZ6IE0yMzcuNiwzNDAuNzg2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjMCwzLjIxNy0yLjYwNyw1LjgyMi01LjgyMiw1LjgyMmgtNDYuNTc2Yy0zLjIxNSwwLTUuODIyLTIuNjA1LTUuODIyLTUuODIyVjE2Ny44ODVjMC0zLjIxNywyLjYwNy01LjgyMiw1LjgyMi01LjgyMmg0Ni41NzZcclxuICAgICAgICAgICAgICAgICAgICAgIGMzLjIxNSwwLDUuODIyLDIuNjA0LDUuODIyLDUuODIyVjM0MC43ODZ6IE0yMDguNDksMTM3LjkwMWMtMTguNjE4LDAtMzMuNzY2LTE1LjE0Ni0zMy43NjYtMzMuNzY1XHJcbiAgICAgICAgICAgICAgICAgICAgICBjMC0xOC42MTcsMTUuMTQ3LTMzLjc2NiwzMy43NjYtMzMuNzY2YzE4LjYxOSwwLDMzLjc2NiwxNS4xNDgsMzMuNzY2LDMzLjc2NkMyNDIuMjU2LDEyMi43NTUsMjI3LjEwNywxMzcuOTAxLDIwOC40OSwxMzcuOTAxelwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUyIGgtNTIgYWJzb2x1dGUgbGVmdC0xLzIgYm90dG9tLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB0cmFuc2xhdGUteS0xLzJcIiAgPlxyXG4gICAgICAgICAgICA8TGF6eUltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtzcHJpdGV9XHJcbiAgICAgICAgICAgICAgYWx0PXtwb2tlbW9uZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsoeyBpbWFnZVByb3BzLCByZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGltZyAgcmVmPXtyZWZ9IHNyYz17Jy9wb2tlbW9uLWVnZy5wbmcnfSBhbHQ9e2ltYWdlUHJvcHMuYWx0fSBkcmFnZ2FibGU9XCJmYWxzZVwiIG9uRHJhZ1N0YXJ0PXsgKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IGUucHJldmVudERlZmF1bHQoKX0gc3R5bGU9e3tmaWx0ZXI6IFwiYmx1cigxMHB4KVwifX0gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGFjdHVhbD17KHsgaW1hZ2VQcm9wcyB9KSA9PiA8aW1nIHsuLi5pbWFnZVByb3BzfSBhbHQ9e3Bva2Vtb25kYXRhLm5hbWV9ICBkcmFnZ2FibGU9XCJmYWxzZVwiIG9uRHJhZ1N0YXJ0PXsgKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICBcclxuICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICBlcnJvcj17KCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eycvcG9rZW1vbi1lZ2cucG5nJ30gYWx0PVwiZWdnIGVycm9yXCIgZHJhZ2dhYmxlPVwiZmFsc2VcIiBvbkRyYWdTdGFydD17IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IHN0eWxlPXt7ZmlsdGVyOiBcImJsdXIoMTBweClcIn19IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhYnNvbHV0ZSBib3R0b20tMTIgcmlnaHQtMS8yIHRyYW5zZm9ybSB0cmFuc2xhdGUteC0xLzIgdHJhbnNsYXRlLXktMS80IFwiID5cclxuICAgICAgICAgICAgICB7cG9rZW1vbmRhdGEudHlwZXMubWFwKCAodHlwZSxpbmRleCkgPT4gPGltZyAgc3JjPXtnZXRUeXBlSWNvbih0eXBlLnR5cGUubmFtZSlbMV19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItbS0wLjUgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHBva2Vtb25kYXRhLnR5cGVzLmxlbmd0aCA+IDEgPyBcIi0wLjEyNXJlbVwiIDogXCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsgZSA9PiBlLnByZXZlbnREZWZhdWx0KCl9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtnZXRUeXBlSWNvbih0eXBlLnR5cGUubmFtZSlbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgcmlnaHQtMS8yIHRyYW5zZm9ybSB0cmFuc2xhdGUteC0xLzIgIHctbWF4ICB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGZvbnQtYm9sZCBjYXBpdGFsaXplIHRleHQteGwgbGVhZGluZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwb2tlbW9uZGF0YS5uYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEFjdHVhbENhcmQiXSwic291cmNlUm9vdCI6IiJ9