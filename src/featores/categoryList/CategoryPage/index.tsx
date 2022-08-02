import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tile } from "../../../common/Tile";
import { fetchList, selectList } from "../categorySlice";

export const CategoryPage: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectList);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);
  return (
    <>
      <Tile products={products} />
    </>
  );
};
