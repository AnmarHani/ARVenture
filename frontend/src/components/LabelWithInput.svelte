<script>
  export let placeholder;
  export let type = "text";
  export let value = "";
  export let name="tool";
</script>
    <div>
        <label><slot/></label>
         <input type="text" {placeholder} required bind:value >
    </div>

<style>
input {
		padding: 1rem 1rem;
		border: none;
		border-radius: 4px;
		background-color: #f1f1f1;
	}

	input:focus::placeholder {
		color: transparent;
	}
    
</style>
