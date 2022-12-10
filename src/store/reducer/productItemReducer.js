const defaultState = {};

export const LOAD_PRODUCT_ITEM = 'LOAD_PRODUCT_ITEM'
export const RESET_STATE = 'RESET_STATE'


export const load_product_item = payload => ({ type: LOAD_PRODUCT_ITEM, payload })
export const reset_state = payload => ({type: RESET_STATE})
export const productItemReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCT_ITEM) {
        return action.payload
    } else if (action.type === RESET_STATE){
        return defaultState
    } else {
        return state
    }
} 
