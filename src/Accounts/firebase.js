


import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyDPkADxpH5C6ezej6u-o9By1G9INCTG1ag",
  authDomain: "notify-3f5df.firebaseapp.com",
  projectId: "notify-3f5df",
  storageBucket: "notify-3f5df.appspot.com",
  messagingSenderId: "422827995195",
  appId: "1:422827995195:web:985ead459905badfa3ec1e",
  measurementId: "G-7T8GPVE0EY"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app); // Get the messaging instance

export { messaging }; // Export the messaging instance
