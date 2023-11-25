async function addFavorite(user_id, tool_name, game_name) {
  const fav_item_object = {
    tool_name: tool_name,
    game_name: game_name,
    likes: 0,
    dislikes: 0,
    user_id: user_id
  };

  const response = await fetch(`https://arventure-backend-dev-aezx.1.sg-1.fl0.io/favourite/${user_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fav_item_object)
  });

  const result = await response.json();
  return result.message;
}

export default addFavorite;
