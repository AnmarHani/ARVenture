<script>
  export let component;

</script>

<h2 bind:this={component}>
  <slot />
</h2>

<style>
  h2 {
    text-align: center;
    color: #ffff;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
</style>
