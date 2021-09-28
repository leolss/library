import React from 'react';
import { NoDataProps } from './interface';
import './index.less';

const NoData: React.FC<NoDataProps> = () => <h1>Hello,world</h1>;
NoData.displayName = 'NoData';
export default NoData;
