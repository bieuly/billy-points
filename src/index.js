import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'

const config = {
        apiKey: "AIzaSyA1GbbL5AGnvEjmt85H437wTUQ9FEhLKp8",
        authDomain: "billy-points.firebaseapp.com",
        databaseURL: "https://billy-points.firebaseio.com",
        projectId: "billy-points",
        storageBucket: "billy-points.appspot.com",
        messagingSenderId: "285780503457"
};

firebase.initializeApp(config);

const browserHistory = createBrowserHistory();

ReactDOM.render(
        <Router history={browserHistory}>
                <App />
        </Router>,
        document.getElementById('root')
);
registerServiceWorker();
