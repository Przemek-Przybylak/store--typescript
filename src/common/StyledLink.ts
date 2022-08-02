import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    transition: 300ms;

    &:hover {
        color: #888;
    }
`;