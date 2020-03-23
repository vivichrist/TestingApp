<script>
  let data = [];
  fetch('https://agiledata-core-prd.appspot.com/rules/?apikey=977609nhgfty86HJKhjkl78')
    .then(res => res.json())
    .then(jsn => data = jsn);
</script>

<div class="container">
  <table class="table table-sm table-bordered table-striped table-hover mx-0 bg-info">
    <thead class="thead-light">
      <tr>
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
    margin-top: 7%;
    top: 7%;
    height: calc(100vh - 14%);
  }
  table {
    border-collapse: separate;
    box-shadow: 0 0 20px rgb(190, 190, 190);
  }
  table, thead, th, tr {
    border-radius: 0.2rem;
  }
  th {
    box-shadow: 0 0 45px #888 inset;
  }
</style>
