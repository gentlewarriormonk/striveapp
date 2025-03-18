
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter } from "react-router-dom";

// Force clear cache through versioning
const appVersion = Date.now();
console.log("App version:", appVersion);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <BrowserRouter basename="/">
        <App key={appVersion} />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
