const path = require('path');

module.exports = {
    entry: {
        content: './src/content/index.ts',
        popup: './src/popup/index.tsx'
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
        alias: {
            '@shared': path.resolve(__dirname, '../shared')
        }
    },
};
