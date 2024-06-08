import {QueryClient} from "@tanstack/react-query";
import {LoaderFunction, LoaderFunctionArgs, useLoaderData} from "react-router-dom";

type Opts<T> = {
	getData: (args: LoaderFunctionArgs) => Promise<T>
	getKey?: (args: LoaderFunctionArgs) => string[]
	key?: string | string[]
}
export function createLoader<T> (opts: Opts<T>) {
	if (!opts.key && !opts.getKey) {
		throw new Error('Must provide either key or getKey')
	}

	let getKey : (args: LoaderFunctionArgs) => string[]
	if (!opts.getKey) {
		getKey = () => opts.key instanceof Array ? opts.key : [opts.key!]
	}
	else {
		getKey = opts.getKey
	}

	const getQuery = (args: LoaderFunctionArgs) => {
		const key = getKey(args)
		return {
			queryKey: key,
			queryFn: async () => {
				const result = await opts.getData(args)
				return result
			}
		}
	}

	const loader = (qc: QueryClient) : LoaderFunction => {
		return async (args: LoaderFunctionArgs): Promise<T> => {
			const query = getQuery(args)
			return (
				qc.getQueryData(query.queryKey) ??
				(await qc.fetchQuery(query))
			)
		}
	}



	return {
		loader,
		useLoaderData: () => {
			const data = useLoaderData() as T
			return data
		}
	}
}
