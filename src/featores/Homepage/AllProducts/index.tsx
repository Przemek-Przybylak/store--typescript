import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchList, selectList } from "./productsSlice";
import { Wrapper } from "./styled";
import { ProductsPage } from "../../productsList/ProductsList/ProductsPage/index.js";

export const AllProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectList);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        {products &&
          products.map(({ id, category, image }) => (
            <ProductsPage id={id} category={category} image={image} />
          ))}
      </Wrapper>
    </>
  );
};
