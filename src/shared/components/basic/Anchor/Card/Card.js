import React from 'react';
import Container from '../../Container/Container';

function Card(props) {
  return (
    <Container
      style={{
        lg: {
          borderRadius: '6px',
          padding: '15px',
          textAlign: props.textAlign,
          boxShadow: '#00000026 0px 0px 17px',
          backgroundColor: '#f3f3f3',
        },
      }}
    >
      {props.children}
    </Container>
  );
}

Card.defaultProps = {};

export default Card;
