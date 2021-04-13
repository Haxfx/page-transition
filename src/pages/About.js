import React from 'react';
import Title from '../components/Title';

const About = () => (
  <div className="inner">
    <Title lineContent="Practice transition" lineContent2="with title text" />
    <p className="other">
      This is a practice with gsap to take care of page transition in react. To do the transition we
      used gsap and CSSTransition for not only the loading text but also to fade out the page we are
      leaving.
    </p>
  </div>
);

export default About;
