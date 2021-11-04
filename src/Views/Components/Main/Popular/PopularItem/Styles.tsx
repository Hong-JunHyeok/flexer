import styled from "@emotion/styled";
import oc from "open-color";

const PopularItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin-top: 1rem;
  cursor: pointer;
  .name {
    font-weight: bold;
    font-size: 24px;
    color: ${oc.black[1]};
  }
  .image {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

const Styles = {
  PopularItemContainer,
};

export default Styles;
