/*
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2021-10-23 11:05:31
 * @LastEditors: lukasavage
 * @LastEditTime: 2021-10-23 11:05:31
 */
module.exports = {
    launch: {
        dumpio: true,
        headless: process.env.HEADLESS !== 'false',
    },
    browserContext: 'default',
};