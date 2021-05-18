import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB1zE2bS4I0PXmBX3bqAp2jciTrnmt6A3I",
    authDomain: "crud-react-native-f75c4.firebaseapp.com",
    projectId: "crud-react-native-f75c4",
    storageBucket: "crud-react-native-f75c4.appspot.com",
    messagingSenderId: "964509661296",
    appId: "1:964509661296:web:54cdb3ffd188a7545c1cb5",
    measurementId: "G-KM7SRT0XEG"
  };

  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase;