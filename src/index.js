import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './store/cart';
import productsReducer from './store/products';
import App from './App';
import productsData from './data/products';


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData // initial store values
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
