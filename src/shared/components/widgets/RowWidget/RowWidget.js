import React, { useState } from 'react';
import Card from '../../basic/Anchor/Card/Card';
import ResponsiveField from '../../fields/ResponsiveField/ResponsiveField';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
import ChildrenFields from '../../fields/ChildrenFields/ChildrenFields';
import FunctionsUtil from '../../utils/FunctionsUtil';

function RowWidget(props) {
  const [objValue, setObjValue] = useState({});
  const [childrenValue, setChildrenValue] = useState([]);

  function onChange(value, key) {
    if (key !== 'children') {
      FunctionsUtil.updateObj(objValue, { [$`key`]: value }, setObjValue);
    }
    if (key === 'children') {
      FunctionsUtil.updateArray(value, key, childrenValue, setChildrenValue);
    }
    setTimeout(() => {
      FunctionsUtil.updateValue({ component: 'row', props: objValue, ...childrenValue }, props.onChange);
    }, 10);
  }

  let portitions = [];
  childrenValue.map(() => portitions.push(1 / childrenValue.length));
  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Text text={'Row'} level={{ lg: 'h4' }} />
      <Spacing space={{ lg: 20 }} />
      <ResponsiveField
        fieldName={'portitions'}
        onChange={(value) => onChange(value, 'portitions')}
        field={{
          component: 'arrayFields',
          props: {
            length: childrenValue.length,
            field: { component: 'fractionField' },
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
      <Text text={'children'} level={{ lg: 'h6' }} />
      <Spacing space={{ lg: 5 }} />
      <ChildrenFields onChange={(value) => onChange(value, 'children')} type={'row'} />
    </Card>
  );
}

RowWidget.defaultProps = {
  onChange: () => {},
};

export default RowWidget;
