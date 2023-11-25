async function login(username, password) {
    const response = await fetch("https://arventure-backend-dev-aezx.1.sg-1.fl0.io/user/login", {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            "username": username,
            "password": password
        }), 
    });
    const result = await response.json();
    return result.user_id
}

export default login