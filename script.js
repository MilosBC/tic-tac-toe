let activeGame = true;


function player() {
  let name;
  let marker;
 
  
  const setName = () => name = prompt('Please enter your name');
  

  const playerDetails = () =>  console.log(`Player ${marker === 'X' ? 1 : 2} name: ${name}. Marker: ${marker}`);

  const getName = ()=> name;
    
  

  const setMarker = (markerPlaceholder) => marker = markerPlaceholder;
  const putMarker = () => marker; 

  return {setName, getName, playerDetails, setMarker, putMarker};
} 

const gameboard = (function() {
    let boardArray = [1,2,3,4,5,6,7,8,9];
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
    }


    

    return {displayBoard, pushMarker, checkAvailablePosition, choosePosition, checkforWinner};
}) ();



console.log('Welcome to Tic Tac Toe! Good luck everyone and may the better player win!');

const playerOne = player();
playerOne.setName();
playerOne.setMarker('X');
playerOne.playerDetails();


const playerTwo = player();
playerTwo.setName();
playerTwo.setMarker('O');
playerTwo.playerDetails();


gameboard.displayBoard();


function gameFlow() {
  
  let activePlayer = 1;

  const switchActivePlayer = () => {
    if (activePlayer === 1) {
      let playerOneInput;
      let availablePosition = false;
    do {
      
      playerOneInput = Number(prompt(`${playerOne.getName()}, where do you want to place your mark! Choose the number between 1 and 9`));
     if (gameboard.checkAvailablePosition(playerOneInput)) {
      availablePosition = true;
     } 
      } 
     while(!availablePosition); 

   

     /*playerOneInput = Number(prompt(`${playerOne.getName()}, where do you want to place your mark! Choose the number between 1 and 9`));
     gameboard.checkAvailablePosition(playerOneInput); */

     gameboard.pushMarker(playerOne.putMarker());
     gameboard.choosePosition(playerOneInput);
     gameboard.displayBoard();
     gameboard.checkforWinner('X');
     gameboard.checkforWinner('O');
     activePlayer = 2;
     

    } else if (activePlayer === 2) {
      let playerTwoInput;
      let availablePosition = false;
    do {
      
      playerTwoInput = Number(prompt(`${playerTwo.getName()}, where do you want to place your mark! Choose the number between 1 and 9`));
     if (gameboard.checkAvailablePosition(playerTwoInput)) {
      availablePosition = true;
     } 
      } 
     while(!availablePosition); 

     gameboard.pushMarker(playerTwo.putMarker());
     gameboard.choosePosition(playerTwoInput);
     gameboard.displayBoard();
     gameboard.checkforWinner('X');
     gameboard.checkforWinner('O');
     activePlayer = 1;
    }
  }

  return {switchActivePlayer};
}

function resetGame() {
  
}

const newGame = gameFlow();

while(activeGame) {
  
newGame.switchActivePlayer();
} 
 










 