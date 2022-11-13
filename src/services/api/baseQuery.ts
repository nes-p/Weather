export const baseFetch = async (requestURL: string) => {
  try {
    const response = await fetch(requestURL);
    if (!response.ok) throw response;
    return await response.json();
  } catch (error) {
    throw error;
  }
};
