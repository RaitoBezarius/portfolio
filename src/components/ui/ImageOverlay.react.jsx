import React from 'react';

import ResponsiveImage from 'components/ui/ResponsiveImage.react';
import './ImageOverlay.react.css';

export default class ImageOverlay extends React.Component {
  static propTypes = {
    children: React.PropTypes.array.isRequired,
    imageSrc: React.PropTypes.string.isRequired,
    imageAlt: React.PropTypes.string
  }

  render() {
    return (
      <section className="image-overlay">
        <ResponsiveImage src={this.props.imageSrc} alt={this.props.imageAlt} />
        {this.props.children}
      </section>
    );
  }
}
