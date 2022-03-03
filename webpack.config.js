/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const webpack = require("webpack");

module.exports = {
  // ...
  // ...
  plugins: [
    new webpack.DefinePlugin({
      React: "react",
    }),
  ],
};
