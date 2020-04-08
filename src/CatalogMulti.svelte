<script context="module">
  let cm_data = [];
  fetch('https://agiledata-core-prd.appspot.com/tables/?apikey=977609nhgfty86HJKhjkl78')
    .then(res => res.json())
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
  export let rng = 6;
  export let name = "Tpch Topic";
  export let type = "tpc";

  let fdata = cm_data.filter(obj => obj.tablename.includes(type))
                     .map(obj => {
    let ret = Object.create(obj);
    ret.tablename = obj.tablename.split(' ')
                       .map( word => word[0].toUpperCase() + word.substr(1) )
                       .join(' ');
    return ret;
  });

  const what_type = (str) => {
    if (str.toLowerCase().includes("event")) {return "events";}
    if (str.toLowerCase().includes("detail")) {return "detail";}
    if (str.toLowerCase().includes("concept")) {return "concept";}
    if (str.toLowerCase().includes("consume")) {return "consume";}
    if (str.toLowerCase().includes("history")) {return "history";}
    return "primary";
  }

  $: limit = Math.ceil(fdata.length / rng);
  console.log(`${name}: ${fdata.length} out of ${cm_data.length}`);
</script>

<h5 class="text-left font-weight-bold mt-5 mb-0 pb-0" style="width: 90vw;">{name}</h5>
<div class="d-flex flex-row oline">
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
        <div class="d-flex bd-highlight justify-content-between">
        {#each fdata.slice(0, Math.min(rng, fdata.length)) as item}
          <div class="card bg-{what_type(item.tablename)}">
            <div class="card-body">
              <h6 class="card-title text-secondary flex-wrap">{item.tablename}</h6>
              <p class="card-text">
              {#each item.tokens as token}
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
        <div class="d-flex bd-highlight justify-content-between">
        {#each fdata.slice(i * rng, Math.min((i + 1) * rng, fdata.length)) as item}
          <div class="card bg-{what_type(item.tablename)}">
            <div class="card-body">
              <h6 class="card-title text-secondary flex-wrap">{item.tablename}</h6>
              <p class="card-text">
              {#each item.tokens as token}
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
  .oline {
    width: 100vw;
    border-top: 3px solid #f1ddff;
    border-bottom: 3px solid #f1ddff;
  }
  .card {
    width: 12rem;
    height: 15rem;
    max-width: 15%
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
  /* @media screen and (min-width: 1260px) {
    .d-flex {
      height: calc(100vh - 4.5rem);
    }
  }
  @media screen and (max-width: 1260px) {
    .d-flex {
      height: calc(100vh - 4.4rem);
    }
  }
  @media screen and (max-width: 970px) {
    .d-flex {
      height: calc(100vh - 4.2rem);
    }
  } */
</style>
