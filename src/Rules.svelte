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
  import Pagination from "./Pagination.svelte";

  export let rng = 10;
  export let pos = 1;

  let ftype = {
    Dataset:"",
    Identifier:"",
    Project:"",
    Rule_Attributes: "",
    Rule_Name: "",
    Rule_Order: "",
    Rule_Type: "",
  };
  let fdata;
  let limit;
  let startrng;
  let endrng;
  let dataseg;

  // filter the data according to the associated input boxes
  $: {
    fdata = data.filter(d => {
      return Object.entries(ftype).every( t => {
        return d[t[0]].search(t[1]) >= 0;
      });
    });
    limit = Math.floor(fdata.length / rng);
    startrng = Math.max(0, Math.min(limit, pos) - 1) * rng;
    endrng = Math.min(startrng + Number(rng), data.length);
    dataseg = fdata.slice(startrng, endrng);
  };

  const sortByColumn = (col) => {
    console.log(`Sort called with: ${col}`);
    data.sort( function(a, b) {
      let x = a[col].toLowerCase();
      let y = b[col].toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    fdata = data.filter(d => {
      return Object.entries(ftype).every( t => {
        return d[t[0]].search(t[1]) >= 0;
      });
    });
    dataseg = fdata.slice(startrng, endrng);
  };
</script>

<div class="d-flex flex-column">
  <div class="inner">
  <table class="table bg-white">
    <thead class="thead-black">
      <tr>
        <th scope="col">
          <div class="input-group">
            <input type="text" class="form-control"
                   placeholder="Dataset" bind:value={ftype["Dataset"]}>
            <div class="input-group-append">
              <button class="btn btn-light px-0" type="button" on:click={() => sortByColumn('Dataset')}>
                <i class="fa fa-sort"></i>
              </button>
            </div>
          </div>
        </th>
        <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                   placeholder="Identifier" bind:value={ftype["Identifier"]}>
            <div class="input-group-append" on:click={() => sortByColumn('Identifier')}>
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th>
        <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                   placeholder="Project" bind:value={ftype["Project"]}>
            <div class="input-group-append" on:click={() => sortByColumn('Project')}>
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th>
        <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                   placeholder="Rule Attributes" bind:value={ftype["Rule_Attributes"]}>
            <div class="input-group-append" on:click="{() => sortByColumn('Rule_Attributes')}">
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th>
        <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                    placeholder="Rule Name" bind:value={ftype["Rule_Name"]}>
            <div class="input-group-append" on:click="{() => sortByColumn('Rule_Name')}">
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th>
        <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                    placeholder="Rule Order" bind:value={ftype["Rule_Order"]}>
            <div class="input-group-append" on:click="{() => sortByColumn('Rule_Order')}">
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th>
        <th scope="col">
          <div class="input-group align-self-center">
            <input type="text" class="form-control"
                   placeholder="Rule Type" bind:value={ftype["Rule_Type"]}>
            <div class="input-group-append" on:click="{() => sortByColumn('Rule_Type')}">
              <span class="input-group-text px-0">
                <i class="fa fa-sort"></i>
              </span>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
  {#each dataseg as { Dataset, Identifier, Project,
                    Rule_Attributes, Rule_Name, Rule_Order, Rule_Type }}
    <tr>
      <th>{Dataset}</th>
      <th>{Identifier}</th>
      <th>{Project}</th>
      <th>{Rule_Attributes}</th>
      <th>{Rule_Name}</th>
      <th>{Rule_Order}</th>
      <th>{Rule_Type}</th>
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
  }
  table {
    box-sizing: border-box;
  }

</style>
