const path = require('path');
const express = require('express');
// 创建express实例
const app = express()
const goods = require('./data/goods.json')
const ratings = require('./data/ratings.json')
const seller = require('./data/seller.json')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'))
  },
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 8081,
    before(app) {
      app.get('/api/goods', function (req, res) {
        res.json(goods);
      });
      app.get('/api/comments', function (req, res) {
        res.json(ratings);
      });
      app.get('/api/seller', function (req, res) {
        res.json(seller);
      });
    }
  }
}