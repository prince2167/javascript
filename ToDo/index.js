const form = document.querySelector(".form");
const todoInput = document.querySelector(".task-input");
const addTask = document.querySelector(".add-task");
const todosListEl = document.querySelector(".todos-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let EditTodoId = -1;

renderTodos();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  saveTodo();
  renderTodos();
  localStorage.setItem("todos", JSON.stringify(todos));
});

function saveTodo() {
  const todoValue = todoInput.value;

  if (todoValue === "") {
    showNotification("Todo's input is empty");
  } else {
    if (EditTodoId >= 0) {
      todos = todos.map((todo, index) => ({
        ...todo,
        value: index === EditTodoId ? todoValue : todo.value,
      }));
      EditTodoId = -1;
    } else {
      todos.push({
        value: todoValue,                     
        checked: false,
      });
    }

    todoInput.value = "";
  }
}

function renderTodos() {
  if (todos.length === 0) {
    todosListEl.innerHTML = "<center>Nothing to do!</center>";
    return;
  }

  todosListEl.innerHTML = "";

  todos.forEach((todo, index) => {
    todosListEl.innerHTML += `
    <div class="todo" id=${index}>
      <div class="todo-content">
      <input type="checkbox"  data-action="check"/>
      <p data-action="check">${todo.value}</p>
      </div>
    
    <button class="edit-button"  data-action="edit">Edit</button>
    <button  onClick="deletePost(this)" class="delete-button" data-action="delete">Delete</button>
    </div>
    `;
  });
}

todosListEl.addEventListener("click", (event) => {
  const target = event.target;
  const parentElement = target.parentNode;

  if (parentElement.className !== "todo") return;

  const todo = parentElement;
  const todoId = Number(todo.id);

  const action = target.dataset.action;

  action === "edit" && editTodo(todoId);
  action === "delete" && deleteTodo(todoId);
});

function editTodo(todoId) {
  todoInput.value = todos[todoId].value;
  EditTodoId = todoId;
}

function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  EditTodoId = -1;
  renderTodos();
  localStorage.setItem("todos", JSON.stringify(todos));
}
