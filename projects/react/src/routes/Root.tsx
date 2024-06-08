import {Outlet, useNavigation} from "react-router-dom";

export default function Root() {
	return (
		<>
			<header>HEADER</header>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}
