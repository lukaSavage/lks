const path = require('path');
// 将css文件单独打包，防止闪屏
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 当前命令所在的目录
const cwd = process.cwd();
module.exports = {
    mode: 'development',
    devtool: false,        // 关闭生成sourcemap
    entry: {
        lks: './index.js',
    },
    output: {
        path: path.resolve('dist'),             // 输出到dist目录
        filename: '[name].js',                  // 打包的文件名
        library: 'lks',
        libraryTarget: 'umd',                   // 打包后的模块的格式 umd amd cmd commonjs window等
    },
    externals: {     // 外部依赖，组件库代码是不需要打包react和react-dom进去的
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],    // 指定扩展名
        alias: {
            antdesign: cwd,
        },
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer'],
                            },
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer'],
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                            sourceMap: true,
                        },
                    },
                ],
            },
            {  // 注意：webpack5里面已经将file-loader、url-loader废弃
                test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i,
                type: 'asset',   // 静态文件不在需要配置loader了
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};