/**
 * Select items
 */
const alert = document.querySelector('.form__alert');
const form = document.querySelector('.form__info');
const input = document.getElementById('todo');
const submitBtn = document.querySelector('.submit');
const listItems = document.querySelector('.list__item');
const section = document.querySelector('#main');
const btnClear = document.querySelector('.clear');



/*Edit option */
let editElement;
let editFlag = false;
let editId = '';


/* Events */
window.addEventListener('DOMContentLoaded',loadContent);
form.addEventListener('submit',addItem);
btnClear.addEventListener('click',clearItems);



/* functions */
function addItem(e)
{
    e.preventDefault();

    const value = input.value;

    const id = new Date().getTime().toString();
    
  
    if(value && !editFlag){
      const div = document.createElement('div');
      div.classList.add("list")
      div.setAttribute('data-id',id);     //very important
      
      
     const toDoElement= 
     
     `
      <div class="list__item">

          <p class="list__text">${value}</p>
          <div class="list__action">
              <button class="list__button" id="edit">
                  <i class="fas fa-edit" class="list__button--edit"></i>
              </button>
              <button class="list__button" id="delete">
                  <i class="fas fa-trash" class="list__button--delete"></i>
              </button>
          </div>
          
      </div>
    `

      

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'element saved',
        showConfirmButton: false,
        timer: 1500
      })

      div.innerHTML = toDoElement
      section.appendChild(div)
      setBackToDefault("more")
      


      btnClear.classList.remove('hidden')
      const btnEdit = document.querySelector('#edit');
      const divListElements = document.querySelectorAll('.list');
      console.log(divListElements)
      divListElements.forEach(element =>  {
        element.addEventListener("click",deleteItem);
      } )

      //divListElements.addEventListener("click",deleteItem);

      btnEdit.addEventListener("click",editItem);
      
    }
 
    else if(value && editFlag){

      //ajouter dans le localstorage

             

    }else{
      Swal.fire({
        icon: 'warning',
        title: 'le champs est vide',
        text: 'entrez un élément dans la todo-list !',
        
      })
      
}

}


function clearItems(e){
  

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'all data has been deleted.',
          'success'
        )

        const listItems = document.querySelectorAll( ".list" )

        if(listItems.length > 0){
          listItems.forEach(element => {
          element.parentElement.removeChild(element)
          })
        }
        
        btnClear.classList.add('hidden') 
      }
      

    })
}



function deleteItem(e){
  //console.log(e.target.parentElement)
  //console.log(e.target.parentElement.id)
   if(e.target.parentElement.id == "delete" ){
     const tag = e.target.parentElement.parentElement.parentElement;
     //console.log(tag)
     tag.parentNode.removeChild(tag)
   }   
}

function editItem(e){
 
}


function setBackToDefault(flag){
  editFlag = false;
  editId = '';
  input.value= "";
  submitBtn.textContent = flag;
}

/****** Local Storage *****/
function addToLocalStorage(id,value){

  
}

function  removeFromLocalStorage(id)
{
  
}


function editLocalStorage(id,value){

  
}

function getFromLocalStorage(){
  
}


function loadContent(){

 

  }

