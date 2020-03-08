const merge = require("webpack-merge");
const baseConfig = require("./build/webpack.base.conf");
const devConfig = require("./build/webpack.dev.conf");
const prodConfig = require("./build/webpack.prod.conf");

let env = "dev",
    config = env === "dev" ? devConfig : prodConfig;

module.exports = merge(baseConfig, config);
