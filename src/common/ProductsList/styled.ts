import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap:20px;
  margin: 20px auto;
  list-style: none;
  padding: 20px;
  overflow-y: hidden;
  max-width: 1000px;
  align-items:center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    gap: 10px;
    margin: 10px auto;
    padding: 10px;
    max-width: 800px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 30px;
    margin: 10px auto;
    padding: 0;
    grid-template-columns: repeat(1, 1fr);
  }
`