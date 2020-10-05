import React from 'react';
import GeneralUtil from '../../../utils/GeneralUtil';

function Image(props) {
  require('./Image.css');
  let alt = GeneralUtil.extractFileName(props.src);
  let style = GeneralUtil.responsiveObject(props.style);
  return <img src={props.src} alt={alt} style={style} className={props.className} {...props} />;
}

Image.defaultProps = {
  style: {},
  className: '',
  onClick: () => {},
};

export default Image;
