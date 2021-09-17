/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-16 16:24:29
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-17 18:03:48
 * @Description: View Demo
 */
import React from 'react';
import { View } from 'library';

const Demo: React.FC<any> = (props) => {
  return (
    <>
      <View direction="row">
        <p>111</p>
        <p>222</p>
      </View>
      <View direction="column">
        <p>111</p>
        <p>222</p>
      </View>

      <View justify="start" align="center">
        <p className="aaa">123123</p>
      </View>
      <View justify="center"></View>
      <View justify="end"></View>
      <View justify="baseline"></View>
      <View justify="around"></View>
      <View justify="between"></View>

      <View align="start"></View>
      <View align="center"></View>
      <View align="end"></View>
      <View align="baseline"></View>

      <View wrap></View>
    </>
  );
};
export default Demo;
