import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { withRouter } from 'react-router-dom';
import Container from './components/basic/Container/Container';
import GeneralUtil from './utils/GeneralUtil';
import Spacing from './components/basic/Spacing/Spacing';
import Popup from './components/basic/Popup/Popup';
import ContainerWidget from './components/widgets/ContainerWidget/ContainerWidget';
import firebase from 'firebase';
import MainTemplate from './components/cms/mainTemplate/mainTemplate';
import MenuItem from './components/basic/MenuItem/MenuItem';
import Text from './components/basic/Text/Text';
import Icon from './components/basic/Icon/Icon';
import Expandable from './components/basic/Expandable/Expandable';
import Row from './components/basic/Row/Row';
import Animation from './components/basic/Animation/Animation';
import BaseField from './components/widgets/BaseField/BaseField';
import Input from './components/basic/Input/Input';
let count = 0;

var config = {
  apiKey: 'AIzaSyBpsaBbgIWp5q3tU5asi-q-sVhMcnqDICE',
  authDomain: 'page-builder-cec56.firebaseapp.com',
  databaseURL: 'https://page-builder-cec56.firebaseio.com',
  projectId: 'page-builder-cec56',
  storageBucket: 'page-builder-cec56.appspot.com',
  messagingSenderId: '950873454129',
  appId: '1:950873454129:web:b0651349d9f2c55128c710',
  measurementId: 'G-J71NJK3R19',
};
firebase.initializeApp(config);

function App({ history }) {
  const [appear, setAppear] = useState(false);

  history.listen(() => {});

  function store(value) {
    console.log(value);
    firebase
      .database()
      .ref()
      .set({
        kw: {
          collect: JSON.stringify(value),
        },
      });
  }

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
            // paddingRight: '40px',
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

  useEffect(() => {
    if (count === 0) {
      GeneralUtil.loadExternalCss('https://websiteimages.b-cdn.net/css/used_fontawesome_.css');
      require('./App.css');
      count += 1;
    }
  }, []);

  let iconSrc = 'https://www.flaticon.com/svg/static/icons/svg/888/888071.svg';
  return (
    <div className={'App'} dir={'ltr'}>
      <React.Fragment>
        <Popup />
        <Container style={{ lg: { backgroundColor: '#fff', padding: '10px 0', borderBottom: '1px solid #e8e8e8' } }}>
          <Container className={'page_container'}>
            <Row portitions={{ lg: [0.5, 0.5] }}>
              <Container style={{ lg: { textAlign: 'left' } }} onClick={() => setAppear(!appear)}>
                <Icon src={'https://www.flaticon.com/svg/static/icons/svg/1828/1828859.svg'} size={'lg'} />
              </Container>
              <Container style={{ lg: { textAlign: 'right' } }}>
                <Icon src={'https://www.flaticon.com/svg/static/icons/svg/1738/1738691.svg'} size={'lg'} />
              </Container>
            </Row>
          </Container>
        </Container>
        <Spacing space={{ lg: 40 }} />
        <Container className={'page_container'}>
          <Container style={{ lg: { textAlign: 'initial ' } }}>
            {/* <Text text={'Page Status'} level={{ lg: 'h5' }} />
            <Spacing space={{ lg: 10 }} />
            <label style={{ display: 'inline-block', marginRight: '230px' }}>
              <input type="radio" name="optradio" checked />
              Building
            </label>
            <label style={{ display: 'inline-block', marginRight: '230px' }}>
              <input type="radio" name="optradio" />
              Editing
            </label>
            <label style={{ display: 'inline-block', marginRight: '230px' }}>
              <input type="radio" name="optradio" />
              Review
            </label>
            <label style={{ display: 'inline-block' }}>
              <input type="radio" name="optradio" />
              Ready for publish
            </label>
            <Spacing space={{ lg: 45 }} /> */}

            <Row spacing={{ lg: 10 }}>
              <Icon src={'https://www.flaticon.com/svg/static/icons/svg/189/189688.svg'} size={'md'} />
              <Text text={'Page Name'} level={{ lg: 'h5' }} />
            </Row>
            <Spacing space={{ lg: 10 }} />
            <Input placeHolder={'new-page-name'} />
            <Spacing space={{ lg: 45 }} />
            <Row spacing={{ lg: 10 }}>
              <Icon src={'https://www.flaticon.com/svg/static/icons/svg/2572/2572630.svg'} size={'md'} />
              <Text text={'Meta Data'} level={{ lg: 'h5' }} />
            </Row>
            <Spacing space={{ lg: 10 }} />
            <Input placeHolder={'Page Title'} />
            <Spacing space={{ lg: 5 }} />
            <Input placeHolder={'Page Description'} />
            <Spacing space={{ lg: 5 }} />
            <Input placeHolder={'Page Icon'} />
          </Container>
          <Spacing space={{ lg: 45 }} />
          <Row spacing={{ lg: 10 }} style={{ lg: { textAlign: 'initial ' } }}>
            <Icon src={'https://www.flaticon.com/svg/static/icons/svg/432/432429.svg'} size={'md'} />
            <Text text={'Page Builder'} level={{ lg: 'h5' }} />
          </Row>
          <Spacing space={{ lg: 10 }} />
          <ContainerWidget onChange={store} />
        </Container>
        <Container
          style={{
            lg: {
              position: 'absolute',
              top: 46,
              width: '100%',
              height: '100%',
              pointerEvents: appear ? 'auto' : 'none',
            },
          }}
        >
          <Animation
            type={'slide'}
            direction={'right'}
            appear={appear}
            fade={false}
            distance={'400px'}
            duration={'0.3s'}
          >
            {sideMenu()}
          </Animation>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default withRouter(observer(App));
