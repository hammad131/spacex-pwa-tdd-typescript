import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC7se7jnnD2YJypF6yW_uSkWCFRvQkCK_E",
    authDomain: "spacex-fb193.firebaseapp.com",
    projectId: "spacex-fb193",
    storageBucket: "spacex-fb193.appspot.com",
    messagingSenderId: "542050584464",
    appId: "1:542050584464:web:2eafe0f61efaaa34199515",
    measurementId: "G-6RQC40J5VT"

  };

firebase.initializeApp(config);
const messaging = firebase.messaging();

export function configNotification() {
    
  Notification.requestPermission().then((permission) => {
      messaging.getToken().then((currentToken) => {
        alert(currentToken);
        prompt('token', currentToken);
        console.log(currentToken)
        
        if (currentToken) {
        } else {
          // Show permission request.
          console.log('No registration token available. Request permission to generate one.');

        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);

      });
  
  
  })

}