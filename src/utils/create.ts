/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-13 21:04:59
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-17 18:16:40
 * @Description: 创建类名等
 */

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

export function createNamespace(name: string) {
  const prefixedName = `jdd-${name}`;
  return [
    prefixedName,
    createBEM(prefixedName),
    // createTranslate(prefixedName),
  ] as const;
}

function gen(name: string, mods?: Mods): string {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string>((ret, item) => ret + gen(name, item), '');
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? gen(name, key) : ''),
    '',
  );
}

export function createBEM(name: string) {
  return function (el?: Mods, mods?: Mods): Mods {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? `${name}__${el}` : name;

    return `${el}${gen(el, mods)}`;
  };
}
