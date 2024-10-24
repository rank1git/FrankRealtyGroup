import { NavLink, Outlet } from 'react-router-dom';
import { housingData } from '../utils/housingData';

const Houses = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col bg-gray-300 pl-5 pt-5 pb-2">
				<h1 className="text-3xl flex justify-center">Houses Page</h1>
				<div>
					<NavLink
						to="/"
						className="underline hover:bg-gray-500 hover:text-white"
					>
						Back to Home
					</NavLink>
				</div>
			</div>

			<div className="flex flex-row pl-5">
				<div className="flex flex-col">
					{housingData.map((house) => {
						return (
							<div>
								<NavLink
									key={house.id}
									to={`/houses/${house.id}`}
									className={({ isActive }) => {
										return isActive ? 'bg-purple-700 text-white flex w-60' : '';
									}}
								>
									ID: {house.id}
								</NavLink>
								<p className="hover:bg-purple-200">
									Address: <a href={house.photoUrl}>{house.address}</a>
								</p>
								<p>
									Features: {house.features.map((feature) => feature + ' | ')}
								</p>
								<p>Price: {house.price}</p>
								<p>Beds: {house.bedrooms}</p>
								<p>Baths: {house.bathrooms}</p>
								<p>sqft: {house.squareFeet}</p>

								<hr></hr>
							</div>
						);
					})}
				</div>
				{/*The placeholder for any child root of the Houses component to be rendered*/}
				<Outlet />
			</div>
		</div>
	);
};

export default Houses;
