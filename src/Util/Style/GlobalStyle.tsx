import { FunctionComponent } from "react";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

const GlobalStyle: FunctionComponent = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smooth: grayscale;
          -webkit-font-smooth: antialiased;
          font-smooth: antialiased;
          font-family: "Nanum Gothic", sans-serif !important;
        }
      `}
    />
  );
};

export default GlobalStyle;
