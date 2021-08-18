function adduser(){
var gamernamer=document.getElementById("user_name").value;
localStorage.setItem("Gamername",gamernamer);
window.location="Gamer_room.html";

}