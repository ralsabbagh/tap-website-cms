import React, { useState } from 'react';
import NumberUtil from '../../utils/NumberUtil';
import NumberField from '../NumberField/NumberField';

function FractionField(props) {
  const [value, setValue] = useState();

  function onChange(e) {
    let _value = NumberUtil.forceFraction(e.target.value);
    if (props.onChange) props.onChange(_value);
    setValue(_value);
  }

  return <NumberField {...props} value={value} onChange={onChange} />;
}

FractionField.defaultProps = {
  placeHolder: '0.00',
  onChange: () => {},
};

export default FractionField;
