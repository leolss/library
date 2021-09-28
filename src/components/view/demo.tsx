/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-16 16:24:29
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-22 14:47:02
 * @Description: View Demo
 */
import React from 'react';
import { View, Button } from 'library';

const Demo: React.FC<any> = (props) => {
  return (
    <>
      <h4>排列方向</h4>
      <View direction="row" extraStyle={{ margin: '10px 0' }}>
        <Button>button</Button>
        <Button>button</Button>
      </View>
      <View direction="column" extraStyle={{ margin: '10px 0' }}>
        <Button>button</Button>
        <Button>button</Button>
      </View>

      <h4>主轴方向对齐方式</h4>
      <View justify="start" align="center" extraStyle={{ margin: '10px 0' }}>
        <Button>button</Button>
        <Button>button</Button>
      </View>
      <View justify="center" extraStyle={{ margin: '10px 0' }}>
        <Button>button</Button>
        <Button>button</Button>
      </View>
      <View justify="end" extraStyle={{ margin: '10px 0' }}>
        <Button>button</Button>
        <Button>button</Button>
      </View>
      <View justify="baseline" extraStyle={{ margin: '10px 0' }}>
        <Button>button</Button>
        <Button>button</Button>
      </View>
      <View justify="around" extraStyle={{ margin: '10px 0' }}>
        <Button>button</Button>
        <Button>button</Button>
      </View>
      <View justify="between" extraStyle={{ margin: '10px 0' }}>
        <Button>button</Button>
        <Button>button</Button>
      </View>

      <h4>交叉轴方向对齐方式</h4>
      <View
        align="start"
        extraStyle={{
          height: '80px',
          border: '1px solid #ddd',
          marginBottom: '10px',
        }}
      >
        <Button>button</Button>
        <Button>button</Button>
      </View>
      <View
        align="center"
        extraStyle={{
          height: '80px',
          border: '1px solid #ddd',
          marginBottom: '10px',
        }}
      >
        <Button>button</Button>
        <Button>button</Button>
      </View>
      <View
        align="end"
        extraStyle={{
          height: '80px',
          border: '1px solid #ddd',
          marginBottom: '10px',
        }}
      >
        <Button>button</Button>
        <Button>button</Button>
      </View>
      <View
        align="baseline"
        extraStyle={{
          height: '80px',
          border: '1px solid #ddd',
          marginBottom: '10px',
        }}
      >
        <p>我是文本</p>
        <Button>button</Button>
      </View>

      <h4>指定 flex 元素单行显示还是多行显示 </h4>
      <View>
        <p>nowrap0 nowrap0</p>
        <p>nowrap1 nowrap1</p>
      </View>
      <View wrap>
        <p>wrap0 wrap0 wrap0 wrap0 wrap0 wrap0 wrap0</p>
        <p>wrap1 wrap1 wrap1 wrap1 wrap1 wrap1 wrap1</p>
      </View>
    </>
  );
};
export default Demo;
