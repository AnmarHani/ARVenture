async function updateLikes(favourite_id, likes) {
    const response = await fetch(`https://arventure-backend-dev-aezx.1.sg-1.fl0.io/i/${favourite_id}/likes`, {
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