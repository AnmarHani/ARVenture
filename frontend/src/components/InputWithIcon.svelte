<script>
  export let placeholder;
  export let type = "text";
  export let value = "";
  export let icon;
  export let required = true;
</script>
<div>
	{#if type === "text"}
    <input type="text" placeholder={placeholder} required={required} bind:value={value} />
  {/if}
  {#if type === "password"}
    <input type="password" placeholder={placeholder} required={required} bind:value={value} />
  {/if}
  {#if type === "country"}
  <input type="country" placeholder={placeholder} required={required} bind:value={value} />
{/if}
  <i class={icon} />
</div>

<style>
  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    padding: 20px 45px 20px 20px;
  }

  input::placeholder {
    color: #ffffffa6;
  }

  i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
</style>
