import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, login} from "./actions";
import {Flex, Heading} from "@chakra-ui/react";

function App() {
    const counter = useSelector((state: { counter: number }) => state.counter)
    const isLogin = useSelector((state: { isLogin: boolean }) => state.isLogin)
    const dispatch = useDispatch();

    return (
        <>
            <Flex w="full" justify="space-around" py={4} bg="gray.700" >
                <Heading as="h1" size="3xl" color="white">Redux</Heading>
                <Heading as="h2" size="3xl" color="white">React</Heading>
            </Flex>
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
