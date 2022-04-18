export const apiConect = async (path: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/${path}`);
    console.log(response);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const num: string[] = await response.json();
    return num
};