import { AllProductsList } from "../Homepage/AllProducts";
import { TopBar } from "../../common/topBar/TopBar/index.js.js";

export const CategoriesPage: React.FC = () => {
  return (
    <>
      <TopBar />
      <AllProductsList />
    </>
  );
};
