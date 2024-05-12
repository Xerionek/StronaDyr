// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
// const ResponsiveLoaderSharp = require('responsive-loader/sharp')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // config.plugin('polyfills').use(NodePolyfillPlugin)

    // config.module
    // .rule('images')
    // .type('javascript/auto')
    // .use('responsive')
    // .loader('responsive-loader')
    // .options({
    //     adapter: require('responsive-loader/sharp'),
    //     format: 'webp',
    // })
},
})
