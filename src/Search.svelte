<script>
  import { fly } from 'svelte/transition';
  let visible = false;
  let placeholder = "Search";

  const focus = () => {
    visible = true;
    placeholder = "";
  }

  const blur = () => {
    visible = false;
    setTimeout( () => placeholder = "Search", 480);
  }
</script>

<div id="search">
  {#if visible}
  <label in transition:fly="{{ y: 40, duration: 500, opacity: 1 }}" for="searchbox" class="text-dark">
    Search
  </label>
  {/if}
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text bg-light">
        <i class="fas fa-search text-dark"></i>
      </span>
    </div>
    <input id="searchbox" on:focus="{focus}" on:blur="{blur}"
           type="text" class="form-control" placeholder="{placeholder}">
  </div>
</div>

<style>
  #search {
    text-align: left;
  }
  label {
    z-index: 6;
    position: absolute;
    padding-left: 7.2rem;
  }
  .trans::before {
    z-index: 6;
  }
  .input-group {
    padding-top: 1.78rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
</style>
