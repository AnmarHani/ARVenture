import { API_URL } from "./api";


async function updateLikes(id, likes) {
    const response = await fetch(`${API_URL}/items/like/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes }),
    });
  
    const result = await response.json();
    return result.message;
  }
  
  export default updateLikes;