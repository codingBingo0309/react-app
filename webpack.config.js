var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 9022
   },
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
      },
         {
            test:/\.less$/,
            loader:"style!css!less"
         },
         {
            test:/\.cjsx$/,
            loaders:[
                'coffee',
                'cjsx'
            ]
         },
         {
            test:/\.coffee$/,
            loader:'coffee'
         }

      ]
   }
	
}

module.exports = config;
