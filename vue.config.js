const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,  
  lintOnSave:false ,/*关闭语法检查*/

  //方式1
  //开启代理服务器 只能配置一个代理 不能灵活控制所需代理 但是简单
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }

  //方式2
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},
        ws: true,//用于支持websocket
        changeOrigin: true //控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true,//用于支持websocket
        changeOrigin: true //
      }
    }
  }
})
