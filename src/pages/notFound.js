import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div className="bg-black">
			<h1>404 Not found</h1>
			<img src="./infinity.gif" alt="inifinty-spinning" />
			<div>
				<NavLink to="/">Back to Home</NavLink>
			</div>
		</div>
	);
};

export default NotFoundPage;
