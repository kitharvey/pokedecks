webpackHotUpdate_N_E("pages/[pokemonID]",{

/***/ "./pages/[pokemonID].tsx":
/*!*******************************!*\
  !*** ./pages/[pokemonID].tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal_components_ModalCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/modal-components/ModalCard */ "./components/modal-components/ModalCard.tsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HRV\\Desktop\\Programmes\\REACT\\poke-decks\\pages\\[pokemonID].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PokemonID = ({
  pokemonData,
  pokemonSpeciesData
}) => {
  _s();

  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log(router);
  return __jsx("div", {
    className: "w-full h-max min-h-9/10-screen relative z-100 flex flex-col items-center justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-8 w-8 ml-auto mr-4 my-4 lg:mr-24 cursor-pointer transition duration-100 ease-in-out hover:opacity-50",
    onClick: () => router.push('/'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("svg", {
    viewBox: "0 0 40 40",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("path", {
    stroke: "#000000",
    strokeWidth: 4,
    d: "M 5,5 L 35,35 M 35,5 L 5,35",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "w-full h-max min-h-full py-4 px-4 lg:px-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_components_modal_components_ModalCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    speciesdata: pokemonSpeciesData,
    pokemondata: pokemonData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  })));
};

_s(PokemonID, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = PokemonID;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (PokemonID);

var _c;

$RefreshReg$(_c, "PokemonID");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Bva2Vtb25JRF0udHN4Il0sIm5hbWVzIjpbIlBva2Vtb25JRCIsInBva2Vtb25EYXRhIiwicG9rZW1vblNwZWNpZXNEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQXNCQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFDQyxhQUFEO0FBQWVDO0FBQWYsQ0FBRCxLQUE2RjtBQUFBOztBQUMvRyxRQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0ksU0FDSTtBQUFLLGFBQVMsRUFBQyx5RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBSyxhQUFTLEVBQUMsd0dBQWY7QUFBd0gsV0FBTyxFQUFFLE1BQU1BLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVosQ0FBdkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssV0FBTyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sVUFBTSxFQUFDLFNBQWI7QUFBdUIsZUFBVyxFQUFFLENBQXBDO0FBQXVDLEtBQUMsRUFBQyw2QkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FEUixFQU1RO0FBQUssYUFBUyxFQUFDLDRDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhFQUFEO0FBQVcsZUFBVyxFQUFFTCxrQkFBeEI7QUFBNEMsZUFBVyxFQUFFRCxXQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FOUixDQURKO0FBWUgsQ0FmRDs7R0FBTUQsUztVQUNTSSxpRTs7O0tBRFRKLFM7O0FBaUJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bcG9rZW1vbklEXS44MDNhNzRhNzRmYzUyYTliY2U1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7ZmV0Y2hMaXN0LCBmZXRjaFBva2Vtb25EYXRhLCBmZXRjaFBva2Vtb25TcGVjaWVzRGF0YX0gZnJvbSAnLi4vZmV0Y2gvRmV0Y2hEYXRhJztcclxuaW1wb3J0IHsgZ2V0SURTdHJpbmdmcm9tVVJMIH0gZnJvbSAnLi4vZnVuY3Rpb25zL0dsb2JhbEZ1bmN0aW9ucyc7XHJcbmltcG9ydCBNb2RhbENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC1jb21wb25lbnRzL01vZGFsQ2FyZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgZmV0Y2hMaXN0KCdwb2tlbW9uJylcclxuICBcclxuICAgIGNvbnN0IHBhdGhzID0gaXRlbXMubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgcG9rZW1vbklEOiArZ2V0SURTdHJpbmdmcm9tVVJMKGl0ZW0udXJsKSB9LFxyXG4gICAgfSkpXHJcbiAgXHJcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuXHJcbiAgICBjb25zdCBwb2tlbW9uRGF0YSA9IGF3YWl0IGZldGNoUG9rZW1vbkRhdGEoJycrcGFyYW1zLnBva2Vtb25JRClcclxuICAgIGNvbnN0IHBva2Vtb25TcGVjaWVzRGF0YSA9IGF3YWl0IGZldGNoUG9rZW1vblNwZWNpZXNEYXRhKCcnK3BhcmFtcy5wb2tlbW9uSUQpXHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9rZW1vbkRhdGEsICBwb2tlbW9uU3BlY2llc0RhdGF9IH1cclxufVxyXG5cclxuXHJcbmNvbnN0IFBva2Vtb25JRCA9ICh7cG9rZW1vbkRhdGEsICBwb2tlbW9uU3BlY2llc0RhdGF9OiAgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pID0+IHtcclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuY29uc29sZS5sb2cocm91dGVyKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLW1heCBtaW4taC05LzEwLXNjcmVlbiByZWxhdGl2ZSB6LTEwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTggdy04IG1sLWF1dG8gbXItNCBteS00IGxnOm1yLTI0IGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGhvdmVyOm9wYWNpdHktNTBcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2VXaWR0aD17NH0gZD1cIk0gNSw1IEwgMzUsMzUgTSAzNSw1IEwgNSwzNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtbWF4IG1pbi1oLWZ1bGwgcHktNCBweC00IGxnOnB4LTI0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbENhcmQgc3BlY2llc2RhdGE9e3Bva2Vtb25TcGVjaWVzRGF0YX0gcG9rZW1vbmRhdGE9e3Bva2Vtb25EYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uSUQiXSwic291cmNlUm9vdCI6IiJ9