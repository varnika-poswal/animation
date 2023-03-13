const rateStar=(()=>{
var a=document.getElementById("star");
a.innerHTML="&#xf006;";
a.style.color="#000";
a.style.fontSize="7rem";
setTimeout(()=>{
    a.innerHTML="&#xf123;";
    a.style.color="red";
    a.style.fontSize="9rem";   
},1000)
setTimeout(()=>{
    a.innerHTML="&#xf005";
    a.style.color="orange";
    a.style.fontSize="13rem";   
},2000)
});
rateStar();
setInterval(rateStar,3000);