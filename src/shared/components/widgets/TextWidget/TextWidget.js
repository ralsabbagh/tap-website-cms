import React, { useState } from 'react';
import Input from '../../basic/Input/Input';
import FunctionsUtil from '../../utils/FunctionsUtil';
import levels_options from './levels_options.json';
import break_options from './break_options.json';
import Select from '../../basic/Select/Select';
import BaseWidget from '../BaseWidget/BaseWidget';

function TextWidget(props) {
  const [objValue, setObjValue] = useState({});

  function onChange(value, key) {
    FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, setObjValue);
    FunctionsUtil.updateValue({ component: 'text', props: { ...objValue, ...{ [`${key}`]: value } } }, props.onChange);
  }

  return (
    <BaseWidget
      widgetTitle={'Text'}
      fields={[
        { title: 'text', field: <Input placeHolder={'some text'} onChange={(value) => onChange(value, 'text')} /> },
        {
          title: 'level',
          field: <Select items={levels_options} />,
          responsive: true,
          onChange: (value) => onChange(value, 'level'),
        },
        { title: 'break', field: <Select items={break_options} onChange={(value) => onChange(value, 'break')} /> },
      ]}
    />
  );
}

TextWidget.defaultProps = {
  onChange: () => {},
};

export default TextWidget;
