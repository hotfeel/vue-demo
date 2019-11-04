module.express = {
    publicPath: process.env.NODE_ENV === 'production' ? '/static/' : './',
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServe: {
        port: 8080,
        proxy: process.env.VUE_APP_URL,
        overlay: {
            warnings: true,
            errors: true
        }
// disableHostCheck:true,//处理host不识别问题
    },
    outputDir: process.env.outputDir, // 打包生成目录
    assetDir: 'static',
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: false, // 生产环境的 source map

}
