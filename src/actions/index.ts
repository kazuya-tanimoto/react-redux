export const increment = (amount: number) => {
    return {
        type: 'INCREMENT',
        payload: amount
    }
}

export const decrement = (amount:number) => {
    return {
        type: 'DECREMENT',
        payload: amount
    }
}

export const login = () => {
    return {
        type: 'LOGIN'
    }
}