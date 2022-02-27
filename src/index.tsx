import { StrictMode } from "react";
import { GlobalStyle, GridStyles } from "./styles";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

ReactDOM.render(
  <StrictMode>
    <GlobalStyle></GlobalStyle>
    <GridStyles></GridStyles>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
