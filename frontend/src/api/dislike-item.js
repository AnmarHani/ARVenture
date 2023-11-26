import { API_URL } from "./api";

async function updateDislikes(id, dislikes, url=API_URL) {
  const response = await fetch(`${url}/items/dislike/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dislikes: dislikes }),
  });

  const result = await response.json();
  return result.message;
}

export default updateDislikes;
