export const isLoginReducer = (state = false, action: {type:string}) => {
    switch (action.type) {
        case 'LOGIN':
            return !state;
        default:
            return state
    }
}
