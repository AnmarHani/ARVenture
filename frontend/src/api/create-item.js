import { API_URL } from "./api";

async function addFavorite(toolName, gameName) {
  const itemObject = {
    tool_name: toolName,
    game_name: gameName,
    likes: 0,
    dislikes: 0
  };

  const response = await fetch(`${API_URL}/items/create`, {
    method: 'POST',
    headers: {
      'token': localStorage.getItem("access_token"),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(itemObject)
  });

  const result = await response.json();
  return result.message;
}

export default addFavorite;
