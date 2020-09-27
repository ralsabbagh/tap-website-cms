import React from 'react';
import Input from '../../basic/Input/Input';

function NumberField(props) {
  return <Input placeHolder={'Ex: 20, 30.5'} {...props} type={'number'} />;
}

export default NumberField;
