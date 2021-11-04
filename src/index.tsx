import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from "./Util/Style/GlobalStyle";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Routes />
      <GlobalStyle />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
