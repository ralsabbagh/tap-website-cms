import React from 'react';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import Row from '../Row/Row';

function MenuItem(props) {
  require('./MenuItem.css');
  return (
    <Row
      className={'t_menu_item'}
      style={{ lg: { opacity: props.active ? 1 : 0.7, cursor: 'pointer' } }}
      spacing={{ lg: 5 }}
    >
      <Icon src={props.iconSrc} />
      <Text text={props.title} level={{ lg: 'h7' }} />
    </Row>
  );
}

MenuItem.defaultProps = {
  active: false,
  className: '',
  style: {},
  title: '',
  iconSrc: '',
  onClick: () => {},
};

export default MenuItem;
