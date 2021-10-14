module.exports = {
  publicPath: process.env.NODE_ENV === 'www' ? '/vuep1/' : '',
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
