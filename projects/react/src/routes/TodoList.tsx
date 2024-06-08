import {Link, LoaderFunctionArgs} from "react-router-dom";
import {getTodoLists} from "../lib/api.ts";
import {TodoList} from "@monorepo/shared/modules/todos/todo-types.ts";
import {createLoader} from "@monorepo/react/src/lib/loader.ts";

export const {loader, useLoaderData} = createLoader<TodoList>({
	getKey: (args: LoaderFunctionArgs) => ['todolist', `${args.params.id}`],
	getData: async ({params}: LoaderFunctionArgs) : Promise<TodoList> => {
		const lists = await getTodoLists()
		const list = lists.lists.find(x => x.id.toString() === params.id)
		if (!list) {
			throw new Error('List not found')
		}
		return list
	},
})

export default function TodoList () {
	const todoList = useLoaderData()
	return (
		<div>
			<Link to={`/lists`}>Back to lists</Link>
			<h1>{todoList.title}</h1>
			<table>
				<thead>
					<tr>
						<th>Task</th>
						<th>Completed</th>
					</tr>
				</thead>
				<tbody>
					{todoList.todos.map(task => (
						<tr key={task.id}>
							<td>{task.text}</td>
							<td>{task.is_done ? '✅' : '❌'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
