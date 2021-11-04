import styled from "@emotion/styled";
import oc from "open-color";
import { FlexColumn } from "../../../../Util/Style/MixonModules";

const SideBarContainer = styled.div`
  padding: 1rem;
  min-width: 400px;
  background-color: ${oc.white};

  a {
    padding-left: 10px;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    & > li {
      color: ${oc.gray[6]};
    }
    &::nth-child(1) {
      margin-top: 100px;
    }
  }
`;

const SideBarHeader = styled.header`
  ${FlexColumn}
  align-items: center;
  user-select: none;
  margin-bottom: 4rem;
  cursor: pointer;
  .title {
    font-size: 32px;
    font-weight: bold;
  }
  .subtitle {
    font-weight: lighter;
    color: ${oc.yellow[6]};
  }
`;

const SideBarContents = styled.ul`
  padding: 1rem;
  ${FlexColumn}

  .content-title {
    margin-bottom: 1rem;
  }

  .category {
    &:hover {
      background-color: ${oc.yellow[1]};
    }
  }
`;

const SideBarMeta = styled.ul`
  padding: 1rem;
  ${FlexColumn}

  .meta-title {
    margin-bottom: 1rem;
  }
  & > .meta {
    text-decoration: none;
    padding-left: 10px;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    &:hover {
      background-color: ${oc.gray[2]};
    }
    &::nth-child(1) {
      margin-top: 100px;
    }
  }
`;

const Styles = {
  SideBarContainer,
  SideBarHeader,
  SideBarContents,
  SideBarMeta,
};

export default Styles;
