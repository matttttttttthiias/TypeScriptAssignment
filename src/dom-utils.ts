const todoInput = document.getElementById("myInput") as HTMLInputElement;
const todoList = document.getElementById("myUL") as HTMLUListElement;
const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
const startingTodos = document.getElementsByTagName("LI");
const xIconText = "\u00D7"
function addXIconToTodos(){
    // Click on a close button to hide the current list item
    const closeBtn = document.querySelectorAll<HTMLSpanElement>(".close");
      for(let singleBtn of closeBtn){
        singleBtn.onclick = function(e) {
          const listElement = (e.target as HTMLSpanElement).parentElement;
          listElement!.style.display = "none";
        }
      }
    }
    
    function makeTodosCheckable(){
      const list = document.querySelectorAll<HTMLLIElement>('li')
      for(let listEl of list){
        listEl.onclick = (ev)=>(ev.target as HTMLLIElement).classList.toggle('checked');
      }
    }

export {todoInput, todoList, addBtn, startingTodos, addXIconToTodos, makeTodosCheckable, xIconText};