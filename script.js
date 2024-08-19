function player() {
  let name;
  let marker;
 
  
  const setName = () => name = prompt('Please enter your name');
  

  const getName = () =>  console.log(`Player ${marker === 'X' ? 1 : 2} name: ${name}. Marker: ${marker}`);
    
  

  const setMarker = (markerPlaceholder) => marker = markerPlaceholder;
  const putMarker = () => marker; 

  return {setName, getName, setMarker, putMarker};
} 

const gameboard = (function() {
    let boardArray = [1,2,3,4,5,6,7,8,9];
    const displayBoard = () => console.log(`
    ${boardArray[0]}   ${boardArray[1]}   ${boardArray[2]} 
    
    ${boardArray[3]}   ${boardArray[4]}   ${boardArray[5]}
    
    ${boardArray[6]}   ${boardArray[7]}   ${boardArray[8]}`);

    return {displayBoard};
}) ();

console.log('Welcome to Tic Tac Toe! Good luck everyone and may the better player win!');

const playerOne = player();
playerOne.setName();
playerOne.setMarker('X');
playerOne.getName();


const playerTwo = player();
playerTwo.setName();
playerTwo.setMarker('O');
playerTwo.getName();


gameboard.displayBoard();









 