import React, { useState } from 'react';
import NumberUtil from '../../utils/NumberUtil';
import NumberField from '../NumberField/NumberField';
import FunctionsUtil from '../../utils/FunctionsUtil';

function FractionField(props) {
  const [value, setValue] = useState();

  function onChange(value) {
    FunctionsUtil.updateValue(NumberUtil.forceFraction(value), props.onChange, setValue);
  }

  return <NumberField {...props} value={value} onChange={onChange} />;
}

FractionField.defaultProps = {
  placeHolder: '0.00',
  onChange: () => {},
};

export default FractionField;
