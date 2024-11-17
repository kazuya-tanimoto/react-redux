import { ComponentPreviews, useInitial } from "@/dev";
import { store } from "@/store.ts";
import { ChakraProvider } from "@chakra-ui/react";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";

// const store = createStore(reducers, composeWithDevTools());

const root = document.getElementById("root");
root != null &&
  createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <ChakraProvider>
          <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
          >
            <App />
          </DevSupport>
        </ChakraProvider>
      </Provider>
    </StrictMode>,
  );
