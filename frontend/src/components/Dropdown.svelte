<script>
  export let label = "";
  export let list = ["Minecraft", "No Man's Sky","Fall Guys","Call Of Duty","TABS","Stick Fight","Terraria","FC 24"];
  export let value;
</script>

<div>
  <label for="game">{label}</label>
  <select name="game" required bind:value>
    {#each list as item}
      <option value={item}>{item}</option>
    {/each}

  </select>
</div>

<style>

select {
		padding: 1rem 2rem;
		border: none;
		border-radius: 4px;
		background-color: #f1f1f1;
	}

	select:invalid {
		color: gray;
	}
</style>
