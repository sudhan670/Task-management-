// Select form, input, and task list elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task to the list
taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const taskText = taskInput.value;

  if (taskText === '') return;

  createTaskElement(taskText);

  taskInput.value = ''; // Clear input field
});

// Create task element
function createTaskElement(taskText) {
  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');

  // Mark task as completed when clicked
  taskSpan.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Delete task
  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  // Edit task
  editButton.addEventListener('click', function() {
    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
      taskSpan.textContent = newTaskText.trim();
    }
  });

  li.appendChild(taskSpan);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);
}
