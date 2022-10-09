import { StyledLink } from "../../../common/StyledLink";
import { BasketIcon } from "./styled";

export const ShoppingBasket: React.FC = () => {
  return (
    <>
      <StyledLink to={"/basket"}>
        <BasketIcon />
      </StyledLink>
    </>
  );
};
