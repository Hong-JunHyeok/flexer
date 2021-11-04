import styled from "@emotion/styled";
import oc from "open-color";

const PageLayoutContainer = styled.div`
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
  flex: 3;
`;

const PageContentContainer = styled.div`
  max-width: 100%;
  padding: 2rem;
  background-color: ${oc.gray};
  flex: 9;
  overflow-y: auto;
`;

const Styles = {
  PageLayoutContainer,
  PageContentContainer,
};

export default Styles;
