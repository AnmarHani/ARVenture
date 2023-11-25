import { API_URL } from "./api";


async function login(username, password) {
    const response = await fetch(`${API_URL}/user/login`, {
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
    return result.access_token
}

export default login