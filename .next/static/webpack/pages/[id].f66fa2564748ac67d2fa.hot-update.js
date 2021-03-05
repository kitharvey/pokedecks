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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZWNrL0FjdHVhbENhcmQudHN4Il0sIm5hbWVzIjpbIkFjdHVhbENhcmQiLCJwb2tlbW9uZGF0YSIsInNwcml0ZSIsImdldEltYWdlU291cmNlZnJvbUlEIiwiaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYWNrZ3JvdW5kIiwiZmluZENvbG9yIiwidHlwZXMiLCJ0eXBlIiwibmFtZSIsImdldElEU3RyaW5nZnJvbUlEIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiYXNQYXRoIiwicHVzaCIsImltYWdlUHJvcHMiLCJyZWYiLCJhbHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJtYXAiLCJpbmRleCIsImdldFR5cGVJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLE1BQU1BLFVBQTBDLEdBQUssQ0FBQztBQUFDQztBQUFELENBQUQsS0FBbUI7QUFBQTs7QUFDcEUsUUFBTUMsTUFBTSxHQUFHQyx1RkFBb0IsQ0FBQ0YsV0FBVyxDQUFDRyxFQUFiLENBQW5DO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4QjtBQUNBLFNBQ0U7QUFDRSxhQUFTLEVBQUMsOEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQ0UsYUFBUyxFQUFDLHdCQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUcsaURBQWdEQyxnRkFBUyxDQUFDUCxXQUFXLENBQUNRLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxJQUEzQixDQUFULENBQTBDLENBQTFDLENBQTZDO0FBRHJHLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUcsYUFBUyxFQUFDLCtIQUFi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QUFaLENBQWtCYyxHQUFsQixDQUF1QixDQUFDYixJQUFELEVBQU1jLEtBQU4sS0FBZ0I7QUFBTSxPQUFHLEVBQUVDLGtGQUFXLENBQUNmLElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxJQUFYLENBQVgsQ0FBNEIsQ0FBNUIsQ0FBWDtBQUNNLGFBQVMsRUFBQyxxQkFEaEI7QUFFTSxTQUFLLEVBQUU7QUFDTGUsV0FBSyxFQUFFLE1BREY7QUFFTEMsWUFBTSxFQUFFLE1BRkg7QUFHTEMsWUFBTSxFQUFFM0IsV0FBVyxDQUFDUSxLQUFaLENBQWtCb0IsTUFBbEIsR0FBMkIsQ0FBM0IsR0FBK0IsV0FBL0IsR0FBNkM7QUFIaEQsS0FGYjtBQU9NLE9BQUcsRUFBRUwsS0FQWDtBQVFNLGFBQVMsRUFBQyxPQVJoQjtBQVNNLGVBQVcsRUFBR0osQ0FBQyxJQUFJQSxDQUFDLENBQUNDLGNBQUYsRUFUekI7QUFVTSxPQUFHLEVBQUVJLGtGQUFXLENBQUNmLElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxJQUFYLENBQVgsQ0FBNEIsQ0FBNUIsQ0FWWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXZDLENBRFAsQ0ExREYsRUEwRUk7QUFBSyxhQUFTLEVBQUMsZ0lBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNTVixXQUFXLENBQUNVLElBRHJCLENBMUVKLENBREY7QUFnRkQsQ0FuRkg7O0dBQU1YLFU7VUFFYU0saUU7OztLQUZiTixVO0FBcUZXQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLmY2NmZhMjU2NDc0OGFjNjdkMmZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFjdHVhbENhcmRJbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vSW50ZXJmYWNlc1Byb3BzL0ludGVyZmFjZXNcIlxyXG5pbXBvcnQge2dldFR5cGVJY29uLCBmaW5kQ29sb3J9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9nZXRUeXBlSWNvbkFuZENvbG9yJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0SW1hZ2VTb3VyY2Vmcm9tSUQsIGdldElEU3RyaW5nZnJvbUlEIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL0dsb2JhbEZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IExhenlJbWFnZSB9IGZyb20gXCJyZWFjdC1sYXp5LWltYWdlc1wiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQWN0dWFsQ2FyZDogUmVhY3QuRkM8QWN0dWFsQ2FyZEludGVyZmFjZSA+ICA9ICAoe3Bva2Vtb25kYXRhfSkgPT4ge1xyXG4gICAgY29uc3Qgc3ByaXRlID0gZ2V0SW1hZ2VTb3VyY2Vmcm9tSUQocG9rZW1vbmRhdGEuaWQpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBcclxuICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSByZWxhdGl2ZSBhZGRGaWx0ZXIgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcmVsYXRpdmVcIiBcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgJHtmaW5kQ29sb3IocG9rZW1vbmRhdGEudHlwZXNbMF0udHlwZS5uYW1lKVsxXX0gMTAwJSlgXHJcbiAgICAgICAgICB9fSBcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC01IHJpZ2h0LTEvMiB0cmFuc2Zvcm0gdHJhbnNsYXRlLXgtMS8yIHRleHQtYmxhY2sgdGV4dC1vcGFjaXR5LTI1IGZvbnQtYm9sZCB0ZXh0LTV4bCB0cmFja2luZy13aWRlc3QgbGVhZGluZy1ub25lXCIgPiN7Z2V0SURTdHJpbmdmcm9tSUQocG9rZW1vbmRhdGEuaWQpfTwvcD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMiBDb3VyaWVyIHRleHQtMnhsIGZvbnQtYmxhY2sgdGV4dC13aGl0ZSBsZWFkaW5nLW5vbmUgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1vcGFjaXR5LTUwXCJcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgXHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDgsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuMjVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cm91dGVyLmFzUGF0aCA9PT0gJy8nICYmIFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgNDE2Ljk3OSA0MTYuOTc5XCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiIGZpbGw9XCIjRkZGXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC8ke3Bva2Vtb25kYXRhLmlkfWApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM1Ni4wMDQsNjEuMTU2Yy04MS4zNy04MS40Ny0yMTMuMzc3LTgxLjU1MS0yOTQuODQ4LTAuMTgyYy04MS40Nyw4MS4zNzEtODEuNTUyLDIxMy4zNzktMC4xODEsMjk0Ljg1XHJcbiAgICAgICAgICAgICAgICAgICAgICBjODEuMzY5LDgxLjQ3LDIxMy4zNzgsODEuNTUxLDI5NC44NDksMC4xODFDNDM3LjI5MywyNzQuNjM2LDQzNy4zNzUsMTQyLjYyNiwzNTYuMDA0LDYxLjE1NnogTTIzNy42LDM0MC43ODZcclxuICAgICAgICAgICAgICAgICAgICAgIGMwLDMuMjE3LTIuNjA3LDUuODIyLTUuODIyLDUuODIyaC00Ni41NzZjLTMuMjE1LDAtNS44MjItMi42MDUtNS44MjItNS44MjJWMTY3Ljg4NWMwLTMuMjE3LDIuNjA3LTUuODIyLDUuODIyLTUuODIyaDQ2LjU3NlxyXG4gICAgICAgICAgICAgICAgICAgICAgYzMuMjE1LDAsNS44MjIsMi42MDQsNS44MjIsNS44MjJWMzQwLjc4NnogTTIwOC40OSwxMzcuOTAxYy0xOC42MTgsMC0zMy43NjYtMTUuMTQ2LTMzLjc2Ni0zMy43NjVcclxuICAgICAgICAgICAgICAgICAgICAgIGMwLTE4LjYxNywxNS4xNDctMzMuNzY2LDMzLjc2Ni0zMy43NjZjMTguNjE5LDAsMzMuNzY2LDE1LjE0OCwzMy43NjYsMzMuNzY2QzI0Mi4yNTYsMTIyLjc1NSwyMjcuMTA3LDEzNy45MDEsMjA4LjQ5LDEzNy45MDF6XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTIgaC01MiBhYnNvbHV0ZSBsZWZ0LTEvMiBib3R0b20tMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIHRyYW5zbGF0ZS15LTEvMlwiICA+XHJcbiAgICAgICAgICAgIDxMYXp5SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3Nwcml0ZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Bva2Vtb25kYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyh7IGltYWdlUHJvcHMsIHJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nICByZWY9e3JlZn0gc3JjPXsnL3Bva2Vtb24tZWdnLnBuZyd9IGFsdD17aW1hZ2VQcm9wcy5hbHR9IGRyYWdnYWJsZT1cImZhbHNlXCIgb25EcmFnU3RhcnQ9eyAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBzdHlsZT17e2ZpbHRlcjogXCJibHVyKDEwcHgpXCJ9fSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYWN0dWFsPXsoeyBpbWFnZVByb3BzIH0pID0+IDxpbWcgey4uLmltYWdlUHJvcHN9IGFsdD17cG9rZW1vbmRhdGEubmFtZX0gIGRyYWdnYWJsZT1cImZhbHNlXCIgb25EcmFnU3RhcnQ9eyAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gIFxyXG4gICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgIGVycm9yPXsoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9wb2tlbW9uLWVnZy5wbmcnfSBhbHQ9XCJlZ2cgZXJyb3JcIiBkcmFnZ2FibGU9XCJmYWxzZVwiIG9uRHJhZ1N0YXJ0PXsgKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IGUucHJldmVudERlZmF1bHQoKX0gc3R5bGU9e3tmaWx0ZXI6IFwiYmx1cigxMHB4KVwifX0gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFic29sdXRlIGJvdHRvbS0xMiByaWdodC0xLzIgdHJhbnNmb3JtIHRyYW5zbGF0ZS14LTEvMiB0cmFuc2xhdGUteS0xLzQgXCIgPlxyXG4gICAgICAgICAgICAgIHtwb2tlbW9uZGF0YS50eXBlcy5tYXAoICh0eXBlLGluZGV4KSA9PiA8aW1nICBzcmM9e2dldFR5cGVJY29uKHR5cGUudHlwZS5uYW1lKVsxXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIi1tLTAuNSByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogcG9rZW1vbmRhdGEudHlwZXMubGVuZ3RoID4gMSA/IFwiLTAuMTI1cmVtXCIgOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyBlID0+IGUucHJldmVudERlZmF1bHQoKX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2dldFR5cGVJY29uKHR5cGUudHlwZS5uYW1lKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCByaWdodC0xLzIgdHJhbnNmb3JtIHRyYW5zbGF0ZS14LTEvMiAgdy1tYXggIHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgZm9udC1ib2xkIGNhcGl0YWxpemUgdGV4dC14bCBsZWFkaW5nLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAge3Bva2Vtb25kYXRhLm5hbWV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgQWN0dWFsQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=