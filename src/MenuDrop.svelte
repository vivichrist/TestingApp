<script>
  import { content } from './stores.js'
  import { fly } from 'svelte/transition';

  export let title = "";
  export let items = "";

  let named_links = [];
  // split items string into pairs of arguments (name, url)
  let re = /\S+\s\S+\s?/g
  named_links = items.match(re)
                     .map(x => x = x.trim()
                                    .split(' ')
                                    .map(t => t = t.replace('_',' ')));

</script>
<!-- the triggering button for the menu dropdown -->
<button type="button" in transition:fly="{{x: -200, duration: 800}}"
        class="btn btn-dark px-3 py-0 mx-4 my-3 dropdown-toggle"
        data-toggle="dropdown">
  {title}
</button>
<!-- the menu that appears under the button -->
<div class="dropdown-menu mt-3 ml-3">
  {#each named_links as [ mname, link ] }
    {#if mname === "divider"}
      <div class="dropdown-divider text-dark"></div>
    {:else}
      <div class="dropdown-item" role="button" on:click="{() => $content = link}">
        {mname}
      </div>
    {/if}
  {/each}
</div>

<style>
  @media screen and (min-width: 1200px) {
    .dropdown-item {
      font-size: 14pt;
    }
    .btn {
      font-size: 14pt;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .dropdown-item {
      font-size: 12pt;
    }
    .btn {
      font-size: 12pt;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media screen and (max-width: 930px) {
    .dropdown-item {
      font-size: 11pt;
    }
    .btn {
      font-size: 11pt;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
