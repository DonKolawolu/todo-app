function addTodo() {
    const newTodo = document.getElementById('newTodo').value;
    const todoList = document.getElementById('todoList');
    const listItem = document.createElement('li');
    listItem.textContent = newTodo;
    todoList.appendChild(listItem);
    document.getElementById('newTodo').value = '';
  }
  