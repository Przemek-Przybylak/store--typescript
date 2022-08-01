import React from "react";
import { StyledLink } from "../../StyledLink";
import { CategoriesResponse } from "../models/categoriesResponse";
import { Wrapper, Item } from "./styled";

interface props {
  categoriesList: CategoriesResponse[];
}

export const Menu: React.FC<props> = ({ categoriesList }) => {
  return (
    <>
      <Wrapper>
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
