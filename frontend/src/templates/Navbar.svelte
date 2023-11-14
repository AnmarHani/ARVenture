<script>
  import { goto } from "$app/navigation";

  import Link from "../components/Link.svelte";
  import Button from "../components/Button.svelte";
  import { onMount } from "svelte";
  let user_id;
  onMount(() => {
    user_id = localStorage.getItem("user_id");
  });

  function deleteUser() {
    localStorage.clear();
    goto("/");
    alert("Please Refresh Page")


  }
</script>

<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <img src="/Logo.png" alt="logo" class="logo" />

    <button
      class="navbar-toggler bg-light"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link type="secondary nav-item" linkTo="/">Home</Link>
        <Link type="secondary nav-item" linkTo="/about-us">About us</Link>
        <Link type="secondary nav-item" linkTo="/product">Product</Link>
        {#if user_id}
          <Link type="secondary nav-item" linkTo="/create-tool"
            >Create Tool</Link
          >
          <Link type="secondary nav-item" linkTo="/tools">Favourite Tools</Link>
          <Button onClick={deleteUser}>Logout</Button>
        {:else}
          <Link type="primary nav-item" linkTo="/sign-in">Sign In</Link>
          <Link type="primary nav-item" linkTo="/sign-up">Sign Up</Link>
        {/if}
      </div>
    </div>
  </div>
</nav>

<style>
  nav {
    background-color: black !important;
  }
  .navbar-nav {
    gap: 1rem !important;
  }

  .navbar-toggler {
    background: linear-gradient(45deg, #d10ed19a, #4aaef19a) padding-box;
  }
</style>
