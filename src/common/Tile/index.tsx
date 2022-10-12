import React from "react";
import { Button } from "../Button";
import { ProductsListResponse } from "../models/ProductsListResponse";
import { StyledLink } from "../StyledLink";
import { Image, Product, Wrapper, TextField, Span } from "./styled";
interface props {
  product: ProductsListResponse;
}

export const Tile: React.FC<props> = ({ product }) => {
  const query = window.location.hash;
  console.log(query);
  return (
    <>
      {!query.includes("basket") ? (
        <StyledLink to={`/product:${product.id}`}>
          <Product key={product.id}>
            <Image src={product.image} />
            <span>{product.title}</span>
            <span>{product.price} $</span>
          </Product>
        </StyledLink>
      ) : query.includes("product") ? (
        <Product vertical key={product.id}>
          <Image src={product.image} />
          <TextField>
            <Span>
              <Span>{product.title}</Span>
            </Span>
            <Span>{product.description}</Span>
            <Span>Price: {product.price}</Span>
            <Button
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </TextField>
        </Product>
      ) : query.includes("basket") ? (
        <Product>product</Product>
      ) : (
        ""
      )}
    </>
  );
};
