import { useSelector } from "react-redux";
import { selectList } from "../../../common/commonSlice";
import { Tile } from "../../../common/Tile";

export const ShoppingBasketPage: React.FC = () => {
  const products = useSelector(selectList);
  console.log(products);

  return (
    <>
      {products.map((product) => (
        <Tile product={product} />
      ))}
    </>
  );
};
