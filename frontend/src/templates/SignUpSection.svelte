<script>
  import { goto } from "$app/navigation";

  import apiRegister from "../api/register.js";
  import Button from "../components/Button.svelte";
  import Dropdown from "../components/Dropdown.svelte";
  import Link from "../components/Link.svelte";
  import SubTitle from "../components/SubTitle.svelte";
  import InputWithIcon from "../components/InputWithIcon.svelte";
  let username;
  let email;
  let password;
  let country;
  let result = {
    message: "",
  };

  async function register() {
    result = await apiRegister(username, email, password, country);
    goto("/sign-in");
  }
</script>

<form on:submit|preventDefault={register}>
  <SubTitle>Create Account</SubTitle>
  <InputWithIcon
    placeholder="Username"
    required
    bind:value={username}
    icon="bx bxs-user"
    min={3}
    max={50}
  />
  <InputWithIcon
    placeholder="Email Address"
    required
    bind:value={email}
    icon=" bx bx-envelope"
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]"
    min={6}
    max={100}
  />
  <InputWithIcon
    type="password"
    placeholder="Password"
    required
    bind:value={password}
    icon="bx bxs-lock-alt"
    min={4}
    max={16}
  />
  <Dropdown
    bind:value={country}
    label="Choose Country"
    list={[
      "Saudi Arabia",
      "United States",
      "Germany",
      "United Kingdom",
      "China",
      "Spain",
      "Pakistan",
      "India",
    ]}
  />

  <div class="error-message" role="group">
    {#if result.error}
      <p>{result.error}</p>
    {/if}
  </div>

  <div class="success-message">
    {#if result.success}
      <p>{result.success}</p>
    {/if}
  </div>

  <Button isSubmit={true} type="full-width-radius">Sign Up</Button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vh;
    margin: 30px auto;
    width: 40vw;
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    background-image: url("/plainpurple.png");
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 30px;
    border-radius: 15px;
  }

  @media only screen and (max-width: 780px) {
    form {
      width: 70vw;
      height: 90vh;
    }
  }
</style>
