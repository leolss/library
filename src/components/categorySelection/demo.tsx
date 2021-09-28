/*
 * @Author: liuyingying
 * @Date: 2021-09-28 14:52:39
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-28 16:21:36
 * @Description:
 */
import React, { memo, useCallback, useMemo } from 'react';
import { CategorySelection, Category, Badge } from 'library';

const TabsDemo: React.FC = memo(() => {
  const contentStyle: React.CSSProperties = {
    marginTop: 20,
  };

  return (
    <div style={{ padding: '10px' }}>
      <div style={contentStyle}>
        <CategorySelection title="常规使用">
          <Category value="1" label="销量" />
          <Category value="2" label="好评" />
        </CategorySelection>
      </div>
      <div style={contentStyle}>
        <CategorySelection title="默认选中" activeValue="2">
          <Category value="1" label="销量" />
          <Category value="2" label="好评" />
          <Category value="3" label="信用" />
        </CategorySelection>
      </div>

      <div style={contentStyle}>
        <CategorySelection title="禁用状态">
          <Category value="1" label="销量" />
          <Category value="2" label="好评" disabled />
          <Category value="3" label="信用" />
        </CategorySelection>
      </div>

      <div style={contentStyle}>
        <CategorySelection title="升序降序" activeValue="1">
          <Category value="1" label="销量" showSort />
          <Category value="2" label="好评" showSort selected="desc" />
          <Category value="3" label="信用" />
        </CategorySelection>
      </div>

      <div style={contentStyle}>
        <CategorySelection title="多个标签" activeValue="5">
          {Array(8)
            .fill(null)
            .map((item, index) => (
              <Category
                key={index}
                value={`${index + 1}`}
                label={`标签${index + 1}`}
              />
            ))}
        </CategorySelection>
      </div>

      <div style={contentStyle}>
        <CategorySelection title="内容扩展" activeValue="1">
          <Category value="1" label="销量" slot={<Badge dot />} />
          <Category
            value="2"
            label="好评"
            slot={<Badge text={77} overflowCount={55} />}
          />
          <Category value="3" label="信用" />
        </CategorySelection>
      </div>
    </div>
  );
});

export default TabsDemo;
