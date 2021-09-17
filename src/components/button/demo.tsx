/*
 * @Author: liuyingying
 * @Date: 2021-09-16 17:34:09
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-17 10:31:48
 * @Description:
 */
import React, { memo } from 'react';
import { Button } from 'library';
import './index.md.less';

const Demo: React.FC = memo(() => {
  return (
    <div className="jdd-button-md">
      <h2 className="jdd-button-md-title">按钮类型</h2>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="success">成功按钮</Button>

      <h2 className="jdd-button-md-title">按钮尺寸</h2>
      <Button type="primary" size="large">
        大号按钮
      </Button>
      <Button type="primary" size="normal">
        普通按钮
      </Button>
      <Button type="primary" size="small">
        小号按钮
      </Button>
      <Button type="primary" size="mini">
        mini按钮
      </Button>

      <h2 className="jdd-button-md-title">朴素按钮</h2>
      <Button type="primary" plain>
        朴素按钮
      </Button>
      <Button type="success" plain>
        朴素按钮
      </Button>

      <h2 className="jdd-button-md-title">禁用状态</h2>
      <Button type="primary" disabled>
        禁用按钮
      </Button>
      <Button type="primary" plain disabled>
        禁用按钮
      </Button>

      <h2 className="jdd-button-md-title">加载状态</h2>
      <Button type="primary" size="large" loading>
        加载中
      </Button>
      <Button type="primary" size="large" plain loading>
        加载中
      </Button>
      <Button type="primary" loading>
        加载中
      </Button>
      <Button type="primary" size="small" loading>
        加载中
      </Button>
      <Button type="primary" size="mini" loading>
        加载中
      </Button>
    </div>
  );
});

export default () => <Demo />;
