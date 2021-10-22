/*
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2021-10-22 23:38:08
 * @LastEditors: lukasavage
 * @LastEditTime: 2021-10-22 23:38:08
 */
module.exports = {
    // 如何查找故事 story book
    stories: [
        "../components/Introduction.stories.mdx",
        "../components/Install.stories.mdx",
        "../components/Components.stories.mdx",
        "../components/**/*.stories.mdx",
        "../components/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: ['@storybook/addon-essentials'],
};