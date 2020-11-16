import React, { useState } from 'react';
import Container from '../../basic/Container/Container';
import Spacing from '../../basic/Spacing/Spacing';
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
      <Container className={'t_template_page'}>
        <Spacing space={{ lg: 88 }} />
        {props.page}
      </Container>
      <Container className={'t_template_sidemenu'}>
        <SideMenu appear={menuStatus} />
      </Container>
    </Container>
  );
}

MainTemplate.defaultProps = {};

export default MainTemplate;
