import styled from "@emotion/styled";
import { Fragment, FunctionComponent } from "react";
import Wallet from "Views/Components/Main/Wallet";
import PageLayout from "../../Components/Common/PageLayout";

const MainPage: FunctionComponent = () => {
  return (
    <Fragment>
      <PageLayout>
        <WalletLayout>
          <h1 className="wallet-title">내 지갑</h1>
          <Wallet />
        </WalletLayout>
      </PageLayout>
    </Fragment>
  );
};

const WalletLayout = styled.section`
  .wallet-title {
    font-weight: bold;
    font-size: 22px;
    margin: 15px 0;
  }
`;

export default MainPage;
