/* babel-loader的配置文件 */
module.exports = {
    presets: [
        '@babel/preset-react',             // 将es6编译成es5
        [
            '@babel/preset-env',           // 兼容ie11的配置包
            {
                modules: 'auto',
                targets: {
                    browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11'],
                },
            },
        ],
    ],
    plugins: [
        [      
            '@babel/plugin-transform-typescript',       // 支持ts
            {
                isTSX: true,
            },
        ],
        ['@babel/plugin-transform-runtime'],            // 提取一些编译的运行时方法
    ],
};