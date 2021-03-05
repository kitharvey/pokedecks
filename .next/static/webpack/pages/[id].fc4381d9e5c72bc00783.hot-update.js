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
  let evoData = response.chain;

  do {
    evoChain.push({
      "name": evoData.species.name,
      "url": evoData.species.url
    });
    evoData = evoData['evolves_to'][0];
  } while (evoData && evoData.hasOwnProperty('evolves_to'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnVuY3Rpb25zL0dsb2JhbEZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6WyJleHRyYWN0RXZvbHV0aW9uQ2hhaW4iLCJyZXNwb25zZSIsImV2b0NoYWluIiwiZXZvRGF0YSIsImNoYWluIiwicHVzaCIsInNwZWNpZXMiLCJuYW1lIiwidXJsIiwiaGFzT3duUHJvcGVydHkiLCJnZXRJbWFnZVNvdXJjZUZyb21VUkwiLCJpZCIsImdldElEU3RyaW5nZnJvbVVSTCIsInRlbXBVUkwiLCJzcGxpdCIsImxlbmd0aCIsImdldEltYWdlU291cmNlZnJvbUlEIiwiZ2V0SURTdHJpbmdmcm9tSUQiLCJnZXRGbGF2b3JTcGVlY2giLCJwb2tlbW9uU3BlY2llc0RhdGEiLCJwb2tlbW9uRGF0YSIsImVuTGFuZyIsImZsYXZvcl90ZXh0X2VudHJpZXMiLCJmaWx0ZXIiLCJlbnRyeSIsImxhbmd1YWdlIiwidHlwZXMiLCJtYXAiLCJ0eXBlIiwiam9pbiIsImxlZ2VuZCIsImlzX2xlZ2VuZGFyeSIsIm15dGhpYyIsImlzX215dGhpY2FsIiwidGV4dCIsImZsYXZvcl90ZXh0IiwicmVwbGFjZSIsInNodWZmbGUiLCJhcnJheSIsIm0iLCJ0IiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxxQkFBcUIsR0FBSUMsUUFBRCxJQUFpRDtBQUNsRixNQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUlDLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxLQUF2Qjs7QUFFQSxLQUFHO0FBQ0hGLFlBQVEsQ0FBQ0csSUFBVCxDQUFjO0FBQ1YsY0FBUUYsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxJQURkO0FBRVYsYUFBT0osT0FBTyxDQUFDRyxPQUFSLENBQWdCRTtBQUZiLEtBQWQ7QUFJQUwsV0FBTyxHQUFHQSxPQUFPLENBQUMsWUFB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RDs7QUFFRCxTQUFPRixLQUFQO0FBQ0QsQ0FYSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9baWRdLmZjNDM4MWQ5ZTVjNzJiYzAwNzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRQb2tlbW9uRGF0YUludGVyZmFjZSwgR2V0UG9rZW1vbkV2b2x1dGlvbkNoYWluSW50ZXJmYWNlLCBHZXRQb2tlbW9uU3BlY2llc0RhdGFJbnRlcmZhY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlc1Byb3BzL0ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBleHRyYWN0RXZvbHV0aW9uQ2hhaW4gPSAocmVzcG9uc2U6IEdldFBva2Vtb25Fdm9sdXRpb25DaGFpbkludGVyZmFjZSkgPT4ge1xyXG4gICAgbGV0IGV2b0NoYWluID0gW107XHJcbiAgICBsZXQgZXZvRGF0YSA9IHJlc3BvbnNlLmNoYWluO1xyXG5cclxuICAgIGRvIHtcclxuICAgIGV2b0NoYWluLnB1c2goe1xyXG4gICAgICAgIFwibmFtZVwiOiBldm9EYXRhLnNwZWNpZXMubmFtZSxcclxuICAgICAgICBcInVybFwiOiBldm9EYXRhLnNwZWNpZXMudXJsLFxyXG4gICAgfSk7XHJcbiAgICBldm9EYXRhID0gZXZvRGF0YVsnZXZvbHZlc190byddWzBdO1xyXG4gICAgfSB3aGlsZSAoZXZvRGF0YSAmJiBldm9EYXRhLmhhc093blByb3BlcnR5KCdldm9sdmVzX3RvJykpO1xyXG5cclxuICAgIHJldHVybiBldm9DaGFpblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbWFnZVNvdXJjZUZyb21VUkwgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0h5YnJpZFNoaXZhbS9Qb2tlbW9uL21hc3Rlci9hc3NldHMvaW1hZ2VzL1wiICsgZ2V0SURTdHJpbmdmcm9tVVJMKGlkKSArIFwiLnBuZ1wiXHJcbiAgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldElEU3RyaW5nZnJvbVVSTCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdGVtcFVSTCA9IHVybC5zcGxpdChcIi9cIilcclxuICAgIGNvbnN0IGlkID0gK3RlbXBVUkxbdGVtcFVSTC5sZW5ndGggLSAyXVxyXG4gICAgaWYoaWQgPj0gMTAgJiYgaWQgPCAxMDApIHJldHVybiAnMCcgKyBpZFxyXG4gICAgaWYoaWQgPj0gMTAwICkgcmV0dXJuICcnICsgaWRcclxuICAgIGVsc2UgcmV0dXJuICcwMCcgKyBpZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2VTb3VyY2Vmcm9tSUQgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0h5YnJpZFNoaXZhbS9Qb2tlbW9uL21hc3Rlci9hc3NldHMvaW1hZ2VzL1wiICsgZ2V0SURTdHJpbmdmcm9tSUQoaWQpICsgXCIucG5nXCJcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBjb25zdCBnZXRJRFN0cmluZ2Zyb21JRCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgaWYoaWQgPj0gMTAgJiYgaWQgPCAxMDApIHJldHVybiAnMCcgKyBpZFxyXG4gIGlmKGlkID49IDEwMCApIHJldHVybiAnJyArIGlkXHJcbiAgZWxzZSByZXR1cm4gJzAwJyArIGlkXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGbGF2b3JTcGVlY2ggPSAocG9rZW1vblNwZWNpZXNEYXRhOiBHZXRQb2tlbW9uU3BlY2llc0RhdGFJbnRlcmZhY2UsIHBva2Vtb25EYXRhOiBHZXRQb2tlbW9uRGF0YUludGVyZmFjZSkgPT4ge1xyXG4gICAgY29uc3QgZW5MYW5nID0gcG9rZW1vblNwZWNpZXNEYXRhLmZsYXZvcl90ZXh0X2VudHJpZXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkubGFuZ3VhZ2UubmFtZSA9PT0gXCJlblwiKVswXVxyXG4gICAgY29uc3QgdHlwZXMgPSBwb2tlbW9uRGF0YS50eXBlcy5tYXAodHlwZSA9PiB0eXBlLnR5cGUubmFtZSkuam9pbihcIiBhbmQgXCIpXHJcbiAgICBjb25zdCBsZWdlbmQgPSBwb2tlbW9uU3BlY2llc0RhdGEuaXNfbGVnZW5kYXJ5ID8gXCIgbGVnZW5kYXJ5LCBcIiA6IFwiXCJcclxuICAgIGNvbnN0IG15dGhpYyA9IHBva2Vtb25TcGVjaWVzRGF0YS5pc19teXRoaWNhbCA/IFwiIG15dGhpY2FsLCBcIiA6IFwiXCJcclxuICAgIGNvbnN0IHRleHQgPSBwb2tlbW9uRGF0YS5uYW1lICsgXCIsIFwiICsgbGVnZW5kICsgbXl0aGljICsgdHlwZXMgKyBcIiB0eXBlIHBva2Vtb24uIFwiICsgZW5MYW5nLmZsYXZvcl90ZXh0LnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKVxyXG4gICAgcmV0dXJuIHRleHRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNodWZmbGUgPSAoYXJyYXk6IFtdKSA9PiB7XHJcbiAgICBsZXQgbSA9IGFycmF5Lmxlbmd0aCwgdCwgaTtcclxuICBcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBhcnJheTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==