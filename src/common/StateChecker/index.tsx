import { ReactElement } from "react";
import { Status } from "../models/status";
import { Ring, Span, StateContent, Wrapper } from "./styled";
interface props {
  children: React.FC | ReactElement;
  status: Status;
}
export const StateChecker: React.FC<props> = ({ children, status }) => {
  return (
    <>
      {status === "loading" ? (
        <Wrapper>
          <StateContent>
            <Ring></Ring>
            <Span>Loading...</Span>
          </StateContent>
        </Wrapper>
      ) : status === "error" ? (
        <Wrapper>
          <StateContent>
            <Span>http://localhost:3001/store--typescript#</Span>
          </StateContent>
        </Wrapper>
      ) : (
        children
      )}
    </>
  );
};
