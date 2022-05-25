/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export const request = async (apiUrl) => fetch(apiUrl).then((response) => response.json());
