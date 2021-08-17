module.exports = {
  devServer: {
    proxy: "http://localhost:5000",
    // proxy: {
    //   "^/api/*": {
    //     target: "http://localhost:8080",
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //   },
    // },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/index.scss";`,
      },
    },
  },
};
