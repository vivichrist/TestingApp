<script context="module">
  let cm_data = [];
  fetch('https://agiledata-core-prd.appspot.com/tables/?apikey=977609nhgfty86HJKhjkl78')
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response Topic views was not ok');
      }
      return res.json()
    })
    .then(jsn => cm_data = jsn.map(obj => {
      for (let key in obj) {
        if (!Array.isArray(obj[key])) {
          obj[key] = obj[key].replace(/[_.]/g, ' '); // remove underscores and dot
        } else {obj[key].sort();}
      }
      return obj;
    }));
</script>

<script>
  export let name = "TPCH Topic";
  export let type = "TPCH";

  let rng = Math.floor(window.outerWidth / 240);
  let fdata = cm_data.filter(obj => obj.topics.some(t => t.includes(type)));

  const what_type = (str) => {
    if (str.toLowerCase().includes("event")) {return "event";}
    if (str.toLowerCase().includes("detail")) {return "detail";}
    if (str.toLowerCase().includes("concept")) {return "concept";}
    if (str.toLowerCase().includes("consume")) {return "consume";}
    if (str.toLowerCase().includes("history")) {return "history";}
    return "primary";
  }

  $: limit = Math.ceil(fdata.length / rng);
  const handleWidth = ()  => {
    rng = Math.floor(window.outerWidth / 240);
  };
</script>

<svelte:window on:resize={handleWidth} />

<h5 class="text-left font-weight-bold mt-5 mb-0 pb-0" style="width: 90vw;">{name}</h5>
<div class="d-flex flex-row vw-100">
  <div id="{type}Captions" class="carousel slide" data-interval="false">
    <ol class="carousel-indicators justify-content-end">
    {#each [...Array(limit).keys()] as i}
      {#if i == 0}
        <li data-target="#{type}Captions" data-slide-to={i} class="active"></li>
      {:else}
        <li data-target="#{type}Captions" data-slide-to={i == limit ? 0 : i}></li>
      {/if}
    {/each}
    </ol>
    <div class="carousel-inner">
      {#each [...Array(limit).keys()] as i}
      {#if i == 0}
        <div class="carousel-item active">
        <div class="d-flex bd-highlight justify-content-start">
        {#each fdata.slice(0, Math.min(rng, fdata.length)) as item}
          <div class="card bg-{what_type(item.object)}">
            <div class="card-body">
              <h6 class="card-title text-secondary flex-wrap">{item.alias}</h6>
              <p class="card-text">
              {#each item.topics as token}
                <span class="border border-ternary bg-light rounded py-0 px-1 m-1">
                  {token}
                </span>
              {/each}
              </p>
            </div>
          </div>
        {/each}
        </div>
        </div>
      {:else}
        <div class="carousel-item">
        <div class="d-flex bd-highlight justify-content-start">
        {#each fdata.slice((i + 1) * rng >= fdata.length ?
                           fdata.length - rng : i * rng,
                Math.min((i + 1) * rng, fdata.length)) as item}
          <div class="card bg-{what_type(item.object)}">
            <div class="card-body">
              <h6 class="card-title text-secondary flex-wrap">{item.alias}</h6>
              <p class="card-text">
              {#each item.topics as token}
                <span class="border border-ternary bg-light rounded py-0 px-1 m-1">
                  {token}
                </span>
              {/each}
              </p>
            </div>
          </div>
        {/each}
        </div>
        </div>
      {/if}
      {/each}
    </div>
    <a class="carousel-control-prev" href="#{type}Captions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#{type}Captions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

<style>
  h6 {
    font-size: 15pt;
  }
  .card {
    width: 12rem;
    height: 15rem;
    max-width: 200px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .carousel, .carousel-inner {
    width: 90vw;
    height: 16rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }
  .carousel-indicators {
    bottom: 95%;
    margin-right: 0;
    padding-right: 0;
    margin-bottom: 0;
  }
  .carousel-control-prev {
    left: -5%;
  }
  .carousel-control-next {
    right: -5%;
  }
</style>
