import {useDispatch, useSelector} from "react-redux";
import {fetchList, selectList} from "../productsSlice";
import {useEffect} from "react";

export const ProductsList: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectList);

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    return (
        <>
            {products &&
                products.map(({
                                  id,
                                  title,
                                  price,
                                  category,
                                  description,
                                  image,
                              }) => (
                    <div key={id}>
                        <span>{id}</span>
                        <span>{title}</span>
                        <span>{price}</span>
                        <span>{category}</span>
                        <span>{description}</span>
                        <span>{image}</span>
                    </div>

                ))}
        </>
    )
};