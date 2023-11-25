<script>
  import { goto } from '$app/navigation';

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
    goto("/create-tool")
    window.location.reload()

  }
</script>

<main>
  <div class="content">
    <form action="">
      <SubTitle>Sign in</SubTitle>
      <div class="input-box">
        <InputWithIcon
          placeholder="Username"
          required
          bind:value={username}
          icon=" bx bxs-user"
        />
      </div>
      <div class="input-box">
        <InputWithIcon
          type="password"
          placeholder="Password"
          required
          bind:value={password}
          icon="bx bxs-lock-alt"
        />
      </div>
      <Button type="full-width-radius" onClick={login}>Login</Button>
    </form>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    background-image: url("/plainpurple.png");
    padding-top: 100px;
    padding-bottom: 400px;
  }

  .content {
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    border-radius: 10px;
    padding: 3rem 2rem;
  }

  .content .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
  }
</style>
