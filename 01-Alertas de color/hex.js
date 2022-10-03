const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const titles=['Números','Hexa']
const btn= document.getElementById('btn');
const color=document.querySelector('.color');
const title=document.querySelector('.titleText');


btn.addEventListener('click',function(){
    let hexaColor='#';
    for(let i=0; i<6;++i){
        hexaColor +=hex[getRandomNumber(hex)];
    }
    color.textContent=hexaColor;
    title.textContent=titles[getRandomNumber(titles)];
    document.body.style.backgroundColor=hexaColor;
});


function getRandomNumber(arr){
     return Math.floor(Math.random()*arr.length);
}