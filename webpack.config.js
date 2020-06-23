const path = require('path');

module.exports = {

    entry: './index.js',

    mode: 'production',
    output: {
        path: path.resolve('./public'), //cria pasta public
        filename: 'destinatario.js'
    },
    devServer: {
        hot: true,
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        historyApiFallback: {
            index: 'http://localhost:8080/index.html'
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
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    // devtool: 'sourcemap'
};
