import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { changePathname, selectPath, selectPathname } from "../commonSlice";
import { ProductsListResponse } from "../models/ProductsListResponse";
import { StyledLink } from "../StyledLink";
import { Image, Product, TextField, Span } from "./styled";
interface props {
  product: ProductsListResponse;
}

export const Tile: React.FC<props> = ({ product }) => {
  const query: string = window.location.hash;
  const dispatch = useDispatch();
  const path = useSelector(selectPathname);

  useEffect(() => {
    dispatch(changePathname(query));
  }, [query]);

  return (
    <>
      {path.includes(`product`) ? (
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
      ) : path.includes(`basket`) ? (
        // better styles for it
        <Product verticalSmall key={product.id}>
          <Image src={product.image} />
          <TextField>
            <Span>{product.title}</Span>
            <Span>
              Price: <strong>{product.price}</strong>
            </Span>
            <Button
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </TextField>
        </Product>
      ) : (
        <StyledLink to={`/product:${product.id}`}>
          <Product key={product.id}>
            <Image src={product.image} />
            <span>{product.title}</span>
            <span></span>
            <span>{product.price} $</span>
          </Product>
        </StyledLink>
      )}
    </>
  );
};
