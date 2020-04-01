<script>
  import { content } from './stores.js'
  import { fly } from 'svelte/transition';
  import Icon from './Icon.svelte';

  export let awesome = "";
  export let items = "";

  let named_links = [];
  // split items string into pairs of arguments (name, url)
  let re = /\S+\s\S+\s?/g
  named_links = items.match(re)
                     .map(x => x = x.trim()
                                    .split(' ')
                                    .map(t => t = t.replace('_',' ')));

</script>

<div role="button" in transition:fly="{{x: 150, duration: 800}}"
     class="btn btn-primary btn-lg" data-toggle="dropdown">
  <i class={awesome}></i>
</div>

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
    i {
      font-size: 24pt;
    }
    .btn {
      font-size: 14pt;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .dropdown-item {
      font-size: 12pt;
    }
    i {
      font-size: 20pt;
    }
    .btn {
      font-size: 12pt;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
  @media screen and (max-width: 930px) {
    .dropdown-item {
      font-size: 11pt;
    }
    i {
      font-size: 16pt;
    }
    .btn {
      font-size: 10pt;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
</style>
