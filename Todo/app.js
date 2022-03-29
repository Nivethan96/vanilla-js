// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Functions
const addTodo = (event) => {
	event.preventDefault();

	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');

	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>Check';
	completedButton.classList.add('complete-btn');

	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>Delete';
	trashButton.classList.add('trash-btn');

	todoDiv.appendChild(newTodo);
	todoDiv.appendChild(completedButton);
	todoDiv.appendChild(trashButton);

	todoList.appendChild(todoDiv);
	todoInput.value = '';
};

const deleteCheck = (event) => {
	const item = event.target;
	const todo = item.parentElement;

	if (item.classList[0] === 'trash-btn') {
		todo.classList.add('fall');
		todo.addEventListener('transitionend', () => {
			todo.remove();
		});
	}

	item.classList[0] === 'complete-btn' && todo.classList.toggle('completed');
};

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
