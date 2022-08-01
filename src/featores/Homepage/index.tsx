import { TopBar } from "../../common/topBar/TopBar";
import { AllProductsList } from "./AllProducts";

export const Homepage: React.FC = () => {
  return (
    <>
      <TopBar />
      <AllProductsList />
    </>
  );
};
