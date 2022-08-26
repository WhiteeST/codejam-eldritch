/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_ancients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/ancients */ "./src/data/ancients.js");
/* harmony import */ var _assets_MythicCards_blue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/MythicCards/blue */ "./src/assets/MythicCards/blue/index.js");
/* harmony import */ var _assets_MythicCards_green__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/MythicCards/green */ "./src/assets/MythicCards/green/index.js");
/* harmony import */ var _assets_MythicCards_brown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/MythicCards/brown */ "./src/assets/MythicCards/brown/index.js");


// import helper from './helper/helper'





// function a() {
//   return helper(1, 2);
// }
// console.log(a())
const statusTracker = document.querySelector('.currentAncient');
const cardReserve = document.querySelectorAll('.status-tracker_item');
const difficultyButton = document.querySelectorAll('.difficulty__item');
const createDeckButton = document.querySelector('.create-deck');
const currentCard = document.querySelector('.current-card');
const completeDeck = document.querySelector('.complete-deck');
let ancientsArray;
let currentAncientId;
let currentAncient;
let difficultyMode;
let requiredAllStagesCards;
let playDeck;
let resultDeck = [];
let nextCard = 1;
let colorTracker = {};

const easyBlueCards = ['blue3', 'blue4', 'blue5', 'blue10'];
const normalBlueCards = ['blue7', 'blue9', 'blue11', 'blue12'];
const hardlBlueCards = ['blue1', 'blue2', 'blue6', 'blue8'];

const easyGreenCards = ['green1', 'green12', 'green16', 'green17', 'green18'];
const normalGreenCards = ['green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15'];
const hardlGreenCards = ['green2', 'green3', 'green4', 'green5', 'green6'];

const easyBrownCards = ['brown11', 'brown12', 'brown13', 'brown14', 'brown21'];
const normalBrownCards = ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20'];
const hardlBrownCards = ['brown6', 'brown7', 'brown8', 'brown9', 'brown10'];

const statusTrackerStageHandler = (stage) => {
  let index = 0;
  switch (stage) {
    case 'firstStage': index = 0; break;
    case 'secondStage': index = 3; break;
    case 'thirdStage': index = 6; break;
  }
  cardReserve[0 + index].textContent = (_data_ancients__WEBPACK_IMPORTED_MODULE_2__["default"][currentAncientId])[stage].greenCards;
  cardReserve[1 + index].textContent = (_data_ancients__WEBPACK_IMPORTED_MODULE_2__["default"][currentAncientId])[stage].brownCards;
  cardReserve[2 + index].textContent = (_data_ancients__WEBPACK_IMPORTED_MODULE_2__["default"][currentAncientId])[stage].blueCards;
}


const statusTrackerHandler = () => {
  statusTrackerStageHandler('firstStage');
  statusTrackerStageHandler('secondStage');
  statusTrackerStageHandler('thirdStage');
}

const createEasyTempColorDeck = (color) => {
  let tempDeck = [];
  const colorCounter = requiredAllStagesCards[color === 'green' ? 0 : color === 'brown' ? 1 : 2];
  let easyColorCard;
  let normalColorCard;
  let sourceCards;
  switch (color) {
    case 'green': easyColorCard = easyGreenCards.slice(0); normalColorCard = normalGreenCards.slice(0); sourceCards = Object.assign({}, _assets_MythicCards_green__WEBPACK_IMPORTED_MODULE_4__["default"]); break;
    case 'brown': easyColorCard = easyBrownCards.slice(0); normalColorCard = normalBrownCards.slice(0); sourceCards = Object.assign({}, _assets_MythicCards_brown__WEBPACK_IMPORTED_MODULE_5__["default"]); break;
    case 'blue': easyColorCard = easyBlueCards.slice(0); normalColorCard = normalBlueCards.slice(0); sourceCards = Object.assign({}, _assets_MythicCards_blue__WEBPACK_IMPORTED_MODULE_3__["default"]); break;
  }
  easyColorCard.forEach(card => {
    if (tempDeck.length < colorCounter)
      tempDeck.push(sourceCards[card])
  })
  if (tempDeck.length < colorCounter) {
    while (tempDeck.length < colorCounter) {
      const cardId = Math.floor(Math.random() * normalColorCard.length);
      tempDeck.push(sourceCards[normalColorCard[cardId]]);
      normalColorCard[cardId] = normalColorCard[normalColorCard.length - 1];
      normalColorCard.pop();
    }
  }
  return tempDeck;
}

const createSortedStageDeck = (stage, deckColor) => {
  let stageDeck = [];
  let stageCardCounter = 0;
  const arrayColor = deckColor === 'greenCards' ? 0 : deckColor === 'brownCards' ? 1 : 2;
  while (stageCardCounter < _data_ancients__WEBPACK_IMPORTED_MODULE_2__["default"][currentAncientId][stage][deckColor]) {
    const cardId = Math.floor(Math.random() * playDeck[arrayColor].length);
    stageDeck.push(playDeck[arrayColor][cardId]);
    playDeck[arrayColor][cardId] = playDeck[arrayColor][playDeck[arrayColor].length - 1];
    playDeck[arrayColor].pop();
    stageCardCounter++;
  }
  return stageDeck;
}

const extractFromArray = (array) => {
  let stringFromarray = '';
  if (array.isArray)
    extractFromArray(array);
  stringFromarray += [...array];
  return stringFromarray.split(',')
}

const createDeck = (difficultyMode) => {
  //узнаем кол-во необходимых карт для колоды
  resultDeck = [];
  requiredAllStagesCards = [
    parseInt(cardReserve[0].textContent) + parseInt(cardReserve[3].textContent) + parseInt(cardReserve[6].textContent), //зеленые
    parseInt(cardReserve[1].textContent) + parseInt(cardReserve[4].textContent) + parseInt(cardReserve[7].textContent), //коричневые
    parseInt(cardReserve[2].textContent) + parseInt(cardReserve[5].textContent) + parseInt(cardReserve[8].textContent)  //синие
  ];
  if (difficultyMode === 'Очень низкая') {
    //берем все легкие + обычные, если не хватает и кладем их в tempDeck
    playDeck = [(createEasyTempColorDeck('green')), createEasyTempColorDeck('brown'), createEasyTempColorDeck('blue')];

    playDeck.forEach((deck, index) => {
      deck.forEach(item => {
        colorTracker[item] = index === 0 ? 'green' : index === 1 ? 'brown' : 'blue';
      })
    })

    // let b = playDeck.map(element => {
    //   return element.slice(0);
    // });
    // console.log('playDeck', b)


    let stageOneDeck = [createSortedStageDeck('firstStage', 'greenCards'), createSortedStageDeck('firstStage', 'brownCards'), createSortedStageDeck('firstStage', 'blueCards')];
    let stageTwoDeck = [createSortedStageDeck('secondStage', 'greenCards'), createSortedStageDeck('secondStage', 'brownCards'), createSortedStageDeck('secondStage', 'blueCards')];
    let stageThreeDeck = [createSortedStageDeck('thirdStage', 'greenCards'), createSortedStageDeck('thirdStage', 'brownCards'), createSortedStageDeck('thirdStage', 'blueCards')];

    stageOneDeck = extractFromArray(stageOneDeck);
    stageTwoDeck = extractFromArray(stageTwoDeck);
    stageThreeDeck = extractFromArray(stageThreeDeck);

    const tempDeckArray = [stageOneDeck, stageTwoDeck, stageThreeDeck];


    // let a = tempDeckArray.map(element => {
    //   return element.slice(0);
    // });
    // console.log('tempDeckArray', a)

    tempDeckArray.forEach(deck => {
      while (deck.length) {
        const cardId = Math.floor(Math.random() * deck.length);
        if (deck[cardId] != "")
          resultDeck.push(deck[cardId]);
        deck[cardId] = deck[deck.length - 1];
        deck.pop();
      }
    })
  }
}

difficultyButton.forEach(difficulty => {
  difficulty.addEventListener('click', (event) => {
    difficultyButton.forEach(button => {
      button === event.target ? button.classList.add('picked') : button.classList.remove('picked');
    })
    difficultyMode = difficulty.textContent;
    // console.log(currentAncient);
    // console.log(difficultyMode);
  })
})


//Добавляем древних в header
_data_ancients__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(ancient => {
  const ancientCard = document.createElement('img');
  ancientCard.src = (`${ancient.cardFace}`);
  ancientCard.classList.add('ancient-card');
  ancientCard.tabIndex = '0'
  document.querySelector('header').append(ancientCard)
  ancientsArray = document.querySelectorAll('img');
})

ancientsArray.forEach((ancient, index) => {
  ancient.addEventListener('click', () => {
    ancientsArray.forEach(element => element.classList = 'ancient-card');
    ancient.classList.add('picked');
    currentAncient = _data_ancients__WEBPACK_IMPORTED_MODULE_2__["default"][index].name;
    currentAncientId = index;
    if (currentAncient) {
      statusTrackerHandler();
    }
  })
})

createDeckButton.addEventListener('click', () => {
  nextCard = 0;
  createDeckButton.classList.add('picked');
  currentCard.classList.add('invisible');
  completeDeck.classList.remove('invisible');
  if (currentAncient) {
    statusTrackerHandler();
    createDeck(difficultyMode);

  }
})

const changeTrackerStatus = (color) => {
  let index = 0;
  const currentColor = color === 'green' ? 0 : color === 'brown' ? 1 : 2;
  if (cardReserve[currentColor + index].textContent === '0')
    index = 3;
  if (cardReserve[currentColor + index].textContent === '0')
    index = 6;
  cardReserve[currentColor + index].textContent = parseInt(cardReserve[currentColor + index].textContent) - 1;
}

completeDeck.addEventListener('click', () => {
  if (nextCard === 0) {
    createDeckButton.classList.remove('picked');
    currentCard.classList.remove('invisible');
    currentCard.style.backgroundImage = `url('${resultDeck[nextCard]}')`;
    changeTrackerStatus(colorTracker[resultDeck[nextCard]]);
    nextCard++;
  }
})

currentCard.addEventListener('click', () => {
  if (nextCard < resultDeck.length) {
    currentCard.style.backgroundImage = `url('${resultDeck[nextCard]}')`;
    changeTrackerStatus(colorTracker[resultDeck[nextCard]]);
    nextCard++;
  }
  else {
    currentCard.style.backgroundImage = null;
    currentCard.classList.add('invisible')
  }
})

/***/ }),

/***/ "./src/assets/Ancients/Azathoth.png":
/*!******************************************!*\
  !*** ./src/assets/Ancients/Azathoth.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e76cc60e6f2b9bb167ce75f3457ed219.png");

/***/ }),

/***/ "./src/assets/Ancients/Cthulthu.png":
/*!******************************************!*\
  !*** ./src/assets/Ancients/Cthulthu.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e7bfd029744dc9f87c1ac5f42d90402a.png");

/***/ }),

/***/ "./src/assets/Ancients/IogSothoth.png":
/*!********************************************!*\
  !*** ./src/assets/Ancients/IogSothoth.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c5b7717bff973cda27bed23257e72234.png");

/***/ }),

/***/ "./src/assets/Ancients/ShubNiggurath.png":
/*!***********************************************!*\
  !*** ./src/assets/Ancients/ShubNiggurath.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "68c4272e00c9596e65b1806b18598a43.png");

/***/ }),

/***/ "./src/assets/Ancients/index.js":
/*!**************************************!*\
  !*** ./src/assets/Ancients/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Azathoth_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Azathoth.png */ "./src/assets/Ancients/Azathoth.png");
/* harmony import */ var _Cthulthu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cthulthu.png */ "./src/assets/Ancients/Cthulthu.png");
/* harmony import */ var _IogSothoth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IogSothoth.png */ "./src/assets/Ancients/IogSothoth.png");
/* harmony import */ var _ShubNiggurath_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShubNiggurath.png */ "./src/assets/Ancients/ShubNiggurath.png");





const ancients = {
  azathoth: _Azathoth_png__WEBPACK_IMPORTED_MODULE_0__["default"],
  cthulhu: _Cthulthu_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  iogSothoth: _IogSothoth_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  shubNiggurath: _ShubNiggurath_png__WEBPACK_IMPORTED_MODULE_3__["default"]
}

/* harmony default export */ __webpack_exports__["default"] = (ancients);

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue1.png":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/blue/blue1.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "09c8e5eb50dc7666f1aa3d2f16506c33.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue10.png":
/*!************************************************!*\
  !*** ./src/assets/MythicCards/blue/blue10.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c61c9f73492d8cd7027cb13e83bbed77.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue11.png":
/*!************************************************!*\
  !*** ./src/assets/MythicCards/blue/blue11.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f7e6552a92e4b878107acb7a0e7a243f.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue12.png":
/*!************************************************!*\
  !*** ./src/assets/MythicCards/blue/blue12.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "204f9160083e529ab7631a475c01ae66.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue2.png":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/blue/blue2.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3cc352cdc8fade5dad4c31c78992b842.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue3.png":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/blue/blue3.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fdd1d10ff513774eb8410be6598be83c.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue4.png":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/blue/blue4.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f09f0f715e525a0b50ecb0789aa2e10f.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue5.png":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/blue/blue5.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e3e8792622b0c75c78c1c0b757a041fa.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue6.png":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/blue/blue6.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cf323c98a3f54632a66cdb1c95d1a557.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue7.png":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/blue/blue7.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4cdb1bd641372e2d0f746bffeb81963c.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue8.png":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/blue/blue8.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "02a9eec68518951fc18e50edc571ad81.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/blue9.png":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/blue/blue9.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d3371911f8f0d84b558547a100f97e56.png");

/***/ }),

/***/ "./src/assets/MythicCards/blue/index.js":
/*!**********************************************!*\
  !*** ./src/assets/MythicCards/blue/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blue1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blue1.png */ "./src/assets/MythicCards/blue/blue1.png");
/* harmony import */ var _blue2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blue2.png */ "./src/assets/MythicCards/blue/blue2.png");
/* harmony import */ var _blue3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blue3.png */ "./src/assets/MythicCards/blue/blue3.png");
/* harmony import */ var _blue4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blue4.png */ "./src/assets/MythicCards/blue/blue4.png");
/* harmony import */ var _blue5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blue5.png */ "./src/assets/MythicCards/blue/blue5.png");
/* harmony import */ var _blue6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blue6.png */ "./src/assets/MythicCards/blue/blue6.png");
/* harmony import */ var _blue7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blue7.png */ "./src/assets/MythicCards/blue/blue7.png");
/* harmony import */ var _blue8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blue8.png */ "./src/assets/MythicCards/blue/blue8.png");
/* harmony import */ var _blue9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blue9.png */ "./src/assets/MythicCards/blue/blue9.png");
/* harmony import */ var _blue10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blue10.png */ "./src/assets/MythicCards/blue/blue10.png");
/* harmony import */ var _blue11_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blue11.png */ "./src/assets/MythicCards/blue/blue11.png");
/* harmony import */ var _blue12_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blue12.png */ "./src/assets/MythicCards/blue/blue12.png");













const blueCards = {
  blue1: _blue1_png__WEBPACK_IMPORTED_MODULE_0__["default"],
  blue2: _blue2_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  blue3: _blue3_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  blue4: _blue4_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  blue5: _blue5_png__WEBPACK_IMPORTED_MODULE_4__["default"],
  blue6: _blue6_png__WEBPACK_IMPORTED_MODULE_5__["default"],
  blue7: _blue7_png__WEBPACK_IMPORTED_MODULE_6__["default"],
  blue8: _blue8_png__WEBPACK_IMPORTED_MODULE_7__["default"],
  blue9: _blue9_png__WEBPACK_IMPORTED_MODULE_8__["default"],
  blue10: _blue10_png__WEBPACK_IMPORTED_MODULE_9__["default"],
  blue11: _blue11_png__WEBPACK_IMPORTED_MODULE_10__["default"],
  blue12: _blue12_png__WEBPACK_IMPORTED_MODULE_11__["default"],
}

/* harmony default export */ __webpack_exports__["default"] = (blueCards);

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown1.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown1.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ac85e7db9ab360fe235aa248837f0e5d.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown10.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown10.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "703068f44f9153534f9c7448bc94def8.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown11.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown11.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "157fd0a92444cc2a245f47e4739d7a56.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown12.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown12.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "920b1409d3f7d006e7647271e3a3dacb.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown13.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown13.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a8d77ff5b5eaa534b968f98886d1e371.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown14.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown14.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f5d21e1965d8ec808bc2dc916f2578e0.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown15.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown15.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "036f8f91eccd0e8f97080885372dcf2b.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown16.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown16.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1fd61bbd111986a0965ab7a3d9c38eb6.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown17.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown17.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6a53cc04a2d6cbb63677f2021ce0a51c.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown18.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown18.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c537bfb2cd284c9667ae6756b271b7ff.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown19.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown19.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "199841521c55940d0d03fcada9ad5194.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown2.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown2.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c44579505d0d3ccfd7c8f069a841f3f9.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown20.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown20.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1182a8f80bd2272b3d07c2b01857aa61.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown21.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown21.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3a8e72879e11c315c59d4cae69b4391b.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown3.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown3.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "caababcab21e08510c276249ef8e8818.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown4.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown4.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e387b64a537a0fb25c84a81018033d19.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown5.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown5.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "709f87f82c146ab3189a05a3fa458b53.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown6.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown6.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "23453f970c4a388f8b68b06f400a4ccf.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown7.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown7.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7da5050420b14d67a481e453d13e70fc.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown8.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown8.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2126fcd965be3b428dcace58e62a70e1.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/brown9.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/brown/brown9.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3d69a01cdd56175f304ecf5467e5dfc2.png");

/***/ }),

/***/ "./src/assets/MythicCards/brown/index.js":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/brown/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brown1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brown1.png */ "./src/assets/MythicCards/brown/brown1.png");
/* harmony import */ var _brown2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brown2.png */ "./src/assets/MythicCards/brown/brown2.png");
/* harmony import */ var _brown3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brown3.png */ "./src/assets/MythicCards/brown/brown3.png");
/* harmony import */ var _brown4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brown4.png */ "./src/assets/MythicCards/brown/brown4.png");
/* harmony import */ var _brown5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brown5.png */ "./src/assets/MythicCards/brown/brown5.png");
/* harmony import */ var _brown6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brown6.png */ "./src/assets/MythicCards/brown/brown6.png");
/* harmony import */ var _brown7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brown7.png */ "./src/assets/MythicCards/brown/brown7.png");
/* harmony import */ var _brown8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brown8.png */ "./src/assets/MythicCards/brown/brown8.png");
/* harmony import */ var _brown9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brown9.png */ "./src/assets/MythicCards/brown/brown9.png");
/* harmony import */ var _brown10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./brown10.png */ "./src/assets/MythicCards/brown/brown10.png");
/* harmony import */ var _brown11_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./brown11.png */ "./src/assets/MythicCards/brown/brown11.png");
/* harmony import */ var _brown12_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./brown12.png */ "./src/assets/MythicCards/brown/brown12.png");
/* harmony import */ var _brown13_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./brown13.png */ "./src/assets/MythicCards/brown/brown13.png");
/* harmony import */ var _brown14_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./brown14.png */ "./src/assets/MythicCards/brown/brown14.png");
/* harmony import */ var _brown15_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./brown15.png */ "./src/assets/MythicCards/brown/brown15.png");
/* harmony import */ var _brown16_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./brown16.png */ "./src/assets/MythicCards/brown/brown16.png");
/* harmony import */ var _brown17_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./brown17.png */ "./src/assets/MythicCards/brown/brown17.png");
/* harmony import */ var _brown18_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./brown18.png */ "./src/assets/MythicCards/brown/brown18.png");
/* harmony import */ var _brown19_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./brown19.png */ "./src/assets/MythicCards/brown/brown19.png");
/* harmony import */ var _brown20_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./brown20.png */ "./src/assets/MythicCards/brown/brown20.png");
/* harmony import */ var _brown21_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./brown21.png */ "./src/assets/MythicCards/brown/brown21.png");






















const brownCards = {
  brown1: _brown1_png__WEBPACK_IMPORTED_MODULE_0__["default"],
  brown2: _brown2_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  brown3: _brown3_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  brown4: _brown4_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  brown5: _brown5_png__WEBPACK_IMPORTED_MODULE_4__["default"],
  brown6: _brown6_png__WEBPACK_IMPORTED_MODULE_5__["default"],
  brown7: _brown7_png__WEBPACK_IMPORTED_MODULE_6__["default"],
  brown8: _brown8_png__WEBPACK_IMPORTED_MODULE_7__["default"],
  brown9: _brown9_png__WEBPACK_IMPORTED_MODULE_8__["default"],
  brown10: _brown10_png__WEBPACK_IMPORTED_MODULE_9__["default"],
  brown11: _brown11_png__WEBPACK_IMPORTED_MODULE_10__["default"],
  brown12: _brown12_png__WEBPACK_IMPORTED_MODULE_11__["default"],
  brown13: _brown13_png__WEBPACK_IMPORTED_MODULE_12__["default"],
  brown14: _brown14_png__WEBPACK_IMPORTED_MODULE_13__["default"],
  brown15: _brown15_png__WEBPACK_IMPORTED_MODULE_14__["default"],
  brown16: _brown16_png__WEBPACK_IMPORTED_MODULE_15__["default"],
  brown17: _brown17_png__WEBPACK_IMPORTED_MODULE_16__["default"],
  brown18: _brown18_png__WEBPACK_IMPORTED_MODULE_17__["default"],
  brown19: _brown19_png__WEBPACK_IMPORTED_MODULE_18__["default"],
  brown20: _brown20_png__WEBPACK_IMPORTED_MODULE_19__["default"],
  brown21: _brown21_png__WEBPACK_IMPORTED_MODULE_20__["default"],
}

/* harmony default export */ __webpack_exports__["default"] = (brownCards);

/***/ }),

/***/ "./src/assets/MythicCards/green/green1.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/green/green1.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ee9218f13d2668469469fc55fde565b4.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green10.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/green/green10.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "766beb973fc76ac9564e581d35c004af.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green11.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/green/green11.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "305fdb3b09ad909c598f23bc986a4f7f.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green12.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/green/green12.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b786b0a5e0aaf884c27b07894003defe.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green13.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/green/green13.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b3e3243ad3927ba66da7bbb74e03cfb4.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green14.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/green/green14.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "20b6b1be80bef6932ab07650b1655f5d.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green15.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/green/green15.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "63677766cd3a4cea8da0bdaa201ff418.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green16.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/green/green16.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "608e0aecaccf5ff896fb97957d217aa3.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green17.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/green/green17.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0ebea1f5b536a0b85765af3f54112973.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green18.png":
/*!**************************************************!*\
  !*** ./src/assets/MythicCards/green/green18.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "268edbdc27e016d06a522da5567719aa.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green2.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/green/green2.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1a1b4da17274000ce3a891814560403e.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green3.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/green/green3.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "24a6de1c53f0cc14bb955737f926a185.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green4.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/green/green4.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d9d9a3dc837a4101fc61207ad120c19f.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green5.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/green/green5.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0634bb414e136066d46f0d13709cee44.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green6.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/green/green6.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ca07046ad17914ec04d08e4aa01e3f9b.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green7.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/green/green7.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f9d8238c6770bdc97f73c478109a1289.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green8.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/green/green8.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bc5f83ed7ced1b832494a02ce67825b4.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/green9.png":
/*!*************************************************!*\
  !*** ./src/assets/MythicCards/green/green9.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bc368631ac89e5bf08912a94d05ed628.png");

/***/ }),

/***/ "./src/assets/MythicCards/green/index.js":
/*!***********************************************!*\
  !*** ./src/assets/MythicCards/green/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _green1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./green1.png */ "./src/assets/MythicCards/green/green1.png");
/* harmony import */ var _green2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./green2.png */ "./src/assets/MythicCards/green/green2.png");
/* harmony import */ var _green3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./green3.png */ "./src/assets/MythicCards/green/green3.png");
/* harmony import */ var _green4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./green4.png */ "./src/assets/MythicCards/green/green4.png");
/* harmony import */ var _green5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./green5.png */ "./src/assets/MythicCards/green/green5.png");
/* harmony import */ var _green6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./green6.png */ "./src/assets/MythicCards/green/green6.png");
/* harmony import */ var _green7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./green7.png */ "./src/assets/MythicCards/green/green7.png");
/* harmony import */ var _green8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./green8.png */ "./src/assets/MythicCards/green/green8.png");
/* harmony import */ var _green9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./green9.png */ "./src/assets/MythicCards/green/green9.png");
/* harmony import */ var _green10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./green10.png */ "./src/assets/MythicCards/green/green10.png");
/* harmony import */ var _green11_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./green11.png */ "./src/assets/MythicCards/green/green11.png");
/* harmony import */ var _green12_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./green12.png */ "./src/assets/MythicCards/green/green12.png");
/* harmony import */ var _green13_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./green13.png */ "./src/assets/MythicCards/green/green13.png");
/* harmony import */ var _green14_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./green14.png */ "./src/assets/MythicCards/green/green14.png");
/* harmony import */ var _green15_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./green15.png */ "./src/assets/MythicCards/green/green15.png");
/* harmony import */ var _green16_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./green16.png */ "./src/assets/MythicCards/green/green16.png");
/* harmony import */ var _green17_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./green17.png */ "./src/assets/MythicCards/green/green17.png");
/* harmony import */ var _green18_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./green18.png */ "./src/assets/MythicCards/green/green18.png");



















const greenCards = {
  green1: _green1_png__WEBPACK_IMPORTED_MODULE_0__["default"],
  green2: _green2_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  green3: _green3_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  green4: _green4_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  green5: _green5_png__WEBPACK_IMPORTED_MODULE_4__["default"],
  green6: _green6_png__WEBPACK_IMPORTED_MODULE_5__["default"],
  green7: _green7_png__WEBPACK_IMPORTED_MODULE_6__["default"],
  green8: _green8_png__WEBPACK_IMPORTED_MODULE_7__["default"],
  green9: _green9_png__WEBPACK_IMPORTED_MODULE_8__["default"],
  green10: _green10_png__WEBPACK_IMPORTED_MODULE_9__["default"],
  green11: _green11_png__WEBPACK_IMPORTED_MODULE_10__["default"],
  green12: _green12_png__WEBPACK_IMPORTED_MODULE_11__["default"],
  green13: _green13_png__WEBPACK_IMPORTED_MODULE_12__["default"],
  green14: _green14_png__WEBPACK_IMPORTED_MODULE_13__["default"],
  green15: _green15_png__WEBPACK_IMPORTED_MODULE_14__["default"],
  green16: _green16_png__WEBPACK_IMPORTED_MODULE_15__["default"],
  green17: _green17_png__WEBPACK_IMPORTED_MODULE_16__["default"],
  green18: _green18_png__WEBPACK_IMPORTED_MODULE_17__["default"],
};

/* harmony default export */ __webpack_exports__["default"] = (greenCards);

/***/ }),

/***/ "./src/data/ancients.js":
/*!******************************!*\
  !*** ./src/data/ancients.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Ancients/index */ "./src/assets/Ancients/index.js");


const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__["default"].azathoth,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__["default"].cthulhu,
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__["default"].iogSothoth,
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__["default"].shubNiggurath,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
]

/* harmony default export */ __webpack_exports__["default"] = (ancientsData);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n  <div class=\"container\">\n    <header class=\"header\">\n    </header>\n    <main class=\"main\">\n      <ul class=\"difficulty\">\n        <li class=\"difficulty__item\">Очень низкая</li>\n        <li class=\"difficulty__item\">Низкая</li>\n        <li class=\"difficulty__item\">Средняя</li>\n        <li class=\"difficulty__item\">Высокая</li>\n        <li class=\"difficulty__item\">Очень высокая</li>\n      </ul>\n      <div class=\"status-tracker-container\">\n        <button class=\"create-deck\">Создать колоду</button>\n        <div class=\"status-tracker\">\n          <div class=\"status-tracker_item greenCards\"></div>\n          <div class=\"status-tracker_item brownCards\"></div>\n          <div class=\"status-tracker_item blueCards\"></div>\n          <div class=\"status-tracker_item greenCards\"></div>\n          <div class=\"status-tracker_item brownCards\"></div>\n          <div class=\"status-tracker_item blueCards\"></div>\n          <div class=\"status-tracker_item greenCards\"></div>\n          <div class=\"status-tracker_item brownCards\"></div>\n          <div class=\"status-tracker_item blueCards\"></div>\n        </div>\n      </div>\n      <div class=\"current-card ancient-card invisible\"></div>\n      <div class=\"complete-deck ancient-card invisible\"></div>\n    </main>\n    <footer class=\"footer\"></footer>\n\n  </div>\n\n\n</body>\n\n</html>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0F6YXRob3RoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0N0aHVsdGh1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0lvZ1NvdGhvdGgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvQW5jaWVudHMvU2h1Yk5pZ2d1cmF0aC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9BbmNpZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWUzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlNS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWU2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlOC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWU5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjExLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjE0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjE3LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24yMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd241LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd244LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjEwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjEzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xNS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW42LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuNy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW45LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FuY2llbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFD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LEVBQUUsOERBQU87QUFDVDs7QUFFZSx5RUFBVSxFOzs7Ozs7Ozs7Ozs7QUN4Q3pCO0FBQUE7QUFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4REFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4REFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4REFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4REFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRWUsMkU7Ozs7Ozs7Ozs7O0FDckZmLHVDOzs7Ozs7Ozs7OztBQ0FBLDJvRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguaHRtbCc7XG4vLyBpbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyL2hlbHBlcidcbmltcG9ydCBhbmNpZW50c0RhdGEgZnJvbSAnLi9kYXRhL2FuY2llbnRzJztcbmltcG9ydCBibHVlQ2FyZHMgZnJvbSAnLi9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZSc7XG5pbXBvcnQgZ3JlZW5DYXJkcyBmcm9tICcuL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbic7XG5pbXBvcnQgYnJvd25DYXJkcyBmcm9tICcuL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bic7XG5cbi8vIGZ1bmN0aW9uIGEoKSB7XG4vLyAgIHJldHVybiBoZWxwZXIoMSwgMik7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhhKCkpXG5jb25zdCBzdGF0dXNUcmFja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRBbmNpZW50Jyk7XG5jb25zdCBjYXJkUmVzZXJ2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0dXMtdHJhY2tlcl9pdGVtJyk7XG5jb25zdCBkaWZmaWN1bHR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpZmZpY3VsdHlfX2l0ZW0nKTtcbmNvbnN0IGNyZWF0ZURlY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWRlY2snKTtcbmNvbnN0IGN1cnJlbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY2FyZCcpO1xuY29uc3QgY29tcGxldGVEZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWRlY2snKTtcbmxldCBhbmNpZW50c0FycmF5O1xubGV0IGN1cnJlbnRBbmNpZW50SWQ7XG5sZXQgY3VycmVudEFuY2llbnQ7XG5sZXQgZGlmZmljdWx0eU1vZGU7XG5sZXQgcmVxdWlyZWRBbGxTdGFnZXNDYXJkcztcbmxldCBwbGF5RGVjaztcbmxldCByZXN1bHREZWNrID0gW107XG5sZXQgbmV4dENhcmQgPSAxO1xubGV0IGNvbG9yVHJhY2tlciA9IHt9O1xuXG5jb25zdCBlYXN5Qmx1ZUNhcmRzID0gWydibHVlMycsICdibHVlNCcsICdibHVlNScsICdibHVlMTAnXTtcbmNvbnN0IG5vcm1hbEJsdWVDYXJkcyA9IFsnYmx1ZTcnLCAnYmx1ZTknLCAnYmx1ZTExJywgJ2JsdWUxMiddO1xuY29uc3QgaGFyZGxCbHVlQ2FyZHMgPSBbJ2JsdWUxJywgJ2JsdWUyJywgJ2JsdWU2JywgJ2JsdWU4J107XG5cbmNvbnN0IGVhc3lHcmVlbkNhcmRzID0gWydncmVlbjEnLCAnZ3JlZW4xMicsICdncmVlbjE2JywgJ2dyZWVuMTcnLCAnZ3JlZW4xOCddO1xuY29uc3Qgbm9ybWFsR3JlZW5DYXJkcyA9IFsnZ3JlZW43JywgJ2dyZWVuOCcsICdncmVlbjknLCAnZ3JlZW4xMCcsICdncmVlbjExJywgJ2dyZWVuMTMnLCAnZ3JlZW4xNCcsICdncmVlbjE1J107XG5jb25zdCBoYXJkbEdyZWVuQ2FyZHMgPSBbJ2dyZWVuMicsICdncmVlbjMnLCAnZ3JlZW40JywgJ2dyZWVuNScsICdncmVlbjYnXTtcblxuY29uc3QgZWFzeUJyb3duQ2FyZHMgPSBbJ2Jyb3duMTEnLCAnYnJvd24xMicsICdicm93bjEzJywgJ2Jyb3duMTQnLCAnYnJvd24yMSddO1xuY29uc3Qgbm9ybWFsQnJvd25DYXJkcyA9IFsnYnJvd24xJywgJ2Jyb3duMicsICdicm93bjMnLCAnYnJvd240JywgJ2Jyb3duNScsICdicm93bjE1JywgJ2Jyb3duMTYnLCAnYnJvd24xNycsICdicm93bjE4JywgJ2Jyb3duMTknLCAnYnJvd24yMCddO1xuY29uc3QgaGFyZGxCcm93bkNhcmRzID0gWydicm93bjYnLCAnYnJvd243JywgJ2Jyb3duOCcsICdicm93bjknLCAnYnJvd24xMCddO1xuXG5jb25zdCBzdGF0dXNUcmFja2VyU3RhZ2VIYW5kbGVyID0gKHN0YWdlKSA9PiB7XG4gIGxldCBpbmRleCA9IDA7XG4gIHN3aXRjaCAoc3RhZ2UpIHtcbiAgICBjYXNlICdmaXJzdFN0YWdlJzogaW5kZXggPSAwOyBicmVhaztcbiAgICBjYXNlICdzZWNvbmRTdGFnZSc6IGluZGV4ID0gMzsgYnJlYWs7XG4gICAgY2FzZSAndGhpcmRTdGFnZSc6IGluZGV4ID0gNjsgYnJlYWs7XG4gIH1cbiAgY2FyZFJlc2VydmVbMCArIGluZGV4XS50ZXh0Q29udGVudCA9IChhbmNpZW50c0RhdGFbY3VycmVudEFuY2llbnRJZF0pW3N0YWdlXS5ncmVlbkNhcmRzO1xuICBjYXJkUmVzZXJ2ZVsxICsgaW5kZXhdLnRleHRDb250ZW50ID0gKGFuY2llbnRzRGF0YVtjdXJyZW50QW5jaWVudElkXSlbc3RhZ2VdLmJyb3duQ2FyZHM7XG4gIGNhcmRSZXNlcnZlWzIgKyBpbmRleF0udGV4dENvbnRlbnQgPSAoYW5jaWVudHNEYXRhW2N1cnJlbnRBbmNpZW50SWRdKVtzdGFnZV0uYmx1ZUNhcmRzO1xufVxuXG5cbmNvbnN0IHN0YXR1c1RyYWNrZXJIYW5kbGVyID0gKCkgPT4ge1xuICBzdGF0dXNUcmFja2VyU3RhZ2VIYW5kbGVyKCdmaXJzdFN0YWdlJyk7XG4gIHN0YXR1c1RyYWNrZXJTdGFnZUhhbmRsZXIoJ3NlY29uZFN0YWdlJyk7XG4gIHN0YXR1c1RyYWNrZXJTdGFnZUhhbmRsZXIoJ3RoaXJkU3RhZ2UnKTtcbn1cblxuY29uc3QgY3JlYXRlRWFzeVRlbXBDb2xvckRlY2sgPSAoY29sb3IpID0+IHtcbiAgbGV0IHRlbXBEZWNrID0gW107XG4gIGNvbnN0IGNvbG9yQ291bnRlciA9IHJlcXVpcmVkQWxsU3RhZ2VzQ2FyZHNbY29sb3IgPT09ICdncmVlbicgPyAwIDogY29sb3IgPT09ICdicm93bicgPyAxIDogMl07XG4gIGxldCBlYXN5Q29sb3JDYXJkO1xuICBsZXQgbm9ybWFsQ29sb3JDYXJkO1xuICBsZXQgc291cmNlQ2FyZHM7XG4gIHN3aXRjaCAoY29sb3IpIHtcbiAgICBjYXNlICdncmVlbic6IGVhc3lDb2xvckNhcmQgPSBlYXN5R3JlZW5DYXJkcy5zbGljZSgwKTsgbm9ybWFsQ29sb3JDYXJkID0gbm9ybWFsR3JlZW5DYXJkcy5zbGljZSgwKTsgc291cmNlQ2FyZHMgPSBPYmplY3QuYXNzaWduKHt9LCBncmVlbkNhcmRzKTsgYnJlYWs7XG4gICAgY2FzZSAnYnJvd24nOiBlYXN5Q29sb3JDYXJkID0gZWFzeUJyb3duQ2FyZHMuc2xpY2UoMCk7IG5vcm1hbENvbG9yQ2FyZCA9IG5vcm1hbEJyb3duQ2FyZHMuc2xpY2UoMCk7IHNvdXJjZUNhcmRzID0gT2JqZWN0LmFzc2lnbih7fSwgYnJvd25DYXJkcyk7IGJyZWFrO1xuICAgIGNhc2UgJ2JsdWUnOiBlYXN5Q29sb3JDYXJkID0gZWFzeUJsdWVDYXJkcy5zbGljZSgwKTsgbm9ybWFsQ29sb3JDYXJkID0gbm9ybWFsQmx1ZUNhcmRzLnNsaWNlKDApOyBzb3VyY2VDYXJkcyA9IE9iamVjdC5hc3NpZ24oe30sIGJsdWVDYXJkcyk7IGJyZWFrO1xuICB9XG4gIGVhc3lDb2xvckNhcmQuZm9yRWFjaChjYXJkID0+IHtcbiAgICBpZiAodGVtcERlY2subGVuZ3RoIDwgY29sb3JDb3VudGVyKVxuICAgICAgdGVtcERlY2sucHVzaChzb3VyY2VDYXJkc1tjYXJkXSlcbiAgfSlcbiAgaWYgKHRlbXBEZWNrLmxlbmd0aCA8IGNvbG9yQ291bnRlcikge1xuICAgIHdoaWxlICh0ZW1wRGVjay5sZW5ndGggPCBjb2xvckNvdW50ZXIpIHtcbiAgICAgIGNvbnN0IGNhcmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5vcm1hbENvbG9yQ2FyZC5sZW5ndGgpO1xuICAgICAgdGVtcERlY2sucHVzaChzb3VyY2VDYXJkc1tub3JtYWxDb2xvckNhcmRbY2FyZElkXV0pO1xuICAgICAgbm9ybWFsQ29sb3JDYXJkW2NhcmRJZF0gPSBub3JtYWxDb2xvckNhcmRbbm9ybWFsQ29sb3JDYXJkLmxlbmd0aCAtIDFdO1xuICAgICAgbm9ybWFsQ29sb3JDYXJkLnBvcCgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGVtcERlY2s7XG59XG5cbmNvbnN0IGNyZWF0ZVNvcnRlZFN0YWdlRGVjayA9IChzdGFnZSwgZGVja0NvbG9yKSA9PiB7XG4gIGxldCBzdGFnZURlY2sgPSBbXTtcbiAgbGV0IHN0YWdlQ2FyZENvdW50ZXIgPSAwO1xuICBjb25zdCBhcnJheUNvbG9yID0gZGVja0NvbG9yID09PSAnZ3JlZW5DYXJkcycgPyAwIDogZGVja0NvbG9yID09PSAnYnJvd25DYXJkcycgPyAxIDogMjtcbiAgd2hpbGUgKHN0YWdlQ2FyZENvdW50ZXIgPCBhbmNpZW50c0RhdGFbY3VycmVudEFuY2llbnRJZF1bc3RhZ2VdW2RlY2tDb2xvcl0pIHtcbiAgICBjb25zdCBjYXJkSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF5RGVja1thcnJheUNvbG9yXS5sZW5ndGgpO1xuICAgIHN0YWdlRGVjay5wdXNoKHBsYXlEZWNrW2FycmF5Q29sb3JdW2NhcmRJZF0pO1xuICAgIHBsYXlEZWNrW2FycmF5Q29sb3JdW2NhcmRJZF0gPSBwbGF5RGVja1thcnJheUNvbG9yXVtwbGF5RGVja1thcnJheUNvbG9yXS5sZW5ndGggLSAxXTtcbiAgICBwbGF5RGVja1thcnJheUNvbG9yXS5wb3AoKTtcbiAgICBzdGFnZUNhcmRDb3VudGVyKys7XG4gIH1cbiAgcmV0dXJuIHN0YWdlRGVjaztcbn1cblxuY29uc3QgZXh0cmFjdEZyb21BcnJheSA9IChhcnJheSkgPT4ge1xuICBsZXQgc3RyaW5nRnJvbWFycmF5ID0gJyc7XG4gIGlmIChhcnJheS5pc0FycmF5KVxuICAgIGV4dHJhY3RGcm9tQXJyYXkoYXJyYXkpO1xuICBzdHJpbmdGcm9tYXJyYXkgKz0gWy4uLmFycmF5XTtcbiAgcmV0dXJuIHN0cmluZ0Zyb21hcnJheS5zcGxpdCgnLCcpXG59XG5cbmNvbnN0IGNyZWF0ZURlY2sgPSAoZGlmZmljdWx0eU1vZGUpID0+IHtcbiAgLy/Rg9C30L3QsNC10Lwg0LrQvtC7LdCy0L4g0L3QtdC+0LHRhdC+0LTQuNC80YvRhSDQutCw0YDRgiDQtNC70Y8g0LrQvtC70L7QtNGLXG4gIHJlc3VsdERlY2sgPSBbXTtcbiAgcmVxdWlyZWRBbGxTdGFnZXNDYXJkcyA9IFtcbiAgICBwYXJzZUludChjYXJkUmVzZXJ2ZVswXS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVszXS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVs2XS50ZXh0Q29udGVudCksIC8v0LfQtdC70LXQvdGL0LVcbiAgICBwYXJzZUludChjYXJkUmVzZXJ2ZVsxXS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVs0XS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVs3XS50ZXh0Q29udGVudCksIC8v0LrQvtGA0LjRh9C90LXQstGL0LVcbiAgICBwYXJzZUludChjYXJkUmVzZXJ2ZVsyXS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVs1XS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVs4XS50ZXh0Q29udGVudCkgIC8v0YHQuNC90LjQtVxuICBdO1xuICBpZiAoZGlmZmljdWx0eU1vZGUgPT09ICfQntGH0LXQvdGMINC90LjQt9C60LDRjycpIHtcbiAgICAvL9Cx0LXRgNC10Lwg0LLRgdC1INC70LXQs9C60LjQtSArINC+0LHRi9GH0L3Ri9C1LCDQtdGB0LvQuCDQvdC1INGF0LLQsNGC0LDQtdGCINC4INC60LvQsNC00LXQvCDQuNGFINCyIHRlbXBEZWNrXG4gICAgcGxheURlY2sgPSBbKGNyZWF0ZUVhc3lUZW1wQ29sb3JEZWNrKCdncmVlbicpKSwgY3JlYXRlRWFzeVRlbXBDb2xvckRlY2soJ2Jyb3duJyksIGNyZWF0ZUVhc3lUZW1wQ29sb3JEZWNrKCdibHVlJyldO1xuXG4gICAgcGxheURlY2suZm9yRWFjaCgoZGVjaywgaW5kZXgpID0+IHtcbiAgICAgIGRlY2suZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29sb3JUcmFja2VyW2l0ZW1dID0gaW5kZXggPT09IDAgPyAnZ3JlZW4nIDogaW5kZXggPT09IDEgPyAnYnJvd24nIDogJ2JsdWUnO1xuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gbGV0IGIgPSBwbGF5RGVjay5tYXAoZWxlbWVudCA9PiB7XG4gICAgLy8gICByZXR1cm4gZWxlbWVudC5zbGljZSgwKTtcbiAgICAvLyB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygncGxheURlY2snLCBiKVxuXG5cbiAgICBsZXQgc3RhZ2VPbmVEZWNrID0gW2NyZWF0ZVNvcnRlZFN0YWdlRGVjaygnZmlyc3RTdGFnZScsICdncmVlbkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnZmlyc3RTdGFnZScsICdicm93bkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnZmlyc3RTdGFnZScsICdibHVlQ2FyZHMnKV07XG4gICAgbGV0IHN0YWdlVHdvRGVjayA9IFtjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3NlY29uZFN0YWdlJywgJ2dyZWVuQ2FyZHMnKSwgY3JlYXRlU29ydGVkU3RhZ2VEZWNrKCdzZWNvbmRTdGFnZScsICdicm93bkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnc2Vjb25kU3RhZ2UnLCAnYmx1ZUNhcmRzJyldO1xuICAgIGxldCBzdGFnZVRocmVlRGVjayA9IFtjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3RoaXJkU3RhZ2UnLCAnZ3JlZW5DYXJkcycpLCBjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3RoaXJkU3RhZ2UnLCAnYnJvd25DYXJkcycpLCBjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3RoaXJkU3RhZ2UnLCAnYmx1ZUNhcmRzJyldO1xuXG4gICAgc3RhZ2VPbmVEZWNrID0gZXh0cmFjdEZyb21BcnJheShzdGFnZU9uZURlY2spO1xuICAgIHN0YWdlVHdvRGVjayA9IGV4dHJhY3RGcm9tQXJyYXkoc3RhZ2VUd29EZWNrKTtcbiAgICBzdGFnZVRocmVlRGVjayA9IGV4dHJhY3RGcm9tQXJyYXkoc3RhZ2VUaHJlZURlY2spO1xuXG4gICAgY29uc3QgdGVtcERlY2tBcnJheSA9IFtzdGFnZU9uZURlY2ssIHN0YWdlVHdvRGVjaywgc3RhZ2VUaHJlZURlY2tdO1xuXG5cbiAgICAvLyBsZXQgYSA9IHRlbXBEZWNrQXJyYXkubWFwKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgcmV0dXJuIGVsZW1lbnQuc2xpY2UoMCk7XG4gICAgLy8gfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RlbXBEZWNrQXJyYXknLCBhKVxuXG4gICAgdGVtcERlY2tBcnJheS5mb3JFYWNoKGRlY2sgPT4ge1xuICAgICAgd2hpbGUgKGRlY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNhcmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlY2subGVuZ3RoKTtcbiAgICAgICAgaWYgKGRlY2tbY2FyZElkXSAhPSBcIlwiKVxuICAgICAgICAgIHJlc3VsdERlY2sucHVzaChkZWNrW2NhcmRJZF0pO1xuICAgICAgICBkZWNrW2NhcmRJZF0gPSBkZWNrW2RlY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGRlY2sucG9wKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5kaWZmaWN1bHR5QnV0dG9uLmZvckVhY2goZGlmZmljdWx0eSA9PiB7XG4gIGRpZmZpY3VsdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBkaWZmaWN1bHR5QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbiA9PT0gZXZlbnQudGFyZ2V0ID8gYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BpY2tlZCcpIDogYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BpY2tlZCcpO1xuICAgIH0pXG4gICAgZGlmZmljdWx0eU1vZGUgPSBkaWZmaWN1bHR5LnRleHRDb250ZW50O1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRBbmNpZW50KTtcbiAgICAvLyBjb25zb2xlLmxvZyhkaWZmaWN1bHR5TW9kZSk7XG4gIH0pXG59KVxuXG5cbi8v0JTQvtCx0LDQstC70Y/QtdC8INC00YDQtdCy0L3QuNGFINCyIGhlYWRlclxuYW5jaWVudHNEYXRhLmZvckVhY2goYW5jaWVudCA9PiB7XG4gIGNvbnN0IGFuY2llbnRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGFuY2llbnRDYXJkLnNyYyA9IChgJHthbmNpZW50LmNhcmRGYWNlfWApO1xuICBhbmNpZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdhbmNpZW50LWNhcmQnKTtcbiAgYW5jaWVudENhcmQudGFiSW5kZXggPSAnMCdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuYXBwZW5kKGFuY2llbnRDYXJkKVxuICBhbmNpZW50c0FycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG59KVxuXG5hbmNpZW50c0FycmF5LmZvckVhY2goKGFuY2llbnQsIGluZGV4KSA9PiB7XG4gIGFuY2llbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYW5jaWVudHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QgPSAnYW5jaWVudC1jYXJkJyk7XG4gICAgYW5jaWVudC5jbGFzc0xpc3QuYWRkKCdwaWNrZWQnKTtcbiAgICBjdXJyZW50QW5jaWVudCA9IGFuY2llbnRzRGF0YVtpbmRleF0ubmFtZTtcbiAgICBjdXJyZW50QW5jaWVudElkID0gaW5kZXg7XG4gICAgaWYgKGN1cnJlbnRBbmNpZW50KSB7XG4gICAgICBzdGF0dXNUcmFja2VySGFuZGxlcigpO1xuICAgIH1cbiAgfSlcbn0pXG5cbmNyZWF0ZURlY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5leHRDYXJkID0gMDtcbiAgY3JlYXRlRGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdwaWNrZWQnKTtcbiAgY3VycmVudENhcmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gIGNvbXBsZXRlRGVjay5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgaWYgKGN1cnJlbnRBbmNpZW50KSB7XG4gICAgc3RhdHVzVHJhY2tlckhhbmRsZXIoKTtcbiAgICBjcmVhdGVEZWNrKGRpZmZpY3VsdHlNb2RlKTtcblxuICB9XG59KVxuXG5jb25zdCBjaGFuZ2VUcmFja2VyU3RhdHVzID0gKGNvbG9yKSA9PiB7XG4gIGxldCBpbmRleCA9IDA7XG4gIGNvbnN0IGN1cnJlbnRDb2xvciA9IGNvbG9yID09PSAnZ3JlZW4nID8gMCA6IGNvbG9yID09PSAnYnJvd24nID8gMSA6IDI7XG4gIGlmIChjYXJkUmVzZXJ2ZVtjdXJyZW50Q29sb3IgKyBpbmRleF0udGV4dENvbnRlbnQgPT09ICcwJylcbiAgICBpbmRleCA9IDM7XG4gIGlmIChjYXJkUmVzZXJ2ZVtjdXJyZW50Q29sb3IgKyBpbmRleF0udGV4dENvbnRlbnQgPT09ICcwJylcbiAgICBpbmRleCA9IDY7XG4gIGNhcmRSZXNlcnZlW2N1cnJlbnRDb2xvciArIGluZGV4XS50ZXh0Q29udGVudCA9IHBhcnNlSW50KGNhcmRSZXNlcnZlW2N1cnJlbnRDb2xvciArIGluZGV4XS50ZXh0Q29udGVudCkgLSAxO1xufVxuXG5jb21wbGV0ZURlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChuZXh0Q2FyZCA9PT0gMCkge1xuICAgIGNyZWF0ZURlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncGlja2VkJyk7XG4gICAgY3VycmVudENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgY3VycmVudENhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtyZXN1bHREZWNrW25leHRDYXJkXX0nKWA7XG4gICAgY2hhbmdlVHJhY2tlclN0YXR1cyhjb2xvclRyYWNrZXJbcmVzdWx0RGVja1tuZXh0Q2FyZF1dKTtcbiAgICBuZXh0Q2FyZCsrO1xuICB9XG59KVxuXG5jdXJyZW50Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKG5leHRDYXJkIDwgcmVzdWx0RGVjay5sZW5ndGgpIHtcbiAgICBjdXJyZW50Q2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jlc3VsdERlY2tbbmV4dENhcmRdfScpYDtcbiAgICBjaGFuZ2VUcmFja2VyU3RhdHVzKGNvbG9yVHJhY2tlcltyZXN1bHREZWNrW25leHRDYXJkXV0pO1xuICAgIG5leHRDYXJkKys7XG4gIH1cbiAgZWxzZSB7XG4gICAgY3VycmVudENhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbnVsbDtcbiAgICBjdXJyZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKVxuICB9XG59KSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNzZjYzYwZTZmMmI5YmIxNjdjZTc1ZjM0NTdlZDIxOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTdiZmQwMjk3NDRkYzlmODdjMWFjNWY0MmQ5MDQwMmEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM1Yjc3MTdiZmY5NzNjZGEyN2JlZDIzMjU3ZTcyMjM0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2OGM0MjcyZTAwYzk1OTZlNjViMTgwNmIxODU5OGE0My5wbmdcIjsiLCJpbXBvcnQgYXphdGhvdGggZnJvbSAnLi9BemF0aG90aC5wbmcnO1xyXG5pbXBvcnQgY3RodWxodSBmcm9tICcuL0N0aHVsdGh1LnBuZyc7XHJcbmltcG9ydCBpb2dTb3Rob3RoIGZyb20gJy4vSW9nU290aG90aC5wbmcnO1xyXG5pbXBvcnQgc2h1Yk5pZ2d1cmF0aCBmcm9tICcuL1NodWJOaWdndXJhdGgucG5nJztcclxuXHJcbmNvbnN0IGFuY2llbnRzID0ge1xyXG4gIGF6YXRob3RoLFxyXG4gIGN0aHVsaHUsXHJcbiAgaW9nU290aG90aCxcclxuICBzaHViTmlnZ3VyYXRoXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuY2llbnRzIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5YzhlNWViNTBkYzc2NjZmMWFhM2QyZjE2NTA2YzMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNjFjOWY3MzQ5MmQ4Y2Q3MDI3Y2IxM2U4M2JiZWQ3Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjdlNjU1MmE5MmU0Yjg3ODEwN2FjYjdhMGU3YTI0M2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIwNGY5MTYwMDgzZTUyOWFiNzYzMWE0NzVjMDFhZTY2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzY2MzNTJjZGM4ZmFkZTVkYWQ0YzMxYzc4OTkyYjg0Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmRkMWQxMGZmNTEzNzc0ZWI4NDEwYmU2NTk4YmU4M2MucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYwOWYwZjcxNWU1MjVhMGI1MGVjYjA3ODlhYTJlMTBmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlM2U4NzkyNjIyYjBjNzVjNzhjMWMwYjc1N2EwNDFmYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2YzMjNjOThhM2Y1NDYzMmE2NmNkYjFjOTVkMWE1NTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRjZGIxYmQ2NDEzNzJlMmQwZjc0NmJmZmViODE5NjNjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMmE5ZWVjNjg1MTg5NTFmYzE4ZTUwZWRjNTcxYWQ4MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDMzNzE5MTFmOGYwZDg0YjU1ODU0N2ExMDBmOTdlNTYucG5nXCI7IiwiaW1wb3J0IGJsdWUxIGZyb20gJy4vYmx1ZTEucG5nJztcclxuaW1wb3J0IGJsdWUyIGZyb20gJy4vYmx1ZTIucG5nJztcclxuaW1wb3J0IGJsdWUzIGZyb20gJy4vYmx1ZTMucG5nJztcclxuaW1wb3J0IGJsdWU0IGZyb20gJy4vYmx1ZTQucG5nJztcclxuaW1wb3J0IGJsdWU1IGZyb20gJy4vYmx1ZTUucG5nJztcclxuaW1wb3J0IGJsdWU2IGZyb20gJy4vYmx1ZTYucG5nJztcclxuaW1wb3J0IGJsdWU3IGZyb20gJy4vYmx1ZTcucG5nJztcclxuaW1wb3J0IGJsdWU4IGZyb20gJy4vYmx1ZTgucG5nJztcclxuaW1wb3J0IGJsdWU5IGZyb20gJy4vYmx1ZTkucG5nJztcclxuaW1wb3J0IGJsdWUxMCBmcm9tICcuL2JsdWUxMC5wbmcnO1xyXG5pbXBvcnQgYmx1ZTExIGZyb20gJy4vYmx1ZTExLnBuZyc7XHJcbmltcG9ydCBibHVlMTIgZnJvbSAnLi9ibHVlMTIucG5nJztcclxuXHJcbmNvbnN0IGJsdWVDYXJkcyA9IHtcclxuICBibHVlMSxcclxuICBibHVlMixcclxuICBibHVlMyxcclxuICBibHVlNCxcclxuICBibHVlNSxcclxuICBibHVlNixcclxuICBibHVlNyxcclxuICBibHVlOCxcclxuICBibHVlOSxcclxuICBibHVlMTAsXHJcbiAgYmx1ZTExLFxyXG4gIGJsdWUxMixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmx1ZUNhcmRzIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFjODVlN2RiOWFiMzYwZmUyMzVhYTI0ODgzN2YwZTVkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MDMwNjhmNDRmOTE1MzUzNGY5Yzc0NDhiYzk0ZGVmOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTU3ZmQwYTkyNDQ0Y2MyYTI0NWY0N2U0NzM5ZDdhNTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkyMGIxNDA5ZDNmN2QwMDZlNzY0NzI3MWUzYTNkYWNiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhOGQ3N2ZmNWI1ZWFhNTM0Yjk2OGY5ODg4NmQxZTM3MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjVkMjFlMTk2NWQ4ZWM4MDhiYzJkYzkxNmYyNTc4ZTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAzNmY4ZjkxZWNjZDBlOGY5NzA4MDg4NTM3MmRjZjJiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxZmQ2MWJiZDExMTk4NmEwOTY1YWI3YTNkOWMzOGViNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmE1M2NjMDRhMmQ2Y2JiNjM2NzdmMjAyMWNlMGE1MWMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM1MzdiZmIyY2QyODRjOTY2N2FlNjc1NmIyNzFiN2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxOTk4NDE1MjFjNTU5NDBkMGQwM2ZjYWRhOWFkNTE5NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzQ0NTc5NTA1ZDBkM2NjZmQ3YzhmMDY5YTg0MWYzZjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjExODJhOGY4MGJkMjI3MmIzZDA3YzJiMDE4NTdhYTYxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzYThlNzI4NzllMTFjMzE1YzU5ZDRjYWU2OWI0MzkxYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2FhYmFiY2FiMjFlMDg1MTBjMjc2MjQ5ZWY4ZTg4MTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUzODdiNjRhNTM3YTBmYjI1Yzg0YTgxMDE4MDMzZDE5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MDlmODdmODJjMTQ2YWIzMTg5YTA1YTNmYTQ1OGI1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjM0NTNmOTcwYzRhMzg4ZjhiNjhiMDZmNDAwYTRjY2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdkYTUwNTA0MjBiMTRkNjdhNDgxZTQ1M2QxM2U3MGZjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMTI2ZmNkOTY1YmUzYjQyOGRjYWNlNThlNjJhNzBlMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2Q2OWEwMWNkZDU2MTc1ZjMwNGVjZjU0NjdlNWRmYzIucG5nXCI7IiwiaW1wb3J0IGJyb3duMSBmcm9tICcuL2Jyb3duMS5wbmcnO1xyXG5pbXBvcnQgYnJvd24yIGZyb20gJy4vYnJvd24yLnBuZyc7XHJcbmltcG9ydCBicm93bjMgZnJvbSAnLi9icm93bjMucG5nJztcclxuaW1wb3J0IGJyb3duNCBmcm9tICcuL2Jyb3duNC5wbmcnO1xyXG5pbXBvcnQgYnJvd241IGZyb20gJy4vYnJvd241LnBuZyc7XHJcbmltcG9ydCBicm93bjYgZnJvbSAnLi9icm93bjYucG5nJztcclxuaW1wb3J0IGJyb3duNyBmcm9tICcuL2Jyb3duNy5wbmcnO1xyXG5pbXBvcnQgYnJvd244IGZyb20gJy4vYnJvd244LnBuZyc7XHJcbmltcG9ydCBicm93bjkgZnJvbSAnLi9icm93bjkucG5nJztcclxuaW1wb3J0IGJyb3duMTAgZnJvbSAnLi9icm93bjEwLnBuZyc7XHJcbmltcG9ydCBicm93bjExIGZyb20gJy4vYnJvd24xMS5wbmcnO1xyXG5pbXBvcnQgYnJvd24xMiBmcm9tICcuL2Jyb3duMTIucG5nJztcclxuaW1wb3J0IGJyb3duMTMgZnJvbSAnLi9icm93bjEzLnBuZyc7XHJcbmltcG9ydCBicm93bjE0IGZyb20gJy4vYnJvd24xNC5wbmcnO1xyXG5pbXBvcnQgYnJvd24xNSBmcm9tICcuL2Jyb3duMTUucG5nJztcclxuaW1wb3J0IGJyb3duMTYgZnJvbSAnLi9icm93bjE2LnBuZyc7XHJcbmltcG9ydCBicm93bjE3IGZyb20gJy4vYnJvd24xNy5wbmcnO1xyXG5pbXBvcnQgYnJvd24xOCBmcm9tICcuL2Jyb3duMTgucG5nJztcclxuaW1wb3J0IGJyb3duMTkgZnJvbSAnLi9icm93bjE5LnBuZyc7XHJcbmltcG9ydCBicm93bjIwIGZyb20gJy4vYnJvd24yMC5wbmcnO1xyXG5pbXBvcnQgYnJvd24yMSBmcm9tICcuL2Jyb3duMjEucG5nJztcclxuXHJcbmNvbnN0IGJyb3duQ2FyZHMgPSB7XHJcbiAgYnJvd24xLFxyXG4gIGJyb3duMixcclxuICBicm93bjMsXHJcbiAgYnJvd240LFxyXG4gIGJyb3duNSxcclxuICBicm93bjYsXHJcbiAgYnJvd243LFxyXG4gIGJyb3duOCxcclxuICBicm93bjksXHJcbiAgYnJvd24xMCxcclxuICBicm93bjExLFxyXG4gIGJyb3duMTIsXHJcbiAgYnJvd24xMyxcclxuICBicm93bjE0LFxyXG4gIGJyb3duMTUsXHJcbiAgYnJvd24xNixcclxuICBicm93bjE3LFxyXG4gIGJyb3duMTgsXHJcbiAgYnJvd24xOSxcclxuICBicm93bjIwLFxyXG4gIGJyb3duMjEsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyb3duQ2FyZHMiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWU5MjE4ZjEzZDI2Njg0Njk0NjlmYzU1ZmRlNTY1YjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc2NmJlYjk3M2ZjNzZhYzk1NjRlNTgxZDM1YzAwNGFmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMDVmZGIzYjA5YWQ5MDljNTk4ZjIzYmM5ODZhNGY3Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjc4NmIwYTVlMGFhZjg4NGMyN2IwNzg5NDAwM2RlZmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIzZTMyNDNhZDM5MjdiYTY2ZGE3YmJiNzRlMDNjZmI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMGI2YjFiZTgwYmVmNjkzMmFiMDc2NTBiMTY1NWY1ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjM2Nzc3NjZjZDNhNGNlYThkYTBiZGFhMjAxZmY0MTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwOGUwYWVjYWNjZjVmZjg5NmZiOTc5NTdkMjE3YWEzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwZWJlYTFmNWI1MzZhMGI4NTc2NWFmM2Y1NDExMjk3My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjY4ZWRiZGMyN2UwMTZkMDZhNTIyZGE1NTY3NzE5YWEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFhMWI0ZGExNzI3NDAwMGNlM2E4OTE4MTQ1NjA0MDNlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNGE2ZGUxYzUzZjBjYzE0YmI5NTU3MzdmOTI2YTE4NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDlkOWEzZGM4MzdhNDEwMWZjNjEyMDdhZDEyMGMxOWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA2MzRiYjQxNGUxMzYwNjZkNDZmMGQxMzcwOWNlZTQ0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTA3MDQ2YWQxNzkxNGVjMDRkMDhlNGFhMDFlM2Y5Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjlkODIzOGM2NzcwYmRjOTdmNzNjNDc4MTA5YTEyODkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJjNWY4M2VkN2NlZDFiODMyNDk0YTAyY2U2NzgyNWI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYzM2ODYzMWFjODllNWJmMDg5MTJhOTRkMDVlZDYyOC5wbmdcIjsiLCJpbXBvcnQgZ3JlZW4xIGZyb20gJy4vZ3JlZW4xLnBuZyc7XHJcbmltcG9ydCBncmVlbjIgZnJvbSAnLi9ncmVlbjIucG5nJztcclxuaW1wb3J0IGdyZWVuMyBmcm9tICcuL2dyZWVuMy5wbmcnO1xyXG5pbXBvcnQgZ3JlZW40IGZyb20gJy4vZ3JlZW40LnBuZyc7XHJcbmltcG9ydCBncmVlbjUgZnJvbSAnLi9ncmVlbjUucG5nJztcclxuaW1wb3J0IGdyZWVuNiBmcm9tICcuL2dyZWVuNi5wbmcnO1xyXG5pbXBvcnQgZ3JlZW43IGZyb20gJy4vZ3JlZW43LnBuZyc7XHJcbmltcG9ydCBncmVlbjggZnJvbSAnLi9ncmVlbjgucG5nJztcclxuaW1wb3J0IGdyZWVuOSBmcm9tICcuL2dyZWVuOS5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xMCBmcm9tICcuL2dyZWVuMTAucG5nJztcclxuaW1wb3J0IGdyZWVuMTEgZnJvbSAnLi9ncmVlbjExLnBuZyc7XHJcbmltcG9ydCBncmVlbjEyIGZyb20gJy4vZ3JlZW4xMi5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xMyBmcm9tICcuL2dyZWVuMTMucG5nJztcclxuaW1wb3J0IGdyZWVuMTQgZnJvbSAnLi9ncmVlbjE0LnBuZyc7XHJcbmltcG9ydCBncmVlbjE1IGZyb20gJy4vZ3JlZW4xNS5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xNiBmcm9tICcuL2dyZWVuMTYucG5nJztcclxuaW1wb3J0IGdyZWVuMTcgZnJvbSAnLi9ncmVlbjE3LnBuZyc7XHJcbmltcG9ydCBncmVlbjE4IGZyb20gJy4vZ3JlZW4xOC5wbmcnO1xyXG5cclxuY29uc3QgZ3JlZW5DYXJkcyA9IHtcclxuICBncmVlbjEsXHJcbiAgZ3JlZW4yLFxyXG4gIGdyZWVuMyxcclxuICBncmVlbjQsXHJcbiAgZ3JlZW41LFxyXG4gIGdyZWVuNixcclxuICBncmVlbjcsXHJcbiAgZ3JlZW44LFxyXG4gIGdyZWVuOSxcclxuICBncmVlbjEwLFxyXG4gIGdyZWVuMTEsXHJcbiAgZ3JlZW4xMixcclxuICBncmVlbjEzLFxyXG4gIGdyZWVuMTQsXHJcbiAgZ3JlZW4xNSxcclxuICBncmVlbjE2LFxyXG4gIGdyZWVuMTcsXHJcbiAgZ3JlZW4xOCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyZWVuQ2FyZHM7IiwiaW1wb3J0IEFuY2llbnRzIGZyb20gJy4uL2Fzc2V0cy9BbmNpZW50cy9pbmRleCdcclxuXHJcbmNvbnN0IGFuY2llbnRzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogJ2F6YXRob3RoJyxcclxuICAgIG5hbWU6ICdhemF0aG90aCcsXHJcbiAgICBjYXJkRmFjZTogQW5jaWVudHMuYXphdGhvdGgsXHJcbiAgICBmaXJzdFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDEsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAyLFxyXG4gICAgICBibHVlQ2FyZHM6IDEsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDMsXHJcbiAgICB9LFxyXG4gICAgdGhpcmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAyLFxyXG4gICAgICBibHVlQ2FyZHM6IDAsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdjdGh1bGh1JyxcclxuICAgIG5hbWU6ICdjdGh1bGh1JyxcclxuICAgIGNhcmRGYWNlOiBBbmNpZW50cy5jdGh1bGh1LFxyXG4gICAgZmlyc3RTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAwLFxyXG4gICAgICBibHVlQ2FyZHM6IDIsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDIsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kU3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMSxcclxuICAgICAgYmx1ZUNhcmRzOiAwLFxyXG4gICAgICBicm93bkNhcmRzOiAzLFxyXG4gICAgfSxcclxuICAgIHRoaXJkU3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMyxcclxuICAgICAgYmx1ZUNhcmRzOiAwLFxyXG4gICAgICBicm93bkNhcmRzOiA0LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnaW9nU290aG90aCcsXHJcbiAgICBuYW1lOiAnaW9nU290aG90aCcsXHJcbiAgICBjYXJkRmFjZTogQW5jaWVudHMuaW9nU290aG90aCxcclxuICAgIGZpcnN0U3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMCxcclxuICAgICAgYmx1ZUNhcmRzOiAxLFxyXG4gICAgICBicm93bkNhcmRzOiAyLFxyXG4gICAgfSxcclxuICAgIHNlY29uZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDIsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMyxcclxuICAgIH0sXHJcbiAgICB0aGlyZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDMsXHJcbiAgICAgIGJsdWVDYXJkczogMCxcclxuICAgICAgYnJvd25DYXJkczogNCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3NodWJOaWdndXJhdGgnLFxyXG4gICAgbmFtZTogJ3NodWJOaWdndXJhdGgnLFxyXG4gICAgY2FyZEZhY2U6IEFuY2llbnRzLnNodWJOaWdndXJhdGgsXHJcbiAgICBmaXJzdFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDEsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAzLFxyXG4gICAgICBibHVlQ2FyZHM6IDEsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDIsXHJcbiAgICB9LFxyXG4gICAgdGhpcmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAyLFxyXG4gICAgICBibHVlQ2FyZHM6IDAsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuY2llbnRzRGF0YSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuXFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiPlxcbiAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT5cXG48L2hlYWQ+XFxuXFxuPGJvZHk+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICA8L2hlYWRlcj5cXG4gICAgPG1haW4gY2xhc3M9XFxcIm1haW5cXFwiPlxcbiAgICAgIDx1bCBjbGFzcz1cXFwiZGlmZmljdWx0eVxcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImRpZmZpY3VsdHlfX2l0ZW1cXFwiPtCe0YfQtdC90Ywg0L3QuNC30LrQsNGPPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiZGlmZmljdWx0eV9faXRlbVxcXCI+0J3QuNC30LrQsNGPPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiZGlmZmljdWx0eV9faXRlbVxcXCI+0KHRgNC10LTQvdGP0Y88L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJkaWZmaWN1bHR5X19pdGVtXFxcIj7QktGL0YHQvtC60LDRjzwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImRpZmZpY3VsdHlfX2l0ZW1cXFwiPtCe0YfQtdC90Ywg0LLRi9GB0L7QutCw0Y88L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXItY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNyZWF0ZS1kZWNrXFxcIj7QodC+0LfQtNCw0YLRjCDQutC+0LvQvtC00YM8L2J1dHRvbj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBncmVlbkNhcmRzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBicm93bkNhcmRzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBibHVlQ2FyZHNcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGdyZWVuQ2FyZHNcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGJyb3duQ2FyZHNcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGJsdWVDYXJkc1xcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gZ3JlZW5DYXJkc1xcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gYnJvd25DYXJkc1xcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gYmx1ZUNhcmRzXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImN1cnJlbnQtY2FyZCBhbmNpZW50LWNhcmQgaW52aXNpYmxlXFxcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb21wbGV0ZS1kZWNrIGFuY2llbnQtY2FyZCBpbnZpc2libGVcXFwiPjwvZGl2PlxcbiAgICA8L21haW4+XFxuICAgIDxmb290ZXIgY2xhc3M9XFxcImZvb3RlclxcXCI+PC9mb290ZXI+XFxuXFxuICA8L2Rpdj5cXG5cXG5cXG48L2JvZHk+XFxuXFxuPC9odG1sPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=