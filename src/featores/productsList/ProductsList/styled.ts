import styled from "styled-components";


export const Wrapper = styled.ul`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const Product = styled.li`
  width: 400px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: blue;
`;