const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const  PATHS  =  {
    public:  path.resolve(__dirname,  'public'),
    src:  path.resolve(__dirname,  'src'),
};

module.exports = {
    // mode: "production",
    mode:  'development',
    devtool: 'source-map',
    entry: `${PATHS.src}/main.js`,
    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },

    output:  {
        path:  PATHS.public,
        filename:  'bundle.js',
    },

    plugins:  [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            inject: false,
        }),
    ],
};