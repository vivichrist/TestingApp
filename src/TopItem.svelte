
<script>
  import { content } from './stores.js'
  import { fly } from 'svelte/transition';

  export let title = "";
  export let selnum = 0;
  let open = false;

  const sel_content = () => {
    if (open === true) {
      content.set(0);
      open = false;
      console.log("reset managed content pointer to: 0");
    }
    else {
      content.set(selnum);
      open = true;
      console.log("set managed content pointer to: " + selnum);
    }
  };
</script>

<div role="button" in transition:fly="{{y: -100, duration: 500}}"
                   class="btn btn-primary py-4 border-0"
                   on:click="{sel_content}">
  {title}
</div>


<style>
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
