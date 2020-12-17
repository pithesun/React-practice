const React = require('react');

//랜덤 숫자값 내기 ( 1~9의 값), 중복 없이
function getRandomInt(min, max) {
    min = Math.ceil(min); // 정수 보장
    max = Math.floor(max);// 정수보장
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
//num 만큼의 숫자 랜덤 생성
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
class NumberBall extends React.Component{
    state = {
        value: '',
        answer: saveRandomInt(4),
        result: '',
        history: [{
            results: Array(2).fill(null),
            userInput: null,
            tryCount: 0,
        }]
    }

    //퍼블릭 클래스 필드 문법  @babel/plugin-proposal-class-properties
    onChange = (e) => {
        this.setState({ value: e.target.value });
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        let userInput = this.state.value;

        let result = new Array(2).fill(0);
        let answer = this.state.answer;
        //console.log(answer);

        //check answer
        //console.log("value", userInput);
        answer.forEach((answerValue, answerIndex) => {
            Array.from(userInput).forEach((inputValue, inputIndex) => {
                console.log(answerValue, inputValue);
                if( answerValue === inputValue*1){
                    if( answerIndex === inputIndex) result[0] += 1;
                    else{ result[1] +=1; }
                }
            })
        })

        this.setState((prevstate) => {
            let prevcount = prevstate.history.length-1;
            console.log("prevcount ", prevcount);
            return {
                result: result,
                history: prevstate.history.concat({
                    tryCount: prevcount + 1,
                    results: result,
                    userInput: userInput
                }),
            }
        })
        console.log("count", this.state.history.tryCount);
    }
    render(){
        const tries = this.state.history;
        return (
            <>
                <form onSubmit={(e)=> this.onSubmitForm(e)}>
                    <input
                        onChange={(e) => this.onChange(e)}/>
                    <button>입력!</button>
                </form>
                <ul>
                    {tries.map((v,i) => {
                        return(
                            
                            <li key={i}> {v.tryCount}차 시도: {v.results[0]} 스트라이크 {v.results[1]} 볼 
                                <span>{v.tryCount === 10 ? " 게임 완료": null}</span>
                                <span>{v.results[0] === 4 ? " 성공": null}</span>
                            </li>
                            
                        );
                    })}

                </ul>
            </>
        )
    }
}

module.exports = NumberBall;