const path              = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    files: {'css': ['./main.css']}
});

module.exports = {
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js?v=[chunkhash]',
        chunkFilename: '[id].js?v=[chunkhash]',
    },

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
};