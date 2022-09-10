import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPath } from "../../../common/commonSlice";
import { StateChecker } from "../../../common/StateChecker";
import { Tile } from "../../../common/Tile";
import { fetchList, selectList, selectStatus } from "../categorySlice";

export const CategoryList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectList);
  const status = useSelector(selectStatus);
  const stateQuery = useSelector(selectPath);

  useEffect(() => {
    dispatch(fetchList());
  }, [stateQuery]);
  return (
    <>
      <StateChecker status={status}>
        <Tile products={products} categoryPage={true} />
      </StateChecker>
    </>
  );
};
