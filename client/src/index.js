import { BrowserRouter } from "react-router-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import ReactDOM from "react-dom/client";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
