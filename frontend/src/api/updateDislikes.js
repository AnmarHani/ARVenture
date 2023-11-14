async function updateDislikes(favourite_id, dislikes) {
    const response = await fetch(`https://arventure-backend-dev-aezx.1.sg-1.fl0.io/favourite/${favourite_id}/dislikes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dislikes:dislikes }),
    });
  
    const result = await response.json();
    return result.message;
  }
  
  export default updateDislikes;