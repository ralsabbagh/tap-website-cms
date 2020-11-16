import React from 'react';
import Animation from '../../basic/Animation/Animation';
import Container from '../../basic/Container/Container';
import Expandable from '../../basic/Expandable/Expandable';
import MenuItem from '../../basic/MenuItem/MenuItem';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';

const iconSrc = 'https://www.flaticon.com/svg/static/icons/svg/888/888071.svg';

function SideMenu(props) {
  function sideMenu() {
    return (
      <Container
        style={{
          lg: {
            textAlign: 'initial',
            paddingLeft: '200px',
            paddingTop: '40px',
            backgroundColor: '#fff',
            borderRight: '1px solid #e8e8e8',
            height: '100vh',
            boxShadow: '#0000001a 0px 60px 100px',
            width: '400px',
            marginLeft: 0,
          },
        }}
      >
        <Text text={'Pages'} level={{ lg: 'h6' }} />
        <Spacing space={{ lg: 10 }} iconSrc={iconSrc} />
        <Expandable
          appear={true}
          trigger={
            <MenuItem
              title={'Kuwait'}
              iconSrc={'https://www.flaticon.com/svg/static/icons/svg/555/555501.svg'}
              active={true}
            />
          }
          target={target()}
        />
        <Spacing space={{ lg: 10 }} />
        <Expandable
          trigger={
            <MenuItem
              title={'Saudi Arabia'}
              iconSrc={'https://www.flaticon.com/svg/static/icons/svg/206/206719.svg'}
              active={true}
            />
          }
          target={target()}
        />
        <Spacing space={{ lg: 10 }} />
        <Expandable
          trigger={
            <MenuItem
              title={'Emirates'}
              iconSrc={'https://www.flaticon.com/svg/static/icons/svg/206/206701.svg'}
              active={true}
            />
          }
          target={target()}
        />
        <Spacing space={{ lg: 10 }} />
        <Expandable
          trigger={
            <MenuItem
              title={'Bahrain'}
              iconSrc={'https://www.flaticon.com/svg/static/icons/svg/206/206714.svg'}
              active={true}
            />
          }
          target={target()}
        />
        <Spacing space={{ lg: 10 }} />
        <Expandable
          trigger={
            <MenuItem
              title={'Qatar'}
              iconSrc={'https://www.flaticon.com/svg/static/icons/svg/206/206826.svg'}
              active={true}
            />
          }
          target={target()}
        />
        <Spacing space={{ lg: 10 }} />
        <Expandable
          trigger={
            <MenuItem
              title={'Oman'}
              iconSrc={'https://www.flaticon.com/svg/static/icons/svg/206/206848.svg'}
              active={true}
            />
          }
          target={target()}
        />
        <Spacing space={{ lg: 10 }} />
        <Expandable
          trigger={
            <MenuItem
              title={'Egypt'}
              iconSrc={'https://www.flaticon.com/svg/static/icons/svg/206/206694.svg'}
              active={true}
            />
          }
          target={target()}
        />
        <Spacing space={{ lg: 10 }} />
        <Expandable
          trigger={
            <MenuItem
              title={'Lebanon'}
              iconSrc={'https://www.flaticon.com/svg/static/icons/svg/206/206834.svg'}
              active={true}
            />
          }
          target={target()}
        />
        <Spacing space={{ lg: 10 }} />
        <Expandable
          trigger={
            <MenuItem
              title={'Jordan'}
              iconSrc={'https://www.flaticon.com/svg/static/icons/svg/206/206775.svg'}
              active={true}
            />
          }
          target={target()}
        />
      </Container>
    );
  }

  function target() {
    let _src = 'https://www.flaticon.com/svg/static/icons/svg/2246/2246696.svg';
    return (
      <React.Fragment>
        <Spacing space={{ lg: 5 }} />
        <MenuItem title={'pay'} iconSrc={_src} />
        <Spacing space={{ lg: 5 }} />
        <MenuItem title={'sell'} iconSrc={_src} />
        <Spacing space={{ lg: 5 }} />
        <MenuItem title={'collect'} iconSrc={_src} active={true} />
        <Spacing space={{ lg: 5 }} />
        <MenuItem title={'api'} iconSrc={_src} />
        <Spacing space={{ lg: 5 }} />
        <MenuItem title={'about'} iconSrc={_src} />
        <Spacing space={{ lg: 5 }} />
        <MenuItem title={'jobs'} iconSrc={_src} />
        <Spacing space={{ lg: 7 }} />
      </React.Fragment>
    );
  }
  return (
    <Container
      style={{
        lg: {
          position: 'fixed',
          top: 46,
          width: '100%',
          height: '100%',
          pointerEvents: props.appear ? 'auto' : 'none',
        },
      }}
    >
      <Animation
        type={'slide'}
        direction={'right'}
        appear={props.appear}
        fade={false}
        distance={'400px'}
        duration={'0.2s'}
      >
        {sideMenu()}
      </Animation>
    </Container>
  );
}

SideMenu.defaultProps = {};

export default SideMenu;
