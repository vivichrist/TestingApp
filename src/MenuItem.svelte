
<script>
  import { content } from './stores.js'
  import { fly, slide } from 'svelte/transition';

  export let title = "";
  export let items = "";
  export let active = false;

  let named_links = [];
  // split items string into pairs of arguments (name, url)
  let re = /\S+\s+\S+\s?/g
  named_links = items.match(re)
                     .map(x => x = x.trim()
                                    .split(' ')
                                    .map(t => t = t.replace('_',' ')));
</script>
<li class="nav-item btn-group" class:active={active}>
  <div role="button" in transition:fly="{{y: -100, duration: 500}}"
      class="btn btn-primary py-4 border-0"
      on:click={() => active = true}
      data-toggle="dropdown">
    {title}
  </div>


  <div class="dropdown-menu bg-light mt-3">
    {#each named_links as [ mname, link ] }
      {#if mname === "divider"}
        <div class="dropdown-divider"></div>
      {:else}
        <div class="dropdown-item text-dark" on:click={() => $content = link}>
          {mname}
        </div>
      {/if}
    {/each}
  </div>
</li>

<style>
  .btn:hover {
    text-shadow: 1px 1px 2px black;
  }
  div {
    z-index: 1;
  }
  @media screen and (min-width: 1260px) {
    .dropdown-item {
      font-size: 14pt;
    }
    .btn {
      font-size: 14pt;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  @media screen and (max-width: 1260px) {
    .dropdown-item {
      font-size: 12pt;
    }
    .btn {
      font-size: 12pt;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media screen and (max-width: 970px) {
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
