module.exports = {
    css: {
        loaderOptions: {
        sass: {
            additionalData: `
            @import "@/assets/scss/new.scss";
            `
          },
      }
    },
    devServer: {
    },
    productionSourceMap:false
  }