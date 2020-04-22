<script>
  let titles = [
    {name: "Topics", filterby: "topics"},
    {name: "Events", filterby: ""},
    {name: "Concepts", filterby: ""},
    {name: "Details", filterby: ""},
    {name: "History", filterby: ""},
    {name: "Consume", filterby: ""},
    {name: "Recently Added", filterby: ""},
    {name: "Most Viewed", filterby: ""},
    {name: "My Lists", filterby: ""}
  ];
  export let filterfn = undefined;
</script>

<ul class="nav sticky-top vw-100 nav-fill bg-white border-bottom border-ternary">
  {#each titles as item}
    <li class="nav-item" on:click={() => filterfn(item.filterby)}>
      <span role="button" class="nav-link under-dark">
        {item.name}
      </span>
    </li>
  {:else}
    <li class="nav-item">
      <span role="button" class="nav-link under-dark">No Data</span>
    </li>
  {/each}
</ul>

<style>
  ul {
    top: 4.5rem;
  }
</style>