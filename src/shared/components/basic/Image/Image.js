import React from 'react';
import GeneralUtil from '../../../utils/GeneralUtil';

function Image(props) {
  require('./Image.css');
  let alt = GeneralUtil.extractFileName(props.src);
  let style = GeneralUtil.responsiveObject(props.style);
  console.log(props.style);
  console.log(style);
  return <img {...props} src={props.src} alt={alt} style={style} className={props.className} />;
}

Image.defaultProps = {
  style: {},
  className: '',
  src: '',
  onClick: () => {},
};

export default Image;
