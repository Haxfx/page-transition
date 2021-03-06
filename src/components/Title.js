/* eslint-disable no-return-assign */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

function Title({ lineContent, lineContent2 }) {
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.8,
      ease: 'power3.out',
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);

  return (
    <div>
      <h1 className="page-title">
        <div className="line-wrap">
          <div ref={(el) => (line1 = el)} className="line">
            {lineContent}
          </div>
        </div>
        <div className="line-wrap">
          <div ref={(el) => (line2 = el)} className="line">
            {lineContent2}
          </div>
        </div>
      </h1>
    </div>
  );
}

Title.propTypes = {
  lineContent: PropTypes.string,
  lineContent2: PropTypes.string,
};

export default Title;
