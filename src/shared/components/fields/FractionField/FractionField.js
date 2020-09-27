import React, { useState } from 'react';
import NumberUtil from '../../utils/NumberUtil';
import NumberField from '../NumberField/NumberField';

function FractionField(props) {
  const [value, setValue] = useState();

  function onChange(e) {
    setValue(NumberUtil.forceFraction(e.target.value));
    () => props.onChange();
  }

  return <NumberField {...props} value={value} onChange={(e) => onChange(e)} />;
}

FractionField.defaultProps = {
  placeHolder: 'Ex: 0.5, 0.25',
  onChange: () => {},
};

export default FractionField;
