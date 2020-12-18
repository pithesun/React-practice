//스크립트가 아닌 노드의 모듈 시스템
const React = require('react');
const ReactDom = require('react-dom');
import NumberBall from './NumberBall';

ReactDom.render(<NumberBall />, document.querySelector('#root'));
