import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchList, selectList, selectStatus } from "./productsSlice";
import { Tile } from "../../../common/Tile";
import { StateChecker } from "../../../common/StateChecker";

export const AllProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectList);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <>
      <StateChecker status={status}>
        <Tile products={products} categoryPage={false} />
      </StateChecker>
    </>
  );
};
