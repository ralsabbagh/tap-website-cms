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
import Text from './components/basic/Text/Text';
import Icon from './components/basic/Icon/Icon';
import Row from './components/basic/Row/Row';
import Input from './components/basic/Input/Input';
import Button from './components/basic/Button/Button';
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
        <MainTemplate
          page={
            <React.Fragment>
              <Spacing space={{ lg: 88 }} />
              <Container className={'page_container'}>
                <Container style={{ lg: { textAlign: 'initial ' } }}>
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
                <Row portitions={{ lg: [0.5, 0.5] }} verticalAlign={'bottom'}>
                  <Row spacing={{ lg: 10 }} style={{ lg: { textAlign: 'initial ' } }}>
                    <Icon src={'https://www.flaticon.com/svg/static/icons/svg/432/432429.svg'} size={'md'} />
                    <Text text={'Page Builder'} level={{ lg: 'h5' }} />
                  </Row>
                  <Row spacing={{ lg: 10 }} style={{ lg: { textAlign: 'right ' } }}>
                    <Button
                      text={{ text: 'Save' }}
                      icon={{ src: 'https://www.flaticon.com/svg/static/icons/svg/907/907027.svg' }}
                      shape={'solid'}
                    />
                    <Button
                      text={{ text: 'Prerview' }}
                      icon={{ src: 'https://www.flaticon.com/svg/static/icons/svg/560/560523.svg' }}
                      shape={'solid'}
                    />
                  </Row>
                </Row>
                <Spacing space={{ lg: 10 }} />
                <ContainerWidget onChange={store} />
                <Spacing space={{ lg: 100 }} />
              </Container>
            </React.Fragment>
          }
        />
      </React.Fragment>
    </div>
  );
}
// https://www.flaticon.com/svg/static/icons/svg/907/907027.svg
// https://www.flaticon.com/svg/static/icons/svg/560/560523.svg

export default withRouter(observer(App));
