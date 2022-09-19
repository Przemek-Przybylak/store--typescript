import React, { useEffect } from "react";
import { Menu } from "../Menu";
import { Search } from "../search/Search";
import { Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchList, selectList } from "./TopBarSlice";
import { useLocation, useParams } from "react-router";
import { Button } from "../../Button";

export const TopBar: React.FC = () => {
  const dispatch = useDispatch();
  const query = useLocation();
  const categories = useSelector(selectList);
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <Wrapper>
      {categories && <Menu categoriesList={categories} />}
      {query.pathname.includes(`product`) ? <Button /> : <Search />}
    </Wrapper>
  );
};
