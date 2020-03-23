
<script>
  import { content } from './stores.js'
  import { fly } from 'svelte/transition';

  export let title = "";
  export let sel_num = 0;

  const sel_content = (num) => {
    content.set(num);
    console.log("set managed content pointer to: " + num);
  };
</script>

<div role="button" in transition:fly="{{x: -100, duration: 500}}"
                   class="bg-light btn btn-block btn-lg text-dark btn-outline-primary border-info py-0 my-2"
                   on:click="{sel_content(sel_num)}">
  {title}
</div>


<style>
  div {
    width: 250px;
    padding-left: 0;
    padding-right: 0;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px lightsteelblue inset;
  }
</style>
