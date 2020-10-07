class FunctionsUtil {
  static updateObj(value1, value2, function1, function2) {
    let _objValue = { ...value1, ...value2 };
    FunctionsUtil.updateValue(_objValue, function1, function2);
  }

  static updateArray(value, key, arrayValue, function1, function2) {
    let _arrayValue = arrayValue;
    _arrayValue[key] = value;
    FunctionsUtil.updateValue(_arrayValue, function1, function2);
  }

  static updateValue(value, function1, function2) {
    if (function1) function1(value);
    if (function2) function2(value);
  }
}

export default FunctionsUtil;
