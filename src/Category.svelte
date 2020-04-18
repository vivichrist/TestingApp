<script context="module">
  let cat_data = [];
  fetch('https://agiledata-core-prd.appspot.com/tables/?apikey=977609nhgfty86HJKhjkl78')
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response for Catagory views was not ok');
      }
      return res.json()
    })
    .then(jsn => cat_data = jsn.map(obj => {
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

  export let name = "History";
  export let type = "history";

  let rng = Math.floor(window.outerWidth / 240);
  let fdata = cat_data.filter(obj => obj.object.includes(type));

  $: limit = Math.ceil(fdata.length / rng);
  const handleWidth = ()  => {
    rng = Math.floor(window.outerWidth / 240);
  };

  window.$('[data-toggle="popover"]').popover({ container: 'body' });

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
          <div class="card bg-{type}">
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
              <span class="float-right m-0 p-1">
                <button class="btn btn-primary btn-sm p-0 m-0 card-icon">
                  <svg class="bi bi-pencil m-0 p-0" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd"/>
                  </svg>
                </button>
                <button class="btn btn-primary m-0 p-0 btn-sm card-icon">
                  <svg class="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </span>
              <h6 class="card-title heading-{type} flex-wrap">{item.alias}</h6>
              <p class="card-text my-1">
              {#each item.topics as token}
                <span class="border border-ternary bg-light topic rounded px-1 py-0 m-1">
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
  .card-icon {
    padding-left: 0.33em;
  }
  .topic {
    line-height: 2em;
  }
  .heading-concept {
    color: var(--light);
  }
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
