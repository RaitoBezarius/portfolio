import React from 'react';
import {RouteHandler} from 'react-router';

import classNames from 'classnames';

import Navbar from 'containers/Navbar.react';
import Footer from 'containers/Footer.react';

import ApplicationStyleStore from 'stores/ApplicationStyleStore';
import connectToStores from 'alt/utils/connectToStores';

import './Application.react.css';

@connectToStores
export default class Application extends React.Component {
  static propTypes = {
    currentClasses: React.PropTypes.object.isRequired
  }
  static getStores() {
    return [ApplicationStyleStore];
  }
  static getPropsFromStores() {
    return ApplicationStyleStore.getState();
  }
	render() {
		return (
      <main className={classNames('portfolio-container', this.props.currentClasses)}>
				<Navbar />
				<RouteHandler />
				<Footer />
			</main>
		);
	}
}
