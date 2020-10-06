import React from 'react';
import Card from '../../basic/Anchor/Card/Card';
import Row from '../../basic/Row/Row';
import widgets from './widgets.json';
// import Icon from '../../basic/Icon/Icon';
import Text from '../../basic/Text/Text';
import Spacing from '../../basic/Spacing/Spacing';
import Image from '../../basic/Image/Image';

function WidgetPicker(props) {
  function onClick() {}

  return (
    <Card className={'page_container'}>
      <Row spacing={{ lg: 20, xs: 10 }} portitions={{ lg: [1 / 5, 1 / 5, 1 / 5, 1 / 5, 1 / 5] }}>
        {widgets.map((widget) => (
          <Card>
            <Text text={widget.component} level={{ lg: 'h6' }} />
            <Spacing space={{ lg: 5 }} />
            <Image
              src={widget.icon}
              style={{ lg: { height: '80px', width: '80px' }, xs: { height: '35px', width: '35px' } }}
            />
          </Card>
        ))}
      </Row>
    </Card>
  );
}

WidgetPicker.defaultProps = {};

export default WidgetPicker;
