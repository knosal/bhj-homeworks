const tasksInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

tasksAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if (tasksInput.value.trim().length > 0) {
        const task = document.createElement('div');
        task.classList.add('task');

        task.insertAdjacentHTML('beforeEnd', `
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `);
        tasksInput.value = '';
        //созданную задачу добавляем в конец списка
        tasksList.appendChild(task);
        //удаление элементов из списка
        const removeButtom = task.querySelector('.task__remove');
        removeButtom.addEventListener('click', (event) => {
            event.currentTarget.closest('.task').remove();
        });
    } else {
        console.log('Заполните поле');
    }
});