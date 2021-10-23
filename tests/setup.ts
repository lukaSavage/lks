/*
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2021-10-23 10:25:20
 * @LastEditors: lukasavage
 * @LastEditTime: 2021-10-23 10:25:21
 */
const React = require('react');
const Enzyme = require('enzyme');

const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')
Enzyme.configure({ adapter: new Adapter() });