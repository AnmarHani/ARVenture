import { API_URL } from "./api";


async function getAllItems() {
  const response = await fetch(`${API_URL}/items`)
  const result = await response.json();
  return result.items;
}

export default getAllItems;