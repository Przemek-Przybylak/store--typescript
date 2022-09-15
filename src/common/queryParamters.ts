import {useHistory, useLocation} from "react-router";

export type Key = string;

export interface ReplaceParameters {
    key: string,
    value: string,
};

export const useQueryParameter = (key: Key)=> {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
};
 
export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({key, value}: ReplaceParameters) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        const newSearch = searchParams.toString();
        history.push(`${location.pathname}?${newSearch}`)
    };
};