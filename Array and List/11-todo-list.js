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

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

    const { name, dueDate } = todoObject;   //Distructure for object

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</Button>
    `;
    todoListHTML += html;
  }

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