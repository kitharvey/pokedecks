webpackHotUpdate_N_E("pages/[id]",{

/***/ "./pages/[id].tsx":
/*!************************!*\
  !*** ./pages/[id].tsx ***!
  \************************/
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
var _jsxFileName = "C:\\Users\\HRV\\Desktop\\Programmes\\REACT\\poke-decks\\pages\\[id].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PokemonID = ({
  pokemonData,
  pokemonSpeciesData
}) => {
  _s();

  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("div", {
    className: "w-full h-max min-h-9/10-screen relative z-100 flex flex-col items-center justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-8 w-8 ml-auto mr-4 my-4 lg:mr-24 cursor-pointer transition duration-100 ease-in-out hover:opacity-50",
    onClick: () => router.push('/'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("svg", {
    viewBox: "0 0 40 40",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("path", {
    stroke: "#000000",
    strokeWidth: 4,
    d: "M 5,5 L 35,35 M 35,5 L 5,35",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "w-full h-max min-h-full py-4 px-4 lg:px-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(_components_modal_components_ModalCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    speciesdata: pokemonSpeciesData,
    pokemondata: pokemonData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvLnRzeCJdLCJuYW1lcyI6WyJQb2tlbW9uSUQiLCJwb2tlbW9uRGF0YSIsInBva2Vtb25TcGVjaWVzRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQXNCQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFDQyxhQUFEO0FBQWVDO0FBQWYsQ0FBRCxLQUE2RjtBQUFBOztBQUMvRyxRQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVBQXhCO0FBQ0ksU0FDSTtBQUFLLGFBQVMsRUFBQyx5RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBSyxhQUFTLEVBQUMsd0dBQWY7QUFBd0gsV0FBTyxFQUFFLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLEdBQVosQ0FBdkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssV0FBTyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sVUFBTSxFQUFDLFNBQWI7QUFBdUIsZUFBVyxFQUFFLENBQXBDO0FBQXVDLEtBQUMsRUFBQyw2QkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FEUixFQU1RO0FBQUssYUFBUyxFQUFDLDRDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhFQUFEO0FBQVcsZUFBVyxFQUFFSCxrQkFBeEI7QUFBNEMsZUFBVyxFQUFFRCxXQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FOUixDQURKO0FBWUgsQ0FkRDs7R0FBTUQsUztVQUNTSSxpRTs7O0tBRFRKLFM7O0FBZ0JTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLmE2ZDdiZDUzYThlZjI1MmI5ZjQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtmZXRjaExpc3QsIGZldGNoUG9rZW1vbkRhdGEsIGZldGNoUG9rZW1vblNwZWNpZXNEYXRhfSBmcm9tICcuLi9mZXRjaC9GZXRjaERhdGEnO1xyXG5pbXBvcnQgeyBnZXRJRFN0cmluZ2Zyb21VUkwgfSBmcm9tICcuLi9mdW5jdGlvbnMvR2xvYmFsRnVuY3Rpb25zJztcclxuaW1wb3J0IE1vZGFsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsLWNvbXBvbmVudHMvTW9kYWxDYXJkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBmZXRjaExpc3QoJ3Bva2Vtb24nKVxyXG4gIFxyXG4gICAgY29uc3QgcGF0aHMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBpZDogZ2V0SURTdHJpbmdmcm9tVVJMKGl0ZW0udXJsKSB9LFxyXG4gICAgfSkpXHJcbiAgXHJcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuXHJcbiAgICBjb25zdCBwb2tlbW9uRGF0YSA9IGF3YWl0IGZldGNoUG9rZW1vbkRhdGEocGFyYW1zLmlkKVxyXG4gICAgY29uc3QgcG9rZW1vblNwZWNpZXNEYXRhID0gYXdhaXQgZmV0Y2hQb2tlbW9uU3BlY2llc0RhdGEocGFyYW1zLmlkKVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBva2Vtb25EYXRhLCAgcG9rZW1vblNwZWNpZXNEYXRhfSB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBQb2tlbW9uSUQgPSAoe3Bva2Vtb25EYXRhLCAgcG9rZW1vblNwZWNpZXNEYXRhfTogIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSA9PiB7XHJcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtbWF4IG1pbi1oLTkvMTAtc2NyZWVuIHJlbGF0aXZlIHotMTAwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOCB3LTggbWwtYXV0byBtci00IG15LTQgbGc6bXItMjQgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgZWFzZS1pbi1vdXQgaG92ZXI6b3BhY2l0eS01MFwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZVdpZHRoPXs0fSBkPVwiTSA1LDUgTCAzNSwzNSBNIDM1LDUgTCA1LDM1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1tYXggbWluLWgtZnVsbCBweS00IHB4LTQgbGc6cHgtMjRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2FyZCBzcGVjaWVzZGF0YT17cG9rZW1vblNwZWNpZXNEYXRhfSBwb2tlbW9uZGF0YT17cG9rZW1vbkRhdGF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25JRCJdLCJzb3VyY2VSb290IjoiIn0=