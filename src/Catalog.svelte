<script context="module">
  let data = [];
  fetch('https://agiledata-core-prd.appspot.com/tables/?apikey=977609nhgfty86HJKhjkl78')
    .then(res => res.json())
    .then(jsn => data = jsn.map(obj => {
      for (let key in obj) {
        if (!Array.isArray(obj[key])) {
          obj[key] = obj[key].replace(/_/g, ' '); // remove underscores
        }
      }
      return obj;
    }));
</script>

<script>
  export let rng = 5;
  export let name = "";
  let limit = Math.ceil(data.length / rng);
</script>

<h4 class="text-left mt-5 mb-0 pb-0" style="width: 90vw;">Some Heading for {name}</h4>
<div class="d-flex flex-row">
  <div id="{name}Captions" class="carousel slide" data-interval="false">
    <ol class="carousel-indicators">
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
        <div class="d-flex bd-highlight">
        {#each data.slice(0, Math.min(rng, data.length - 1)) as item}
          <div class="card flex-fill flex-grow-1">
            <div class="card-body">
              <h6 class="card-title"><b>{item.table_name}</b></h6>
              <p class="card-text">{item.tablename}</p>
              <ul class="card-text list-group list-group-horizontal flex-wrap">
              {#each item.tokens as token}
                <li class="list-group-item"> {token} </li>
              {/each}
              </ul>
            </div>
          </div>
        {/each}
        </div>
        </div>
      {:else}
        <div class="carousel-item">
        <div class="d-flex bd-highlight justify-content-between">
        {#each data.slice(i * rng, Math.min((i + 1) * rng, data.length - 1)) as item}
          <div class="card flex-fill flex-grow-1">
            <div class="card-body">
              <h6 class="card-title"><b>{item.table_name}</b></h6>
              <p class="card-text">{item.tablename}</p>
              <ul class="card-text list-group list-group-horizontal flex-wrap">
              {#each item.tokens as token}
                <li class="list-group-item"> {token} </li>
              {/each}
              </ul>
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
  .carousel, .carousel-inner {
    width: 90vw;
    height: 15rem;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }
  .carousel-indicators {
    bottom: 90%;
    margin-bottom: 0;
  }
  .carousel-control-prev {
    left: -5%;
  }
  .carousel-control-next {
    right: -5%;
  }
  ul {
    list-style-image: url('/fontawesome/svgs/solid/info.svg');
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
