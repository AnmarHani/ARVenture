<script>
  import Title from "../components/Title.svelte";
  import Description from "../components/Description.svelte";
</script>

<section>
  <Title>About Us</Title>
  <Description>
    Our mission is to blend the lines between the virtual and the real, creating
    immersive experiences that thrill, excite, and inspire. With ARVGlass, we're
    not just offering a product; we're offering a doorway into countless
    adventures. Join us, and let's redefine gaming together!
  </Description>
</section>

<style>
  section {
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    background-image: url("./plainpurple.png");
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
</style>
