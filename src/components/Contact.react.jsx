import React from 'react';

import ApplicationStyleActions from 'actions/ApplicationStyleActions';
import ImageOverlay from 'components/ui/ImageOverlay.react';
import View from 'react-flexbox';
import './Contact.react.css';

export default class Contact extends React.Component {
  componentDidMount() {
    ApplicationStyleActions.applyClass('app-space-background');
  }
  componentWillUnmount() {
    ApplicationStyleActions.removeClass('app-space-background');
  }
  render() {
    return (
      <section className="contact-section">
        <hgroup>
          <h1 className="contact-head">Under pressure, you are waiting for directions.</h1>
        </hgroup>
        <button className="contact-cta">Stop thinking, let's work together.</button>
      </section>
    );
  }
}
