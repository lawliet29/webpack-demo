// 1. Entry
// 2. Output
// 3. Module config (loader & rules)
// 4. Plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        scripts: './scripts/index.js',
        styles: './styles/index.css'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$|.sass$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}
