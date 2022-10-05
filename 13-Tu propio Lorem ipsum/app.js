const text=[
   
`1 Lorem, ipsum.`,
`2 Lorem ipsum dolor sit.`,
`3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quas harum labore, delectus sunt laudantium quo.`,
`4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum beatae nobis molestiae architecto similique ratione error necessitatibus saepe fugit dolor.`,
`5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ratione aliquid unde neque totam quaerat earum beatae necessitatibus rerum nihil sapiente dolores placeat natus veritatis ullam atque quam illo perspiciatis?`,
`6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic! Sequi optio eius ipsum, nobis voluptas possimus tenetur iste provident. Deserunt, quis optio! Nihil, corporis! Quasi doloribus delectus veniam animi quo nesciunt facilis recusandae dolorem praesentium eos voluptas quidem eligendi odio temporibus placeat commodi sequi, dicta odit eum fugiat a ad! Pariatur exercitationem quas illum itaque nemo consequatur rem iste quo? Ea delectus atque id quo exercitationem debitis nemo aliquid dignissimos, voluptate autem sit fugiat doloremque cumque aliquam doloribus est asperiores obcaecati nihil animi beatae, quam, sequi deserunt eveniet! Impedit placeat incidunt modi eum ullam praesentium! Perspiciatis aliquam delectus labore!`,
` 7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic! Sequi optio eius ipsum, nobis voluptas possimus tenetur iste provident. Deserunt, quis optio! Nihil, corporis! Quasi doloribus delectus veniam animi quo nesciunt facilis recusandae dolorem praesentium eos voluptas quidem eligendi odio temporibus placeat commodi sequi, dicta odit eum fugiat a ad! Pariatur exercitationem quas illum itaque nemo consequatur rem iste quo? Ea delectus atque id quo exercitationem debitis nemo aliquid dignissimos, voluptate autem sit fugiat doloremque cumque aliquam doloribus est asperiores obcaecati nihil animi beatae, quam, sequi deserunt eveniet! Impedit placeat incidunt modi eum ullam praesentium! Perspiciatis aliquam delectus labore!`,
` 8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic! Sequi optio eius ipsum, nobis voluptas possimus tenetur iste provident. Deserunt, quis optio! Nihil, corporis! Quasi doloribus delectus veniam animi quo nesciunt facilis recusandae dolorem praesentium eos voluptas quidem eligendi odio temporibus placeat commodi sequi, dicta odit eum fugiat a ad! Pariatur exercitationem quas illum itaque nemo consequatur rem iste quo? Ea delectus atque id quo exercitationem debitis nemo aliquid dignissimos, voluptate autem sit fugiat doloremque cumque aliquam doloribus est asperiores obcaecati nihil animi beatae, quam, sequi deserunt eveniet! Impedit placeat incidunt modi eum ullam praesentium! Perspiciatis aliquam delectus labore!`,
` 9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic! Sequi optio eius ipsum, nobis voluptas possimus tenetur iste provident. Deserunt, quis optio! Nihil, corporis! Quasi doloribus delectus veniam animi quo nesciunt facilis recusandae dolorem praesentium eos voluptas quidem eligendi odio temporibus placeat commodi sequi, dicta odit eum fugiat a ad! Pariatur exercitationem quas illum itaque nemo consequatur rem iste quo? Ea delectus atque id quo exercitationem debitis nemo aliquid dignissimos, voluptate autem sit fugiat doloremque cumque aliquam doloribus est asperiores obcaecati nihil animi beatae, quam, sequi deserunt eveniet! Impedit placeat incidunt modi eum ullam praesentium! Perspiciatis aliquam delectus labore!`,

]


const form=document.querySelector('.lorem-form');
const amount= document.getElementById('amount');
const resultado=document.querySelector('.lorem-text');



form.addEventListener('submit', function(e){
     e.preventDefault();
     const value=parseInt(amount.value);
     const random=Math.floor(Math.random()*text.length);
      if(isNaN(value)|| value<0 || value>9){
         resultado.innerHTML =`<p class="result">${text[random]}</p>`
      }else{
         let tempText=text.slice(0,value);
         tempText = tempText.map(function (item) {
                      return `<p class="result">${item}</p>`;
                    }).join("");

         resultado.innerHTML = tempText;
      }

});