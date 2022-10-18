import styled from "styled-components";
import { theme } from "../../../core/theme";

export const Wrapper = styled.div`
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: ${theme.color.white};
  color: ${theme.color.macaroniAndCheese};
  top: 0px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    padding: 5px 5px 0;
  }
`;

export const RightSide = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;