<script>
  export let placeholder;
  export let type = "text";
  export let value = "";
  export let icon;
  export let required = true;
  export let pattern;
  export let max = 150;
  export let min = 10;
</script>

<div>
  {#if type === "text"}
    <input
      maxlength={max}
      minlength={min}
      {pattern}
      type="text"
      {placeholder}
      {required}
      bind:value
    />
  {/if}
  {#if type === "email"}
    <input
      maxlength={max}
      minlength={min}
      {pattern}
      type="email"
      {placeholder}
      {required}
      bind:value
    />
  {/if}
  {#if type === "password"}
    <input
      maxlength={max}
      minlength={min}
      {pattern}
      type="password"
      {placeholder}
      {required}
      bind:value
    />
  {/if}
  {#if type === "date"}
    <input
      maxlength={max}
      minlength={min}
      {pattern}
      type="date"
      {placeholder}
      {required}
      bind:value
    />
  {/if}
  {#if type === "tel"}
    <input
      maxlength={max}
      minlength={min}
      {pattern}
      type="tel"
      {placeholder}
      {required}
      bind:value
    />
  {/if}

  <i class={icon} />
</div>

<style>
  div {
    position: relative;
  }
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
