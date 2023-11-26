<script>
  export let type = "primary";
  export let onClick = () => {};
  export let isSubmit = false;
</script>

<button type:submit={isSubmit} class={type} on:click={onClick}>
  <slot />
</button>

<style>
  .primary {
    background: linear-gradient(90deg, #d10ed1, #4aaef1) padding-box;
    transition: all 0.5s ease;
  }

  .primary:hover,
  .full-width:hover,
  .full-width-radius:hover {
    background: linear-gradient(90deg, #d10ed19a, #4aaef19a) padding-box;
    transition: 0.4s;
    transition: all 0.5s ease;
  }

  .secondary {
    background: linear-gradient(0deg, #64cef5, #d10ed1) border-box;
    padding: 0.5rem 30px;
    border: 2px solid transparent;
    border-radius: 5px;
    margin-left: 3rem;
    transition: 0.4s;
    transition: all 0.3s ease;
    width: 75%;
  }

  .more-width {
    width: 6rem;
    font-size: 0.5rem;
  }

  .full-width {
    width: 100%;
    display: block;
  }

  .full-width-radius {
    width: 100%;
    height: 58px;
    background: #fff;
    border: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    background: linear-gradient(90deg, #d10ed1, #4aaef1) padding-box;
  }
</style>
