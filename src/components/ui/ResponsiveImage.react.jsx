import React from 'react';

import classNames from 'classnames';

import './ResponsiveImage.react.css';

export default class ResponsiveImage extends React.Component {
  static propTypes = {
    src: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    alt: React.PropTypes.string
  }

  render() {
    const className = classNames('responsive-image', this.props.className);
    return (
      <img src={this.props.src} className={className} alt={this.props.alt} />
    );
  }
}
