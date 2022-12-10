import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counterReducer } from './reducer/counterReducer'
import { productReducer } from './reducer/productReducer';
import { basketReducer } from './reducer/basketReducer';
import {productItemReducer} from './reducer/productItemReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    state: counterReducer,
    products: productReducer,
    basket: basketReducer,
    product_item: productItemReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk))