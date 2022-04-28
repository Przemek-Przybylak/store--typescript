import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchList, selectList} from "../productsSlice";
import {Wrapper, Product, Image} from "./styled";
import {ProductsPage} from "./ProductsPage/index.js";

export const ProductsList: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectList);

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    return (
        <>
            <Wrapper>
                {products &&
                    products.map(({
                                      id,
                                      title,
                                      price,
                                      category,
                                      description,
                                      image,
                                  }) => (
                        <ProductsPage
                        id={id}
                        category={category}
                        image={image}
                        />
                    ))}
            </Wrapper>
        </>
    )
};