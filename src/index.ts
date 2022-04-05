const todoInput = document.getElementById("myInput") as HTMLInputElement;
const todoList = document.getElementById("myUL") as HTMLUListElement;
const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
addBtn.onclick = () => newElement();

// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");

for(let liTag of myNodelist){
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  liTag.appendChild(span);
}

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


// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = todoInput.value;
  li.innerText = todoInput.value;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    todoList.appendChild(li);
  }
  todoInput.value = "";

  const span = document.createElement("SPAN");
  span.className = "close";
  span.innerText = ("\u00D7"); // represents the x
  li.appendChild(span); // adds the x to the todo-item

  addXIconToTodos();
  makeTodosCheckable();
}

function initTodoList(){
  addXIconToTodos();
  makeTodosCheckable();
}
initTodoList(); // initializes the App