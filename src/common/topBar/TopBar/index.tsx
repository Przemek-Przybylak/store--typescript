import React, { useEffect } from "react";
import { Menu } from "../Menu";
import { Search } from "../search/Search";
import { RightSide, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchList, selectList } from "./TopBarSlice";
import { useLocation, useParams } from "react-router";
import { Button } from "../../Button";
import { ShoppingBasket } from "../../../featores/shoppingBasket/ShoppingBasket";

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
      <RightSide>
        {query.pathname.includes(`product`) ? <Button /> : <Search />}
        <ShoppingBasket />
      </RightSide>
    </Wrapper>
  );
};
