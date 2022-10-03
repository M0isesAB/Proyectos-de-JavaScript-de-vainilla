

const navToogle=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');

const add=document.querySelector('.add');
const remove=document.querySelector('.remove');
const toggle=document.querySelector('.toggle');


navToogle.addEventListener('click',function(){
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }else{    links.classList.add('show-links');}

    links.classList.toggle('show-links');

})