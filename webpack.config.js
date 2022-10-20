const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.glsl$/,
                exclude: /node_modules/,
                loader: 'webpack-glsl',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|js)x?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
        new NodePolyfillPlugin(),
    ],
};
