<script>
  import Link from "../components/Link.svelte";
  import Title from "../components/Title.svelte";
  import Description from "../components/Description.svelte";
</script>

<section>
  <img src="/glasses.png" alt="Black glasses" class="glasses" />

  <!-- use card with title and description and button -->
  <div>
    <Title>ARV glasses</Title>
    <Description>
      Experience a new reality with ARVGlass, Elevate your style and transform
      your surroundings into an immersive gaming experience and discover
      ARVGlass and unlock limitless adventures.
    </Description>
    <div class="button-container">
      <Link linkTo="/product">Pre-order Now!</Link>
    </div>
  </div>
</section>

<style>
  section {
    background: linear-gradient(160deg, #d10ed133, #4aaef123) padding-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 2rem;
    padding: 2rem;
    border-radius: 15px;
    box-sizing: border-box;
  }

  img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 100%;
    transition: all 0.38s ease;

  }

  img:hover {
    transform: scale(.9);
    transition: all 0.5s ease;
    cursor: pointer;
    -webkit-text-fill-color: transparent;
  }
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  @media (max-width: 1204px) {
    section {
      flex-direction: column;
      padding: 1rem;
    }

    img {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .button-container {
      margin-top: 0.5rem;
    }
  }
</style>
