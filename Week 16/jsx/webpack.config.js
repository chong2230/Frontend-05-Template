const path = require("path");

module.exports = {
    entry: "./main.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["babel-preset-env"],
                        plugins: [["babel-plugin-transform-react-jsx", {pragma: "createElement"}]]
                    }
                },
                // include: path.join(__dirname, "src),
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist'
        // historyApiFallback: true,
        // inline: true,
    },
    mode: "development"
}