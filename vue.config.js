const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/index.scss')
      ]
    }
  },
  devServer: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3100',
        ws: true,
        changeOrigin: true
      },
      'sockjs-node': {
        target: 'http://localhost:3100',
        ws: false,
        changeOrigin: true
      },
    }

  }
}
