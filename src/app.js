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
  cardReserve[0 + index].textContent = (ancientsData[currentAncientId])[stage].greenCards;
  cardReserve[1 + index].textContent = (ancientsData[currentAncientId])[stage].brownCards;
  cardReserve[2 + index].textContent = (ancientsData[currentAncientId])[stage].blueCards;
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
    case 'green': easyColorCard = easyGreenCards.slice(0); normalColorCard = normalGreenCards.slice(0); sourceCards = Object.assign({}, greenCards); break;
    case 'brown': easyColorCard = easyBrownCards.slice(0); normalColorCard = normalBrownCards.slice(0); sourceCards = Object.assign({}, brownCards); break;
    case 'blue': easyColorCard = easyBlueCards.slice(0); normalColorCard = normalBlueCards.slice(0); sourceCards = Object.assign({}, blueCards); break;
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
    ancientsArray.forEach(element => element.classList = 'ancient-card');
    ancient.classList.add('picked');
    currentAncient = ancientsData[index].name;
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