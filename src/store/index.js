import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productReducer } from './reducer/productReducer';
import { basketReducer } from './reducer/basketReducer';
import {productItemReducer} from './reducer/productItemReducer'
import {categoriesReducer} from './reducer/categoriesReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productReducer,
    basket: basketReducer,
    product_item: productItemReducer,
    categories: categoriesReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk))