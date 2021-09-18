/*
 * @Author: 李闪闪
 * @Date: 2021-09-18 15:49:21
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-18 15:52:14
 * @Description:
 */
import React from 'react';
import { View, Badge } from 'library';

const Demo: React.FC<any> = (props) => {
  return (
    <View align="center">
      <Badge dot>
        <span
          style={{
            width: '26px',
            height: '26px',
            background: '#ddd',
            display: 'inline-block',
          }}
        />
      </Badge>
      <span style={{ marginLeft: 12 }}>Dot badge</span>
    </View>
  );
};
export default Demo;
