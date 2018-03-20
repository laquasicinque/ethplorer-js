let nodeExternals = require('webpack-node-externals');

const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.ts'),
    externals: [nodeExternals()],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /.tsx?$/,
            use: ['ts-loader'],
            exclude: path.resolve(__dirname, 'node_modules'),
        }, ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    }
};