const btnswitch=document.querySelector(".switch");
const body=document.body;
btnswitch.addEventListener("click",()=>{
    body.classList.toggle("on");
})