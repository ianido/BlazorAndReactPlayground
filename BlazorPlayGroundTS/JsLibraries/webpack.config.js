const path = require("path");

module.exports = {
    entry: "./react", 
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            // newline - add source-map support 
            { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" }
        ]
    },
    // newline - add source-map support
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, '../wwwroot/js'),
        filename: "bundle.js",
        library: "FluentUiComponents",
        libraryTarget: "window"
    }
};