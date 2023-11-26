<script>
  import Footer from "../templates/Footer.svelte";
  import Navbar from "../templates/Navbar.svelte";
</script>

<head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
  />
  <link rel="stylesheet" href="/global.css" />
</head>

<Navbar />
<slot />
<Footer />

<style>
</style>
