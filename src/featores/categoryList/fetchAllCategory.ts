import apiConnect from "../../common/apiConnect";
import { ProductsListResponse } from "../../common/models/ProductsListResponse";

export async function fetchAllCategory() {
  try {
        const query: string = window.location.hash.substr(11);
        const data1 = await apiConnect.get<ProductsListResponse[]>(
          `products/category/${query}`,
      );
      return data1.data;
  } catch (error) {
      const errorText: string = "Oops something went wrong...";
      return errorText;
  }
}