import { ProductsListResponse } from "../models/ProductsListResponse";
import { Status } from "../models/status";
import { Tile } from "../Tile";
import { Wrapper } from "./styled";

//zrób generyczny component dla allProducts List
interface props {
  products: ProductsListResponse[];
}

export const ProductsList: React.FC<props> = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <Tile product={product} />
      ))}
    </Wrapper>
  );
};
