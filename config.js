import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAMNnRrQ80hb0nL9w_-yWc7U-T6YoIplSc",
  authDomain: "barter-system-885cb.firebaseapp.com",
  databaseURL: "https://barter-system-885cb.firebaseio.com",
  projectId: "barter-system-885cb",
  storageBucket: "barter-system-885cb.appspot.com",
  messagingSenderId: "136734993970",
  appId: "1:136734993970:web:00575b5123c9905b97962b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
