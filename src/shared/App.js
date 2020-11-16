import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { withRouter } from 'react-router-dom';
import GeneralUtil from './utils/GeneralUtil';
import Popup from './components/basic/Popup/Popup';
import MainTemplate from './components/cms/mainTemplate/mainTemplate';
import PageEditor from './components/cms/PageEditor/PageEditor';

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

  return (
    <div className={'App'} dir={'ltr'}>
      <React.Fragment>
        <Popup />
        <MainTemplate page={<PageEditor />} />
      </React.Fragment>
    </div>
  );
}

export default withRouter(observer(App));
