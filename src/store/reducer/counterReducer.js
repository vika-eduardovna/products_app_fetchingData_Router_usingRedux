const defaultState = 0;

export const counterReducer = (state = defaultState, action) => {
    if (action.type === 'INCREMENT') {
        return state + action.payload
    } else if (action.type === 'DECREMENT') {
        return state - action.payload
    } else {
        return state
    }
}