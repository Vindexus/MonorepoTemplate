import {Todo, TodoList} from "@monorepo/shared/modules/todos/todo-types";
import {getRandomInt, getRandomItem} from "@monorepo/shared/helpers/random";
import {saveTodoLists} from "@monorepo/shared/modules/todos/todo-helpers";

const samples = `Complete the project report for work
Call the bank to inquire about loan options
Schedule a dentist appointment
Buy groceries for the week
Finish reading the current book
Clean the house and do the laundry
Prepare a presentation for Monday's meeting
Respond to pending emails
Plan and book the summer vacation
Go for a 30-minute run or workout session`.split('\n')

let itemId = 1;
const numLists = getRandomInt(3, 6)
const lists : TodoList[] = []
for (let listId = 1; listId <= numLists; listId++) {
	const todos : Todo[] = []
	const list : TodoList = {
		id: listId,
		title: "List for " + new Date(Date.now() + (1000 * 60 * 60 * 24 * getRandomInt(1, 9) * -1)).toLocaleDateString(),
		todos,
	}
	const numTodos = getRandomInt(4, 9)
	for (let i = 1; i <= numTodos; i++) {
		itemId++
		const todo: Todo = {
			id: itemId,
			text: getRandomItem<string>(samples),
			is_done: getRandomInt(1,4) === 1,
		}
		if (todo.is_done) {
			todo.done_at = new Date()
		}

		list.todos.push(todo)
	}
	lists.push(list)
}

console.log(`Generated ${lists.length} lists with a total of ${itemId} todos`)

saveTodoLists(lists)
