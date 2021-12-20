const webpack = require('webpack')
const config = require('./webpack.config')
webpack(config, (err, stats) => {
    if (err) {
        return console.log(err);
    }
    console.log(stats)
    console.log('编译完成');
})