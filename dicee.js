window.onload = selectPic;
var myPic = new Array("C:\Users\Dell\Downloads\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice1.png", "C:\Users\Dell\Downloads\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice2.png", "\images\dice3.png")

function selectPic(){
    var random = Math.floor(Math.random() * myPic.length);
    document.getElementById("myPicture").src = myPic[random];

}