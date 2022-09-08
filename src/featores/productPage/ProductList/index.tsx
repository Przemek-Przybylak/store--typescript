import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tile } from "../../../common/Tile";
import { fetchProductDetails, selectProduct } from "../productSlice";

export const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProductDetails());
  }, []);
  return (
    <>
      <Tile products={product} categoryPage={false} />
    </>
  );
};
