import React from 'react';
import Container from '../../Container/Container';

function Card(props) {
  require('./Card.css');

  return (
    <Container {...props} className={props.className + ' t_card'}>
      {props.children}
    </Container>
  );
}

Card.defaultProps = {};

export default Card;
