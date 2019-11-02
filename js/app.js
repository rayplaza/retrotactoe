/*----- constants -----------------------------------------------------*/
const PLAYER_1_WIN = 3;
const PLAYER_2_WIN = -3;
// const COLOR {
//     playerOne: blue,
//     playerTwo: green,
//     emptySquare: grey
// }




/*----- app's state (variables) --------------------------------------*/
let turn, winner, board;





/*----- cached element references ------------------------------------*/
const messageEl = document.querySelector('h2');
const boardEl = document.querySelector('section')
const resetButton = document.getElementById('reset')
let boardContainer = [[0, 0, 0],
                      [0, 0, 0],
                      [0, 0, 0]];


for (c=0; c < 3; c++) {
   for (r=0; r < 3; r++) {
   boardContainer[c][r] = document.getElementById(`c${c}r${r}`)
   }
};





/*---------- event listeners ------------------------------------------*/
document.getElementById('')






/*----------- functions ----------------------------------------------*/

function handleSquareClick(evt) {

}
