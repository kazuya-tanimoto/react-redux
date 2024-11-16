import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {createStore} from "redux";
import {reducers} from "./reducers";
import {composeWithDevTools} from "@redux-devtools/extension";
import {Provider} from "react-redux";
import {ChakraProvider} from "@chakra-ui/react";

const store = createStore(
    reducers,
    composeWithDevTools()
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider>
            <App/>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
)
