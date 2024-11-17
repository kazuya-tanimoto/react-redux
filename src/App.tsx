import "./App.css";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, login } from "./actions";

function App() {
  const counter = useSelector((state: { counter: number }) => state.counter);
  const isLogin = useSelector((state: { isLogin: boolean }) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <>
      <Flex w="full" direction="column" justify="center" gap={4}>
        <Flex w="full" justify="space-around" py={4} bg="gray.700">
          <Heading as="h1" size="3xl" color="white">
            Redux
          </Heading>
          <Heading as="h2" size="3xl" color="white">
            React
          </Heading>
        </Flex>
        <Flex gap={4} direction="column" justify="center">
          <p>This is a simple example of using Redux with React.aaa</p>
          <h2>count : {counter} </h2>
          <Button onClick={() => dispatch(increment(3))}>+</Button>
          <Button onClick={() => dispatch(decrement(3))}>-</Button>
        </Flex>
        <h2>{isLogin ? "Logged in." : "Please log in."}</h2>
        <Button onClick={() => dispatch(login())} m={4}>
          {isLogin ? "Logout" : "Login"}
        </Button>
      </Flex>
    </>
  );
}

export default App;
