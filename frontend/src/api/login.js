async function login(username, password) {
    const response = await fetch("https://arventure-backend-dev-aezx.1.sg-1.fl0.io/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            "username": username,
            "password": password
        }), // body data type must match "Content-Type" header
    });
    const result = await response.json();
    return result.user_id
}

export default login