const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest")
const WorkboxWebpackPlugin = require("workbox-webpack-plugin")
const path = require("path")

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name:"Petgram - Tu app de fotos de Mascotas",
      shortname:"Petgram 🐶 ",
      description:"Con petgram puedes encontrar fotos de animales domésticos muy fácilmente",
      background_color:"#000",
      theme_color:"#b1a",
      display:"standalone",
      start_url: '/',
      scope: '/',
      orientation:"portrait",
      icons:[
        {src: path.resolve(__dirname, 'src/assets/pets.png'),
         sizes:[96,128,192,256,384,512],
         ios:true,
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching:[
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler:'CacheFirst',
          options:{
            cacheName:'images'
          }
        },
        {
          urlPattern: new RegExp('https://pet-gram.now.sh'),
          handler:'NetworkFirst',
          options:{
            cacheName:'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options:{publicPath: '/'}
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}
