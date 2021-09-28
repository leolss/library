/*
 * @Author: your name
 * @Date: 2021-09-27 18:35:54
 * @LastEditTime: 2021-09-28 16:49:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \library\src\components\noData\index.tsx
 */
import React from 'react';
import { Props } from './interface';
import './index.less';
import notask from './noData.svg';

const NoData: React.FC<Props> = (userProps) => {
  const {
    label = '暂无数据',
    imgUrl = notask,
    imgWidth = 160,
    imgHeight = 160,
    className = '',
  } = userProps;

  return (
    <div className="jdd-noData">
      <img width={imgWidth + 'px'} height={imgHeight + 'px'} src={imgUrl} />
      <div className="label">{label || '暂无数据'}</div>
    </div>
  );
};

export default NoData;
