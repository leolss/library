/*
 * @Author: liuyingying
 * @Date: 2021-09-26 10:57:02
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-27 15:27:09
 * @Description:
 */
import React, { memo, useCallback, useMemo } from 'react';
import { Tabs, TabPane, Toast, Badge } from 'library';

const TabsDemo: React.FC = memo(() => {
  const titleStyle: React.CSSProperties = {
    margin: '20px 0 10px',
    padding: 0,
    color: '#455a6499',
    fontSize: '14px',
    fontWeight: 'normal',
  };
  const bgStyle: React.CSSProperties = {
    background: '#F2F2F2',
  };

  const onClickTab = useCallback((key, e) => {
    Toast.info(key);
  }, []);

  const RenderHeaderSlot = useMemo(() => {
    return <div style={{ padding: '10px' }}>headerSlot内容</div>;
  }, []);

  return (
    <>
      <h2 style={titleStyle}>默认选中第一个</h2>
      <div style={bgStyle}>
        <Tabs>
          <TabPane key="tab1" label="Tab1">
            第一个选项卡 - tab1
          </TabPane>
          <TabPane key="tab2" label="Tab2">
            第二个选项卡 - tab2
          </TabPane>
          <TabPane key="tab3" label="Tab3">
            第三个选项卡 - tab3
          </TabPane>
        </Tabs>
      </div>

      <h2 style={titleStyle}>选中非第一个</h2>
      <div style={bgStyle}>
        <Tabs activeKey="tab3">
          <TabPane key="tab1" label="Tab1">
            第一个选项卡 - tab1
          </TabPane>
          <TabPane key="tab2" label="Tab2">
            第二个选项卡 - tab2
          </TabPane>
          <TabPane key="tab3" label="Tab3">
            第三个选项卡 - tab3
          </TabPane>
          <TabPane key="tab4" label="Tab4">
            第四个选项卡 - tab4
          </TabPane>
        </Tabs>
      </div>

      <h2 style={titleStyle}>禁用标签</h2>
      <div style={bgStyle}>
        <Tabs activeKey="tab1">
          <TabPane key="tab1" label="Tab1">
            第一个选项卡 - tab1
          </TabPane>
          <TabPane key="tab2" label="Tab2" disabled>
            第二个选项卡 - tab2
          </TabPane>
          <TabPane key="tab3" label="Tab3">
            第三个选项卡 - tab3
          </TabPane>
        </Tabs>
      </div>

      <h2 style={titleStyle}>切换动画</h2>
      <div style={bgStyle}>
        <Tabs activeKey="tab1" animated>
          {Array(4)
            .fill(null)
            .map((item, index) => (
              <TabPane key={`tab${index + 1}`} label={`Tab${index + 1}`}>
                选项卡 - {`tab${index + 1}`}
              </TabPane>
            ))}
        </Tabs>
      </div>

      <h2 style={titleStyle}>点击事件</h2>
      <div style={bgStyle}>
        <Tabs activeKey="tab1" onClick={onClickTab}>
          <TabPane key="tab1" label="Tab1">
            第一个选项卡 - tab1
          </TabPane>
          <TabPane key="tab2" label="Tab2">
            第二个选项卡 - tab2
          </TabPane>
          <TabPane key="tab3" label="Tab3">
            第三个选项卡 - tab3
          </TabPane>
          <TabPane key="tab4" label="Tab4">
            第四个选项卡 - tab4
          </TabPane>
        </Tabs>
      </div>

      <h2 style={titleStyle}>标签滚动</h2>
      <div style={bgStyle}>
        <Tabs activeKey="tab1">
          {Array(8)
            .fill(null)
            .map((item, index) => (
              <TabPane key={`tab${index + 1}`} label={`Tab${index + 1}`}>
                选项卡 - {`tab${index + 1}`}
              </TabPane>
            ))}
        </Tabs>
      </div>

      <h2 style={titleStyle}>标签下面扩展内容</h2>
      <div style={bgStyle}>
        <Tabs headerSlot={RenderHeaderSlot}>
          <TabPane key="tab1" label="Tab1">
            第一个选项卡 - tab1
          </TabPane>
          <TabPane key="tab2" label="Tab2">
            第二个选项卡 - tab2
          </TabPane>
          <TabPane key="tab3" label="Tab3">
            第三个选项卡 - tab3
          </TabPane>
        </Tabs>
      </div>

      <h2 style={titleStyle}>每个标签下面的扩展内容</h2>
      <div style={bgStyle}>
        <Tabs>
          <TabPane
            key="tab1"
            label="Tab1"
            tabSlot={<Badge dot />}
            style={{ position: 'relative', zIndex: 100 }}
          >
            第一个选项卡 - tab1
          </TabPane>
          <TabPane
            key="tab2"
            label="Tab2"
            tabSlot={<Badge text={77} overflowCount={55} />}
          >
            第二个选项卡 - tab2
          </TabPane>
          <TabPane
            key="tab3"
            label="Tab3"
            tabSlot={
              <Badge
                text="NEW"
                style={{ backgroundColor: '#21b68a', borderRadius: 2 }}
              />
            }
          >
            第三个选项卡 - tab3
          </TabPane>
        </Tabs>
      </div>
    </>
  );
});

export default TabsDemo;
