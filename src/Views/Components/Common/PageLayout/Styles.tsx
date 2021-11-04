import styled from "@emotion/styled";
import oc from "open-color";

const PageLayoutContainer = styled.div`
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
`;

const PageContentContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${oc.gray};
`;

const Styles = {
  PageLayoutContainer,
  PageContentContainer,
};

export default Styles;
