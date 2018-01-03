
import React from 'react';
import './App.css';
import CommentsListContainer from './containers/CommentsListContainer.js'
import DevTools from './dev_tools/DevTools';

const App = () => {
  return (
    <div className="App">
        <CommentsListContainer />
        <DevTools />
    </div>
  );
};


export default App;
