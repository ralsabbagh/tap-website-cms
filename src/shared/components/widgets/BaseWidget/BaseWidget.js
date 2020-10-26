import React from 'react';
import Card from '../../basic/Anchor/Card/Card';
import Container from '../../basic/Container/Container';
import Icon from '../../basic/Icon/Icon';
import Row from '../../basic/Row/Row';
import Text from '../../basic/Text/Text';
import BaseField from '../BaseField/BaseField';

function BaseWidget(props) {
  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Row portitions={{ lg: [0.5, 0.5] }}>
        <Text text={props.widgetTitle} level={{ lg: 'h5' }} />
        <Container style={{ lg: { textAlign: 'right' } }}>
          {props.widgetTitle !== 'Container' && (
            <Row spacing={{ lg: 7 }}>
              <Icon src={'https://www.flaticon.com/svg/static/icons/svg/1365/1365230.svg'} size={'md'} />
              <Icon src={'https://www.flaticon.com/svg/static/icons/svg/3143/3143542.svg'} size={'md'} />
            </Row>
          )}
        </Container>
      </Row>
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
