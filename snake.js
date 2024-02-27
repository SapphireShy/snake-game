//board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context; 



window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d"); //used for drawing on the board

    update();

}

function update() {
    context.fillstyle="black";
    context.fillRect(0, 0, board.width, board.height);



}