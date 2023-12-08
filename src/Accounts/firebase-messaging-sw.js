// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDPkADxpH5C6ezej6u-o9By1G9INCTG1ag",
    authDomain: "notify-3f5df.firebaseapp.com",
    projectId: "notify-3f5df",
    storageBucket: "notify-3f5df.appspot.com",
    messagingSenderId: "422827995195",
    appId: "1:422827995195:web:985ead459905badfa3ec1e",
    measurementId: "G-7T8GPVE0EY"

  
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

self.addEventListener('push', (e) => {
  const options = {
    body: e.data.text(),
    icon: '/logo192.png', // Customize the icon
  };

  e.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
