import styled from "styled-components";
import { theme } from "../../../../core/theme";

export const Wrapper = styled.div`
  max-width: 700px;
`;

export const Input = styled.input`
  border: none;
  outline: 1px solid ${theme.color.macaroniAndCheese};
  padding: 4px 10px 4px 15px;
  border-radius: 20px;
  font-size: 20px;
  color:  ${theme.color.oceanGreen} !important;

  :hover{
    outline: 2px solid ${theme.color.macaroniAndCheese};
  }

  :focus{
    outline: 2px solid ${theme.color.macaroniAndCheese};
  }
`;