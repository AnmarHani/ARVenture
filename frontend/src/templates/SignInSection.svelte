<script>
  import { goto } from "$app/navigation";
  import apiLogin from "../api/login.js";
  import Button from "../components/Button.svelte";
  import InputWithIcon from "../components/InputWithIcon.svelte";
  import SubTitle from "../components/SubTitle.svelte";
  let username;
  let password;

  let result = "";

  async function login() {
    result = await apiLogin(username, password);
    localStorage.setItem("access_token", result);
    goto("/create-tool");
    window.location.reload();
  }
</script>

<form on:submit|preventDefault={login}>
  <SubTitle>Sign in</SubTitle>
  <InputWithIcon
    placeholder="Username"
    required
    bind:value={username}
    icon="bx bxs-user"
    min={3}
    max={50}
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
  <Button isSubmit={true} type="full-width-radius">Login</Button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vh;
    margin: 30px auto;
    width: 40vw;
    height: 70vh;
    background-repeat: no-repeat;
    color: white;
    background-size: cover;
    background-image: url("/plainpurple.png");
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 15px;
    border-radius: 15px;
  }

  @media only screen and (max-width: 780px) {
    form{
      width: 70vw;

    }
  }
</style>
