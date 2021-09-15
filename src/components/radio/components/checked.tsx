/*
 * @Author: liuyingying
 * @Date: 2021-09-14 16:32:34
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-15 10:03:24
 * @Description:
 */
import React, { memo } from 'react';
import { RadioStyles } from '../interface';

const Checked: React.FC<RadioStyles> = memo((props) => {
  const {
    width = '26',
    height = '26',
    backgroundColor = '#4B5FE1',
    color = '#fff',
  } = props;

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>列表选择已选中</title>
        <defs>
          <circle id="path-1" cx="18" cy="18" r="18"></circle>
          <filter
            x="-19.4%"
            y="-13.9%"
            width="138.9%"
            height="138.9%"
            filterUnits="objectBoundingBox"
            id="filter-2"
          >
            <feOffset
              dx="0"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="2"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.31372549   0 0 0 0 0.4   0 0 0 0 0.568627451  0 0 0 0.4 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
        </defs>
        <g
          id="B端工作台UI设计稿"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="B端工作台切图"
            transform="translate(-1571.000000, -518.000000)"
          >
            <g
              id="列表选择已选中"
              transform="translate(1571.000000, 518.000000)"
            >
              <g
                id="编组-3"
                transform="translate(4.000000, 4.000000)"
                fillRule="nonzero"
              >
                <g id="椭圆形">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-2)"
                    xlinkHref="#path-1"
                  ></use>
                  <use fill={backgroundColor} xlinkHref="#path-1"></use>
                </g>
                <path
                  d="M14.8115942,24.4226804 L28.5217391,13.4536082 C29.1594203,12.8762887 29.1594203,12.0103093 28.5217391,11.4329897 C27.884058,10.8556701 26.9275362,10.8556701 26.2898551,11.4329897 L14.173913,21.2474227 L9.71014493,16.9175258 C9.07246377,16.3402062 8.11594203,16.3402062 7.47826087,16.9175258 C6.84057971,17.4948454 6.84057971,18.3608247 7.47826087,18.9381443 L12.8985507,24.4226804 C13.2173913,24.7113402 13.5362319,25 14.173913,25 C14.173913,24.7113402 14.4927536,24.4226804 14.8115942,24.4226804 L14.8115942,24.4226804 Z"
                  id="形状"
                  fill={color}
                ></path>
              </g>
              <rect id="矩形" x="0" y="0" width={width} height={height}></rect>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
});

export default Checked;
