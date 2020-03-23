<script>
  import { content } from './stores.js'
  import { fly, slide } from 'svelte/transition';

  export let title = "";
  export let items;
  let named_links = [];
  // split items string into pairs of arguments (name, url)
  let re = /\S+\s\S+\s?/g
  named_links = items.match(re)
                     .map(x => x = x.trim()
                                    .split(' ')
                                    .map(t => t = t.replace('_',' ')));

  const sel_content = (num) => {
    content.set(num);
    console.log("set content pointer to: " + num);
  };
</script>

<button type="button" in transition:fly="{{x: -200, duration: 800}}" class="btn btn-dark px-3 py-0 mx-4 my-3 dropdown-toggle" data-toggle="dropdown">
  {title}
</button>
<div class="dropdown-menu mt-3 ml-3">
  {#each named_links as [ mname, link ] }
    {#if mname === "divider"}
      <div class="dropdown-divider text-light"></div>
    {:else}
      <div role="button" on:click="{sel_content(link)}" class="dropdown-item">{mname}</div>
    {/if}
  {/each}
</div>

<style>
  .dropdown-menu {
    box-shadow: 0 0 60px #444 inset;
  }
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
