import React from 'react';

import ResponsiveImage from 'components/ui/ResponsiveImage.react';
import View from 'react-flexbox';

import './ShowcaseOverlay.react.css';

export default class ShowcaseOverlay extends React.Component {
  static propTypes = {
    imagesSrc: React.PropTypes.array.isRequired,
    alt: React.PropTypes.string.isRequired,
    children: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <section className="showcase-overlay">
        {this.props.imagesSrc.map(imgSrc => {
          return (
            <ResponsiveImage className="showcase-blur" src={imgSrc} alt="Make your business succeed" />
          );
        })}
        <section>
          <View auto column className="showcase-headline-box">
            <h1 className="showcase-headline-problem">Too much problems? Team is having difficulties with new technology? You are <span className="showcase-emphasize">right</span>, solving problem is <span className="showcase-emphasize">hard</span>.</h1>
            <h1 className="showcase-headline-head">Get shit <span className="showcase-emphasize">done</span>. Do your business a favor, hire a part-time <span className="showcase-emphasize">expert</span>.</h1>
            <button className="showcase-headline-cta">Do not panic, let me assist you.</button>
          </View>
        </section>
      </section>
    );
  }
}
