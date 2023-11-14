<script>
  import { goto } from '$app/navigation';

  import apiRegister from "../api/register.js";
  import Button from "../components/Button.svelte";
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
    goto("/")
  }
</script>

<body>
  <div class="container">
    <div class="content">
      <form action="">
        <SubTitle>Create Account</SubTitle>
        <div class="input-box">
          <InputWithIcon
            placeholder="Name"
            required
            bind:value={username}
            icon=" bx bxs-user"
          />
        </div>
        <div class="input-box">
          <InputWithIcon
            placeholder="Email Address"
            required
            bind:value={email}
            icon=" bx bx-envelope"
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
        <div class="input-box">
          <InputWithIcon
            type="country"
            placeholder="Country"
            required
            bind:value={country}
            icon="bx bx-world"
          />
        </div>

        <div class="error-message">
          {#if result.error}
            <p>{result.error}</p>
          {/if}
        </div>

        <div class="success-message">
          {#if result.success}
            <p>{result.success}</p>
          {/if}
        </div>

        <Button type="full-width-radius" onClick={register}>Sign Up</Button>
      </form>
    </div>
  </div>
</body>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/plainpurple.png");
    padding-top: 100px;
    padding-bottom: 400px;
  }

  .content {
    width: 420px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    border-radius: 10px;
    padding: 2rem 2rem;
  }

  .content .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
  }
</style>
