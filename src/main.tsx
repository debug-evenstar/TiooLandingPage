import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SmoothScroll from "./utils/smoothscroll.tsx";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SmoothScroll>
      <Provider>
        <App />
      </Provider>
    </SmoothScroll>
  </React.StrictMode>
);
