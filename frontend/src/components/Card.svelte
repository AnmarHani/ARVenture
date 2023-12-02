<script>
  import Description from "./Description.svelte";
  import Title from "./Title.svelte";
  import Link from "./Link.svelte";
  export let title;
  export let description;
  export let link;
  export let linkTo;
</script>

<div role="article">
  <Title>{title}</Title>
  <Description>{description}</Description>
  <Link {linkTo}>{link}</Link>
</div>

<style>
  div {
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: linear-gradient(30deg, #d10ed133, #4aaef123) padding-box;
    border-radius: 15px;
    max-width: 600px;
    margin: auto;
  }
  @media (max-width: 720px) {
    div {
      max-width: 100%;
    }
  }
</style>
