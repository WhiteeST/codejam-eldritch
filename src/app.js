import './index.css';
import './index.html';
// import helper from './helper/helper'
import ancientsData from './data/ancients';
import blueCards from './assets/MythicCards/blue';
import greenCards from './assets/MythicCards/green';
import brownCards from './assets/MythicCards/brown';

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
const hardBrownCards = ['brown6', 'brown7', 'brown8', 'brown9', 'brown10'];

const statusTrackerStageHandler = (stage) => {
  let index = 0;
  switch (stage) {
    case 'firstStage': index = 0; break;
    case 'secondStage': index = 3; break;
    case 'thirdStage': index = 6; break;
  }
  cardReserve[0 + index].textContent = (ancientsData[currentAncientId])[stage].greenCards;
  cardReserve[1 + index].textContent = (ancientsData[currentAncientId])[stage].brownCards;
  cardReserve[2 + index].textContent = (ancientsData[currentAncientId])[stage].blueCards;
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
    case 'green': easyColorCard = easyGreenCards.slice(0); normalColorCard = normalGreenCards.slice(0); sourceCards = Object.assign({}, greenCards); hardColorCard = hardGreenCards.slice(0); break;
    case 'brown': easyColorCard = easyBrownCards.slice(0); normalColorCard = normalBrownCards.slice(0); sourceCards = Object.assign({}, brownCards); hardColorCard = hardBrownCards.slice(0); break;
    case 'blue': easyColorCard = easyBlueCards.slice(0); normalColorCard = normalBlueCards.slice(0); sourceCards = Object.assign({}, blueCards); hardColorCard = hardBlueCards.slice(0); break;
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
  while (stageCardCounter < ancientsData[currentAncientId][stage][deckColor]) {
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
    // console.log(currentAncient);
    // console.log(difficultyMode);
  })
})


//Добавляем древних в header
ancientsData.forEach(ancient => {
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
      currentAncient = ancientsData[index].name;
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
  console.log('in completeDeck')
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
  console.log('completeDeck transitionend eveny', nextCard);
  if (nextCard > resultDeck.length) {
    completeDeck.classList.add('invisible');
    completeDeck.classList.add('invisible-oppacity');
    currentCard.classList.add('invisible');
    displayBlocks.forEach(block => {
      document.querySelector(`.${block}`).classList.add('invisible');
    })
  }
})