const menu=[
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://static01.nyt.com/images/2016/06/15/dining/15PANCAKEGUIDE3-WEB/15PANCAKEGUIDE3-WEB-articleLarge.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://media.istockphoto.com/photos/double-burgers-at-diner-picture-id1268633498?k=20&m=1268633498&s=612x612&w=0&h=qOtvSq_MyLERajoYtPeEeYznYPUVeM1p8rbuk1GFKPg=",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://i.ytimg.com/vi/8bDHGUvbR2Q/maxresdefault.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cdhtwoo4wfz0ljfygllg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://media.istockphoto.com/photos/double-burgers-at-diner-picture-id1268633498?k=20&m=1268633498&s=612x612&w=0&h=qOtvSq_MyLERajoYtPeEeYznYPUVeM1p8rbuk1GFKPg=",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://masonfit.com/wp-content/uploads/2017/10/IMG_9116-735x735.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://cdn.theculturetrip.com/wp-content/uploads/2017/05/nathans.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://cooking-buffalo.com/wp-content/uploads/2021/02/steak-for-two-valentine.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

]


const sectionCenter=document.querySelector('.section-center');
const btnContainer = document.querySelector(".btn-container");

window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
    displayMenuButtons();
});



function displayMenuItems(menuItems){
    let displayMenu=menuItems.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt="" srcset="">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price} </h4>
            </header>
            <p class="item-text">
               ${item.desc}
            </p>
        </div>
    </article>`;
  });

  displayMenu=displayMenu.join('');
  sectionCenter.innerHTML=displayMenu;
}


function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
                if (!values.includes(item.category)) {
                values.push(item.category);
                }
                return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
                 ${category}
                </button>`;
    })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtn = btnContainer.querySelectorAll(".filter-btn");

    filterBtn.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const category= e.currentTarget.dataset.id;
            const menuCategory=menu.filter(function(menuItem){
                
                if (menuItem.category === category) {
                return menuItem;
                }
        });
        if (category === "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
        });
    });
  }