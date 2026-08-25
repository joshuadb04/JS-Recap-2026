// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

for (let todo of todoList) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todo.id}`);
  if (todo.completed) {
    input.setAttribute('checked', true);
  }

  label.htmlFor = `todo-${todo.id}`;
  label.innerText = todo.task;
  li.insertAdjacentElement('beforeend', input);
  li.insertAdjacentElement('beforeend', label);
  ul.insertAdjacentElement('beforeend', li);
}
