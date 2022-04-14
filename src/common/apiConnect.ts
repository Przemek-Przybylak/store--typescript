export const apiConect = async (path: string) => {
    const response = await fetch(`https://fakestoreapi.com/${path}`);
    console.log(response);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};