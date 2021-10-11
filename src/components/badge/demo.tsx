/*
 * @Author: 李闪闪
 * @Date: 2021-09-18 15:49:21
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-28 11:02:34
 * @Description:
 */
import React from 'react';
import { View, Badge } from 'library';
import './index.less';

const Demo: React.FC<any> = (props) => {
  return (
    <div style={{ padding: '10px' }}>
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
      <br />
      <View align="center" justify="between">
        <View justify="start">
          <span
            style={{
              width: '26px',
              height: '26px',
              background: '#ddd',
              display: 'inline-block',
            }}
          />
          <span style={{ marginLeft: 12 }}>content</span>
        </View>
        <Badge text={77} overflowCount={55} />
      </View>
      <br />
      <div>
        <Badge text={'促'} corner>
          <div style={{ height: '50px', width: '200px' }}>Use corner prop</div>
        </Badge>
      </div>
      <View>
        <Badge text={0} style={{ marginLeft: 12 }}>
          Text number 0
        </Badge>
        <Badge text={'new'} style={{ marginLeft: 12 }} />
      </View>
      <br />
      <View align="center" justify="between">
        <p>Custo corner</p>
        <Badge text={'促'} />
      </View>
      <br />
      <View>
        Marketing:
        <Badge text="减" hot style={{ marginLeft: 12 }} />
        <Badge text="惠" hot style={{ marginLeft: 12 }} />
        <Badge text="免" hot style={{ marginLeft: 12 }} />
        <Badge text="反" hot style={{ marginLeft: 12 }} />
        <Badge text="HOT" hot style={{ marginLeft: 12 }} />
      </View>
      <br />
      <View>
        Customize
        <Badge
          text="券"
          style={{
            marginLeft: 12,
            padding: '0 3px',
            backgroundColor: '#f19736',
            borderRadius: 2,
          }}
        />
        <Badge
          text="NEW"
          style={{
            marginLeft: 12,
            padding: '0 3px',
            backgroundColor: '#21b68a',
            borderRadius: 2,
          }}
        />
        <Badge
          text="自动缴费"
          style={{
            marginLeft: 12,
            padding: '0 3px',
            backgroundColor: '#fff',
            borderRadius: 2,
            color: '#f19736',
            border: '1px solid #f19736',
          }}
        />
      </View>
    </div>
  );
};
export default Demo;
