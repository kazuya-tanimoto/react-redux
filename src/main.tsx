import App from "@/App";
import { ComponentPreviews, useInitial } from "@/dev";
import { store } from "@/store";
import { ChakraProvider } from "@chakra-ui/react";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

export const renderApp = (container: HTMLElement | null) => {
  if (container) {
    const root = createRoot(container);
    root.render(
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
  }
};

const container = document.getElementById("root");
renderApp(container);
