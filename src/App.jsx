import React from 'react';
import './App.sass';
import FlipClock from './components/FlipClock';
import AppHeader from './components/AppHeader';

const App = () => {
  return (
    /* jshint ignore : start */
    <div>
      <AppHeader />
      <FlipClock />
    </div>
    /* jshint ignore : end */
  );
};

export default App;
