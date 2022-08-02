import styled from "styled-components";

export const Product = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 400px;
  height: 300px;
  transition: 300ms;
  background-color: inherit;

  &:hover {
    transform: scale(1.1);
  }
`;