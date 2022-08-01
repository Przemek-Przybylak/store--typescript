import apiConnect from "../../common/apiConnect";
import { ProductsListResponse } from "../../common/models/ProductsListResponse";

export async function fetchAllCategory() {
  try {console.log("działa")
        const query: string = window.location.hash.substr(11);
        console.log(query)
        const data1 = await apiConnect.get<ProductsListResponse[]>(
          `products/category/${query}`,
      );
      return data1.data;
  } catch (error) {
      const errorText: string = "Oops something went wrong...";
      return errorText;
  }
}