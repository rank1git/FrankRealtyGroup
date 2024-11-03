import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import NotFoundPage from './pages/notFound';
import HomePage from './pages/homepage';
import Houses from './pages/houses';
import House from './pages/house';
import Login from './Login';
import FAQ from './faq';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/houses',
		element: <Houses />,
		errorElement: <NotFoundPage />,
		children: [
			{
				// the value following the ":" can be named anything
				path: '/houses/:houseId',
				element: <House />,
				errorElement: <NotFoundPage />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/faq',
		element: <FAQ />,
		errorElement: <NotFoundPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
