var firebaseConfig = {

apiKey: "AIzaSyA9Bh3cK7vKflXc29o26e6O27LuMIBlUSI",

authDomain: "gamer-wolf-chat.firebaseapp.com",

databaseURL: "https://gamer-wolf-chat-default-rtdb.firebaseio.com",

projectId: "gamer-wolf-chat",

storageBucket: "gamer-wolf-chat.appspot.com",

messagingSenderId: "983382257035",

appId: "1:983382257035:web:e7efee7fda9846ac1a938e"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS

gamername=localStorage.getItem("Gamername");

roomname=localStorage.getItem("Game");

function send(){

console.log(roomname);

console.log(gamername);

msg=document.getElementById("msg").value;

firebase.database().ref(roomname).push({

name:gamername,

message:msg,

like:0

});

document.getElementById("msg").value="";

}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {

firebase_message_id = childKey;

message_data = childData;

console.log(firebase_message_id);

console.log(message_data);

//Start code

name = message_data['name'];

message = message_data['message'];

like = message_data['like'];

name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";

message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";

like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;       

document.getElementById("output").innerHTML += row;

//End code

} });  }); }

getData();

function updateLike(message_id)

{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(roomname).child(message_id).update({
like : updated_likes  
});

}
function logout(){

localStorage.removeItem("Gamername");

localStorage.removeItem("Game");

window.location="index.html";

}