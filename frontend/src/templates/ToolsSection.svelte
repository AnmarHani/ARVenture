<script>
  import Button from "../components/Button.svelte";
  import { onMount } from "svelte";
  import getAllItemsAPI from "../api/get-all-items.js";
  import likeItemAPI from "../api/like-item.js";
  import dislikeItemAPI from "../api/dislike-item.js";
  import Title from "../components/Title.svelte";
  import SubTitle from "../components/SubTitle.svelte";

  let cards = [
    {
      username: "Loading..",
      game_name: "Loading..",
      tool_name: "Loading..",
      likes: 0,
      dislikes: 0,
    },
  ];

  async function like(id, likes) {
    await likeItemAPI(id, likes);
    window.location.reload();
  }

  async function dislike(id, likes) {
    await dislikeItemAPI(id, likes);
    window.location.reload();
  }

  async function getCards() {
    cards = await getAllItemsAPI();
  }

  onMount(() => {
    getCards();
  });
</script>

<section>
  {#await cards}
    <SubTitle>Loading...</SubTitle>
  {:then cards}
    <SubTitle>Total Items: {cards.length}</SubTitle>
    {#each cards as card}
      <div class="card">
        <div class="content">
          <i class="bx bx-user" />
          <div class="names">
            <SubTitle>{card.username}</SubTitle>
            <p>{card.game_name}</p>
            <p>{card.tool_name}</p>
          </div>
        </div>

        <div class="buttons-container">
          <Button
            type="secondary more-width"
            onClick={() => like(card.id, card.likes + 1)}
            >{card.likes} Like</Button
          >
          <Button
            type="secondary more-width"
            onClick={() => dislike(card.id, card.likes + 1)}
            >{card.dislikes} Dislike</Button
          >
        </div>
      </div>
    {/each}
  {/await}
</section>

<style>
  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  div {
    color: white;
  }

  section {
    color: white;
    background: linear-gradient(#d10ed125, #4aaef121) padding-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.3rem;
    width: 70%;
    justify-content: center;
    margin: 15px auto;
  }

  .card {
    position: relative;
    background: linear-gradient(20deg, rgba(209, 14, 209, 0.171), #4aaef14b)
      padding-box;
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    height: fit-content;
    margin: 2rem 0;
  }

  .content {
    display: flex;
    align-items: center;
    color: white;
    overflow-x: hidden;
  }

  i {
    color: white;
    font-size: 50px;
    padding-right: 15px;
  }

  @media only screen and (max-width: 780px) {
    section {
      width: 100%;
    }
    .card {
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .content {
      display: flex;
    }
  }
</style>
