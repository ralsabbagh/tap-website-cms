import GeneralUtil from '../../../utils/GeneralUtil';
import React from 'react';
import Icon from '../Icon/Icon';
import Anchor from '../Anchor/Anchor';

function Text(props) {
  require('./Text.css');

  function text(text, level) {
    switch (level) {
      case 'h1':
        return <h1>{text}</h1>;
      case 'h2':
        return <h2>{text}</h2>;
      case 'h3':
        return <h3>{text}</h3>;
      case 'h4':
        return <h4>{text}</h4>;
      case 'h5':
        return <h5>{text}</h5>;
      case 'h6':
        return <h6>{text}</h6>;
      case 'span':
        return <span>{text}</span>;
      default:
        return <h6>{text}</h6>;
    }
  }

  function wrapper(anchor, className, style, onClick, children) {
    let props = {
      className: className,
      style: style,
      onClick: () => onClick(),
    };
    if (anchor)
      return (
        <Anchor {...anchor} {...props}>
          {children}
        </Anchor>
      );
    return <span {...props}>{children}</span>;
  }

  let level = GeneralUtil.responsiveObject(props.level);
  let style = GeneralUtil.responsiveObject(props.style);
  let iconStyle = { lg: { verticalAlign: 'middle' } };
  let onClick = GeneralUtil.onClick_(props.onClick);

  return wrapper(props.anchor, props.className, style, onClick, [
    props.text && text(props.text, level),
    props.text && props.icon && ' ',
    props.icon && <Icon {...props.icon} style={iconStyle} />,
    props.break && <br />,
  ]);
}

Text.defaultProps = {
  text: '',
  style: {},
  className: '',
  level: { lg: 'h6' },
  break: false,
  icon: null,
  anchor: null,
  onClick: () => {},
};

export default Text;
