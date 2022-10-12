import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPath } from "../../../common/commonSlice";
import { ProductsList } from "../../../common/ProductsList";
import { useQueryParameter } from "../../../common/queryParamters";
import { StateChecker } from "../../../common/StateChecker";
import { RootState } from "../../../core/store";
import { fetchList, selectListByQuery, selectStatus } from "../categorySlice";

export const CategoryList: React.FC = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter("search");
  const products = useSelector((state: RootState) =>
    selectListByQuery(state, query)
  );
  const status = useSelector(selectStatus);
  const stateQuery = useSelector(selectPath);

  useEffect(() => {
    dispatch(fetchList());
  }, [stateQuery]);
  return (
    <StateChecker status={status}>
      <ProductsList products={products} />
    </StateChecker>
  );
};
