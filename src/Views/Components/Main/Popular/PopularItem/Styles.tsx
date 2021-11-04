import styled from "@emotion/styled";
import oc from "open-color";

const PopularItemContainer = styled.div`
  position: relative;
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
  .price {
    font-size: 24px;
    font-weight: bold;
    color: ${oc.yellow[8]};
  }
  .original-price {
    font-size: 14px;
    font-weight: lighter;
    text-decoration: line-through;
  }
  .sale-price {
    font-size: 24px;
    font-weight: bold;
    color: ${oc.yellow[8]};
  }
  .desc {
    position: absolute;
    top: 24px;
    left: 0;
    width: 20rem;
    height: 240px;
    padding: 1rem;
    border-radius: 10px;
    opacity: 0;
    transition: ease-in-out 0.2s;
    &:hover {
      opacity: 1;
      color: ${oc.white};
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(20px);
    }
  }
`;

const Styles = {
  PopularItemContainer,
};

export default Styles;
