/*
 * @Author: your name
 * @Date: 2021-09-16 18:09:07
 * @LastEditTime: 2021-09-16 18:15:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \library\src\components\header\header-style.ts
 */
import { px2vw } from '../../utils';
import styled from 'styled-components';
import { StyleProps } from './interface';

export const Container = styled.div`
  height: ${px2vw(98)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justifyContent }: StyleProps) => justifyContent};
  position: relative;
  background-color: #ffffff;

  .leftSlot {
    position: absolute;
    bottom: ${px2vw(26)};
    left: ${px2vw(30)};

    .goback-img {
      height: ${px2vw(38)};
      width: ${px2vw(42)};
    }
    .close-img {
      margin-left: ${px2vw(29)};
      height: ${px2vw(40)};
      width: ${px2vw(40)};
    }
  }

  .rightSlot {
    position: absolute;
    bottom: ${px2vw(26)};
    right: ${px2vw(30)};
    .search-img {
      width: ${px2vw(36)};
      height: ${px2vw(37)};
    }
  }
`;
