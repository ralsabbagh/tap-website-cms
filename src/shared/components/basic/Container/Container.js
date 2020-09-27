import React from 'react';
import GeneralUtil from '../../../utils/GeneralUtil';

function Container(props) {
  require('./Container.css');
  let style = GeneralUtil.responsiveObject(props.style);
  return (
    <div style={style} className={props.className}>
      {props.children}
    </div>
  );
}

Container.defaultProps = {
  style: {},
  className: '', // page_container for predefined page container
};

export default Container;
