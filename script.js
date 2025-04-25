let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  
  function Player(number, name, piece) {
    this.number = number;
    this.name = name;
    this.piece = piece;
  }
  
  const Player1 = new Player(1, "Player 1", "X");
  const Player2 = new Player(2, "Player 2", "O");
  
  let currentPlayer = Player1;
  const statusDiv = document.getElementById("status");
  const grid = document.getElementById("grid");
  const restartBtn = document.getElementById("restart");
  
  // Initialize grid
  function initBoard() {
    grid.innerHTML = '';
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const btn = document.createElement("button");
        btn.dataset.row = r;
        btn.dataset.col = c;
        btn.addEventListener("click", handleClick);
        grid.appendChild(btn);
      }
    }
    statusDiv.textContent = `Player ${currentPlayer.piece}'s turn`;
  }
  
  function handleClick(e) {
    const row = e.target.dataset.row;
    const col = e.target.dataset.col;
  
    if (board[row][col] !== "") return;
  
    board[row][col] = currentPlayer.piece;
    e.target.textContent = currentPlayer.piece;
    e.target.disabled = true;
  
    if (checkWin()) {
      statusDiv.textContent = `${currentPlayer.name} wins!`;
      disableBoard();
      return;
    }
  
    if (checkDraw()) {
      statusDiv.textContent = "It's a draw!";
      return;
    }
  
    currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
    statusDiv.textContent = `Player ${currentPlayer.piece}'s turn`;
  }
  
  function checkWin() {
    const p = currentPlayer.piece;
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === p && board[i][1] === p && board[i][2] === p) return true;
      if (board[0][i] === p && board[1][i] === p && board[2][i] === p) return true;
    }
    if (board[0][0] === p && board[1][1] === p && board[2][2] === p) return true;
    if (board[0][2] === p && board[1][1] === p && board[2][0] === p) return true;
    return false;
  }
  
  function checkDraw() {
    return board.flat().every(cell => cell !== "");
  }
  
  function disableBoard() {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
  }
  
  restartBtn.addEventListener("click", () => {
    currentPlayer = Player1;
    initBoard();
  });
  
  // Start game
  initBoard();
  