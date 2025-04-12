const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

function Player(number,name,piece){
    this.number = number
    this.name = name
    this.piece = piece
};

const Player1 = new Player(1,"idk","X");
const Player2 = new Player(2,"ik","O");


function displayBoard(){
    console.clear();
     console.log("Current Board:");
    board.forEach(row => console.log(row.join(" | ")));
}


function gameMaster(Player1,Player2){

    const currentPlayer = Player1
    console.clear()
    console.log("Game Start, "+currentPlayer.name+" Goes first")
    while(!checkWin()){
        
    }

    function makePlay(row,col){
        if(row<0 || row>2 || col<0 || col>2){
            console.log("Invalid Play");
            return False
        }
        if(board[row][col]!=""){
            console.log("Spot Taken!")
            return False
        }
        board[row][col] = currentPlayer.piece
        return True
    }
    
    function checkWin(){
            for (let i = 0; i < 3; i++) {
              if (board[i][0] === currentPlayer &&
                  board[i][1] === currentPlayer &&
                  board[i][2] === currentPlayer) return true;
          
              if (board[0][i] === currentPlayer &&
                  board[1][i] === currentPlayer &&
                  board[2][i] === currentPlayer) return true;
            }
          
            if (board[0][0] === currentPlayer &&
                board[1][1] === currentPlayer &&
                board[2][2] === currentPlayer) return true;
          
            if (board[0][2] === currentPlayer &&
                board[1][1] === currentPlayer &&
                board[2][0] === currentPlayer) return true;
          
            return false;
    }

    
}

displayBoard()