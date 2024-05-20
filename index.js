const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function() {
    if (inputTask.value.trim() === "") {
        alert('Please Enter a Task');
        return; // Exit function if no task is entered
    }

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = inputTask.value;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    taskContainer.appendChild(task);

    inputTask.value = "";

    checkButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop event propagation
        li.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop event propagation
        task.remove();
    });
});
