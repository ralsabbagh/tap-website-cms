import React, { useState } from 'react';
import Card from '../../basic/Anchor/Card/Card';
import ResponsiveField from '../../fields/ResponsiveField/ResponsiveField';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
import ChildrenFields from '../../fields/ChildrenFields/ChildrenFields';
import FunctionsUtil from '../../utils/FunctionsUtil';
import portitions_options from './portitions_options.json';
function RowWidget(props) {
  const [objValue, setObjValue] = useState({});
  const [childrenValue, setChildrenValue] = useState([]);

  function onChange(value, key) {
    if (key !== 'children') {
      FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, setObjValue);
    }
    if (key === 'children') {
      FunctionsUtil.updateArray(value, key, childrenValue, setChildrenValue);
    }
    setTimeout(() => {
      FunctionsUtil.updateValue({ component: 'row', props: objValue, ...childrenValue }, props.onChange);
    }, 10);
  }

  function onPortitionsChange(value, key) {
    let _value = {};
    for (var propName in value) {
      Object.assign(_value, { [`${propName}`]: JSON.parse(value[propName]) });
    }
    onChange(_value, key);
  }

  let portitions = [];
  childrenValue.map(() => portitions.push(1 / childrenValue.length));
  let title_style = { lg: { color: 'gray' } };

  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Text text={'Row'} level={{ lg: 'h5' }} />
      <Spacing space={{ lg: 20 }} />
      <ResponsiveField
        fieldName={'portitions'}
        onChange={(value) => {
          onPortitionsChange(value, 'portitions');
        }}
        field={{
          component: 'select',
          props: {
            items: portitions_options,
          },
        }}
      ></ResponsiveField>
      <Spacing space={{ lg: 20 }} />
      <ResponsiveField
        fieldName={'spacing'}
        onChange={(value) => onChange(value, 'spacing')}
        field={{
          component: 'numberField',
        }}
      ></ResponsiveField>
      <Spacing space={{ lg: 20 }} />
      <Text text={'children'} level={{ lg: 'h6' }} style={title_style} />
      <Spacing space={{ lg: 5 }} />
      <ChildrenFields onChange={(value) => onChange(value, 'children')} type={'row'} />
    </Card>
  );
}

RowWidget.defaultProps = {
  onChange: () => {},
};

export default RowWidget;
