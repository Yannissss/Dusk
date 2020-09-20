const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dusk.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        }, ],
    }
};