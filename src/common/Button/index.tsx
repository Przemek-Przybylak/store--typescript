import { useDispatch } from "react-redux";
import { addProduct } from "../commonSlice";
import { ProductsListResponse } from "../models/ProductsListResponse";
import { Wrapper } from "./styled";
interface props {
  product: ProductsListResponse | ProductsListResponse[];
}

export const Button: React.FC<props> = ({ product }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <>
      <Wrapper onClick={onClick}>buy</Wrapper>
    </>
  );
};
