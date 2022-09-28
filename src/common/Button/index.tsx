import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addProduct } from "../commonSlice";
import { basketProduct } from "../models/basket";
import { Wrapper } from "./styled";

export const Button: React.FC<basketProduct> = ({
  id,
  title,
  price,
  image,
  basketID,
}) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      addProduct({
        id,
        title,
        price,
        image,
        basketID,
      })
    );
  };

  return (
    <>
      <Wrapper onClick={onClick}>buy</Wrapper>
    </>
  );
};
