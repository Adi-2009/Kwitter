
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBpV-2O8Az-dD3xM51PPBznl-3otuL3rTk",
      authDomain: "kwitter-database-c8bab.firebaseapp.com",
      databaseURL: "https://kwitter-database-c8bab-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-c8bab",
      storageBucket: "kwitter-database-c8bab.appspot.com",
      messagingSenderId: "945574808284",
      appId: "1:945574808284:web:85ca8e8cd5230cba598219"
    };
    
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
      firebase.initializeApp(firebaseConfig);
      
      user_name=localStorage.getItem("user_name");


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
