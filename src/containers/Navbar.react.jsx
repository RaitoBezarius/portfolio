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
        <section className="navbar-links">
          <li><Link to="home">About</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </section>
			</nav>
		);
	}
}
