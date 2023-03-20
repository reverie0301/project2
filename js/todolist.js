const inputTask = document.querySelector('#input-task');
const btnAddTask = document.querySelector('#btn-add-task');
const taskList = document.querySelector('#task-list');

btnAddTask.onclick = function addTask() {
  const taskText = inputTask.value;

  if (taskText.trim().length === 0) {
    return 0;
  }
  
  const taskItem = document.createElement('li');
  const taskSpan = document.createElement('span');
  const taskDeleteBtn = document.createElement('button');
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = 'checkbox';

  taskSpan.innerText = taskText;
  taskDeleteBtn.innerText = '刪除';

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskDeleteBtn);
  taskList.appendChild(taskItem);

  taskDeleteBtn.onclick = function deleteTask() {
    taskList.removeChild(taskItem);
  }

  inputTask.value = '';
}