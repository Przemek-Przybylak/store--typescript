import {useDispatch, useSelector} from "react-redux";
import {fetchList, selectList} from "../productsSlice";
import {useEffect} from "react";
import {useAppDispatch} from "../../../core/store";

export const ProductsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const products = useSelector(selectList);

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    return (
        <div>

        </div>
    )
}