const path = require('path');

const utils = {
  assetsPath: function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        // 生产环境下的 static 路径
        ? 'static'
        // 开发环境下的 static 路径
        : 'static'

    return path.posix.join(assetsSubDirectory, _path)
  },
  resolve: function(dir) {
    return path.join(__dirname, '..', dir)
  }
}

module.exports = {
  publicPath: "./",
  lintOnSave: false,
  devServer: {
    open: true,
    port: 9021,
    disableHostCheck: true, // 处理host不识别问题
    /* proxy: {
      '/api': {
        target: 'http://10.10.16.191:9000/gs',
        ws: true,
        changeOrigin: true
      }
    } */
  },
  assetsDir: "static",
  outputDir: process.env.outputDir, // 打包生成目录
  productionSourceMap: false, // 生产环境映射 map文件
  configureWebpack:{
    module:{
        rules:[
        {
          test:/\.(woff2?|eot|ttf|otf)(\?.*)$/,
          loader:'url-loader',
          options:{
            limit: 10000,
            name: utils.assetsPath('fonrs/[name].[hash:7].[ext]')
          }
        }
      ]
    }, 
  },
  /**
   * 配置less
   */
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 导入全局公共样式
        path.resolve(__dirname, 'src/stylesheets/theme.less')
      ]
    }
  },
  /* transpileDependencies: [
    'echarts',
], */
};
