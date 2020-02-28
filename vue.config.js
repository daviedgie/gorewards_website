var webpack = require('webpack')
module.exports = {
	// devServer: { https: true },
  lintOnSave: false,
  productionSourceMap: false,
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
  publicPath: process.env.NODE_ENV === 'production' ? "/gorewards" : '/', // For Production,
  configureWebpack: {
  	// config.module
  	// 	.rule('css')
  	// 	.test(/\.css$/)
   //    .use('style-loader', 'css-loader')
   //      .loader('vue-loader')
   //      .tap(options => {
   //        // modify the options...
   //        return options
   //  })
  	plugins: [
	    new webpack.ProvidePlugin({
	     	$: 'jquery',
	      jQuery: 'jquery'
	    })
	  ]
  }
}

