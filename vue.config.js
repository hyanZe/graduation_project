const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/':{
        target:'http://localhost:1212',
        ws:false,
        changeOrigin:true
      }
    }
  }
})
