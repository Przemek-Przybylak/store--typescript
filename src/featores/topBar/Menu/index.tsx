import React from "react";
import {CategoriesResponse} from "../models/categoriesResponse";
import {Wrapper} from "./styled";

interface props {
    categories: CategoriesResponse[],
}

export const Menu: React.FC<props> = ({categories}) => {
  return(
      <>
          <Wrapper>{categories}</Wrapper>
      </>
  )
}