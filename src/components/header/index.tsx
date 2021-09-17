/*
 * @Author: your name
 * @Date: 2021-09-16 17:57:38
 * @LastEditTime: 2021-09-17 10:18:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \library\src\components\header\index.tsx
 */
// import React from 'react';
// import { Props } from './interface';
// import './index.less';
import React, { useCallback, useMemo } from 'react';
import goback from './goback.svg';
import se from './search.svg';
import closes from './close.svg';
import { Container } from './header-style';
import { headerProps } from './interface';

const Header: React.FC<headerProps> = React.memo((props) => {
  const {
    children,
    goBack,
    search,
    Icon,
    close,
    fontSize = 14,
    titleAlign = 'center',
  } = props;

  const renderLeftSlot = useCallback(() => {
    if (goBack && close) {
      return (
        <>
          <img
            src={goback}
            alt="返回"
            className="goback-img"
            onClick={goBack}
          ></img>
          <img src={closes} onClick={close} className="close-img"></img>
        </>
      );
    }
    if (goBack) {
      return (
        <img
          src={goback}
          alt="返回"
          className="goback-img"
          onClick={goBack}
        ></img>
      );
    }
    if (close) {
      return <img onClick={close} src={closes} className="close-img"></img>;
    }
  }, [goBack, close]);

  const renderRightSlot = useCallback(() => {
    if (search && Icon) {
      return (
        <>
          {Icon}{' '}
          <img src={se} alt="查找" className="search-img" onClick={search} />
        </>
      );
    }
    if (Icon) {
      return Icon;
    }
    if (search) {
      return (
        <img src={se} alt="查找" className="search-img" onClick={search} />
      );
    }
  }, [search, Icon]);

  const justifyContent = useMemo(() => {
    switch (titleAlign) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      default:
        return 'center';
    }
  }, [titleAlign]);

  return (
    <Container justifyContent={justifyContent}>
      <div className="leftSlot">{renderLeftSlot()}</div>
      <div style={{ fontSize: fontSize + 'px' }}>{children}</div>
      <div className="rightSlot">{renderRightSlot()}</div>
    </Container>
  );
});

export default Header;
