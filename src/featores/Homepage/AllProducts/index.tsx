import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchList, selectListByQuery, selectStatus } from "./productsSlice";
import { Tile } from "../../../common/Tile";
import { StateChecker } from "../../../common/StateChecker";
import { useQueryParameter } from "../../../common/queryParamters";
import { RootState } from "../../../core/store";

export const AllProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter("search");
  const products = useSelector((state: RootState) =>
    selectListByQuery(state, query)
  );
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
