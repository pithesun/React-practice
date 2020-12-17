const React = require('react');

class Try extends React.Component{
    render(){
        return (
            <li key={this.props.i}> 
                {this.props.tryCount}차 시도: {this.props.results[0]} 스트라이크 {this.props.results[1]} 볼 
                <span>{this.props.tryCount === 10 ? " 게임 완료": null}</span>
                <span>{this.props.results[0] === 4 ? " 성공": null}</span>
            </li>
        )
    }
    
}

module.exports = Try;