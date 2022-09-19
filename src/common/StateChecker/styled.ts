import styled, { keyframes } from "styled-components";

export const ring = keyframes`
0%{
  transform: rotate(0deg);
  box-shadow:1px 5px 2px #e65c00;
}
50%{
  transform: rotate(180deg);
  box-shadow:1px 5px 2px #18b201;
}
100%{
  transform: rotate(360deg);
  box-shadow:1px 5px 2px #0456c8;
}
`

export const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  font-family: montserrat;
  background: inherit;
  color: black;
`;
export const StateContent = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;
export const Ring = styled.div`
position: absolute;
width: 200px;
height: 200px;
border-radius: 50%;
animation: ${ring} 1s linear infinite;

&::before{
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow:0 0 5px rgba(255,255,255,.3);
}
`
export const Span = styled.span`
  color: #737373;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 200px;
`