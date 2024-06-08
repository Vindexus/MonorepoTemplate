import axios from 'axios'
import {TodoList} from "@monorepo/shared/modules/todos/todo-types.ts";

if (!import.meta.env.VITE_API_URL) {
	throw new Error('VITE_API_URL is not defined')
}

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})

export type TodoListsResponse = {
	lists: TodoList[]
}

export async function getTodoLists () : Promise<TodoListsResponse> {
	const res = await api.get('/lists')
	return res.data
}

export default api
