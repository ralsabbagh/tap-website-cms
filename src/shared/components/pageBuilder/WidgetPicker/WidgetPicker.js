import React from 'react';
import Card from '../../basic/Anchor/Card/Card';
import Row from '../../basic/Row/Row';
import widgets from './widgets.json';
import Text from '../../basic/Text/Text';
import Spacing from '../../basic/Spacing/Spacing';
import Image from '../../basic/Image/Image';
import { useAppContext } from '../../../Context/AppContext';

function WidgetPicker(props) {
  const { controllers } = useAppContext();
  const popup = controllers.popup;

  function onClick(component) {
    props.onClick(component);
    popup.setState({ state: 'close' });
  }

  return (
    <Card className={'page_container'}>
      <Row spacing={{ lg: 20, xs: 10 }} portitions={{ lg: new Array(widgets.length).fill(1 / 6) }}>
        {widgets.map((widget) => (
          <Card onClick={() => onClick(widget.component)} style={{ lg: { cursor: 'pointer' } }}>
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

WidgetPicker.defaultProps = {
  onClick: () => {},
};

export default WidgetPicker;
