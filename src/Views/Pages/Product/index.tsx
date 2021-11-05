import React from "react";
import PageLayout from "Views/Components/Common/PageLayout";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { viewProductState } from "Store/Product";

const ProductPage: React.FunctionComponent = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useRecoilValue(viewProductState(productId));

  if (!product) {
    return (
      <PageLayout>
        <h1>찾으시는 물건이 없습니다.</h1>
      </PageLayout>
    );
  }

  return (
    <React.Fragment>
      <PageLayout>
        <h1>{product.product_name}</h1>
        <img src={product.product_image} alt="" />
        <p>{product.product_description}</p>
        <span>{product.product_price}</span>
      </PageLayout>
    </React.Fragment>
  );
};

export default ProductPage;
