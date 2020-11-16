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
          <Row spacing={{ lg: 5 }}>
            <Icon
              src={'https://www.flaticon.com/svg/static/icons/svg/1365/1365230.svg'}
              size={'md'}
              title={'Copy'}
              style={{ lg: { cursor: 'pointer' } }}
            />
            <Icon
              src={'https://www.flaticon.com/svg/static/icons/svg/3143/3143542.svg'}
              size={'md'}
              title={'Delete'}
              style={{ lg: { cursor: 'pointer' } }}
            />
          </Row>
        </Container>
      </Row>
      {props.fields.map((field, key) => (
        <BaseField key={key} {...field} />
      ))}
    </Card>
  );
}

BaseWidget.defaultProps = {};

export default BaseWidget;
