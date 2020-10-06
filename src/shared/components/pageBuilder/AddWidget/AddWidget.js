import React from 'react';
import Card from '../../basic/Anchor/Card/Card';
import Icon from '../../basic/Icon/Icon';
import { useAppContext } from '../../../Context/AppContext';

function AddWidget(props) {
  const { controllers } = useAppContext();
  const popup = controllers.popup;

  return (
    <Card
      style={{ lg: { textAlign: 'center', cursor: 'pointer' } }}
      onClick={() => popup.setState({ state: 'open', child: { component: 'widgetPicker' } })}
    >
      <Icon src={'https://www.flaticon.com/svg/static/icons/svg/747/747944.svg'} size={'xlg'} />
    </Card>
  );
}

AddWidget.defaultProps = {};

export default AddWidget;
