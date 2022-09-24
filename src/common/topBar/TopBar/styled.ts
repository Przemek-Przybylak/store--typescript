import styled from "styled-components";
import { theme } from "../../../core/theme";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: ${theme.color.white};
  color: ${theme.color.macaroniAndCheese};
  top: 0px;
  z-index: 1;
`;