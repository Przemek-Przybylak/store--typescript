import styled, { css } from "styled-components";
import { theme } from "../../core/theme";


export const Wrapper = styled.ul`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap:20px;
  margin: 20px auto;
  list-style: none;
  padding: 0;
  overflow-y: hidden;
  max-width: 1000px;
  align-items:center;
`;

export const Product = styled.li<{ vertical?: boolean}>`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${theme.color.lightGrey};
  border-radius: 10px;
  height: 400px;

  :hover{
    border: 1px solid ${theme.color.eerieBlack};
  }

  ${({vertical}) => vertical && css`
  flex-direction: row;
  gap: 100px;
  padding: 30px;
`}
`;

export const TextField = styled.article`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  display: block;
  margin: 40px 0;
`;

export const Image = styled.img`
  margin-bottom: 10px;
  max-width: 250px;
  height: 300px;
  transition: 300ms;
  background-color: inherit;

  &:hover {
    transform: scale(1.1);
  }
`;