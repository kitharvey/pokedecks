webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnVuY3Rpb25zL0dsb2JhbEZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6WyJleHRyYWN0RXZvbHV0aW9uQ2hhaW4iLCJyZXNwb25zZSIsImV2b0NoYWluIiwiZXZvRGF0YSIsImNoYWluIiwicHVzaCIsInNwZWNpZXMiLCJuYW1lIiwidXJsIiwiaGFzT3duUHJvcGVydHkiLCJnZXRJbWFnZVNvdXJjZUZyb21VUkwiLCJpZCIsImdldElEU3RyaW5nZnJvbVVSTCIsInRlbXBVUkwiLCJzcGxpdCIsImxlbmd0aCIsImdldEltYWdlU291cmNlZnJvbUlEIiwiZ2V0SURTdHJpbmdmcm9tSUQiLCJnZXRGbGF2b3JTcGVlY2giLCJwb2tlbW9uU3BlY2llc0RhdGEiLCJwb2tlbW9uRGF0YSIsImVuTGFuZyIsImZsYXZvcl90ZXh0X2VudHJpZXMiLCJmaWx0ZXIiLCJlbnRyeSIsImxhbmd1YWdlIiwidHlwZXMiLCJtYXAiLCJ0eXBlIiwiam9pbiIsImxlZ2VuZCIsImlzX2xlZ2VuZGFyeSIsIm15dGhpYyIsImlzX215dGhpY2FsIiwidGV4dCIsImZsYXZvcl90ZXh0IiwicmVwbGFjZSIsInNodWZmbGUiLCJhcnJheSIsIm0iLCJ0IiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxxQkFBcUIsR0FBSUMsUUFBRCxJQUFpRDtBQUNwRixNQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxNQUFHRCxRQUFILEVBQWE7QUFDWCxRQUFJRSxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csS0FBdkI7O0FBRUEsT0FBRztBQUNIRixjQUFRLENBQUNHLElBQVQsQ0FBYztBQUNWLGdCQUFRRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLElBRGQ7QUFFVixlQUFPSixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JFO0FBRmIsT0FBZDtBQUlBTCxh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QUNHLENBQUQsQ0FBTCxHQUFXRCxDQUFYO0FBQ0Q7O0FBRUQsU0FBT0YsS0FBUDtBQUNELENBWEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTNhM2FkNzZlNWM2MDc0ZTZkOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFBva2Vtb25EYXRhSW50ZXJmYWNlLCBHZXRQb2tlbW9uRXZvbHV0aW9uQ2hhaW5JbnRlcmZhY2UsIEdldFBva2Vtb25TcGVjaWVzRGF0YUludGVyZmFjZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzUHJvcHMvSW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4dHJhY3RFdm9sdXRpb25DaGFpbiA9IChyZXNwb25zZTogR2V0UG9rZW1vbkV2b2x1dGlvbkNoYWluSW50ZXJmYWNlKSA9PiB7XHJcbiAgbGV0IGV2b0NoYWluID0gW107XHJcbiAgaWYocmVzcG9uc2UpIHtcclxuICAgIGxldCBldm9EYXRhID0gcmVzcG9uc2UuY2hhaW47XHJcblxyXG4gICAgZG8ge1xyXG4gICAgZXZvQ2hhaW4ucHVzaCh7XHJcbiAgICAgICAgXCJuYW1lXCI6IGV2b0RhdGEuc3BlY2llcy5uYW1lLFxyXG4gICAgICAgIFwidXJsXCI6IGV2b0RhdGEuc3BlY2llcy51cmwsXHJcbiAgICB9KTtcclxuICAgIGV2b0RhdGEgPSBldm9EYXRhWydldm9sdmVzX3RvJ11bMF07XHJcbiAgICB9IHdoaWxlIChldm9EYXRhICYmIGV2b0RhdGEuaGFzT3duUHJvcGVydHkoJ2V2b2x2ZXNfdG8nKSk7XHJcbiAgfVxyXG5cclxuICAgIHJldHVybiBldm9DaGFpblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbWFnZVNvdXJjZUZyb21VUkwgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0h5YnJpZFNoaXZhbS9Qb2tlbW9uL21hc3Rlci9hc3NldHMvaW1hZ2VzL1wiICsgZ2V0SURTdHJpbmdmcm9tVVJMKGlkKSArIFwiLnBuZ1wiXHJcbiAgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldElEU3RyaW5nZnJvbVVSTCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdGVtcFVSTCA9IHVybC5zcGxpdChcIi9cIilcclxuICAgIGNvbnN0IGlkID0gK3RlbXBVUkxbdGVtcFVSTC5sZW5ndGggLSAyXVxyXG4gICAgaWYoaWQgPj0gMTAgJiYgaWQgPCAxMDApIHJldHVybiAnMCcgKyBpZFxyXG4gICAgaWYoaWQgPj0gMTAwICkgcmV0dXJuICcnICsgaWRcclxuICAgIGVsc2UgcmV0dXJuICcwMCcgKyBpZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2VTb3VyY2Vmcm9tSUQgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0h5YnJpZFNoaXZhbS9Qb2tlbW9uL21hc3Rlci9hc3NldHMvaW1hZ2VzL1wiICsgZ2V0SURTdHJpbmdmcm9tSUQoaWQpICsgXCIucG5nXCJcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBjb25zdCBnZXRJRFN0cmluZ2Zyb21JRCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgaWYoaWQgPj0gMTAgJiYgaWQgPCAxMDApIHJldHVybiAnMCcgKyBpZFxyXG4gIGlmKGlkID49IDEwMCApIHJldHVybiAnJyArIGlkXHJcbiAgZWxzZSByZXR1cm4gJzAwJyArIGlkXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGbGF2b3JTcGVlY2ggPSAocG9rZW1vblNwZWNpZXNEYXRhOiBHZXRQb2tlbW9uU3BlY2llc0RhdGFJbnRlcmZhY2UsIHBva2Vtb25EYXRhOiBHZXRQb2tlbW9uRGF0YUludGVyZmFjZSkgPT4ge1xyXG4gICAgY29uc3QgZW5MYW5nID0gcG9rZW1vblNwZWNpZXNEYXRhLmZsYXZvcl90ZXh0X2VudHJpZXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkubGFuZ3VhZ2UubmFtZSA9PT0gXCJlblwiKVswXVxyXG4gICAgY29uc3QgdHlwZXMgPSBwb2tlbW9uRGF0YS50eXBlcy5tYXAodHlwZSA9PiB0eXBlLnR5cGUubmFtZSkuam9pbihcIiBhbmQgXCIpXHJcbiAgICBjb25zdCBsZWdlbmQgPSBwb2tlbW9uU3BlY2llc0RhdGEuaXNfbGVnZW5kYXJ5ID8gXCIgbGVnZW5kYXJ5LCBcIiA6IFwiXCJcclxuICAgIGNvbnN0IG15dGhpYyA9IHBva2Vtb25TcGVjaWVzRGF0YS5pc19teXRoaWNhbCA/IFwiIG15dGhpY2FsLCBcIiA6IFwiXCJcclxuICAgIGNvbnN0IHRleHQgPSBwb2tlbW9uRGF0YS5uYW1lICsgXCIsIFwiICsgbGVnZW5kICsgbXl0aGljICsgdHlwZXMgKyBcIiB0eXBlIHBva2Vtb24uIFwiICsgZW5MYW5nLmZsYXZvcl90ZXh0LnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKVxyXG4gICAgcmV0dXJuIHRleHRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNodWZmbGUgPSAoYXJyYXk6IFtdKSA9PiB7XHJcbiAgICBsZXQgbSA9IGFycmF5Lmxlbmd0aCwgdCwgaTtcclxuICBcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBhcnJheTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==