<script>
  import SubTitle from "../components/Subtitle.svelte";
  import Description from "../components/description.svelte";
  import Title from "../components/title.svelte";
</script>

<section>
  <div>
    <Title>Introducing ARventure</Title>
    <Description>
      Embark on an extraordinary journey with ARVenture, where reality meets
      fantasy. We bring the thrill of adventure gaming to your everyday life
      with our innovative ARVGlass. Transform your surroundings into a magical
      realm and experience gaming like never before.
    </Description>
  </div>

  <video autoplay loop muted>
    <source src="./Table.mp4" type="video/mp4" />
  </video>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 1rem;
  }

  video {
    width: 100%; 
    max-width: 40rem; 
    border-radius: 25px;
    margin-top: 1rem; 
  }

  @media (max-width: 1204px) {
    section {
    flex-direction: column;
  }

    video {
      margin-top: 0.5rem; 
    }
  }
  
</style>
