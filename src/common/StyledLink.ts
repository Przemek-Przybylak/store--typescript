import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../core/theme";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    transition: 400ms;

    :hover{
    color:${theme.color.moonstoneBlue};
  }
`;