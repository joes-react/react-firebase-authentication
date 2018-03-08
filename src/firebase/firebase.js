import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCsv1p2-ddStl1PlXY8coEXSk4du_dVkfg",
  authDomain: "routing-with-react-redux.firebaseapp.com",
  databaseURL: "https://routing-with-react-redux.firebaseio.com",
  projectId: "routing-with-react-redux",
  storageBucket: "routing-with-react-redux.appspot.com",
  messagingSenderId: "198250759511"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};