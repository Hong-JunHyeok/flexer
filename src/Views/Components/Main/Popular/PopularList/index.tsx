import React from "react";
import { useRecoilValue } from "recoil";
import { productsState } from "Store/Product";
import { PopularItem } from "..";
import Styles from "./Styles";

const PopularList: React.FunctionComponent = () => {
  const products = useRecoilValue(productsState);

  const popularProducst = products.map((product) => (
    <PopularItem key={product.id} {...product} />
  ));

  return (
    <React.Fragment>
      <Styles.PopularListContainer>
        {popularProducst}
      </Styles.PopularListContainer>
    </React.Fragment>
  );
};

export default PopularList;
