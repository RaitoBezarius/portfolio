import React from 'react';

import './ProjectTitle.react.css';

export default class ProjectTitle extends React.Component {
  static propTypes = {
    children: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <h1 className="project-title">{this.props.children}</h1>
    );
  }
}
