/*
 * @Author: liuyingying
 * @Date: 2021-09-17 15:17:42
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-17 15:17:43
 * @Description:
 */
// 防抖(ts)
export class Debounced {
  /**
   * @param func 需要包装的函数
   * @param delay 延迟时间，单位ms
   * @param immediate 是否默认执行一次(第一次不延迟)
   */
  public use = (
    func: Function,
    delay: number,
    immediate: boolean = false,
  ): Function => {
    let timer: any;
    return (...args: any) => {
      if (immediate) {
        func.apply(this, args); // 确保引用函数的指向正确，并且函数的参数也不变
        immediate = false;
        return;
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };
}

export class Throttle {
  public use = (func: Function, delay: number): Function => {
    let valid = true;
    return () => {
      if (!valid) {
        //休息时间 暂不接客
        return false;
      } else {
        func();
      }
      // 工作时间，执行函数并且在间隔期内把状态位设为无效
      valid = false;
      setTimeout(() => {
        valid = true;
      }, delay);
    };
  };
}
