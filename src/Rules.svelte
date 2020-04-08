<script context="module">
  let data = [];
  fetch('https://agiledata-core-prd.appspot.com/rules/?apikey=977609nhgfty86HJKhjkl78')
    .then(res => res.json())
    .then(jsn => data = jsn.map(obj => {
      for (let key in obj) {
        obj[key] = obj[key].replace(/_/g, ' '); // remove underscores
      }
      return obj;
    }));
</script>

<script>
  import RuleColumn from "./RuleColumn.svelte";
  import Pagination from "./Pagination.svelte";

  export let rng = 10; // how many items to display per page
  export let pos = 1; // which page to view
  // list of sorting directions
  let sorting = 2;
  let column = "Dataset";
  // list of filter strings, empty string means no filter
  let ftype = {
    Dataset:"",
    Identifier:"",
    Project:"",
    Rule_Attributes: "",
    Rule_Name: "",
    Rule_Order: "",
    Rule_Type: "",
  };

  // filter the data according to the associated input boxes
  $: fdata = data.filter(d => { // data filtered from all the data
      return Object.entries(ftype).every( t => {
        return d[t[0]].search(t[1]) >= 0;
      });
    });
  // how many pages of items in total.
  $: limit = Math.ceil(fdata.length / rng);
  // start index of the current page.
  $: startrng = Math.max(0, Math.min(limit, pos) - 1) * rng;
  // end index of the current page.
  $: endrng = Math.min(startrng + Number(rng), fdata.length);
  // page data segment from fdata.
  $: dataseg = fdata.slice(startrng, endrng);

  const sortByColumn = (col) => {
    if (column === col) {
      sorting = sorting ? 0 : 1;
    } else {
      column = col;
      sorting = 0;
    }
    if (sorting < 2) {
      data.sort( function(a, b) {
        let x = a[col].toLowerCase();
        let y = b[col].toLowerCase();
        if (x < y) {return sorting === 0 ? -1 : 1;}
        if (x > y) {return sorting === 0  ? 1 : -1;}
        return 0;
      });
      fdata = data.filter( d => {
        return Object.entries(ftype).every( t => {
          return d[t[0]].search(t[1]) >= 0;
        });
      });
      dataseg = fdata.slice(startrng, endrng);
    }
  };
</script>

<div class="d-flex flex-column">
  <div class="alert alert-success m-0 py-1" role="button">
    <i class="fa fa-plus"></i> Add a Rule
  </div>
  <div class="inner table-responsive">
  <table class="table bg-white">
    <thead class="thead-black">
      <tr>
        {#each [...Object.keys(ftype)] as name}
        <RuleColumn name={name} bind:filter={ftype[name]} bind:column={column}
                    callback={() => sortByColumn(name)} bind:sort={sorting} />
        {/each}
      </tr>
    </thead>
    <tbody>
    {#each dataseg as seg}
      <tr>
      {#each [...Object.keys(ftype)] as name}
        <th class="text-truncate rows">{seg[name]}</th>
      {/each}
      </tr>
    {/each}
    </tbody>
  </table>
    <Pagination pages={Math.min(5, fdata.length)} bind:pos={pos}
                bind:limit={limit} bind:rng={rng}/>
  </div>
</div>

<style>
  .d-flex {
    display: flex;
    overflow: auto;
    padding: 0.8rem;
  }
  .inner {
    background-color: white;
    box-shadow: 0 0 10px #eee2ff;
    border-radius: 0.5rem 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  /* table {
  } */
  .rows {
    min-width: 3rem;
    overflow: hidden;
    font-weight: 400;
    color: #505050;
    line-height: 2.5rem;
  }
  @media screen and (min-width: 1260px) {
    .d-flex {
      height: calc(100vh - 4.5rem);
    }
    .rows {
      max-width: 14vw;
      font-size: 12pt;
    }
  }
  @media screen and (max-width: 1260px) {
    .d-flex {
      height: calc(100vh - 4.4rem);
    }
    .rows {
      max-width: 10vw;
      font-size: 10pt;
    }
  }
  @media screen and (max-width: 970px) {
    .d-flex {
      height: calc(100vh - 4.2rem);
    }
    .rows {
      max-width: 8vw;
      font-size: 9pt;
    }
  }
  table {
    box-sizing: border-box;
    max-width: 100%;
  }

</style>
