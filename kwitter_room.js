const firebaseConfig = {
  apiKey: "AIzaSyC6s74QVsjvgU9LR-lyliFcqs_banrEbHI",
  authDomain: "kwitter-9a4ea.firebaseapp.com",
  databaseURL: "https://kwitter-9a4ea-default-rtdb.firebaseio.com",
  projectId: "kwitter-9a4ea",
  storageBucket: "kwitter-9a4ea.appspot.com",
  messagingSenderId: "219037344987",
  appId: "1:219037344987:web:86ee0be07d9bad04bf98fe",
  measurementId: "G-4ZN8QBX1SR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";






function addRoom() {
  
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}




function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
