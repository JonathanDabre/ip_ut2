const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const dueDateInput = document.getElementById('due-date');
const addTaskButton = document.getElementById('add-task');
const filterSelect = document.getElementById('filter');
const tasksList = document.getElementById('tasks');

let tasks = [];

addTaskButton.addEventListener('click', addTask);
filterSelect.addEventListener('change', filterTasks);

function addTask() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;

    if (!title || !description || !dueDate) {
        alert('Please fill out all fields.');
        return;
    }

    const task = {
        id: Date.now(),
        title,
        description,
        dueDate,
        completed: false,
    };

    tasks.push(task);
    updateLocalStorage();
    renderTasks();
    clearInputFields();
}

function filterTasks() {
    const filterValue = filterSelect.value;

    if (filterValue === 'all') {
        renderTasks();
    } else if (filterValue === 'completed') {
        renderTasks(tasks.filter(task => task.completed));
    } else if (filterValue === 'pending') {
        renderTasks(tasks.filter(task => !task.completed));
    }
}

function toggleCompletion(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
        return task;
    });
    updateLocalStorage();
    renderTasks();
}

function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    updateLocalStorage();
    renderTasks();
}

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks(taskArray = tasks) {
    tasksList.innerHTML = '';
    taskArray.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                <strong>${task.title}</strong> - ${task.description}, Due: ${task.dueDate}
            </span>
            <div>
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <button class="remove-btn">Remove</button>
            </div>
        `;

        const checkbox = taskItem.querySelector('input');
        checkbox.addEventListener('change', () => toggleCompletion(task.id));

        const removeButton = taskItem.querySelector('.remove-btn');
        removeButton.addEventListener('click', () => removeTask(task.id));

        tasksList.appendChild(taskItem);
    });
}

function clearInputFields() {
    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
}

// Load tasks from local storage if available
const storedTasks = JSON.parse(localStorage.getItem('tasks'));
if (storedTasks) {
    tasks = storedTasks;
    renderTasks();
}
