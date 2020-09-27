import React from 'react';
import GeneralUtil from '../../utils/GeneralUtil';

function Spacing(props) {
  let space = GeneralUtil.responsiveObject(props.space);
  return <div style={{ height: space + 'px' }} />;
}

Spacing.defaultProps = {
  space: {},
};

export default Spacing;
