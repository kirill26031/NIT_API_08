const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'js/main.js',
    },
	devServer: {
      inline: true,
      port: 8001
   },

	module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: "babel-loader"
                }
					// query: {
			        //     presets: ['es2015', 'react']
			        // }
                
                    
            },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      modules: true
                    }
                  }
                ]
              },
        ],
    },
    // ...previous Webpack config...
    plugins:[
      new HtmlWebpackPlugin({
         template: 'docs/index.html'
      })
   ]
};