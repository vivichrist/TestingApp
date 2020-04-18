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
  import { popup } from './stores.js'

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

  const hidePopups = () =>
        window.$('[data-toggle="popover"]').popover('hide');

  const handlePopup = (e) => {
    window.$($popup).popover('hide');
    window.$(e.target).popover('toggle');
    $popup = e.target;
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
        <div class="carousel-item {i == 0 ? 'active' : ''}">
        <div class="d-flex bd-highlight justify-content-start">
        {#each fdata.slice(0, Math.min(rng, fdata.length)) as item}
          <div class="card bg-{what_type(item.object)}">
            <div class="card-body m-0 p-2" data-toggle="popover" title="{item.alias}"
                 data-trigger="focus" data-template={`<div class="popover dropdown-menu">
        <h3 class="popover-header"></h3>
        <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Concept </div>
        <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Detail </div>
        <div class="dropdown-item text-dark"> View Events </div>
        <div class="dropdown-divider"></div>
        <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Change Rules </div>
        <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Validation Rules </div>
        <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Consume Rules </div>
        <div class="dropdown-divider"></div>
        <div class="dropdown-item text-dark"> Create Concept </div>
        <div class="dropdown-item text-dark"> Create Detail </div>
        <div class="dropdown-item text-dark"> Create Event </div>
        <div class="dropdown-item text-dark"> Create Rule </div>
        </div>`} data-html={true}
                 data-content={item.alias.split(' ')[0]}
                 on:contextmenu|preventDefault={handlePopup}>
              <h6 class="card-title heading-{what_type(item.object)} flex-wrap">{item.alias}</h6>
              <p class="card-text">
              {#each item.topics as token}
                <span class="border border-ternary bg-light topic px-1 py-0 m-1 rounded">
                  {token}
                </span>
              {/each}
              </p>
            </div>
          </div>
        {/each}
        </div>
        </div>
      {/each}
    </div>
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
  </div>
</div>

<style>
  h6 {
    font-size: 15pt;
  }
  .topic {
    line-height: 2em;
  }
  .heading-concept {
    color: var(--light);
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
