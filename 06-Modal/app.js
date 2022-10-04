const closeBtn= document.querySelector('.close-btn');
const modalBtn=document.querySelector('.modal-btn');
const modalOverly=document.querySelector('.modal-overlay');



closeBtn.addEventListener('click',function(){
    modalOverly.classList.remove('open-modal');

});

modalBtn.addEventListener('click',function(){
    modalOverly.classList.add('open-modal');
   
});