const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    // inline:false,
    port:8081,
    proxy:{
      '/api':{
        target:'http://skyrt8.natappfree.cc'
      }
    }
  }
})
