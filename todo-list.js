const todoArray = [
  {
    todo: "Read a book",
    date: "28th June 2023",
  },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoArray.forEach((todoObject, index) => {
    const { todo, date } = todoObject;
    const todoList = ` 
    <div class="todo-item-container ">
    <div class="todo-item">
    <input type="checkbox">
    <p>${todo}</p>
  </div>
  
  <p class = "todo-date">${date}</p>
  <button class = "todo-delete js-todo-delete">
  <img src="icons8-delete.svg">
  </button>
  
  </div>
  `;

    todoListHTML += todoList;
  });

  console.log(todoListHTML);
  document.querySelector(".js-todo-item-container").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-todo-delete")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoArray.splice(index, 1);
        renderTodoList();
      });
    });
}

function addTodo() {
  const inputElement = document.querySelector(".js-input-todo");
  const inputDateElement = document.querySelector(".js-input-date");

  const todo = inputElement.value;
  const date = inputDateElement.value;

  todoArray.push({
    todo: todo,
    date: date,
  });

  inputElement.value = "";
  inputDateElement.value = "";

  if (todo && date) {
    renderTodoList();
  } else {
    alert("Add todo!");
  }
}
