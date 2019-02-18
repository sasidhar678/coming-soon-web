import React from 'react';
const StaticCard = ({ position, digit }) => {
    return (
        /* jshint ignore : start */
        <div className={position}>
            <span>{digit}</span>
        </div>
        /* jshint ignore : end */
    );
};

export default StaticCard;