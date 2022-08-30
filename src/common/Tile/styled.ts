import styled from "styled-components";

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  overflow-y: hidden;
  width: 100%;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
`;


export const Product = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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