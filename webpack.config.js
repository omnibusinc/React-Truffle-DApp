var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: './client/js/app.jsx'
  },
  output: {
    path: __dirname,
    filename: '/client/js/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {compact: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {compact: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader?modules!postcss-loader"
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: function () {
    return [autoprefixer];
  }
}
