/*
 * @Author: liuyingying
 * @Date: 2021-09-14 16:32:34
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-15 14:10:40
 * @Description:
 */
import React, { memo, useMemo } from 'react';
import { RadioProps } from '../interface';

const NoCheck: React.FC<RadioProps> = memo((props) => {
  const {
    width = '26',
    height = '26',
    disabled,
    borderColor = '#4B5FE1',
  } = props;

  const bc = useMemo(() => {
    return disabled ? '#ccc' : borderColor;
  }, [disabled, borderColor]);

  const bg = useMemo(() => {
    return disabled ? '#e4e2e2' : '#fff';
  }, [disabled]);

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 35.5 35.5"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>路径</title>
        <desc>Created with Sketch.</desc>
        <defs>
          <path
            d="M693,243 C684.2,243 677,235.8 677,227 C677,218.2 684.2,211 693,211 C701.8,211 709,218.2 709,227 C709,235.8 701.8,243 693,243 Z"
            id="path-no-1"
          ></path>
          <filter
            x="-23.4%"
            y="-17.2%"
            width="146.9%"
            height="146.9%"
            filterUnits="objectBoundingBox"
            id="filter-2"
          >
            <feMorphology
              radius="0.5"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              dx="0"
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="2"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="筛选"
            transform="translate(-675.000000, -1003.000000)"
            fillRule="nonzero"
          >
            <g id="分组-2" transform="translate(0.000000, 794.000000)">
              <g id="路径">
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-2)"
                  xlinkHref="#path-no-1"
                ></use>
                <use
                  stroke={bc}
                  strokeWidth="1"
                  fill={bg}
                  xlinkHref="#path-no-1"
                ></use>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
});

export default NoCheck;
