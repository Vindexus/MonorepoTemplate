import {Todo, TodoList} from "./todo-types";
import path from "path";
import {fileURLToPath} from 'url';
import * as fs from "node:fs";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const todosJSONPath = path.join(__dirname, '..', '..', 'todos.json')

export function getCompletedTodos (todos: Todo[]): Todo[] {
	return todos.filter(todo => todo.is_done)
}

export function toggleTodoCompleted (todo: Todo) {
	todo.is_done = !todo.is_done
	if (todo.is_done) {
		todo.done_at = new Date()
	} else {
		todo.done_at = undefined
	}
}

export function saveTodoLists (lists: TodoList[]) {
	fs.writeFileSync(todosJSONPath, JSON.stringify(lists, null, 2), 'utf8')
	console.log('Wrote to JSON file:', todosJSONPath)
}

export function getTodoLists () {
	if (!fs.existsSync(todosJSONPath)) {
		console.warn('No todos.json file found. You can run "yarn cli generate" to create a sample file.')
		return []
	}
	const data = fs.readFileSync(todosJSONPath, 'utf8')
	return JSON.parse(data) as TodoList[]
}
