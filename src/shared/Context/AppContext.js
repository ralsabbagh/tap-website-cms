import React, { useContext } from 'react';
import popupController from '../components/basic/Popup/PopupController';
import windowStore from '../stores/WindowStore';
import PageEditorStore from '../components/cms/PageEditor/PageEditorStore';

const AppContext = React.createContext({
  controllers: { popup: popupController },
  windowStore: windowStore,
  pageEditorStore: new PageEditorStore(),
});

export const useAppContext = () => useContext(AppContext);
