const uList = document.querySelector('ul');
const inputField = document.querySelector('input');
const addTask = document.querySelector('button');

addTask.addEventListener('click', addToList);

function addToList() {
  const newTask = inputField.value;
  inputField.value = '';
  const task = document.createElement('li');
  const taskSpan = document.createElement('span');
  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button')
  const taskCheck = document.createElement('input');
  taskCheck.setAttribute('type', "checkbox");
  task.appendChild(taskCheck)
  task.appendChild(taskSpan);
  task.appendChild(deleteButton);
  task.appendChild(editButton);
  taskSpan.textContent = `${newTask}`;
  deleteButton.textContent = 'Delete';
  editButton.textContent = 'Edit';
  uList.appendChild(task);

/*
alternatively you could use 

() => {list.removeChild(listItem);});
 
instead of the this.parentNode code
*/

  deleteButton.addEventListener('click', function() {
    const task = this.parentNode
    task.remove()
  });

  editButton.addEventListener('click', function() {
    const update = prompt("Edit Task");
    if (update == null) {
      taskSpan.innerText = newTask
    } else {
    taskSpan.innerText = update
  }
});

  if (taskCheck == 'true') {
      console.log('task checked')
    }
  
  inputField.focus();
}