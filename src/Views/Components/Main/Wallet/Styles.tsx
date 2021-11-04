import styled from "@emotion/styled";
import oc from "open-color";

const WalletContainer = styled.div`
  padding: 2rem;
  color: ${oc.white};
  background: linear-gradient(
    90deg,
    rgb(255, 163, 163) 20%,
    rgb(232, 123, 255) 50%,
    rgb(133, 173, 255) 90%
  );
  border-radius: 20px;
  height: 100px;
`;

const WalletAmount = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: end;
`;

const Styles = {
  WalletContainer,
  WalletAmount,
};

export default Styles;
