import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeaderContextProvider } from "./Contexts/HeaderContext.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import { ModalProvider } from "./Contexts/ModalContext.jsx";
// import { store } from "./Redux/store.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <HeaderContextProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </HeaderContextProvider>
      </ModalProvider>
    </Provider>
  </StrictMode>
);
