import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from "./routes/Root.tsx";
import ErrorPage from "./routes/error-page.tsx";
import TodoList, { loader as todoListLoader } from "./routes/TodoList.tsx";
import TodoLists from "./routes/TodoLists.tsx";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Root, {}),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            {
                path: "/list/:id",
                element: _jsx(TodoList, {}),
                loader: todoListLoader(queryClient),
            },
            {
                path: "/lists",
                element: _jsx(TodoLists, {})
            },
        ]
    },
]);
function App() {
    return (_jsxs("div", { className: "App", children: [_jsx("header", { className: "App-header", children: _jsxs("p", { children: ["Edit ", _jsx("code", { children: "projects/react/src/App.tsx" }), " and save to reload."] }) }), _jsx(QueryClientProvider, { client: queryClient, children: _jsx(RouterProvider, { router: router }) })] }));
}
export default App;
