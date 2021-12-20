const path = require('path')

module.exports = {
    publicPath: './dist',
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src/')
            }
        },
        externals: {
            vue: 'Vue'
        },
    }
}