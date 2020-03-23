<script>
  import { content } from './stores.js';
  import Search from './Search.svelte';
  import Rules from './Rules.svelte';

  let index = 0;

  const unsubscribe = content.subscribe(value => {
    index = value;
  });
</script>

{#if index == 0}
  <div class="container-flex">
    <div class="row align-items-center justify-content-center">
      <div class="w-100 col-md-auto col-sm-auto">
        <Search />
      </div>
    </div>
  </div>
{:else if index > 0}
  <Rules />
{/if}
