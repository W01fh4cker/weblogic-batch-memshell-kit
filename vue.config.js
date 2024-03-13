const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: "Weblogic全版本批量打入内存马工具 0.0.1-beta Writter By: W01fh4cker",
    },
  },
});
