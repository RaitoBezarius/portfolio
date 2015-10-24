import React from 'react';
import {RouteHandler} from 'react-router';

import Navbar from 'containers/Navbar.react';
import Footer from 'containers/Footer.react';

import './Application.react.css';

export default class Application extends React.Component {
	render() {
		return (
      <main className="portfolio-container">
				<Navbar />
				<RouteHandler />
				<Footer />
			</main>
		);
	}
}
