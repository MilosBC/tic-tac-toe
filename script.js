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
 










 