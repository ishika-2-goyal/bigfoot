function imgDisplay(){
    document.getElementById('a').src=""
}
function moveimg(){
    alert("you have won!")
    varpicture=document.getElementById('a')
    var x=Math.random()*300;
    var y=Math.random()*300;
    picture.style.top=x+'px';
    picture.style.left=y+'px';

}