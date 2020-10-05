import React from 'react';
import Card from '../../basic/Anchor/Card/Card';
import ResponsiveField from '../../fields/ResponsiveField/ResponsiveField';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
let obj_value = {};

function RowWidget(props) {
  function onChange(value, key) {
    obj_value[key] = value;
    // console.log(obj_value);
  }

  let portitions = [];
  props.children.map(() => portitions.push(1 / props.children.length));
  return (
    <Card textAlign={'initial'}>
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
      >
        {/* <ArrayFields length={props.children.length} field={'fractionField'} /> */}
      </ResponsiveField>
      <Spacing space={{ lg: 20 }} />
      {/* <ResponsiveField fieldName={'Spacing'}>
        <NumberField
          onChange={(e) => {
            console.log(e.target.parent);
            console.log(e.target.value);
          }}
        />
      </ResponsiveField> */}
    </Card>
  );
}

RowWidget.defaultProps = {};

export default RowWidget;
