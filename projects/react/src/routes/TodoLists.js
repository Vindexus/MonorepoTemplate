var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getTodoLists } from "../lib/api.ts";
import { Link } from "react-router-dom";
const todoListsQuery = () => ({
    queryKey: ['todolists'],
    queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield getTodoLists();
        return result;
    })
});
export const loader = (qc) => {
    return (_args) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const query = todoListsQuery();
        return ((_a = qc.getQueryData(query.queryKey)) !== null && _a !== void 0 ? _a : (yield qc.fetchQuery(query)));
    });
};
export default function TodoLists() {
    const [loading, setLoading] = useState(true);
    const [todoLists, setTodoLists] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            (function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const lists = yield getTodoLists();
                    console.log('lists', lists);
                    setTodoLists(lists.lists);
                    setLoading(false);
                });
            })();
        }, 500);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Lists" }), !loading && todoLists.length === 0 && _jsxs("span", { children: ["No lists. Try running ", _jsx("pre", { children: "yarn cli generate" }), " then refresh the page"] }), loading && _jsx("span", { children: "loading..." }), !loading && todoLists.length > 0 && (_jsx("ul", { children: todoLists.map(list => (_jsxs("li", { children: [list.title, _jsx(Link, { to: `/list/${list.id}`, children: "View" })] }, list.id))) }))] }));
}
