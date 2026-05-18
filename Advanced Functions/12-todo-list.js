const todoList = [{
  name: 'make dinner',
  dueDate: '31-02-2016'
}, {
  name: 'wash dishes',
  dueDate: '01-04-2026'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML='';

  todoList.forEach(function(todoObject, index) {

    const { name, dueDate } = todoObject;   //Distructure for object

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${index}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</Button>
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

}


function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-date-input');
 const dueDate = dateInputElement.value;
 
 todoList.push({
    // name: name,
    // dueDate: dueDate

    name,
    dueDate
 });

 inputElement.value = '';   //reset the textbox

 renderTodoList();
}