function check(){
var name1=document.getElementById("uname").value;
var ptn1=new RegExp(/^[A-Za-z]{7}$/);
if(ptn1.test(name1))
{
 document.getElementById("check").innerHTML="valid"

}
else{
    document.getElementById("check").innerHTML="invalid"
}
}
document.getElementById("btn").addEventListener('click',check);

function mail(){
var name2=document.getElementById("email").value;
var ptn2=new RegExp(/^[a-z0-9]{6}[./][@][a-z]{5}[a-z]{3}$/);
if(ptn2.test(name2))
{
    document.getElementById("mail").innerHTML="valid"
}
else{
    document.getElementById("mail").innerHTML="invalid"
}
}
document.getElementById("btn").addEventListener('click',mail);
 function mob(){
    var name3=document.getElementById("num").value;
    var ptn3=new RegExp(/^[0-9]{10}$/);
    if(ptn3.test(name3))
    {
        document.getElementById("ph").innerHTML="valid"
    }
    else{
        document.getElementById("ph").innerHTML="invalid"
    }
 }
 document.getElementById("btn").addEventListener('click',mob);

 function pass(){
    var name4=document.getElementById("pwd").value;
    var ptn4=new RegExp(/^[A-Za-z0-9]{8}$/);
    if(ptn4.test(name4))
    {
        document.getElementById("pas").innerHTML="valid"
    }
    else{
        document.getElementById("pas").innerHTML="in Valid"
    }
 }
document.getElementById("btn").addEventListener('click',pass);

function city(){
var name5=document.getElementById("city").value;
var ptn5=new RegExp(/^[A-Z]{5,10}$/);
if(ptn5.test(name5))
{
    document.getElementById("place").innerHTML="valid"
}
else{
    document.getElementById("place").innerHTML="InValid"
}
}
document.getElementById("btn").addEventListener('click',city);
function pin(){
    var name6=document.getElementById("pin").value;
    var ptn6=new RegExp(/^[0-9]{6}$/);
    if(ptn6.test(name6))
    {
        document.getElementById("code").innerHTML="Valid";
    }
    else{
        document.getElementById("code").innerHTML="InValid";
    }
}
document.getElementById("btn").addEventListener('click',pin);
