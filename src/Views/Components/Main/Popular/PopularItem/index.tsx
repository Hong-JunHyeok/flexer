import React, { useCallback } from "react";
import { Product } from "Types/Product";
import Styles from "./Styles";
import omissionString from "Util/omissionString";
import { useHistory } from "react-router-dom";
import useLinkPush from "Hooks/useLinkPush";

const PopularItem: React.FunctionComponent<Product> = ({
  id,
  product_name,
  product_description,
  product_image,
  product_price,
  product_sale,
}) => {
  const handlePushToProductPage = useLinkPush(`/product/${id}`);

  return (
    <React.Fragment>
      <Styles.PopularItemContainer onClick={handlePushToProductPage}>
        <h1 className="name">{omissionString(product_name, 20)}</h1>
        <img className="image" src={product_image} alt="" />
        {product_sale === 0 ? (
          <React.Fragment>
            <em className="original-price">{product_price} 원</em>
            <strong className="sale-price"></strong>
          </React.Fragment>
        ) : (
          <strong className="price">{product_price} 원</strong>
        )}
        <p className="desc">{omissionString(product_description, 100)}</p>
      </Styles.PopularItemContainer>
    </React.Fragment>
  );
};

export default PopularItem;
