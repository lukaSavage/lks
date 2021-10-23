/*
 * @Descripttion: 测试用例
 * @Author: lukasavage
 * @Date: 2021-10-23 10:27:38
 * @LastEditors: lukasavage
 * @LastEditTime: 2021-10-23 10:30:49
 */
import React, { Component } from 'react';
import { mount } from 'enzyme';
import Button from '..';
describe('测试button', () => {
    it('测试Button是否能够正确挂载', ()=>{
        expect(()=>mount(<Button>Floow</Button>)).not.toThrow(); 
    })
})
