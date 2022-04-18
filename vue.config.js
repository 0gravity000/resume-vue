const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  pages: {
    index: {
      entry: "src/main.js",
      title: "Resume",  //public\index.html <title><%= htmlWebpackPlugin.options.title %></title> に反映される
    }
  }
})
