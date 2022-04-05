import { addBtn, addXIconToTodos, makeTodosCheckable, startingTodos, todoInput, todoList, xIconText } from "./dom-utils";

addBtn.onclick = () => addNewTodo();

// Create a "close" button and append it to each list item

for(let liTag of startingTodos){
  const span = document.createElement("SPAN");
  const txt = document.createTextNode(xIconText);
  span.className = "close";
  span.appendChild(txt);
  liTag.appendChild(span);
}

// Create a new list item when clicking on the "Add" button
function addNewTodo() {
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
  span.innerText = (xIconText); // represents the x
  li.appendChild(span); // adds the x to the todo-item

  addXIconToTodos();
  makeTodosCheckable();
}

function initTodoList(){
  addXIconToTodos();
  makeTodosCheckable();
}
initTodoList(); // initializes the App