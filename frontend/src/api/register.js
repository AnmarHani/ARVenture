async function register(username, email ,password, country) {
    const response = await fetch("https://arventure-backend-dev-aezx.1.sg-1.fl0.io/register", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            "username": username,
            "email":email,
            "password": password,
            "country": country
        }), // body data type must match "Content-Type" header
    });
    const result = await response.json();
    return result.message
}

export default register