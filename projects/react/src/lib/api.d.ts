import { TodoList } from "@monorepo/shared/modules/todos/todo-types.ts";
declare const api: import("axios").AxiosInstance;
export type TodoListResponse = {
    lists: TodoList[];
};
export declare function getTodoLists(): Promise<TodoListResponse>;
export default api;
