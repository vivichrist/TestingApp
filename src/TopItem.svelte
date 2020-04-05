<script>
  import { content } from './stores.js'
  import { fly } from 'svelte/transition';

  export let title = "";
  export let index = 0;
</script>

<div role="button" in transition:fly="{{y: -100, duration: 500}}"
                   class="btn btn-primary py-4 border-0"
                   on:click="{() => content.set(index)}">
  {title}
</div>


<style>
  .btn:hover {
    text-shadow: 1px 1px 2px black;
  }
  @media screen and (min-width: 1260px) {
    div {
      font-size: 14pt;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  @media screen and (max-width: 1260px) {
    div {
      font-size: 12pt;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media screen and (max-width: 970px) {
    div {
      font-size: 11pt;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
