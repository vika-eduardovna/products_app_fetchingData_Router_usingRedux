import { load_products_action } from '../../store/reducer/productReducer';

export const loadProducts = async dispatch => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json()
    const payload = data.map(({ id, title, price,  }) => ({
        id, price,
        name: title
    }));

    dispatch(load_products_action(payload))
};

