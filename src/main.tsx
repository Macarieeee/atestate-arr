import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Support the clean admin URL in Vite while keeping existing hash routes.
if (/\/admin\/?$/.test(window.location.pathname) && !window.location.hash) {
  window.history.replaceState(null, "", `${import.meta.env.BASE_URL}#/admin`);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
