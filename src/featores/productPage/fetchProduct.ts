import apiConnect from "../../common/apiConnect";
import { ProductsListResponse } from "../../common/models/ProductsListResponse";

export async function fetchProduct() {
  try {
        const query: string = window.location.hash.substr(10);
        const data1 = await apiConnect.get<ProductsListResponse>(
          `products/${query}`,
      );
      return data1.data;
  } catch (error) {
      const errorText: string = "Oops something went wrong...";
      return errorText;
  }
};