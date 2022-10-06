const alert=document.querySelector('.alert');
const form=document.querySelector('.grocery-form');
const grocery=document.getElementById('grocery');
const submitBtn=document.querySelector('.submit-btn');
const container=document.querySelector('.grocery-container');
const list=document.querySelector('.grocery-list');
const clearBtn=document.querySelector('.clear-btn');


let editElement;
let editFlag=false;
let editID="";

form.addEventListener('submit',addItem);

clearBtn.addEventListener('click',clearItems);

window.addEventListener("DOMContentLoaded", setupItems);

function addItem(e){
    e.preventDefault();
    const value=grocery.value;
    const id= new Date().getTime().toString();

    if(value !=='' && !editFlag){
       const element= document.createElement('article');
       const attr= document.createAttribute('data-id');
       attr.value=id;
       element.setAttributeNode(attr);
       element.classList.add('grocery-item');
       element.innerHTML= `<p class="title">${value}</p>
                          <div class="btn-container">
                              <button  class="edit-btn "type="button">
                                  <i class="fa fa-edit" aria-hidden="true"></i>
                              </button>
                              <button  class="delete-btn "type="button">
                                  <i class="fa fa-trash" aria-hidden="true"></i>
                              </button>
                          </div>`;
        const deleteBtn= element.querySelector('.delete-btn');
        const editBtn= element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);
        list.appendChild(element);
        displayAlert('El elemento se ha agregado','success');
        container.classList.add('show-container');
         addToLocalStorage(id,value);
         setBackToDefault();

       console.log('Se esta agregando un producto a la lista');
    }else if( value !== "" && editFlag){
       //console.log('se esta editando un producto ');
       editElement.innerHTML=value;
       displayAlert('Valor cambiado','success');
       editLocalStorage(editID,value);
       setBackToDefault();
    }else{
     displayAlert('El campo esta vacio','danger');
    }
}


  function displayAlert(text,action){
    alert.textContent= text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.textContent='';
        alert.classList.remove(`alert-${action}`);
    },1000);

  }

  function clearItems(){
    const items= document.querySelectorAll('.grocery-item');
     if(items.length>0){
        items.forEach(function(item){
             item.removeChild(item); 
        });
     }
     container.classList.remove('show-container');
     displayAlert('lista vacia','danger');
     setBackToDefault();
     localStorage.removeItem('list');
  }


   function deleteItem(e){
        const element= e.currentTarget.parentElement.parentElement;
        const id=element.dataset.id;
        list.removeChild(element);
        if(list.children ===0){
           container.classsList.remove('show-container');
        }
        displayAlert('el item ha sido removido','danger');
        setBackToDefault();
        removeFromLocalStorage(id);
   }

   function editItem(e){
        const element= e.currentTarget.parentElement.parentElement;
        editElement = e.currentTarget.parentElement.previousElementSibling;
        grocery.value=editElement.innerHTML;
        editFlag=true;
        editID=element.dataset.id;
        submitBtn.textContent='editar';

  }

  function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "enviar";
  }

  function addToLocalStorage(id,value){
      const grocery = { id, value };
      let items = getLocalStorage();
      items.push(grocery);
      localStorage.setItem('list', JSON.stringify(items));

    }

  function getLocalStorage() {
    return localStorage.getItem('list')
      ? JSON.parse(localStorage.getItem('list'))
      : [];
  }

  function removeFromLocalStorage(id){
      let items = getLocalStorage();
      items = items.filter(function(item) {
        if (item.id !== id) {
            return item;
        }
      });
    
      localStorage.setItem('list', JSON.stringify(items));
  }
  function editLocalStorage(id,value){
      let items = getLocalStorage();

      items = items.map(function(item){
        if (item.id === id) {
            item.value = value;
        }
        return item;
      });
      localStorage.setItem('list', JSON.stringify(items));
  }

  function setupItems() {
    let items = getLocalStorage();
  
    if (items.length > 0) {
      items.forEach(function (item) {
        createListItem(item.id, item.value);
      });
      container.classList.add('show-container');
    }
  }
  
  function createListItem(id, value) {
    const element = document.createElement('article');
    let attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add('grocery-item');
    element.innerHTML = `<p class="title">${value}</p>
              <div class="btn-container">
                <!-- edit btn -->
                <button type="button" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <!-- delete btn -->
                <button type="button" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            `;
    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);
    const editBtn = element.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItem);
  
    list.appendChild(element);
  }