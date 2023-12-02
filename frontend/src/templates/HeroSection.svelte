<script>
  import Link from "../components/Link.svelte";
  import Title from "../components/Title.svelte";
  import SubTitle from "../components/SubTitle.svelte";
</script>

<header>
  <Title>EXPLORE THE FUTURE OF GAMING</Title>
  <SubTitle>Let's revolutionizing the gaming industry!</SubTitle>
  <Link linkTo="contact-us">Contact Us Now!</Link>
</header>

<style>
  header {
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    background-image: url("/herobackground.jpg");
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
</style>
