const path = require("path");

module.exports = {
  entry: "./client/src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader",],        
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: "file-loader",        
      },      
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve("client", "public"),    
    filename: "bundle.js"
  },  
  devServer: {
    contentBase: path.resolve("client", "public"),
    port: 4000,
    publicPath: "http://localhost:4000/dist/",
    hotOnly: true,
    historyApiFallback: true
  },

};