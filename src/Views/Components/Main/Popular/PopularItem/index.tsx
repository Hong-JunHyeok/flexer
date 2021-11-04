import React from "react";
import { Product } from "Types/Product";

const PopularItem: React.FunctionComponent<Product> = ({
  product_name,
  product_description,
  product_image,
  product_price,
  product_sale,
}) => {
  return (
    <React.Fragment>
      <h1>{product_name}</h1>
    </React.Fragment>
  );
};

export default PopularItem;
