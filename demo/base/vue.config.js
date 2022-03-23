
    const proxyObj = {}
    proxyObj['/'] = {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
            '^/': ''
        }
    }
    module.exports = {
        devServer: {
            host: 'localhost',
            port: 8082,
            proxy: proxyObj
        },
        assetsDir: 'res'
    }