import React from "react";
import { ProductsListResponse } from "../models/ProductsListResponse";
import { StyledLink } from "../StyledLink";
import { Image, ItemWrapper, Product, Wrapper } from "./styled";
interface props {
  products: ProductsListResponse | ProductsListResponse[];
  categoryPage: boolean;
}
export const Tile: React.FC<props> = ({ products, categoryPage }) => {
  return (
    <>
      {products instanceof Array && categoryPage ? (
        products.map(({ id, image, price, title }) => (
          <ItemWrapper>
            <Product key={id}>
              <StyledLink to={`/product:${id}`}>
                <Image src={image} />
                <span>{title}</span>
                <span>{price} $</span>
              </StyledLink>
            </Product>
          </ItemWrapper>
        ))
      ) : products instanceof Array ? (
        products.map(({ id, image, category }) => (
          <Product key={id}>
            <StyledLink to={`/category:${category}`}>
              <Image src={image} />
            </StyledLink>
          </Product>
        ))
      ) : products instanceof Object ? (
        <Product key={products.id}>
          <Image src={products.image} />
          <span>{products.title}</span>
          <span>{products.id}</span>
          <span>{products.description}</span>
        </Product>
      ) : (
        ""
      )}
    </>
  );
};
