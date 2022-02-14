const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
console.log(todoControl);
console.log(headerInput);
console.log(todoList);
console.log(todoCompleted);
const todoData = [{
        text: "сварить кофе",
        complited: false

    },
    {
        text: 'Помыть посуду',
        complited: true
    },
];
const render = function () {
    todoData.forEach(function (item) {
        console.log(item);
    })

}
todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTodo = {
        text: headerInput.value,
        complited: false
    };
    todoData.push(newTodo);
    headerInput.value = '';
    render();
})