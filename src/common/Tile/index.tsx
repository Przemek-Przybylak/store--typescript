import React from "react";
import { ProductsListResponse } from "../models/ProductsListResponse";
import { Image, Product } from "./styled";
interface props {
  products: ProductsListResponse[];
}
export const Tile: React.FC<props> = ({ products }) => {
  return (
    <>
      {products &&
        products.map(({ id, category, image }) => (
          <Product key={id}>
            <Image title={category} src={image} />
          </Product>
        ))}
    </>
  );
};
