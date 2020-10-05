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
let count = 0;

function App({ history }) {
  history.listen(() => {});

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
          <Spacing space={{ lg: 100 }} />
          <Container className={'page_container'}>
            {/* <Card> */}
            <RowWidget>
              <Text />
              <Text />
              <Text />
            </RowWidget>
            {/* </Card> */}
          </Container>
        </React.Fragment>
      )}
    </div>
  );
}

export default withRouter(observer(App));
