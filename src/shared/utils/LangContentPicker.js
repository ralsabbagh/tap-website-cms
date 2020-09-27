class LangContentPicker {
  static filterJson(json, language) {
    let _json;
    if (Array.isArray(json)) {
      _json = LangContentPicker.filterArray(json, language);
    }
    if (typeof json === 'object' && !Array.isArray(json)) {
      _json = LangContentPicker.filterObject(json, language);
    }
    if (typeof json === 'string' || typeof json === 'boolean' || typeof json === 'number') {
      _json = json;
    }
    return _json;
  }

  static filterArray(array, language) {
    let _arr = [];
    array.map(_obj => {
      _arr.push(LangContentPicker.filterJson(_obj, language));
    });
    return _arr;
  }

  static filterObject(obj, language) {
    let _obj = {};
    if (obj.en && obj.ar) {
      _obj = obj[language];
    } else {
      for (var propName in obj) {
        if (obj.hasOwnProperty(propName))
          Object.assign(_obj, { [`${propName}`]: LangContentPicker.filterJson(obj[propName], language) });
      }
    }
    return _obj;
  }
}

export default LangContentPicker;
