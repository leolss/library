/*
 * @Author: liuyingying
 * @Date: 2021-09-16 17:34:09
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-11-22 14:20:53
 * @Description:
 */
import React, { memo, useCallback } from 'react';
import { Button } from 'library';
import './demo.less';

const Demo: React.FC = memo(() => {
  const clickButton = useCallback((e: React.MouseEvent) => {
    console.log('button');
  }, []);

  return (
    <div className="jdd-button-md">
      <h2 className="jdd-button-md-title">按钮类型</h2>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
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

      <h2 className="jdd-button-md-title">图标按钮(待添加)</h2>
      <Button type="primary" icon="search">
        按钮
      </Button>
      <Button type="primary" icon="edit" plain>
        按钮
      </Button>

      <h2 className="jdd-button-md-title">禁用状态</h2>
      <Button type="primary" disabled>
        禁用按钮
      </Button>
      <Button type="primary" plain disabled>
        禁用按钮
      </Button>

      <h2 className="jdd-button-md-title">加载图标类型</h2>
      <Button type="primary" loading>
        加载中
      </Button>
      <Button type="primary" loading loadingType="circle" />
      <Button type="primary" loading loadingType="turn" />
      <Button type="primary" loading loadingType="line" />
      <Button type="primary" loading loadingType="circle" circle />
      <Button type="primary" loading loadingType="turn" circle />
      <Button type="primary" loading loadingType="line" circle />

      <h2 className="jdd-button-md-title">块级元素</h2>
      <Button type="primary" block>
        块级元素
      </Button>

      <h2 className="jdd-button-md-title">圆角</h2>
      <Button type="default" radius>
         圆角默认
      </Button>
      <Button type="primary" radius>
         圆角主要
      </Button>

      <h2 className="jdd-button-md-title">自定义按钮</h2>
      <Button type="primary" borderRadius={10} onClick={clickButton}>
        改变圆角
      </Button>
      <Button type="primary" borderRadius={10} plain>
        改变圆角
      </Button>
      <Button type="primary" color="rgb(136, 232, 58)">
        主题按钮
      </Button>
      <Button type="primary" color="rgb(136, 232, 58)" plain>
        主题按钮
      </Button>
    </div>
  );
});

export default () => <Demo />;
