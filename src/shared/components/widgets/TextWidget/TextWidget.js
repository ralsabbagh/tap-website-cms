import React, { useState } from 'react';
import Card from '../../basic/Anchor/Card/Card';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
import Input from '../../basic/Input/Input';
import FunctionsUtil from '../../utils/FunctionsUtil';
import levels_options from './levels_options.json';
import break_options from './break_options.json';
import Select from '../../basic/Select/Select';
import ResponsiveField from '../../fields/ResponsiveField/ResponsiveField';

function TextWidget(props) {
  const [objValue, setObjValue] = useState({});

  function onChange(value, key) {
    FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, setObjValue);
    FunctionsUtil.updateValue({ component: 'text', props: { ...objValue, ...{ [`${key}`]: value } } }, props.onChange);
  }

  let title_style = { lg: { color: 'gray' } };

  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Text text={'Text'} level={{ lg: 'h5' }} />
      <Spacing space={{ lg: 20 }} />
      <Text text={'text'} level={{ lg: 'h6' }} style={title_style} />
      <Spacing space={{ lg: 5 }} />
      <Input placeHolder={'some text'} onChange={(value) => onChange(value, 'text')} />
      <Spacing space={{ lg: 20 }} />
      <ResponsiveField
        fieldName={'level'}
        onChange={(value) => {
          onChange(value, 'level');
        }}
        field={{
          component: 'select',
          props: {
            items: levels_options,
          },
        }}
      ></ResponsiveField>
      <Spacing space={{ lg: 20 }} />
      <Text text={'break'} level={{ lg: 'h6' }} style={title_style} />
      <Spacing space={{ lg: 5 }} />
      <Select items={break_options} onChange={(value) => onChange(value, 'break')} />
      {/* <Input placeHolder={'some text'} onChange={(value) => onChange(value, 'text')} /> */}
    </Card>
  );
}

TextWidget.defaultProps = {
  onChange: () => {},
};

export default TextWidget;
