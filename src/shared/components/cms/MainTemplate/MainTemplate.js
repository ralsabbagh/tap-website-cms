import React from 'react';
import Container from '../../basic/Container/Container';
import Row from '../../basic/Row/Row';

function MainTemplate(props) {
  return (
    <Container className={'page_container'}>
      <Row portitions={{ lg: [0.13, 0.87] }}>
        {props.sideMenu}
        {props.body}
      </Row>
    </Container>
  );
}

MainTemplate.defaultProps = {};

export default MainTemplate;
