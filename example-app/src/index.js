import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer } from './reducers/reducer.js';
import { addComment } from './actions/actions';
import DevTools from './dev_tools/DevTools';

const store = createStore(
        reducer, 
        DevTools.instrument()
    );

ReactDOM.render(    
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  );

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));


