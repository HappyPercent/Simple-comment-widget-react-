const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'build.js',
    },
    devServer: {
        overlay: true
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env', 
                        '@babel/preset-react'
                    ]
                }
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: "css-loader"
            })
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin("build.css"),
        new HtmlWebpackPlugin()
    ]
  }

module.exports = (env, options) => {
    const production = options.mode === 'production';

    conf.devtool = production
                    ? false
                    : 'eval-sourcemap';
    
    return conf;
}