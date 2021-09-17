/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-16 16:24:29
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-17 10:38:05
 * @Description: View Demo
 */
import React from 'react';
import { View } from 'library';

const Demo: React.FC<any> = (props) => {
  return (
    <View align="center">
      <View justify="center">aaa</View>
      <View justify="center">
        <p>bbb</p>
        <p>ccc</p>
      </View>
    </View>
  );
};
export default Demo;
