module.exports = {
  configureWebpack: {
    plugins: [
      require("unplugin-auto-import/webpack")({
        /* options */
      }),
      require("unplugin-vue-components/webpack")({
        /* options */
      }),
    ],
  },
};
