/*
 * @Author: 李闪闪
 * @Date: 2021-09-22 15:45:51
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-22 15:45:51
 * @Description:
 */
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
