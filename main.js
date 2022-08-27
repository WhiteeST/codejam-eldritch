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
let nextCard;
let colorTracker = {};

const easyBlueCards = ['blue3', 'blue4', 'blue5', 'blue10'];
const normalBlueCards = ['blue7', 'blue9', 'blue11', 'blue12'];
const hardBlueCards = ['blue1', 'blue2', 'blue6', 'blue8'];

const easyGreenCards = ['green1', 'green12', 'green16', 'green17', 'green18'];
const normalGreenCards = ['green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15'];
const hardGreenCards = ['green2', 'green3', 'green4', 'green5', 'green6'];

const easyBrownCards = ['brown11', 'brown12', 'brown13', 'brown14', 'brown21'];
const normalBrownCards = ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20'];
const hardBrownCards = ['brown6', 'brown7', 'brown8', 'brown9', 'brown10'];

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

const createTempColorDeck = (color, difficulty) => {
  let tempDeck = [];
  const colorCounter = requiredAllStagesCards[color === 'green' ? 0 : color === 'brown' ? 1 : 2];
  let easyColorCard;
  let normalColorCard;
  let hardColorCard;
  let sourceCards;
  let fullDifficultydeck;
  switch (color) {
    case 'green': easyColorCard = easyGreenCards.slice(0); normalColorCard = normalGreenCards.slice(0); sourceCards = Object.assign({}, _assets_MythicCards_green__WEBPACK_IMPORTED_MODULE_4__["default"]); hardColorCard = hardGreenCards.slice(0); break;
    case 'brown': easyColorCard = easyBrownCards.slice(0); normalColorCard = normalBrownCards.slice(0); sourceCards = Object.assign({}, _assets_MythicCards_brown__WEBPACK_IMPORTED_MODULE_5__["default"]); hardColorCard = hardBrownCards.slice(0); break;
    case 'blue': easyColorCard = easyBlueCards.slice(0); normalColorCard = normalBlueCards.slice(0); sourceCards = Object.assign({}, _assets_MythicCards_blue__WEBPACK_IMPORTED_MODULE_3__["default"]); hardColorCard = hardBlueCards.slice(0); break;
  }

  const mixDifficultyDeck = (deckArray) => {
    if (tempDeck.length < colorCounter) {
      while (tempDeck.length < colorCounter) {
        const cardId = Math.floor(Math.random() * deckArray.length);
        tempDeck.push(sourceCards[deckArray[cardId]]);
        deckArray[cardId] = deckArray[deckArray.length - 1];
        deckArray.pop();
      }
    }
  }
  switch (difficulty) {
    case 'Очень низкая':
      {
        easyColorCard.forEach(card => {
          if (tempDeck.length < colorCounter)
            tempDeck.push(sourceCards[card])
        })
        fullDifficultydeck = normalColorCard;
        break;
      }
    case 'Низкая':
      {
        fullDifficultydeck = ([...easyColorCard] + ',' + [...normalColorCard]).split(',');
        break;
      }
    case 'Средняя':
      {
        fullDifficultydeck = ([...easyColorCard] + ',' + [...normalColorCard] + ',' + [...hardColorCard]).split(',');
        break;
      }
    case 'Высокая':
      {
        fullDifficultydeck = ([...normalColorCard] + ',' + [...hardColorCard]).split(',');
        break;
      }
    case 'Очень высокая':
      {
        hardColorCard.forEach(card => {
          if (tempDeck.length < colorCounter)
            tempDeck.push(sourceCards[card])
        })
        fullDifficultydeck = normalColorCard;
        break;
      }
  }
  mixDifficultyDeck(fullDifficultydeck);
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
  console.log(difficultyMode)
  //узнаем кол-во необходимых карт для колоды
  resultDeck = [];
  requiredAllStagesCards = [
    parseInt(cardReserve[0].textContent) + parseInt(cardReserve[3].textContent) + parseInt(cardReserve[6].textContent), //зеленые
    parseInt(cardReserve[1].textContent) + parseInt(cardReserve[4].textContent) + parseInt(cardReserve[7].textContent), //коричневые
    parseInt(cardReserve[2].textContent) + parseInt(cardReserve[5].textContent) + parseInt(cardReserve[8].textContent)  //синие
  ];

  //берем все легкие + обычные, если не хватает и кладем их в tempDeck
  playDeck = [(createTempColorDeck('green', difficultyMode)), createTempColorDeck('brown', difficultyMode), createTempColorDeck('blue', difficultyMode)];

  playDeck.forEach((deck, index) => {
    deck.forEach(item => {
      colorTracker[item] = index === 0 ? 'green' : index === 1 ? 'brown' : 'blue';
    })
  })

  let stageOneDeck = [createSortedStageDeck('firstStage', 'greenCards'), createSortedStageDeck('firstStage', 'brownCards'), createSortedStageDeck('firstStage', 'blueCards')];
  let stageTwoDeck = [createSortedStageDeck('secondStage', 'greenCards'), createSortedStageDeck('secondStage', 'brownCards'), createSortedStageDeck('secondStage', 'blueCards')];
  let stageThreeDeck = [createSortedStageDeck('thirdStage', 'greenCards'), createSortedStageDeck('thirdStage', 'brownCards'), createSortedStageDeck('thirdStage', 'blueCards')];

  stageOneDeck = extractFromArray(stageOneDeck);
  stageTwoDeck = extractFromArray(stageTwoDeck);
  stageThreeDeck = extractFromArray(stageThreeDeck);

  const tempDeckArray = [stageOneDeck, stageTwoDeck, stageThreeDeck];

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

difficultyButton.forEach(difficulty => {
  difficulty.addEventListener('click', (event) => {
    difficultyButton.forEach(button => {
      button === event.target ? button.classList.add('picked-black') : button.classList.remove('picked-black');
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
    if (nextCard === undefined || nextCard === resultDeck.length || nextCard === 0) {
      ancientsArray.forEach(element => element.classList = 'ancient-card');//убираем picked у всех остальных
      ancient.classList.add('picked');
      completeDeck.classList.add('invisible');
      completeDeck.classList.remove('rotate');
      currentAncient = _data_ancients__WEBPACK_IMPORTED_MODULE_2__["default"][index].name;
      currentAncientId = index;
      if (currentAncient) {
        statusTrackerHandler();
      }
    }
  })
})

createDeckButton.addEventListener('click', () => {
  if (currentAncient && difficultyMode) {
    nextCard = 0;
    createDeckButton.classList.add('picked-black');
    currentCard.classList.add('invisible');
    completeDeck.classList.remove('invisible');
    completeDeck.classList.add('rotate')
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
    createDeckButton.classList.remove('picked-black');
    currentCard.classList.remove('invisible');
    currentCard.style.backgroundImage = `url('${resultDeck[nextCard]}')`;
    changeTrackerStatus(colorTracker[resultDeck[nextCard]]);
    nextCard++;
  }
})

currentCard.addEventListener('click', () => {
  if (nextCard < resultDeck.length) {
    const img = new Image();
    const imgSource = `${resultDeck[nextCard]}`;
    img.src = imgSource;
    img.onload = () => {
      currentCard.style.backgroundImage = `url('${resultDeck[nextCard]}')`;
      changeTrackerStatus(colorTracker[resultDeck[nextCard]]);
      nextCard++;
    };
  }
  else {
    currentCard.style.backgroundImage = null;
    currentCard.classList.add('invisible');
    completeDeck.classList.add('invisible');
    completeDeck.classList.remove('rotate');
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

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n  <div class=\"container\">\n    <header class=\"header\">\n      <div class=\"difficulty\">\n        <ul>\n          <li class=\"difficulty__item\">Очень низкая</li>\n          <li class=\"difficulty__item\">Низкая</li>\n          <li class=\"difficulty__item\">Средняя</li>\n          <li class=\"difficulty__item\">Высокая</li>\n          <li class=\"difficulty__item\">Очень высокая</li>\n        </ul>\n      </div>\n\n    </header>\n    <main class=\"main\">\n\n      <div class=\"status-tracker-container\">\n        <ul class=\"status-tracker__stage\">\n          <li>Этап <span>&#8544;</span></li>\n          <li>Этап <span>&#8545;</span></li>\n          <li>Этап <span>&#8546;</span></li>\n        </ul>\n        <div class=\"status-tracker\">\n          <div class=\"status-tracker_item greenCards\"></div>\n          <div class=\"status-tracker_item brownCards\"></div>\n          <div class=\"status-tracker_item blueCards\"></div>\n          <div class=\"status-tracker_item greenCards\"></div>\n          <div class=\"status-tracker_item brownCards\"></div>\n          <div class=\"status-tracker_item blueCards\"></div>\n          <div class=\"status-tracker_item greenCards\"></div>\n          <div class=\"status-tracker_item brownCards\"></div>\n          <div class=\"status-tracker_item blueCards\"></div>\n        </div>\n      </div>\n      <div class=\"complete-deck-container\">\n        <div class=\"button-container\"> <button class=\"create-deck\">Создать колоду</button></div>\n        <div class=\"current-card invisible\"></div>\n        <div class=\"complete-deck invisible\"></div>\n      </div>\n\n    </main>\n    <footer class=\"footer\"></footer>\n\n  </div>\n\n\n</body>\n\n</html>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0F6YXRob3RoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0N0aHVsdGh1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0lvZ1NvdGhvdGgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvQW5jaWVudHMvU2h1Yk5pZ2d1cmF0aC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9BbmNpZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWUzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlNS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWU2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlOC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWU5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjExLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjE0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjE3LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24yMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd241LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd244LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjEwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjEzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xNS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW42LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuNy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW45LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FuY2llbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQjtBQUNDO0FBQ3RCO0FBQzJDO0FBQ087QUFDRTtBQUNBOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQztBQUNBLHdDQUF3QyxzREFBWTtBQUNwRCx3Q0FBd0Msc0RBQVk7QUFDcEQsd0NBQXdDLHNEQUFZO0FBQ3BEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCw2Q0FBNkMsK0JBQStCLEVBQUUsaUVBQVUsRUFBRSx5Q0FBeUM7QUFDN0wsMERBQTBELDZDQUE2QywrQkFBK0IsRUFBRSxpRUFBVSxFQUFFLHlDQUF5QztBQUM3TCx3REFBd0QsNENBQTRDLCtCQUErQixFQUFFLGdFQUFTLEVBQUUsd0NBQXdDO0FBQ3hMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0RBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7OztBQUdEO0FBQ0Esc0RBQVk7QUFDWjtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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IiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5odG1sJztcbi8vIGltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXIvaGVscGVyJ1xuaW1wb3J0IGFuY2llbnRzRGF0YSBmcm9tICcuL2RhdGEvYW5jaWVudHMnO1xuaW1wb3J0IGJsdWVDYXJkcyBmcm9tICcuL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlJztcbmltcG9ydCBncmVlbkNhcmRzIGZyb20gJy4vYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuJztcbmltcG9ydCBicm93bkNhcmRzIGZyb20gJy4vYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duJztcblxuLy8gZnVuY3Rpb24gYSgpIHtcbi8vICAgcmV0dXJuIGhlbHBlcigxLCAyKTtcbi8vIH1cbi8vIGNvbnNvbGUubG9nKGEoKSlcbmNvbnN0IHN0YXR1c1RyYWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudEFuY2llbnQnKTtcbmNvbnN0IGNhcmRSZXNlcnZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXR1cy10cmFja2VyX2l0ZW0nKTtcbmNvbnN0IGRpZmZpY3VsdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlmZmljdWx0eV9faXRlbScpO1xuY29uc3QgY3JlYXRlRGVja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZGVjaycpO1xuY29uc3QgY3VycmVudENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1jYXJkJyk7XG5jb25zdCBjb21wbGV0ZURlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUtZGVjaycpO1xubGV0IGFuY2llbnRzQXJyYXk7XG5sZXQgY3VycmVudEFuY2llbnRJZDtcbmxldCBjdXJyZW50QW5jaWVudDtcbmxldCBkaWZmaWN1bHR5TW9kZTtcbmxldCByZXF1aXJlZEFsbFN0YWdlc0NhcmRzO1xubGV0IHBsYXlEZWNrO1xubGV0IHJlc3VsdERlY2sgPSBbXTtcbmxldCBuZXh0Q2FyZDtcbmxldCBjb2xvclRyYWNrZXIgPSB7fTtcblxuY29uc3QgZWFzeUJsdWVDYXJkcyA9IFsnYmx1ZTMnLCAnYmx1ZTQnLCAnYmx1ZTUnLCAnYmx1ZTEwJ107XG5jb25zdCBub3JtYWxCbHVlQ2FyZHMgPSBbJ2JsdWU3JywgJ2JsdWU5JywgJ2JsdWUxMScsICdibHVlMTInXTtcbmNvbnN0IGhhcmRCbHVlQ2FyZHMgPSBbJ2JsdWUxJywgJ2JsdWUyJywgJ2JsdWU2JywgJ2JsdWU4J107XG5cbmNvbnN0IGVhc3lHcmVlbkNhcmRzID0gWydncmVlbjEnLCAnZ3JlZW4xMicsICdncmVlbjE2JywgJ2dyZWVuMTcnLCAnZ3JlZW4xOCddO1xuY29uc3Qgbm9ybWFsR3JlZW5DYXJkcyA9IFsnZ3JlZW43JywgJ2dyZWVuOCcsICdncmVlbjknLCAnZ3JlZW4xMCcsICdncmVlbjExJywgJ2dyZWVuMTMnLCAnZ3JlZW4xNCcsICdncmVlbjE1J107XG5jb25zdCBoYXJkR3JlZW5DYXJkcyA9IFsnZ3JlZW4yJywgJ2dyZWVuMycsICdncmVlbjQnLCAnZ3JlZW41JywgJ2dyZWVuNiddO1xuXG5jb25zdCBlYXN5QnJvd25DYXJkcyA9IFsnYnJvd24xMScsICdicm93bjEyJywgJ2Jyb3duMTMnLCAnYnJvd24xNCcsICdicm93bjIxJ107XG5jb25zdCBub3JtYWxCcm93bkNhcmRzID0gWydicm93bjEnLCAnYnJvd24yJywgJ2Jyb3duMycsICdicm93bjQnLCAnYnJvd241JywgJ2Jyb3duMTUnLCAnYnJvd24xNicsICdicm93bjE3JywgJ2Jyb3duMTgnLCAnYnJvd24xOScsICdicm93bjIwJ107XG5jb25zdCBoYXJkQnJvd25DYXJkcyA9IFsnYnJvd242JywgJ2Jyb3duNycsICdicm93bjgnLCAnYnJvd245JywgJ2Jyb3duMTAnXTtcblxuY29uc3Qgc3RhdHVzVHJhY2tlclN0YWdlSGFuZGxlciA9IChzdGFnZSkgPT4ge1xuICBsZXQgaW5kZXggPSAwO1xuICBzd2l0Y2ggKHN0YWdlKSB7XG4gICAgY2FzZSAnZmlyc3RTdGFnZSc6IGluZGV4ID0gMDsgYnJlYWs7XG4gICAgY2FzZSAnc2Vjb25kU3RhZ2UnOiBpbmRleCA9IDM7IGJyZWFrO1xuICAgIGNhc2UgJ3RoaXJkU3RhZ2UnOiBpbmRleCA9IDY7IGJyZWFrO1xuICB9XG4gIGNhcmRSZXNlcnZlWzAgKyBpbmRleF0udGV4dENvbnRlbnQgPSAoYW5jaWVudHNEYXRhW2N1cnJlbnRBbmNpZW50SWRdKVtzdGFnZV0uZ3JlZW5DYXJkcztcbiAgY2FyZFJlc2VydmVbMSArIGluZGV4XS50ZXh0Q29udGVudCA9IChhbmNpZW50c0RhdGFbY3VycmVudEFuY2llbnRJZF0pW3N0YWdlXS5icm93bkNhcmRzO1xuICBjYXJkUmVzZXJ2ZVsyICsgaW5kZXhdLnRleHRDb250ZW50ID0gKGFuY2llbnRzRGF0YVtjdXJyZW50QW5jaWVudElkXSlbc3RhZ2VdLmJsdWVDYXJkcztcbn1cblxuXG5jb25zdCBzdGF0dXNUcmFja2VySGFuZGxlciA9ICgpID0+IHtcbiAgc3RhdHVzVHJhY2tlclN0YWdlSGFuZGxlcignZmlyc3RTdGFnZScpO1xuICBzdGF0dXNUcmFja2VyU3RhZ2VIYW5kbGVyKCdzZWNvbmRTdGFnZScpO1xuICBzdGF0dXNUcmFja2VyU3RhZ2VIYW5kbGVyKCd0aGlyZFN0YWdlJyk7XG59XG5cbmNvbnN0IGNyZWF0ZVRlbXBDb2xvckRlY2sgPSAoY29sb3IsIGRpZmZpY3VsdHkpID0+IHtcbiAgbGV0IHRlbXBEZWNrID0gW107XG4gIGNvbnN0IGNvbG9yQ291bnRlciA9IHJlcXVpcmVkQWxsU3RhZ2VzQ2FyZHNbY29sb3IgPT09ICdncmVlbicgPyAwIDogY29sb3IgPT09ICdicm93bicgPyAxIDogMl07XG4gIGxldCBlYXN5Q29sb3JDYXJkO1xuICBsZXQgbm9ybWFsQ29sb3JDYXJkO1xuICBsZXQgaGFyZENvbG9yQ2FyZDtcbiAgbGV0IHNvdXJjZUNhcmRzO1xuICBsZXQgZnVsbERpZmZpY3VsdHlkZWNrO1xuICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgY2FzZSAnZ3JlZW4nOiBlYXN5Q29sb3JDYXJkID0gZWFzeUdyZWVuQ2FyZHMuc2xpY2UoMCk7IG5vcm1hbENvbG9yQ2FyZCA9IG5vcm1hbEdyZWVuQ2FyZHMuc2xpY2UoMCk7IHNvdXJjZUNhcmRzID0gT2JqZWN0LmFzc2lnbih7fSwgZ3JlZW5DYXJkcyk7IGhhcmRDb2xvckNhcmQgPSBoYXJkR3JlZW5DYXJkcy5zbGljZSgwKTsgYnJlYWs7XG4gICAgY2FzZSAnYnJvd24nOiBlYXN5Q29sb3JDYXJkID0gZWFzeUJyb3duQ2FyZHMuc2xpY2UoMCk7IG5vcm1hbENvbG9yQ2FyZCA9IG5vcm1hbEJyb3duQ2FyZHMuc2xpY2UoMCk7IHNvdXJjZUNhcmRzID0gT2JqZWN0LmFzc2lnbih7fSwgYnJvd25DYXJkcyk7IGhhcmRDb2xvckNhcmQgPSBoYXJkQnJvd25DYXJkcy5zbGljZSgwKTsgYnJlYWs7XG4gICAgY2FzZSAnYmx1ZSc6IGVhc3lDb2xvckNhcmQgPSBlYXN5Qmx1ZUNhcmRzLnNsaWNlKDApOyBub3JtYWxDb2xvckNhcmQgPSBub3JtYWxCbHVlQ2FyZHMuc2xpY2UoMCk7IHNvdXJjZUNhcmRzID0gT2JqZWN0LmFzc2lnbih7fSwgYmx1ZUNhcmRzKTsgaGFyZENvbG9yQ2FyZCA9IGhhcmRCbHVlQ2FyZHMuc2xpY2UoMCk7IGJyZWFrO1xuICB9XG5cbiAgY29uc3QgbWl4RGlmZmljdWx0eURlY2sgPSAoZGVja0FycmF5KSA9PiB7XG4gICAgaWYgKHRlbXBEZWNrLmxlbmd0aCA8IGNvbG9yQ291bnRlcikge1xuICAgICAgd2hpbGUgKHRlbXBEZWNrLmxlbmd0aCA8IGNvbG9yQ291bnRlcikge1xuICAgICAgICBjb25zdCBjYXJkSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGVtcERlY2sucHVzaChzb3VyY2VDYXJkc1tkZWNrQXJyYXlbY2FyZElkXV0pO1xuICAgICAgICBkZWNrQXJyYXlbY2FyZElkXSA9IGRlY2tBcnJheVtkZWNrQXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgIGRlY2tBcnJheS5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3dpdGNoIChkaWZmaWN1bHR5KSB7XG4gICAgY2FzZSAn0J7Rh9C10L3RjCDQvdC40LfQutCw0Y8nOlxuICAgICAge1xuICAgICAgICBlYXN5Q29sb3JDYXJkLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgaWYgKHRlbXBEZWNrLmxlbmd0aCA8IGNvbG9yQ291bnRlcilcbiAgICAgICAgICAgIHRlbXBEZWNrLnB1c2goc291cmNlQ2FyZHNbY2FyZF0pXG4gICAgICAgIH0pXG4gICAgICAgIGZ1bGxEaWZmaWN1bHR5ZGVjayA9IG5vcm1hbENvbG9yQ2FyZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAn0J3QuNC30LrQsNGPJzpcbiAgICAgIHtcbiAgICAgICAgZnVsbERpZmZpY3VsdHlkZWNrID0gKFsuLi5lYXN5Q29sb3JDYXJkXSArICcsJyArIFsuLi5ub3JtYWxDb2xvckNhcmRdKS5zcGxpdCgnLCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlICfQodGA0LXQtNC90Y/Rjyc6XG4gICAgICB7XG4gICAgICAgIGZ1bGxEaWZmaWN1bHR5ZGVjayA9IChbLi4uZWFzeUNvbG9yQ2FyZF0gKyAnLCcgKyBbLi4ubm9ybWFsQ29sb3JDYXJkXSArICcsJyArIFsuLi5oYXJkQ29sb3JDYXJkXSkuc3BsaXQoJywnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSAn0JLRi9GB0L7QutCw0Y8nOlxuICAgICAge1xuICAgICAgICBmdWxsRGlmZmljdWx0eWRlY2sgPSAoWy4uLm5vcm1hbENvbG9yQ2FyZF0gKyAnLCcgKyBbLi4uaGFyZENvbG9yQ2FyZF0pLnNwbGl0KCcsJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgJ9Ce0YfQtdC90Ywg0LLRi9GB0L7QutCw0Y8nOlxuICAgICAge1xuICAgICAgICBoYXJkQ29sb3JDYXJkLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgaWYgKHRlbXBEZWNrLmxlbmd0aCA8IGNvbG9yQ291bnRlcilcbiAgICAgICAgICAgIHRlbXBEZWNrLnB1c2goc291cmNlQ2FyZHNbY2FyZF0pXG4gICAgICAgIH0pXG4gICAgICAgIGZ1bGxEaWZmaWN1bHR5ZGVjayA9IG5vcm1hbENvbG9yQ2FyZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH1cbiAgbWl4RGlmZmljdWx0eURlY2soZnVsbERpZmZpY3VsdHlkZWNrKTtcbiAgcmV0dXJuIHRlbXBEZWNrO1xufVxuXG5jb25zdCBjcmVhdGVTb3J0ZWRTdGFnZURlY2sgPSAoc3RhZ2UsIGRlY2tDb2xvcikgPT4ge1xuICBsZXQgc3RhZ2VEZWNrID0gW107XG4gIGxldCBzdGFnZUNhcmRDb3VudGVyID0gMDtcbiAgY29uc3QgYXJyYXlDb2xvciA9IGRlY2tDb2xvciA9PT0gJ2dyZWVuQ2FyZHMnID8gMCA6IGRlY2tDb2xvciA9PT0gJ2Jyb3duQ2FyZHMnID8gMSA6IDI7XG4gIHdoaWxlIChzdGFnZUNhcmRDb3VudGVyIDwgYW5jaWVudHNEYXRhW2N1cnJlbnRBbmNpZW50SWRdW3N0YWdlXVtkZWNrQ29sb3JdKSB7XG4gICAgY29uc3QgY2FyZElkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxheURlY2tbYXJyYXlDb2xvcl0ubGVuZ3RoKTtcbiAgICBzdGFnZURlY2sucHVzaChwbGF5RGVja1thcnJheUNvbG9yXVtjYXJkSWRdKTtcbiAgICBwbGF5RGVja1thcnJheUNvbG9yXVtjYXJkSWRdID0gcGxheURlY2tbYXJyYXlDb2xvcl1bcGxheURlY2tbYXJyYXlDb2xvcl0ubGVuZ3RoIC0gMV07XG4gICAgcGxheURlY2tbYXJyYXlDb2xvcl0ucG9wKCk7XG4gICAgc3RhZ2VDYXJkQ291bnRlcisrO1xuICB9XG4gIHJldHVybiBzdGFnZURlY2s7XG59XG5cbmNvbnN0IGV4dHJhY3RGcm9tQXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgbGV0IHN0cmluZ0Zyb21hcnJheSA9ICcnO1xuICBpZiAoYXJyYXkuaXNBcnJheSlcbiAgICBleHRyYWN0RnJvbUFycmF5KGFycmF5KTtcbiAgc3RyaW5nRnJvbWFycmF5ICs9IFsuLi5hcnJheV07XG4gIHJldHVybiBzdHJpbmdGcm9tYXJyYXkuc3BsaXQoJywnKVxufVxuXG5jb25zdCBjcmVhdGVEZWNrID0gKGRpZmZpY3VsdHlNb2RlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRpZmZpY3VsdHlNb2RlKVxuICAvL9GD0LfQvdCw0LXQvCDQutC+0Lst0LLQviDQvdC10L7QsdGF0L7QtNC40LzRi9GFINC60LDRgNGCINC00LvRjyDQutC+0LvQvtC00YtcbiAgcmVzdWx0RGVjayA9IFtdO1xuICByZXF1aXJlZEFsbFN0YWdlc0NhcmRzID0gW1xuICAgIHBhcnNlSW50KGNhcmRSZXNlcnZlWzBdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzNdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzZdLnRleHRDb250ZW50KSwgLy/Qt9C10LvQtdC90YvQtVxuICAgIHBhcnNlSW50KGNhcmRSZXNlcnZlWzFdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzRdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzddLnRleHRDb250ZW50KSwgLy/QutC+0YDQuNGH0L3QtdCy0YvQtVxuICAgIHBhcnNlSW50KGNhcmRSZXNlcnZlWzJdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzVdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzhdLnRleHRDb250ZW50KSAgLy/RgdC40L3QuNC1XG4gIF07XG5cbiAgLy/QsdC10YDQtdC8INCy0YHQtSDQu9C10LPQutC40LUgKyDQvtCx0YvRh9C90YvQtSwg0LXRgdC70Lgg0L3QtSDRhdCy0LDRgtCw0LXRgiDQuCDQutC70LDQtNC10Lwg0LjRhSDQsiB0ZW1wRGVja1xuICBwbGF5RGVjayA9IFsoY3JlYXRlVGVtcENvbG9yRGVjaygnZ3JlZW4nLCBkaWZmaWN1bHR5TW9kZSkpLCBjcmVhdGVUZW1wQ29sb3JEZWNrKCdicm93bicsIGRpZmZpY3VsdHlNb2RlKSwgY3JlYXRlVGVtcENvbG9yRGVjaygnYmx1ZScsIGRpZmZpY3VsdHlNb2RlKV07XG5cbiAgcGxheURlY2suZm9yRWFjaCgoZGVjaywgaW5kZXgpID0+IHtcbiAgICBkZWNrLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb2xvclRyYWNrZXJbaXRlbV0gPSBpbmRleCA9PT0gMCA/ICdncmVlbicgOiBpbmRleCA9PT0gMSA/ICdicm93bicgOiAnYmx1ZSc7XG4gICAgfSlcbiAgfSlcblxuICBsZXQgc3RhZ2VPbmVEZWNrID0gW2NyZWF0ZVNvcnRlZFN0YWdlRGVjaygnZmlyc3RTdGFnZScsICdncmVlbkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnZmlyc3RTdGFnZScsICdicm93bkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnZmlyc3RTdGFnZScsICdibHVlQ2FyZHMnKV07XG4gIGxldCBzdGFnZVR3b0RlY2sgPSBbY3JlYXRlU29ydGVkU3RhZ2VEZWNrKCdzZWNvbmRTdGFnZScsICdncmVlbkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnc2Vjb25kU3RhZ2UnLCAnYnJvd25DYXJkcycpLCBjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3NlY29uZFN0YWdlJywgJ2JsdWVDYXJkcycpXTtcbiAgbGV0IHN0YWdlVGhyZWVEZWNrID0gW2NyZWF0ZVNvcnRlZFN0YWdlRGVjaygndGhpcmRTdGFnZScsICdncmVlbkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygndGhpcmRTdGFnZScsICdicm93bkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygndGhpcmRTdGFnZScsICdibHVlQ2FyZHMnKV07XG5cbiAgc3RhZ2VPbmVEZWNrID0gZXh0cmFjdEZyb21BcnJheShzdGFnZU9uZURlY2spO1xuICBzdGFnZVR3b0RlY2sgPSBleHRyYWN0RnJvbUFycmF5KHN0YWdlVHdvRGVjayk7XG4gIHN0YWdlVGhyZWVEZWNrID0gZXh0cmFjdEZyb21BcnJheShzdGFnZVRocmVlRGVjayk7XG5cbiAgY29uc3QgdGVtcERlY2tBcnJheSA9IFtzdGFnZU9uZURlY2ssIHN0YWdlVHdvRGVjaywgc3RhZ2VUaHJlZURlY2tdO1xuXG4gIHRlbXBEZWNrQXJyYXkuZm9yRWFjaChkZWNrID0+IHtcbiAgICB3aGlsZSAoZGVjay5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNhcmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlY2subGVuZ3RoKTtcbiAgICAgIGlmIChkZWNrW2NhcmRJZF0gIT0gXCJcIilcbiAgICAgICAgcmVzdWx0RGVjay5wdXNoKGRlY2tbY2FyZElkXSk7XG4gICAgICBkZWNrW2NhcmRJZF0gPSBkZWNrW2RlY2subGVuZ3RoIC0gMV07XG4gICAgICBkZWNrLnBvcCgpO1xuICAgIH1cbiAgfSlcbn1cblxuZGlmZmljdWx0eUJ1dHRvbi5mb3JFYWNoKGRpZmZpY3VsdHkgPT4ge1xuICBkaWZmaWN1bHR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZGlmZmljdWx0eUJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24gPT09IGV2ZW50LnRhcmdldCA/IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwaWNrZWQtYmxhY2snKSA6IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwaWNrZWQtYmxhY2snKTtcbiAgICB9KVxuICAgIGRpZmZpY3VsdHlNb2RlID0gZGlmZmljdWx0eS50ZXh0Q29udGVudDtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50QW5jaWVudCk7XG4gICAgLy8gY29uc29sZS5sb2coZGlmZmljdWx0eU1vZGUpO1xuICB9KVxufSlcblxuXG4vL9CU0L7QsdCw0LLQu9GP0LXQvCDQtNGA0LXQstC90LjRhSDQsiBoZWFkZXJcbmFuY2llbnRzRGF0YS5mb3JFYWNoKGFuY2llbnQgPT4ge1xuICBjb25zdCBhbmNpZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBhbmNpZW50Q2FyZC5zcmMgPSAoYCR7YW5jaWVudC5jYXJkRmFjZX1gKTtcbiAgYW5jaWVudENhcmQuY2xhc3NMaXN0LmFkZCgnYW5jaWVudC1jYXJkJyk7XG4gIGFuY2llbnRDYXJkLnRhYkluZGV4ID0gJzAnXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmFwcGVuZChhbmNpZW50Q2FyZClcbiAgYW5jaWVudHNBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xufSlcblxuYW5jaWVudHNBcnJheS5mb3JFYWNoKChhbmNpZW50LCBpbmRleCkgPT4ge1xuICBhbmNpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuZXh0Q2FyZCA9PT0gdW5kZWZpbmVkIHx8IG5leHRDYXJkID09PSByZXN1bHREZWNrLmxlbmd0aCB8fCBuZXh0Q2FyZCA9PT0gMCkge1xuICAgICAgYW5jaWVudHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QgPSAnYW5jaWVudC1jYXJkJyk7Ly/Rg9Cx0LjRgNCw0LXQvCBwaWNrZWQg0YMg0LLRgdC10YUg0L7RgdGC0LDQu9GM0L3Ri9GFXG4gICAgICBhbmNpZW50LmNsYXNzTGlzdC5hZGQoJ3BpY2tlZCcpO1xuICAgICAgY29tcGxldGVEZWNrLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgY29tcGxldGVEZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xuICAgICAgY3VycmVudEFuY2llbnQgPSBhbmNpZW50c0RhdGFbaW5kZXhdLm5hbWU7XG4gICAgICBjdXJyZW50QW5jaWVudElkID0gaW5kZXg7XG4gICAgICBpZiAoY3VycmVudEFuY2llbnQpIHtcbiAgICAgICAgc3RhdHVzVHJhY2tlckhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59KVxuXG5jcmVhdGVEZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoY3VycmVudEFuY2llbnQgJiYgZGlmZmljdWx0eU1vZGUpIHtcbiAgICBuZXh0Q2FyZCA9IDA7XG4gICAgY3JlYXRlRGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdwaWNrZWQtYmxhY2snKTtcbiAgICBjdXJyZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICBjb21wbGV0ZURlY2suY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgY29tcGxldGVEZWNrLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpXG4gICAgc3RhdHVzVHJhY2tlckhhbmRsZXIoKTtcbiAgICBjcmVhdGVEZWNrKGRpZmZpY3VsdHlNb2RlKTtcbiAgfVxufSlcblxuY29uc3QgY2hhbmdlVHJhY2tlclN0YXR1cyA9IChjb2xvcikgPT4ge1xuICBsZXQgaW5kZXggPSAwO1xuICBjb25zdCBjdXJyZW50Q29sb3IgPSBjb2xvciA9PT0gJ2dyZWVuJyA/IDAgOiBjb2xvciA9PT0gJ2Jyb3duJyA/IDEgOiAyO1xuICBpZiAoY2FyZFJlc2VydmVbY3VycmVudENvbG9yICsgaW5kZXhdLnRleHRDb250ZW50ID09PSAnMCcpXG4gICAgaW5kZXggPSAzO1xuICBpZiAoY2FyZFJlc2VydmVbY3VycmVudENvbG9yICsgaW5kZXhdLnRleHRDb250ZW50ID09PSAnMCcpXG4gICAgaW5kZXggPSA2O1xuICBjYXJkUmVzZXJ2ZVtjdXJyZW50Q29sb3IgKyBpbmRleF0udGV4dENvbnRlbnQgPSBwYXJzZUludChjYXJkUmVzZXJ2ZVtjdXJyZW50Q29sb3IgKyBpbmRleF0udGV4dENvbnRlbnQpIC0gMTtcbn1cblxuY29tcGxldGVEZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAobmV4dENhcmQgPT09IDApIHtcbiAgICBjcmVhdGVEZWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BpY2tlZC1ibGFjaycpO1xuICAgIGN1cnJlbnRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgIGN1cnJlbnRDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cmVzdWx0RGVja1tuZXh0Q2FyZF19JylgO1xuICAgIGNoYW5nZVRyYWNrZXJTdGF0dXMoY29sb3JUcmFja2VyW3Jlc3VsdERlY2tbbmV4dENhcmRdXSk7XG4gICAgbmV4dENhcmQrKztcbiAgfVxufSlcblxuY3VycmVudENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChuZXh0Q2FyZCA8IHJlc3VsdERlY2subGVuZ3RoKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgaW1nU291cmNlID0gYCR7cmVzdWx0RGVja1tuZXh0Q2FyZF19YDtcbiAgICBpbWcuc3JjID0gaW1nU291cmNlO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjdXJyZW50Q2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jlc3VsdERlY2tbbmV4dENhcmRdfScpYDtcbiAgICAgIGNoYW5nZVRyYWNrZXJTdGF0dXMoY29sb3JUcmFja2VyW3Jlc3VsdERlY2tbbmV4dENhcmRdXSk7XG4gICAgICBuZXh0Q2FyZCsrO1xuICAgIH07XG4gIH1cbiAgZWxzZSB7XG4gICAgY3VycmVudENhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbnVsbDtcbiAgICBjdXJyZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICBjb21wbGV0ZURlY2suY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgY29tcGxldGVEZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xuICB9XG59KSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNzZjYzYwZTZmMmI5YmIxNjdjZTc1ZjM0NTdlZDIxOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTdiZmQwMjk3NDRkYzlmODdjMWFjNWY0MmQ5MDQwMmEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM1Yjc3MTdiZmY5NzNjZGEyN2JlZDIzMjU3ZTcyMjM0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2OGM0MjcyZTAwYzk1OTZlNjViMTgwNmIxODU5OGE0My5wbmdcIjsiLCJpbXBvcnQgYXphdGhvdGggZnJvbSAnLi9BemF0aG90aC5wbmcnO1xyXG5pbXBvcnQgY3RodWxodSBmcm9tICcuL0N0aHVsdGh1LnBuZyc7XHJcbmltcG9ydCBpb2dTb3Rob3RoIGZyb20gJy4vSW9nU290aG90aC5wbmcnO1xyXG5pbXBvcnQgc2h1Yk5pZ2d1cmF0aCBmcm9tICcuL1NodWJOaWdndXJhdGgucG5nJztcclxuXHJcbmNvbnN0IGFuY2llbnRzID0ge1xyXG4gIGF6YXRob3RoLFxyXG4gIGN0aHVsaHUsXHJcbiAgaW9nU290aG90aCxcclxuICBzaHViTmlnZ3VyYXRoXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuY2llbnRzIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5YzhlNWViNTBkYzc2NjZmMWFhM2QyZjE2NTA2YzMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNjFjOWY3MzQ5MmQ4Y2Q3MDI3Y2IxM2U4M2JiZWQ3Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjdlNjU1MmE5MmU0Yjg3ODEwN2FjYjdhMGU3YTI0M2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIwNGY5MTYwMDgzZTUyOWFiNzYzMWE0NzVjMDFhZTY2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzY2MzNTJjZGM4ZmFkZTVkYWQ0YzMxYzc4OTkyYjg0Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmRkMWQxMGZmNTEzNzc0ZWI4NDEwYmU2NTk4YmU4M2MucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYwOWYwZjcxNWU1MjVhMGI1MGVjYjA3ODlhYTJlMTBmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlM2U4NzkyNjIyYjBjNzVjNzhjMWMwYjc1N2EwNDFmYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2YzMjNjOThhM2Y1NDYzMmE2NmNkYjFjOTVkMWE1NTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRjZGIxYmQ2NDEzNzJlMmQwZjc0NmJmZmViODE5NjNjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMmE5ZWVjNjg1MTg5NTFmYzE4ZTUwZWRjNTcxYWQ4MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDMzNzE5MTFmOGYwZDg0YjU1ODU0N2ExMDBmOTdlNTYucG5nXCI7IiwiaW1wb3J0IGJsdWUxIGZyb20gJy4vYmx1ZTEucG5nJztcclxuaW1wb3J0IGJsdWUyIGZyb20gJy4vYmx1ZTIucG5nJztcclxuaW1wb3J0IGJsdWUzIGZyb20gJy4vYmx1ZTMucG5nJztcclxuaW1wb3J0IGJsdWU0IGZyb20gJy4vYmx1ZTQucG5nJztcclxuaW1wb3J0IGJsdWU1IGZyb20gJy4vYmx1ZTUucG5nJztcclxuaW1wb3J0IGJsdWU2IGZyb20gJy4vYmx1ZTYucG5nJztcclxuaW1wb3J0IGJsdWU3IGZyb20gJy4vYmx1ZTcucG5nJztcclxuaW1wb3J0IGJsdWU4IGZyb20gJy4vYmx1ZTgucG5nJztcclxuaW1wb3J0IGJsdWU5IGZyb20gJy4vYmx1ZTkucG5nJztcclxuaW1wb3J0IGJsdWUxMCBmcm9tICcuL2JsdWUxMC5wbmcnO1xyXG5pbXBvcnQgYmx1ZTExIGZyb20gJy4vYmx1ZTExLnBuZyc7XHJcbmltcG9ydCBibHVlMTIgZnJvbSAnLi9ibHVlMTIucG5nJztcclxuXHJcbmNvbnN0IGJsdWVDYXJkcyA9IHtcclxuICBibHVlMSxcclxuICBibHVlMixcclxuICBibHVlMyxcclxuICBibHVlNCxcclxuICBibHVlNSxcclxuICBibHVlNixcclxuICBibHVlNyxcclxuICBibHVlOCxcclxuICBibHVlOSxcclxuICBibHVlMTAsXHJcbiAgYmx1ZTExLFxyXG4gIGJsdWUxMixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmx1ZUNhcmRzIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFjODVlN2RiOWFiMzYwZmUyMzVhYTI0ODgzN2YwZTVkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MDMwNjhmNDRmOTE1MzUzNGY5Yzc0NDhiYzk0ZGVmOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTU3ZmQwYTkyNDQ0Y2MyYTI0NWY0N2U0NzM5ZDdhNTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkyMGIxNDA5ZDNmN2QwMDZlNzY0NzI3MWUzYTNkYWNiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhOGQ3N2ZmNWI1ZWFhNTM0Yjk2OGY5ODg4NmQxZTM3MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjVkMjFlMTk2NWQ4ZWM4MDhiYzJkYzkxNmYyNTc4ZTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAzNmY4ZjkxZWNjZDBlOGY5NzA4MDg4NTM3MmRjZjJiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxZmQ2MWJiZDExMTk4NmEwOTY1YWI3YTNkOWMzOGViNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmE1M2NjMDRhMmQ2Y2JiNjM2NzdmMjAyMWNlMGE1MWMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM1MzdiZmIyY2QyODRjOTY2N2FlNjc1NmIyNzFiN2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxOTk4NDE1MjFjNTU5NDBkMGQwM2ZjYWRhOWFkNTE5NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzQ0NTc5NTA1ZDBkM2NjZmQ3YzhmMDY5YTg0MWYzZjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjExODJhOGY4MGJkMjI3MmIzZDA3YzJiMDE4NTdhYTYxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzYThlNzI4NzllMTFjMzE1YzU5ZDRjYWU2OWI0MzkxYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2FhYmFiY2FiMjFlMDg1MTBjMjc2MjQ5ZWY4ZTg4MTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUzODdiNjRhNTM3YTBmYjI1Yzg0YTgxMDE4MDMzZDE5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MDlmODdmODJjMTQ2YWIzMTg5YTA1YTNmYTQ1OGI1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjM0NTNmOTcwYzRhMzg4ZjhiNjhiMDZmNDAwYTRjY2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdkYTUwNTA0MjBiMTRkNjdhNDgxZTQ1M2QxM2U3MGZjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMTI2ZmNkOTY1YmUzYjQyOGRjYWNlNThlNjJhNzBlMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2Q2OWEwMWNkZDU2MTc1ZjMwNGVjZjU0NjdlNWRmYzIucG5nXCI7IiwiaW1wb3J0IGJyb3duMSBmcm9tICcuL2Jyb3duMS5wbmcnO1xyXG5pbXBvcnQgYnJvd24yIGZyb20gJy4vYnJvd24yLnBuZyc7XHJcbmltcG9ydCBicm93bjMgZnJvbSAnLi9icm93bjMucG5nJztcclxuaW1wb3J0IGJyb3duNCBmcm9tICcuL2Jyb3duNC5wbmcnO1xyXG5pbXBvcnQgYnJvd241IGZyb20gJy4vYnJvd241LnBuZyc7XHJcbmltcG9ydCBicm93bjYgZnJvbSAnLi9icm93bjYucG5nJztcclxuaW1wb3J0IGJyb3duNyBmcm9tICcuL2Jyb3duNy5wbmcnO1xyXG5pbXBvcnQgYnJvd244IGZyb20gJy4vYnJvd244LnBuZyc7XHJcbmltcG9ydCBicm93bjkgZnJvbSAnLi9icm93bjkucG5nJztcclxuaW1wb3J0IGJyb3duMTAgZnJvbSAnLi9icm93bjEwLnBuZyc7XHJcbmltcG9ydCBicm93bjExIGZyb20gJy4vYnJvd24xMS5wbmcnO1xyXG5pbXBvcnQgYnJvd24xMiBmcm9tICcuL2Jyb3duMTIucG5nJztcclxuaW1wb3J0IGJyb3duMTMgZnJvbSAnLi9icm93bjEzLnBuZyc7XHJcbmltcG9ydCBicm93bjE0IGZyb20gJy4vYnJvd24xNC5wbmcnO1xyXG5pbXBvcnQgYnJvd24xNSBmcm9tICcuL2Jyb3duMTUucG5nJztcclxuaW1wb3J0IGJyb3duMTYgZnJvbSAnLi9icm93bjE2LnBuZyc7XHJcbmltcG9ydCBicm93bjE3IGZyb20gJy4vYnJvd24xNy5wbmcnO1xyXG5pbXBvcnQgYnJvd24xOCBmcm9tICcuL2Jyb3duMTgucG5nJztcclxuaW1wb3J0IGJyb3duMTkgZnJvbSAnLi9icm93bjE5LnBuZyc7XHJcbmltcG9ydCBicm93bjIwIGZyb20gJy4vYnJvd24yMC5wbmcnO1xyXG5pbXBvcnQgYnJvd24yMSBmcm9tICcuL2Jyb3duMjEucG5nJztcclxuXHJcbmNvbnN0IGJyb3duQ2FyZHMgPSB7XHJcbiAgYnJvd24xLFxyXG4gIGJyb3duMixcclxuICBicm93bjMsXHJcbiAgYnJvd240LFxyXG4gIGJyb3duNSxcclxuICBicm93bjYsXHJcbiAgYnJvd243LFxyXG4gIGJyb3duOCxcclxuICBicm93bjksXHJcbiAgYnJvd24xMCxcclxuICBicm93bjExLFxyXG4gIGJyb3duMTIsXHJcbiAgYnJvd24xMyxcclxuICBicm93bjE0LFxyXG4gIGJyb3duMTUsXHJcbiAgYnJvd24xNixcclxuICBicm93bjE3LFxyXG4gIGJyb3duMTgsXHJcbiAgYnJvd24xOSxcclxuICBicm93bjIwLFxyXG4gIGJyb3duMjEsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyb3duQ2FyZHMiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWU5MjE4ZjEzZDI2Njg0Njk0NjlmYzU1ZmRlNTY1YjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc2NmJlYjk3M2ZjNzZhYzk1NjRlNTgxZDM1YzAwNGFmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMDVmZGIzYjA5YWQ5MDljNTk4ZjIzYmM5ODZhNGY3Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjc4NmIwYTVlMGFhZjg4NGMyN2IwNzg5NDAwM2RlZmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIzZTMyNDNhZDM5MjdiYTY2ZGE3YmJiNzRlMDNjZmI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMGI2YjFiZTgwYmVmNjkzMmFiMDc2NTBiMTY1NWY1ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjM2Nzc3NjZjZDNhNGNlYThkYTBiZGFhMjAxZmY0MTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwOGUwYWVjYWNjZjVmZjg5NmZiOTc5NTdkMjE3YWEzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwZWJlYTFmNWI1MzZhMGI4NTc2NWFmM2Y1NDExMjk3My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjY4ZWRiZGMyN2UwMTZkMDZhNTIyZGE1NTY3NzE5YWEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFhMWI0ZGExNzI3NDAwMGNlM2E4OTE4MTQ1NjA0MDNlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNGE2ZGUxYzUzZjBjYzE0YmI5NTU3MzdmOTI2YTE4NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDlkOWEzZGM4MzdhNDEwMWZjNjEyMDdhZDEyMGMxOWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA2MzRiYjQxNGUxMzYwNjZkNDZmMGQxMzcwOWNlZTQ0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTA3MDQ2YWQxNzkxNGVjMDRkMDhlNGFhMDFlM2Y5Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjlkODIzOGM2NzcwYmRjOTdmNzNjNDc4MTA5YTEyODkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJjNWY4M2VkN2NlZDFiODMyNDk0YTAyY2U2NzgyNWI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYzM2ODYzMWFjODllNWJmMDg5MTJhOTRkMDVlZDYyOC5wbmdcIjsiLCJpbXBvcnQgZ3JlZW4xIGZyb20gJy4vZ3JlZW4xLnBuZyc7XHJcbmltcG9ydCBncmVlbjIgZnJvbSAnLi9ncmVlbjIucG5nJztcclxuaW1wb3J0IGdyZWVuMyBmcm9tICcuL2dyZWVuMy5wbmcnO1xyXG5pbXBvcnQgZ3JlZW40IGZyb20gJy4vZ3JlZW40LnBuZyc7XHJcbmltcG9ydCBncmVlbjUgZnJvbSAnLi9ncmVlbjUucG5nJztcclxuaW1wb3J0IGdyZWVuNiBmcm9tICcuL2dyZWVuNi5wbmcnO1xyXG5pbXBvcnQgZ3JlZW43IGZyb20gJy4vZ3JlZW43LnBuZyc7XHJcbmltcG9ydCBncmVlbjggZnJvbSAnLi9ncmVlbjgucG5nJztcclxuaW1wb3J0IGdyZWVuOSBmcm9tICcuL2dyZWVuOS5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xMCBmcm9tICcuL2dyZWVuMTAucG5nJztcclxuaW1wb3J0IGdyZWVuMTEgZnJvbSAnLi9ncmVlbjExLnBuZyc7XHJcbmltcG9ydCBncmVlbjEyIGZyb20gJy4vZ3JlZW4xMi5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xMyBmcm9tICcuL2dyZWVuMTMucG5nJztcclxuaW1wb3J0IGdyZWVuMTQgZnJvbSAnLi9ncmVlbjE0LnBuZyc7XHJcbmltcG9ydCBncmVlbjE1IGZyb20gJy4vZ3JlZW4xNS5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xNiBmcm9tICcuL2dyZWVuMTYucG5nJztcclxuaW1wb3J0IGdyZWVuMTcgZnJvbSAnLi9ncmVlbjE3LnBuZyc7XHJcbmltcG9ydCBncmVlbjE4IGZyb20gJy4vZ3JlZW4xOC5wbmcnO1xyXG5cclxuY29uc3QgZ3JlZW5DYXJkcyA9IHtcclxuICBncmVlbjEsXHJcbiAgZ3JlZW4yLFxyXG4gIGdyZWVuMyxcclxuICBncmVlbjQsXHJcbiAgZ3JlZW41LFxyXG4gIGdyZWVuNixcclxuICBncmVlbjcsXHJcbiAgZ3JlZW44LFxyXG4gIGdyZWVuOSxcclxuICBncmVlbjEwLFxyXG4gIGdyZWVuMTEsXHJcbiAgZ3JlZW4xMixcclxuICBncmVlbjEzLFxyXG4gIGdyZWVuMTQsXHJcbiAgZ3JlZW4xNSxcclxuICBncmVlbjE2LFxyXG4gIGdyZWVuMTcsXHJcbiAgZ3JlZW4xOCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyZWVuQ2FyZHM7IiwiaW1wb3J0IEFuY2llbnRzIGZyb20gJy4uL2Fzc2V0cy9BbmNpZW50cy9pbmRleCdcclxuXHJcbmNvbnN0IGFuY2llbnRzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogJ2F6YXRob3RoJyxcclxuICAgIG5hbWU6ICdhemF0aG90aCcsXHJcbiAgICBjYXJkRmFjZTogQW5jaWVudHMuYXphdGhvdGgsXHJcbiAgICBmaXJzdFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDEsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAyLFxyXG4gICAgICBibHVlQ2FyZHM6IDEsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDMsXHJcbiAgICB9LFxyXG4gICAgdGhpcmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAyLFxyXG4gICAgICBibHVlQ2FyZHM6IDAsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdjdGh1bGh1JyxcclxuICAgIG5hbWU6ICdjdGh1bGh1JyxcclxuICAgIGNhcmRGYWNlOiBBbmNpZW50cy5jdGh1bGh1LFxyXG4gICAgZmlyc3RTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAwLFxyXG4gICAgICBibHVlQ2FyZHM6IDIsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDIsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kU3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMSxcclxuICAgICAgYmx1ZUNhcmRzOiAwLFxyXG4gICAgICBicm93bkNhcmRzOiAzLFxyXG4gICAgfSxcclxuICAgIHRoaXJkU3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMyxcclxuICAgICAgYmx1ZUNhcmRzOiAwLFxyXG4gICAgICBicm93bkNhcmRzOiA0LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnaW9nU290aG90aCcsXHJcbiAgICBuYW1lOiAnaW9nU290aG90aCcsXHJcbiAgICBjYXJkRmFjZTogQW5jaWVudHMuaW9nU290aG90aCxcclxuICAgIGZpcnN0U3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMCxcclxuICAgICAgYmx1ZUNhcmRzOiAxLFxyXG4gICAgICBicm93bkNhcmRzOiAyLFxyXG4gICAgfSxcclxuICAgIHNlY29uZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDIsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMyxcclxuICAgIH0sXHJcbiAgICB0aGlyZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDMsXHJcbiAgICAgIGJsdWVDYXJkczogMCxcclxuICAgICAgYnJvd25DYXJkczogNCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3NodWJOaWdndXJhdGgnLFxyXG4gICAgbmFtZTogJ3NodWJOaWdndXJhdGgnLFxyXG4gICAgY2FyZEZhY2U6IEFuY2llbnRzLnNodWJOaWdndXJhdGgsXHJcbiAgICBmaXJzdFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDEsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAzLFxyXG4gICAgICBibHVlQ2FyZHM6IDEsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDIsXHJcbiAgICB9LFxyXG4gICAgdGhpcmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAyLFxyXG4gICAgICBibHVlQ2FyZHM6IDAsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuY2llbnRzRGF0YSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuXFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiPlxcbiAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT5cXG48L2hlYWQ+XFxuXFxuPGJvZHk+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImRpZmZpY3VsdHlcXFwiPlxcbiAgICAgICAgPHVsPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpZmZpY3VsdHlfX2l0ZW1cXFwiPtCe0YfQtdC90Ywg0L3QuNC30LrQsNGPPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJkaWZmaWN1bHR5X19pdGVtXFxcIj7QndC40LfQutCw0Y88L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpZmZpY3VsdHlfX2l0ZW1cXFwiPtCh0YDQtdC00L3Rj9GPPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJkaWZmaWN1bHR5X19pdGVtXFxcIj7QktGL0YHQvtC60LDRjzwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZGlmZmljdWx0eV9faXRlbVxcXCI+0J7Rh9C10L3RjCDQstGL0YHQvtC60LDRjzwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICA8L2hlYWRlcj5cXG4gICAgPG1haW4gY2xhc3M9XFxcIm1haW5cXFwiPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX19zdGFnZVxcXCI+XFxuICAgICAgICAgIDxsaT7QrdGC0LDQvyA8c3Bhbj4mIzg1NDQ7PC9zcGFuPjwvbGk+XFxuICAgICAgICAgIDxsaT7QrdGC0LDQvyA8c3Bhbj4mIzg1NDU7PC9zcGFuPjwvbGk+XFxuICAgICAgICAgIDxsaT7QrdGC0LDQvyA8c3Bhbj4mIzg1NDY7PC9zcGFuPjwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGdyZWVuQ2FyZHNcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGJyb3duQ2FyZHNcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGJsdWVDYXJkc1xcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gZ3JlZW5DYXJkc1xcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gYnJvd25DYXJkc1xcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gYmx1ZUNhcmRzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBncmVlbkNhcmRzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBicm93bkNhcmRzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBibHVlQ2FyZHNcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29tcGxldGUtZGVjay1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uLWNvbnRhaW5lclxcXCI+IDxidXR0b24gY2xhc3M9XFxcImNyZWF0ZS1kZWNrXFxcIj7QodC+0LfQtNCw0YLRjCDQutC+0LvQvtC00YM8L2J1dHRvbj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImN1cnJlbnQtY2FyZCBpbnZpc2libGVcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29tcGxldGUtZGVjayBpbnZpc2libGVcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICA8L21haW4+XFxuICAgIDxmb290ZXIgY2xhc3M9XFxcImZvb3RlclxcXCI+PC9mb290ZXI+XFxuXFxuICA8L2Rpdj5cXG5cXG5cXG48L2JvZHk+XFxuXFxuPC9odG1sPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=