const defaultState = [];
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const add_products_action = (name, price) => {
    return {
        type: ADD_PRODUCT,
        payload: { name, price }
    }
}

export const load_products_action = (payload) => {
    return { type: LOAD_PRODUCTS, payload }
}

export const productReducer = (state = defaultState, action) => {
    if (action.type === ADD_PRODUCT) {
        return [...state, {
            id: Date.now(),
            ...action.payload
        }]
    } else if (action.type === LOAD_PRODUCTS) {
        return action.payload
    } else {
        return state
    }
}