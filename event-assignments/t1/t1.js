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

const ul = document.querySelector('ul');

for (let todo of todoList) {
  const li = document.createElement('li');

  const input = document.createElement('input');
  const button = document.createElement('button');

  button.innerText = 'X';

  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todo.id}`);
  if (todo.completed) {
    input.setAttribute('checked', true);
  }

  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.innerText = todo.task;

  li.insertAdjacentElement('beforeend', input);
  li.insertAdjacentElement('beforeend', label);
  li.insertAdjacentElement('beforeend', button);

  ul.insertAdjacentElement('beforeend', li);

  input.addEventListener('change', event => {
    todo.completed = event.target.checked;

    if (event.target.checked) {
      console.log('checked', todo);
      console.log(todoList);
    } else {
      console.log('unchecked', todo);
      console.log(todoList);
    }
  });

  button.addEventListener('click', event => {
    const index = todoList.findIndex(item => item?.id === todo.id);

    if (index > -1) {
      delete todoList[index];
    }

    console.log('index', index);
    console.log('todoList', todoList);

    ul.removeChild(li);
  });
}

const addButton = document.querySelector('button.add-btn');

console.log('addButton', addButton);

addButton.addEventListener('click', () => {
  console.log('add button clicked');

  const dialog = document.querySelector('dialog');

  dialog.show();

  // const form = document.querySelector('dialog form');
  const form = dialog.querySelector('form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    // const newTodoTask = document.querySelector('dialog form input').value;
    const newTodoTask = form.querySelector('input').value;

    const newTodoObject = {
      id: +new Date(),
      task: newTodoTask,
      completed: false,
    };

    todoList.push(newTodoObject);

    // form.querySelector('input').value = '';

    // form.reset() might be better as it clears all the inputs from a field
    form.reset();

    console.log('todoList', todoList);

    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');

    input.type = 'checkbox';
    input.id = `todo-${newTodoObject.id}`;

    label.htmlFor = input.id;
    label.innerText = newTodoObject.task;

    button.innerText = 'X';

    li.append(input, label, button);
    ul.appendChild(li);

    input.addEventListener('change', event => {
      newTodoObject.completed = event.target.checked;
      if (event.target.checked) {
        console.log('checked', todo);
        console.log(todoList);
      } else {
        console.log('unchecked', todo);
        console.log(todoList);
      }
    });

    button.addEventListener('click', () => {
      const index = todoList.findIndex(item => item?.id === newTodoObject.id);

      if (index > -1) {
        delete todoList[index];
      }

      li.remove();
    });
  });
});
