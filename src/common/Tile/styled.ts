import styled, { css } from "styled-components";
import { theme } from "../../core/theme";

export const Product = styled.li<{ vertical?: boolean, verticalSmall?: boolean}>`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${theme.color.macaroniAndCheese};
  border-radius: 10px;
  height: 400px;
  transition: 300ms;
  color: ${theme.color.eerieBlack};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    padding: 5px;
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    border: none;
  }

  :hover{
    border: 1px solid ${theme.color.oceanGreen};
    color:${theme.color.oceanGreen};
    transform: scale(1.1);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    border: none;
    transform: none;
  }
  }

  ${({vertical}) => vertical && css`
  flex-direction: row;
  gap: 100px;
  padding: 30px;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 10px;
    padding: 10px 0;
  }

  :hover{
    transform: none;
    color:${theme.color.eerieBlack};
    border: none;
  }`}

  ${({verticalSmall}) => verticalSmall && css`
  flex-direction: row;
  gap: 20px;
  padding: 30px;
  height: 200px;
  border: none;

  :hover{
    transform: none;
    color:${theme.color.eerieBlack};
    border: none;
  }
`}
`


export const TextField = styled.div`
  display: flex;
  height:100% ;
  flex-direction: column;
  justify-content: space-between;
`;

export const Span = styled.span`
  display: block;
  margin:   0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-size: 13px;
    padding: 3px 0;
  }
`;

export const Image = styled.img`
  margin-bottom: 10px;
  max-width: 250px;
  height: 90%;
  background-color: inherit;
`;