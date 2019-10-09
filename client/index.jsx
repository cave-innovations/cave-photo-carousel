import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './store/store.js';
import AppContainer from './containers/AppContainer.js';

const photoCarousel = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(
  photoCarousel,
  document.getElementById('photo-carousel'),
);
