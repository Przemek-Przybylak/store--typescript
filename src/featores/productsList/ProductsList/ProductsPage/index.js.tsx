import { Image, Product } from "../../../Homepage/AllProducts/styled";

interface props {
  id: number;
  category: string;
  image: string;
}

export const ProductsPage: React.FC<props> = ({ id, category, image }) => {
  return (
    <div key={id}>
      <Product>
        <Image title={category} src={image} />
      </Product>
    </div>
  );
};
