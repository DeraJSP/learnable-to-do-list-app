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
  taskSpan.className = 'taskText';
  const deleteTask = document.createElement('i');
  const editTask = document.createElement('i');
  editTask.className = 'fa-solid fa-pen-to-square';
  deleteTask.className = 'fa-solid fa-trash-can';
  const taskCheck = document.createElement('input');
  taskCheck.setAttribute('type', "checkbox");
  
  const divCheck = document.createElement('div')
  divCheck.className = 'mod-task'

  task.appendChild(taskCheck)
  task.appendChild(taskSpan);
  divCheck.appendChild(editTask);
  divCheck.appendChild(deleteTask);
  task.appendChild(divCheck);
  taskSpan.textContent = `${newTask}`;
  uList.appendChild(task);

  deleteTask.addEventListener('click', function() {
    const task = divCheck.parentNode
    task.remove()
  });

  editTask.addEventListener('click', function() {
    const update = prompt("Edit task");
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
    taskSpan.style.setProperty('text-decoration', 'line-through');
    taskSpan.style.setProperty('color', 'red');
    divCheck.remove()
    } else {
      task.remove()
      uList.appendChild(task);
      task.appendChild(taskCheck);
      task.appendChild(taskSpan);
      divCheck.appendChild(editTask);
      divCheck.appendChild(deleteTask);
      task.appendChild(divCheck);
      taskSpan.style.setProperty('text-decoration', 'none');
      taskSpan.style.setProperty('color', 'black');
    }
})
  
  inputField.focus();
}