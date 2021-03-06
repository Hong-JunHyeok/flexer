import styled from "@emotion/styled";
import { generageFakeProduct } from "Data/PopularsData";
import { Fragment, FunctionComponent, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { productsState } from "Store/Product";
import { PopularList } from "Views/Components/Main/Popular";
import Wallet from "Views/Components/Main/Wallet";
import PageLayout from "../../Components/Common/PageLayout";

const MainPage: FunctionComponent = () => {
  const setProducts = useSetRecoilState(productsState);

  useEffect(() => {
    setProducts(generageFakeProduct(100));
  }, [setProducts]);

  return (
    <Fragment>
      <PageLayout>
        <WalletLayout className="wallet">
          <h1 className="wallet-title">π λ΄ μ§κ°</h1>
          <Wallet />
        </WalletLayout>
        <ShopLayout className="popular">
          <h1 className="shop-title">π μΈκΈ° μν</h1>
          <PopularList />
        </ShopLayout>
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

const ShopLayout = styled.section`
  .shop-title {
    font-weight: bold;
    font-size: 22px;
    margin: 3rem 0 1rem 0;
  }
`;

export default MainPage;
