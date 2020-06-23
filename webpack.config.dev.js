const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: 'index.html',
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        })
    ],
   entry: './index.js',
   mode: 'development',
   output: {
       path: path.resolve('./public'), //cria pasta public
       filename: 'bundle.js'
   },
   devServer: {
       hot: true,
       inline: true,
       headers: { 'Access-Control-Allow-Origin': '*' },
       historyApiFallback: {
           index: 'http://localhost:8080'
       }
   },

   resolve: {
       extensions: [' ', '.js', '.jsx'],
       alias: {
           modules: __dirname + '/node_modules'
       }
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
           },
           {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               use: 'babel-loader',
           },
           {
               test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif|svg)$/,
               loader: 'url-loader?limit=100000'
           }
       ]
   },
   devtool: 'eval'
};
