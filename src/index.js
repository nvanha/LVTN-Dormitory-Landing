import AOS from 'aos';
import Amplify from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from '~/redux/storeConfig/store';
import '~/styles/main.scss';
import App from './App';
import awsconfig from './aws-exports';
import reportWebVitals from './reportWebVitals';

Amplify.configure(awsconfig);
AOS.init();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
