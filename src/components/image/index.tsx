/*
 * @Author: 李闪闪
 * @Date: 2021-10-11 17:27:45
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-10-13 14:05:36
 * @Description:
 */
import React, { useState } from 'react';
import { InterfaceProps } from './interface';
import { NativeProps, withNativeProps } from '@/utils/native-props';
import PictureOutline from '@/utils/PictureOutline';
import PictureWrongOutline from '@/utils/PictureWrongOutline';

import './index.less';

const classPrefix = `jdd-image`;
export interface ImageProps
  extends InterfaceProps,
    NativeProps,
    Pick<
      React.ImgHTMLAttributes<HTMLImageElement>,
      | 'crossOrigin'
      | 'decoding'
      | 'loading'
      | 'referrerPolicy'
      | 'sizes'
      | 'srcSet'
      | 'useMap'
    > {}
const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={`${classPrefix}-tip`}>
      <PictureOutline />
    </div>
  ),
  fallback: (
    <div className={`${classPrefix}-tip`}>
      <PictureWrongOutline />
    </div>
  ),
};
const Image: React.FC<ImageProps> = (p) => {
  const props = Object.assign({}, defaultProps, p);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  function renderInner() {
    if (failed) {
      return props.fallback;
    }
    return (
      <>
        {!loaded && props.placeholder}
        <img
          className={`${classPrefix}-img`}
          src={props.src}
          alt={props.alt}
          onClick={props.onClick}
          onLoad={() => {
            setLoaded(true);
          }}
          onError={(e) => {
            setFailed(true);
            props.onError?.(e);
          }}
          style={{
            objectFit: props.fit,
            display: loaded ? 'block' : 'none',
          }}
          crossOrigin={props.crossOrigin}
          decoding={props.decoding}
          loading={props.loading}
          referrerPolicy={props.referrerPolicy}
          sizes={props.sizes}
          srcSet={props.srcSet}
          useMap={props.useMap}
        />
      </>
    );
  }
  return withNativeProps(
    props,
    <div
      className={classPrefix}
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      {renderInner()}
    </div>,
  );
};
Image.displayName = 'Image';
export default Image;
