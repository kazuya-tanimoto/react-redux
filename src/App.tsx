import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, login} from "./actions";

function App() {
    const counter = useSelector((state: { counter: number }) => state.counter)
    const isLogin = useSelector((state: { isLogin: boolean }) => state.isLogin)
    const dispatch = useDispatch();

    return (
        <>
            <h1>Redux</h1>
            <p>
                This is a simple example of using Redux with React.aaa
            </p>
            <h2>count : {counter} </h2>
            <button onClick={() => dispatch(increment(3))}>+</button>
            <button onClick={() => dispatch(decrement(3))}>-</button>
            <h2>{isLogin ? "Logged in." : "Please log in."}</h2>
            <button onClick={() => dispatch(login())}>{isLogin ? "Logout" : "Login"}</button>
        </>
    )
}

export default App
