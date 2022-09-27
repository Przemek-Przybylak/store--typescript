import styled from "styled-components";
import { theme } from "../../core/theme";

export const Wrapper = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${theme.color.macaroniAndCheese};
  max-width: 250px;
  margin: 0;
  padding: 10px;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2;
  color: white;
  transition: 400ms;

  :hover{
    background-color: ${theme.color.oceanGreen};
  }
`;