import { load_product_item } from '../reducer/productItemReducer'

export const loadProductItem = id => {
    return async dispatch => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const payload = await response.json();
        dispatch(load_product_item(payload))
    }
}