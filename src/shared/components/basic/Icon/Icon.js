import React from 'react';
import Image from '../Image/Image';
import GeneralUtil from '../../../utils/GeneralUtil';

function Icon(props) {
  require('./Icon.css');
  let _props = {
    className: props.className + ' fa-' + props.size + ' t_icon',
    style: GeneralUtil.responsiveObject(props.style),
    onClick: GeneralUtil.onClick_(props.onClick),
    src: props.src,
  };
  return !props.src ? <i {..._props} /> : <Image {..._props} />;
}

Icon.defaultProps = {
  className: '',
  style: {},
  size: 'sm',
  src: null,
  onClick: () => {},
};

export default Icon;
