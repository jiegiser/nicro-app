const { name } = require('./package.json');
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    // 微应用的包名，这里与主应用中注册的微应用名称一致
    config.output.library = `${name}-[name]`;
    // 将你的 library 暴露为所有的模块定义下都可运行的方式
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
      "cesium": path.resolve(__dirname, '../node_modules/cesium/Source')
    }
    config.output.sourcePrefix = ''

    // config.amd.toUrlUndefined = true;
    config.module.unknownContextCritical = false;

    // cesium 相关配置
    config.plugins = [
      ...config.plugins,
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join('node_modules/cesium/Source', 'Workers'), to: 'cesium/Workers' },
          { from: path.join('node_modules/cesium/Source', 'ThirdParty'), to: 'cesium/ThirdParty' },
          { from: path.join('node_modules/cesium/Source', 'Assets'), to: 'cesium/Assets' },
          { from: path.join('node_modules/cesium/Source', 'Widgets'), to: 'cesium/Widgets' },
          {
            from: 'node_modules/smart3d/dist/smart3d',
            to: 'smart3d'
          }
        ]
      }),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: 'window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + "/cesium"',
        SMART3D_BASE_URL: 'window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + "/smart3d"'
      })
    ]
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};