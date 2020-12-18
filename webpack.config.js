const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval', // hidden-source-map => production
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: { //babel의 옵션
                presets: [ 
                    ['@babel/preset-env', { 
                        targets: 'last 2 chrome versions'} ], //broswerslist
                    '@babel/preset-react'],
                plugins: [ '@babel/plugin-proposal-class-properties',
                'react-refresh/babel'], //핫리로딩 기능 추가-- 변경점 탐지
            }
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'), //인자 1(현재 폴더 경로)와 인자2를 합쳐줌 
        filename: 'app.js',
        publicPath: '/dist/' // 가상의 경로 -- node의 express static이랑 비슷
    },
    devServer: {
        publicPath: '/dist/', //결과물 저장 및 변경점 감지
        hot: true
    }
};