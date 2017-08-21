var path = require('path');
var webpack = require('webpack');
var HTMLwebPackPlugin=require('html-webpack-plugin')

var HTMLwebPackPluginConfig=new HTMLwebPackPlugin ({
    template:__dirname+'/scr/'+'index.html',
    filename: 'index.html',
    inject :'body'
})
module.exports = {   
  entry: './scr/index.js',
  output: { path: __dirname+'/bundle/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
plugins :[HTMLwebPackPluginConfig]
};