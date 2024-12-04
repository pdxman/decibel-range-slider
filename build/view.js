import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

window.addEventListener('load', () => {
  document.getElementById('myRange').value = 0;
  document.getElementById('first-sound').value = 'Threshold of human hearing';
});

// window.addEventListener('load', () => {
//     document.getElementById('myRange').value = 0;
//     document.getElementById('firstSound').textContent = 'Threshold of human hearing';
// });

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('create-block', {
  state: {
    get themeText() {
      return state.isDark ? state.darkText : state.lightText;
    }
    // get getContext() {
    // 	context.sounds = 'Threshold of human hearing';
    // 	context.decibelValue = 0 ; 
    // }
  },
  actions: {
    updateCheckbox() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.isChecked = !context.isChecked;
      console.log(context.isChecked);
    },
    toggleOpen() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.isOpen = !context.isOpen;
    },
    toggleTheme() {
      state.isDark = !state.isDark;
    },
    updateRange(event) {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.decibelValue = event.target.value;

      //animates indicator 
      const percentage = Math.min(Math.ceil(context.decibelValue / 20) * 15, 100);
      context.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      context.changed = !context.changed;
      //console.log('changed?', context.changed); 

      //updates sound with decibel increase 
      const sounds = context.sounds;
      const soundIndex = Math.floor(context.decibelValue / 10) % sounds.length; // Calculate sound index based on height

      context.sound = context.sound === '' ? '' : sounds[soundIndex];
    },
    updateTestNumber: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const randomNumber = getRandomNumber(1, 140);
      context.testNumber = randomNumber;
    },
    increaseCounter: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.counter++;
    },
    decreaseCounter: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.counter--;
    },
    updateColor: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const colors = [{
        max: 20,
        color: '#006400'
      }, {
        max: 40,
        color: '#3A5F0B'
      }, {
        max: 60,
        color: '#556B2F'
      }, {
        max: 80,
        color: '#B8860B'
      }, {
        max: 100,
        color: '#8B4513'
      }, {
        max: 120,
        color: '#A52A2A'
      }];
      for (const range of colors) {
        if (context.decibelValue <= range.max) {
          context.backgroundColor = range.color;
          break;
        }
      }
    }
  },
  callbacks: {
    logIsOpen: () => {
      const {
        isOpen
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      // Log the value of `isOpen` each time it changes.
      console.log(`Is open: ${isOpen}`);
    },
    logCounter: () => {
      const {
        counter
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      console.log('Counter is ' + counter + ' at ' + new Date());
    }
    // updateRange(event) {
    // 	const context = getContext(); 
    // 	context.decibelValue = event.target.value;  
    // 	console.log('range moving', context.decibelValue);

    // },
  }
});
})();


//# sourceMappingURL=view.js.map