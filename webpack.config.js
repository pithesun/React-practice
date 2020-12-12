const path = require('path');
const webpack  = require('webpack');

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
                plugins: [ '@babel/plugin-proposal-class-properties'],
            }
        }],
    },
    output: {
        path: path.join(__dirname, 'dist'), //인자 1(현재 폴더 경로)와 인자2를 합쳐줌 
        filename: 'app.js'
    },

};