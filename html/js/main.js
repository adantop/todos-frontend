// TODO enable persistence for data 
import { todoService } from './offline.js'

function loadTodos(todos) {
    const todosUl = document.getElementById('todos');

    while (todosUl.lastElementChild) {
        todosUl.removeChild(todosUl.lastElementChild);
    }

    for (let todo of todos) {
        populateTodo(todo);
    }

    console.log('todos loaded.')
}


function populateTodo(todo) {
    let todosUl = document.getElementById('todos');
    let todoLi = document.createElement('li');
    let todoDel = document.createElement('a');

    todoDel.textContent = '×'
    todoDel.href = '#';
    todoDel.className = 'badge badge-pill badge-danger';
    todoDel.onclick = async (event) => {
        event.preventDefault();

        const deleted = await todoService.delete(todo);
        console.log(`todo ${JSON.stringify(deleted)} deleted.`);

        todoLi.parentElement.removeChild(todoLi);

        return false
    }

    todoLi.id = todo.id
    todoLi.appendChild(todoDel)
    todoLi.appendChild(document.createTextNode(` ${todo.text}`));

    todosUl.appendChild(todoLi);
}


(async () => {
    const todos = await todoService.get();
    window.onload = loadTodos(todos);
})()


document.getElementById('addTodo').onsubmit = async (event) => {
    event.preventDefault();

    const todoInput = document.getElementById('newTodo');
    const todo = await todoService.add(todoInput.value);
    console.log(`todo ${JSON.stringify(todo)} was added.`);
    populateTodo(todo);

    todoInput.value = '';

    return false
}
