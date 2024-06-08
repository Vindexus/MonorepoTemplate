import {Outlet} from "react-router-dom";

export default function Root() {
	return (
		<div className={'container max-w-6xl mx-auto p-4 shadow rounded bg-white my-4'}>
			<header className={'flex w-full justify-between text-2xl mb-2'}>
				<div className={'font-bold'}>
					Hello....
				</div>
				<div className={'text-slate-500'}>
					....World
				</div>
			</header>
			<div className={''}>
				<Outlet />
			</div>
		</div>
	);
}
