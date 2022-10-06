const slides= document.querySelectorAll('.slide');
const prevBtn=document.querySelector('.prevBtn');
const nextBtn=document.querySelector('.nextBtn');


slides.forEach((slide,index)=>{
     slide.style.left=`${index * 100}%`;
});

let counter=0;

prevBtn.addEventListener('click',()=>{
    counter--;
    carrusel();
});


nextBtn.addEventListener('click',()=>{
    counter++;
    carrusel();
});

function carrusel(){
   /*   if(counter===slides.length){
        counter=0;
     }
     if(counter <0){
        counter=siles.length-1;
     }
 */

    console.log(counter)
    if(counter<slides.length - 1 ){
        nextBtn.style.display='block';
    }else {
        nextBtn.style.display='none';
    }
    
    
    if(counter>0){
        prevBtn.style.display='block';
    }else{
        prevBtn.style.display='none';

    }
    
    slides.forEach((slide)=>{
     slide.style.transform=`translateX(-${counter * 100}%)`;
    });
}


prevBtn.style.display='none';