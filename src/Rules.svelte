<script context="module">
  let data = [];
  fetch('https://agiledata-core-prd.appspot.com/rules/?apikey=977609nhgfty86HJKhjkl78')
    .then(res => res.json())
    .then(jsn => data = jsn);
</script>

<div class="d-flex flex-column">
  <div class="inner">
  <table class="table table-sm table-hover bg-white">
    <thead class="thead-black">
      <tr class="text-black">
        <th scope="col">#</th>
        <th scope="col">Dataset</th>
        <th scope="col">Identifier</th>
        <th scope="col">Project</th>
        <th scope="col">Rule_Attributes</th>
        <th scope="col">Rule_Name</th>
        <th scope="col">Rule_Order</th>
        <th scope="col">Rule_Type</th>
      </tr>
    </thead>
    <tbody>
  {#each data as { Dataset, Identifier, Project,
                    Rule_Attributes, Rule_Name, Rule_Order, Rule_Type }, i}
    <tr>
      <th scope="row">{i}</th>
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
  </div>
</div>

<style>
  .d-flex {
    display: flex;
    overflow: auto;
    padding: 3rem;
  }
  thead {
    color: black;
  }
  .inner, table, thead, tbody {
    box-shadow: 0 0 10px #eee2ff;
    border-radius: 0.5rem 0.5rem;
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
