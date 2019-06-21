const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ENVIRONMENT = String.prototype.toLowerCase.call(process.env.ENVIRONMENT || 'development');

module.exports = {
    mode: ENVIRONMENT,

    entry: {
        app: './src/public/javascripts/src/index.tsx'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    output: {
        path: path.resolve('./src/public/javascripts/dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    ie8: true,
                    compress: true,
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            })
        ]
    },

    target: 'web',
    devtool: 'source-map',
    watchOptions: {
        ignored: ['node_modules']
    }
};