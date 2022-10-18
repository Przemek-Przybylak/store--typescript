import styled from "styled-components";
import { theme } from "../../../core/theme";
import { ReactComponent as logo } from "./pictures/logo.svg";
import { ReactComponent as menu } from "./pictures/menu.svg";

export const Wrapper = styled.ul`
  max-width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CategoriesFlex = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Item = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
  letter-spacing: 1.5px;
  white-space: nowrap;
  padding: 0 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    font-size: 15px;
    padding: 0 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Logo = styled(logo)`
height:30px;
fill: ${theme.color.macaroniAndCheese};
transition: 300ms;

@media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    height: 15px;
  }

:hover {
  fill: ${theme.color.moonstoneBlue};
}
`

export const MenuPicture = styled(menu)`
height:30px;
fill: ${theme.color.macaroniAndCheese};
transition: 300ms;

@media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    height: 15px;
  }

:hover {
  fill: ${theme.color.moonstoneBlue};
}
`