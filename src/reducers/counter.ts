export const counterReducer = (state = 0, action: { type: string; payload?: number }) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + (action.payload ?? 1);
        case 'DECREMENT':
            return state - (action.payload ?? 1);
        default:
            return state;
    }
};
