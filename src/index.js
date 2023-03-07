import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyCompononet } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store,persistor  } from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}><MyCompononet /></PersistGate></Provider>
    
   
  </React.StrictMode>
);
