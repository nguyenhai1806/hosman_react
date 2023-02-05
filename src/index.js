import "./styles/reset.css";
import "./styles/global.scss";

import App from "./views/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import reportWebVitals from "./reportWebVitals";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const reduxStore = createStore(rootReducer, composedEnhancer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
