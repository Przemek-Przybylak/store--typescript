import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addProduct } from "../commonSlice";
import { Wrapper } from "./styled";
interface props {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const Button: React.FC<props> = ({ id, title, price, image }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    const basketID = nanoid();

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
