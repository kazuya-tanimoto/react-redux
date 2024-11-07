import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createStore} from "redux";
import {reducers} from "./reducers";
import {composeWithDevTools} from "@redux-devtools/extension";
import {Provider} from "react-redux";

const store = createStore(
    reducers,
    composeWithDevTools()
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)
