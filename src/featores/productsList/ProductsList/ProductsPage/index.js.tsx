import {Image, Product} from "../styled";
import {ProductsListResponse} from "../../models/ProductsListResponse";

interface props {
    id: number,
    category: string,
    image: string
}

export const ProductsPage: React.FC<props> = ({id, category, image}) => {
    const onMouseOver = () => {

    }

    return (
        <div key={id}>
            <Product>
                <Image title={category} onMouseOver={onMouseOver} src={image}/>
            </Product>
        </div>
    )
}