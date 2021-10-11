/*
 * @Author: 李闪闪
 * @Date: 2021-09-22 17:33:40
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-28 11:00:52
 * @Description:
 */
import React from 'react';
import { View, Text, Icon } from 'library';
import './index.less';

const Demo: React.FC<any> = (props) => {
  const list = [
    'check-circle',
    'check',
    'check-circle-o',
    'cross-circle',
    'cross',
    'cross-circle-o',
    'up',
    'down',
    'left',
    'right',
    'ellipsis',
    'loading',
  ];
  const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
  const color = ['#108ee9', '#6abf47', '#ffc600', '#ff5b05', '#000'];
  return (
    <div style={{ padding: '10px' }}>
      <Text color="#455a6499" paddingTop={30} paddingBottom={10}>
        Icon默认用法
      </Text>
      <View wrap>
        {list.map((item) => (
          <div style={{ paddingRight: '15px', textAlign: 'center' }}>
            <Icon type={item} />
            <p>{item}</p>
          </div>
        ))}
      </View>
      <Text color="#455a6499" paddingTop={30} paddingBottom={10}>
        改变Icon大小
      </Text>
      <View align="center" justify="between">
        {size.map((item) => (
          <div>
            <Icon type="search" size={item} />
            <p>{item}</p>
          </div>
        ))}
      </View>
      <Text color="#455a6499" paddingTop={30} paddingBottom={10}>
        改变Icon颜色
      </Text>
      <View align="center" justify="between">
        {color.map((item) => (
          <div>
            <Icon type="search" color={item} />
            <p>{item}</p>
          </div>
        ))}
      </View>
    </div>
  );
};
export default Demo;
