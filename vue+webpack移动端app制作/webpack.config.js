 // 导入处理路径的模块
 var path = require('path');
 // 导入自动生成HTMl文件的插件
 var htmlWebpackPlugin = require('html-webpack-plugin');
 // 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
 const VueLoaderPlugin = require('vue-loader/lib/plugin')
 
 module.exports = {
     entry: path.resolve(__dirname, './src/js/main.js'), // 项目入口文件  高版本js
     output: { // 配置输出选项
         path: path.resolve(__dirname, 'dist'), // 配置输出的路径
         filename: 'bundle.js' // 配置输出的文件名  低版本js位置
     },
      plugins:[ // 添加plugins节点配置插件
         new htmlWebpackPlugin({
             template:path.resolve(__dirname, 'src/index.html'),//模板路径
             filename:'index.html'//自动生成的HTML文件的名称
         }),
         new VueLoaderPlugin()
     ],
     module: { // 用来配置第三方loader模块的
     rules: [ // 文件的匹配规则
         { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则   css-loader-->style-loader
      	 { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      	 /*{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }*/
      	
      	 { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
         { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
     	 { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高
         { test: /\.vue$/, use: 'vue-loader' }
     ],
	 },
	 resolve: {
	    alias: { // 修改 Vue 被导入时候的包的路径
	      // "vue$": "vue/dist/vue.js"
	    }
  	}
 }