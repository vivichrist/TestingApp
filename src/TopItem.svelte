<script>
  import { content } from './stores.js'
  import { fly } from 'svelte/transition';

  export let item = 0;
</script>

<div role="button" in transition:fly="{{y: -100, duration: 500}}"
                  on:click="{() => content.set(item)}"
                  class="nav-link btn btn-primary py-3 px-5">
  <slot>???</slot>
</div>


<style>
  .btn:hover {
    text-shadow: 1px 1px 2px black;
  }
  .btn {
    border-radius: 0;
    box-sizing: border-box;
    z-index: 1;
  }
  @media screen and (min-width: 1260px) {
    .btn {
      font-size: 14pt;
    }
  }
  @media screen and (max-width: 1260px) {
    .btn {
      font-size: 12pt;
    }
  }
  @media screen and (max-width: 970px) {
    .btn {
      font-size: 11pt;
    }
  }
</style>
