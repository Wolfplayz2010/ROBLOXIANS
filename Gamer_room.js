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
//ADD YOUR FIREBASE LINKS HERE
var gamernamer=localStorage.getItem("Gamername");
document.getElementById("Gamername").innerHTML="Welcome "+gamernamer;
function addroom(){
Roomname=document.getElementById("room_name").value;
firebase.database().ref("/").child(Roomname).update({
purpose:"Imaginery"
});
localStorage.setItem("roomname",Roomname);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoomName(mint){
localStorage.setItem("Game",mint);
window.location="gamer_page.html";
}
function logout(){
localStorage.removeItem("Gamername");
localStorage.removeItem("Game");
window.location="index.html";
}