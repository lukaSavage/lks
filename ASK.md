# 1.antd为何同时要用到webpack和gulp？

``` js
    先说结论：为了适应不同的应用环境。gulp编译的es和lib保留目录层级，便于按需加载
```

## 2.初始化的package.json增加的内容

``` json
    {
  "name": "lks",
  "version": "1.0.0",
  "description": "一个用于React项目的组件库，全名lukasavage",
  "main": "index.js",
  "files": [                                      // 指定npm publish的时候 上传的文件
        "dist",
        "es",
        "lib"
    ],
  "scripts": {  
    "build": "webpack"
  },
  "publishConfig": {            
    "access": "public",                         // 自己发的私有包是无法发包的，必须添加该字段才行
    "registry": "http://registry.npmjs.org"     // 发布包的地址
  },
  "keywords": ["react","component"],            // 便于用于快速查找到我们的包
  "author": "lukasavage",
  "license": "MIT"                             // license 字段使我们可以定义适用于 package.json描代码的许可证。MIT/ISC
}


```

## 3.拷贝依赖项(地址参考：<http://www.zhufengpeixun.com/strong/html/140.antd.html>)

``` json

    {
  "name": "@zhangry/ant",
  "version": "1.0.0",
  "description": "React组件的企业级UI设计",
  "main": "lib/index.js",
  "scripts": {
    "build": "webpack"
  },
  "publishConfig": {
    "access": "public",
    "registry": "http://registry.npmjs.org"
  },
  "homepage": "https://zhangrenyang.github.io/ant",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/zhangrenyang/ant.git"
  },
  "keywords": [
    "ant",
    "component",
    "components",
    "design",
    "framework",
    "frontend",
    "react",
    "react-component",
    "ui"
  ],
  "author": "zhangrenyang",
  "license": "MIT",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "peerDependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@typescript-eslint/parser": "^4.31.1",
    "and": "^0.0.3",
    "eslint": "^7.32.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-plugin-import": "^2.24.2",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.25.2",
    "eslint-plugin-react-hooks": "^4.2.0",
    "husky": "^7.0.2",
    "@babel/core": "^7.15.5",
    "@babel/plugin-transform-runtime": "^7.15.0",
    "@babel/plugin-transform-typescript": "^7.15.4",
    "@babel/preset-env": "^7.15.6",
    "@babel/preset-react": "^7.14.5",
    "@commitlint/cli": "^13.1.0",
    "@commitlint/config-conventional": "^13.1.0",
    "@storybook/addon-essentials": "^6.3.8",
    "@storybook/react": "^6.3.8",
    "@types/enzyme": "^3.10.9",
    "@types/jest": "^27.0.1",
    "@types/jest-environment-puppeteer": "^4.4.1",
    "@types/jest-image-snapshot": "^4.3.1",
    "@types/node": "^16.9.2",
    "@types/puppeteer": "^5.4.4",
    "@types/react": "^17.0.21",
    "@types/react-dom": "^17.0.9",
    "@wojtekmaj/enzyme-adapter-react-17": "^0.6.3",
    "autoprefixer": "^10.3.4",
    "babel-loader": "^8.2.2",
    "commitizen": "^4.2.4",
    "css-loader": "^6.2.0",
    "cz-customizable": "^6.3.0",
    "enzyme": "^3.11.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-typescript": "^6.0.0-alpha.1",
    "jest": "^27.2.0",
    "jest-environment-puppeteer": "^5.0.4",
    "jest-image-snapshot": "^4.5.1",
    "jest-puppeteer": "^5.0.4",
    "less": "^4.1.1",
    "less-loader": "^10.0.1",
    "merge2": "^1.4.1",
    "mini-css-extract-plugin": "^2.3.0",
    "postcss-loader": "^6.1.1",
    "prettier": "^2.4.1",
    "puppeteer": "^10.2.0",
    "rimraf": "^3.0.2",
    "typescript": "^4.4.3",
    "webpack": "^5.53.0",
    "webpack-cli": "^4.8.0"
  }
}

```

## 4.开始编写webpack.config.js

```js
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
```
