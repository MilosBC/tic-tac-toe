function player() {
  let name;
  let marker;
 
  
  const setName = () => name = prompt('Please enter your name');
  

  const getName = () =>  console.log(`Player ${marker === 'X' ? 1 : 2} name: ${name}. Marker: ${marker}`);
    
  

  const setMarker = (markerPlaceholder) => marker = markerPlaceholder;
  const putMarker = () => marker; 

  return {setName, getName, setMarker, putMarker};
} 

console.log('Welcome to Tic Tac Toe! Good luck everyone and may the better player win!');

const playerOne = player();
playerOne.setName();
playerOne.setMarker('X');
playerOne.getName();


const playerTwo = player();
playerTwo.setName();
playerTwo.setMarker('O');
playerTwo.getName();







 