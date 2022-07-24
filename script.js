let color = 'black';

const BOARD = document.querySelector('#grid')
   

//fill the canvas with pixel divs
function fillBoard(size){
   
   BOARD.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
   BOARD.style.gridTemplateRows = `repeat(${size} , 1fr)`;

   let totalsize = size * size;
   for (let i = 0; i < totalsize; i++) {
      const BOX = document.createElement('div')
      BOX.addEventListener('click', paint)
      BOX.style.backgroundColor = 'white'
      BOARD.insertAdjacentElement('beforeend', BOX)
   }
}
fillBoard(16)

//fill and change color
function changeColor(newcolor){color = newcolor}
function paint(){this.style.backgroundColor = color}

//change canvas size

function changeSize(size){
   
}
