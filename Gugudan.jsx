const React = require('react'); // 노드의 모듈 시스템을 사용한 require
//소문자 react는 안 됨

class Gugudan extends React.Component {

    state = {
            first: this.getRandomInt(1, 10),
            second: this.getRandomInt(1, 10),
            useranswer: null,
            iscorrect: false,
            value: "",
    }

    getRandomInt(min, max) {
        min = Math.ceil(min); // 정수 보장
        max = Math.floor(max);// 정수보장
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    renderQuestion() {
        return (<div> {this.state.first} x {this.state.second} = ? </div>)
    }
    // arrow function만 쓸 수 있음
    //따로 빼낸 이유. setState할 때마다 새로운 함수가 새로 생성됨
    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            let answer = (this.state.first) * (this.state.second);
            let useranswer = parseInt(this.state.value);

            console.log("useranswer", useranswer)
            if (useranswer === answer) {
                this.setState((prevState) => { 
                    return{
                        first: this.getRandomInt(1, 10),
                        second: this.getRandomInt(1, 10),
                        useranswer: prevState.value,
                        iscorrect: "true",
                        value: '',  
                    }
                });
                //setStae 비동기 -> 이전 스테이트의 값으로 현재값을 만들 때에는 return 을 쓰는 것이 좋다. 
                //functional setState
                // this.setState((prevstate)=> {
                //     return {
                //         first: ~,
                //         second: ~,
                //         useranswer: prevstate.value,
                //         iscorrect: ~,
                //         value: ''
                //     }
                // }) 
                console.log("true");
            }else {
                this.setState({
                    useranswer: useranswer,
                    iscorrect: "false",
                    value: '',
                })
                console.log("false");
            }
            //document.querySelector('input').value = "";
        }
    }

    onChange = (e) => {
        this.setState({ value: e.target.value });
    }

    renderUserInput() {
        return (<input
            type="number"
            onKeyDown={(e) => this.onKeyDown(e)}
            onChange={(e) => this.onChange(e)}
            value={this.state.value} />)
    }

    render() { //setState를 할 때마다 render를 호출
        return (
            //dom에 직접 접근하고 싶을 때 => ref를 사용
            <React.Fragment>
                <div>{this.renderQuestion()}</div>
                <div>{this.renderUserInput()}</div>
                <div>{this.state.iscorrect}: {this.state.useranswer}</div>
            </React.Fragment>
        )
    }
}
module.exports = Gugudan;
// function Question(props) {
//     return (
//         <div>
//             {props.first} x {props.second} = ?
//         </div>
//     )
// }

// //prop과 state의 차이
// class UserInput extends react.Component {
//     render() {
//         return (
//             <input
//             type="number"
//             value={this.props.value}
//             onKeyDown={this.props.onKeyDown}
//             onChange={this.props.onChange}
//         );
//     }
// }
