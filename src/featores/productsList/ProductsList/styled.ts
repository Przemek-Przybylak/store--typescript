import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
`;

export const Product = styled.li`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 400px;
  height: 300px;
`;