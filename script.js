// select all the boxes in queryselectorall method which returns an array
let box = document.querySelectorAll('.box');

// changes according to the click
let currentPlayer = "O";

let gameState = ["", "", "", "", "", "", "", "", ""];


const winMessage = () => `player ${currentPlayer} win the game`;

const drawMessage = () => `game ended in draw`;



box.forEach((item, index) => {
    item.addEventListener('click', () => {
        handleCellClicked(index);
    });
})


// console.log(gameState);


const handleCellClicked = (i) => {
    if(box[i].innerHTML == ""){
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        box[i].innerHTML = currentPlayer;
        gameState[i] = currentPlayer;
    }
    else{
        alert('index already clicked');
    }
    setTimeout(() => {
        checkWinner();
    }, 500)
}

const checkWinner = () => {
    const winningPossibilities = 
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    
    let roundWon = false;
    for(let i = 0; i <= 7; i++){
        const winCondition = winningPossibilities[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        console.log(a, b, c);

        if(a === '' || b === "" || c === ''){
            continue;
        }
        if(a === b && b === c){
            roundWon = true;
            break;
        }

    }

    if(roundWon){

        alert(winMessage());
        restartGame();
        return;
    }

    let roundDraw = !gameState.includes("");
    if(roundDraw){
        alert(drawMessage());
    }

    
}

const restartGame = () => {
    location.reload();
}
