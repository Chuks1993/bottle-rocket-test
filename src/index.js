import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './helpers/serviceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import restaurantReducer from './helpers/reducers/restaurant-reducer';

const allReducers = combineReducers({
    restaurant: restaurantReducer
});

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
