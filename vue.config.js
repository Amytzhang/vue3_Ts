"use strict";
const path = require("path");

const proxyUrlPort = "http://xxxx";
module.exports = {
    devServer: {
        proxy: {
            "/xxx": {
                target: proxyUrlPort, //后端接口地址
                changeOrigin: true, //是否允许跨越
                pathRewrite: {
                    "^/xx": "/xx", //重写,
                },
            }
        },
    },
    // 这种方法可以，需要使用 vue-cli 安装插件的方式来安装
    // 命令为：vue add style-resources-loader 
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/style/theme.less")],
        },
    },
    // 最开始使用的这种方式，但是会报各种错误，大致是相关的版本问题，经过各种 npm 安装版本，都不行
    configureWebpack: {
        module: {
            rules: [{
                test: /\.less$/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            paths: [path.resolve(__dirname, "./src/style/theme.less")],
                        },
                    },
                ],
            }, ],
        },
    },
};