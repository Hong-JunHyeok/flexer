import React from "react";
import { Product } from "Types/Product";
import Styles from "./Styles";
import omissionString from "Util/omissionString";

const PopularItem: React.FunctionComponent<Product> = ({
  product_name,
  product_description,
  product_image,
  product_price,
  product_sale,
}) => {
  return (
    <React.Fragment>
      <Styles.PopularItemContainer>
        <h1 className="name">{omissionString(product_name, 20)}</h1>
        <img className="image" src={product_image} alt="" />
        <strong className="price">{product_price} 원</strong>
        <p className="desc">{product_description}</p>
      </Styles.PopularItemContainer>
    </React.Fragment>
  );
};

export default PopularItem;
