import React from 'react';

import WannaGoProject from 'components/WannaGoProject.react';
import './Projects.react.css'

export default class Projects extends React.Component {
  render() {
    return (
      <section className="projects-section">
        <hgroup className="projects-headlines">
          <h1 className="projects-headline-head">Hi there! Wanna see something cool?</h1>
        </hgroup>
        <section className="projects-showcase">
          <WannaGoProject />
        </section>
      </section>
    );
  }
}
