const path = require('path');

module.exports = {
    entry: {
        content: './src/content/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist/'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
