<script>
  let data = [];
  fetch('https://agiledata-core-prd.appspot.com/rules/?apikey=977609nhgfty86HJKhjkl78')
    .then(res => res.json())
    .then(jsn => data = jsn);
</script>

<div class="container-flex">
  <table class="table table-sm table-hover p-1 bg-white">
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

<style>
  div {
    overflow: auto;
    margin-top: 7%;
    margin-left: 7%;
    margin-right: 7%;
    margin-bottom: 0;
    padding-bottom: 0;
    top: 7%;
    height: 60%;
    box-shadow: 0 0 20px rgb(180, 180, 180);
  }
  table, thead, div {
    border-radius: 0.5rem 0.5rem;
  }
</style>
