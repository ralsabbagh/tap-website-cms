class NumberUtil {
  static forceFraction(value) {
    value = Math.abs(value);
    return value >= 1 ? value / 10 : value;
  }
}

export default NumberUtil;
