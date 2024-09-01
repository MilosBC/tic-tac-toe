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

    const choosePosition = numberInput => {
     boardArray.splice(numberInput, 1, `${markers[markers.length - 1] === 'X' ? 'X' : 'O'}`);
     
      
    }

    

    return {displayBoard, pushMarker, choosePosition};
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
     const playerOneInput = Number(prompt(`${playerOne.getName()}, where do you want to place your mark! Choose the number between 1 and 9`));
     gameboard.pushMarker(playerOne.putMarker());
     gameboard.choosePosition(playerOneInput);
     gameboard.displayBoard();
     activePlayer = 2;
     

    } else if (activePlayer === 2) {
      const playerTwoInput = Number(prompt(`${playerTwo.getName()}, where do you want to place your mark! Choose the number between 1 and 9`));
     gameboard.pushMarker(playerTwo.putMarker());
     gameboard.choosePosition(playerTwoInput);
     gameboard.displayBoard();
     activePlayer = 1;
    }
  }

  return {switchActivePlayer};
}

const newGame = gameFlow();

newGame.switchActivePlayer(); 
newGame.switchActivePlayer(); 
newGame.switchActivePlayer(); 
newGame.switchActivePlayer(); 









 