export type TodoList = {
    id: number;
    title: string;
    todos: Todo[];
};
export type Todo = {
    id: number;
    text: string;
    is_done: boolean;
    done_at?: Date;
};
