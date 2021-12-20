const glob = require('glob')
const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader-v16')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getEntry = () => {
    const entry = {}
    const files = glob.sync('**/*.js', {
        cwd: path.resolve(__dirname, './packages')
    })
    files.forEach((file) => {
        entry[path.dirname(file)] = './components/packages/' + file
    })
    return entry
}
const entry = getEntry()

module.exports = {
    mode: 'development',
    entry,
    devtool: false,
    output: {
        path: path.join(__dirname, '../public/packages/'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
    },
    externals: {
        vue: 'Vue'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader-v16',
                    options: {
                        shadowMode: true,
                        compilerOptions: {
                            whitespace: 'condense'
                        }
                    }
                }],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}