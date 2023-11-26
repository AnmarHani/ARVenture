<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12">
  import { goto } from "$app/navigation";
  import createToolAPI from "../api/create-item.js";
  import Button from "../components/Button.svelte";
  import Title from "../components/Title.svelte";
  import LabelWithInput from "../components/LabelWithInput.svelte";
  import Dropdown from "../components/Dropdown.svelte";
  let toolName = "";
  let gameName = "Minecraft";

  async function createTool() {
    await createToolAPI(toolName, gameName);
    goto("/tools");
  }

  let title;

  $: if (title) {
    new Typed(title, {
      strings: ["Your Voice, Your Game Empower AR Gaming with ARVote!"],
      typeSpeed: 70,
      loop: false,
    });
  }
</script>

<section>
  <Title bind:component={title} />
  <form>
    <Dropdown
      bind:value={gameName}
      label="Choose Game"
      list={["Minecraft", "No Man's Sky"]}
    />
    <LabelWithInput
      placeholder="Diamond Sword"
      type="text"
      required
      bind:value={toolName}
    >
      Choose Tool</LabelWithInput
    >
    <Button type="primary" onClick={createTool}>Create</Button>
  </form>
</section>

<style>
  section {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/smartglasses.png");
    align-items: center;
    text-align: center;
    height: 70vh;
    padding: 10% 0;
  }
  form {
    color: white;
    display: flex;
    text-align: center;
    align-items: center;
    margin: 15px auto;
    width: 50%;
    gap: 15px;
  }
  @media (max-width: 1250px) {
    form {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    section {
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url("/smartglasses.png");
      align-items: center;
      text-align: center;
      height: 100vh;
      margin: 5%;
    }
  }
</style>
