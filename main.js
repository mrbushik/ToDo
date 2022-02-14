const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
console.log(todoControl);
console.log(headerInput);
console.log(todoList);
console.log(todoCompleted);
const todoData = [

];
const render = function () {
    todoList.innerHTML = "";
    todoCompleted.innerHTML = "";
    todoData.forEach(function (item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';
        if (item.complited) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.complited = !item.complited;
            render();
        });
        li.querySelector('.todo-remove').addEventListener('click', function () {
            let index = todoData.indexOf(item);
            todoData.splice(index, 1);
            render();
        })
    });

}
todoControl.addEventListener('submit', function (event) {
    event.preventDefault();

    const newTodo = {
        text: headerInput.value,
        complited: false
    };


    if (newTodo.text.trim() != '') {
        todoData.push(newTodo);
        headerInput.value = '';
        render();
    }
});