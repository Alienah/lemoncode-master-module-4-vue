module.exports = {
  configureWebpack: {
    plugins: [
      /* eslint @typescript-eslint/no-var-requires: "off" */
      require("unplugin-auto-import/webpack")({
        /* options */
      }),
      require("unplugin-vue-components/webpack")({
        /* options */
      }),
    ],
  },
};
