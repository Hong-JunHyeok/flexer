import React from "react";
import SideBar from "../SideBar";
import Styles from "./Styles";

const PageLayout: React.FunctionComponent = ({ children }) => {
  return (
    <Styles.PageLayoutContainer>
      <SideBar />
      <Styles.PageContentContainer>{children}</Styles.PageContentContainer>
    </Styles.PageLayoutContainer>
  );
};

export default PageLayout;
