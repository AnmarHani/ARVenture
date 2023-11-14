<script>
  import Button from "../components/Button.svelte";
  import Title from "../components/Title.svelte";
  import SubTitle from "../components/SubTitle.svelte";
</script>

<header>
  <div>
    <Title>EXPLORE THE FUTURE OF GAMING</Title>
    <SubTitle>Let's revolutionizing the gaming industry!</SubTitle>
    <Button type="primary">Learn More!</Button>
  </div>
</header>

<style>
  header {
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    background-image: url("/herobackground.jpg");
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
</style>
