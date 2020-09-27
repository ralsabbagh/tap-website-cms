import React, { useContext } from 'react';
import popupController from '../components/basic/Popup/PopupController';
import windowStore from '../stores/WindowStore';

const AppContext = React.createContext({
  controllers: { popup: popupController },
  windowStore: windowStore,
});

export const useAppContext = () => useContext(AppContext);
