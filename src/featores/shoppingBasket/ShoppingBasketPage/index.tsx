import { useSelector } from "react-redux";
import { selectList } from "../../../common/commonSlice";

export const ShoppingBasketPage: React.FC = () => {
  const products = useSelector(selectList);
  console.log(products);

  return (
    <>
      <div>
        {products.map(({ id, title, price, image, basketID }) => (
          <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{image}</div>
            <div>{basketID}</div>
          </div>
        ))}
      </div>
    </>
  );
};
