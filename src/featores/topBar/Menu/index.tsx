import React from "react";
import {CategoriesResponse} from "../models/categoriesResponse";
import {Wrapper, Item} from "./styled";

interface props {
    categoriesList: CategoriesResponse[],
}

export const Menu: React.FC<props> = ({categoriesList}) => {
    return (
        <>
            <Wrapper>{categoriesList &&
                categoriesList.map((categories) => (
                    <Item>
                        {categories}
                    </Item>
                ))}
            </Wrapper>
        </>
    )
}