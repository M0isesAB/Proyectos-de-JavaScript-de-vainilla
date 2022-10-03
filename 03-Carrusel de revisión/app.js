const reviews=[
    {
        id:1,
        name:'Juana la Iguana',
        job:'web develoment',
        img:'https://pymstatic.com/11785/conversions/personas-que-juzgan-wide.jpg',
        text:"Lorem ipsum dolor sit amet consectetur "+
        "adipisicing eli Consequatur at facere voluptate assumenda soluta explicabo dolorem magnam veritatis aliquam quo."
    },
    {
        id:2,
        name:'Miguel Hanns',
        job:'web disinger',
        img:'https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=2000',
        text:"Lorem ipsum dolor sit "+
        "amet consectetur adipisicing eli Consequatur at facere voluptate assumenda soluta explicabo dolorem magnam veritatis aliquam quo."

    },
    {
        id:3,
        name:'Joey Triviany',
        job:'UX/UL',
        img:'https://us.123rf.com/450wm/dolgachov/dolgachov1502/dolgachov150200456/36052430-retrato-de-hombre-guapo-sonriente-en-camisa-casual.jpg?ver=6',
        text:"Lorem ipsum dolor sit amet consectetur"
        + "adipisicing eli Consequatur at facere voluptate assumenda soluta explicabo dolorem magnam veritatis aliquam quo."

    },
   
];

const img=document.getElementById('person-img');
const autor=document.getElementById('author');
const trabajo=document.getElementById('trabajo');
const info=document.getElementById('info');


const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

let curremItem=0;

window.addEventListener('DOMContenLoaded',function(){
    showPerson(curremItem);
});


function showPerson(){
    const item=reviews[curremItem];
    img.src=item.img;
    author.textContent=item.name;
    trabajo.textContent=item.job;
    info.textContent=item.text;
}


nextBtn.addEventListener("click",function(){
     curremItem++;
     if(curremItem>reviews.length-1){
        curremItem=0;
     }
     showPerson();
});
prevBtn.addEventListener('click',function(){
    curremItem--;
    if(curremItem<0){
        curremItem=reviews.length-1;
     }
    showPerson();
});


randomBtn.addEventListener('click',function(){
    curremItem=Math.floor(Math.random()*reviews.length);
    console.log(curremItem);
      showPerson();
});