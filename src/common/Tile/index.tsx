import React from "react";
import { Button } from "../Button";
import { ProductsListResponse } from "../models/ProductsListResponse";
import { StyledLink } from "../StyledLink";
import { Image, Product, Wrapper, TextField, Span } from "./styled";
interface props {
  products: ProductsListResponse | ProductsListResponse[];
}
export const Tile: React.FC<props> = ({ products }) => {
  return (
    <>
      {products instanceof Array ? (
        <Wrapper>
          {products.map(({ id, image, price, title }) => (
            <StyledLink to={`/product:${id}`}>
              <Product key={id}>
                <Image src={image} />
                <span>{title}</span>
                <span>{price} $</span>
              </Product>
            </StyledLink>
          ))}
        </Wrapper>
      ) : products instanceof Object ? (
        <Product vertical key={products.id}>
          <Image src={products.image} />
          <TextField>
            <Span>
              <Span>{products.title}</Span>
            </Span>
            <Span>{products.description}</Span>
            <Span>Price: {products.price}</Span>
            <Button />
          </TextField>
        </Product>
      ) : (
        ""
      )}
    </>
  );
};
