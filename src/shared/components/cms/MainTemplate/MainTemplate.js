import React, { useState } from 'react';
import Container from '../../basic/Container/Container';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';

function MainTemplate(props) {
  const [menuStatus, setMenuStatus] = useState(false);

  require('./MainTemplate.css');

  return (
    <Container className={'t_template'}>
      <Container className={'t_template_header'}>
        <Header setMenuStatus={() => setMenuStatus(!menuStatus)} />
      </Container>
      {props.page}
      <Container className={'t_template_sidemenu'}>
        <SideMenu appear={menuStatus} />
      </Container>
    </Container>
  );
}

MainTemplate.defaultProps = {};

export default MainTemplate;
