import ApiConnect from "../../apiConnect";
import {CategoriesResponse} from "../models/categoriesResponse";


export async function fetchCategories() {
    try {
        const data1 = await ApiConnect.get<CategoriesResponse[]>(
            `products/categories`,
        );
        return data1.data;
    } catch (error) {
        const errorText: string = "Oops something went wrong...";
        return errorText;
    }
}