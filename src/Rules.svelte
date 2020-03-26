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

  let limit;
  let startrng;
  let endrng;
  let dataseg;
  $: {
    limit = Math.floor(data.length / rng);
    startrng = Math.max(0, Math.min(limit, pos) - 1) * rng;
    endrng = Math.min(startrng + Number(rng), data.length);
    dataseg = data.slice(startrng, endrng);
  }
</script>

<div class="d-flex flex-column">
  <div class="inner">
  <table class="table bg-white">
    <thead class="thead-black">
      <tr class="text-black">
        <th scope="col"><input type="text"  class="form-control" placeholder="Dataset"></th>
        <th scope="col"><input type="text"  class="form-control" placeholder="Identifier"></th>
        <th scope="col"><input type="text"  class="form-control" placeholder="Project"></th>
        <th scope="col"><input type="text"  class="form-control" placeholder="Rule Attributes"></th>
        <th scope="col"><input type="text"  class="form-control" placeholder="Rule Name"></th>
        <th scope="col"><input type="text"  class="form-control" placeholder="Rule Order"></th>
        <th scope="col"><input type="text"  class="form-control" placeholder="Rule Type"></th>
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
  {/each}}
    </tbody>
  </table>
    <Pagination pages={5} bind:pos={pos} bind:limit={limit} bind:rng={rng}/>
  </div>
</div>

<style>
  .d-flex {
    display: flex;
    overflow: auto;
    padding: 1.5rem;
  }
  thead {
    color: black;
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
  table {
    box-sizing: border-box;
  }

</style>
