<script>
  import { popup } from './stores.js'
  import CatCard from './CatCard.svelte';

  export let data = [];
  export let name = "Missing Category";
  export let type = "NoCategory";
  export const filterfn = undefined;

  let rng = Math.floor(window.outerWidth / 235);

  $: limit = Math.ceil(data.length / rng);

  const handleWidth = ()  => {
    rng = Math.floor(window.outerWidth / 235);
  };

  const handlePopup = (e) => {
    window.$($popup).popover('hide');
    window.$(e.target).popover('toggle');
    $popup = e.target;
  };
</script>

<svelte:window on:resize={handleWidth} />

<div class="d-inline-flex flex-fill flex-row justify-content-start"
     style="width: {Math.min(data.length, rng) * 240 + 80}px;">
  <div id="{type}Captions" class="carousel slide flex-fill justify-content-start"
       data-interval="false">
    <h5 class="d-block text-left font-weight-bold mb-0 pb-0">
      {name}
    </h5>
    {#if data.length > rng }
    <ol class="carousel-indicators justify-content-end">
    {#each [...Array(limit).keys()] as i}
        <li data-target="#{type}Captions"
            data-slide-to={i == limit ? 0 : i}
            class="{i === 0 ? 'active' : ''}">
        </li>
    {/each}
    </ol>
    {/if}
    <div class="carousel-inner">
      {#each [...Array(limit).keys()] as i}
        <div class="carousel-item {i == 0 ? 'active' : ''}">
        <div class="d-flex bd-highlight justify-content-start">
        {#each data.slice(rng * i, Math.min(rng * (i + 1), data.length)) as item}
          <CatCard colour={item.object} item={item}
                   handlePopup={handlePopup}
                   {filterfn} />
        {/each}
        </div>
        </div>
      {/each}
    </div>
    {#if data.length > rng }
    <a class="carousel-control-prev" href="#{type}Captions" role="button"
       data-slide="prev" on:click={window.hidePopups}>
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#{type}Captions" role="button"
       data-slide="next" on:click={window.hidePopups}>
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    {/if}
  </div>
</div>

<style>
  .carousel, .carousel-inner {
    height: 18rem;
    margin-right: 0;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .carousel-indicators {
    bottom: 85%;
    margin-right: 5rem;
    padding-right: 0;
    margin-bottom: 0;
  }
  .carousel-control-prev {
    left: -2%;
  }
  .carousel-control-next {
    right: 0;
  }
</style>
