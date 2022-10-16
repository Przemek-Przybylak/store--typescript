import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { changePath, selectPath } from "../../commonSlice";
import { StyledLink } from "../../StyledLink";
import { CategoriesResponse } from "../models/categoriesResponse";
import { Wrapper, Item, Logo, CategoriesFlex } from "./styled";

interface props {
  categoriesList: CategoriesResponse[];
}

export const Menu: React.FC<props> = ({ categoriesList }) => {
  const currentQuery: string = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePath(currentQuery));
  }, [currentQuery]);

  return (
    <>
      <Wrapper>
        <StyledLink to={`/`}>
          <Logo />
        </StyledLink>
        <CategoriesFlex>
          {categoriesList &&
            categoriesList.map((category) => (
              <Item>
                <StyledLink to={`/category:${category}`}>{category}</StyledLink>
              </Item>
            ))}
        </CategoriesFlex>
      </Wrapper>
    </>
  );
};
