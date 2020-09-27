import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import preferencesStore from './stores/PreferencesStore';
import Component from './components/basic/Component/Component';
import FractionField from './components/fields/FractionField/FractionField';
import Container from './components/basic/Container/Container';
let count = 0;

function App({ history }) {
  history.listen(() => {});

  useEffect(() => {
    if (count === 0) {
      require('./App.css');
      count += 1;
    }
  }, []);

  let country = preferencesStore.country;
  let language = preferencesStore.language;

  return (
    <div className="App" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {!country ? (
        <div>{'Loader'}</div>
      ) : (
        // <Component name={'row'} />
        <Container className={'page_container'}>
          <FractionField />
        </Container>
      )}
    </div>
  );
}

export default withRouter(observer(App));
