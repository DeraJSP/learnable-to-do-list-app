const uList = document.querySelector('ol');
const inputField = document.querySelector('.task-desc');
const timeField = document.querySelector('.date-time');
const addTask = document.querySelector('button');
const finished = document.querySelector('ul');
const newLine = document.createElement('br');

addTask.addEventListener('click', () => {

  // checks to see if field is empty
  
  if (inputField.value !== '') {
    addToList();
  } else {
    //do nothing
 }
});

// adds task to the list

function addToList() {
  let newTask = inputField.value;
  inputField.value = '';
  let time = timeField.value;
  const newTime = time.replace('T', ' \ |  ');
  const task = document.createElement('li');
  const taskSpan = document.createElement('span');
  const timeSpan = document.createElement('span');
  taskSpan.style.setProperty('font-weight', '600')
  taskSpan.className = 'taskText';
  const deleteTask = document.createElement('button');
  const editTask = document.createElement('button');
  const taskCheck = document.createElement('input');
  deleteTask.className = 'delbtn';
  editTask.className = 'editbtn'
  deleteTask.textContent = 'Delete';
  editTask.textContent = 'Edit';
  taskCheck.setAttribute('type', "checkbox");  
  const divCheck = document.createElement('div');
  divCheck.className = 'mod-task';
  const timeDiv = document.createElement('div');
  timeDiv.className = 'timeWrap'
  task.appendChild(taskCheck)
  task.appendChild(taskSpan);
  timeDiv.appendChild(timeSpan);
  task.appendChild(timeDiv);
  divCheck.appendChild(editTask);
  divCheck.appendChild(deleteTask);
  task.appendChild(divCheck);
  taskSpan.textContent = `${newTask}`;
  timeSpan.textContent = `${newTime}`;
  timeSpan.style.setProperty('color', '#7393B3');
  timeSpan.style.setProperty('font-weight', '500');
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
    timeDiv.remove()
    } else {
      task.remove()
      uList.appendChild(task);
      task.appendChild(taskCheck);
      task.appendChild(taskSpan);
      task.appendChild(timeDiv);
      divCheck.appendChild(editTask);
      divCheck.appendChild(deleteTask);
      task.appendChild(divCheck);
      taskSpan.style.setProperty('text-decoration', 'none');
      taskSpan.style.setProperty('color', 'black');
    }
})
  
  inputField.focus();
}