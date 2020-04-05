<script context="module">
  let data = [];
  fetch('https://agiledata-core-prd.appspot.com/tables/?apikey=977609nhgfty86HJKhjkl78')
    .then(res => res.json())
    .then(jsn => data = jsn.map(obj => {
      for (let key in obj) {
        if (!Array.isArray(obj[key])) {
          obj[key] = obj[key].replace(/_/g, ' '); // remove underscores
        } else {obj[key].sort();}
      }
      return obj;
    }));
</script>

<script>
  export let rng = 7;
  export let name = "";
  export let colour = "ternary";
  let limit = Math.ceil(data.length / rng);
</script>

<h4 class="text-left mt-5 mb-0 pb-0" style="width: 90vw;">Some Heading for {name}</h4>
<div class="d-flex flex-row oline">
  <div id="{name}Captions" class="carousel slide" data-interval="false">
    <ol class="carousel-indicators justify-content-end">
    {#each [...Array(limit - 1).keys()] as i}
      {#if i == 0}
        <li data-target="#{name}Captions" data-slide-to={i} class="active"></li>
      {:else}
        <li data-target="#{name}Captions" data-slide-to={i}></li>
      {/if}
    {/each}
    </ol>
    <div class="carousel-inner">
      {#each [...Array(limit - 1).keys()] as i}
      {#if i == 0}
        <div class="carousel-item active">
        <div class="d-flex bd-highlight justify-content-between">
        {#each data.slice(0, Math.min(rng, data.length - 1)) as item}
          <div class="card bg-{colour} border-secondary">
            <div class="card-body">
              <h6 class="card-title text-white flex-wrap">{item.tablename}</h6>
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
        {#each data.slice(i * rng, Math.min((i + 1) * rng, data.length - 1)) as item}
          <div class="card bg-{colour} border-secondary">
            <div class="card-body">
              <h6 class="card-title text-white flex-wrap">{item.tablename}</h6>
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
    <a class="carousel-control-prev" href="#{name}Captions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#{name}Captions" role="button" data-slide="next">
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
