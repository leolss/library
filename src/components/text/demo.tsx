/*
 * @Author: liuyingying
 * @Date: 2021-09-16 17:34:09
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-18 16:19:30
 * @Description:
 */
import React, { memo, useCallback } from 'react';
import { Text } from 'library';
import './demo.less';

const Demo: React.FC = memo(() => {
  const clickButton = useCallback((e: React.MouseEvent) => {
    console.log('text');
  }, []);

  return (
    <div className="jdd-text-demo">
      <h2 className="jdd-text-demo-title">默认</h2>
      <Text>默认文本展示</Text>

      <h2 className="jdd-text-demo-title">文本位置</h2>
      <Text width={100} textAlign="left">
        居左文本
      </Text>
      <Text width="100%" textAlign="center">
        居中文本
      </Text>
      <Text width="100%" textAlign="right">
        居右文本
      </Text>

      <h2 className="jdd-text-demo-title">文本的修饰</h2>
      <Text textDecoration="underline" marginRight={20}>
        下划线
      </Text>
      <Text textDecoration="overline" marginRight={20}>
        上划线
      </Text>
      <Text textDecoration="line-through">删除线</Text>

      <h2 className="jdd-text-demo-title">单行文本溢出</h2>
      <Text width="100%" lineFeed>
        此处展示的是单行文本溢出情况，需要设置lineFeed和width
      </Text>

      <h2 className="jdd-text-demo-title">多行文本溢出</h2>
      <Text lineNum={3}>
        此处展示的是多行文本溢出情况，需要设置lineNum,
        lineNum设置的数字是几，就会显示几行文本，在文本末尾会显示溢出的省略号，多出的文本会被隐藏，不显示
      </Text>

      <h2 className="jdd-text-demo-title">边框</h2>
      <Text block showBorder marginBottom={4} textAlign="center">
        默认边框
      </Text>
      <Text
        width="100%"
        showBorder
        borderStyle="dashed"
        marginBottom={4}
        textAlign="center"
      >
        虚线边框
      </Text>
      <Text
        width="100%"
        showBorder
        borderStyle="dotted"
        marginBottom={4}
        textAlign="center"
      >
        点状边框
      </Text>
      <Text
        width="100%"
        showBorder
        borderStyle="solid dashed dotted"
        borderColor="red"
        borderWidth={2}
        marginBottom={4}
        textAlign="center"
      >
        多类型
      </Text>
      <Text
        width="100%"
        showBorder
        borderStyle="double"
        borderWidth={4}
        marginBottom={4}
        textAlign="center"
      >
        双线
      </Text>
      <Text
        width="100%"
        showBorder
        borderStyle="groove"
        borderWidth={2}
        marginBottom={4}
        textAlign="center"
      >
        凹槽边框
      </Text>
      <Text
        width="100%"
        showBorder
        borderStyle="ridge"
        borderWidth={2}
        marginBottom={4}
        textAlign="center"
      >
        垄状边框
      </Text>
      <Text
        width="100%"
        showBorder
        borderStyle="inset"
        borderWidth={2}
        marginBottom={4}
        textAlign="center"
      >
        inset边框
      </Text>
      <Text
        width="100%"
        showBorder
        borderStyle="outset"
        borderWidth={2}
        marginBottom={4}
        textAlign="center"
      >
        outset边框
      </Text>
      <Text
        width="100%"
        showBorder
        borderStyle="solid"
        borderRadius={4}
        textAlign="center"
      >
        圆角
      </Text>

      <h2 className="jdd-text-demo-title">其他设置</h2>
      <Text width="100%" fontSize={16}>
        16号字
      </Text>
      <Text width="100%" color="#fff" backgroundColor="#000">
        白色字，黑背景
      </Text>
      <Text width="100%" fontWeight="bold">
        加粗
      </Text>
      <Text
        showBorder
        marginTop={10}
        marginRight={10}
        marginBottom={10}
        marginLeft={10}
      >
        外边距
      </Text>
      <Text
        showBorder
        paddingTop={10}
        paddingRight={10}
        paddingBottom={10}
        paddingLeft={10}
      >
        内边距
      </Text>
    </div>
  );
});

export default () => <Demo />;
