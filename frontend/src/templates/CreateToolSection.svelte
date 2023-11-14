<script>
	import AddTool from '../api/addfavitem.js';
	import Button from '../components/Button.svelte';
	import Title from '../components/title.svelte';
	import LabelWithInput from '../components/LabelWithInput.svelte';
    import Dropdown from '../components/Dropdown.svelte';
	let tool_name = ""
	let game_name = "Minecraft"

	async function createTool(){
		await AddTool(localStorage.getItem("user_id"), tool_name, game_name)
		window.location.href = '/tools';

	}
</script>


<main>
		<Title>Your Voice, Your Game Empower AR Gaming with ARVote</Title>
		
		<form>
            <Dropdown bind:value={game_name} label="Choose Game" list={["Minecraft", "No Man's Sky"]} />
			<LabelWithInput placeholder="Diamond Sword" type="text" required bind:value={tool_name}> Choose Tool</LabelWithInput>
			<Button type="primary" onClick={createTool}>Create</Button>
		</form>
</main>

<style>

main {
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    background-image: url("./smartglasses.png");
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }



    form {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
    }

    

	@media(max-width: 550px){

label{
	font-size: 20px;
}




}
@media(max-width: 1260px){
	form {
        flex-direction: column;
        align-items: center;
      justify-content: center;
    }

}
</style>