export const setStyle = (element, params = {}) => {
  if (!element) return;
  if (Object.getOwnPropertyDescriptor(document.body.style, 'fontSize').writable) {
    Object.keys(params).forEach((key) => {
      element.style[key] = params[key];
    });
  }
  let cssText = element.style.cssText;
  const tmpArr = cssText.split(';');
  let existAttributes = {};
  tmpArr.forEach((item) => {
    let res = item.split(':');
    if (res && res.length > 1) {
      let key = res[0].trim();
      let value = res[1].trim();
      existAttributes[key] = value;
    }
  });
  element.style.cssText = Object.keys(existAttributes).map(key => `${key}:${existAttributes[key]}`).join(';');
};

export const getLocationSearch = () => {
  let result = {};
  window.location.search.replace(/([^?&=]+)=([^&]+)/g, (_,k,v) => result[k] = v);
  return result;
}

function isArray(object) {
  if (Array.isArray) {
      return Array.isArray(object);
  }

  return object instanceof Array;
}

function isObject(object) {
  const classType = Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
  return classType !== 'String' && classType !== 'Number' && classType !== 'Boolean' && classType !== 'Undefined' && classType !== 'Null';
}

function isWindow(object) {
  return object && object === window;
}

function isPlainObject(obj) {
  return isObject(obj) && !isWindow(obj)
  && Object.getPrototypeOf(obj) === Object.prototype;
}

export const extendObject = (isDeep, {}, defaultSetting, options) => {
  let target = {};
  const _loop = (optionTemp) => {
    const source = optionTemp;

    if (source && isObject(source)) {
        // for-of打包过大
        Object.keys(source).forEach((name) => {
            const src = target[name];
            const copy = source[name];
            const copyIsPlainObject = isPlainObject(copy);
            let copyIsArray = isArray(copy);
            let clone = void 0;

            if (target === copy) return;

            if (isDeep && copy && (copyIsArray || copyIsPlainObject)) {
              if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
              } else {
                  clone = src && isPlainObject(src) ? src : {};
              }
              target[name] = extendObject(isDeep, clone, copy);
            } else if (copy !== undefined) {
              target[name] = copy;
            }
        });
    }
  };

  _loop(defaultSetting);
  _loop(options);
  return target;
}