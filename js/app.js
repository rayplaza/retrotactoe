/*----- constants -----------------------------------------------------*/
const winCombos = [ 
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];


/*----- app's state (variables) --------------------------------------*/
function init() {
   turn = 1;
   board = [0,0,0,
            0,0,0,
            0,0,0]
   squares.forEach(function(e){
       e.textContent = '';
       e.className = 'box';
   });

   boxContainer.addEventListener('click', handleClick)
   messageEl.textContent = '';
   }






/*----- cached element references ------------------------------------*/
const messageEl = document.querySelector('h2');
const resetEl = document.getElementById('reset');
const boxContainer = document.querySelector('.container')
const squares = document.querySelectorAll('div')





/*---------- event listeners ------------------------------------------*/
resetEl.addEventListener('click', init)

 boxContainer.addEventListener('click', handleClick)

init();






/*----------- functions ----------------------------------------------*/

function handleClick(evt) {
   if (evt.target.tagName !== 'DIV' || evt.target.className === 'disable') {
   return;
   }
   board[parseInt(evt.target.id)] = turn;
   console.log(turn)
   if(turn === 1) {
       
       evt.target.textContent = 'X'
   } else {
       evt.target.textContent = 'O'
   }
   evt.target.className = 'disable'
   checkWinner();
   turn *= -1;
}


function checkWinner() {
   for (i=0; i < winCombos.length; i++) {
       let counter = 0;
           for(f=0; f < 3; f++) {
               counter += board[winCombos[i][f]]
           }
       if (counter === 3 || counter === -3) {
           if (counter === 3) {
           messageEl.textContent = "X is the winner winner chicken dinner!!!"
           boxContainer.removeEventListener('click', handleClick)
           } else if (counter === -3) {
               messageEl.textContent = "O is the winner winner chicken dinner!!!"
               boxContainer.removeEventListener('click', handleClick)
           }
           return;
       } else if (!board.includes(0)) {
           messageEl.textContent = "Tie Game!"
           return;
       }
   }
}    

