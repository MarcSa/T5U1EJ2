export const useGetData = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failure at obtaining data');
    }
    return response.json();
};
