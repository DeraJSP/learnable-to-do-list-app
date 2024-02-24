const uList = document.querySelector('ol');
const inputField = document.querySelector('input');
const addTask = document.querySelector('button');
const finished = document.querySelector('ul');
const newLine = document.createElement('br');

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

taskCheck.addEventListener('click', function(){
  if (taskCheck.checked) {
    const task = this.parentNode
    task.remove();
    finished.appendChild(task)
    task.appendChild(taskCheck);
    task.appendChild(taskSpan);
    deleteButton.remove()
    editButton.remove()
    } else {
      task.remove()
      uList.appendChild(task);
      task.appendChild(taskCheck);
      task.appendChild(taskSpan);
      task.appendChild(deleteButton);
      task.appendChild(editButton);
    }
})
  
  
  inputField.focus();
}