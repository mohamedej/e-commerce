import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { config } from './firebase';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <Router>
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <App />
      </FirebaseAuthProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
