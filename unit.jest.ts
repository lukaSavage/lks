/*
 * @Descripttion: 该文件主要用于单元测试
 * @Author: lukasavage
 * @Date: 2021-10-23 10:20:10
 * @LastEditors: lukasavage
 * @LastEditTime: 2021-10-23 10:25:43
 */
module.exports = {
    verbose: true,                                                       // 运行测试的环境
    testEnvironment: 'jsdom',  
    setupFiles: ['./tests/setup.ts'],
    testMatch: ['**/unit/**/*.(spec|test).(js|ts|jsx|tsx)'],
    collectCoverage: true,
    collectCoverageFrom: [
        'components/**/*.(js|ts|jsx|tsx)',
        '!components/**/*.stories.(js|ts|jsx|tsx)',
        '!components/**/*.(spec|test).(js|ts|jsx|tsx)',
    ],
};