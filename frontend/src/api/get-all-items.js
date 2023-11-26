import { API_URL } from "./api";


async function getAllItems(url=API_URL) {
  const response = await fetch(`${url}/items`)
  const result = await response.json();
  return result.items;
}

export default getAllItems;