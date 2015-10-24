import React from 'react';

import {Link} from 'react-router';

import './Navbar.react.css';

export default class Navbar extends React.Component {
	render() {
		return (
      <nav className="navbar-nav">
        <section className="navbar-brand">
          <h3 className="navbar-brand-text">Raito Bezarius</h3>
        </section>
        <Link to="home">Home</Link>
        <Link to="contact">Contact</Link>
			</nav>
		);
	}
}
