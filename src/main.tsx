import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import App from "./App";
import { Auth } from "./auth/auth.component";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Auth>
        <App />
      </Auth>
    </ChakraProvider>
  </React.StrictMode>
);
