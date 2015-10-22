import React from 'react';

import './Home.react.css';
export default class Home extends React.Component {
  render() {
    return (
      <article className="home-article">
        <hgroup>
          <h1>Hey ! Welcome on a fucking good React Starter kit</h1>
          <h2>Now, you can go delete every single text, don't worry</h2>
        </hgroup>
        <p>There is nearly nothing to remove!</p>
        <p>Just casually cd into src folders, and edit what you need ! :)</p>
        <p>Including this component. :)</p>
      </article>
    );
  }
}
