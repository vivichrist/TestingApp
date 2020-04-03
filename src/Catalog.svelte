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
  let rng = 5;
  let limit = Math.ceil(data.length / rng);
</script>

<div class="d-flex flex-column">
  <div id="dataCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    {#each [...Array(limit - 1).keys()] as i}
      {#if i == 0}
        <li data-target="#dataCaptions" data-slide-to={i} class="active"></li>
      {:else}
        <li data-target="#dataCaptions" data-slide-to={i}></li>
      {/if}
    {/each}
    </ol>
    <div class="carousel-inner">
      {#each [...Array(limit - 1).keys()] as i}
      {#if i == 0}
        <div class="carousel-item active">
        <div class="d-flex justify-content-between">
        {#each data.slice(0, Math.min(rng, data.length - 1)) as item}
          <div class="card flex-fill">
            <div class="card-body">
              <h5 class="card-title">{item.table_name}</h5>
              <p class="card-text">{item.tablename}</p>
              <p class="card-text">
              {#each item.tokens as token, j}
                {j} {token}<br/>
              {/each}
              </p>
            </div>
          </div>
        {/each}
        </div>
        </div>
      {:else}
        <div class="carousel-item">
        <div class="d-flex justify-content-between">
        {#each data.slice(i * rng, Math.min((i + 1) * rng, data.length - 1)) as item}
          <div class="card flex-fill">
            <div class="card-body">
              <h5 class="card-title">{item.table_name}</h5>
              <p class="card-text">{item.tablename}</p>
              <p class="card-text">
              {#each item.tokens as token, j}
                {j} {token}<br/>
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
    <a class="carousel-control-prev" href="#dataCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#dataCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

<!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-flex">
        <div class="card flex-fill">
          <div class="card-body">
            This is some text within a card body.
          </div>
        </div>
        <div class="card flex-fill">
          <div class="card-body">
            This is some text within a card body.
          </div>
        </div>
        <div class="card flex-fill">
          <div class="card-body">
            This is some text within a card body.
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> -->

<style>

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
