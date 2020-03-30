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

  let asc = { // list of sorting directions
    Dataset: true,
    Identifier: true,
    Project: true,
    Rule_Attributes:  true,
    Rule_Name:  true,
    Rule_Order:  true,
    Rule_Type:  true,
  };
  let ftype = { // list of filter strings, empty string means no filter
    Dataset:"",
    Identifier:"",
    Project:"",
    Rule_Attributes: "",
    Rule_Name: "",
    Rule_Order: "",
    Rule_Type: "",
  };
  // let fields = [
  //   "Dataset",
  //   "Identifier",
  //   "Project",
  //   "Rule_Attributes",
  //   "Rule_Name",
  //   "Rule_Order",
  //   "Rule_Type"]
  // };
  let startrng;
  let endrng;
  let dataseg;

  // filter the data according to the associated input boxes
  $: fdata = data.filter(d => { // data filtered from all the data
      return Object.entries(ftype).every( t => {
        return d[t[0]].search(t[1]) >= 0;
      });
    });
  $: limit = Math.floor(fdata.length / rng); // how many pages of items in total
  $: startrng = Math.max(0, Math.min(limit, pos) - 1) * rng; // start index of the current page
  $: endrng = Math.min(startrng + Number(rng), data.length); // end index of the current page
  $: dataseg = fdata.slice(startrng, endrng); // page data segment from fdata

  const sortByColumn = (col) => {
    data.sort( function(a, b) {
      let x = a[col].toLowerCase();
      let y = b[col].toLowerCase();
      if (x < y) {return asc[col] ? -1 : 1;}
      if (x > y) {return asc[col] ? 1 : -1;}
      return 0;
    });
    asc[col] = !asc[col];
    fdata = data.filter( d => {
      return Object.entries(ftype).every( t => {
        return d[t[0]].search(t[1]) >= 0;
      });
    });
    dataseg = fdata.slice(startrng, endrng);
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
        <!-- <th scope="col">
          <div class="input-group">
            <input type="text" class="form-control"
                   placeholder="Dataset" bind:value={ftype["Dataset"]}>
            <div class="input-group-append" on:click={() => sortByColumn('Dataset')}>
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th> -->
        {#each [...Object.keys(ftype)] as name}
        <RuleColumn name={name} bind:filter={ftype[name]}
                    callback={() => sortByColumn(name)} bind:asc={asc[name]} />
        {/each}
        <!-- <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                   placeholder="Identifier" bind:value={ftype["Identifier"]}>
            <div class="input-group-append" on:click={() => sortByColumn('Identifier')}>
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th> -->
        <!-- <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                   placeholder="Project" bind:value={ftype["Project"]}>
            <div class="input-group-append" on:click={() => sortByColumn('Project')}>
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th> -->
        <!-- <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                   placeholder="Rule Attributes" bind:value={ftype["Rule_Attributes"]}>
            <div class="input-group-append" on:click="{() => sortByColumn('Rule_Attributes')}">
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th> -->
        <!-- <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                    placeholder="Rule Name" bind:value={ftype["Rule_Name"]}>
            <div class="input-group-append" on:click="{() => sortByColumn('Rule_Name')}">
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th> -->
        <!-- <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                    placeholder="Rule Order" bind:value={ftype["Rule_Order"]}>
            <div class="input-group-append" on:click="{() => sortByColumn('Rule_Order')}">
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th> -->
        <!-- <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                   placeholder="Rule Type" bind:value={ftype["Rule_Type"]}>
            <div class="input-group-append" on:click="{() => sortByColumn('Rule_Type')}">
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th> -->
      </tr>
    </thead>
    <tbody>
  {#each dataseg as { Dataset, Identifier, Project,
                    Rule_Attributes, Rule_Name, Rule_Order, Rule_Type }}
    <tr>
      <th class="text-truncate rows">{Dataset}</th>
      <th class="text-truncate rows">{Identifier}</th>
      <th class="text-truncate rows">{Project}</th>
      <th class="text-truncate rows">{Rule_Attributes}</th>
      <th class="text-truncate rows">{Rule_Name}</th>
      <th class="text-truncate rows">{Rule_Order}</th>
      <th class="text-truncate rows">{Rule_Type}</th>
    </tr>
  {/each}
    </tbody>
  </table>
    <Pagination pages={Math.min(5, fdata.length)} bind:pos={pos} bind:limit={limit} bind:rng={rng}/>
  </div>
</div>

<style>
  .d-flex {
    display: flex;
    overflow: auto;
    padding: 1.5rem;
  }
  .inner, table, thead, tbody {
    box-shadow: 0 0 10px #eee2ff;
    border-radius: 0.5rem 0.5rem;
  }
  .rows {
    max-width: 14vw;
    min-width: 3rem;
    overflow: hidden;
  }
  table > thead > tr:first-child > th {
    border: none;
  }
  @media screen and (min-width: 1260px) {
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
  }
  input::placeholder {
    color: #bd8eff;
  }
  input {
    color: black;
    padding: 0.125rem;
    margin: 0.0126rem;
  }
  table {
    box-sizing: border-box;
    max-width: 100%;
  }

</style>
