const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    }),
                include: path.resolve(__dirname, '../src/'),
            }, 
        ]
    },

    plugins:  [
        new ExtractTextPlugin({ filename: 'bundle.css' }),
    ],
};