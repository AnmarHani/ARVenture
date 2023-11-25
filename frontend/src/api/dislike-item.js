import { API_URL } from "./api";

async function updateDislikes(id, dislikes) {
  const response = await fetch(`${API_URL}/items/dislike/${id}`, {
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
