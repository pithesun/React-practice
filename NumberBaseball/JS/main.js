//main
//숫자 4자리 중복 없이 랜덤생성
//사용자 입력을 받아와서 답과 비교 -> 숫자만 맞으면 볼, 자리까지 받으면 스트라이크

//숫자 저장
function saveRandomInt(num){
    let array = new Array(num).fill(0);
    for(let i=0; i < num; i++){ 

        let newInt = getRandomInt(1,9);
        
        while (array.includes(newInt) === true) {
            newInt = getRandomInt(1,9);
        }
        
        array[i] = newInt;
    }
    console.log("array", array);
    return array;
}

//사용자 입력 받기
function setEventListener(answer){
    let userInput = document.querySelector('#user-answer');
    let container = document.querySelector('#result');

    userInput.addEventListener('change', function onChange(e){

        let input = e.target.value;
        console.log("input", typeof input);

        let result = checkAnswer(answer, input);
        container.innerHTML = createHTMLString(result);
    });
}

/*-----------------------------------------------------*/
function checkAnswer(answer, input){

    // 인덱스 0 => 스트라이크, 인덱스 1 => 볼
    let result = new Array(2).fill(0);
    answer.forEach((avalue, aindex) => {

        Array.from(input).forEach((ivalue, iindex) => {
            console.log(avalue, ivalue);
            if( avalue === ivalue*1){
                if( aindex === iindex) result[0] += 1;
                else{ result[1] +=1; }
            }
        })
    })
    console.log(result);
    return result;
}
function createHTMLString(result){
    return `
    <span>${result[0]} 스트라이크 ${result[1]} 볼 </span>
    `
}
//랜덤 숫자값 내기 ( 1~9의 값), 중복 없이
function getRandomInt(min, max) {
    min = Math.ceil(min); // 정수 보장
    max = Math.floor(max);// 정수보장
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

/*------main--------------*/
let answer = saveRandomInt(4);
setEventListener(answer);
