function addTask() {
    const input = document.getElementById('new-task');
    const taskText = input.value.trim();
    
    if (taskText === '') return;

    const li = document.createElement('li');
    
   
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
   
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit';
    editBtn.onclick = function() {
        const newText = prompt('Edit task:', taskSpan.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskSpan.textContent = newText.trim();
        }
    };

  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = function() {
        li.remove();
    };

   
    li.appendChild(taskSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);
    input.value = '';
}

document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});