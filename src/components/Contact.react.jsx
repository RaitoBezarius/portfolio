import React from 'react';

import ImageOverlay from 'components/ui/ImageOverlay.react';
import View from 'react-flexbox';
import './Contact.react.css';

export default class Contact extends React.Component {
  render() {
    return (
      <section className="space-overwrite">
        <ImageOverlay imageSrc={require('assets/images/space.jpg')} imageAlt='Space background image'>
          <View auto column style={{'justifyContent': 'flex-start'}} className="contact-box">
            <hgroup>
              <h1 className="contact-head">Under pressure, you are waiting for directions.</h1>
            </hgroup>
            <button className="contact-cta">Stop thinking, let's work together.</button>
          </View>
        </ImageOverlay>
      </section>
    );
  }
}
