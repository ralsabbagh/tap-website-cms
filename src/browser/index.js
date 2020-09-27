import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';

loadableReady(() => {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
});
