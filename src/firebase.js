import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAhYJslfJDtfnrFrOkyrq3jmG7pv9uf4KQ",
  authDomain: "todoist-recreated.firebaseapp.com",
  databaseURL: "https://todoist-recreated.firebaseio.com",
  projectId: "todoist-recreated",
  storageBucket: "todoist-recreated.appspot.com",
  messagingSenderId: "1040984188526",
  appId: "1:1040984188526:web:94896165d222c4e68b287f"
});

export { firebaseConfig as firebase };
