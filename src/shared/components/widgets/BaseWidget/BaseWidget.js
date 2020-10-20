import React from 'react';
import Card from '../../basic/Anchor/Card/Card';
import Text from '../../basic/Text/Text';
import BaseField from '../BaseField/BaseField';

function BaseWidget(props) {
  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Text text={props.widgetTitle} level={{ lg: 'h5' }} />
      {props.fields.map((field, key) => (
        <BaseField
          key={key}
          title={field.title}
          field={field.field}
          responsive={field.responsive}
          onChange={field.onChange}
        />
      ))}
    </Card>
  );
}

BaseWidget.defaultProps = {};

export default BaseWidget;
