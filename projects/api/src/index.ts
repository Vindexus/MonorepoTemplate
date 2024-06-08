import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {TodoList} from "@monorepo/shared/modules/todos/todo-types";
import {getTodoLists} from "@monorepo/shared/modules/todos/todo-helpers";

dotenv.config();

const app = express();
app.use(cors())
const port = process.env.PORT || '8232';

type AppRequest = Request & {
	list?: TodoList
}

app.get('/', (_: AppRequest, res: Response) => {
	res.send('Express + TypeScript Server');
});

app.get('/lists', (_: AppRequest, res: Response) => {
	const lists = getTodoLists()
	res.json({
		lists,
	})
})

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
	console.log(`[server]: Todo lists: http://localhost:${port}/lists`);
});

