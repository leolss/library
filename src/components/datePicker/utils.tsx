/*
 * @Author: 李闪闪
 * @Date: 2021-10-20 15:54:12
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-11-18 17:55:24
 * @Description:
 */
function formatIt(date: Date, form: string) {
  const pad = (n: number) => (n < 10 ? `0${n}` : n);
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  if (form === 'YYYY-MM-DD') {
    return dateStr;
  }
  if (form === 'HH:mm') {
    return timeStr;
  }
  return `${dateStr} ${timeStr}`;
}

export function formatFn(instance: any, value: Date) {
  const formatsEnum = {
    date: 'YYYY-MM-DD',
    time: 'HH:mm',
    datetime: 'YYYY-MM-DD HH:mm',
  };
  const { format } = instance;
  const type = typeof format;
  if (type === 'string') {
    return formatIt(value, format);
  }
  if (type === 'function') {
    return format(value);
  }
  return formatIt(value, (formatsEnum as any)[instance.mode]);
}
// date-picker
//-------
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
