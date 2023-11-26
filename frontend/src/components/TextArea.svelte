<script>
  export let placeholder;
  export let value = "";
  export let rows = "10";
  export let cols = "30";
</script>

<textarea bind:value {placeholder} {rows} {cols} />

<style>
  textarea {
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
    resize: none;
  }

  textarea::placeholder {
    color: #ffffffa6;
  }
</style>
