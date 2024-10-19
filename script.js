/* Console version*/


/*
let activeGame = true;
let playerOne;
let playerTwo;
let newGame;


function player() {
  let name;
  let marker;
 
  
  const setName = () => name = prompt('Please enter your name');
  

  const playerDetails = () =>  console.log(`Player ${marker === 'X' ? 1 : 2} name: ${name}. Marker: ${marker}`);

  const getName = ()=> name;
    
  

  const setMarker = (markerPlaceholder) => marker = markerPlaceholder;
  const putMarker = () => marker; 

  const resetName = () => name = null; 
  const resetMarker = () => marker = null; 

  return {setName, getName, playerDetails, setMarker, putMarker, resetName, resetMarker};
} 

const gameboard = (function() {
    let boardArray = [0,1,2,3,4,5,6,7,8];
    let markers = [];
    const displayBoard = () => console.log(`
    ${boardArray[0]}   ${boardArray[1]}   ${boardArray[2]} 
    
    ${boardArray[3]}   ${boardArray[4]}   ${boardArray[5]}
    
    ${boardArray[6]}   ${boardArray[7]}   ${boardArray[8]}`);

    const pushMarker = marker => markers.push(marker);

    const checkAvailablePosition = numberInput => {
      if ( boardArray[numberInput] === 'X' || boardArray[numberInput] === 'O' ) {
       alert('The position is already taken over!');
        return false;
      } else {
        return true;
      }
    }

    const choosePosition = numberInput => {
     boardArray.splice(numberInput, 1, `${markers[markers.length - 1] === 'X' ? 'X' : 'O'}`);
     
      
    };

    const checkforWinner = marker => {
      if ((boardArray[0] === marker && boardArray[1] === marker && boardArray[2] === marker) || (boardArray[0] === marker && boardArray[3] === marker && boardArray[6] === marker) || (boardArray[0] === marker && boardArray[4] === marker && boardArray[8] === marker) 
      || (boardArray[1] === marker && boardArray[4] === marker && boardArray[7] === marker)
      || (boardArray[2] === marker && boardArray[5] === marker && boardArray[8] === marker) || (boardArray[2] === marker && boardArray[4] === marker && boardArray[6] === marker)
      || (boardArray[3] === marker && boardArray[4] === marker && boardArray[5] === marker)
      || (boardArray[6] === marker && boardArray[7] === marker && boardArray[8] === marker)) {
   
      if (marker === 'X') {
        announceWinner(playerOne.getName());
      } else  if (marker === 'O') {
        announceWinner(playerTwo.getName());
      }
      } 
    }

    const announceWinner = player => {
      console.log(`${player} has won the game! Total number of moves: ${markers.length}`);
      activeGame = false;

      const newGame = prompt('Do you want play again? Type "y" or "yes" to start a new game').toLowerCase();
      if (newGame === 'y' || newGame === 'yes') {
        resetGame();
        initializeGameParameters();
        startGame();
        activeGame = true;
      }
    }

    const resetBoard = () => {
      boardArray = [0,1,2,3,4,5,6,7,8];
      markers = [];

    }


    

    return {displayBoard, pushMarker, checkAvailablePosition, choosePosition, checkforWinner, resetBoard};
}) ();

function initializeGameParameters() {
console.log('Welcome to Tic Tac Toe! Good luck everyone and may the better player win!');
playerOne = player();
playerOne.setName();
playerOne.setMarker('X');
playerOne.playerDetails();


playerTwo = player();
playerTwo.setName();
playerTwo.setMarker('O');
playerTwo.playerDetails();


gameboard.displayBoard();
}

initializeGameParameters();


function gameFlow() {
  
  let activePlayer = 1;

  function switchLogic(playerInput, playerNumber) {
      
      let availablePosition = false;
    do {
      
      playerInput = Number(prompt(`${playerNumber.getName()}, where do you want to place your mark! Choose the number between 0 and 8`));
     if (gameboard.checkAvailablePosition(playerInput)) {
      availablePosition = true;
     } 
      } 
     while(!availablePosition); 
     gameboard.pushMarker(playerNumber.putMarker());
     gameboard.choosePosition(playerInput);
     gameboard.displayBoard();
     gameboard.checkforWinner('X');
     gameboard.checkforWinner('O');
     activePlayer = activePlayer === 1 ? 2:1;
    
  }

  const switchActivePlayer = () => {
    if (activePlayer === 1) {
      let playerOneInput;
      switchLogic(playerOneInput, playerOne);
     
     

    } else if (activePlayer === 2) {
        let playerTwoInput;
        switchLogic(playerTwoInput, playerTwo);
       
    }
  }

  return {switchActivePlayer};
}

function resetGame() {
  playerOne.resetName();
  playerOne.resetMarker();

  playerTwo.resetName();
  playerTwo.resetMarker();

  gameboard.resetBoard();
 
  
}

function startGame() {
  newGame = gameFlow();
}

startGame();

while(activeGame) {
  
newGame.switchActivePlayer();
} 

*/
 






/* UI version*/

let activeGame = false;
let playerOne;
let playerTwo;
let newGame;
let counter = 1;


const newGameButton = document.querySelector('.new-game');
const dataentryWindow = document.querySelector('.game-data');
const playerOneTextInput = document.querySelector('#player-one');
const playerTwoTextInput = document.querySelector('#player-two');
const gameWindow = document.querySelector('.game-window');
const errorMessage = document.querySelector('.error-message');
const playerOneName = document.querySelector('.player-one-name');
const playerTwoName = document.querySelector('.player-two-name');



function player() {
  let name;
  let marker;
 
  
  const setName = () => {
   

    if (counter === 1) {
      name = playerOneTextInput.value;
      counter++;
    } else if (counter === 2) {
      name = playerTwoTextInput.value;
      counter--;
      
    }
  }
  

  const playerDetails = () =>  console.log(`Player ${marker === 'X' ? 1 : 2} name: ${name}. Marker: ${marker}`);

  const getName = ()=> name;
    
  

  const setMarker = (markerPlaceholder) => marker = markerPlaceholder;
  const putMarker = () => marker; 

  const resetName = () => name = null; 
  const resetMarker = () => marker = null; 

  return {setName, getName, playerDetails, setMarker, putMarker, resetName, resetMarker};
} 

const gameboard = (function() {
    let boardArray = [0,1,2,3,4,5,6,7,8];
    let markers = [];
    const displayBoard = () => console.log(`
    ${boardArray[0]}   ${boardArray[1]}   ${boardArray[2]} 
    
    ${boardArray[3]}   ${boardArray[4]}   ${boardArray[5]}
    
    ${boardArray[6]}   ${boardArray[7]}   ${boardArray[8]}`);

    const statusMessage = document.querySelector('.status-messages');

    const changeStatusMessage = text => statusMessage.textContent = text;

    const pushMarker = marker => markers.push(marker);

    

    const checkAvailablePosition = numberInput => {
      if ( boardArray[numberInput] === 'X' || boardArray[numberInput] === 'O' ) {
       alert('The position is already taken over!');
        return false;
      } else {
        return true;
      }
    }

    const choosePosition = numberInput => {
     boardArray.splice(numberInput, 1, `${markers[markers.length - 1] === 'X' ? 'X' : 'O'}`);
     
      
    };

    const checkforWinner = marker => {
      if ((boardArray[0] === marker && boardArray[1] === marker && boardArray[2] === marker) || (boardArray[0] === marker && boardArray[3] === marker && boardArray[6] === marker) || (boardArray[0] === marker && boardArray[4] === marker && boardArray[8] === marker) 
      || (boardArray[1] === marker && boardArray[4] === marker && boardArray[7] === marker)
      || (boardArray[2] === marker && boardArray[5] === marker && boardArray[8] === marker) || (boardArray[2] === marker && boardArray[4] === marker && boardArray[6] === marker)
      || (boardArray[3] === marker && boardArray[4] === marker && boardArray[5] === marker)
      || (boardArray[6] === marker && boardArray[7] === marker && boardArray[8] === marker)) {
   
      if (marker === 'X') {
        announceWinner(playerOne.getName());
      } else  if (marker === 'O') {
        announceWinner(playerTwo.getName());
      }
      } 
    }

    const announceWinner = player => {
      console.log(`${player} has won the game! Total number of moves: ${markers.length}`);
      activeGame = false;

      const newGame = prompt('Do you want play again? Type "y" or "yes" to start a new game').toLowerCase();
      if (newGame === 'y' || newGame === 'yes') {
        resetGame();
        initializeGameParameters();
        startGame();
        activeGame = true;
      }
    }

    const resetBoard = () => {
      boardArray = [0,1,2,3,4,5,6,7,8];
      markers = [];

    }


    

    return {displayBoard, pushMarker, changeStatusMessage, checkAvailablePosition, choosePosition, checkforWinner, resetBoard};
}) ();

newGameButton.addEventListener('click', e=> {
  e.preventDefault();
  
  if (!playerOneTextInput.value || !playerTwoTextInput.value) {
    errorMessage.textContent = 'Please enter the names of both player one and player two!'
  } else {

  dataentryWindow.style.animation = 'scrollUp 1.5s forwards';
}
});

dataentryWindow.addEventListener('animationend', ()=> {
  gameWindow.style.animation = 'scrollDown 1.5s forwards';
  initializeGameParameters();
  dataentryWindow.classList.add('hidden');
  gameWindow.classList.remove('hidden');
  activeGame = true;
  startGame();
  /*while(activeGame) {
   
  newGame.switchActivePlayer();
  } */

  putMarkersOnBoard();
  
  
  
})

/* ***** */




function initializeGameParameters() {
console.log('Welcome to Tic Tac Toe! Good luck everyone and may the better player win!');
playerOne = player();
playerOne.setName();
playerOne.setMarker('X');
playerOne.playerDetails();
playerOneName.textContent = playerOne.getName();


playerTwo = player();
playerTwo.setName();
playerTwo.setMarker('O');
playerTwo.playerDetails();
playerTwoName.textContent = playerTwo.getName();


gameboard.displayBoard();
}




function gameFlow() {
  
  let activePlayer = 1;

  function switchLogic(playerInput, playerNumber) {
      
      let availablePosition = false;
    do {
      gameboard.changeStatusMessage(`${playerNumber.getName()}, choose your position!`);
      playerInput = Number(prompt(`${playerNumber.getName()}, where do you want to place your mark! Choose the number between 0 and 8`));
     if (gameboard.checkAvailablePosition(playerInput)) {
      availablePosition = true;
     } 
      } 
     while(!availablePosition); 
     gameboard.pushMarker(playerNumber.putMarker());
     gameboard.choosePosition(playerInput);
     gameboard.displayBoard();
     gameboard.checkforWinner('X');
     gameboard.checkforWinner('O');
     activePlayer = activePlayer === 1 ? 2:1;
    
  }

  const switchActivePlayer = () => {
    if (activePlayer === 1) {
      let playerOneInput;
      switchLogic(playerOneInput, playerOne);
     
     

    } else if (activePlayer === 2) {
        let playerTwoInput;
        switchLogic(playerTwoInput, playerTwo);
       
    }
  }

  return {switchActivePlayer};
}

function resetGame() {
  playerOne.resetName();
  playerOne.resetMarker();

  playerTwo.resetName();
  playerTwo.resetMarker();

  gameboard.resetBoard();
 
  
}

function startGame() {
  console.log(activeGame);
  alert('Igra pocinje');
  newGame = gameFlow();
  
}

//startGame();

function putMarkersOnBoard() {
  document.body.addEventListener('click', e => {
    console.log('pozicija', e.target.getAttribute('data-position'));
  })
}

















 