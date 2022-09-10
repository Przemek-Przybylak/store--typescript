import { ReactElement } from "react";
import { Status } from "../models/status";
import { StateContent, Wrapper } from "./styled";
interface props {
  children: React.FC | ReactElement;
  status: Status;
}
export const StateChecker: React.FC<props> = ({ children, status }) => {
  return (
    <>
      {status === "loading" ? (
        <Wrapper>
          <StateContent>Loading..</StateContent>
        </Wrapper>
      ) : status === "error" ? (
        <Wrapper>
          <StateContent>Oooopss... something went wrong</StateContent>
        </Wrapper>
      ) : (
        children
      )}
    </>
  );
};
