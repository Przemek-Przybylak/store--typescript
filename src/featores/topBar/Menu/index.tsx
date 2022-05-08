import React from "react";
import {CategoriesResponse} from "../models/categoriesResponse";

interface props {
    categories: CategoriesResponse[],
}

export const Menu: React.FC<props> = ({categories}) => {
  return(
      <>
          <div>{categories}</div>
      </>
  )
}