import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList, selectList } from "../categorySlice";

export const CategoriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectList);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);
  return <>category</>;
};
