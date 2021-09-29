function buttonclick(val){
    console.log(val)
    document.getElementById("screen").value+=val;
}
function clearScreen(){
    document.getElementById('screen').value=""
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}
function insta(){
    alert("You are Ready to Follow Amal Prasad on instagram")
    window.open("https://www.instagram.com/amal_prasad0/");
    alert("You Followed Amal Prasad on instagram ,Thank You")
}
function gitHub(){
    alert("You are Ready to Follow Amal Prasad on Github")
    window.open("https://github.com/amalprasad0");
    alert("You Followed Amal Prasad on Github ,Thank You")

}
function linkin(){
    alert("You are Ready to Follow Amal Prasad on Linkedin")
    window.open("https://www.linkedin.com/in/amal-prasad-821b82210/");
    alert("You Followed Amal Prasad on Linkedin ,Thank You")

}
