import React from "react";
import {Menu} from "../Menu";
import {Search} from "../search/Search";
import {Wrapper} from "./styled";

export const TopBar: React.FC = () => {
    return(
        <Wrapper>
            <div>
                <Menu />
            </div>
            <div>
                <Search />
            </div>
        </Wrapper>
    )
}