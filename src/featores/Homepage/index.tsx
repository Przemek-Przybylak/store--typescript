import { TopBar } from "../../common/topBar/TopBar/index.js";
import { AllProductsList } from "./AllProducts";

export const Homepage: React.FC = () => {
  return (
    <>
      <TopBar />
      <AllProductsList />
    </>
  );
};
