import { API_URL } from "./api";


async function register(username, email ,password, country) {
    console.log(API_URL)
    const response = await fetch(`${API_URL}/user/register`, {
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