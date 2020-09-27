import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import preferencesStore from './stores/PreferencesStore';
import Component from './components/Component/Component';
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
        // <Loader windowWidth={windowStore.width} windowHeight={windowStore.height} />
        // <Switch>
        //   <Route render={() => <h1>{'Not Found'}</h1>} />
        // </Switch>
        <Component name={'row'} />
      )}
    </div>
  );
}

export default withRouter(observer(App));
