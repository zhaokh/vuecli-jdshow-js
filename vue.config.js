module.exports = {
    proxy: {
        '/api': {
          target: 'http://localhost:8081',
          ws: true,
          changeOrigin: true,
        }
      }
}  