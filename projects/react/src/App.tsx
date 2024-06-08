import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from "./routes/Root.tsx";
import ErrorPage from "./routes/error-page.tsx";
import TodoList, {loader as todoListLoader} from "./routes/TodoList.tsx";
import TodoLists, {loader as todoListsLoader} from "./routes/TodoLists.tsx";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/list/:id",
				element: <TodoList />,
				loader: todoListLoader(queryClient),
			},
			{
				path: "/lists",
				element: <TodoLists />,
				loader: todoListsLoader(queryClient),
			},
		]
	},
]);
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
