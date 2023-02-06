const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        pathRewrite:{
          '/api':'/'
        },
        target:'http://localhost:1212',
        changeOrigin:true,
        ws:true,
      }
    }
  }
})
