import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError() as unknown as any;
	console.error(error);

	let msg : string
	if ('statusText' in error || 'message' in error) {
		msg = error.statusText || error.message
	}
	else {
		msg = `${error}`
	}
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{msg}</i>
			</p>
		</div>
	);
}
