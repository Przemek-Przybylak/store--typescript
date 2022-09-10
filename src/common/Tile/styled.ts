import styled, { css } from "styled-components";


export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  overflow-y: hidden;
  max-width: 100%;
`;

export const Product = styled.li<{ vertical?: boolean}>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

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
  margin-bottom: 20px;
  max-width: 400px;
  height: 300px;
  transition: 300ms;
  background-color: inherit;

  &:hover {
    transform: scale(1.1);
  }
`;