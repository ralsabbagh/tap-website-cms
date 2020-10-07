import React from 'react';
import Card from '../../basic/Anchor/Card/Card';
import ResponsiveField from '../../fields/ResponsiveField/ResponsiveField';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
import AddWidget from '../../pageBuilder/addWidget/addWidget';
let obj_value = {};

function RowWidget(props) {
  function onChange(value, key) {
    obj_value[key] = value;
    // console.log(obj_value);
  }

  let portitions = [];
  props.children.map(() => portitions.push(1 / props.children.length));
  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Text text={'Row'} level={{ lg: 'h4' }} />
      <Spacing space={{ lg: 20 }} />
      <ResponsiveField
        fieldName={'Portitions'}
        onChange={(value) => onChange(value, 'portitions')}
        field={{
          component: 'arrayFields',
          props: {
            length: props.children.length,
            field: { component: 'fractionField' },
          },
        }}
      ></ResponsiveField>
      <Spacing space={{ lg: 20 }} />
      <ResponsiveField
        fieldName={'Spacing'}
        onChange={(value) => onChange(value, 'spacing')}
        field={{
          component: 'numberField',
        }}
      ></ResponsiveField>
      <Spacing space={{ lg: 20 }} />
      <Text text={'Children'} level={{ lg: 'h6' }} />
      <Spacing space={{ lg: 5 }} />
      <AddWidget />
    </Card>
  );
}

RowWidget.defaultProps = {};

export default RowWidget;
