/*
 * @Author: your name
 * @Date: 2021-09-23 14:02:45
 * @LastEditTime: 2021-09-27 17:41:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \library\src\components\header\index.tsx
 */
import React, { useCallback, useMemo } from 'react';
import goback from './static/goback.svg';
import se from './static/search.svg';
import closes from './static/close.svg';
// import { Container } from "./header-style";
import { HeaderProps } from './interface';
import './index.less';

const Header: React.FC<HeaderProps> = React.memo((props) => {
  const { children, goBack, search, Icon, close, title } = props;

  const renderLeftSlot = useCallback(() => {
    if (goBack && close) {
      return (
        <>
          <img
            src={goback}
            alt="返回"
            className="jdd-goback-img"
            onClick={goBack}
          ></img>
          <img src={closes} onClick={close} className="jdd-close-img"></img>
        </>
      );
    }
    if (goBack) {
      return (
        <img
          src={goback}
          alt="返回"
          className="jdd-goback-img"
          onClick={goBack}
        ></img>
      );
    }
    if (close) {
      return <img onClick={close} src={closes} className="jdd-close-img"></img>;
    }
  }, [goBack, close]);

  const renderRightSlot = useCallback(() => {
    if (search && Icon) {
      return (
        <>
          {Icon}{' '}
          <img
            src={se}
            alt="查找"
            className="jdd-search-img"
            onClick={search}
          />
        </>
      );
    }
    if (Icon) {
      return Icon;
    }
    if (search) {
      return (
        <img src={se} alt="查找" className="jdd-search-img" onClick={search} />
      );
    }
  }, [search, Icon]);
  return (
    <div className="jdd-header">
      <div className="jdd-leftSlot">{renderLeftSlot()}</div>
      <div className="jdd-content">{title == null ? children : title}</div>
      <div className="jdd-rightSlot">{renderRightSlot()}</div>
    </div>
  );
});
export default Header;
