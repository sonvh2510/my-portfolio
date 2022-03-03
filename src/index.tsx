import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle, GridStyles, Ultilities } from "./styles";

import App from "./App";
ReactDOM.render(
  <StrictMode>
    <GlobalStyle></GlobalStyle>
    <GridStyles></GridStyles>
    <Ultilities></Ultilities>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
