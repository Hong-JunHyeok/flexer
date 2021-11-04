import React from "react";
import { useRecoilValue } from "recoil";
import { formattedWalletState } from "Store/Wallet";
import Styles from "./Styles";

const Wallet: React.FunctionComponent = () => {
  const walletAmount = useRecoilValue(formattedWalletState);

  return (
    <React.Fragment>
      <Styles.WalletContainer>
        <h1>현재 나의 금액</h1>
        <Styles.WalletAmount>{walletAmount}</Styles.WalletAmount>
      </Styles.WalletContainer>
    </React.Fragment>
  );
};

export default Wallet;
