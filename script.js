const gameDiv = document.getElementById("game");
let constructBoard = "";
let board = ["","","","","","","","",""];
let board2 = ["","","","","","","","","","","","","","","",""];
let board3 = ["","","","","","","","","","","","","","","","","","","","","","","","",""];
let emojis = ["🌟", "❄️", "⛄", "🎁", "🔔", "🔥", "🦌"];
let turnCounter = 0;
let winner = "";
let playercount = 0;
let boardsize = 1;

// let hver3Rute % 3 == 0? "hver3":"";
checkBoard();
showView();
function showView(){
    if(constructBoard != ""){
    gameDiv.innerHTML = `${constructBoard}
    <p class="winner">${winner}</p>
    `;
    }

}

function checkBoard(){
    constructBoard = "";
    if(boardsize == 0){
        for(let i = 0; i < board.length; i++){
            constructBoard += `<div onclick="placeBrick(${i})" class="square">${board[i]}</div>`;
        }
    }
    if(boardsize == 1){
        for(let i = 0; i < board2.length; i++){
            constructBoard += `<div onclick="placeBrick(${i})" class="square">${board2[i]}</div>`;
        }
    }
    if(boardsize == 2){
        for(let i = 0; i < board3.length; i++){
            constructBoard += `<div onclick="placeBrick(${i})" class="square">${board3[i]}</div>`;
        }
    }
    showView();
}
function placeBrick(boardRuteIndex){
    if(winner != "") return;
     if(board2[boardRuteIndex] != "") return;
     if(turnCounter == 4) turnCounter = 0;
     if(turnCounter == 0){
        board2[boardRuteIndex] = emojis[0];
       }
     if(turnCounter == 1){
     board2[boardRuteIndex] = emojis[1];
     }
     if(turnCounter == 2){
        board2[boardRuteIndex] = emojis[2];
    }
    if(turnCounter == 3){
        board2[boardRuteIndex] = emojis[3];
       }
    
      console.log(turnCounter);
    checkWinner2(turnCounter);
    
    checkBoard();

  turnCounter ++; 

}
function checkWinner(turnCounter){
    let brikke = (turnCounter % 2 == 0)? "🌟":"🎅"; 
   // if (turnCounter )

    if(board[0] == board[2] && board[1] == board[2] //3 første sjekker bortover
    || board[3] == brikke && board[4] == brikke && board[5] == brikke
    || board[6] == brikke && board[7] == brikke && board[8] == brikke 
        // disse 3 sjekker nedover
    || board[0] == brikke && board[3] == brikke && board[6] == brikke
    || board[1] == brikke && board[4] == brikke && board[7] == brikke 
    || board[2] == brikke && board[5] == brikke && board[8] == brikke
        // disse sjekker diagonalt
    || board[0] == brikke && board[4] == brikke && board[8] == brikke
    || board[2] == brikke && board[4] == brikke && board[6] == brikke)
    {
       winner = brikke + " Vinner!!";  
    }
}
function clearBoard(){
    board = ["","","","","","","","",""];
    board2 = ["","","","","","","","","","","","","","","",""];
    board3 = ["","","","","","","","","","","","","","","","","","","","","","","","",""];

    turnCounter = 0;
    winner = "";
   checkBoard();
}

function checkWinner2(turnCounter){
    
    // let brikke = (turnCounter % 2 == 0)? "🌟":"🎅"; 
    let brikke = ""; 
    if (turnCounter == 0 ) brikke = emojis[0];
    if (turnCounter == 1 ) brikke = emojis[1];
    if (turnCounter == 2 ) brikke = emojis[2];
    if (turnCounter == 3 ) brikke = emojis[3];

    if(board2[0] == brikke && board2[1] == brikke && board2[2] == brikke
    || board2[1] == brikke && board2[2] == brikke && board2[3] == brikke
    || board2[4] == brikke && board2[5] == brikke && board2[6] == brikke 
    || board2[5] == brikke && board2[6] == brikke && board2[7] == brikke 
    || board2[8] == brikke && board2[9] == brikke && board2[10] == brikke 
    || board2[9] == brikke && board2[10] == brikke && board2[11] == brikke 
    || board2[12] == brikke && board2[13] == brikke && board2[14] == brikke 
    || board2[13] == brikke && board2[14] == brikke && board2[15] == brikke 
  
    || board2[0] == brikke && board2[4] == brikke && board2[8] == brikke
    || board2[1] == brikke && board2[5] == brikke && board2[9] == brikke 
    || board2[2] == brikke && board2[6] == brikke && board2[10] == brikke
    || board2[3] == brikke && board2[7] == brikke && board2[11] == brikke
    || board2[4] == brikke && board2[8] == brikke && board2[12] == brikke
    || board2[5] == brikke && board2[9] == brikke && board2[13] == brikke
    || board2[6] == brikke && board2[10] == brikke && board2[14] == brikke
    || board2[7] == brikke && board2[11] == brikke && board2[15] == brikke
        
    || board2[0] == brikke && board2[5] == brikke && board2[10] == brikke
    || board2[5] == brikke && board2[10] == brikke && board2[15] == brikke
    || board2[1] == brikke && board2[6] == brikke && board2[11] == brikke
    || board2[4] == brikke && board2[9] == brikke && board2[14] == brikke
    || board2[2] == brikke && board2[5] == brikke && board2[8] == brikke
    || board2[3] == brikke && board2[6] == brikke && board2[9] == brikke
    || board2[6] == brikke && board2[9] == brikke && board2[12] == brikke
    || board2[7] == brikke && board2[10] == brikke && board2[13] == brikke)
    {
       winner = brikke + " Vinner!!";  
    }
}