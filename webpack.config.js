const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    experimental: {
        swcPlugins: [
            [
                'raw.macro/swc',
                {
                    rootDir: __dirname,
                },
            ],
        ],
    },
    module: {
        loaders: [
            {
                test: /\.glsl$/,
                loader: 'webpack-glsl',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
    ],
};
