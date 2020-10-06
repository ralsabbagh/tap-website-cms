import React from 'react';
import Input from '../../basic/Input/Input';

function NumberField(props) {
  return <Input placeHolder={'0000'} {...props} type={'number'} />;
}

export default NumberField;
