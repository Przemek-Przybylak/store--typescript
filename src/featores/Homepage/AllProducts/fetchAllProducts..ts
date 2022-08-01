import ApiConnect from "../../../common/apiConnect";
import {ProductsListResponse} from "../../../common/models/ProductsListResponse";

export async function fetchAllProducts() {
    try {
        const data1 = await ApiConnect.get<ProductsListResponse[]>(
            `products/`,
        );
        return data1.data;
    } catch (error) {
        const errorText: string = "Oops something went wrong...";
        return errorText;
    }
}