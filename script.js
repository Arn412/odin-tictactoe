let board = [
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



function GameMaster(Player1, Player2) {
    let currentPlayer = Player1;

    function makePlay(row, col) {
        if (row < 0 || row > 2 || col < 0 || col > 2) {
            console.log("Invalid Play");
            return false;
        }
        if (board[row][col] != "") {
            console.log("Spot Taken!");
            return false;
        }

        board[row][col] = currentPlayer.piece;
        return true;
    }

    function checkWin() {
        let p = currentPlayer.piece;
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === p &&
                board[i][1] === p &&
                board[i][2] === p) return true;

            if (board[0][i] === p &&
                board[1][i] === p &&
                board[2][i] === p) return true;
        }

        if (board[0][0] === p &&
            board[1][1] === p &&
            board[2][2] === p) return true;

        if (board[0][2] === p &&
            board[1][1] === p &&
            board[2][0] === p) return true;

        return false;
    }

    function displayBoard() {
        console.clear();
        console.log("Current Board:");
        board.forEach(row => console.log(row.join(" | ")));
    }

    return {
        run: function () {
            console.clear();
            console.log("Game Start, " + currentPlayer.name + " goes first");
            displayBoard();

            while (true) {
                console.log(currentPlayer.name + "'s Turn");
                let row = prompt("Enter row (0-2): ");
                let col = prompt("Enter column (0-2): ");
                let res = makePlay(row, col);

                if (!res) {
                    console.log("Try Again");
                    continue;
                }

                displayBoard();

                if (checkWin()) {
                    console.log(currentPlayer.name + " wins!");
                    break;
                }

                
                currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
            }
        }
    };
}

const test = new GameMaster(Player1,Player2)
test.run()

displayBoard()
