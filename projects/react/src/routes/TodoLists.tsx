import {getTodoLists, TodoListsResponse} from "../lib/api.ts";
import {Link} from "react-router-dom";
import {createLoader} from "@monorepo/react/src/lib/loader.ts";

export const {loader, useLoaderData} = createLoader<TodoListsResponse>({
	key: 'todolists',
	getData: getTodoLists,
})

export default function TodoLists () {
	const listsData = useLoaderData()
	return (
		<>
			<h1>Lists</h1>
			{listsData.lists.length === 0 && <span>No lists. Try running <pre>yarn cli generate</pre> then refresh the page</span>}
			{listsData.lists.length > 0 && (
				<ul>
					{listsData.lists.map(list => (
						<li key={list.id} className={'flex'}>
							<div className={'font-bold me-2'}>
								{list.title}
							</div>
							<Link to={`/list/${list.id}`}>View</Link>
						</li>
					))}
				</ul>
			)}
		</>
	)
}

