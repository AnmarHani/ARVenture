<script>
  import Link from "../components/Link.svelte";
  import Title from "../components/Title.svelte";
  import Description from "../components/Description.svelte";
  import Card from "../components/Card.svelte";
  let descriptionAboutUs =
    " At ARVenture, we're passionate about pushing the boundaries of gaming." +
    "We're a team of innovators, dreamers, and gamers at heart, committed to" +
    "transforming the way you interact with the world.";
  let descriptionARvote =
    "Influence the future of AR gaming with ARVote! Vote for your favorite game elements and help shape our adventure game. Your voice matters. Join us now and create the ultimate AR gaming experience.";
</script>

<section>
  <Card
    title="ARVote"
    description={descriptionARvote}
    linkTo="/sign-in"
    link="Sign In"
  />
  <Card
    title="About US"
    description={descriptionAboutUs}
    linkTo="/about-us"
    link="Learn More"
  />
</section>

<style>
  section {
    color: white;
    display: flex;
    justify-content: space-around;
    margin: 5rem;
    gap: 15px;
  }

  @media (max-width: 768px) {
    section {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
