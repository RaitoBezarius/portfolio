import React from 'react';
import {RouteHandler} from 'react-router';

import Header from 'containers/Header.react';
import Navbar from 'containers/Navbar.react';
import Footer from 'containers/Footer.react';

import './Application.react.css';

export default class Application extends React.Component {
	render() {
		return (
      <main className="portfolio-container">
				<Header />
				<Navbar />
				<RouteHandler />
				<Footer />
			</main>
		);
	}
}
