// To write up redux, we need:
	// 1) Provider(from react-redux)
	// 2. createStore (redux)
	// 3. reducers to pass createStore (./reducer)(rootReducer)
	// 4, Make a rootReducer to import other reducers
	// 5. Make a single reducer to import into rootReducer(4)
	// 6. Create the store (2) with the reducer (3)
	// 7. Wrap the Provider (1) with store prop (4) around App
//store is like the brain of redux

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import reduxPromise from 'redux-promise';

// const theStore = createStore(reducers); rewritten below
const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
//Above rewritten below:
//	const middleWare = applyMiddleware(reduxPromise);
//  const theStore = middleWare(createStore);
//  const theStoreWithReducers = theStore(reducers);


ReactDOM.render(
	<Provider store={theStoreWithMiddleware(reducers)} >
  		<App />
  	</Provider>,
  document.getElementById('root')
);
