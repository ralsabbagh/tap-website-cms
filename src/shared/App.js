import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import preferencesStore from './stores/PreferencesStore';
import Component from './components/basic/Component/Component';
import FractionField from './components/fields/FractionField/FractionField';
import Container from './components/basic/Container/Container';
import RowWidget from './components/widgets/RowWidget/RowWidget';
import Text from './components/basic/Text/Text';
import GeneralUtil from './utils/GeneralUtil';
import Card from './components/basic/Anchor/Card/Card';
import Spacing from './components/basic/Spacing/Spacing';
import Popup from './components/basic/Popup/Popup';
import ImageWidget from './components/widgets/ImageWidget/ImageWidget';
import ContainerWidget from './components/widgets/ContainerWidget/ContainerWidget';
import Select from './components/basic/Select/Select';
import Icon from './components/basic/Icon/Icon';
import firebase from 'firebase';
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

    // let blob = new Blob([JSON.stringify(value)], { type: 'application/json' });
    // var storageRef = firebase.storage().ref();
    // var fileRef = storageRef.child('/kw/collect.json');
    // fileRef.put(blob).then(function (snapshot) {
    //   console.log('Uploaded a blob!');
    // });
  }

  useEffect(() => {
    if (count === 0) {
      GeneralUtil.loadExternalCss('https://websiteimages.b-cdn.net/css/used_fontawesome_.css');
      require('./App.css');
      count += 1;
    }
  }, []);

  let country = preferencesStore.country;
  let language = preferencesStore.language;

  return (
    <div className={'App'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {!country ? (
        <div>{'Loader'}</div>
      ) : (
        <React.Fragment>
          <Popup />
          <Spacing space={{ lg: 100 }} />
          <Container className={'page_container'}>
            <ContainerWidget onChange={store} />
          </Container>
        </React.Fragment>
      )}
    </div>
  );
}

export default withRouter(observer(App));
