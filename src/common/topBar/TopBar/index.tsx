import React, { useEffect } from "react";
import { Menu } from "../Menu";
import { Search } from "../search/Search";
import { Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchList, selectList } from "./TopBarSlice";

export const TopBar: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectList);
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <Wrapper>
      {categories && <Menu categoriesList={categories} />}
      <Search />
    </Wrapper>
  );
};
