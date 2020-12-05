//main
DisplayQuestion();

function setEventListener(answer){
    let userInput = document.querySelector('#user-answer');
    let result = document.querySelector('#result');
    userInput.addEventListener('change', function callback(e){
        console.log(typeof e.target.value, typeof answer);
       if (checkAnswer(e.target.valueAsNumber, answer) === true){
        result.textContent = "정답!";
       }else{
        result.textContent = "오답!";
       }
    })
}

function makeQuestion(){
    let first = getRandomInt(1,10);
    let second = getRandomInt(1,10);
    let answer = first * second;

    setEventListener(answer);
    return createHTMLString(`${first} x ${second} = ?`);
}

function DisplayQuestion(){
    let container = document.querySelector('.question');
    container.innerHTML = makeQuestion();
}

function checkAnswer(useranswer, answer){
    if(useranswer === answer ){
        return true;
    }else{
        return false;
    }
}

function createHTMLString(newQuestion){
    return `
    <span>${newQuestion}</span>
    `
}

//랜덤 숫자값 내기 ( 1~9의 값)
function getRandomInt(min, max) {
    min = Math.ceil(min); // 정수 보장
    max = Math.floor(max);// 정수보장
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

