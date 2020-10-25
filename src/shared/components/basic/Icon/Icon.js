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
    id: props.id,
  };
  return (
    <div className={_props.className} style={{ ..._props.style, ...{ display: 'inline-block' } }}>
      {!props.src ? <i {..._props} /> : <Image {..._props} />}
    </div>
  );
}

Icon.defaultProps = {
  id: '',
  className: '',
  style: {},
  size: 'sm',
  src: null,
  onClick: () => {},
};

export default Icon;
