import styled from "styled-components";
import { theme } from "../../../core/theme";
import { ReactComponent as logo } from "./pictures/logo.svg";

export const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Item = styled.li`
  padding: 0px 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
  letter-spacing: 1.5px;
  white-space: nowrap;
`;

export const Logo = styled(logo)`
height:30px;
fill: ${theme.color.macaroniAndCheese};
`