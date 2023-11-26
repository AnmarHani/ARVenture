import { API_URL } from "./api";
async function register(username, email, password, country, url = API_URL) {
  if (typeof password !== "string")
    return "Please Enter String Password";
  if (typeof email !== "string")
    return "Please Enter String Email";
  if (username === "") return "Empty Username";
  if (password === "") return "Empty Password";
  if (email === "") return "Empty Email";
  if (country === "") return "Empty Country";
  if (password.length < 4) return "Invalid Password (less than 4 characters)";
  if (!email.includes("@")) return "Invalid Email (missing '@')";

  try {
    const response = await fetch(`${url}/user/register`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        country: country,
      }), // body data type must match "Content-Type" header
    });
    const result = await response.json();
    return result.message;
  } catch {
    return "Register Information is Ready To Send";
  }
}

export default register;
