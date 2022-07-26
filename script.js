//paint

let color = 'black'
let bgcolor = 'white'


const COLOR = document.querySelector('.color')
const BOARD = document.querySelector('#grid')
const rangeval = document.querySelector('.rangeval')

//fill the canvas with pixel divs
function fillBoard(size){
   
   BOARD.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
   BOARD.style.gridTemplateRows = `repeat(${size} , 1fr)`;

   let totalsize = size * size;
   for (let i = 0; i < totalsize; i++) {
      const BOX = document.createElement('div')
      BOX.addEventListener('click', paint)
      BOX.style.backgroundColor = bgcolor
      BOARD.insertAdjacentElement('beforeend', BOX)
   }
}
fillBoard(16)

//fill and change color
function changeBackground(bg){bgcolor = bg; clearCanvas()}
function changeColor(paint) {
   let r = parseInt(Math.random() * 256)
   let g = parseInt(Math.random() * 256)
   let b = parseInt(Math.random() * 256)
   
   if (paint === 'rand') {
      color = `rgb(${r}, ${g}, ${b})`
      return
   }
   color = paint
   return
}

//change the paint color in current color
function paint(){this.style.background = color;} 

//change canvas size
function changeSize(size){
   fillBoard(size)
   clearCanvas()
   rangeval.textContent = size
}

//clear the canvas and use the current bgcolor
function clearCanvas() {
   const box = document.querySelectorAll('#grid > div')
   box.forEach(div => div.style.backgroundColor = bgcolor)
}
