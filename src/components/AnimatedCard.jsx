import React from 'react';
const AnimatedCard = ({ position, animation, digit }) => {
  return (
    /* jshint ignore : start */
    <div className={`flipCard ${position} ${animation}`}>
      <span>{digit}</span>
    </div>
    /* jshint ignore : end */
  );
};

export default AnimatedCard;