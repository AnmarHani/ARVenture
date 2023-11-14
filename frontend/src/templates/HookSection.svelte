<script>
  import Link from "../components/Link.svelte";
  import Title from "../components/title.svelte";
  import Description from "../components/description.svelte";
  import Card from "../components/Card.svelte";
  let descriptionAboutUs =" At ARVenture, we're passionate about pushing the boundaries of gaming."+
  "We're a team of innovators, dreamers, and gamers at heart, committed to"+
  "transforming the way you interact with the world."
  let descriptionARvote =" At ARVenture, we're passionate about pushing the boundaries of gaming."+
  "We're a team of innovators, dreamers, and gamers at heart, committed to"+
  "transforming the way you interact with the world."
</script>
<section>
    <Card title = "ARVote" description={descriptionARvote} linkTo="/sign-in" link="Sign In"/>
    <Card title = "About US" description={descriptionAboutUs} linkTo="/about-us" link="Learn More"/>
</section>


<style>
  section {
    color: white;
    display: flex;
    justify-content: space-around;
    margin: 5rem;
  }


  @media (max-width: 768px) {
    section {
      flex-direction: column;
      align-items: center;
    }
  }
  
</style>
