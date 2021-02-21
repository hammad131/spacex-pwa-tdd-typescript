importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js')


firebase.initializeApp({
    apiKey: "AIzaSyC7se7jnnD2YJypF6yW_uSkWCFRvQkCK_E",
    authDomain: "spacex-fb193.firebaseapp.com",
    projectId: "spacex-fb193",
    storageBucket: "spacex-fb193.appspot.com",
    messagingSenderId: "542050584464",
    appId: "1:542050584464:web:2eafe0f61efaaa34199515",
    measurementId: "G-6RQC40J5VT"

  })

firebase.messaging();