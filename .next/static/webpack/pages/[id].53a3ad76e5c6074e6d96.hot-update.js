webpackHotUpdate_N_E("pages/[id]",{

/***/ "./functions/GlobalFunctions.ts":
/*!**************************************!*\
  !*** ./functions/GlobalFunctions.ts ***!
  \**************************************/
/*! exports provided: extractEvolutionChain, getImageSourceFromURL, getIDStringfromURL, getImageSourcefromID, getIDStringfromID, getFlavorSpeech, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractEvolutionChain", function() { return extractEvolutionChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSourceFromURL", function() { return getImageSourceFromURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIDStringfromURL", function() { return getIDStringfromURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSourcefromID", function() { return getImageSourcefromID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIDStringfromID", function() { return getIDStringfromID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlavorSpeech", function() { return getFlavorSpeech; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
const extractEvolutionChain = response => {
  let evoChain = [];

  if (response) {
    let evoData = response.chain;

    do {
      evoChain.push({
        "name": evoData.species.name,
        "url": evoData.species.url
      });
      evoData = evoData['evolves_to'][0];
    } while (evoData && evoData.hasOwnProperty('evolves_to'));
  }

  return evoChain;
};
const getImageSourceFromURL = id => {
  return "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + getIDStringfromURL(id) + ".png";
};
const getIDStringfromURL = url => {
  const tempURL = url.split("/");
  const id = +tempURL[tempURL.length - 2];
  if (id >= 10 && id < 100) return '0' + id;
  if (id >= 100) return '' + id;else return '00' + id;
};
const getImageSourcefromID = id => {
  return "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + getIDStringfromID(id) + ".png";
};
const getIDStringfromID = id => {
  if (id >= 10 && id < 100) return '0' + id;
  if (id >= 100) return '' + id;else return '00' + id;
};
const getFlavorSpeech = (pokemonSpeciesData, pokemonData) => {
  const enLang = pokemonSpeciesData.flavor_text_entries.filter(entry => entry.language.name === "en")[0];
  const types = pokemonData.types.map(type => type.type.name).join(" and ");
  const legend = pokemonSpeciesData.is_legendary ? " legendary, " : "";
  const mythic = pokemonSpeciesData.is_mythical ? " mythical, " : "";
  const text = pokemonData.name + ", " + legend + mythic + types + " type pokemon. " + enLang.flavor_text.replace(/\r?\n|\r/g, " ");
  return text;
};
const shuffle = array => {
  let m = array.length,
      t,
      i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnVuY3Rpb25zL0dsb2JhbEZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6WyJleHRyYWN0RXZvbHV0aW9uQ2hhaW4iLCJyZXNwb25zZSIsImV2b0NoYWluIiwiZXZvRGF0YSIsImNoYWluIiwicHVzaCIsInNwZWNpZXMiLCJuYW1lIiwidXJsIiwiaGFzT3duUHJvcGVydHkiLCJnZXRJbWFnZVNvdXJjZUZyb21VUkwiLCJpZCIsImdldElEU3RyaW5nZnJvbVVSTCIsInRlbXBVUkwiLCJzcGxpdCIsImxlbmd0aCIsImdldEltYWdlU291cmNlZnJvbUlEIiwiZ2V0SURTdHJpbmdmcm9tSUQiLCJnZXRGbGF2b3JTcGVlY2giLCJwb2tlbW9uU3BlY2llc0RhdGEiLCJwb2tlbW9uRGF0YSIsImVuTGFuZyIsImZsYXZvcl90ZXh0X2VudHJpZXMiLCJmaWx0ZXIiLCJlbnRyeSIsImxhbmd1YWdlIiwidHlwZXMiLCJtYXAiLCJ0eXBlIiwiam9pbiIsImxlZ2VuZCIsImlzX2xlZ2VuZGFyeSIsIm15dGhpYyIsImlzX215dGhpY2FsIiwidGV4dCIsImZsYXZvcl90ZXh0IiwicmVwbGFjZSIsInNodWZmbGUiLCJhcnJheSIsIm0iLCJ0IiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxxQkFBcUIsR0FBSUMsUUFBRCxJQUFpRDtBQUNwRixNQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxNQUFHRCxRQUFILEVBQWE7QUFDWCxRQUFJRSxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csS0FBdkI7O0FBRUEsT0FBRztBQUNIRixjQUFRLENBQUNHLElBQVQsQ0FBYztBQUNWLGdCQUFRRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLElBRGQ7QUFFVixlQUFPSixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JFO0FBRmIsT0FBZDtBQUlBTCxh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QUNHLENBQUQsQ0FBTCxHQUFXRCxDQUFYO0FBQ0Q7O0FBRUQsU0FBT0YsS0FBUDtBQUNELENBWEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS41M2EzYWQ3NmU1YzYwNzRlNmQ5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0UG9rZW1vbkRhdGFJbnRlcmZhY2UsIEdldFBva2Vtb25Fdm9sdXRpb25DaGFpbkludGVyZmFjZSwgR2V0UG9rZW1vblNwZWNpZXNEYXRhSW50ZXJmYWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXNQcm9wcy9JbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdEV2b2x1dGlvbkNoYWluID0gKHJlc3BvbnNlOiBHZXRQb2tlbW9uRXZvbHV0aW9uQ2hhaW5JbnRlcmZhY2UpID0+IHtcclxuICBsZXQgZXZvQ2hhaW4gPSBbXTtcclxuICBpZihyZXNwb25zZSkge1xyXG4gICAgbGV0IGV2b0RhdGEgPSByZXNwb25zZS5jaGFpbjtcclxuXHJcbiAgICBkbyB7XHJcbiAgICBldm9DaGFpbi5wdXNoKHtcclxuICAgICAgICBcIm5hbWVcIjogZXZvRGF0YS5zcGVjaWVzLm5hbWUsXHJcbiAgICAgICAgXCJ1cmxcIjogZXZvRGF0YS5zcGVjaWVzLnVybCxcclxuICAgIH0pO1xyXG4gICAgZXZvRGF0YSA9IGV2b0RhdGFbJ2V2b2x2ZXNfdG8nXVswXTtcclxuICAgIH0gd2hpbGUgKGV2b0RhdGEgJiYgZXZvRGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXZvbHZlc190bycpKTtcclxuICB9XHJcblxyXG4gICAgcmV0dXJuIGV2b0NoYWluXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEltYWdlU291cmNlRnJvbVVSTCA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vSHlicmlkU2hpdmFtL1Bva2Vtb24vbWFzdGVyL2Fzc2V0cy9pbWFnZXMvXCIgKyBnZXRJRFN0cmluZ2Zyb21VUkwoaWQpICsgXCIucG5nXCJcclxuICB9XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SURTdHJpbmdmcm9tVVJMID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wVVJMID0gdXJsLnNwbGl0KFwiL1wiKVxyXG4gICAgY29uc3QgaWQgPSArdGVtcFVSTFt0ZW1wVVJMLmxlbmd0aCAtIDJdXHJcbiAgICBpZihpZCA+PSAxMCAmJiBpZCA8IDEwMCkgcmV0dXJuICcwJyArIGlkXHJcbiAgICBpZihpZCA+PSAxMDAgKSByZXR1cm4gJycgKyBpZFxyXG4gICAgZWxzZSByZXR1cm4gJzAwJyArIGlkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbWFnZVNvdXJjZWZyb21JRCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vSHlicmlkU2hpdmFtL1Bva2Vtb24vbWFzdGVyL2Fzc2V0cy9pbWFnZXMvXCIgKyBnZXRJRFN0cmluZ2Zyb21JRChpZCkgKyBcIi5wbmdcIlxyXG4gIH1cclxuICBcclxuZXhwb3J0IGNvbnN0IGdldElEU3RyaW5nZnJvbUlEID0gKGlkOiBudW1iZXIpID0+IHtcclxuICBpZihpZCA+PSAxMCAmJiBpZCA8IDEwMCkgcmV0dXJuICcwJyArIGlkXHJcbiAgaWYoaWQgPj0gMTAwICkgcmV0dXJuICcnICsgaWRcclxuICBlbHNlIHJldHVybiAnMDAnICsgaWRcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZsYXZvclNwZWVjaCA9IChwb2tlbW9uU3BlY2llc0RhdGE6IEdldFBva2Vtb25TcGVjaWVzRGF0YUludGVyZmFjZSwgcG9rZW1vbkRhdGE6IEdldFBva2Vtb25EYXRhSW50ZXJmYWNlKSA9PiB7XHJcbiAgICBjb25zdCBlbkxhbmcgPSBwb2tlbW9uU3BlY2llc0RhdGEuZmxhdm9yX3RleHRfZW50cmllcy5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5sYW5ndWFnZS5uYW1lID09PSBcImVuXCIpWzBdXHJcbiAgICBjb25zdCB0eXBlcyA9IHBva2Vtb25EYXRhLnR5cGVzLm1hcCh0eXBlID0+IHR5cGUudHlwZS5uYW1lKS5qb2luKFwiIGFuZCBcIilcclxuICAgIGNvbnN0IGxlZ2VuZCA9IHBva2Vtb25TcGVjaWVzRGF0YS5pc19sZWdlbmRhcnkgPyBcIiBsZWdlbmRhcnksIFwiIDogXCJcIlxyXG4gICAgY29uc3QgbXl0aGljID0gcG9rZW1vblNwZWNpZXNEYXRhLmlzX215dGhpY2FsID8gXCIgbXl0aGljYWwsIFwiIDogXCJcIlxyXG4gICAgY29uc3QgdGV4dCA9IHBva2Vtb25EYXRhLm5hbWUgKyBcIiwgXCIgKyBsZWdlbmQgKyBteXRoaWMgKyB0eXBlcyArIFwiIHR5cGUgcG9rZW1vbi4gXCIgKyBlbkxhbmcuZmxhdm9yX3RleHQucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpXHJcbiAgICByZXR1cm4gdGV4dFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnJheTogW10pID0+IHtcclxuICAgIGxldCBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gIFxyXG4gICAgd2hpbGUgKG0pIHtcclxuICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0tLSk7XHJcbiAgICAgIHQgPSBhcnJheVttXTtcclxuICAgICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcclxuICAgICAgYXJyYXlbaV0gPSB0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9