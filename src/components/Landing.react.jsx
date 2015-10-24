import React from 'react';

import ShowcaseOverlay from 'components/ui/ShowcaseOverlay.react';
import './Landing.react.css';

export default class Landing extends React.Component {
  render() {
    const imagesToShowcase = [
      require('assets/images/glitch_js.gif'),
      require('assets/images/yuki_nagato_hack.gif'),
      require('assets/images/vim_js.gif'),
      require('assets/images/fork_bomb.gif')
    ];

    return (
      <section className="landing-section">
        <ShowcaseOverlay imagesSrc={imagesToShowcase} />
        <article className="landing-article">
          <h1 className="landing-article-head">
            Tutturu!
          </h1>
          <p className="landing-article-presentation">
            I am Ryan, the full stack engineer!
          </p>
          <p className="landing-article-presentation-details">
            A strange and totally crazy developer which can accomplish your most foolish ideas! <br />
            My secret ? I use an IBM 5100, a powerful computer which grants me the <span className="landing-ability">"Ship it."</span> ability.
          </p>
        </article>
      </section>
    );
  }
}
