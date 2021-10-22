/*
 * @Descripttion: 主要用于导出所写的组件 
 * @Author: lukasavage
 * @Date: 2021-10-17 19:57:59
 * @LastEditors: lukasavage
 * @LastEditTime: 2021-10-22 23:19:11
 */
import React, { ButtonHTMLAttributes } from 'react'

/**
 * 说明一下：
 * ButtonHTMLAttributes:       React的一个接口类型
 * HTMLButtonElement           button的原生类型
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<ButtonProps> = (props) => {
    const { children } = props;
    return <button type="button">{ children }</button>
} 

export default Button;
// ts:3.8.0版本 如果你导出时加type关键字，会保证在编译时去掉，可以进行更好的优化
export type { ButtonProps };