import styled from "styled-components";
import { theme } from "../../../core/theme";
import { ReactComponent as Basket } from "../pictures/basket.svg";

export const Wrapper = styled.div`
  margin: 0;
`;

export const BasketIcon = styled(Basket)`
  height: 31px;
  fill: ${theme.color.macaroniAndCheese};
  transition: 400ms;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    height: 15px;
  }

 

:hover{
  fill: ${theme.color.moonstoneBlue};
}
`