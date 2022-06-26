const path = require("path");

module.exports = {
    entry: "./react", 
    resolve: {
        extensions: [".js", ".jsx"]
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/js'),
        filename: "bundle.js",
        library: "FluentUiComponents",
        libraryTarget: "window"
    }
};