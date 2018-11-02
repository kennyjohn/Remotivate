import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { startSetEntries } from './actions/entries';
import { startSetSpotlight } from './actions/spotlight';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';

// If you are using react, wrap your root component with PersistGate.
// This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux. 
// NOTE the PersistGate loading prop can be null, or any react instance, e.g. loading={<Loading />}

const store = configureStore();
const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage></LoadingPage>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetEntries()).then(
      store.dispatch(startSetSpotlight()).then(() => {
        renderApp();
        if(history.location.pathname === '/') {
          history.push('/dashboard');
        }
      })
    );
  } else { 
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

