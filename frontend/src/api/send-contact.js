import { API_URL } from "./api";

async function sendContact(
  firstName,
  lastName,
  gender,
  mobile,
  dateOfBirth,
  email,
  language,
  messageBody,
  country,
  url=API_URL
) {
  if (firstName === "") return "Empty First Name";
  if (lastName === "") return "Empty Last Name";
  if (gender === "") return "Empty Gender";
  if (mobile === "") return "Empty Mobile";
  if (dateOfBirth === "") return "Empty Date of Birth";
  if (email === "") return "Empty Email";
  if (language === "") return "Empty Language";
  if (messageBody === "") return "Empty Message";
  if (country === "") return "Empty Country";
  try {
    const response = await fetch(`${url}/user/send_contact`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        mobile: mobile,
        dateOfBirth: dateOfBirth,
        email: email,
        language: language,
        messageBody: messageBody,
        country: country,
      }),
    });
    const result = await response.json();
    return result.message;
  } catch {}
}

export default sendContact;
