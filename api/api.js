/**
 *
 * @param path
 * @param body {RequestInit}
 * @return {Promise<Object>}
 */
export default async function (path, body = null) {
    if (!body) {
        body = {
            method: "GET"
        };
    }
    const data = await useFetch("https://backend.letostyle.ru/" + path, body);
    return JSON.parse(data.data.value);
}