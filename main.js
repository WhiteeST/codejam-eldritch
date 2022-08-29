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

// заменил клик по карте, на клик по колоде
// completeDeck.addEventListener('click', () => {
//   if (nextCard === 0) {
//     createDeckButton.classList.remove('picked-black');
//     currentCard.classList.remove('invisible');
//     currentCard.style.backgroundImage = `url('${resultDeck[nextCard]}')`;
//     changeTrackerStatus(colorTracker[resultDeck[nextCard]]);
//     nextCard++;
//   }
// })

// currentCard.addEventListener('click', () => {
//   if (nextCard < resultDeck.length) {
//     const img = new Image();
//     const imgSource = `${resultDeck[nextCard]}`;
//     img.src = imgSource;
//     img.onload = () => {
//       currentCard.style.backgroundImage = `url('${resultDeck[nextCard]}')`;
//       changeTrackerStatus(colorTracker[resultDeck[nextCard]]);
//       nextCard++;
//     };
//   }
//   else {
//     nextCard++;
//     currentCard.style.backgroundImage = null;
//     completeDeck.classList.remove('rotate');
//   }
// })

completeDeck.addEventListener('click', () => {
  // console.log(nextCard)
  if (nextCard === 0) {
    createDeckButton.classList.remove('picked-black');
    currentCard.classList.remove('invisible');
    currentCard.style.backgroundImage = `url('${resultDeck[nextCard]}')`;
    changeTrackerStatus(colorTracker[resultDeck[nextCard]]);
    nextCard++;
  }
  else if (nextCard < resultDeck.length) {
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

// currentCard.addEventListener('click', () => {

// })


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0F6YXRob3RoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0N0aHVsdGh1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL0FuY2llbnRzL0lvZ1NvdGhvdGgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvQW5jaWVudHMvU2h1Yk5pZ2d1cmF0aC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9BbmNpZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWUzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlNS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWU2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvYmx1ZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYmx1ZS9ibHVlOC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ibHVlL2JsdWU5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2JsdWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjExLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjE0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjE3LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMTgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24xOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd24yMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd241LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9icm93bjcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvYnJvd24vYnJvd244LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duL2Jyb3duOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9icm93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjEwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjEzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xNS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuMTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW4zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW42LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2dyZWVuNy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbi9ncmVlbjgucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvTXl0aGljQ2FyZHMvZ3JlZW4vZ3JlZW45LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL015dGhpY0NhcmRzL2dyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmF2aWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYW5jaWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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REFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4REFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4REFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRWUsMkU7Ozs7Ozs7Ozs7O0FDckZmLHVDOzs7Ozs7Ozs7OztBQ0FBLDIrQkFBMitCLGdEQUFnRCxnREFBZ0QsbTZDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL2luZGV4Lmh0bWwnO1xyXG4vLyBpbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyL2hlbHBlcidcclxuaW1wb3J0IGFuY2llbnRzRGF0YSBmcm9tICcuL2RhdGEvYW5jaWVudHMnO1xyXG5pbXBvcnQgYmx1ZUNhcmRzIGZyb20gJy4vYXNzZXRzL015dGhpY0NhcmRzL2JsdWUnO1xyXG5pbXBvcnQgZ3JlZW5DYXJkcyBmcm9tICcuL2Fzc2V0cy9NeXRoaWNDYXJkcy9ncmVlbic7XHJcbmltcG9ydCBicm93bkNhcmRzIGZyb20gJy4vYXNzZXRzL015dGhpY0NhcmRzL2Jyb3duJztcclxuXHJcbi8vIGZ1bmN0aW9uIGEoKSB7XHJcbi8vICAgcmV0dXJuIGhlbHBlcigxLCAyKTtcclxuLy8gfVxyXG4vLyBjb25zb2xlLmxvZyhhKCkpXHJcbmNvbnN0IHN0YXR1c1RyYWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudEFuY2llbnQnKTtcclxuY29uc3QgY2FyZFJlc2VydmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdHVzLXRyYWNrZXJfaXRlbScpO1xyXG5jb25zdCBkaWZmaWN1bHR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpZmZpY3VsdHlfX2l0ZW0nKTtcclxuY29uc3QgY3JlYXRlRGVja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZGVjaycpO1xyXG5jb25zdCBjdXJyZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWNhcmQnKTtcclxuY29uc3QgY29tcGxldGVEZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWRlY2snKTtcclxubGV0IGFuY2llbnRzQXJyYXk7XHJcbmxldCBjdXJyZW50QW5jaWVudElkO1xyXG5sZXQgY3VycmVudEFuY2llbnQ7XHJcbmxldCBkaWZmaWN1bHR5TW9kZTtcclxubGV0IHJlcXVpcmVkQWxsU3RhZ2VzQ2FyZHM7XHJcbmxldCBwbGF5RGVjaztcclxubGV0IHJlc3VsdERlY2sgPSBbXTtcclxubGV0IG5leHRDYXJkO1xyXG5sZXQgY29sb3JUcmFja2VyID0ge307XHJcblxyXG5jb25zdCBkaXNwbGF5QmxvY2tzID0gWydkaWZmaWN1bHR5JywgJ2J1dHRvbi1jb250YWluZXInLCAnc3RhdHVzLXRyYWNrZXItY29udGFpbmVyJ107XHJcblxyXG5jb25zdCBlYXN5Qmx1ZUNhcmRzID0gWydibHVlMycsICdibHVlNCcsICdibHVlNScsICdibHVlMTAnXTtcclxuY29uc3Qgbm9ybWFsQmx1ZUNhcmRzID0gWydibHVlNycsICdibHVlOScsICdibHVlMTEnLCAnYmx1ZTEyJ107XHJcbmNvbnN0IGhhcmRCbHVlQ2FyZHMgPSBbJ2JsdWUxJywgJ2JsdWUyJywgJ2JsdWU2JywgJ2JsdWU4J107XHJcblxyXG5jb25zdCBlYXN5R3JlZW5DYXJkcyA9IFsnZ3JlZW4xJywgJ2dyZWVuMTInLCAnZ3JlZW4xNicsICdncmVlbjE3JywgJ2dyZWVuMTgnXTtcclxuY29uc3Qgbm9ybWFsR3JlZW5DYXJkcyA9IFsnZ3JlZW43JywgJ2dyZWVuOCcsICdncmVlbjknLCAnZ3JlZW4xMCcsICdncmVlbjExJywgJ2dyZWVuMTMnLCAnZ3JlZW4xNCcsICdncmVlbjE1J107XHJcbmNvbnN0IGhhcmRHcmVlbkNhcmRzID0gWydncmVlbjInLCAnZ3JlZW4zJywgJ2dyZWVuNCcsICdncmVlbjUnLCAnZ3JlZW42J107XHJcblxyXG5jb25zdCBlYXN5QnJvd25DYXJkcyA9IFsnYnJvd24xMScsICdicm93bjEyJywgJ2Jyb3duMTMnLCAnYnJvd24xNCcsICdicm93bjIxJ107XHJcbmNvbnN0IG5vcm1hbEJyb3duQ2FyZHMgPSBbJ2Jyb3duMScsICdicm93bjInLCAnYnJvd24zJywgJ2Jyb3duNCcsICdicm93bjUnLCAnYnJvd24xNScsICdicm93bjE2JywgJ2Jyb3duMTcnLCAnYnJvd24xOCcsICdicm93bjE5JywgJ2Jyb3duMjAnXTtcclxuXHJcblxyXG5pbXBvcnQgZmF2SWNvblNyYyBmcm9tICcuL2Fzc2V0cy9mYXZpY29uLnBuZyc7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiaWNvblwiXScpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGZhdkljb25TcmMpOyAvL2FkZCBmYXZpY29uXHJcblxyXG5jb25zdCBoYXJkQnJvd25DYXJkcyA9IFsnYnJvd242JywgJ2Jyb3duNycsICdicm93bjgnLCAnYnJvd245JywgJ2Jyb3duMTAnXTtcclxuXHJcbmNvbnN0IHN0YXR1c1RyYWNrZXJTdGFnZUhhbmRsZXIgPSAoc3RhZ2UpID0+IHtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIHN3aXRjaCAoc3RhZ2UpIHtcclxuICAgIGNhc2UgJ2ZpcnN0U3RhZ2UnOiBpbmRleCA9IDA7IGJyZWFrO1xyXG4gICAgY2FzZSAnc2Vjb25kU3RhZ2UnOiBpbmRleCA9IDM7IGJyZWFrO1xyXG4gICAgY2FzZSAndGhpcmRTdGFnZSc6IGluZGV4ID0gNjsgYnJlYWs7XHJcbiAgfVxyXG4gIGNhcmRSZXNlcnZlWzAgKyBpbmRleF0udGV4dENvbnRlbnQgPSAoYW5jaWVudHNEYXRhW2N1cnJlbnRBbmNpZW50SWRdKVtzdGFnZV0uZ3JlZW5DYXJkcztcclxuICBjYXJkUmVzZXJ2ZVsxICsgaW5kZXhdLnRleHRDb250ZW50ID0gKGFuY2llbnRzRGF0YVtjdXJyZW50QW5jaWVudElkXSlbc3RhZ2VdLmJyb3duQ2FyZHM7XHJcbiAgY2FyZFJlc2VydmVbMiArIGluZGV4XS50ZXh0Q29udGVudCA9IChhbmNpZW50c0RhdGFbY3VycmVudEFuY2llbnRJZF0pW3N0YWdlXS5ibHVlQ2FyZHM7XHJcbn1cclxuXHJcblxyXG5jb25zdCBzdGF0dXNUcmFja2VySGFuZGxlciA9ICgpID0+IHtcclxuICBzdGF0dXNUcmFja2VyU3RhZ2VIYW5kbGVyKCdmaXJzdFN0YWdlJyk7XHJcbiAgc3RhdHVzVHJhY2tlclN0YWdlSGFuZGxlcignc2Vjb25kU3RhZ2UnKTtcclxuICBzdGF0dXNUcmFja2VyU3RhZ2VIYW5kbGVyKCd0aGlyZFN0YWdlJyk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRlbXBDb2xvckRlY2sgPSAoY29sb3IsIGRpZmZpY3VsdHkpID0+IHtcclxuICBsZXQgdGVtcERlY2sgPSBbXTtcclxuICBjb25zdCBjb2xvckNvdW50ZXIgPSByZXF1aXJlZEFsbFN0YWdlc0NhcmRzW2NvbG9yID09PSAnZ3JlZW4nID8gMCA6IGNvbG9yID09PSAnYnJvd24nID8gMSA6IDJdO1xyXG4gIGxldCBlYXN5Q29sb3JDYXJkO1xyXG4gIGxldCBub3JtYWxDb2xvckNhcmQ7XHJcbiAgbGV0IGhhcmRDb2xvckNhcmQ7XHJcbiAgbGV0IHNvdXJjZUNhcmRzO1xyXG4gIGxldCBmdWxsRGlmZmljdWx0eWRlY2s7XHJcbiAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgY2FzZSAnZ3JlZW4nOiBlYXN5Q29sb3JDYXJkID0gZWFzeUdyZWVuQ2FyZHMuc2xpY2UoMCk7IG5vcm1hbENvbG9yQ2FyZCA9IG5vcm1hbEdyZWVuQ2FyZHMuc2xpY2UoMCk7IHNvdXJjZUNhcmRzID0gT2JqZWN0LmFzc2lnbih7fSwgZ3JlZW5DYXJkcyk7IGhhcmRDb2xvckNhcmQgPSBoYXJkR3JlZW5DYXJkcy5zbGljZSgwKTsgYnJlYWs7XHJcbiAgICBjYXNlICdicm93bic6IGVhc3lDb2xvckNhcmQgPSBlYXN5QnJvd25DYXJkcy5zbGljZSgwKTsgbm9ybWFsQ29sb3JDYXJkID0gbm9ybWFsQnJvd25DYXJkcy5zbGljZSgwKTsgc291cmNlQ2FyZHMgPSBPYmplY3QuYXNzaWduKHt9LCBicm93bkNhcmRzKTsgaGFyZENvbG9yQ2FyZCA9IGhhcmRCcm93bkNhcmRzLnNsaWNlKDApOyBicmVhaztcclxuICAgIGNhc2UgJ2JsdWUnOiBlYXN5Q29sb3JDYXJkID0gZWFzeUJsdWVDYXJkcy5zbGljZSgwKTsgbm9ybWFsQ29sb3JDYXJkID0gbm9ybWFsQmx1ZUNhcmRzLnNsaWNlKDApOyBzb3VyY2VDYXJkcyA9IE9iamVjdC5hc3NpZ24oe30sIGJsdWVDYXJkcyk7IGhhcmRDb2xvckNhcmQgPSBoYXJkQmx1ZUNhcmRzLnNsaWNlKDApOyBicmVhaztcclxuICB9XHJcblxyXG4gIGNvbnN0IG1peERpZmZpY3VsdHlEZWNrID0gKGRlY2tBcnJheSkgPT4ge1xyXG4gICAgaWYgKHRlbXBEZWNrLmxlbmd0aCA8IGNvbG9yQ291bnRlcikge1xyXG4gICAgICB3aGlsZSAodGVtcERlY2subGVuZ3RoIDwgY29sb3JDb3VudGVyKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZElkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVja0FycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcERlY2sucHVzaChzb3VyY2VDYXJkc1tkZWNrQXJyYXlbY2FyZElkXV0pO1xyXG4gICAgICAgIGRlY2tBcnJheVtjYXJkSWRdID0gZGVja0FycmF5W2RlY2tBcnJheS5sZW5ndGggLSAxXTtcclxuICAgICAgICBkZWNrQXJyYXkucG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc3dpdGNoIChkaWZmaWN1bHR5KSB7XHJcbiAgICBjYXNlICfQntGH0LXQvdGMINC90LjQt9C60LDRjyc6XHJcbiAgICAgIHtcclxuICAgICAgICBlYXN5Q29sb3JDYXJkLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICBpZiAodGVtcERlY2subGVuZ3RoIDwgY29sb3JDb3VudGVyKVxyXG4gICAgICAgICAgICB0ZW1wRGVjay5wdXNoKHNvdXJjZUNhcmRzW2NhcmRdKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZnVsbERpZmZpY3VsdHlkZWNrID0gbm9ybWFsQ29sb3JDYXJkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICBjYXNlICfQndC40LfQutCw0Y8nOlxyXG4gICAgICB7XHJcbiAgICAgICAgZnVsbERpZmZpY3VsdHlkZWNrID0gKFsuLi5lYXN5Q29sb3JDYXJkXSArICcsJyArIFsuLi5ub3JtYWxDb2xvckNhcmRdKS5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICBjYXNlICfQodGA0LXQtNC90Y/Rjyc6XHJcbiAgICAgIHtcclxuICAgICAgICBmdWxsRGlmZmljdWx0eWRlY2sgPSAoWy4uLmVhc3lDb2xvckNhcmRdICsgJywnICsgWy4uLm5vcm1hbENvbG9yQ2FyZF0gKyAnLCcgKyBbLi4uaGFyZENvbG9yQ2FyZF0pLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgJ9CS0YvRgdC+0LrQsNGPJzpcclxuICAgICAge1xyXG4gICAgICAgIGZ1bGxEaWZmaWN1bHR5ZGVjayA9IChbLi4ubm9ybWFsQ29sb3JDYXJkXSArICcsJyArIFsuLi5oYXJkQ29sb3JDYXJkXSkuc3BsaXQoJywnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgY2FzZSAn0J7Rh9C10L3RjCDQstGL0YHQvtC60LDRjyc6XHJcbiAgICAgIHtcclxuICAgICAgICBoYXJkQ29sb3JDYXJkLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICBpZiAodGVtcERlY2subGVuZ3RoIDwgY29sb3JDb3VudGVyKVxyXG4gICAgICAgICAgICB0ZW1wRGVjay5wdXNoKHNvdXJjZUNhcmRzW2NhcmRdKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZnVsbERpZmZpY3VsdHlkZWNrID0gbm9ybWFsQ29sb3JDYXJkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIG1peERpZmZpY3VsdHlEZWNrKGZ1bGxEaWZmaWN1bHR5ZGVjayk7XHJcbiAgcmV0dXJuIHRlbXBEZWNrO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVTb3J0ZWRTdGFnZURlY2sgPSAoc3RhZ2UsIGRlY2tDb2xvcikgPT4ge1xyXG4gIGxldCBzdGFnZURlY2sgPSBbXTtcclxuICBsZXQgc3RhZ2VDYXJkQ291bnRlciA9IDA7XHJcbiAgY29uc3QgYXJyYXlDb2xvciA9IGRlY2tDb2xvciA9PT0gJ2dyZWVuQ2FyZHMnID8gMCA6IGRlY2tDb2xvciA9PT0gJ2Jyb3duQ2FyZHMnID8gMSA6IDI7XHJcbiAgd2hpbGUgKHN0YWdlQ2FyZENvdW50ZXIgPCBhbmNpZW50c0RhdGFbY3VycmVudEFuY2llbnRJZF1bc3RhZ2VdW2RlY2tDb2xvcl0pIHtcclxuICAgIGNvbnN0IGNhcmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYXlEZWNrW2FycmF5Q29sb3JdLmxlbmd0aCk7XHJcbiAgICBzdGFnZURlY2sucHVzaChwbGF5RGVja1thcnJheUNvbG9yXVtjYXJkSWRdKTtcclxuICAgIHBsYXlEZWNrW2FycmF5Q29sb3JdW2NhcmRJZF0gPSBwbGF5RGVja1thcnJheUNvbG9yXVtwbGF5RGVja1thcnJheUNvbG9yXS5sZW5ndGggLSAxXTtcclxuICAgIHBsYXlEZWNrW2FycmF5Q29sb3JdLnBvcCgpO1xyXG4gICAgc3RhZ2VDYXJkQ291bnRlcisrO1xyXG4gIH1cclxuICByZXR1cm4gc3RhZ2VEZWNrO1xyXG59XHJcblxyXG5jb25zdCBleHRyYWN0RnJvbUFycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgbGV0IHN0cmluZ0Zyb21hcnJheSA9ICcnO1xyXG4gIGlmIChhcnJheS5pc0FycmF5KVxyXG4gICAgZXh0cmFjdEZyb21BcnJheShhcnJheSk7XHJcbiAgc3RyaW5nRnJvbWFycmF5ICs9IFsuLi5hcnJheV07XHJcbiAgcmV0dXJuIHN0cmluZ0Zyb21hcnJheS5zcGxpdCgnLCcpXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZURlY2sgPSAoZGlmZmljdWx0eU1vZGUpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkaWZmaWN1bHR5TW9kZSlcclxuICAvL9GD0LfQvdCw0LXQvCDQutC+0Lst0LLQviDQvdC10L7QsdGF0L7QtNC40LzRi9GFINC60LDRgNGCINC00LvRjyDQutC+0LvQvtC00YtcclxuICByZXN1bHREZWNrID0gW107XHJcbiAgcmVxdWlyZWRBbGxTdGFnZXNDYXJkcyA9IFtcclxuICAgIHBhcnNlSW50KGNhcmRSZXNlcnZlWzBdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzNdLnRleHRDb250ZW50KSArIHBhcnNlSW50KGNhcmRSZXNlcnZlWzZdLnRleHRDb250ZW50KSwgLy/Qt9C10LvQtdC90YvQtVxyXG4gICAgcGFyc2VJbnQoY2FyZFJlc2VydmVbMV0udGV4dENvbnRlbnQpICsgcGFyc2VJbnQoY2FyZFJlc2VydmVbNF0udGV4dENvbnRlbnQpICsgcGFyc2VJbnQoY2FyZFJlc2VydmVbN10udGV4dENvbnRlbnQpLCAvL9C60L7RgNC40YfQvdC10LLRi9C1XHJcbiAgICBwYXJzZUludChjYXJkUmVzZXJ2ZVsyXS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVs1XS50ZXh0Q29udGVudCkgKyBwYXJzZUludChjYXJkUmVzZXJ2ZVs4XS50ZXh0Q29udGVudCkgIC8v0YHQuNC90LjQtVxyXG4gIF07XHJcblxyXG4gIC8v0LHQtdGA0LXQvCDQstGB0LUg0LvQtdCz0LrQuNC1ICsg0L7QsdGL0YfQvdGL0LUsINC10YHQu9C4INC90LUg0YXQstCw0YLQsNC10YIg0Lgg0LrQu9Cw0LTQtdC8INC40YUg0LIgdGVtcERlY2tcclxuICBwbGF5RGVjayA9IFsoY3JlYXRlVGVtcENvbG9yRGVjaygnZ3JlZW4nLCBkaWZmaWN1bHR5TW9kZSkpLCBjcmVhdGVUZW1wQ29sb3JEZWNrKCdicm93bicsIGRpZmZpY3VsdHlNb2RlKSwgY3JlYXRlVGVtcENvbG9yRGVjaygnYmx1ZScsIGRpZmZpY3VsdHlNb2RlKV07XHJcblxyXG4gIHBsYXlEZWNrLmZvckVhY2goKGRlY2ssIGluZGV4KSA9PiB7XHJcbiAgICBkZWNrLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbG9yVHJhY2tlcltpdGVtXSA9IGluZGV4ID09PSAwID8gJ2dyZWVuJyA6IGluZGV4ID09PSAxID8gJ2Jyb3duJyA6ICdibHVlJztcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgbGV0IHN0YWdlT25lRGVjayA9IFtjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ2ZpcnN0U3RhZ2UnLCAnZ3JlZW5DYXJkcycpLCBjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ2ZpcnN0U3RhZ2UnLCAnYnJvd25DYXJkcycpLCBjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ2ZpcnN0U3RhZ2UnLCAnYmx1ZUNhcmRzJyldO1xyXG4gIGxldCBzdGFnZVR3b0RlY2sgPSBbY3JlYXRlU29ydGVkU3RhZ2VEZWNrKCdzZWNvbmRTdGFnZScsICdncmVlbkNhcmRzJyksIGNyZWF0ZVNvcnRlZFN0YWdlRGVjaygnc2Vjb25kU3RhZ2UnLCAnYnJvd25DYXJkcycpLCBjcmVhdGVTb3J0ZWRTdGFnZURlY2soJ3NlY29uZFN0YWdlJywgJ2JsdWVDYXJkcycpXTtcclxuICBsZXQgc3RhZ2VUaHJlZURlY2sgPSBbY3JlYXRlU29ydGVkU3RhZ2VEZWNrKCd0aGlyZFN0YWdlJywgJ2dyZWVuQ2FyZHMnKSwgY3JlYXRlU29ydGVkU3RhZ2VEZWNrKCd0aGlyZFN0YWdlJywgJ2Jyb3duQ2FyZHMnKSwgY3JlYXRlU29ydGVkU3RhZ2VEZWNrKCd0aGlyZFN0YWdlJywgJ2JsdWVDYXJkcycpXTtcclxuXHJcbiAgc3RhZ2VPbmVEZWNrID0gZXh0cmFjdEZyb21BcnJheShzdGFnZU9uZURlY2spO1xyXG4gIHN0YWdlVHdvRGVjayA9IGV4dHJhY3RGcm9tQXJyYXkoc3RhZ2VUd29EZWNrKTtcclxuICBzdGFnZVRocmVlRGVjayA9IGV4dHJhY3RGcm9tQXJyYXkoc3RhZ2VUaHJlZURlY2spO1xyXG5cclxuICBjb25zdCB0ZW1wRGVja0FycmF5ID0gW3N0YWdlT25lRGVjaywgc3RhZ2VUd29EZWNrLCBzdGFnZVRocmVlRGVja107XHJcblxyXG4gIHRlbXBEZWNrQXJyYXkuZm9yRWFjaChkZWNrID0+IHtcclxuICAgIHdoaWxlIChkZWNrLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBjYXJkSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrLmxlbmd0aCk7XHJcbiAgICAgIGlmIChkZWNrW2NhcmRJZF0gIT0gXCJcIilcclxuICAgICAgICByZXN1bHREZWNrLnB1c2goZGVja1tjYXJkSWRdKTtcclxuICAgICAgZGVja1tjYXJkSWRdID0gZGVja1tkZWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICBkZWNrLnBvcCgpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmRpZmZpY3VsdHlCdXR0b24uZm9yRWFjaChkaWZmaWN1bHR5ID0+IHtcclxuICBkaWZmaWN1bHR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtkaXNwbGF5QmxvY2tzWzFdfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgZGlmZmljdWx0eUJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgIGJ1dHRvbiA9PT0gZXZlbnQudGFyZ2V0ID8gYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BpY2tlZC1ibGFjaycpIDogYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BpY2tlZC1ibGFjaycpO1xyXG4gICAgfSlcclxuICAgIGNvbXBsZXRlRGVjay5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgIGRpZmZpY3VsdHlNb2RlID0gZGlmZmljdWx0eS50ZXh0Q29udGVudDtcclxuICB9KVxyXG59KVxyXG5cclxuXHJcbi8v0JTQvtCx0LDQstC70Y/QtdC8INC00YDQtdCy0L3QuNGFINCyIGhlYWRlclxyXG5hbmNpZW50c0RhdGEuZm9yRWFjaChhbmNpZW50ID0+IHtcclxuICBjb25zdCBhbmNpZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGFuY2llbnRDYXJkLnNyYyA9IChgJHthbmNpZW50LmNhcmRGYWNlfWApO1xyXG4gIGFuY2llbnRDYXJkLmNsYXNzTGlzdC5hZGQoJ2FuY2llbnQtY2FyZCcpO1xyXG4gIGFuY2llbnRDYXJkLnRhYkluZGV4ID0gJzAnXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuYXBwZW5kKGFuY2llbnRDYXJkKVxyXG4gIGFuY2llbnRzQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcclxufSlcclxuXHJcbmFuY2llbnRzQXJyYXkuZm9yRWFjaCgoYW5jaWVudCwgaW5kZXgpID0+IHtcclxuICBhbmNpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKG5leHRDYXJkID09PSB1bmRlZmluZWQgfHwgbmV4dENhcmQgPiByZXN1bHREZWNrLmxlbmd0aCB8fCBuZXh0Q2FyZCA9PT0gMCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtkaXNwbGF5QmxvY2tzWzBdfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgICBhbmNpZW50c0FycmF5LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdCA9ICdhbmNpZW50LWNhcmQnKTsvL9GD0LHQuNGA0LDQtdC8IHBpY2tlZCDRgyDQstGB0LXRhSDQvtGB0YLQsNC70YzQvdGL0YVcclxuICAgICAgYW5jaWVudC5jbGFzc0xpc3QuYWRkKCdwaWNrZWQnKTtcclxuICAgICAgY29tcGxldGVEZWNrLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZS1vcHBhY2l0eScpO1xyXG4gICAgICBjb21wbGV0ZURlY2suY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7XHJcbiAgICAgIGN1cnJlbnRBbmNpZW50ID0gYW5jaWVudHNEYXRhW2luZGV4XS5uYW1lO1xyXG4gICAgICBjdXJyZW50QW5jaWVudElkID0gaW5kZXg7XHJcbiAgICAgIGlmIChjdXJyZW50QW5jaWVudCkge1xyXG4gICAgICAgIHN0YXR1c1RyYWNrZXJIYW5kbGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59KVxyXG5cclxuY3JlYXRlRGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAoY3VycmVudEFuY2llbnQgJiYgZGlmZmljdWx0eU1vZGUpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Rpc3BsYXlCbG9ja3NbMl19YCkuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICBuZXh0Q2FyZCA9IDA7XHJcbiAgICBjcmVhdGVEZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BpY2tlZC1ibGFjaycpO1xyXG4gICAgY3VycmVudENhcmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgICBjb21wbGV0ZURlY2suY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlLW9wcGFjaXR5Jyk7XHJcbiAgICBjb21wbGV0ZURlY2suY2xhc3NMaXN0LmFkZCgncm90YXRlJylcclxuICAgIHN0YXR1c1RyYWNrZXJIYW5kbGVyKCk7XHJcbiAgICBjcmVhdGVEZWNrKGRpZmZpY3VsdHlNb2RlKTtcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBjaGFuZ2VUcmFja2VyU3RhdHVzID0gKGNvbG9yKSA9PiB7XHJcbiAgbGV0IGluZGV4ID0gMDtcclxuICBjb25zdCBjdXJyZW50Q29sb3IgPSBjb2xvciA9PT0gJ2dyZWVuJyA/IDAgOiBjb2xvciA9PT0gJ2Jyb3duJyA/IDEgOiAyO1xyXG4gIGlmIChjYXJkUmVzZXJ2ZVtjdXJyZW50Q29sb3IgKyBpbmRleF0udGV4dENvbnRlbnQgPT09ICcwJylcclxuICAgIGluZGV4ID0gMztcclxuICBpZiAoY2FyZFJlc2VydmVbY3VycmVudENvbG9yICsgaW5kZXhdLnRleHRDb250ZW50ID09PSAnMCcpXHJcbiAgICBpbmRleCA9IDY7XHJcbiAgY2FyZFJlc2VydmVbY3VycmVudENvbG9yICsgaW5kZXhdLnRleHRDb250ZW50ID0gcGFyc2VJbnQoY2FyZFJlc2VydmVbY3VycmVudENvbG9yICsgaW5kZXhdLnRleHRDb250ZW50KSAtIDE7XHJcbn1cclxuXHJcbi8vINC30LDQvNC10L3QuNC7INC60LvQuNC6INC/0L4g0LrQsNGA0YLQtSwg0L3QsCDQutC70LjQuiDQv9C+INC60L7Qu9C+0LTQtVxyXG4vLyBjb21wbGV0ZURlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgaWYgKG5leHRDYXJkID09PSAwKSB7XHJcbi8vICAgICBjcmVhdGVEZWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BpY2tlZC1ibGFjaycpO1xyXG4vLyAgICAgY3VycmVudENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbi8vICAgICBjdXJyZW50Q2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jlc3VsdERlY2tbbmV4dENhcmRdfScpYDtcclxuLy8gICAgIGNoYW5nZVRyYWNrZXJTdGF0dXMoY29sb3JUcmFja2VyW3Jlc3VsdERlY2tbbmV4dENhcmRdXSk7XHJcbi8vICAgICBuZXh0Q2FyZCsrO1xyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbi8vIGN1cnJlbnRDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIGlmIChuZXh0Q2FyZCA8IHJlc3VsdERlY2subGVuZ3RoKSB7XHJcbi8vICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIGNvbnN0IGltZ1NvdXJjZSA9IGAke3Jlc3VsdERlY2tbbmV4dENhcmRdfWA7XHJcbi8vICAgICBpbWcuc3JjID0gaW1nU291cmNlO1xyXG4vLyAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuLy8gICAgICAgY3VycmVudENhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtyZXN1bHREZWNrW25leHRDYXJkXX0nKWA7XHJcbi8vICAgICAgIGNoYW5nZVRyYWNrZXJTdGF0dXMoY29sb3JUcmFja2VyW3Jlc3VsdERlY2tbbmV4dENhcmRdXSk7XHJcbi8vICAgICAgIG5leHRDYXJkKys7XHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuLy8gICBlbHNlIHtcclxuLy8gICAgIG5leHRDYXJkKys7XHJcbi8vICAgICBjdXJyZW50Q2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsO1xyXG4vLyAgICAgY29tcGxldGVEZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbmNvbXBsZXRlRGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhuZXh0Q2FyZClcclxuICBpZiAobmV4dENhcmQgPT09IDApIHtcclxuICAgIGNyZWF0ZURlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncGlja2VkLWJsYWNrJyk7XHJcbiAgICBjdXJyZW50Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgIGN1cnJlbnRDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cmVzdWx0RGVja1tuZXh0Q2FyZF19JylgO1xyXG4gICAgY2hhbmdlVHJhY2tlclN0YXR1cyhjb2xvclRyYWNrZXJbcmVzdWx0RGVja1tuZXh0Q2FyZF1dKTtcclxuICAgIG5leHRDYXJkKys7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKG5leHRDYXJkIDwgcmVzdWx0RGVjay5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3QgaW1nU291cmNlID0gYCR7cmVzdWx0RGVja1tuZXh0Q2FyZF19YDtcclxuICAgIGltZy5zcmMgPSBpbWdTb3VyY2U7XHJcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBjdXJyZW50Q2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jlc3VsdERlY2tbbmV4dENhcmRdfScpYDtcclxuICAgICAgY2hhbmdlVHJhY2tlclN0YXR1cyhjb2xvclRyYWNrZXJbcmVzdWx0RGVja1tuZXh0Q2FyZF1dKTtcclxuICAgICAgbmV4dENhcmQrKztcclxuICAgIH07XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbmV4dENhcmQrKztcclxuICAgIGN1cnJlbnRDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG51bGw7XHJcbiAgICBjb21wbGV0ZURlY2suY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7XHJcbiAgfVxyXG59KVxyXG5cclxuLy8gY3VycmVudENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4vLyB9KVxyXG5cclxuXHJcbmNvbXBsZXRlRGVjay5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdjb21wbGV0ZURlY2sgdHJhbnNpdGlvbmVuZCBldmVueScsIG5leHRDYXJkKTtcclxuICBpZiAobmV4dENhcmQgPiByZXN1bHREZWNrLmxlbmd0aCkge1xyXG4gICAgY29tcGxldGVEZWNrLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xyXG4gICAgY29tcGxldGVEZWNrLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZS1vcHBhY2l0eScpO1xyXG4gICAgY3VycmVudENhcmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgICBkaXNwbGF5QmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtibG9ja31gKS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcclxuICAgIH0pXHJcbiAgfVxyXG59KSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNzZjYzYwZTZmMmI5YmIxNjdjZTc1ZjM0NTdlZDIxOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTdiZmQwMjk3NDRkYzlmODdjMWFjNWY0MmQ5MDQwMmEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM1Yjc3MTdiZmY5NzNjZGEyN2JlZDIzMjU3ZTcyMjM0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2OGM0MjcyZTAwYzk1OTZlNjViMTgwNmIxODU5OGE0My5wbmdcIjsiLCJpbXBvcnQgYXphdGhvdGggZnJvbSAnLi9BemF0aG90aC5wbmcnO1xyXG5pbXBvcnQgY3RodWxodSBmcm9tICcuL0N0aHVsdGh1LnBuZyc7XHJcbmltcG9ydCBpb2dTb3Rob3RoIGZyb20gJy4vSW9nU290aG90aC5wbmcnO1xyXG5pbXBvcnQgc2h1Yk5pZ2d1cmF0aCBmcm9tICcuL1NodWJOaWdndXJhdGgucG5nJztcclxuXHJcbmNvbnN0IGFuY2llbnRzID0ge1xyXG4gIGF6YXRob3RoLFxyXG4gIGN0aHVsaHUsXHJcbiAgaW9nU290aG90aCxcclxuICBzaHViTmlnZ3VyYXRoXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuY2llbnRzIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5YzhlNWViNTBkYzc2NjZmMWFhM2QyZjE2NTA2YzMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNjFjOWY3MzQ5MmQ4Y2Q3MDI3Y2IxM2U4M2JiZWQ3Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjdlNjU1MmE5MmU0Yjg3ODEwN2FjYjdhMGU3YTI0M2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIwNGY5MTYwMDgzZTUyOWFiNzYzMWE0NzVjMDFhZTY2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzY2MzNTJjZGM4ZmFkZTVkYWQ0YzMxYzc4OTkyYjg0Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmRkMWQxMGZmNTEzNzc0ZWI4NDEwYmU2NTk4YmU4M2MucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYwOWYwZjcxNWU1MjVhMGI1MGVjYjA3ODlhYTJlMTBmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlM2U4NzkyNjIyYjBjNzVjNzhjMWMwYjc1N2EwNDFmYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2YzMjNjOThhM2Y1NDYzMmE2NmNkYjFjOTVkMWE1NTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRjZGIxYmQ2NDEzNzJlMmQwZjc0NmJmZmViODE5NjNjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMmE5ZWVjNjg1MTg5NTFmYzE4ZTUwZWRjNTcxYWQ4MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDMzNzE5MTFmOGYwZDg0YjU1ODU0N2ExMDBmOTdlNTYucG5nXCI7IiwiaW1wb3J0IGJsdWUxIGZyb20gJy4vYmx1ZTEucG5nJztcclxuaW1wb3J0IGJsdWUyIGZyb20gJy4vYmx1ZTIucG5nJztcclxuaW1wb3J0IGJsdWUzIGZyb20gJy4vYmx1ZTMucG5nJztcclxuaW1wb3J0IGJsdWU0IGZyb20gJy4vYmx1ZTQucG5nJztcclxuaW1wb3J0IGJsdWU1IGZyb20gJy4vYmx1ZTUucG5nJztcclxuaW1wb3J0IGJsdWU2IGZyb20gJy4vYmx1ZTYucG5nJztcclxuaW1wb3J0IGJsdWU3IGZyb20gJy4vYmx1ZTcucG5nJztcclxuaW1wb3J0IGJsdWU4IGZyb20gJy4vYmx1ZTgucG5nJztcclxuaW1wb3J0IGJsdWU5IGZyb20gJy4vYmx1ZTkucG5nJztcclxuaW1wb3J0IGJsdWUxMCBmcm9tICcuL2JsdWUxMC5wbmcnO1xyXG5pbXBvcnQgYmx1ZTExIGZyb20gJy4vYmx1ZTExLnBuZyc7XHJcbmltcG9ydCBibHVlMTIgZnJvbSAnLi9ibHVlMTIucG5nJztcclxuXHJcbmNvbnN0IGJsdWVDYXJkcyA9IHtcclxuICBibHVlMSxcclxuICBibHVlMixcclxuICBibHVlMyxcclxuICBibHVlNCxcclxuICBibHVlNSxcclxuICBibHVlNixcclxuICBibHVlNyxcclxuICBibHVlOCxcclxuICBibHVlOSxcclxuICBibHVlMTAsXHJcbiAgYmx1ZTExLFxyXG4gIGJsdWUxMixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmx1ZUNhcmRzIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFjODVlN2RiOWFiMzYwZmUyMzVhYTI0ODgzN2YwZTVkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MDMwNjhmNDRmOTE1MzUzNGY5Yzc0NDhiYzk0ZGVmOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTU3ZmQwYTkyNDQ0Y2MyYTI0NWY0N2U0NzM5ZDdhNTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkyMGIxNDA5ZDNmN2QwMDZlNzY0NzI3MWUzYTNkYWNiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhOGQ3N2ZmNWI1ZWFhNTM0Yjk2OGY5ODg4NmQxZTM3MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjVkMjFlMTk2NWQ4ZWM4MDhiYzJkYzkxNmYyNTc4ZTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAzNmY4ZjkxZWNjZDBlOGY5NzA4MDg4NTM3MmRjZjJiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxZmQ2MWJiZDExMTk4NmEwOTY1YWI3YTNkOWMzOGViNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmE1M2NjMDRhMmQ2Y2JiNjM2NzdmMjAyMWNlMGE1MWMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM1MzdiZmIyY2QyODRjOTY2N2FlNjc1NmIyNzFiN2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxOTk4NDE1MjFjNTU5NDBkMGQwM2ZjYWRhOWFkNTE5NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzQ0NTc5NTA1ZDBkM2NjZmQ3YzhmMDY5YTg0MWYzZjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjExODJhOGY4MGJkMjI3MmIzZDA3YzJiMDE4NTdhYTYxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzYThlNzI4NzllMTFjMzE1YzU5ZDRjYWU2OWI0MzkxYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2FhYmFiY2FiMjFlMDg1MTBjMjc2MjQ5ZWY4ZTg4MTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUzODdiNjRhNTM3YTBmYjI1Yzg0YTgxMDE4MDMzZDE5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MDlmODdmODJjMTQ2YWIzMTg5YTA1YTNmYTQ1OGI1My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjM0NTNmOTcwYzRhMzg4ZjhiNjhiMDZmNDAwYTRjY2YucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdkYTUwNTA0MjBiMTRkNjdhNDgxZTQ1M2QxM2U3MGZjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMTI2ZmNkOTY1YmUzYjQyOGRjYWNlNThlNjJhNzBlMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2Q2OWEwMWNkZDU2MTc1ZjMwNGVjZjU0NjdlNWRmYzIucG5nXCI7IiwiaW1wb3J0IGJyb3duMSBmcm9tICcuL2Jyb3duMS5wbmcnO1xyXG5pbXBvcnQgYnJvd24yIGZyb20gJy4vYnJvd24yLnBuZyc7XHJcbmltcG9ydCBicm93bjMgZnJvbSAnLi9icm93bjMucG5nJztcclxuaW1wb3J0IGJyb3duNCBmcm9tICcuL2Jyb3duNC5wbmcnO1xyXG5pbXBvcnQgYnJvd241IGZyb20gJy4vYnJvd241LnBuZyc7XHJcbmltcG9ydCBicm93bjYgZnJvbSAnLi9icm93bjYucG5nJztcclxuaW1wb3J0IGJyb3duNyBmcm9tICcuL2Jyb3duNy5wbmcnO1xyXG5pbXBvcnQgYnJvd244IGZyb20gJy4vYnJvd244LnBuZyc7XHJcbmltcG9ydCBicm93bjkgZnJvbSAnLi9icm93bjkucG5nJztcclxuaW1wb3J0IGJyb3duMTAgZnJvbSAnLi9icm93bjEwLnBuZyc7XHJcbmltcG9ydCBicm93bjExIGZyb20gJy4vYnJvd24xMS5wbmcnO1xyXG5pbXBvcnQgYnJvd24xMiBmcm9tICcuL2Jyb3duMTIucG5nJztcclxuaW1wb3J0IGJyb3duMTMgZnJvbSAnLi9icm93bjEzLnBuZyc7XHJcbmltcG9ydCBicm93bjE0IGZyb20gJy4vYnJvd24xNC5wbmcnO1xyXG5pbXBvcnQgYnJvd24xNSBmcm9tICcuL2Jyb3duMTUucG5nJztcclxuaW1wb3J0IGJyb3duMTYgZnJvbSAnLi9icm93bjE2LnBuZyc7XHJcbmltcG9ydCBicm93bjE3IGZyb20gJy4vYnJvd24xNy5wbmcnO1xyXG5pbXBvcnQgYnJvd24xOCBmcm9tICcuL2Jyb3duMTgucG5nJztcclxuaW1wb3J0IGJyb3duMTkgZnJvbSAnLi9icm93bjE5LnBuZyc7XHJcbmltcG9ydCBicm93bjIwIGZyb20gJy4vYnJvd24yMC5wbmcnO1xyXG5pbXBvcnQgYnJvd24yMSBmcm9tICcuL2Jyb3duMjEucG5nJztcclxuXHJcbmNvbnN0IGJyb3duQ2FyZHMgPSB7XHJcbiAgYnJvd24xLFxyXG4gIGJyb3duMixcclxuICBicm93bjMsXHJcbiAgYnJvd240LFxyXG4gIGJyb3duNSxcclxuICBicm93bjYsXHJcbiAgYnJvd243LFxyXG4gIGJyb3duOCxcclxuICBicm93bjksXHJcbiAgYnJvd24xMCxcclxuICBicm93bjExLFxyXG4gIGJyb3duMTIsXHJcbiAgYnJvd24xMyxcclxuICBicm93bjE0LFxyXG4gIGJyb3duMTUsXHJcbiAgYnJvd24xNixcclxuICBicm93bjE3LFxyXG4gIGJyb3duMTgsXHJcbiAgYnJvd24xOSxcclxuICBicm93bjIwLFxyXG4gIGJyb3duMjEsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyb3duQ2FyZHMiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWU5MjE4ZjEzZDI2Njg0Njk0NjlmYzU1ZmRlNTY1YjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc2NmJlYjk3M2ZjNzZhYzk1NjRlNTgxZDM1YzAwNGFmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMDVmZGIzYjA5YWQ5MDljNTk4ZjIzYmM5ODZhNGY3Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjc4NmIwYTVlMGFhZjg4NGMyN2IwNzg5NDAwM2RlZmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIzZTMyNDNhZDM5MjdiYTY2ZGE3YmJiNzRlMDNjZmI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMGI2YjFiZTgwYmVmNjkzMmFiMDc2NTBiMTY1NWY1ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjM2Nzc3NjZjZDNhNGNlYThkYTBiZGFhMjAxZmY0MTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwOGUwYWVjYWNjZjVmZjg5NmZiOTc5NTdkMjE3YWEzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwZWJlYTFmNWI1MzZhMGI4NTc2NWFmM2Y1NDExMjk3My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjY4ZWRiZGMyN2UwMTZkMDZhNTIyZGE1NTY3NzE5YWEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFhMWI0ZGExNzI3NDAwMGNlM2E4OTE4MTQ1NjA0MDNlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNGE2ZGUxYzUzZjBjYzE0YmI5NTU3MzdmOTI2YTE4NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDlkOWEzZGM4MzdhNDEwMWZjNjEyMDdhZDEyMGMxOWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA2MzRiYjQxNGUxMzYwNjZkNDZmMGQxMzcwOWNlZTQ0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTA3MDQ2YWQxNzkxNGVjMDRkMDhlNGFhMDFlM2Y5Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjlkODIzOGM2NzcwYmRjOTdmNzNjNDc4MTA5YTEyODkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJjNWY4M2VkN2NlZDFiODMyNDk0YTAyY2U2NzgyNWI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYzM2ODYzMWFjODllNWJmMDg5MTJhOTRkMDVlZDYyOC5wbmdcIjsiLCJpbXBvcnQgZ3JlZW4xIGZyb20gJy4vZ3JlZW4xLnBuZyc7XHJcbmltcG9ydCBncmVlbjIgZnJvbSAnLi9ncmVlbjIucG5nJztcclxuaW1wb3J0IGdyZWVuMyBmcm9tICcuL2dyZWVuMy5wbmcnO1xyXG5pbXBvcnQgZ3JlZW40IGZyb20gJy4vZ3JlZW40LnBuZyc7XHJcbmltcG9ydCBncmVlbjUgZnJvbSAnLi9ncmVlbjUucG5nJztcclxuaW1wb3J0IGdyZWVuNiBmcm9tICcuL2dyZWVuNi5wbmcnO1xyXG5pbXBvcnQgZ3JlZW43IGZyb20gJy4vZ3JlZW43LnBuZyc7XHJcbmltcG9ydCBncmVlbjggZnJvbSAnLi9ncmVlbjgucG5nJztcclxuaW1wb3J0IGdyZWVuOSBmcm9tICcuL2dyZWVuOS5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xMCBmcm9tICcuL2dyZWVuMTAucG5nJztcclxuaW1wb3J0IGdyZWVuMTEgZnJvbSAnLi9ncmVlbjExLnBuZyc7XHJcbmltcG9ydCBncmVlbjEyIGZyb20gJy4vZ3JlZW4xMi5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xMyBmcm9tICcuL2dyZWVuMTMucG5nJztcclxuaW1wb3J0IGdyZWVuMTQgZnJvbSAnLi9ncmVlbjE0LnBuZyc7XHJcbmltcG9ydCBncmVlbjE1IGZyb20gJy4vZ3JlZW4xNS5wbmcnO1xyXG5pbXBvcnQgZ3JlZW4xNiBmcm9tICcuL2dyZWVuMTYucG5nJztcclxuaW1wb3J0IGdyZWVuMTcgZnJvbSAnLi9ncmVlbjE3LnBuZyc7XHJcbmltcG9ydCBncmVlbjE4IGZyb20gJy4vZ3JlZW4xOC5wbmcnO1xyXG5cclxuY29uc3QgZ3JlZW5DYXJkcyA9IHtcclxuICBncmVlbjEsXHJcbiAgZ3JlZW4yLFxyXG4gIGdyZWVuMyxcclxuICBncmVlbjQsXHJcbiAgZ3JlZW41LFxyXG4gIGdyZWVuNixcclxuICBncmVlbjcsXHJcbiAgZ3JlZW44LFxyXG4gIGdyZWVuOSxcclxuICBncmVlbjEwLFxyXG4gIGdyZWVuMTEsXHJcbiAgZ3JlZW4xMixcclxuICBncmVlbjEzLFxyXG4gIGdyZWVuMTQsXHJcbiAgZ3JlZW4xNSxcclxuICBncmVlbjE2LFxyXG4gIGdyZWVuMTcsXHJcbiAgZ3JlZW4xOCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyZWVuQ2FyZHM7IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFWSlNVUkJWSGljNVpwYmJCWkZGTWQvMkl0UVFjQkxoUklMb1ZLSkwwcDg4OWF0eEFSTmpJbVMrQ0lZYjlWRUg0Ukl2THhZdVQycVBLa3hHSTB2YW1JME1URkcwYTVZcktJeFFZaXhBaUpFV2hJZnNGVytLcFRXaDVteDg1MmQyZTV1dC8zNjdmZFB6c1BPbVRsenpwei96cHk5MUZGWkJNQnk0SGlGL2FnWWVvQXZLdTFFcFhBVE1LNmxvOEsrVkFROVRDeEF6YkhBem41TnNzRE9mczJ4d0pYOW1tS0JLL3MxdzRLQThvQUh0ZGh0UVlWOG14SEk3RzhDTmxNakxKRDMvaURRQk13RlRsSURlNEVyK3dhRlo0RXYrd2FGWjBGYzlnMEt5NExKc205UVdCWWt5YjVCNFZpUU5Qc0doV05CbXV3YkZJWUZhYk52VUJnV1pNbStRZFd6SUd2MkRhcWVCVlBKdmtIVnNtQ3EyVGVvV2hia2tYMkRxbU5CWHRrM3FEb1c1Smw5ZzJsbHdad2NiWFVBb1hWOUNtZ0RTbGJiVXRTWG9CWmdJZENnMjg4QlE4QUE2aXZSb0RXbUNUZ0tMTEhhQXVETDNEelBDVEw3VzRCYmdCM0FIdUMwME1mSmFlQXpZTHUyc1VYb2UyWW9wc1RvSUJwRXlkR1dWVnkyWnRWZUlMTS9FNUxMWHBESEh2QWdzRHRGL3hMd0tkREh4TDIrRkxnQnVJMTBwOFpEd0JzcCt1ZUtkdUJ6a21mc0wrQjVZSDZNelFWQU4vQjNDcnQ3Z0ZWNUJwWUVqOFk0ZWNyUmRoaFluY0wrTmNDUmhMYkh0UytQVERHbVJKZ0h2TzF4NGtmZ0h1QTEwZjRiY0VXR3VaYWdqa1RiMXF2QWV1Q2d4NGUzVU1YVHRPQlM0RnZIcE1Pb2dxY2V1QkoxcGh2ZE9lQTZoNjFWd0U3Z0l5MDdnYXNjL2E0SFJvVzlaWHF1emFqYlN2clRwMzNORlMzQUljZGtYNk1LRzRQbmlHWk00bG5LRjhuSVdlQnBSLy9YUmI5bkxOMXk0QnVIclVQYTUxelFBdlE3Sm5tUmlVck9vRS8wYVJmNkp4eDJwRHd1eHF3VytuMUMzd2pzY3RqcEo0ZEZjQVUvQmp6cDZIc2g4SS9WN3llaHZ3UjF1MHkyQUVQQVlqSDJaMHMvZ2dwYVlwUDJMYmRGY0FVL0NtejA5RjhoK3I0cjlCdUV2aGUxWjdTaXNtcnI3aE5qM3hQNlZvOFA5MU8rWjJSZWhJdHgwNzRyWnN3YTBYZVgwSGNML1RwTHQwN291c1ZZU2ZFMU1YNTBPZnp1MXpGRmNJSEh5RER3anFOOUEvNUM1bDl4TFN1NmtyaTJkMzI1VjV3UjF4ZUo2eEdQRDAzQXZZNzJEMUV4cGNZMm9xdTVGMWprNk5zcytuMHM5UEpsU1FsNFdjdUkwTjBveG40aTlKYzU1bDhNZk9Yd2QxdkNXTDNZNmpCNkFQZDlOV0QxR1VadGpBWnpjQjlaVXZvb2YwYVpTL2w1Lzd0ajNtV29Ra3phMnBveVZpOWNpekFJZElwK2NyTzZXK2piOEplenhtYWJHTE5lOUpHMzVscVB6ZHlDaCtpL1BmYXBzSjJKOHZNdW9UOEkxQWxicmNBSHdIbXIzM25nZmRTcFlLTWVkWnphTnUvVXVubW9seTF5MXpjU1RDSGVDRUxQSkVZT0E3ZWpDcU5maGU0Rmo4MW00Rll0elo0K080U3RvNmhGdVFQM3c1SXRZYVpJSFFpRTRaUEFNYytrdmFqbmM3dHRESGc0dzd4ZFJBdWIzVVJyQmlQSGlMNUJEakxNRzBFb2pENkdlbTUveGVGZ25MeEU5RGh6WVQ3dTB0WW5ZOXFYQmRxM1hGa1FDSVBIS1M5RDF6STVGVzBaQUo0Q1Zqcm1Xb2w2K1NuL0c0eVRJOW9IZzBhaWo5QkJ4dGdCZC9ZbEdsQ3Z4ZElzeExnTzlBY3RjU2VETC9BSGlENk1RWTRzQ0lRaG1YMkplbFF0dmo5bE1HbGt2NTZqUHNhUDNGZ1FDaU91N1B0d05lb2MvaDcvTVpWRVJvSHZVQ2VKTEpmamtKZ0Z2cmZDQWVVZkgwNmczdUtjVGVHRXdTTGdadUJhVkJEdHdPVzYzV3lLWjRBL2dUK0FYN1FjUUpYZFF4bm1iRVFkemZaVFl5Y3Bib2VRN05tZkxaQXM2RTA2c0ZNTVBFRjVUVjh0YUNCYXJ3UkpCb1pVZi9ZTlVyT2dLTmszU00yQ2tPSmszeUF4QzRxV2ZZUEVMQWdwWHZZTnZDd3dkVUJBOUtlRHZXUTc5MmNqR2xFL1d0Z29xd3RDcHE5OG5hM3lQd3ZrdlY5TEV0UUJiNkkrYXRRaVZ2d0g5dmNaQUxkTkw3Y0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgQW5jaWVudHMgZnJvbSAnLi4vYXNzZXRzL0FuY2llbnRzL2luZGV4J1xyXG5cclxuY29uc3QgYW5jaWVudHNEYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAnYXphdGhvdGgnLFxyXG4gICAgbmFtZTogJ2F6YXRob3RoJyxcclxuICAgIGNhcmRGYWNlOiBBbmNpZW50cy5hemF0aG90aCxcclxuICAgIGZpcnN0U3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMSxcclxuICAgICAgYmx1ZUNhcmRzOiAxLFxyXG4gICAgICBicm93bkNhcmRzOiAyLFxyXG4gICAgfSxcclxuICAgIHNlY29uZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDIsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMyxcclxuICAgIH0sXHJcbiAgICB0aGlyZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDIsXHJcbiAgICAgIGJsdWVDYXJkczogMCxcclxuICAgICAgYnJvd25DYXJkczogNCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2N0aHVsaHUnLFxyXG4gICAgbmFtZTogJ2N0aHVsaHUnLFxyXG4gICAgY2FyZEZhY2U6IEFuY2llbnRzLmN0aHVsaHUsXHJcbiAgICBmaXJzdFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDAsXHJcbiAgICAgIGJsdWVDYXJkczogMixcclxuICAgICAgYnJvd25DYXJkczogMixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAxLFxyXG4gICAgICBibHVlQ2FyZHM6IDAsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDMsXHJcbiAgICB9LFxyXG4gICAgdGhpcmRTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAzLFxyXG4gICAgICBibHVlQ2FyZHM6IDAsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdpb2dTb3Rob3RoJyxcclxuICAgIG5hbWU6ICdpb2dTb3Rob3RoJyxcclxuICAgIGNhcmRGYWNlOiBBbmNpZW50cy5pb2dTb3Rob3RoLFxyXG4gICAgZmlyc3RTdGFnZToge1xyXG4gICAgICBncmVlbkNhcmRzOiAwLFxyXG4gICAgICBibHVlQ2FyZHM6IDEsXHJcbiAgICAgIGJyb3duQ2FyZHM6IDIsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kU3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMixcclxuICAgICAgYmx1ZUNhcmRzOiAxLFxyXG4gICAgICBicm93bkNhcmRzOiAzLFxyXG4gICAgfSxcclxuICAgIHRoaXJkU3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMyxcclxuICAgICAgYmx1ZUNhcmRzOiAwLFxyXG4gICAgICBicm93bkNhcmRzOiA0LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnc2h1Yk5pZ2d1cmF0aCcsXHJcbiAgICBuYW1lOiAnc2h1Yk5pZ2d1cmF0aCcsXHJcbiAgICBjYXJkRmFjZTogQW5jaWVudHMuc2h1Yk5pZ2d1cmF0aCxcclxuICAgIGZpcnN0U3RhZ2U6IHtcclxuICAgICAgZ3JlZW5DYXJkczogMSxcclxuICAgICAgYmx1ZUNhcmRzOiAxLFxyXG4gICAgICBicm93bkNhcmRzOiAyLFxyXG4gICAgfSxcclxuICAgIHNlY29uZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDMsXHJcbiAgICAgIGJsdWVDYXJkczogMSxcclxuICAgICAgYnJvd25DYXJkczogMixcclxuICAgIH0sXHJcbiAgICB0aGlyZFN0YWdlOiB7XHJcbiAgICAgIGdyZWVuQ2FyZHM6IDIsXHJcbiAgICAgIGJsdWVDYXJkczogMCxcclxuICAgICAgYnJvd25DYXJkczogNCxcclxuICAgIH0sXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5jaWVudHNEYXRhIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG5cXHJcXG48aGVhZD5cXHJcXG4gIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXHJcXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXHJcXG4gIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiaWU9ZWRnZVxcXCI+XFxyXFxuICA8bGluayByZWw9XFxcImljb25cXFwiIHR5cGU9XFxcImltYWdlL3gtaWNvblxcXCI+XFxyXFxuICA8dGl0bGU+Q29kZWphbSBlbGRyaXRjaDwvdGl0bGU+XFxyXFxuPC9oZWFkPlxcclxcblxcclxcbjxib2R5PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJkaWZmaWN1bHR5IGludmlzaWJsZVxcXCI+XFxyXFxuICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZGlmZmljdWx0eV9faXRlbVxcXCI+0J7Rh9C10L3RjCDQvdC40LfQutCw0Y88L2xpPlxcclxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpZmZpY3VsdHlfX2l0ZW1cXFwiPtCd0LjQt9C60LDRjzwvbGk+XFxyXFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZGlmZmljdWx0eV9faXRlbVxcXCI+0KHRgNC10LTQvdGP0Y88L2xpPlxcclxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpZmZpY3VsdHlfX2l0ZW1cXFwiPtCS0YvRgdC+0LrQsNGPPC9saT5cXHJcXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJkaWZmaWN1bHR5X19pdGVtXFxcIj7QntGH0LXQvdGMINCy0YvRgdC+0LrQsNGPPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvaGVhZGVyPlxcclxcbiAgICA8bWFpbiBjbGFzcz1cXFwibWFpblxcXCI+XFxyXFxuXFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXItY29udGFpbmVyIGludmlzaWJsZVxcXCI+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX19zdGFnZVxcXCI+XFxyXFxuICAgICAgICAgIDxsaT7QrdGC0LDQvyA8c3Bhbj4mIzg1NDQ7PC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgIDxsaT7QrdGC0LDQvyA8c3Bhbj4mIzg1NDU7PC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICAgIDxsaT7QrdGC0LDQvyA8c3Bhbj4mIzg1NDY7PC9zcGFuPjwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGdyZWVuQ2FyZHNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGJyb3duQ2FyZHNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0dXMtdHJhY2tlcl9pdGVtIGJsdWVDYXJkc1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gZ3JlZW5DYXJkc1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gYnJvd25DYXJkc1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy10cmFja2VyX2l0ZW0gYmx1ZUNhcmRzXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBncmVlbkNhcmRzXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBicm93bkNhcmRzXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLXRyYWNrZXJfaXRlbSBibHVlQ2FyZHNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29tcGxldGUtZGVjay1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uLWNvbnRhaW5lciBpbnZpc2libGVcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJjcmVhdGUtZGVja1xcXCI+0KHQvtC30LTQsNGC0Ywg0LrQvtC70L7QtNGDPC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXJyZW50LWNhcmQgaW52aXNpYmxlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbXBsZXRlLWRlY2sgaW52aXNpYmxlLW9wcGFjaXR5XFxcIj48L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9tYWluPlxcclxcbiAgICA8Zm9vdGVyIGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICDQktGL0LHQtdGA0LjRgtC1IFxcXCLQlNGA0LXQstC90LXQs9C+XFxcIiA+INCS0YvQsdC10YDQuNGC0LUg0YHQu9C+0LbQvdC+0YHRgtGMID4g0KHQvtC30LTQsNGC0Ywg0LrQvtC70L7QtNGDID4g0JrQu9C40Log0L/QviDQutC+0LvQvtC00LUgKNGA0YPQsdCw0YjQutCwINC60L7Qu9C+0LTRiykgPiDQn9GA0L7Qu9C40YHRgtCw0LnRgtC1INC00L5cXHJcXG4gICAgICAgINC60L7QvdGG0LAuXFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdj7QldGB0LvQuCDQstGL0LHRgNCw0L0gXFxcItCU0YDQtdCy0L3QuNC5XFxcIiDQuCDQvtGC0LrRgNGL0YLQsCDQutC+0LvQvtC00LAsINC+0YLQutC70Y7Rh9Cw0LXRgtGB0Y8g0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQstGL0LHRgNCw0YLRjCDQtNGA0YPQs9C+0LPQviBcXFwi0JTRgNC10LLQvdC10LPQvlxcXCIsINC/0L7QutCwINC60L7Qu9C+0LTQsCDQvdC1XFxyXFxuICAgICAgICDQt9Cw0LrQvtC90YfQuNGC0YHRjy48L2Rpdj5cXHJcXG4gICAgPC9mb290ZXI+XFxyXFxuXFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG48L2JvZHk+XFxyXFxuXFxyXFxuPC9odG1sPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=