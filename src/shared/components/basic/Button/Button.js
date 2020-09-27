import React, { useState } from 'react';
import GeneralUtil from '../../../utils/GeneralUtil';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import Row from '../Row/Row';
import ButtonUtil from './ButtonUtil';

function Button(props) {
  const [hover, setHover] = useState(false);

  require('./Button.css');
  let style = ButtonUtil._style(props, hover);
  let onClick = GeneralUtil.onClick_(props.onClick);

  return (
    <button
      style={style}
      className={props.className + ' t_button ' + props.shape}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => onClick()}
    >
      <Row verticalAlign={'middle'} spacing={{ lg: props.text && props.icon ? 10 : 0 }}>
        {props.text ? <Text level={{ lg: 'h6' }} {...props.text} /> : <React.Fragment />}
        {props.icon ? <Icon size={'md'} {...props.icon} /> : <React.Fragment />}
      </Row>
    </button>
  );
}

Button.defaultProps = {
  style: {},
  className: '',
  text: null,
  icon: null,
  shape: 'bordered', /// bordered /// solid
  primaryColor: 'white',
  secondaryColor: 'gray',
  hover: true,
  onClick: () => {},
};

export default Button;
