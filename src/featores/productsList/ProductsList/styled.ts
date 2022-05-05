import styled from "styled-components";

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  overflow-y: hidden;
`;

export const Product = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 400px;
  height: 300px;
`;