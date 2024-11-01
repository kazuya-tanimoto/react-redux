import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createStore} from "redux";


// actions -> increment, decrement
type Action = {
    type: string
}

const increment = () => {
    return {
        type: "INCREMENT"
    }
}

const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

// reducer
const counterReducer = (state = 0, action: Action) => {
    switch (action.type) {
        case "INCREMENT":
            return state +1;
        case "DECREMENT":
            return state -1;
    }
}

// store
let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

// dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
