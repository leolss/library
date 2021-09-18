/*
 * @Author: liuyingying
 * @Date: 2021-09-16 17:34:09
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-18 15:01:51
 * @Description:
 */
import React, { memo, useCallback } from 'react';
import { Text } from 'library';
import './demo.less';

const Demo: React.FC = memo(() => {
  const clickButton = useCallback((e: React.MouseEvent) => {
    console.log('button');
  }, []);

  return (
    <div className="jdd-button-md">
      <h2 className="jdd-button-md-title">按钮类型</h2>
    </div>
  );
});

export default () => <Demo />;
