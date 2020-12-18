class Square{
    constructor(number) {
        this.number = number;
    }
}

let count = 0; 
let squares = makeSquares();
setEventListener();

function makeSquares(){
    //2차원 배열
    arr = new Array(9).fill(0);
    for(let i= 0; i < 9; i++){
        arr[i] = new Square(i);
    }
    return arr;
}

function onButtonClick(event) {
    count++;

    btn = event.target;
    dataset = event.target.dataset;
    key= dataset.key;

    let turn =  (count%2) === 0 ? 'O' : 'X'
    btn.textContent = turn;
    squares[key] = turn;

    winner = calculateWinner(squares);
    if(winner){
        displayWinner(winner);
    }
}

function displayWinner(winner){
    let container = document.querySelector('.winner');
    container.innerHTML= `<span> winner: ${winner} </span>`;
}

function setEventListener(){
    board = document.querySelector('.board');
    console.log(board);
    board.addEventListener('click', (event) => onButtonClick(event))
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
}