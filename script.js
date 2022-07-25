//paint

let color = 'black';
let bgcolor = 'white'

const BOARD = document.querySelector('#grid')

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
function changeColor(newcolor){
   let r = parseInt(Math.random() * 256)
   let g = parseInt(Math.random() * 256)
   let b = parseInt(Math.random() * 256)
   color = (newcolor === 'random') ? `rgb(${r}, ${g}, ${b})` : newcolor}
function paint(){this.style.backgroundColor = color} 

//change canvas size
function changeSize(size){
   fillBoard(size)
   clearCanvas()
}

function clearCanvas() {
   const box = document.querySelectorAll('div')
   box.forEach(div => div.style.backgroundColor = bgcolor)
}


//ui
const range = document.querySelector('.size')
const rangeVal = document.querySelector('.rangeval')

range.onchange = () => rangeVal.textContent = range.value
range.ontouchmove = () => rangeVal.textContent = range.value
