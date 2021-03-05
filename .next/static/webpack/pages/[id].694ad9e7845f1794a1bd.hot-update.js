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
  console.log(response);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnVuY3Rpb25zL0dsb2JhbEZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6WyJleHRyYWN0RXZvbHV0aW9uQ2hhaW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJldm9DaGFpbiIsImV2b0RhdGEiLCJjaGFpbiIsInB1c2giLCJzcGVjaWVzIiwibmFtZSIsInVybCIsImhhc093blByb3BlcnR5IiwiZ2V0SW1hZ2VTb3VyY2VGcm9tVVJMIiwiaWQiLCJnZXRJRFN0cmluZ2Zyb21VUkwiLCJ0ZW1wVVJMIiwic3BsaXQiLCJsZW5ndGgiLCJnZXRJbWFnZVNvdXJjZWZyb21JRCIsImdldElEU3RyaW5nZnJvbUlEIiwiZ2V0Rmxhdm9yU3BlZWNoIiwicG9rZW1vblNwZWNpZXNEYXRhIiwicG9rZW1vbkRhdGEiLCJlbkxhbmciLCJmbGF2b3JfdGV4dF9lbnRyaWVzIiwiZmlsdGVyIiwiZW50cnkiLCJsYW5ndWFnZSIsInR5cGVzIiwibWFwIiwidHlwZSIsImpvaW4iLCJsZWdlbmQiLCJpc19sZWdlbmRhcnkiLCJteXRoaWMiLCJpc19teXRoaWNhbCIsInRleHQiLCJmbGF2b3JfdGV4dCIsInJlcGxhY2UiLCJzaHVmZmxlIiwiYXJyYXkiLCJtIiwidCIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEscUJBQXFCLEdBQUlDLFFBQUQsSUFBaUQ7QUFDcEZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0UsTUFBSUcsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ssS0FBdkI7O0FBRUEsS0FBRztBQUNIRixZQUFRLENBQUNHLElBQVQsQ0FBYztBQUNWLGNBQVFGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsSUFEZDtBQUVWLGFBQU9KLE9BQU8sQ0FBQ0csT0FB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RCxDQUFoQjtBQUNBSCxTQUFLLENBQUNHLENBQUQsQ0FBTCxHQUFXRCxDQUFYO0FBQ0Q7O0FBRUQsU0FBT0YsS0FBUDtBQUNELENBWEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS42OTRhZDllNzg0NWYxNzk0YTFiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0UG9rZW1vbkRhdGFJbnRlcmZhY2UsIEdldFBva2Vtb25Fdm9sdXRpb25DaGFpbkludGVyZmFjZSwgR2V0UG9rZW1vblNwZWNpZXNEYXRhSW50ZXJmYWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXNQcm9wcy9JbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdEV2b2x1dGlvbkNoYWluID0gKHJlc3BvbnNlOiBHZXRQb2tlbW9uRXZvbHV0aW9uQ2hhaW5JbnRlcmZhY2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIGxldCBldm9DaGFpbiA9IFtdO1xyXG4gICAgbGV0IGV2b0RhdGEgPSByZXNwb25zZS5jaGFpbjtcclxuXHJcbiAgICBkbyB7XHJcbiAgICBldm9DaGFpbi5wdXNoKHtcclxuICAgICAgICBcIm5hbWVcIjogZXZvRGF0YS5zcGVjaWVzLm5hbWUsXHJcbiAgICAgICAgXCJ1cmxcIjogZXZvRGF0YS5zcGVjaWVzLnVybCxcclxuICAgIH0pO1xyXG4gICAgZXZvRGF0YSA9IGV2b0RhdGFbJ2V2b2x2ZXNfdG8nXVswXTtcclxuICAgIH0gd2hpbGUgKGV2b0RhdGEgJiYgZXZvRGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXZvbHZlc190bycpKTtcclxuXHJcbiAgICByZXR1cm4gZXZvQ2hhaW5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2VTb3VyY2VGcm9tVVJMID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9IeWJyaWRTaGl2YW0vUG9rZW1vbi9tYXN0ZXIvYXNzZXRzL2ltYWdlcy9cIiArIGdldElEU3RyaW5nZnJvbVVSTChpZCkgKyBcIi5wbmdcIlxyXG4gIH1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJRFN0cmluZ2Zyb21VUkwgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHRlbXBVUkwgPSB1cmwuc3BsaXQoXCIvXCIpXHJcbiAgICBjb25zdCBpZCA9ICt0ZW1wVVJMW3RlbXBVUkwubGVuZ3RoIC0gMl1cclxuICAgIGlmKGlkID49IDEwICYmIGlkIDwgMTAwKSByZXR1cm4gJzAnICsgaWRcclxuICAgIGlmKGlkID49IDEwMCApIHJldHVybiAnJyArIGlkXHJcbiAgICBlbHNlIHJldHVybiAnMDAnICsgaWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEltYWdlU291cmNlZnJvbUlEID0gKGlkOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9IeWJyaWRTaGl2YW0vUG9rZW1vbi9tYXN0ZXIvYXNzZXRzL2ltYWdlcy9cIiArIGdldElEU3RyaW5nZnJvbUlEKGlkKSArIFwiLnBuZ1wiXHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgY29uc3QgZ2V0SURTdHJpbmdmcm9tSUQgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gIGlmKGlkID49IDEwICYmIGlkIDwgMTAwKSByZXR1cm4gJzAnICsgaWRcclxuICBpZihpZCA+PSAxMDAgKSByZXR1cm4gJycgKyBpZFxyXG4gIGVsc2UgcmV0dXJuICcwMCcgKyBpZFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rmxhdm9yU3BlZWNoID0gKHBva2Vtb25TcGVjaWVzRGF0YTogR2V0UG9rZW1vblNwZWNpZXNEYXRhSW50ZXJmYWNlLCBwb2tlbW9uRGF0YTogR2V0UG9rZW1vbkRhdGFJbnRlcmZhY2UpID0+IHtcclxuICAgIGNvbnN0IGVuTGFuZyA9IHBva2Vtb25TcGVjaWVzRGF0YS5mbGF2b3JfdGV4dF9lbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IGVudHJ5Lmxhbmd1YWdlLm5hbWUgPT09IFwiZW5cIilbMF1cclxuICAgIGNvbnN0IHR5cGVzID0gcG9rZW1vbkRhdGEudHlwZXMubWFwKHR5cGUgPT4gdHlwZS50eXBlLm5hbWUpLmpvaW4oXCIgYW5kIFwiKVxyXG4gICAgY29uc3QgbGVnZW5kID0gcG9rZW1vblNwZWNpZXNEYXRhLmlzX2xlZ2VuZGFyeSA/IFwiIGxlZ2VuZGFyeSwgXCIgOiBcIlwiXHJcbiAgICBjb25zdCBteXRoaWMgPSBwb2tlbW9uU3BlY2llc0RhdGEuaXNfbXl0aGljYWwgPyBcIiBteXRoaWNhbCwgXCIgOiBcIlwiXHJcbiAgICBjb25zdCB0ZXh0ID0gcG9rZW1vbkRhdGEubmFtZSArIFwiLCBcIiArIGxlZ2VuZCArIG15dGhpYyArIHR5cGVzICsgXCIgdHlwZSBwb2tlbW9uLiBcIiArIGVuTGFuZy5mbGF2b3JfdGV4dC5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIilcclxuICAgIHJldHVybiB0ZXh0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaHVmZmxlID0gKGFycmF5OiBbXSkgPT4ge1xyXG4gICAgbGV0IG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XHJcbiAgXHJcbiAgICB3aGlsZSAobSkge1xyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgdCA9IGFycmF5W21dO1xyXG4gICAgICBhcnJheVttXSA9IGFycmF5W2ldO1xyXG4gICAgICBhcnJheVtpXSA9IHQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=