import GeneralUtil from '../../utils/GeneralUtil';

class ButtonUtil {
  static _style(props, hover) {
    let style = GeneralUtil.responsiveObject(props.style);
    switch (props.shape) {
      case 'bordered':
        return ButtonUtil._bordered(props, style, hover);
      case 'solid':
        return ButtonUtil._solid(props, style);
      default:
        return style;
    }
  }

  static _bordered(props, style, hover) {
    if (!hover || !props.hover) {
      style.borderColor = props.primaryColor;
      style.color = props.primaryColor;
    }
    if (hover && props.hover) {
      style.borderColor = 'transparent';
      style.backgroundColor = props.primaryColor;
      style.color = props.secondaryColor;
    }
    return style;
  }

  static _solid(props, style) {
    style.borderColor = props.primaryColor;
    style.backgroundColor = props.primaryColor;
    style.color = props.secondaryColor;
    return style;
  }
}

export default ButtonUtil;
