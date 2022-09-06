import React from "react";
import { ProductsListResponse } from "../models/ProductsListResponse";
import { StyledLink } from "../StyledLink";
import { Image, ItemWrapper, Product, Wrapper } from "./styled";
interface props {
  products: ProductsListResponse[];
  categoryPage: boolean;
}
export const Tile: React.FC<props> = ({ products, categoryPage }) => {
  return (
    <>
      <Wrapper>
        {products && categoryPage
          ? products.map(({ id, image, price, title }) => (
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
          : products.map(({ id, image, category }) => (
              <Product key={id}>
                <StyledLink to={`/category:${category}`}>
                  <Image src={image} />
                </StyledLink>
              </Product>
            ))}
      </Wrapper>
    </>
  );
};
