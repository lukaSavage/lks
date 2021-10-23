/*
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2021-10-23 10:52:04
 * @LastEditors: lukasavage
 * @LastEditTime: 2021-10-23 11:09:10
 */
module.exports = {
    verbose: true,
    testEnvironment: 'jest-environment-puppeteer',
    setupFiles: ['./tests/setup.ts'],
    preset: 'jest-puppeteer',
    testMatch: ['**/e2e/**/*.(spec|test).(j|t)sx'],
};