import { useState, useEffect, useMemo } from 'react';
import Loading from './loading.js';
import FAQ from './faq.js';
import { housingData, filterByName } from './data.js';

const App = () => {
	// const [fname, setFname] = useState('');
	// const [lname, setLname] = useState('');
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	const [info, setInfo] = useState({
		fname: '',
		lname: '',
		email: '',
		password: '',
	});
	const [isSent, setIsSent] = useState(false);
	const [loading, setLoading] = useState(false);

	// const meow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	// const find10 = useMemo(() => meow.find(num => num === 10), [meow]);

	// useEffect(() => {

	// }, [loading])

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// display the loading spinner for mock network request
		setTimeout(() => {
			setLoading(false);
			setIsSent(true);
		}, 2000);

		// Go back to the starting page
		setTimeout(() => {
			setIsSent(false);
		}, 5000);
	};

	// const handleClick = () => {
	// 	return <FAQ />;
	// };

	return (
		<>
			{loading && <Loading />}
			{!loading && !isSent && (
				<div>
					<h1>Sign Up</h1>
					<form onSubmit={handleSubmit}>
						<h3>First Name</h3>
						<input
							type="text"
							placeholder="Your name"
							value={info.fname}
							onChange={(e) => {
								setInfo({ ...info, fname: e.target.value });
							}}
							required
						/>
						<h3>Last Name</h3>
						<input
							type=""
							placeholder="Your last name"
							value={info.lname}
							onChange={(e) => {
								setInfo({ ...info, lname: e.target.value });
							}}
							required
						/>
						<h3>Email</h3>
						<input
							type="email"
							placeholder="Your email"
							value={info.email}
							onChange={(e) => {
								setInfo({ ...info, email: e.target.value });
							}}
							required
						/>
						<h3>Password</h3>
						<input
							type="password"
							placeholder="••••••••"
							value={info.password}
							onChange={(e) => {
								setInfo({ ...info, password: e.target.value });
							}}
							required
						/>
						<div>
							<input
								type="checkbox"
								style={{ 'margin-bottom': '10px', marginTop: '10px' }}
							/>{' '}
							I would like to receive marketing emails.
						</div>
						<div>
							<input
								type="checkbox"
								style={{ 'margin-bottom': '10px' }}
								required
							/>{' '}
							I agree to the <a href="t&c-url">terms and conditions.</a>
						</div>
						<button
							type="submit"
							style={{
								'margin-bottom': '20px',
								height: '30px',
								width: '150px',
							}}
						>
							Sign up
						</button>
						<div>
							<a href="account-url">
								<span
									style={{ color: 'grey', 'text-decoration-color': 'grey' }}
								>
									Log in to your account
								</span>
							</a>
						</div>
						<FAQ />
						{/* <button onClick={handleClick}>FAQs</button> */}
					</form>
				</div>
			)}
			{isSent && (
				<h1>
					Welcome to Frank Realty Group {info.fname} {info.lname}! We are
					looking forward to serving your needs in the home-buying process!
				</h1>
			)}
		</>
	);
};

export default App;
