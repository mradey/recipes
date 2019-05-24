import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBhPP7BRSi-ZZVMcxMYKA6HXwUCGhMyztE",
    authDomain: "recipes-8897a.firebaseapp.com",
    databaseURL: "https://recipes-8897a.firebaseio.com",
    projectId: "recipes-8897a",
    storageBucket: "recipes-8897a.appspot.com",
    //messagingSenderId: "489439680572",
    //appId: "1:489439680572:web:eb454e87c51eb6f4"
  };
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
