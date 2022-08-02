import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchList, selectList } from "./productsSlice";
import { Wrapper } from "./styled";
import { Tile } from "../../../common/Tile";

export const AllProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectList);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Tile products={products} />
      </Wrapper>
    </>
  );
};
