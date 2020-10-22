import React, { useEffect } from 'react';
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
        <Container style={{ lg: { backgroundColor: '#1c1c1c', padding: '10px 0' } }}>
          <Container className={'page_container'}>
            <Container style={{ lg: { textAlign: 'right' } }}>
              <Icon src={'https://www.flaticon.com/svg/static/icons/svg/1738/1738691.svg'} size={'lg'} />
            </Container>
          </Container>
        </Container>
        <Spacing space={{ lg: 45 }} />
        <MainTemplate
          sideMenu={
            <Container style={{ lg: { textAlign: 'initial' } }}>
              <Text text={'pages'} level={{ lg: 'h5' }} />
              <Spacing space={{ lg: 10 }} iconSrc={iconSrc} />
              <MenuItem
                title={'Kuwait'}
                iconSrc={'https://www.gotapnow.com/web/countryflag/Kuwait.png'}
                active={true}
              />
              <Spacing space={{ lg: 5 }} iconSrc={iconSrc} />
              <MenuItem title={'pay'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'sell'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'collect'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'api'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'about'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'jobs'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 15 }} />
              <MenuItem
                title={'Saudi Arabia'}
                iconSrc={'https://www.gotapnow.com/web/countryflag/Saudi%20Arabia.png'}
                active={true}
              />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'pay'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'sell'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'collect'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'api'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'about'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'jobs'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 15 }} />
              <MenuItem
                title={'Emirates'}
                iconSrc={'https://www.gotapnow.com/web/countryflag/United%20Arab%20Emirates.png'}
                active={true}
              />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'pay'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'sell'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'collect'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'api'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'about'} iconSrc={iconSrc} />
              <Spacing space={{ lg: 5 }} />
              <MenuItem title={'jobs'} iconSrc={iconSrc} />
            </Container>
          }
          body={<ContainerWidget onChange={store} />}
        />
      </React.Fragment>
    </div>
  );
}

export default withRouter(observer(App));
