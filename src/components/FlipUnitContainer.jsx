import React from 'react';
import StaticCard from './StaticCard';
import AnimatedCard from './AnimatedCard';
const FlipUnitContainer = ({ digit, shuffle, units }) => {

    // assign digit values
    let currentDigit = digit;
    let nextDigit = digit + 1;

    // add zero
    if (currentDigit < 10) {
        currentDigit = `0${currentDigit}`;
    }
    if (nextDigit < 10) {
        nextDigit = `0${nextDigit}`;
    }

    // shuffle digits
    const digit1 = shuffle ? nextDigit : currentDigit;
    const digit2 = !shuffle ? nextDigit : currentDigit;

    // shuffle animations
    const animation1 = shuffle ? 'fold' : 'unfold';
    const animation2 = !shuffle ? 'fold' : 'unfold';

    return (
        /* jshint ignore : start */
        <div className={'flipUnitContainer'}>
            <StaticCard
                position={'upperCard'}
                digit={currentDigit}
            />
            <StaticCard
                position={'lowerCard'}
                digit={nextDigit}
            />
            <AnimatedCard
                position={'first'}
                digit={digit1}
                animation={animation1}
            />
            <AnimatedCard
                position={'second'}
                digit={digit2}
                animation={animation2}
            />
            <h4 className="label">{units}</h4>
        </div>
        /* jshint ignore : end */
    );
};

export default FlipUnitContainer;