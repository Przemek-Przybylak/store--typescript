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
      <Wrapper>
        {products instanceof Array && categoryPage ? (
          products.map(({ id, image, price, title }) => (
            <ItemWrapper>
              <StyledLink to={`/product:${id}`}>
                <Product key={id}>
                  <Image src={image} />
                  <span>{title}</span>
                  <span>{price} $</span>
                </Product>
              </StyledLink>
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
      </Wrapper>
    </>
  );
};
