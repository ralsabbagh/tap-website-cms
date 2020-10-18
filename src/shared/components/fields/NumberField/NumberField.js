import React from 'react';
import Input from '../../basic/Input/Input';
import FunctionsUtil from '../../utils/FunctionsUtil';

function NumberField(props) {
  function onChange(value) {
    FunctionsUtil.updateValue(parseFloat(value), props.onChange);
  }

  return <Input placeHolder={'0000'} {...props} type={'number'} onChange={onChange} />;
}

export default NumberField;
