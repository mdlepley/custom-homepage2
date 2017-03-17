var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8881/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6']
    },
    module: {
        rules: [{
                test: /\.jsx$|\.es6$|\.js$/,
                use: ['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$|\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
