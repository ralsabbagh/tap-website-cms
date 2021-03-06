import React from 'react';
import GeneralUtil from '../../../utils/GeneralUtil';
import Center from '../Center/Center';
import Icon from '../Icon/Icon';
import { observer } from 'mobx-react-lite';
import { useAppContext } from '../../../Context/AppContext';

function Poppup(props) {
  require('./Popup.css');
  let style = GeneralUtil.responsiveObject(props.style);
  let className = props.className + ' t_popup ';
  const { controllers } = useAppContext();
  const controller = controllers.popup;

  return (
    <div className={className + controller.state} style={style} onClick={() => controller.setState({ state: 'close' })}>
      <Icon className={'fas fa-times t_popup_close'} size={'md'} />
      <Center style={{ lg: { cursor: 'auto' } }} onClick={(e) => e.stopPropagation()}>
        {controller.child}
      </Center>
    </div>
  );
}

Poppup.defaultProps = {
  style: {},
  className: '',
};

export default observer(Poppup);
