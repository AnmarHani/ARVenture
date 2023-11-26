import { expect, test } from "vitest";
import register from "./api/register.js";
import login from "./api/login.js";
import fetch from "node-fetch";
global.fetch = fetch;

// Test Case 1
test("(TC1) Ensure Email and Password are Valid, and the Button is clicked", async () => {
  expect(
    await register(
      "validUsername",
      "valid@example.com",
      "validPassword",
      "validCountry",
      "localhost:9090"
    )
  ).toBe("Register Information is Ready To Send");
});

// Test Case 2
test("(TC2) Ensure Email is invalid and Password is Valid, and the Button is clicked", async () => {
  expect(
    await register(
      "validUsername",
      "invalidEmail",
      "validPassword",
      "validCountry"
    )
  ).toBe("Invalid Email (missing '@')");
});

// Test Case 3
test("(TC3) Ensure Email is empty and Password is Valid, and the Button is clicked", async () => {
  expect(
    await register("validUsername", "", "validPassword", "validCountry")
  ).toBe("Empty Email");
});

// Test Case 4
test("(TC4) Ensure Email is valid and Password is invalid, and the Button is clicked", async () => {
  expect(
    await register("validUsername", "valid@example.com", "", "validCountry")
  ).toBe("Empty Password");
});

// Test Case 5
test("(TC5) Ensure Email is valid and Password is empty, and the Button is clicked", async () => {
  expect(
    await register("validUsername", "valid@example.com", "", "validCountry")
  ).toBe("Empty Password");
});

// Test Case 6
test("(TC6) Ensure Email is valid and Password is valid, and the Button is not clicked", () => {
  return "Nothing will happen";
});

/* Integration Testing */

// Test Case 7
test("(TC7) Ensure sending email and password as a string and user does not exist. User should be registered", async () => {
  expect(
    await register(
      "nonexistentUser",
      "nonexistentUser@gmail.com1",
      "fakePassword",
      "fakeCountry"
    )
  ).toBe("User registration successful");
});

// Test Case 8
test("(TC8) Ensure sending email and password as not a string and user exists. User should not be registered", async () => {
  // Assuming there is an existing user with the given details
  expect(await register("existingUser", 0, 0, "fakeCountry")).toBe(
    "Please Enter String Password"
  );
});

// Test Case 9
test("(TC9) Ensure sending email and password as a string and user exists. User should login", async () => {
  expect(await login("existingUser", "fakePassword")).not.toBe(undefined); // access token Recieved (that means there is a user and it is logged in)
});

// Test Case 10
test("(TC10) Ensure sending email and password as not a string and user does not exist. User should not login", async () => {
  expect(await login(0, 0)).toBe("Please Enter String Password");
});
