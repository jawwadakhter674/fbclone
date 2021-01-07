import   firebase from 'firebase';
import "firebase/auth"
// import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyDUgc2eUippfeO-dbM3mwUhils1zbd9h1E",
    authDomain: "todo-apps-firebase.firebaseapp.com",
    databaseURL: "https://todo-apps-firebase.firebaseio.com",
    projectId: "todo-apps-firebase",
    storageBucket: "todo-apps-firebase.appspot.com",
    messagingSenderId: "43202146476",
    appId: "1:43202146476:web:133b6c955a046221436f09",
    measurementId: "G-T52HETMKC1"
  };
  // Initialize Firebase
  var fire =firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.FacebookAuthProvider();
  export  {provider,fire};