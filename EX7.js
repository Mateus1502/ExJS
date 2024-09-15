const list = document.getElementById("lista");
const taskInput = document.getElementById("tarefa");

let draggedItem = null;

function addtarefa() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert("Se você não tem o que fazer por que tá usando uma lista de tarefas?");
        return;
    }

    const listItem = document.createElement("li");
    listItem.draggable = true;
    listItem.textContent = taskText;

    listItem.addEventListener('dblclick', () => {
        if (confirm("Deseja remover esta tarefa?")) {
            listItem.remove();
        }
    });

    list.appendChild(listItem);
    taskInput.value = "";
}

list.addEventListener('dragstart', (event) => {
    draggedItem = event.target;
    setTimeout(() => {
        event.target.classList.add('dragging');
    }, 0);
});

list.addEventListener('dragend', (event) => {
    event.target.classList.remove('dragging');
});

list.addEventListener('dragover', (event) => {
    event.preventDefault();
    const afterElement = getDragAfterElement(list, event.clientY);
    const draggingItem = document.querySelector('.dragging');
    if (afterElement == null) {
        list.appendChild(draggingItem);
    } else {
        list.insertBefore(draggingItem, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
