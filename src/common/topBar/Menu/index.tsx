import React from "react";
import { StyledLink } from "../../StyledLink";
import { CategoriesResponse } from "../models/categoriesResponse";
import { Wrapper, Item, Logo } from "./styled";

interface props {
  categoriesList: CategoriesResponse[];
}

export const Menu: React.FC<props> = ({ categoriesList }) => {
  return (
    <>
      <Wrapper>
        <StyledLink to={`/`}>
          <Logo />
        </StyledLink>
        {categoriesList &&
          categoriesList.map((category) => (
            <Item>
              <StyledLink to={`/category:${category}`}>{category}</StyledLink>
            </Item>
          ))}
      </Wrapper>
    </>
  );
};
