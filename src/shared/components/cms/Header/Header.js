import React from 'react';
import Container from '../../basic/Container/Container';
import Icon from '../../basic/Icon/Icon';
import Row from '../../basic/Row/Row';

function Header(props) {
  require('./Header.css');

  return (
    <Container className={'t_header'}>
      <Container className={'page_container'}>
        <Row portitions={{ lg: [0.5, 0.5] }}>
          <Container style={{ lg: { textAlign: 'left' } }} onClick={() => props.setMenuStatus()}>
            <Icon
              src={'https://www.flaticon.com/svg/static/icons/svg/1828/1828859.svg'}
              size={'lg'}
              style={{ lg: { cursor: 'pointer' } }}
            />
          </Container>
          <Container style={{ lg: { textAlign: 'right' } }}>
            <Icon
              src={'https://www.flaticon.com/svg/static/icons/svg/1738/1738691.svg'}
              size={'lg'}
              style={{ lg: { cursor: 'pointer' } }}
            />
          </Container>
        </Row>
      </Container>
    </Container>
  );
}

Header.defaultProps = {};

export default Header;
