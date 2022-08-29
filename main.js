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
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/favicon.png */ "./src/assets/favicon.png");


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

const displayBlocks = ['difficulty', 'button-container', 'status-tracker-container'];

const easyBlueCards = ['blue3', 'blue4', 'blue5', 'blue10'];
const normalBlueCards = ['blue7', 'blue9', 'blue11', 'blue12'];
const hardBlueCards = ['blue1', 'blue2', 'blue6', 'blue8'];

const easyGreenCards = ['green1', 'green12', 'green16', 'green17', 'green18'];
const normalGreenCards = ['green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15'];
const hardGreenCards = ['green2', 'green3', 'green4', 'green5', 'green6'];

const easyBrownCards = ['brown11', 'brown12', 'brown13', 'brown14', 'brown21'];
const normalBrownCards = ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20'];



document.querySelector('link[rel="icon"]').setAttribute('href', _assets_favicon_png__WEBPACK_IMPORTED_MODULE_6__["default"]); //add favicon

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
  // console.log(difficultyMode)
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
    document.querySelector(`.${displayBlocks[1]}`).classList.remove('invisible');
    difficultyButton.forEach(button => {
      button === event.target ? button.classList.add('picked-black') : button.classList.remove('picked-black');
    })
    completeDeck.classList.remove('invisible');
    difficultyMode = difficulty.textContent;
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
    if (nextCard === undefined || nextCard > resultDeck.length || nextCard === 0) {
      document.querySelector(`.${displayBlocks[0]}`).classList.remove('invisible');
      ancientsArray.forEach(element => element.classList = 'ancient-card');//убираем picked у всех остальных
      ancient.classList.add('picked');
      completeDeck.classList.add('invisible-oppacity');
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
    document.querySelector(`.${displayBlocks[2]}`).classList.remove('invisible');
    nextCard = 0;
    createDeckButton.classList.add('picked-black');
    currentCard.classList.add('invisible');
    completeDeck.classList.remove('invisible-oppacity');
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
    nextCard++;
    currentCard.style.backgroundImage = null;
    completeDeck.classList.remove('rotate');
  }
})

completeDeck.addEventListener('transitionend', () => {
  // console.log('completeDeck transitionend eveny', nextCard);
  if (nextCard > resultDeck.length) {
    completeDeck.classList.add('invisible');
    completeDeck.classList.add('invisible-oppacity');
    currentCard.classList.add('invisible');
    displayBlocks.forEach(block => {
      document.querySelector(`.${block}`).classList.add('invisible');
    })
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

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVJSURBVHic5ZpbbBZFFMd/2ItQQcBLhRILoVKJL0p889atxARNjImS+CIYb9VEH4RIvLxYuT2qPKkxGI0vamI0MTFG0a5YrKIxQYixAiJEWhIfsFW+KpTWh5mx852d2e5ut/367fdPzsPOmTlzzpz/zpy91FFZBMBy4HiF/agYeoAvKu1EpXATMK6lo8K+VAQ9TCxAzbHAzn5NssDOfs2xwJX9mmKBK/s1w4KA8oAHtdhtQYV8mxHI7G8CNlMjLJD3/iDQBMwFTlIDe4Er+waFZ4Ev+waFZ0Fc9g0Ky4LJsm9QWBYkyb5B4ViQNPsGhWNBmuwbFIYFabNvUBgWZMm+QdWzIGv2DaqeBVPJvkHVsmCq2TeoWhbkkX2DqmNBXtk3qDoW5Jl9g2llwZwcbXUAoXV9CmgDSlbbUtSXoBZgIdCg288BQ8AA6ivRoDWmCTgKLLHaAuDL3DzPCTL7W4BbgB3AHuC00MfJaeAzYLu2sUXoe2YopsToIBpEydGWVVy2ZtVeILM/E5LLXpDHHvAgsDtF/xLwKdDHxL2+FLgBuI10p8ZDwBsp+ueKduBzkmfsL+B5YH6MzQVAN/B3Crt7gFV5BpYEj8Y4ecrRdhhYncL+NcCRhLbHtS+PTDGmRJgHvO1x4kfgHuA10f4bcEWGuZagjkTb1qvAeuCgx4e3UMXTtOBS4FvHpMOogqceuBJ1phvdOeA6h61VwE7gIy07gasc/a4HRoW9ZXquzajbSvrTp33NFS3AIcdkX6MKG4PniGZM4lnKF8nIWeBpR//XRb9nLN1y4BuHrUPa51zQAvQ7JnmRiUrOoE/0aRf6Jxx2pDwuxqwW+n1C3wjsctjpJ4dFcAU/Bjzp6Hsh8I/V7yehvwR1u0y2AEPAYjH2Z0s/ggpaYpP2LbdFcAU/Cmz09F8h+r4r9BuEvhe1Z7Sismrr7hNj3xP6Vo8P91O+Z2RehItx074rZswa0XeX0HcL/TpLt07ousVYSfE1MX50Ofzu1zFFcIHHyDDwjqN9A/5C5l9xLSu6kri2d325V5wR1xeJ6xGPD03AvY72D1ExpcY2oqu5F1jk6Nss+n0s9PJlSQl4WcuI0N0oxn4i9Jc55l8MfOXwd1vCWL3Y6jB6APd9NWD1GUZtjAZzcB9ZUvoof0aZS/l5/7tj3mWoQkza2poyVi9cizAIdIp+crO6W+jb8JezxmabGLNe9JG35lqPzdyCh+i/PfapsJ2J8vMuoT8I1AlbrcAHwHmr33ngfdSpYKMedZzaNu/Uunmoly1y1zcSTCHeCELPJEYOA7ejCqNfhe4Fj81m4FYtzZ4+O4Sto6hFuQP3w5ItYaZIHQiE4ZPAMc+kvajnc7ttDHg4w7xdRAub3URrBiPHiL5BDjLMG0EojD6Gem5/xeFgnLxE9DhzYT7u0tYnY9qXBdq3XFkQCIPHKS9D1zI5FW0ZAJ4CVjrmWol6+Sn/G4yTI9oHg0aij9BBxtgBd/YlGlCvxdIsxLgO9ActcSeDL/AHiD6MQY4sCIQhmX2JelQtvj9lMGlkv56jPsaP3FgQCiOu7PtwNeoc/h7/MZVERoHvUCeJLJfjkJgFvrfCAeUfH06g3uKcTeGEwSLgZuBaVBDtwOW63WyKZ4A/gT+AX7QcQJXdQxnmbEQdzfZTYycpboeQ7NmfLZAs6E06sFMMPEF5TV8taCBarwRJBoZUf/YNUrOgKNk3SM2CkOJk3yAxC4qWfYPELAgpXvYNvCwwdUBA9KeDvWQ792cjGlE/WtgoqwtCpq98na3yPwvkvV9LEtQBb6I+atQiVvwH9vcZALdNL7cAAAAASUVORK5CYII=");

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

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <link rel=\"icon\" type=\"image/x-icon\">\r\n  <title>Codejam eldritch</title>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"container\">\r\n    <header class=\"header\">\r\n      <div class=\"difficulty invisible\">\r\n        <ul>\r\n          <li class=\"difficulty__item\">Очень низкая</li>\r\n          <li class=\"difficulty__item\">Низкая</li>\r\n          <li class=\"difficulty__item\">Средняя</li>\r\n          <li class=\"difficulty__item\">Высокая</li>\r\n          <li class=\"difficulty__item\">Очень высокая</li>\r\n        </ul>\r\n      </div>\r\n\r\n    </header>\r\n    <main class=\"main\">\r\n\r\n      <div class=\"status-tracker-container invisible\">\r\n        <ul class=\"status-tracker__stage\">\r\n          <li>Этап <span>&#8544;</span></li>\r\n          <li>Этап <span>&#8545;</span></li>\r\n          <li>Этап <span>&#8546;</span></li>\r\n        </ul>\r\n        <div class=\"status-tracker\">\r\n          <div class=\"status-tracker_item greenCards\"></div>\r\n          <div class=\"status-tracker_item brownCards\"></div>\r\n          <div class=\"status-tracker_item blueCards\"></div>\r\n          <div class=\"status-tracker_item greenCards\"></div>\r\n          <div class=\"status-tracker_item brownCards\"></div>\r\n          <div class=\"status-tracker_item blueCards\"></div>\r\n          <div class=\"status-tracker_item greenCards\"></div>\r\n          <div class=\"status-tracker_item brownCards\"></div>\r\n          <div class=\"status-tracker_item blueCards\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"complete-deck-container\">\r\n        <div class=\"button-container invisible\"> <button class=\"create-deck\">Создать колоду</button></div>\r\n        <div class=\"current-card invisible\"></div>\r\n        <div class=\"complete-deck invisible-oppacity\"></div>\r\n      </div>\r\n\r\n    </main>\r\n    <footer class=\"footer\">\r\n      <div>\r\n        Выберите \"Древнего\" > Выберите сложность > Создать колоду > Клик по колоде (рубашка колоды) > Пролистайте до\r\n        конца.\r\n      </div>\r\n      <div>Если выбран \"Древний\" и открыта колода, отключается возможность выбрать другого \"Древнего\", пока колода не\r\n        закончится.</div>\r\n    </footer>\r\n\r\n  </div>\r\n\r\n\r\n</body>\r\n\r\n</html>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0F6YXRob3RoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0N0aHVsdGh1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0lvZ1NvdGhvdGgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvQW5jaWVudHMvU2h1Yk5pZ2d1cmF0aC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9BbmNpZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWUzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlNS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWU2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlOC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWU5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjExLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjE0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjE3LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24yMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd241LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd244LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjEwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjEzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xNS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW42LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuNy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW45LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmF2aWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYW5jaWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QUFPO0FBQ1QsRUFBRSw4REFBTztBQUNULEVBQUUsOERBQU87QUFDVCxFQUFFLDhEQUFPO0FBQ1QsRUFBRSw4REFBTztBQUNULEVBQUUsOERBQU87QUFDVCxFQUFFLDhEQUFPO0FBQ1QsRUFBRSw4REFBTztBQUNULEVBQUUsOERBQU87QUFDVCxFQUFFLDhEQUFPO0FBQ1QsRUFBRSw4REFBTztBQUNUOztBQUVlLHlFOzs7Ozs7Ozs7Ozs7QUM5Q2Y7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVwQztBQUNBLEVBQUUsMkRBQU07QUFDUixFQUFFLDJEQUFNO0FBQ1IsRUFBRSwyREFBTTtBQUNSLEVBQUUsMkRBQU07QUFDUixFQUFFLDJEQUFNO0FBQ1IsRUFBRSwyREFBTTtBQUNSLEVBQUUsMkRBQU07QUFDUixFQUFFLDJEQUFNO0FBQ1IsRUFBRSwyREFBTTtBQUNSLEVBQUUsNkRBQU87QUFDVCxFQUFFLDhEQUFPO0FBQ1QsRUFBRSw4REFBTztBQUNULEVBQUUsOERBQU87QUFDVCxFQUFFLDhEQUFPO0FBQ1QsRUFBRSw4REFBTztBQUNULEVBQUUsOERBQU87QUFDVCxFQUFFLDhEQUFPO0FBQ1QsRUFBRSw4REFBTztBQUNUOztBQUVlLHlFQUFVLEU7Ozs7Ozs7Ozs7OztBQ3hDekI7QUFBZSwrRUFBZ0IsbzhEOzs7Ozs7Ozs7Ozs7QUNBL0I7QUFBQTtBQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhEQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhEQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhEQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhEQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFZSwyRTs7Ozs7Ozs7Ozs7QUNyRmYsdUM7Ozs7Ozs7Ozs7O0FDQUEsMitCQUEyK0IsZ0RBQWdELGdEQUFnRCxtNkMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgJy4vaW5kZXguaHRtbCc7XHJcbi8vIGltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXIvaGVscGVyJ1xyXG5pbXBvcnQgYW5jaWVudHNEYXRhIGZyb20gJy4vZGF0YS9hbmNpZW50cyc7XHJcbmltcG9ydCBibHVlQ2FyZHMgZnJvbSAnLi9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZSc7XHJcbmltcG9ydCBncmVlbkNhcmRzIGZyb20gJy4vYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuJztcclxuaW1wb3J0IGJyb3duQ2FyZHMgZnJvbSAnLi9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24nO1xyXG5cclxuLy8gZnVuY3Rpb24gYSgpIHtcclxuLy8gICByZXR1cm4gaGVscGVyKDEsIDIpO1xyXG4vLyB9XHJcbi8vIGNvbnNvbGUubG9nKGEoKSlcclxuY29uc3Qgc3RhdHVzVHJhY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50QW5jaWVudCcpO1xyXG5jb25zdCBjYXJkUmVzZXJ2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0dXMtdHJhY2tlcl9pdGVtJyk7XHJcbmNvbnN0IGRpZmZpY3VsdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlmZmljdWx0eV9faXRlbScpO1xyXG5jb25zdCBjcmVhdGVEZWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1kZWNrJyk7XHJcbmNvbnN0IGN1cnJlbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY2FyZCcpO1xyXG5jb25zdCBjb21wbGV0ZURlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUtZGVjaycpO1xyXG5sZXQgYW5jaWVudHNBcnJheTtcclxubGV0IGN1cnJlbnRBbmNpZW50SWQ7XHJcbmxldCBjdXJyZW50QW5jaWVudDtcclxubGV0IGRpZmZpY3VsdHlNb2RlO1xyXG5sZXQgcmVxdWlyZWRBbGxTdGFnZXNDYXJkcztcclxubGV0IHBsYXlEZWNrO1xyXG5sZXQgcmVzdWx0RGVjayA9IFtdO1xyXG5sZXQgbmV4dENhcmQ7XHJcbmxldCBjb2xvclRyYWNrZXIgPSB7fTtcclxuXHJcbmNvbnN0IGRpc3BsYXlCbG9ja3MgPSBbJ2RpZmZpY3VsdHknLCAnYnV0dG9uLWNvbnRhaW5lcicsICdzdGF0dXMtdHJhY2tlci1jb250YWluZXInXTtcclxuXHJcbmNvbnN0IGVhc3lCbHVlQ2FyZHMgPSBbJ2JsdWUzJywgJ2JsdWU0JywgJ2JsdWU1JywgJ2JsdWUxMCddO1xyXG5jb25zdCBub3JtYWxCbHVlQ2FyZHMgPSBbJ2JsdWU3JywgJ2JsdWU5JywgJ2JsdWUxMScsICdibHVlMTInXTtcclxuY29uc3QgaGFyZEJsdWVDYXJkcyA9IFsnYmx1ZTEnLCAnYmx1ZTInLCAnYmx1ZTYnLCAnYmx1ZTgnXTtcclxuXHJcbmNvbnN0IGVhc3lHcmVlbkNhcmRzID0gWydncmVlbjEnLCAnZ3JlZW4xMicsICdncmVlbjE2JywgJ2dyZWVuMTcnLCAnZ3JlZW4xOCddO1xyXG5jb25zdCBub3JtYWxHcmVlbkNhcmRzID0gWydncmVlbjcnLCAnZ3JlZW44JywgJ2dyZWVuOScsICdncmVlbjEwJywgJ2dyZWVuMTEnLCAnZ3JlZW4xMycsICdncmVlbjE0JywgJ2dyZWVuMTUnXTtcclxuY29uc3QgaGFyZEdyZWVuQ2FyZHMgPSBbJ2dyZWVuMicsICdncmVlbjMnLCAnZ3JlZW40JywgJ2dyZWVuNScsICdncmVlbjYnXTtcclxuXHJcbmNvbnN0IGVhc3lCcm93bkNhcmRzID0gWydicm93bjExJywgJ2Jyb3duMTInLCAnYnJvd24xMycsICdicm93bjE0JywgJ2Jyb3duMjEnXTtcclxuY29uc3Qgbm9ybWFsQnJvd25DYXJkcyA9IFsnYnJvd24xJywgJ2Jyb3duMicsICdicm93bjMnLCAnYnJvd240JywgJ2Jyb3duNScsICdicm93bjE1JywgJ2Jyb3duMTYnLCAnYnJvd24xNycsICdicm93bjE4JywgJ2Jyb3duMTknLCAnYnJvd24yMCddO1xyXG5cclxuXHJcbmltcG9ydCBmYXZJY29uU3JjIGZyb20gJy4vYXNzZXRzL2Zhdmljb24ucG5nJztcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJpY29uXCJdJykuc2V0QXR0cmlidXRlKCdocmVmJywgZmF2SWNvblNyYyk7IC8vYWRkIGZhdmljb25cclxuXHJcbmNvbnN0IGhhcmRCcm93bkNhcmRzID0gWydicm93bjYnLCAnYnJvd243JywgJ2Jyb3duOCcsICdicm93bjknLCAnYnJvd24xMCddO1xyXG5cclxuY29uc3Qgc3RhdHVzVHJhY2tlclN0YWdlSGFuZGxlciA9IChzdGFnZSkgPT4ge1xyXG4gIGxldCBpbmRleCA9IDA7XHJcbiAgc3dpdGNoIChzdGFnZSkge1xyXG4gICAgY2FzZSAnZmlyc3RTdGFnZSc6IGluZGV4ID0gMDsgYnJlYWs7XHJcbiAgICBjYXNlICdzZWNvbmRTdGFnZSc6IGluZGV4ID0gMzsgYnJlYWs7XHJcbiAgICBjYXNlICd0aGlyZFN0YWdlJzogaW5kZXggPSA2OyBicmVhaztcclxuICB9XHJcbiAgY2FyZFJlc2VydmVbMCArIGluZGV4XS50ZXh0Q29udGVudCA9IChhbmNpZW50c0RhdGFbY3VycmVudEFuY2llbnRJZF0pW3N0YWdlXS5ncmVlbkNhcmRzO1xyXG4gIGNhcmRSZXNlcnZlWzEgKyBpbmRleF0udGV4dENvbnRlbnQgPSAoYW5jaWVudHNEYXRhW2N1cnJlbnRBbmNpZW50SWRdKVtzdGFnZV0uYnJvd25DYXJkcztcclxuICBjYXJkUmVzZXJ2ZVsyICsgaW5kZXhdLnRleHRDb250ZW50ID0gKGFuY2llbnRzRGF0YVtjdXJyZW50QW5jaWVudElkXSlbc3RhZ2VdLmJsdWVDYXJkcztcclxufVxyXG5cclxuXHJcbmNvbnN0IHN0YXR1c1RyYWNrZXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gIHN0YXR1c1RyYWNrZXJTdGFnZUhhbmRsZXIoJ2ZpcnN0U3RhZ2UnKTtcclxuICBzdGF0dXNUcmFja2VyU3RhZ2VIYW5kbGVyKCdzZWNvbmRTdGFnZScpO1xyXG4gIHN0YXR1c1RyYWNrZXJTdGFnZUhhbmRsZXIoJ3RoaXJkU3RhZ2UnKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGVtcENvbG9yRGVjayA9IChjb2xvciwgZGlmZmljdWx0eSkgPT4ge1xyXG4gIGxldCB0ZW1wRGVjayA9IFtdO1xyXG4gIGNvbnN0IGNvbG9yQ291bnRlciA9IHJlcXVpcmVkQWxsU3RhZ2VzQ2FyZHNbY29sb3IgPT09ICdncmVlbicgPyAwIDogY29sb3IgPT09ICdicm93bicgPyAxIDogMl07XHJcbiAgbGV0IGVhc3lDb2xvckNhcmQ7XHJcbiAgbGV0IG5vcm1hbENvbG9yQ2FyZDtcclxuICBsZXQgaGFyZENvbG9yQ2FyZDtcclxuICBsZXQgc291cmNlQ2FyZHM7XHJcbiAgbGV0IGZ1bGxEaWZmaWN1bHR5ZGVjaztcclxuICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICBjYXNlICdncmVlbic6IGVhc3lDb2xvckNhcmQgPSBlYXN5R3JlZW5DYXJkcy5zbGljZSgwKTsgbm9ybWFsQ29sb3JDYXJkID0gbm9ybWFsR3JlZW5DYXJkcy5zbGljZSgwKTsgc291cmNlQ2FyZHMgPSBPYmplY3QuYXNzaWduKHt9LCBncmVlbkNhcmRzKTsgaGFyZENvbG9yQ2FyZCA9IGhhcmRHcmVlbkNhcmRzLnNsaWNlKDApOyBicmVhaztcclxuICAgIGNhc2UgJ2Jyb3duJzogZWFzeUNvbG9yQ2FyZCA9IGVhc3lCcm93bkNhcmRzLnNsaWNlKDApOyBub3JtYWxDb2xvckNhcmQgPSBub3JtYWxCcm93bkNhcmRzLnNsaWNlKDApOyBzb3VyY2VDYXJkcyA9IE9iamVjdC5hc3NpZ24oe30sIGJyb3duQ2FyZHMpOyBoYXJkQ29sb3JDYXJkID0gaGFyZEJyb3duQ2FyZHMuc2xpY2UoMCk7IGJyZWFrO1xyXG4gICAgY2FzZSAnYmx1ZSc6IGVhc3lDb2xvckNhcmQgPSBlYXN5Qmx1ZUNhcmRzLnNsaWNlKDApOyBub3JtYWxDb2xvckNhcmQgPSBub3JtYWxCbHVlQ2FyZHMuc2xpY2UoMCk7IHNvdXJjZUNhcmRzID0gT2JqZWN0LmFzc2lnbih7fSwgYmx1ZUNhcmRzKTsgaGFyZENvbG9yQ2FyZCA9IGhhcmRCbHVlQ2FyZHMuc2xpY2UoMCk7IGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWl4RGlmZmljdWx0eURlY2sgPSAoZGVja0FycmF5KSA9PiB7XHJcbiAgICBpZiAodGVtcERlY2subGVuZ3RoIDwgY29sb3JDb3VudGVyKSB7XHJcbiAgICAgIHdoaWxlICh0ZW1wRGVjay5sZW5ndGggPCBjb2xvckNvdW50ZXIpIHtcclxuICAgICAgICBjb25zdCBjYXJkSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrQXJyYXkubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wRGVjay5wdXNoKHNvdXJjZUNhcmRzW2RlY2tBcnJheVtjYXJkSWRdXSk7XHJcbiAgICAgICAgZGVja0FycmF5W2NhcmRJZF0gPSBkZWNrQXJyYXlbZGVja0FycmF5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGRlY2tBcnJheS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcclxuICAgIGNhc2UgJ9Ce0YfQtdC90Ywg0L3QuNC30LrQsNGPJzpcclxuICAgICAge1xyXG4gICAgICAgIGVhc3lDb2xvckNhcmQuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgIGlmICh0ZW1wRGVjay5sZW5ndGggPCBjb2xvckNvdW50ZXIpXHJcbiAgICAgICAgICAgIHRlbXBEZWNrLnB1c2goc291cmNlQ2FyZHNbY2FyZF0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBmdWxsRGlmZmljdWx0eWRlY2sgPSBub3JtYWxDb2xvckNhcmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgJ9Cd0LjQt9C60LDRjyc6XHJcbiAgICAgIHtcclxuICAgICAgICBmdWxsRGlmZmljdWx0eWRlY2sgPSAoWy4uLmVhc3lDb2xvckNhcmRdICsgJywnICsgWy4uLm5vcm1hbENvbG9yQ2FyZF0pLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgJ9Ch0YDQtdC00L3Rj9GPJzpcclxuICAgICAge1xyXG4gICAgICAgIGZ1bGxEaWZmaWN1bHR5ZGVjayA9IChbLi4uZWFzeUNvbG9yQ2FyZF0gKyAnLCcgKyBbLi4ubm9ybWFsQ29sb3JDYXJkXSArICcsJyArIFsuLi5oYXJkQ29sb3JDYXJkXSkuc3BsaXQoJywnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgY2FzZSAn0JLRi9GB0L7QutCw0Y8nOlxyXG4gICAgICB7XHJcbiAgICAgICAgZnVsbERpZmZpY3VsdHlkZWNrID0gKFsuLi5ub3JtYWxDb2xvckNhcmRdICsgJywnICsgWy4uLmhhcmRDb2xvckNhcmRdKS5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICBjYXNlICfQntGH0LXQvdGMINCy0YvRgdC+0LrQsNGPJzpcclxuICAgICAge1xyXG4gICAgICAgIGhhcmRDb2xvckNhcmQuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgIGlmICh0ZW1wRGVjay5sZW5ndGggPCBjb2xvckNvdW50ZXIpXHJcbiAgICAgICAgICAgIHRlbXBEZWNrLnB1c2goc291cmNlQ2FyZHNbY2FyZF0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBmdWxsRGlmZmljdWx0eWRlY2sgPSBub3JtYWxDb2xvckNhcmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgbWl4RGlmZmljdWx0eURlY2soZnVsbERpZmZpY3VsdHlkZWNrKTtcclxuICByZXR1cm4gdGVtcERlY2s7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVNvcnRlZFN0YWdlRGVjayA9IChzdGFnZSwgZGVja0NvbG9yKSA9PiB7XHJcbiAgbGV0IHN0YWdlRGVjayA9IFtdO1xyXG4gIGxldCBzdGFnZUNhcmRDb3VudGVyID0gMDtcclxuICBjb25zdCBhcnJheUNvbG9yID0gZGVja0NvbG9yID09PSAnZ3JlZW5DYXJkcycgPyAwIDogZGVja0NvbG9yID09PSAnYnJvd25DYXJkcycgPyAxIDogMjtcclxuICB3aGlsZSAoc3RhZ2VDYXJkQ291bnRlciA8IGFuY2llbnRzRGF0YVtjdXJyZW50QW5jaWVudElkXVtzdGFnZV1bZGVja0NvbG9yXSkge1xyXG4gICAgY29uc3QgY2FyZElkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxheURlY2tbYXJyYXlDb2xvcl0ubGVuZ3RoKTtcclxuICAgIHN0YWdlRGVjay5wdXNoKHBsYXlEZWNrW2FycmF5Q29sb3JdW2NhcmRJZF0pO1xyXG4gICAgcGxheURlY2tbYXJyYXlDb2xvcl1bY2FyZElkXSA9IHBsYXlEZWNrW2FycmF5Q29sb3JdW3BsYXlEZWNrW2FycmF5Q29sb3JdLmxlbmd0aCAtIDFdO1xyXG4gICAgcGxheURlY2tbYXJyYXlDb2xvcl0ucG9wKCk7XHJcbiAgICBzdGFnZUNhcmRDb3VudGVyKys7XHJcbiAgfVxyXG4gIHJldHVybiBzdGFnZURlY2s7XHJcbn1cclxuXHJcbmNvbnN0IGV4dHJhY3RGcm9tQXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICBsZXQgc3RyaW5nRnJvbWFycmF5ID0gJyc7XHJcbiAgaWYgKGFycmF5LmlzQXJyYXkpXHJcbiAgICBleHRyYWN0RnJvbUFycmF5KGFycmF5KTtcclxuICBzdHJpbmdGcm9tYXJyYXkgKz0gWy4uLmFycmF5XTtcclxuICByZXR1cm4gc3RyaW5nRnJvbWFycmF5LnNwbGl0KCcsJylcclxufVxyXG5cclxuY29uc3QgY3JlYXRlRGVjayA9IChkaWZmaWN1bHR5TW9kZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRpZmZpY3VsdHlNb2RlKVxyXG4gIC8v0YPQt9C90LDQtdC8INC60L7Quy3QstC+INC90LXQvtCx0YXQvtC00LjQvNGL0YUg0LrQsNGA0YIg0LTQu9GPINC60L7Qu9C+0LTRi1xyXG4gIHJlc3VsdERlY2sgPSBbXTtcclxuICByZXF1aXJlZEFsbFN0YWdlc0NhcmRzID0gW1xyXG4gICAgcGFyc2VJbnQoY2FyZFJlc2VydmVbMF0udGV4dENvbnRlbnQpICsgcGFyc2VJbnQoY2FyZFJlc2VydmVbM10udGV4dENvbnRlbnQpICsgcGFyc2VJbnQoY2FyZFJlc2VydmVbNl0udGV4dENvbnRlbnQpLCAvL9C30LXQu9C10L3Ri9C1XHJcbiAgICBwYXJzZUludChjYXJkUmVzZXJ2ZVsxXS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVs0XS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVs3XS50ZXh0Q29udGVudCksIC8v0LrQvtGA0LjRh9C90LXQstGL0LVcclxuICAgIHBhcnNlSW50KGNhcmRSZXNlcnZlWzJdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzVdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzhdLnRleHRDb250ZW50KSAgLy/RgdC40L3QuNC1XHJcbiAgXTtcclxuXHJcbiAgLy/QsdC10YDQtdC8INCy0YHQtSDQu9C10LPQutC40LUgKyDQvtCx0YvRh9C90YvQtSwg0LXRgdC70Lgg0L3QtSDRhdCy0LDRgtCw0LXRgiDQuCDQutC70LDQtNC10Lwg0LjRhSDQsiB0ZW1wRGVja1xyXG4gIHBsYXlEZWNrID0gWyhjcmVhdGVUZW1wQ29sb3JEZWNrKCdncmVlbicsIGRpZmZpY3VsdHlNb2RlKSksIGNyZWF0ZVRlbXBDb2xvckRlY2soJ2Jyb3duJywgZGlmZmljdWx0eU1vZGUpLCBjcmVhdGVUZW1wQ29sb3JEZWNrKCdibHVlJywgZGlmZmljdWx0eU1vZGUpXTtcclxuXHJcbiAgcGxheURlY2suZm9yRWFjaCgoZGVjaywgaW5kZXgpID0+IHtcclxuICAgIGRlY2suZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29sb3JUcmFja2VyW2l0ZW1dID0gaW5kZXggPT09IDAgPyAnZ3JlZW4nIDogaW5kZXggPT09IDEgPyAnYnJvd24nIDogJ2JsdWUnO1xyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBsZXQgc3RhZ2VPbmVEZWNrID0gW2NyZWF0ZVNvcnRlZFN0YWdlRGVjaygnZmlyc3RTdGFnZScsICdncmVlbkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnZmlyc3RTdGFnZScsICdicm93bkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnZmlyc3RTdGFnZScsICdibHVlQ2FyZHMnKV07XHJcbiAgbGV0IHN0YWdlVHdvRGVjayA9IFtjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3NlY29uZFN0YWdlJywgJ2dyZWVuQ2FyZHMnKSwgY3JlYXRlU29ydGVkU3RhZ2VEZWNrKCdzZWNvbmRTdGFnZScsICdicm93bkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnc2Vjb25kU3RhZ2UnLCAnYmx1ZUNhcmRzJyldO1xyXG4gIGxldCBzdGFnZVRocmVlRGVjayA9IFtjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3RoaXJkU3RhZ2UnLCAnZ3JlZW5DYXJkcycpLCBjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3RoaXJkU3RhZ2UnLCAnYnJvd25DYXJkcycpLCBjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3RoaXJkU3RhZ2UnLCAnYmx1ZUNhcmRzJyldO1xyXG5cclxuICBzdGFnZU9uZURlY2sgPSBleHRyYWN0RnJvbUFycmF5KHN0YWdlT25lRGVjayk7XHJcbiAgc3RhZ2VUd29EZWNrID0gZXh0cmFjdEZyb21BcnJheShzdGFnZVR3b0RlY2spO1xyXG4gIHN0YWdlVGhyZWVEZWNrID0gZXh0cmFjdEZyb21BcnJheShzdGFnZVRocmVlRGVjayk7XHJcblxyXG4gIGNvbnN0IHRlbXBEZWNrQXJyYXkgPSBbc3RhZ2VPbmVEZWNrLCBzdGFnZVR3b0RlY2ssIHN0YWdlVGhyZWVEZWNrXTtcclxuXHJcbiAgdGVtcERlY2tBcnJheS5mb3JFYWNoKGRlY2sgPT4ge1xyXG4gICAgd2hpbGUgKGRlY2subGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGNhcmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlY2subGVuZ3RoKTtcclxuICAgICAgaWYgKGRlY2tbY2FyZElkXSAhPSBcIlwiKVxyXG4gICAgICAgIHJlc3VsdERlY2sucHVzaChkZWNrW2NhcmRJZF0pO1xyXG4gICAgICBkZWNrW2NhcmRJZF0gPSBkZWNrW2RlY2subGVuZ3RoIC0gMV07XHJcbiAgICAgIGRlY2sucG9wKCk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZGlmZmljdWx0eUJ1dHRvbi5mb3JFYWNoKGRpZmZpY3VsdHkgPT4ge1xyXG4gIGRpZmZpY3VsdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Rpc3BsYXlCbG9ja3NbMV19YCkuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICBkaWZmaWN1bHR5QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgYnV0dG9uID09PSBldmVudC50YXJnZXQgPyBidXR0b24uY2xhc3NMaXN0LmFkZCgncGlja2VkLWJsYWNrJykgOiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncGlja2VkLWJsYWNrJyk7XHJcbiAgICB9KVxyXG4gICAgY29tcGxldGVEZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgZGlmZmljdWx0eU1vZGUgPSBkaWZmaWN1bHR5LnRleHRDb250ZW50O1xyXG4gIH0pXHJcbn0pXHJcblxyXG5cclxuLy/QlNC+0LHQsNCy0LvRj9C10Lwg0LTRgNC10LLQvdC40YUg0LIgaGVhZGVyXHJcbmFuY2llbnRzRGF0YS5mb3JFYWNoKGFuY2llbnQgPT4ge1xyXG4gIGNvbnN0IGFuY2llbnRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgYW5jaWVudENhcmQuc3JjID0gKGAke2FuY2llbnQuY2FyZEZhY2V9YCk7XHJcbiAgYW5jaWVudENhcmQuY2xhc3NMaXN0LmFkZCgnYW5jaWVudC1jYXJkJyk7XHJcbiAgYW5jaWVudENhcmQudGFiSW5kZXggPSAnMCdcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5hcHBlbmQoYW5jaWVudENhcmQpXHJcbiAgYW5jaWVudHNBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xyXG59KVxyXG5cclxuYW5jaWVudHNBcnJheS5mb3JFYWNoKChhbmNpZW50LCBpbmRleCkgPT4ge1xyXG4gIGFuY2llbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAobmV4dENhcmQgPT09IHVuZGVmaW5lZCB8fCBuZXh0Q2FyZCA+IHJlc3VsdERlY2subGVuZ3RoIHx8IG5leHRDYXJkID09PSAwKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Rpc3BsYXlCbG9ja3NbMF19YCkuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICAgIGFuY2llbnRzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0ID0gJ2FuY2llbnQtY2FyZCcpOy8v0YPQsdC40YDQsNC10LwgcGlja2VkINGDINCy0YHQtdGFINC+0YHRgtCw0LvRjNC90YvRhVxyXG4gICAgICBhbmNpZW50LmNsYXNzTGlzdC5hZGQoJ3BpY2tlZCcpO1xyXG4gICAgICBjb21wbGV0ZURlY2suY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlLW9wcGFjaXR5Jyk7XHJcbiAgICAgIGNvbXBsZXRlRGVjay5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTtcclxuICAgICAgY3VycmVudEFuY2llbnQgPSBhbmNpZW50c0RhdGFbaW5kZXhdLm5hbWU7XHJcbiAgICAgIGN1cnJlbnRBbmNpZW50SWQgPSBpbmRleDtcclxuICAgICAgaWYgKGN1cnJlbnRBbmNpZW50KSB7XHJcbiAgICAgICAgc3RhdHVzVHJhY2tlckhhbmRsZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn0pXHJcblxyXG5jcmVhdGVEZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmIChjdXJyZW50QW5jaWVudCAmJiBkaWZmaWN1bHR5TW9kZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZGlzcGxheUJsb2Nrc1syXX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgIG5leHRDYXJkID0gMDtcclxuICAgIGNyZWF0ZURlY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgncGlja2VkLWJsYWNrJyk7XHJcbiAgICBjdXJyZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcclxuICAgIGNvbXBsZXRlRGVjay5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUtb3BwYWNpdHknKTtcclxuICAgIGNvbXBsZXRlRGVjay5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKVxyXG4gICAgc3RhdHVzVHJhY2tlckhhbmRsZXIoKTtcclxuICAgIGNyZWF0ZURlY2soZGlmZmljdWx0eU1vZGUpO1xyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IGNoYW5nZVRyYWNrZXJTdGF0dXMgPSAoY29sb3IpID0+IHtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIGNvbnN0IGN1cnJlbnRDb2xvciA9IGNvbG9yID09PSAnZ3JlZW4nID8gMCA6IGNvbG9yID09PSAnYnJvd24nID8gMSA6IDI7XHJcbiAgaWYgKGNhcmRSZXNlcnZlW2N1cnJlbnRDb2xvciArIGluZGV4XS50ZXh0Q29udGVudCA9PT0gJzAnKVxyXG4gICAgaW5kZXggPSAzO1xyXG4gIGlmIChjYXJkUmVzZXJ2ZVtjdXJyZW50Q29sb3IgKyBpbmRleF0udGV4dENvbnRlbnQgPT09ICcwJylcclxuICAgIGluZGV4ID0gNjtcclxuICBjYXJkUmVzZXJ2ZVtjdXJyZW50Q29sb3IgKyBpbmRleF0udGV4dENvbnRlbnQgPSBwYXJzZUludChjYXJkUmVzZXJ2ZVtjdXJyZW50Q29sb3IgKyBpbmRleF0udGV4dENvbnRlbnQpIC0gMTtcclxufVxyXG5cclxuY29tcGxldGVEZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmIChuZXh0Q2FyZCA9PT0gMCkge1xyXG4gICAgY3JlYXRlRGVja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwaWNrZWQtYmxhY2snKTtcclxuICAgIGN1cnJlbnRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgY3VycmVudENhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtyZXN1bHREZWNrW25leHRDYXJkXX0nKWA7XHJcbiAgICBjaGFuZ2VUcmFja2VyU3RhdHVzKGNvbG9yVHJhY2tlcltyZXN1bHREZWNrW25leHRDYXJkXV0pO1xyXG4gICAgbmV4dENhcmQrKztcclxuICB9XHJcbn0pXHJcblxyXG5jdXJyZW50Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAobmV4dENhcmQgPCByZXN1bHREZWNrLmxlbmd0aCkge1xyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCBpbWdTb3VyY2UgPSBgJHtyZXN1bHREZWNrW25leHRDYXJkXX1gO1xyXG4gICAgaW1nLnNyYyA9IGltZ1NvdXJjZTtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGN1cnJlbnRDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cmVzdWx0RGVja1tuZXh0Q2FyZF19JylgO1xyXG4gICAgICBjaGFuZ2VUcmFja2VyU3RhdHVzKGNvbG9yVHJhY2tlcltyZXN1bHREZWNrW25leHRDYXJkXV0pO1xyXG4gICAgICBuZXh0Q2FyZCsrO1xyXG4gICAgfTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBuZXh0Q2FyZCsrO1xyXG4gICAgY3VycmVudENhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbnVsbDtcclxuICAgIGNvbXBsZXRlRGVjay5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTtcclxuICB9XHJcbn0pXHJcblxyXG5jb21wbGV0ZURlY2suYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZygnY29tcGxldGVEZWNrIHRyYW5zaXRpb25lbmQgZXZlbnknLCBuZXh0Q2FyZCk7XHJcbiAgaWYgKG5leHRDYXJkID4gcmVzdWx0RGVjay5sZW5ndGgpIHtcclxuICAgIGNvbXBsZXRlRGVjay5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcclxuICAgIGNvbXBsZXRlRGVjay5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUtb3BwYWNpdHknKTtcclxuICAgIGN1cnJlbnRDYXJkLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xyXG4gICAgZGlzcGxheUJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YmxvY2t9YCkuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgICB9KVxyXG4gIH1cclxufSkiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTc2Y2M2MGU2ZjJiOWJiMTY3Y2U3NWYzNDU3ZWQyMTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU3YmZkMDI5NzQ0ZGM5Zjg3YzFhYzVmNDJkOTA0MDJhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNWI3NzE3YmZmOTczY2RhMjdiZWQyMzI1N2U3MjIzNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjhjNDI3MmUwMGM5NTk2ZTY1YjE4MDZiMTg1OThhNDMucG5nXCI7IiwiaW1wb3J0IGF6YXRob3RoIGZyb20gJy4vQXphdGhvdGgucG5nJztcclxuaW1wb3J0IGN0aHVsaHUgZnJvbSAnLi9DdGh1bHRodS5wbmcnO1xyXG5pbXBvcnQgaW9nU290aG90aCBmcm9tICcuL0lvZ1NvdGhvdGgucG5nJztcclxuaW1wb3J0IHNodWJOaWdndXJhdGggZnJvbSAnLi9TaHViTmlnZ3VyYXRoLnBuZyc7XHJcblxyXG5jb25zdCBhbmNpZW50cyA9IHtcclxuICBhemF0aG90aCxcclxuICBjdGh1bGh1LFxyXG4gIGlvZ1NvdGhvdGgsXHJcbiAgc2h1Yk5pZ2d1cmF0aFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbmNpZW50cyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwOWM4ZTVlYjUwZGM3NjY2ZjFhYTNkMmYxNjUwNmMzMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzYxYzlmNzM0OTJkOGNkNzAyN2NiMTNlODNiYmVkNzcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY3ZTY1NTJhOTJlNGI4NzgxMDdhY2I3YTBlN2EyNDNmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMDRmOTE2MDA4M2U1MjlhYjc2MzFhNDc1YzAxYWU2Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2NjMzUyY2RjOGZhZGU1ZGFkNGMzMWM3ODk5MmI4NDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZkZDFkMTBmZjUxMzc3NGViODQxMGJlNjU5OGJlODNjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMDlmMGY3MTVlNTI1YTBiNTBlY2IwNzg5YWEyZTEwZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTNlODc5MjYyMmIwYzc1Yzc4YzFjMGI3NTdhMDQxZmEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNmMzIzYzk4YTNmNTQ2MzJhNjZjZGIxYzk1ZDFhNTU3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0Y2RiMWJkNjQxMzcyZTJkMGY3NDZiZmZlYjgxOTYzYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDJhOWVlYzY4NTE4OTUxZmMxOGU1MGVkYzU3MWFkODEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQzMzcxOTExZjhmMGQ4NGI1NTg1NDdhMTAwZjk3ZTU2LnBuZ1wiOyIsImltcG9ydCBibHVlMSBmcm9tICcuL2JsdWUxLnBuZyc7XHJcbmltcG9ydCBibHVlMiBmcm9tICcuL2JsdWUyLnBuZyc7XHJcbmltcG9ydCBibHVlMyBmcm9tICcuL2JsdWUzLnBuZyc7XHJcbmltcG9ydCBibHVlNCBmcm9tICcuL2JsdWU0LnBuZyc7XHJcbmltcG9ydCBibHVlNSBmcm9tICcuL2JsdWU1LnBuZyc7XHJcbmltcG9ydCBibHVlNiBmcm9tICcuL2JsdWU2LnBuZyc7XHJcbmltcG9ydCBibHVlNyBmcm9tICcuL2JsdWU3LnBuZyc7XHJcbmltcG9ydCBibHVlOCBmcm9tICcuL2JsdWU4LnBuZyc7XHJcbmltcG9ydCBibHVlOSBmcm9tICcuL2JsdWU5LnBuZyc7XHJcbmltcG9ydCBibHVlMTAgZnJvbSAnLi9ibHVlMTAucG5nJztcclxuaW1wb3J0IGJsdWUxMSBmcm9tICcuL2JsdWUxMS5wbmcnO1xyXG5pbXBvcnQgYmx1ZTEyIGZyb20gJy4vYmx1ZTEyLnBuZyc7XHJcblxyXG5jb25zdCBibHVlQ2FyZHMgPSB7XHJcbiAgYmx1ZTEsXHJcbiAgYmx1ZTIsXHJcbiAgYmx1ZTMsXHJcbiAgYmx1ZTQsXHJcbiAgYmx1ZTUsXHJcbiAgYmx1ZTYsXHJcbiAgYmx1ZTcsXHJcbiAgYmx1ZTgsXHJcbiAgYmx1ZTksXHJcbiAgYmx1ZTEwLFxyXG4gIGJsdWUxMSxcclxuICBibHVlMTIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJsdWVDYXJkcyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhYzg1ZTdkYjlhYjM2MGZlMjM1YWEyNDg4MzdmMGU1ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzAzMDY4ZjQ0ZjkxNTM1MzRmOWM3NDQ4YmM5NGRlZjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE1N2ZkMGE5MjQ0NGNjMmEyNDVmNDdlNDczOWQ3YTU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MjBiMTQwOWQzZjdkMDA2ZTc2NDcyNzFlM2EzZGFjYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYThkNzdmZjViNWVhYTUzNGI5NjhmOTg4ODZkMWUzNzEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY1ZDIxZTE5NjVkOGVjODA4YmMyZGM5MTZmMjU3OGUwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMzZmOGY5MWVjY2QwZThmOTcwODA4ODUzNzJkY2YyYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWZkNjFiYmQxMTE5ODZhMDk2NWFiN2EzZDljMzhlYjYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZhNTNjYzA0YTJkNmNiYjYzNjc3ZjIwMjFjZTBhNTFjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNTM3YmZiMmNkMjg0Yzk2NjdhZTY3NTZiMjcxYjdmZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTk5ODQxNTIxYzU1OTQwZDBkMDNmY2FkYTlhZDUxOTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM0NDU3OTUwNWQwZDNjY2ZkN2M4ZjA2OWE4NDFmM2Y5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMTgyYThmODBiZDIyNzJiM2QwN2MyYjAxODU3YWE2MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2E4ZTcyODc5ZTExYzMxNWM1OWQ0Y2FlNjliNDM5MWIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhYWJhYmNhYjIxZTA4NTEwYzI3NjI0OWVmOGU4ODE4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMzg3YjY0YTUzN2EwZmIyNWM4NGE4MTAxODAzM2QxOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzA5Zjg3ZjgyYzE0NmFiMzE4OWEwNWEzZmE0NThiNTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIzNDUzZjk3MGM0YTM4OGY4YjY4YjA2ZjQwMGE0Y2NmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3ZGE1MDUwNDIwYjE0ZDY3YTQ4MWU0NTNkMTNlNzBmYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjEyNmZjZDk2NWJlM2I0MjhkY2FjZTU4ZTYyYTcwZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNkNjlhMDFjZGQ1NjE3NWYzMDRlY2Y1NDY3ZTVkZmMyLnBuZ1wiOyIsImltcG9ydCBicm93bjEgZnJvbSAnLi9icm93bjEucG5nJztcclxuaW1wb3J0IGJyb3duMiBmcm9tICcuL2Jyb3duMi5wbmcnO1xyXG5pbXBvcnQgYnJvd24zIGZyb20gJy4vYnJvd24zLnBuZyc7XHJcbmltcG9ydCBicm93bjQgZnJvbSAnLi9icm93bjQucG5nJztcclxuaW1wb3J0IGJyb3duNSBmcm9tICcuL2Jyb3duNS5wbmcnO1xyXG5pbXBvcnQgYnJvd242IGZyb20gJy4vYnJvd242LnBuZyc7XHJcbmltcG9ydCBicm93bjcgZnJvbSAnLi9icm93bjcucG5nJztcclxuaW1wb3J0IGJyb3duOCBmcm9tICcuL2Jyb3duOC5wbmcnO1xyXG5pbXBvcnQgYnJvd245IGZyb20gJy4vYnJvd245LnBuZyc7XHJcbmltcG9ydCBicm93bjEwIGZyb20gJy4vYnJvd24xMC5wbmcnO1xyXG5pbXBvcnQgYnJvd24xMSBmcm9tICcuL2Jyb3duMTEucG5nJztcclxuaW1wb3J0IGJyb3duMTIgZnJvbSAnLi9icm93bjEyLnBuZyc7XHJcbmltcG9ydCBicm93bjEzIGZyb20gJy4vYnJvd24xMy5wbmcnO1xyXG5pbXBvcnQgYnJvd24xNCBmcm9tICcuL2Jyb3duMTQucG5nJztcclxuaW1wb3J0IGJyb3duMTUgZnJvbSAnLi9icm93bjE1LnBuZyc7XHJcbmltcG9ydCBicm93bjE2IGZyb20gJy4vYnJvd24xNi5wbmcnO1xyXG5pbXBvcnQgYnJvd24xNyBmcm9tICcuL2Jyb3duMTcucG5nJztcclxuaW1wb3J0IGJyb3duMTggZnJvbSAnLi9icm93bjE4LnBuZyc7XHJcbmltcG9ydCBicm93bjE5IGZyb20gJy4vYnJvd24xOS5wbmcnO1xyXG5pbXBvcnQgYnJvd24yMCBmcm9tICcuL2Jyb3duMjAucG5nJztcclxuaW1wb3J0IGJyb3duMjEgZnJvbSAnLi9icm93bjIxLnBuZyc7XHJcblxyXG5jb25zdCBicm93bkNhcmRzID0ge1xyXG4gIGJyb3duMSxcclxuICBicm93bjIsXHJcbiAgYnJvd24zLFxyXG4gIGJyb3duNCxcclxuICBicm93bjUsXHJcbiAgYnJvd242LFxyXG4gIGJyb3duNyxcclxuICBicm93bjgsXHJcbiAgYnJvd245LFxyXG4gIGJyb3duMTAsXHJcbiAgYnJvd24xMSxcclxuICBicm93bjEyLFxyXG4gIGJyb3duMTMsXHJcbiAgYnJvd24xNCxcclxuICBicm93bjE1LFxyXG4gIGJyb3duMTYsXHJcbiAgYnJvd24xNyxcclxuICBicm93bjE4LFxyXG4gIGJyb3duMTksXHJcbiAgYnJvd24yMCxcclxuICBicm93bjIxLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicm93bkNhcmRzIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVlOTIxOGYxM2QyNjY4NDY5NDY5ZmM1NWZkZTU2NWI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3NjZiZWI5NzNmYzc2YWM5NTY0ZTU4MWQzNWMwMDRhZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzA1ZmRiM2IwOWFkOTA5YzU5OGYyM2JjOTg2YTRmN2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI3ODZiMGE1ZTBhYWY4ODRjMjdiMDc4OTQwMDNkZWZlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiM2UzMjQzYWQzOTI3YmE2NmRhN2JiYjc0ZTAzY2ZiNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjBiNmIxYmU4MGJlZjY5MzJhYjA3NjUwYjE2NTVmNWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYzNjc3NzY2Y2QzYTRjZWE4ZGEwYmRhYTIwMWZmNDE4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2MDhlMGFlY2FjY2Y1ZmY4OTZmYjk3OTU3ZDIxN2FhMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGViZWExZjViNTM2YTBiODU3NjVhZjNmNTQxMTI5NzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI2OGVkYmRjMjdlMDE2ZDA2YTUyMmRhNTU2NzcxOWFhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYTFiNGRhMTcyNzQwMDBjZTNhODkxODE0NTYwNDAzZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjRhNmRlMWM1M2YwY2MxNGJiOTU1NzM3ZjkyNmExODUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ5ZDlhM2RjODM3YTQxMDFmYzYxMjA3YWQxMjBjMTlmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwNjM0YmI0MTRlMTM2MDY2ZDQ2ZjBkMTM3MDljZWU0NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2EwNzA0NmFkMTc5MTRlYzA0ZDA4ZTRhYTAxZTNmOWIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY5ZDgyMzhjNjc3MGJkYzk3ZjczYzQ3ODEwOWExMjg5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYzVmODNlZDdjZWQxYjgzMjQ5NGEwMmNlNjc4MjViNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmMzNjg2MzFhYzg5ZTViZjA4OTEyYTk0ZDA1ZWQ2MjgucG5nXCI7IiwiaW1wb3J0IGdyZWVuMSBmcm9tICcuL2dyZWVuMS5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4yIGZyb20gJy4vZ3JlZW4yLnBuZyc7XHJcbmltcG9ydCBncmVlbjMgZnJvbSAnLi9ncmVlbjMucG5nJztcclxuaW1wb3J0IGdyZWVuNCBmcm9tICcuL2dyZWVuNC5wbmcnO1xyXG5pbXBvcnQgZ3JlZW41IGZyb20gJy4vZ3JlZW41LnBuZyc7XHJcbmltcG9ydCBncmVlbjYgZnJvbSAnLi9ncmVlbjYucG5nJztcclxuaW1wb3J0IGdyZWVuNyBmcm9tICcuL2dyZWVuNy5wbmcnO1xyXG5pbXBvcnQgZ3JlZW44IGZyb20gJy4vZ3JlZW44LnBuZyc7XHJcbmltcG9ydCBncmVlbjkgZnJvbSAnLi9ncmVlbjkucG5nJztcclxuaW1wb3J0IGdyZWVuMTAgZnJvbSAnLi9ncmVlbjEwLnBuZyc7XHJcbmltcG9ydCBncmVlbjExIGZyb20gJy4vZ3JlZW4xMS5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xMiBmcm9tICcuL2dyZWVuMTIucG5nJztcclxuaW1wb3J0IGdyZWVuMTMgZnJvbSAnLi9ncmVlbjEzLnBuZyc7XHJcbmltcG9ydCBncmVlbjE0IGZyb20gJy4vZ3JlZW4xNC5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xNSBmcm9tICcuL2dyZWVuMTUucG5nJztcclxuaW1wb3J0IGdyZWVuMTYgZnJvbSAnLi9ncmVlbjE2LnBuZyc7XHJcbmltcG9ydCBncmVlbjE3IGZyb20gJy4vZ3JlZW4xNy5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xOCBmcm9tICcuL2dyZWVuMTgucG5nJztcclxuXHJcbmNvbnN0IGdyZWVuQ2FyZHMgPSB7XHJcbiAgZ3JlZW4xLFxyXG4gIGdyZWVuMixcclxuICBncmVlbjMsXHJcbiAgZ3JlZW40LFxyXG4gIGdyZWVuNSxcclxuICBncmVlbjYsXHJcbiAgZ3JlZW43LFxyXG4gIGdyZWVuOCxcclxuICBncmVlbjksXHJcbiAgZ3JlZW4xMCxcclxuICBncmVlbjExLFxyXG4gIGdyZWVuMTIsXHJcbiAgZ3JlZW4xMyxcclxuICBncmVlbjE0LFxyXG4gIGdyZWVuMTUsXHJcbiAgZ3JlZW4xNixcclxuICBncmVlbjE3LFxyXG4gIGdyZWVuMTgsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncmVlbkNhcmRzOyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBVkpTVVJCVkhpYzVacGJiQlpGRk1kLzJJdFFRY0JMaFJJTG9WS0pMMHA4ODlhdHhBUk5qSW1TK0NJWWI5VkVINFJJdkx4WXVUMnFQS2t4R0kwdmFtSTBNVEZHMGE1WXJLSXhRWWl4QWlKRVdoSWZzRlcrS3BUV2g1bXg4NTJkMmU1dXQvMzY3ZmRQenNQT21UbHp6cHovenB5OTFGRlpCTUJ5NEhpRi9hZ1llb0F2S3UxRXBYQVRNSzZsbzhLK1ZBUTlUQ3hBemJIQXpuNU5zc0RPZnMyeHdKWDltbUtCSy9zMXc0S0E4b0FIdGRodFFZVjhteEhJN0c4Q05sTWpMSkQzL2lEUUJNd0ZUbElEZTRFcit3YUZaNEV2K3dhRlowRmM5ZzBLeTRMSnNtOVFXQllreWI1QjRWaVFOUHNHaFdOQm11d2JGSVlGYWJOdlVCZ1daTW0rUWRXeklHdjJEYXFlQlZQSnZrSFZzbUNxMlRlb1doYmtrWDJEcW1OQlh0azNxRG9XNUpsOWcybGx3WndjYlhVQW9YVjlDbWdEU2xiYlV0U1hvQlpnSWRDZzI4OEJROEFBNml2Um9EV21DVGdLTExIYUF1REwzRHpQQ1RMN1c0QmJnQjNBSHVDMDBNZkphZUF6WUx1MnNVWG9lMllvcHNUb0lCcEV5ZEdXVlZ5Mlp0VmVJTE0vRTVMTFhwREhIdkFnc0R0Ri94THdLZERIeEwyK0ZMZ0J1STEwcDhaRHdCc3ArdWVLZHVCemttZnNMK0I1WUg2TXpRVkFOL0IzQ3J0N2dGVjVCcFlFajhZNGVjclJkaGhZbmNMK05jQ1JoTGJIdFMrUFRER21SSmdIdk8xeDRrZmdIdUExMGY0YmNFV0d1WmFnamtUYjFxdkFldUNneDRlM1VNWFR0T0JTNEZ2SHBNT29ncWNldUJKMXBodmRPZUE2aDYxVndFN2dJeTA3Z2FzYy9hNEhSb1c5WlhxdXphamJTdnJUcDMzTkZTM0FJY2RrWDZNS0c0UG5pR1pNNGxuS0Y4bklXZUJwUi8vWFJiOW5MTjF5NEJ1SHJVUGE1MXpRQXZRN0pubVJpVXJPb0UvMGFSZjZKeHgycER3dXhxd1crbjFDM3dqc2N0anBKNGRGY0FVL0JqenA2SHNoOEkvVjd5ZWh2d1IxdTB5MkFFUEFZakgyWjBzL2dncGFZcFAyTGJkRmNBVS9DbXowOUY4aCtyNHI5QnVFdmhlMVo3U2lzbXJyN2hOajN4UDZWbzhQOTFPK1oyUmVoSXR4MDc0clpzd2EwWGVYMEhjTC9UcEx0MDdvdXNWWVNmRTFNWDUwT2Z6dTF6RkZjSUhIeUREd2pxTjlBLzVDNWw5eExTdTZrcmkyZDMyNVY1d1IxeGVKNnhHUEQwM0F2WTcyRDFFeHBjWTJvcXU1RjFqazZOc3MrbjBzOVBKbFNRbDRXY3VJME4wb3huNGk5SmM1NWw4TWZPWHdkMXZDV0wzWTZqQjZBUGQ5TldEMUdVWnRqQVp6Y0I5WlV2b29mMGFaUy9sNS83dGozbVdvUWt6YTJwb3lWaTljaXpBSWRJcCtjck82VytqYjhKZXp4bWFiR0xOZTlKRzM1bHFQemR5Q2graS9QZmFwc0oySjh2TXVvVDhJMUFsYnJjQUh3SG1yMzNuZ2ZkU3BZS01lZFp6YU51L1V1bm1vbHkxeTF6Y1NUQ0hlQ0VMUEpFWU9BN2VqQ3FOZmhlNEZqODFtNEZZdHpaNCtPNFN0bzZoRnVRUDN3NUl0WWFaSUhRaUU0WlBBTWMra3Zham5jN3R0REhnNHc3eGRSQXViM1VSckJpUEhpTDVCRGpMTUcwRW9qRDZHZW01L3hlRmduTHhFOURoellUN3UwdFluWTlxWEJkcTNYRmtRQ0lQSEtTOUQxekk1RlcwWkFKNENWanJtV29sNitTbi9HNHlUSTlvSGcwYWlqOUJCeHRnQmQvWWxHbEN2eGRJc3hMZ085QWN0Y1NlREwvQUhpRDZNUVk0c0NJUWhtWDJKZWxRdHZqOWxNR2xrdjU2alBzYVAzRmdRQ2lPdTdQdHdOZW9jL2g3L01aVkVSb0h2VUNlSkxKZmprSmdGdnJmQ0FlVWZIMDZnM3VLY1RlR0V3U0xnWnVCYVZCRHR3T1c2M1d5S1o0QS9nVCtBWDdRY1FKWGRReG5tYkVRZHpmWlRZeWNwYm9lUTdObWZMWkFzNkUwNnNGTU1QRUY1VFY4dGFDQmFyd1JKQm9aVWYvWU5Vck9nS05rM1NNMkNrT0prM3lBeEM0cVdmWVBFTEFncFh2WU52Q3d3ZFVCQTlLZUR2V1E3OTJjakdsRS9XdGdvcXd0Q3BxOThuYTN5UHd2a3ZWOUxFdFFCYjZJK2F0UWlWdndIOXZjWkFMZE5MN2NBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IEFuY2llbnRzIGZyb20gJy4uL2Fzc2V0cy9BbmNpZW50cy9pbmRleCdcclxuXHJcbmNvbnN0IGFuY2llbnRzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogJ2F6YXRob3RoJyxcclxuICAgIG5hbWU6ICdhemF0aG90aCcsXHJcbiAgICBjYXJkRmFjZTogQW5jaWVudHMuYXphdGhvdGgsXHJcbiAgICBmaXJzdFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDEsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAyLFxyXG4gICAgICBibHVlQ2FyZHM6IDEsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDMsXHJcbiAgICB9LFxyXG4gICAgdGhpcmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAyLFxyXG4gICAgICBibHVlQ2FyZHM6IDAsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdjdGh1bGh1JyxcclxuICAgIG5hbWU6ICdjdGh1bGh1JyxcclxuICAgIGNhcmRGYWNlOiBBbmNpZW50cy5jdGh1bGh1LFxyXG4gICAgZmlyc3RTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAwLFxyXG4gICAgICBibHVlQ2FyZHM6IDIsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDIsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kU3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMSxcclxuICAgICAgYmx1ZUNhcmRzOiAwLFxyXG4gICAgICBicm93bkNhcmRzOiAzLFxyXG4gICAgfSxcclxuICAgIHRoaXJkU3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMyxcclxuICAgICAgYmx1ZUNhcmRzOiAwLFxyXG4gICAgICBicm93bkNhcmRzOiA0LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnaW9nU290aG90aCcsXHJcbiAgICBuYW1lOiAnaW9nU290aG90aCcsXHJcbiAgICBjYXJkRmFjZTogQW5jaWVudHMuaW9nU290aG90aCxcclxuICAgIGZpcnN0U3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMCxcclxuICAgICAgYmx1ZUNhcmRzOiAxLFxyXG4gICAgICBicm93bkNhcmRzOiAyLFxyXG4gICAgfSxcclxuICAgIHNlY29uZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDIsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMyxcclxuICAgIH0sXHJcbiAgICB0aGlyZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDMsXHJcbiAgICAgIGJsdWVDYXJkczogMCxcclxuICAgICAgYnJvd25DYXJkczogNCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3NodWJOaWdndXJhdGgnLFxyXG4gICAgbmFtZTogJ3NodWJOaWdndXJhdGgnLFxyXG4gICAgY2FyZEZhY2U6IEFuY2llbnRzLnNodWJOaWdndXJhdGgsXHJcbiAgICBmaXJzdFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDEsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAzLFxyXG4gICAgICBibHVlQ2FyZHM6IDEsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDIsXHJcbiAgICB9LFxyXG4gICAgdGhpcmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAyLFxyXG4gICAgICBibHVlQ2FyZHM6IDAsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuY2llbnRzRGF0YSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuXFxyXFxuPGhlYWQ+XFxyXFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxyXFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxyXFxuICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiPlxcclxcbiAgPGxpbmsgcmVsPVxcXCJpY29uXFxcIiB0eXBlPVxcXCJpbWFnZS94LWljb25cXFwiPlxcclxcbiAgPHRpdGxlPkNvZGVqYW0gZWxkcml0Y2g8L3RpdGxlPlxcclxcbjwvaGVhZD5cXHJcXG5cXHJcXG48Ym9keT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZGlmZmljdWx0eSBpbnZpc2libGVcXFwiPlxcclxcbiAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpZmZpY3VsdHlfX2l0ZW1cXFwiPtCe0YfQtdC90Ywg0L3QuNC30LrQsNGPPC9saT5cXHJcXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJkaWZmaWN1bHR5X19pdGVtXFxcIj7QndC40LfQutCw0Y88L2xpPlxcclxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpZmZpY3VsdHlfX2l0ZW1cXFwiPtCh0YDQtdC00L3Rj9GPPC9saT5cXHJcXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJkaWZmaWN1bHR5X19pdGVtXFxcIj7QktGL0YHQvtC60LDRjzwvbGk+XFxyXFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZGlmZmljdWx0eV9faXRlbVxcXCI+0J7Rh9C10L3RjCDQstGL0YHQvtC60LDRjzwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2hlYWRlcj5cXHJcXG4gICAgPG1haW4gY2xhc3M9XFxcIm1haW5cXFwiPlxcclxcblxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyLWNvbnRhaW5lciBpbnZpc2libGVcXFwiPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9fc3RhZ2VcXFwiPlxcclxcbiAgICAgICAgICA8bGk+0K3RgtCw0L8gPHNwYW4+JiM4NTQ0Ozwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICA8bGk+0K3RgtCw0L8gPHNwYW4+JiM4NTQ1Ozwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgICA8bGk+0K3RgtCw0L8gPHNwYW4+JiM4NTQ2Ozwvc3Bhbj48L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyXFxcIj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBncmVlbkNhcmRzXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBicm93bkNhcmRzXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBibHVlQ2FyZHNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGdyZWVuQ2FyZHNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGJyb3duQ2FyZHNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGJsdWVDYXJkc1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gZ3JlZW5DYXJkc1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gYnJvd25DYXJkc1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gYmx1ZUNhcmRzXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbXBsZXRlLWRlY2stY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbi1jb250YWluZXIgaW52aXNpYmxlXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiY3JlYXRlLWRlY2tcXFwiPtCh0L7Qt9C00LDRgtGMINC60L7Qu9C+0LTRgzwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3VycmVudC1jYXJkIGludmlzaWJsZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb21wbGV0ZS1kZWNrIGludmlzaWJsZS1vcHBhY2l0eVxcXCI+PC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvbWFpbj5cXHJcXG4gICAgPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXHJcXG4gICAgICA8ZGl2PlxcclxcbiAgICAgICAg0JLRi9Cx0LXRgNC40YLQtSBcXFwi0JTRgNC10LLQvdC10LPQvlxcXCIgPiDQktGL0LHQtdGA0LjRgtC1INGB0LvQvtC20L3QvtGB0YLRjCA+INCh0L7Qt9C00LDRgtGMINC60L7Qu9C+0LTRgyA+INCa0LvQuNC6INC/0L4g0LrQvtC70L7QtNC1ICjRgNGD0LHQsNGI0LrQsCDQutC+0LvQvtC00YspID4g0J/RgNC+0LvQuNGB0YLQsNC50YLQtSDQtNC+XFxyXFxuICAgICAgICDQutC+0L3RhtCwLlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXY+0JXRgdC70Lgg0LLRi9Cx0YDQsNC9IFxcXCLQlNGA0LXQstC90LjQuVxcXCIg0Lgg0L7RgtC60YDRi9GC0LAg0LrQvtC70L7QtNCwLCDQvtGC0LrQu9GO0YfQsNC10YLRgdGPINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0LLRi9Cx0YDQsNGC0Ywg0LTRgNGD0LPQvtCz0L4gXFxcItCU0YDQtdCy0L3QtdCz0L5cXFwiLCDQv9C+0LrQsCDQutC+0LvQvtC00LAg0L3QtVxcclxcbiAgICAgICAg0LfQsNC60L7QvdGH0LjRgtGB0Y8uPC9kaXY+XFxyXFxuICAgIDwvZm9vdGVyPlxcclxcblxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuPC9ib2R5PlxcclxcblxcclxcbjwvaHRtbD5cIjsiXSwic291cmNlUm9vdCI6IiJ9