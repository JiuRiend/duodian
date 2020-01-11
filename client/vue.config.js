const path = require('path');
const resolve = (dir) => path.join(__dirname, dir)
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')

module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/public/dist',

    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('router', resolve('src/router'))
            .set('store', resolve('src/store'))
            .set('utils', resolve('src/utils'))
            .set('api', resolve('src/api'))
        config.output.chunkFilename(`js/[name].[chunkhash:8].js`)
    },
    configureWebpack: (config) => {
        config.externals = {
            BMap: 'BMap'
        },
            config.plugins.push(new SkeletonWebpackPlugin({
                webpackConfig: {
                    entry: {
                        app: path.join(__dirname, './src/skeleton/entry-skeleton.js') //这里为上面的entry-skeleton.js
                    }
                },
                router: {
                    mode: 'history',
                    routes: [{
                        path: '/list/home', //和router.js中的路径一样就行
                        skeletonId: 'skeleton1' //之前的id
                    }, {
                        path: '/list/my', //和router.js中的路径一样就行
                        skeletonId: 'skeleton2' //之前的id
                    }]
                },
                minimize: true,
                quiet: true,
            })),

            config.plugins.push(new ImageminPlugin({
                plugins: [
                    imageminMozjpeg({
                        quality: 100,
                        progressive: true
                    })
                ]
            }))
        if (process.env.NODE_ENV === 'production') {
            process.stdout.write('生产环境')
        } else if (process.env.NODE_ENV === 'development') {
            process.stdout.write('开发环境')
        } else if (process.env.NODE_ENV === 'testing') {
            process.stdout.write('测试环境')
        }
    },
    //此插件需要css分离
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    //服务端代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:7001', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};