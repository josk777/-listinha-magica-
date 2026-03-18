const taskInput = document.getElementById('taskTitle');
const detailsInput = document.getElementById('taskDetails');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


function createTaskItem(title, details = 'Sem detalhes') {
    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed', checkbox.checked);
    });

    const titleSpan = document.createElement('span');
    titleSpan.className = 'task-title';
    titleSpan.textContent = title;

    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'task-details-btn';
    detailsBtn.textContent = 'Detalhes';
    detailsBtn.addEventListener('click', function() {
        alert(`Detalhes: ${details}`);
    });

    const removeBtn = document.createElement('button');
    removeBtn.className = 'task-remove-btn';
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(titleSpan);
    li.appendChild(detailsBtn);
    li.appendChild(removeBtn);

    return li;
}

function addTask() {
    const title = taskInput.value.trim();
    const details = detailsInput.value.trim();

    if (title === '') {
        alert('Por favor, insira um título para a tarefa.');
        return;
    }

    const taskItem = createTaskItem(title, details || 'Sem detalhes');
    taskList.appendChild(taskItem);

    taskInput.value = '';
    detailsInput.value = '';
    taskInput.focus();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});