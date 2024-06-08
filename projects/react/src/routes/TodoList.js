var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLoaderData } from "react-router-dom";
import { getTodoLists } from "../lib/api.ts";
const todoListQuery = (id) => ({
    queryKey: ['todolist', id],
    queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield getTodoLists();
        const found = result.lists.find(x => x.id.toString() === id);
        if (!found) {
            throw new Error('List not found');
        }
        return found;
    })
});
export const loader = (qc) => {
    return ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const query = todoListQuery(params.id);
        return ((_a = qc.getQueryData(query.queryKey)) !== null && _a !== void 0 ? _a : (yield qc.fetchQuery(query)));
    });
};
export default function TodoList() {
    const todoList = useLoaderData();
    return (_jsxs("div", { children: [_jsx(Link, { to: `/lists`, children: "Back to lists" }), _jsx("h1", { children: todoList.title }), _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Task" }), _jsx("th", { children: "Completed" })] }) }), _jsx("tbody", { children: todoList.todos.map(task => (_jsxs("tr", { children: [_jsx("td", { children: task.text }), _jsx("td", { children: task.is_done ? '✅' : '❌' })] }, task.id))) })] })] }));
}
