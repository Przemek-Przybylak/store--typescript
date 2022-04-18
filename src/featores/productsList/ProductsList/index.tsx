import {useDispatch, useSelector} from "react-redux";
import {fetchList, selectList} from "../productsSlice";
import {useEffect} from "react";


export const ProductsList: React.FC = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const products = useSelector(selectList);

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    return (
        <div>
            {products && products.map(({id, title}) => (
                    <>
                <span>
                    {title}
                </span>
                        <span>
            {id}
                </span>
                    </>
                )
            )}
        </div>
    )
}