import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { housingData } from '../utils/housingData';
import NotFoundPage from './notFound';

const House = () => {
	const params = useParams();
	const currHouse = housingData[params.houseId - 1];
	// if (params.houseId > housingData.length - 1) {
	// 	<Link to="houses/1000000" />;
	// } else {
	return (
		<div>
			{/* <h1>House #: {params.houseId}</h1>
			<div>
				<NavLink to="/houses">Back to houses</NavLink>
			</div> */}
			<img
				src={currHouse.photoUrl}
				alt={`house #${params.houseId}`}
				className="w-96 mt-2 mb-2"
			/>
			<p className="mb-2">
				Address: <a href={currHouse.photoUrl}>{currHouse.address}</a>
			</p>
			<hr />
			<p className="mt-2">Price: {currHouse.price}</p>
			<p>Beds: {currHouse.bedrooms}</p>
			<p>Baths: {currHouse.bathrooms}</p>
			<p>Sqft: {currHouse.squareFeet}</p>
			<p>Year built: </p>
			<p>Listed date: </p>
			<p>Description: </p>
			<p>Features: {currHouse.features.map((feature) => feature + ' | ')}</p>
		</div>
	);
	// }
};

export default House;
