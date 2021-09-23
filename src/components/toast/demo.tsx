/*
 * @Author: 李闪闪
 * @Date: 2021-09-23 11:27:28
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-23 11:32:05
 * @Description:
 */
import React from 'react';
import { Toast, Button } from 'library';
import './index.less';

const Demo: React.FC<any> = (props) => {
  const success = () => {
    Toast.success('success===', 2);
  };
  const loading = () => {
    Toast.loading('loading===', 2);
  };
  const info = () => {
    Toast.info('info===', 2);
  };
  const fail = () => {
    Toast.fail('fail===', 2);
  };
  const offline = () => {
    Toast.offline('offline===', 2);
  };
  return (
    <>
      <div>
        <Button type="default" block onClick={info}>
          info Toast
        </Button>
        <Button type="danger" block onClick={fail}>
          fail Toast
        </Button>
        <Button type="warning" block onClick={offline}>
          offline Toast
        </Button>
        <Button type="success" block onClick={success}>
          success Toast
        </Button>
        <Button type="primary" block onClick={loading}>
          loading Toast
        </Button>
      </div>{' '}
    </>
  );
};
export default Demo;
