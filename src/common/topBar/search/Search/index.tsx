import React from "react";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../queryParamters";
import { Input, Wrapper } from "./styled";

export const Search: React.FC = () => {
  const query = useQueryParameter("search");
  const placeholder = "Search product...";
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    replaceQueryParameter({
      key: "search",
      value: event.target.value.trim() !== "" ? event.target.value : "",
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder={placeholder}
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
