/*
 * @Author: 李闪闪
 * @Date: 2021-09-27 10:02:24
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-27 10:20:39
 * @Description:
 */
export function getComponentLocale(
  props: any,
  context: any,
  componentName: string,
  getDefaultLocale: () => any,
) {
  let locale: any = {};
  if (context && context.antLocale && context.antLocale[componentName]) {
    locale = context.antLocale[componentName];
  } else {
    const defaultLocale = getDefaultLocale();
    locale = defaultLocale.default || defaultLocale;
  }
  let result = {
    ...locale,
  };
  if (props.locale) {
    result = {
      ...result,
      ...props.locale,
    };
    if (props.locale.lang) {
      result.lang = {
        ...locale.lang,
        ...props.locale.lang,
      };
    }
  }
  return result;
}
