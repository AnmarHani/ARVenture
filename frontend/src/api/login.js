import { API_URL } from "./api";

async function login(username, password, url = API_URL) {
  if (typeof password !== "string")
    return "Please Enter String Password";
  if (typeof username !== "string")
    return "Please Enter String Username";
  if (username === "") return "Empty Username";
  if (password === "") return "Empty Password";
  if (password.length < 4) return "Invalid Password (less than 4 characters)";

  const response = await fetch(`${url}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const result = await response.json();
  return result.access_token;
}

export default login;
