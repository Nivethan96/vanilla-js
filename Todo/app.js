// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');

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

const filterTodos = (event) => {
	const todos = todoList.childNodes;
	const {
		target: { value },
	} = event;

	todos.forEach((todo) => {
		switch (value) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'completed':
				todo.classList.contains('completed')
					? (todo.style.display = 'flex')
					: (todo.style.display = 'none');
				break;
			case 'uncompleted':
				!todo.classList.contains('completed')
					? (todo.style.display = 'flex')
					: (todo.style.display = 'none');
				break;
		}
	});
};

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOptions.addEventListener('click', filterTodos);
