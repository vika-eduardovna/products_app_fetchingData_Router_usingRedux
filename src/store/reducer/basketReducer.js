const getData = () => {
    const data = JSON.parse(localStorage.getItem('basket_items')) ?? [];
    return data
}
const defaultState = getData();
export const CLEAR_BASKET = 'CLEAR_BASKET'
export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'
export const add_to_basket_action = (id, name, price) => {
    return {
        type: ADD_TO_BASKET,
        payload: { id, name, price }
    }
}

export const increase_count_action = (id) => {
    return { type: INCREASE_COUNT, payload: id }
}
export const decrease_count_action = (id) => {
    return { type: DECREASE_COUNT, payload: id }
}

export const clear_basket_action = () => {
    return { type: CLEAR_BASKET }
}

const checkProduct = (state, product) => {
    const productInState = state.find(({ id }) => id === product.id);
    if (productInState) {
        productInState.count++;
        return [...state]
    } else {
        return [...state, { ...product, count: 1 }]
    }
}

const storeData = (state) => {
    localStorage.setItem('basket_items', JSON.stringify(state))
}

export const basketReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_BASKET) {
        const new_state = checkProduct(state, action.payload);
        storeData(new_state);
        return new_state
    } else if (action.type === INCREASE_COUNT) {
        state.find(({ id }) => id === action.payload).count++;
        storeData(state);
        return [...state]
    } else if (action.type === DECREASE_COUNT) {
        const result = state.find(({ id }) => id === action.payload);
        if (result.count === 1) {
            state = state.filter(({ id }) => id !== action.payload);
        } else {
            result.count--;
        }
        storeData(state)
        return [...state]
    } else if (action.type === CLEAR_BASKET) {
        storeData([])
        return []
    } else {
        return state
    }
}

