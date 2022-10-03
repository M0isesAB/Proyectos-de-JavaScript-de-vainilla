const colors=["Green","Red","Blue","Orange","Purple"];
const fullName=['Moisés','Aguirre','Bautista'];
const btn= document.getElementById('btn');
const color=document.querySelector(".color");
const miNombre=document.querySelector(".miNombre");

btn.addEventListener("click", function(){
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent=colors[randomNumber];
    miNombre.textContent=fullName[getRandomName()];
    console.log(randomNumber);
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
function getRandomName(){
    return Math.floor(Math.random()*fullName.length);
}