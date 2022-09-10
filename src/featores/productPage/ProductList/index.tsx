import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateChecker } from "../../../common/StateChecker";
import { Tile } from "../../../common/Tile";
import {
  fetchProductDetails,
  selectProduct,
  selectStatus,
} from "../productSlice";

export const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchProductDetails());
  }, []);
  return (
    <StateChecker status={status}>
      <Tile products={product} categoryPage={false} />
    </StateChecker>
  );
};
