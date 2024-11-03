import { NavLink } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className="h-screen flex items-center justify-center gap-2 bg-gray-200">
			<div className="flex flex-col gap-2">
				<h1 className="text-purple-800 text-3xl font-bold underline">
					Welcome to Frank Realty Group!
				</h1>
				<div className="flex justify-center font-bold border-t border-b border-black ">
					<NavLink to="/login">Login Here</NavLink>
				</div>
				<img src="../frg.png" alt="frank-realty-group-logo" />
				<div className="flex justify-center underline text-black">
					<NavLink to="/houses">Check out some of our houses!</NavLink>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
