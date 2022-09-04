import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPath } from "../../../common/commonSlice";
import { Tile } from "../../../common/Tile";
import { fetchList, selectList } from "../categorySlice";

export const CategoryList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectList);
  const stateQuery = useSelector(selectPath);

  useEffect(() => {
    dispatch(fetchList());
  }, [stateQuery]);
  return (
    <>
      <Tile products={products} categoryPage={true} />
    </>
  );
};
