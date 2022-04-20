export const apiConect = async (path: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/${path}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};