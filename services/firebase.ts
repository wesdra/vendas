// Import the functions you need from the SDKs you need
import  firebase  from "firebase/app";
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbW_WPwcMd9jKebQFlTvR_q-exKl5ePY4",
  authDomain: "megaoutlet-77136.firebaseapp.com",
  projectId: "megaoutlet-77136",
  storageBucket: "megaoutlet-77136.appspot.com",
  messagingSenderId: "416209332712",
  appId: "1:416209332712:web:66f426e46d4051d35adc5d"
};

if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
}else{
  firebase.app()
}
const database = firebase.database()

export { firebase, database  }