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
  const li = document.createElement('li'); //same setup from DOM t2
  const input = document.createElement('input');
  const button = document.createElement('button');
  const label = document.createElement('label');
  button.innerText = 'X';

  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todo.id}`);
  if (todo.completed) {
    input.setAttribute('checked', true); ///////
  }

  label.htmlFor = `todo-${todo.id}`;
  label.innerText = todo.task;

  li.insertAdjacentElement('beforeend', input);
  li.insertAdjacentElement('beforeend', label);
  li.insertAdjacentElement('beforeend', button);

  ul.insertAdjacentElement('beforeend', li); //same setup from DOM t2

  //checkbox event listener
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

  //delete button event listener
  button.addEventListener('click', event => {
    const index = todoList.findIndex(item => item?.id === todo.id); //can be written in any way you want eg. i => i?.id === todo.id
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

// add button event listener
addButton.addEventListener('click', () => {
  console.log('add button clicked');

  const dialog = document.querySelector('dialog');
  const form = document.querySelector('dialog form'); // "dialog form" means find element form in element dialog, but using only "form" is fine if the document has only one form element.
  const li = document.createElement('li'); // re-added these, otherwise some functions wont work.
  const input = document.createElement('input'); //
  const label = document.createElement('label'); //
  const button = document.createElement('button'); //

  dialog.show();

  // submit button
  form.addEventListener('submit', event => {
    event.preventDefault(); //prevents browsers the use of default feature (page reloading after submission).

    const newTodoTask = document.querySelector('dialog form input').value; //.value means the input of the user
    const newTodoObject = {
      id: +new Date(),
      task: newTodoTask,
      completed: false,
    };
    todoList.push(newTodoObject); //added to array

    // form.querySelector('input').value = '';
    // form.reset() might be better as it clears all the inputs from a field
    form.reset(); //resets form for next todo item

    console.log('todoList', todoList);

    input.type = 'checkbox'; //from here on, I wanted to try adding stuff in the html itself.
    input.id = `todo-${newTodoObject.id}`;

    label.htmlFor = input.id;
    label.innerText = newTodoObject.task;

    button.innerText = 'X';

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button);
    ul.appendChild(li);

    input.addEventListener('change', event => {
      newTodoObject.completed = event.target.checked; // This entire part doesn't work well.
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
